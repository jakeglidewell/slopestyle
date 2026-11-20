import assert from "node:assert/strict";
import test from "node:test";

import { createRiderState, stepRider } from "../src/rider/physics.js";
import {
  sideHitFeatureAt,
  sideHitLipDistance,
  snowSurfaceHeight,
  snowSurfaceNormal,
} from "../src/mountain/terrain3d.js";

const flat = Object.freeze({
  slopeGrade: 0.08,
  surface: "groomed",
  surfaceHeight: () => 0,
  surfaceNormal: () => ({ x: 0, y: 1, z: 0 }),
});

const stepFrames = (initial, frames, input, environment = flat) => {
  let state = initial;
  for (let index = 0; index < frames; index += 1) {
    state = stepRider(state, input, 1 / 120, environment);
  }
  return state;
};

test("crouch reaches its low stance and keeps its charge for one second after release", () => {
  const initial = createRiderState({ speed: 20 });
  const crouched = stepFrames(initial, 18, { crouch: 1 });
  const loaded = stepFrames(crouched, 42, { crouch: 1 });
  const released = stepFrames(loaded, 120, {});

  assert.ok(Math.abs(crouched.stanceHeight - 0.45) < 0.001);
  assert.equal(loaded.preload, 1);
  assert.equal(released.preload, 1);
  assert.equal(stepFrames(released, 18, {}).preload, 0);
});

test("preload sets pop speed, a lip gives 15 percent, and late pop is half strength", () => {
  const initial = createRiderState({ speed: 18 });
  const charged = stepFrames(initial, 60, { crouch: 1 });
  const tap = stepRider(initial, { jump: 1 }, 1 / 120, flat);
  const full = stepRider(charged, { jump: 1 }, 1 / 120, flat);
  const lip = stepRider(initial, { jump: 1 }, 1 / 120,
    { ...flat, timeToLip: 0.05 });
  const early = stepRider(initial, { jump: 1 }, 1 / 120,
    { ...flat, timeToLip: 0.15 });
  // Just off a lip and still rising fast: the launch already beats a hop.
  const naturalAir = createRiderState({
    air: 0.1,
    airtime: 0.05,
    grounded: false,
    popped: false,
    preload: 1,
    speed: 18,
    worldHeight: 0.1,
    worldVerticalVelocity: 8,
  });
  const late = stepRider(naturalAir, { jump: 1 }, 1 / 120, flat);
  const tooLate = stepRider(createRiderState({ ...naturalAir, airtime: 0.09 }),
    { jump: 1 }, 1 / 120, flat);

  assert.ok(Math.abs((tap.worldVerticalVelocity + 9.81 / 120) - 4) < 0.02);
  assert.ok(Math.abs((full.worldVerticalVelocity + 9.81 / 120) - 6.4) < 0.02);
  assert.ok(Math.abs((lip.worldVerticalVelocity + 9.81 / 120) /
    (early.worldVerticalVelocity + 9.81 / 120) - 1.15) < 0.01);
  assert.ok(Math.abs(late.worldVerticalVelocity - tooLate.worldVerticalVelocity - 3.2) < 0.02);
});

test("a jump pressed in a brief float is a full hop; in a committed air it is ignored", () => {
  const drifting = (airtime) => createRiderState({
    air: 0.1,
    airtime,
    grounded: false,
    popped: false,
    speed: 18,
    worldHeight: 0.1,
    worldVerticalVelocity: 0,
  });
  for (const airtime of [0.09, 0.2]) {
    const hopped = stepRider(drifting(airtime), { jump: 1 }, 1 / 120, flat);
    assert.equal(hopped.popped, true, `a press ${airtime} s into a float was dropped`);
    assert.ok(hopped.worldVerticalVelocity > 3.5,
      `a press ${airtime} s into a float rose at ${hopped.worldVerticalVelocity.toFixed(2)} m/s`);
  }
  const committed = stepRider(drifting(0.3), { jump: 1 }, 1 / 120, flat);
  const alreadyPopped = stepRider(createRiderState({ ...drifting(0.1), popped: true }),
    { jump: 1 }, 1 / 120, flat);

  assert.equal(committed.popped, false);
  assert.ok(Math.abs(committed.worldVerticalVelocity + 9.81 / 120) < 1e-9);
  assert.ok(Math.abs(alreadyPopped.worldVerticalVelocity + 9.81 / 120) < 1e-9);
});

