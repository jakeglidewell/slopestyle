import assert from "node:assert/strict";
import test from "node:test";

import {
  LEG_COMPRESS,
  LEG_REACH,
  smoothHeight,
  stepLegs,
} from "../src/rider/legs.js";

const GRAVITY = 9.81;
const STEP = 1 / 120;
const standing = (overrides = {}) =>
  ({ onSnow: true, ride: 0, height: 0, velocity: 0, leg: 0, ...overrides });

/** Carry the legs along a line at a steady horizontal speed and keep every step. */
const travel = ({ snowAt, carryAt = snowAt, speed = 25, seconds = 2, step = STEP,
  start = 0, legs = standing(), controls = {} }) => {
  const trace = [];
  let state = legs;
  let downhill = start;
  for (let time = 0; time < seconds - 1e-9; time += step) {
    const next = downhill + speed * step;
    const before = state;
    state = stepLegs(state, {
      carryFrom: carryAt(downhill),
      carryTo: carryAt(next),
      snowFrom: snowAt(downhill),
      snowTo: snowAt(next),
    }, typeof controls === "function" ? controls(time) : controls, step);
    downhill = next;
    trace.push({ ...state, before, carry: carryAt(downhill), downhill,
      snow: snowAt(downhill), time: time + step });
  }
  return trace;
};

test("the smooth line of a straight slope is the slope itself", () => {
  const slope = (across, downhill) => -0.4 * downhill + 0.1 * across;
  assert.ok(Math.abs(smoothHeight(slope, 2, 50) - slope(2, 50)) < 1e-9);
});

test("the smooth line drops the ripples and keeps the long rollers", () => {
  const ripples = (_across, d) => 0.24 * Math.sin(d * 0.38) +
    0.1 * Math.sin(d * 1.07 + 0.8) + 0.05 * Math.sin(d * 2.31 + 1.7);
  const roller = (_across, d) => 0.22 * Math.sin(d * 0.075);
  let ripple = 0;
  let rolled = 0;
  for (let d = 50; d < 250; d += 0.5) {
    ripple = Math.max(ripple, Math.abs(smoothHeight(ripples, 0, d)));
    rolled = Math.max(rolled, Math.abs(smoothHeight(roller, 0, d)));
  }

  assert.ok(ripple < 0.02, `ripples left ${ripple.toFixed(3)} m in the smooth line`);
  assert.ok(rolled > 0.2, `a long roller was flattened to ${rolled.toFixed(3)} m`);
});

test("the body settles on a steady slope with one g on the board", () => {
  const slope = (d) => -0.4 * d;
  const last = travel({ snowAt: slope, legs: standing({ velocity: -10 }) }).at(-1);

  assert.equal(last.onSnow, true);
  assert.ok(Math.abs(last.ride) < 0.01);
  assert.ok(Math.abs(last.leg) < 0.01);
  assert.ok(Math.abs(last.load - 1) < 0.02);
  assert.equal(last.air, 0);
});

test("the body holds its line while the snow ripples under it", () => {
  const carryAt = (d) => -0.36 * d;
  const snowAt = (d) => carryAt(d) + 0.2 * Math.sin(d * 1.07);
  const trace = travel({ carryAt, snowAt, seconds: 3, legs: standing({ velocity: -9 }) });
  const rides = trace.map((step) => step.ride);
  const legs = trace.map((step) => step.leg);

  assert.ok(trace.every((step) => step.onSnow));
  assert.ok(Math.max(...rides) - Math.min(...rides) < 0.03,
    `the body moved ${(Math.max(...rides) - Math.min(...rides)).toFixed(3)} m`);
  assert.ok(Math.max(...legs) - Math.min(...legs) > 0.35);
});

test("the legs never pull the body down faster than gravity", () => {
  // The hill bends away at 25 m/s² of fall, far more than free fall can follow.
  const hill = (d) => -0.4 * d - (d > 20 ? 0.02 * (d - 20) ** 2 : 0);
  const trace = travel({ snowAt: hill, legs: standing({ velocity: -10 }) });

  for (const step of trace) {
    const acceleration = (step.velocity - step.before.velocity) / STEP;
    assert.ok(acceleration >= -GRAVITY - 1e-6, `pulled down at ${acceleration} m/s²`);
  }
  assert.ok(trace.some((step) => step.liftoff));
  assert.ok(trace.at(-1).air > 0.5);
});

