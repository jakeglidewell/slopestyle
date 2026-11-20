import assert from "node:assert/strict";
import test from "node:test";

import { planPhysicsSteps, setRiderSpeed } from "../src/rider/index.js";
import { createRiderState, stepRider } from "../src/rider/physics.js";
import { snowSurfaceHeight, snowSurfaceNormal } from "../src/mountain/terrain3d.js";

test("a course pace change keeps the rider's line and position", () => {
  const rider = createRiderState({
    position: { across: 2.2, downhill: 84 },
    velocity: { across: 6, downhill: 15 },
  });
  const faster = setRiderSpeed(rider, 22);

  assert.ok(Math.abs(faster.speed - 22) < 1e-9);
  assert.ok(Math.abs(faster.heading - rider.heading) < 1e-9);
  assert.deepEqual(faster.position, rider.position);
});

test("a crash cannot receive a course speed boost", () => {
  const crashed = createRiderState({ crashed: true, speed: 16 });
  assert.equal(setRiderSpeed(crashed, 24), crashed);
});

test("a course pace change does not bounce the body on its legs", () => {
  const mountain = { surface: "powder", surfaceHeight: snowSurfaceHeight,
    surfaceNormal: snowSurfaceNormal };
  const rideFor = (rider, steps) => {
    const rides = [];
    let state = rider;
    for (let step = 0; step < steps; step += 1) {
      state = stepRider(state, {}, 1 / 120, mountain);
      rides.push(state.ride);
    }
    return { rides, state };
  };
  const settled = rideFor(createRiderState({ speed: 18, surface: "powder" }), 120);
  const steady = rideFor(settled.state, 60);
  const paced = rideFor(setRiderSpeed(settled.state, settled.state.speed + 8), 60);
  const swing = (rides) => Math.max(...rides) - Math.min(...rides);

  assert.ok(paced.state.speed > steady.state.speed + 4);
  assert.ok(swing(paced.rides) < swing(steady.rides) + 0.03,
    `the body swung ${swing(paced.rides).toFixed(3)} m after the pace change, ` +
    `${swing(steady.rides).toFixed(3)} m without one`);
});

test("a frame is split into equal physics steps that add up to its own duration", () => {
  for (const hertz of [60, 59.94, 75, 120, 144]) {
    for (const rounding of [0.1, 1]) {
      let previous;
      for (let frame = 0; frame < 6000; frame += 1) {
        const timestamp = Math.round(frame * 1000 / hertz / rounding) * rounding;
        if (previous !== undefined) {
          const delta = (timestamp - previous) / 1000;
          const plan = planPhysicsSteps(delta);
          assert.ok(Math.abs(plan.count * plan.step - delta) < 1e-12);
          assert.ok(plan.step <= 1 / 120 + 1e-9,
            `${hertz} Hz frame of ${delta} s used a ${plan.step} s step`);
          assert.ok(plan.count >= 1 || delta === 0);
        }
        previous = timestamp;
      }
    }
  }
});

test("a stalled frame is twelve steps and an empty frame is none", () => {
  assert.deepEqual({ ...planPhysicsSteps(0.1) }, { count: 12, step: 0.1 / 12 });
  assert.deepEqual({ ...planPhysicsSteps(1 / 60) }, { count: 2, step: 1 / 120 });
  assert.deepEqual({ ...planPhysicsSteps(0) }, { count: 0, step: 0 });
  assert.deepEqual({ ...planPhysicsSteps(-0.01) }, { count: 0, step: 0 });
  assert.deepEqual({ ...planPhysicsSteps(NaN) }, { count: 0, step: 0 });
});

test("a pace change in the middle of a landing does not wipe the landing", () => {
  const level = { slopeGrade: 0.08, surface: "groomed", surfaceHeight: () => 0,
    surfaceNormal: () => ({ x: 0, y: 1, z: 0 }) };
  const deepestLeg = (paced) => {
    let state = createRiderState({ air: 0.6, airtime: 0.3, grounded: false, speed: 18,
      worldHeight: 0.6, worldVerticalVelocity: -3 });
    let deepest = 0;
    let landed = false;
    for (let step = 0; step < 120; step += 1) {
      state = stepRider(state, {}, 1 / 120, level);
      if (!landed && state.grounded) {
        landed = true;
        if (paced) state = setRiderSpeed(state, state.speed + 3);
      }
      if (landed) deepest = Math.min(deepest, state.legOffset);
    }
    return deepest;
  };

  assert.ok(deepestLeg(false) < -0.05);
  assert.ok(Math.abs(deepestLeg(true) - deepestLeg(false)) < 0.02,
    `legs folded to ${deepestLeg(true).toFixed(3)} m with a pace change, ` +
    `${deepestLeg(false).toFixed(3)} m without`);
});
