import assert from "node:assert/strict";
import test from "node:test";

import { landingVerdict } from "../src/rider/landing.js";
import { createRiderState, stepRider } from "../src/rider/physics.js";
import {
  sideHitFeatureAt,
  sideHitLipDistance,
  snowSurfaceHeight,
  snowSurfaceNormal,
} from "../src/mountain/terrain3d.js";

const degrees = (value) => value * Math.PI / 180;
const flat = Object.freeze({
  slopeGrade: 0.08,
  surface: "groomed",
  surfaceHeight: () => 0,
  surfaceNormal: () => ({ x: 0, y: 1, z: 0 }),
});
const falling = (overrides = {}) => createRiderState({
  air: 0.02,
  airtime: 0.3,
  boardYaw: 0,
  grounded: false,
  speed: 18,
  verticalVelocity: -8,
  worldHeight: 0.02,
  worldVerticalVelocity: -8,
  ...overrides,
});
const ride = (initial, steps, input = {}, environment = flat) => {
  const trace = [];
  let state = initial;
  for (let step = 0; step < steps; step += 1) {
    state = stepRider(state, input, 1 / 120, environment);
    trace.push(state);
  }
  return trace;
};
const offLine = (state) => Math.abs(state.boardOffset) * 180 / Math.PI;

test("the verdict separates clean, sketchy and crashed landings", () => {
  const verdict = (angle, impact, meter = 20) =>
    landingVerdict({ impact, meter, misalign: degrees(angle) });

  assert.equal(verdict(5, 6), "clean");
  assert.equal(verdict(30, 6), "sketchy");
  assert.equal(verdict(50, 6), "sketchy");
  assert.equal(verdict(75, 6), "crash");
  assert.equal(verdict(75, 1), "clean");
  assert.equal(verdict(10, 6, 100), "crash");
});

test("30 and 50 degrees off line stumble and ride away; 75 degrees crashes", () => {
  for (const angle of [30, 50]) {
    const landed = ride(falling({ boardYaw: degrees(angle) }), 6).at(-1);
    assert.equal(landed.grounded, true);
    assert.equal(landed.crashed, false, `${angle} degrees off line crashed`);
    assert.ok(landed.stumble > 0, `${angle} degrees off line did not stumble`);
  }
  const clean = ride(falling({ boardYaw: degrees(5) }), 6).at(-1);
  const sideways = ride(falling({ boardYaw: degrees(75) }), 6).at(-1);

  assert.equal(clean.stumble, 0);
  assert.equal(sideways.crashReason, "landing-edge");
});

test("a stumble scrubs speed and dulls the steering for a moment", () => {
  const clean = ride(falling({ boardYaw: degrees(5) }), 12, { carve: 1 }).at(-1);
  const stumbled = ride(falling({ boardYaw: degrees(45) }), 12, { carve: 1 }).at(-1);

  assert.equal(stumbled.crashed, false);
  assert.ok(stumbled.speed < clean.speed - 0.5);
  assert.ok(stumbled.speed >= 12);
  assert.ok(stumbled.lean < clean.lean * 0.75);
});

test("a stumble slides the board back into line over about a third of a second", () => {
  const trace = ride(falling({ boardYaw: degrees(40) }), 72);
  const landing = trace.findIndex((state) => state.grounded);

  assert.ok(offLine(trace[landing + 12]) > 10,
    `${offLine(trace[landing + 12]).toFixed(1)} degrees off line 0.1 s after landing`);
  assert.ok(offLine(trace[landing + 60]) < 5,
    `${offLine(trace[landing + 60]).toFixed(1)} degrees off line 0.5 s after landing`);
  for (let step = landing + 1; step < trace.length; step += 1) {
    assert.ok(Math.abs(offLine(trace[step]) - offLine(trace[step - 1])) < 2.5,
      "the board snapped instead of sliding");
  }
  assert.equal(trace.at(-1).stumble, 0);
});