test("holding the jump key through a hop does not lower the board", () => {
  const hop = (held) => {
    const airs = [];
    let state = createRiderState({ speed: 18 });
    for (let index = 0; index < 60; index += 1) {
      state = stepRider(state, { jump: Number(index === 0), stretch: held }, 1 / 120, flat);
      airs.push(state.air);
    }
    return airs;
  };
  const tapped = hop(0);
  const heldUp = hop(1);

  for (let index = 0; index < tapped.length; index += 1) {
    assert.ok(Math.abs(heldUp[index] - tapped[index]) < 1e-9,
      `holding the key left the board ${(tapped[index] - heldUp[index]).toFixed(2)} m lower`);
  }
});

test("jump spam gives one pop per flight", () => {
  const peakHeight = (jumpAt) => {
    let state = createRiderState({ speed: 18 });
    let peak = 0;
    for (let index = 0; index < 60; index += 1) {
      state = stepRider(state, { jump: Number(jumpAt(index, state)) }, 1 / 120, flat);
      peak = Math.max(peak, state.worldHeight);
    }
    return peak;
  };
  const single = peakHeight((index) => index === 0);
  const spammed = peakHeight(() => true);
  const pressedAgain = peakHeight((index, state) =>
    index === 0 || Math.abs(state.airtime - 0.2) < 1 / 240);

  assert.ok(single > 0.7);
  assert.ok(Math.abs(spammed - single) < single * 0.02);
  assert.ok(Math.abs(pressedAgain - single) < single * 0.02);
});

const mountain = (state, surface = "groomed") => ({
  lipDistance: sideHitLipDistance(state.position.across, state.position.downhill),
  surface,
  surfaceHeight: snowSurfaceHeight,
  surfaceNormal: snowSurfaceNormal,
});

const sideHitFlight = (inputAt) => {
  const feature = sideHitFeatureAt(0);
  let state = createRiderState({
    position: { across: feature.centerX, downhill: feature.start - 2 },
    speed: 26,
    surface: "groomed",
  });
  let peak = 0;
  let airtime = 0;
  for (let index = 0; index < 600; index += 1) {
    const before = state;
    state = stepRider(state, inputAt(state, feature), 1 / 120, mountain(state));
    if (state.position.downhill < feature.lip - 3) continue;
    if (!state.grounded) {
      airtime += 1 / 120;
      peak = Math.max(peak, state.air);
    } else if (!before.grounded && airtime > 0.2) break;
  }
  return { airtime, peak, state };
};

test("a pop at a side hit lip adds to the launch", () => {
  const rolled = sideHitFlight(() => ({}));
  let pressed = false;
  const popped = sideHitFlight((state, feature) => {
    const jump = !pressed && state.position.downhill >= feature.lip - 1;
    pressed ||= jump;
    return { jump: Number(jump) };
  });

  assert.ok(rolled.peak > 0.4);
  assert.ok(popped.peak > rolled.peak + 0.4,
    `popped ${popped.peak.toFixed(2)} m, rolled ${rolled.peak.toFixed(2)} m`);
  assert.equal(popped.state.crashed, false);
});

test("a pop on a side hit's ramp, short of the lip, still adds to the launch", () => {
  const rolled = sideHitFlight(() => ({}));
  let pressed = false;
  const early = sideHitFlight((state, feature) => {
    const jump = !pressed && state.position.downhill >= feature.lip - 4;
    pressed ||= jump;
    return { jump: Number(jump) };
  });

  assert.ok(early.peak > rolled.peak + 0.4,
    `popped 4 m early ${early.peak.toFixed(2)} m, rolled ${rolled.peak.toFixed(2)} m`);
  assert.equal(early.state.crashed, false);
});

const spinning = () => createRiderState({
  air: 2,
  angularMomentum: 3,
  // Left alone this spin lands 40 degrees short of forward.
  boardYaw: -0.7 - 3 * 0.6,
  grounded: false,
  speed: 18,
  spinVelocity: 3,
  stanceHeight: 1,
  worldHeight: 2,
  worldVerticalVelocity: 0,
});
const landingAngle = (inputAt) => {
  let state = spinning();
  for (let index = 0; index < 120; index += 1) {
    const before = state;
    state = stepRider(state, inputAt(before), 1 / 120, flat);
    if (!before.grounded && state.grounded) return Math.abs(state.boardOffset);
  }
  return NaN;
};

