import assert from "node:assert/strict";
import test from "node:test";

import { createRiderState, stepRider } from "../src/rider/physics.js";

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
  const naturalAir = createRiderState({
    air: 0.1,
    airtime: 0.05,
    grounded: false,
    popped: false,
    preload: 1,
    speed: 18,
    worldHeight: 0.1,
    worldVerticalVelocity: 0,
  });
  const late = stepRider(naturalAir, { jump: 1 }, 1 / 120, flat);
  const tooLate = stepRider(createRiderState({ ...naturalAir, airtime: 0.09 }),
    { jump: 1 }, 1 / 120, flat);

  assert.ok(Math.abs((tap.worldVerticalVelocity + 9.81 / 120) - 3) < 0.02);
  assert.ok(Math.abs((full.worldVerticalVelocity + 9.81 / 120) - 6) < 0.02);
  assert.ok(Math.abs((lip.worldVerticalVelocity + 9.81 / 120) /
    (early.worldVerticalVelocity + 9.81 / 120) - 1.15) < 0.01);
  assert.ok(Math.abs(late.worldVerticalVelocity - tooLate.worldVerticalVelocity - 3) < 0.02);
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
  const caught = stepRider(falling({ boardYaw: 1 }), {}, 0.05, flat);

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