test("spin left over at touchdown carries into the slide instead of stopping dead", () => {
  const spun = ride(falling({ angularMomentum: 3, spinVelocity: 3 }), 8, { steer: 0, carve: 1 });
  const landing = spun.findIndex((state) => state.grounded);

  assert.equal(spun[landing].spinVelocity, 0);
  assert.equal(spun[landing].crashed, false);
  assert.ok(spun[landing + 3].boardOffset > spun[landing].boardOffset,
    "the board stopped turning on the step it touched down");
});

test("from the same fall a downslope landing leaves faster than a flat one", () => {
  const downslope = { ...flat, surfaceHeight: (_across, downhill) => -0.5 * downhill,
    surfaceNormal: undefined };
  const drop = { worldVerticalVelocity: -10 };
  const onFlat = ride(falling(drop), 36).at(-1);
  const onSlope = ride(falling({ ...drop, worldHeight: 0.02 }), 36, {}, downslope).at(-1);

  assert.equal(onFlat.grounded && onSlope.grounded, true);
  assert.ok(onSlope.speed > onFlat.speed + 0.3,
    `downslope ${onSlope.speed.toFixed(2)} m/s, flat ${onFlat.speed.toFixed(2)} m/s`);
  assert.ok(onFlat.impactMeter > onSlope.impactMeter + 4);
});

test("a short float the rider did not pop is not judged as a landing", () => {
  const floating = createRiderState({
    air: 0.02,
    airtime: 0.1,
    boardYaw: degrees(70),
    grounded: false,
    impactMeter: 30,
    speed: 18,
    worldHeight: 0.02,
    worldVerticalVelocity: -0.6,
  });
  const landed = ride(floating, 6).find((state) => state.grounded);

  assert.equal(landed.crashed, false);
  assert.equal(landed.stumble, 0);
  assert.ok(landed.impactMeter <= 30);
  assert.ok(Math.abs(landed.boardOffset - floating.boardOffset) < 1e-9);
});

test("a slash that floats off a roller comes down as the slash it was", () => {
  const sliding = createRiderState({
    air: 0.3,
    airtime: 0.5,
    boardYaw: degrees(70),
    grounded: false,
    speed: 18,
    takeoffSlip: degrees(70),
    worldHeight: 0.3,
    worldVerticalVelocity: -3,
  });
  const landed = ride(sliding, 30).find((state) => state.grounded);

  assert.equal(landed.crashed, false);
  assert.equal(landed.stumble, 0);
});

test("a pop out of a slash is judged on where the board points", () => {
  const popped = createRiderState({
    air: 0.3,
    airtime: 0.5,
    boardYaw: degrees(75),
    grounded: false,
    popped: true,
    speed: 18,
    takeoffSlip: degrees(70),
    worldHeight: 0.3,
    worldVerticalVelocity: -3,
  });
  // A tenth of a second from the snow: too late for the board to come round.
  const landed = ride(popped, 30).find((state) => state.grounded);
  const floated = ride(createRiderState({ ...popped, popped: false }), 30)
    .find((state) => state.grounded);

  assert.equal(landed.crashReason, "landing-edge");
  assert.equal(floated.crashed, false);
});

test("an ordinary hop costs no speed at touchdown; a hard flat landing does", () => {
  const touchdown = (fallSpeed) => {
    let state = falling({ worldVerticalVelocity: -fallSpeed });
    let before = state;
    while (!state.grounded) {
      before = state;
      state = stepRider(state, {}, 1 / 120, flat);
    }
    return before.speed - state.speed;
  };

  assert.ok(touchdown(4) < 1e-9, `a hop's landing cost ${touchdown(4).toFixed(3)} m/s`);
  assert.ok(touchdown(10) > 0.3, `a 10 m/s flat landing cost ${touchdown(10).toFixed(3)} m/s`);
});

test("a key held since before takeoff does not turn into a shifty", () => {
  const held = { air: 1, grounded: false, speed: 18, steer: 1, worldHeight: 1,
    worldVerticalVelocity: 1 };
  const carried = ride(createRiderState({ ...held, airtime: 0.1, steerHold: 0.6 }),
    12, { steer: 1 }).at(-1);
  const pressed = ride(createRiderState({ ...held, airtime: 0.1, steer: 0 }),
    12, { steer: 1 }).at(-1);

  assert.equal(carried.tweak, 0);
  assert.ok(pressed.tweak > 0.5);
});