test("snow that drops away beyond leg reach leaves the board in the air", () => {
  const ledge = (d) => d < 5 ? 0 : -1;
  const trace = travel({ snowAt: ledge, seconds: 0.4 });
  const liftoff = trace.find((step) => step.liftoff);

  assert.ok(liftoff && liftoff.time < 0.4);
  assert.equal(liftoff.onSnow, false);
  assert.ok(liftoff.leg <= LEG_REACH + 1e-9);
  assert.ok(trace.at(-1).air > 0);
});

test("near full compression the snow carries the body up a kicker", () => {
  const carryAt = () => 0;
  const snowAt = (d) => 0.7 * Math.min(1, d / 25) ** 2;
  const trace = travel({ carryAt, snowAt, seconds: 1 });
  const top = trace.at(-1);

  assert.ok(trace.every((step) => step.onSnow && step.height - step.snow >= -LEG_COMPRESS - 1e-9));
  assert.ok(top.leg < -0.25 && top.leg > -LEG_COMPRESS);
  assert.ok(top.height > 0.25);
});

const lip = 28;
const kicker = (d) => d < lip
  ? 1.2 * (d / lip) ** 2.35
  : 1.2 - 1.55 * Math.min(1, (d - lip) / 6) ** 2 * (3 - 2 * Math.min(1, (d - lip) / 6));
const overKicker = (controls = {}) =>
  travel({ carryAt: () => 0, snowAt: kicker, speed: 26, seconds: 2, controls });

test("a lip throws the rider into the air within two metres", () => {
  const liftoff = overKicker().find((step) => step.liftoff);

  assert.ok(liftoff, "the lip never launched the rider");
  assert.ok(liftoff.downhill >= lip - 0.3 && liftoff.downhill < lip + 2,
    `left the snow at ${liftoff.downhill.toFixed(2)} m, lip at ${lip} m`);
  assert.ok(liftoff.velocity > 1.5);
});

test("a held crouch soaks up most of a lip's kick", () => {
  const upright = overKicker().find((step) => step.liftoff);
  const soaked = overKicker({ soak: 1 }).find((step) => step.liftoff);

  assert.ok(soaked, "the crouched rider never left the lip");
  assert.ok(soaked.velocity < upright.velocity * 0.25,
    `kept ${soaked.velocity.toFixed(2)} of ${upright.velocity.toFixed(2)} m/s`);
});

test("a body sinking back onto its line has not left the snow", () => {
  const settling = standing({ ride: 0.4, velocity: -1 });
  const trace = travel({ snowAt: () => 0, seconds: 0.5, legs: settling });

  assert.ok(trace.every((step) => step.onSnow && !step.liftoff && !step.touchdown));
  assert.ok(Math.abs(trace.at(-1).ride) < 0.05);
});

const dropped = (height, overrides = {}) =>
  ({ onSnow: false, ride: 0, height, velocity: 0, leg: 0, ...overrides });

test("in the air the body falls freely while the legs move to their target", () => {
  const next = stepLegs(dropped(3), { carryFrom: 0, carryTo: 0, snowFrom: 0, snowTo: 0 },
    { airTarget: 0.2 }, STEP);

  assert.equal(next.onSnow, false);
  assert.ok(Math.abs(next.velocity + GRAVITY * STEP) < 1e-9);
  assert.ok(next.leg > 0 && next.leg <= 0.2);
  assert.ok(Math.abs(next.air - (next.height - next.leg)) < 1e-9);
  assert.equal(next.load, 0);
});