test("with the keys released the board comes round to a clean line before landing", () => {
  const offLine = landingAngle(() => ({}));

  assert.ok(offLine < Math.PI / 9, `landed ${(offLine * 180 / Math.PI).toFixed(0)}° off line`);
});

test("with a spin key held the board gets no help", () => {
  const offLine = landingAngle(() => ({ steer: 1 }));

  assert.ok(offLine > Math.PI / 9, `landed ${(offLine * 180 / Math.PI).toFixed(0)}° off line`);
});

test("a carve held through the air does not switch the help off", () => {
  for (const carve of [-1, 1]) {
    const offLine = landingAngle(() => ({ carve }));
    assert.ok(offLine < Math.PI / 9,
      `carving ${carve} landed ${(offLine * 180 / Math.PI).toFixed(0)}° off line`);
  }
});

test("an airborne tuck spins faster while momentum and flight path stay locked", () => {
  const initial = createRiderState({
    air: 2,
    angularMomentum: 3,
    grounded: false,
    speed: 18,
    spinVelocity: 3,
    stanceHeight: 1,
    worldHeight: 2,
    worldVerticalVelocity: 0,
  });
  const open = stepFrames(initial, 18, {});
  const tucked = stepFrames(initial, 18, { crouch: 1 });

  assert.equal(tucked.stanceHeight, 0);
  assert.ok(tucked.spinVelocity / open.spinVelocity > 1.6);
  assert.equal(tucked.angularMomentum, open.angularMomentum);
  assert.deepEqual(tucked.velocity, open.velocity);
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

test("a downslope landing is softer than flat ground at the same fall speed", () => {
  const flatLanding = stepRider(falling({ worldVerticalVelocity: -10 }), {}, 0.05, flat);
  const downslope = stepRider(falling({ worldVerticalVelocity: -10 }), {}, 0.05,
    { ...flat, surfaceHeight: (_across, downhill) => -0.5 * downhill,
      surfaceNormal: undefined });

  assert.equal(flatLanding.grounded, true);
  assert.equal(downslope.grounded, true);
  assert.ok(downslope.landingImpact < flatLanding.landingImpact * 0.2);
});

test("a fresh crouch absorbs more impact than holding a tuck", () => {
  const neutral = stepRider(falling(), {}, 0.05, flat);
  const held = stepRider(falling({ crouchHeld: true, crouchPressedAge: 0.3,
    stanceHeight: 0.45, crouchAmount: 1 }), { crouch: 1 }, 0.05, flat);
  const fresh = stepRider(falling(), { crouch: 1 }, 0.05, flat);

  assert.ok(fresh.landingImpact < held.landingImpact);
  assert.ok(held.landingImpact < neutral.landingImpact);
  assert.equal(fresh.preload, 0.5);
});

test("landing alignment separates clean, skidded, and edge caught results", () => {
  const clean = stepRider(falling({ boardYaw: 0.1 }), {}, 0.05, flat);
  const skid = stepRider(falling({ boardYaw: 0.5 }), {}, 0.05, flat);
  const caught = stepRider(falling({ boardYaw: 1.3 }), {}, 0.05, flat);

  assert.equal(clean.crashed, false);
  assert.ok(clean.skid < 0.1);
  assert.ok(skid.skid > 0.3 && skid.speed < clean.speed);
  assert.equal(caught.crashReason, "landing-edge");
});

test("a held airborne board tweak must snap back before landing", () => {
  const sideways = stepRider(falling({ tweak: 1 }), { steer: 1 }, 0.05, flat);
  const straight = stepRider(falling({ tweak: 0 }), {}, 0.05, flat);
  assert.equal(sideways.crashReason, "landing-edge");
  assert.equal(straight.crashed, false);
});

test("the impact meter warns, decays, and ragdolls at overload", () => {
  const fragile = falling({ impactMeter: 96, worldVerticalVelocity: -12 });
  const overloaded = stepRider(fragile, {}, 0.05, flat);
  const slow = stepRider(createRiderState({ impactMeter: 80, speed: 12 }), {}, 0.05, flat);
  const fast = stepRider(createRiderState({ impactMeter: 80, speed: 30 }), {}, 0.05, flat);

  assert.equal(overloaded.crashReason, "impact-overload");
  assert.equal(overloaded.impactMeter, 100);
  assert.ok(slow.impactMeter < fast.impactMeter);
});