const mountain = (state, surface) => ({
  lipDistance: sideHitLipDistance(state.position.across, state.position.downhill),
  surface,
  surfaceHeight: snowSurfaceHeight,
  surfaceNormal: snowSurfaceNormal,
});

test("the same fall lands the same whichever ripple it comes down on", () => {
  const impacts = [];
  for (let downhill = 300; downhill < 310; downhill += 1) {
    const settled = ride(createRiderState({ position: { across: 0, downhill }, speed: 24,
      surface: "powder" }), 2, {}, mountain({ position: { across: 0, downhill } }, "powder")).at(-1);
    let state = createRiderState({
      ...settled,
      air: 1,
      airtime: 0.4,
      grounded: false,
      legOffset: 0,
      // One metre above the hill's line and moving with it.
      worldHeight: settled.worldHeight - settled.ride + 1,
      worldVerticalVelocity: settled.hillRate,
    });
    for (let step = 0; step < 120 && !state.grounded; step += 1) {
      state = stepRider(state, {}, 1 / 120, mountain(state, "powder"));
    }
    impacts.push(state.landingImpact);
  }

  assert.ok(Math.min(...impacts) > 2);
  assert.ok(Math.max(...impacts) / Math.min(...impacts) < 1.35,
    `landing impacts ${impacts.map((impact) => impact.toFixed(1)).join(", ")}`);
});


test("holding a slash down rough powder never counts as a bad landing", () => {
  let state = createRiderState({ speed: 30, surface: "powder" });
  for (let step = 0; step < 20 * 120; step += 1) {
    state = stepRider(state, { steer: 1 }, 1 / 120, mountain(state, "powder"));
    assert.equal(state.crashed, false, `crashed ${(step / 120).toFixed(2)} s in`);
    assert.equal(state.stumble, 0, `stumbled ${(step / 120).toFixed(2)} s in`);
  }
});

test("compression never jumps and a side hit landing takes time", () => {
  const feature = sideHitFeatureAt(0);
  let state = createRiderState({
    position: { across: feature.centerX, downhill: feature.start - 2 },
    speed: 26,
    surface: "groomed",
  });
  let landedAt = -1;
  let deepest = { compression: 0, step: -1 };
  for (let step = 0; step < 480; step += 1) {
    const before = state;
    state = stepRider(state, {}, 1 / 120, mountain(state, "groomed"));
    assert.ok(Math.abs(state.compression - before.compression) <= 0.1 + 1e-9,
      `compression moved ${Math.abs(state.compression - before.compression).toFixed(3)} in a step`);
    if (landedAt < 0 && !before.grounded && state.grounded &&
        state.position.downhill > feature.lip) landedAt = step;
    if (landedAt >= 0 && step - landedAt < 60 && state.compression > deepest.compression) {
      deepest = { compression: state.compression, step };
    }
  }

  assert.ok(landedAt > 0, "the side hit never landed");
  assert.ok(deepest.compression > 0.2);
  assert.ok((deepest.step - landedAt) / 120 >= 0.08,
    `legs reached their deepest ${((deepest.step - landedAt) / 120).toFixed(3)} s after touchdown`);
});

test("a loaded edge holds harder and a loaded board drags more", () => {
  const carving = (gripLoad) => stepRider(createRiderState({
    edge: 0.9, frontEdge: 0.9, gripLoad, lean: 0.9, rearEdge: 0.9, speed: 26,
  }), { carve: 1 }, 1 / 120, flat);
  const gliding = (gripLoad) => ride(createRiderState({ gripLoad, speed: 20,
    surface: "powder" }), 1, {}, { ...flat, surface: "powder" }).at(-1);

  assert.ok(carving(1).washout > carving(1.6).washout + 0.1);
  assert.equal(carving(0.6).washout, carving(1).washout);
  assert.ok(gliding(1.6).speed < gliding(0.6).speed);
});