test("a landing compresses the legs over several steps and recovers", () => {
  const trace = travel({ snowAt: () => 0, seconds: 1.6, legs: dropped(1),
    controls: { airTarget: 0 } });
  const index = trace.findIndex((step) => step.touchdown);
  const landing = trace[index];
  const stroke = trace.slice(index);
  const deepest = stroke.reduce((low, step) => step.leg < low.leg ? step : low);

  assert.ok(Math.abs(landing.touchdown.closing - Math.sqrt(2 * GRAVITY)) <
    Math.sqrt(2 * GRAVITY) * 0.05);
  assert.ok(deepest.time - landing.time >= 0.06,
    `legs bottomed ${(deepest.time - landing.time).toFixed(3)} s after touchdown`);
  assert.ok(deepest.leg < -0.1 && deepest.leg >= -LEG_COMPRESS - 1e-9);
  assert.ok(Math.max(...stroke.map((step) => step.load)) > 2);
  assert.ok(Math.abs(trace.at(-1).leg) < 0.03);
  for (let step = index + 1; step < trace.length; step += 1) {
    assert.ok(Math.abs(trace[step].leg - trace[step - 1].leg) < 0.05);
  }
});

test("bottoming out on a steep ripple face does not catapult the rider", () => {
  // A heavy landing into ripples whose faces rise at up to 15 m/s under the board.
  const snowAt = (d) => 0.4 * Math.sin(d * 1.1);
  const trace = travel({ carryAt: () => 0, snowAt, speed: 34, seconds: 1.5,
    legs: dropped(0.6, { velocity: -12 }) });
  const landing = trace.findIndex((step) => step.touchdown);
  const after = trace.slice(landing);

  assert.ok(landing >= 0);
  assert.ok(Math.max(...after.map((step) => step.velocity)) < 4,
    `the snow threw the body upward at ${Math.max(...after.map((step) => step.velocity)).toFixed(1)} m/s`);
  assert.ok(Math.max(...after.map((step) => step.ride)) < 0.8);
});

test("a board brushed by a crest while the body still rises has not landed", () => {
  const rising = dropped(0.1, { leg: 0.1, velocity: 3 });
  const next = stepLegs(rising, { carryFrom: 0, carryTo: 0, snowFrom: 0.05, snowTo: 0.08 },
    {}, STEP);

  assert.equal(next.touchdown, null);
  assert.equal(next.onSnow, false);
  assert.equal(next.air, 0);
});

test("fully compressed legs in the air mean the snow has caught the rider", () => {
  const buried = dropped(0, { leg: -0.1, velocity: 3 });
  const next = stepLegs(buried, { carryFrom: 0, carryTo: 0, snowFrom: 0.6, snowTo: 0.6 },
    {}, STEP);

  assert.equal(next.onSnow, true);
  assert.ok(next.touchdown);
  assert.ok(Math.abs(next.height - (0.6 - LEG_COMPRESS)) < 1e-9);
});

test("a 0.05 s step lands like six 1/120 s steps", () => {
  const fine = travel({ snowAt: () => 0, seconds: 1.5, legs: dropped(1) }).at(-1);
  const coarse = travel({ snowAt: () => 0, seconds: 1.5, step: 0.05, legs: dropped(1) }).at(-1);

  for (const value of [coarse.ride, coarse.height, coarse.velocity, coarse.leg, coarse.load]) {
    assert.ok(Number.isFinite(value));
  }
  assert.equal(coarse.onSnow, true);
  assert.ok(Math.abs(coarse.ride - fine.ride) < 0.03);
});

test("a zero-length step changes nothing", () => {
  const ground = { carryFrom: 1, carryTo: 1, snowFrom: 1.1, snowTo: 1.1 };
  const riding = stepLegs(standing({ ride: 0.05, velocity: -2 }), ground, {}, 0);
  const flying = stepLegs(dropped(4, { leg: 0.1, velocity: -2 }), ground, {}, 0);

  assert.deepEqual(
    { velocity: riding.velocity, onSnow: riding.onSnow, air: riding.air,
      liftoff: riding.liftoff, touchdown: riding.touchdown },
    { velocity: -2, onSnow: true, air: 0, liftoff: false, touchdown: null },
  );
  assert.ok(Math.abs(riding.ride - 0.05) < 1e-9);
  assert.ok(Math.abs(riding.leg - (1.05 - 1.1)) < 1e-9);
  assert.deepEqual(
    { height: flying.height, velocity: flying.velocity, leg: flying.leg, onSnow: flying.onSnow },
    { height: 4, velocity: -2, leg: 0.1, onSnow: false },
  );
  assert.ok(Math.abs(flying.air - (4 - 0.1 - 1.1)) < 1e-9);
});
