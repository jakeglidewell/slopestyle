import assert from "node:assert/strict";
import test from "node:test";

import { createRiderState, sampleSnowTerrain, stepRider } from "../src/rider/physics.js";

const ride = (initial, frames, inputAtFrame, environment = {}) => {
  let state = initial;
  for (let frame = 0; frame < frames; frame += 1) {
    state = stepRider(state, inputAtFrame(frame), 1 / 60, environment);
  }
  return state;
};

test("a held carve bends travel and keeps the board near the travel line", () => {
  const state = ride(
    createRiderState({ speed: 18, surface: "groomed" }),
    60,
    () => ({ carve: 0.8 }),
    { surface: "groomed" },
  );

  assert.ok(state.position.across > 3);
  assert.ok(state.heading > 0.35);
  assert.ok(Math.abs(state.slipAngle) < 0.2);
  assert.ok(state.carveQuality > 0.5);
});

test("a short flick swings the board without steering the heavy body", () => {
  const initial = createRiderState({ speed: 22, surface: "powder" });
  const flick = ride(
    initial,
    6,
    () => ({ steer: -1 }),
    { slopeGrade: 0.08, surface: "powder" },
  );
  const recovered = ride(
    flick,
    12,
    () => ({}),
    { slopeGrade: 0.08, surface: "powder" },
  );
  const neutral = ride(
    initial,
    18,
    () => ({}),
    { slopeGrade: 0.08, surface: "powder" },
  );

  assert.ok(flick.slipAngle < -0.5);
  assert.ok(Math.abs(recovered.slipAngle) < 0.15);
  assert.ok(Math.abs(recovered.position.across - neutral.position.across) < 0.5);
  assert.ok(recovered.speed < neutral.speed * 0.96);
  assert.ok(recovered.speed > neutral.speed * 0.88);
});

test("a flick makes one sharp spray burst that settles", () => {
  let state = stepRider(createRiderState({ speed: 20 }), { steer: 1 }, 1 / 60);
  assert.ok(state.slash > 0.8);
  state = ride(state, 30, () => ({}));
  assert.ok(state.slash < 0.1);
});

test("a flick during a carve changes the board pose far more than the line", () => {
  const initial = createRiderState({ speed: 18, surface: "groomed" });
  const carve = ride(initial, 36, () => ({ carve: -1 }), { surface: "groomed" });
  const carveAndFlick = ride(
    initial,
    36,
    (frame) => ({ carve: -1, steer: frame >= 24 && frame < 30 ? -1 : 0 }),
    { surface: "groomed" },
  );

  assert.ok(carveAndFlick.velocity.across < 0);
  assert.ok(Math.abs(carveAndFlick.velocity.across - carve.velocity.across) < 1.5);
  assert.ok(Math.abs(carveAndFlick.position.across - carve.position.across) < 0.4);
});

test("an uncharged hop and a loaded ollie reach their distinct heights", () => {
  const apex = (initial) => {
    let state = stepRider(initial, { jump: 1 }, 1 / 60);
    let height = state.air;
    for (let frame = 0; frame < 90; frame += 1) {
      state = stepRider(state, {}, 1 / 60);
      height = Math.max(height, state.air);
    }
    return height;
  };
  const neutral = apex(createRiderState({ speed: 16, surface: "groomed" }));
  const loaded = apex(ride(
    createRiderState({ speed: 16, surface: "groomed" }),
    40,
    () => ({ crouch: 1 }),
    { surface: "groomed" },
  ));

  assert.ok(neutral > 0.25 && neutral < 0.65, `neutral hop ${neutral}`);
  assert.ok(loaded > 0.9 && loaded < 1.45, `loaded ollie ${loaded}`);
});

test("a badly landed jump slams while a small impact is absorbed", () => {
  const soft = stepRider(
    createRiderState({ air: 0.03, verticalVelocity: -3, speed: 18 }),
    {},
    0.05,
  );
  const hard = stepRider(
    createRiderState({ air: 0.03, verticalVelocity: -11, speed: 18 }),
    {},
    0.05,
  );

  assert.equal(soft.crashed, false);
  assert.ok(soft.compression > 0);
  assert.equal(hard.crashReason, "landing-impact");
});

test("an airborne spin stays visually continuous through the angle wrap", () => {
  let state = createRiderState({
    air: 2,
    boardYaw: 2.9,
    boardRotation: 2.9,
    torsoYaw: 2.7,
    torsoRotation: 2.7,
    spinVelocity: 6.5,
    speed: 18,
  });
  let previousRotation = state.boardRotation;
  for (let frame = 0; frame < 20; frame += 1) {
    state = stepRider(state, {}, 1 / 60);
    assert.ok(state.boardRotation > previousRotation);
    assert.ok(state.boardRotation - previousRotation < 0.2);
    previousRotation = state.boardRotation;
  }
  assert.ok(state.boardYaw < 0 && state.boardRotation > Math.PI);
});

test("a landing releases spin so the next terrain hop stays calm", () => {
  const landed = stepRider(
    createRiderState({
      air: 0.02,
      boardYaw: 0,
      spinVelocity: 4,
      verticalVelocity: -3,
      speed: 18,
    }),
    {},
    1 / 60,
  );

  assert.equal(landed.air, 0);
  assert.equal(landed.spinVelocity, 0);
});

test("a crouched ground butter can carry a half turn into switch", () => {
  const butter = ride(
    createRiderState({ speed: 16, surface: "groomed" }),
    32,
    () => ({ crouch: 1, steer: 1 }),
    { surface: "groomed" },
  );
  const released = ride(
    butter,
    18,
    () => ({}),
    { surface: "groomed" },
  );

  assert.ok(butter.butter > 0.5);
  assert.ok(released.switchRiding);
  assert.ok(Math.abs(released.slipAngle) > 2.8);
  assert.ok(released.velocity.downhill > 0);
});

test("a tail press lifts the nose and shifts weight rearward", () => {
  const neutral = ride(createRiderState({ speed: 18 }), 30, () => ({}));
  const pressed = ride(
    createRiderState({ speed: 18 }),
    30,
    () => ({ press: 1 }),
  );

  assert.ok(pressed.pressAmount > 0.8);
  assert.ok(pressed.frontFootPressure < neutral.frontFootPressure);
});

test("the route crosses medium, steep, and gentle grades", () => {
  const medium = stepRider(createRiderState({ position: { downhill: 0 } }), {}, 0).slopeGrade;
  const steep = stepRider(createRiderState({ position: { downhill: 80 } }), {}, 0).slopeGrade;
  const gentle = stepRider(createRiderState({ position: { downhill: 200 } }), {}, 0).slopeGrade;

  assert.ok(steep > medium + 0.15);
  assert.ok(gentle < medium - 0.1);
});

test("releasing loaded legs on the back of a roller pumps speed", () => {
  let downhill = 0;
  for (; downhill < 100; downhill += 0.05) {
    if (sampleSnowTerrain({ across: 0, downhill }, "powder").slope < -0.12) break;
  }
  const base = { position: { across: 0, downhill }, speed: 18, surface: "powder" };
  const loaded = stepRider(
    createRiderState({ ...base, crouchAmount: 0.8 }),
    { crouch: 0 },
    1 / 60,
    { slopeGrade: 0.2, surface: "powder" },
  );
  const neutral = stepRider(
    createRiderState(base),
    { crouch: 0 },
    1 / 60,
    { slopeGrade: 0.2, surface: "powder" },
  );

  assert.ok(loaded.speed > neutral.speed);
});

test("normal linked turns do not randomly catch an edge", () => {
  let state = createRiderState({ speed: 22, surface: "powder" });
  for (let frame = 0; frame < 240; frame += 1) {
    const carve = frame < 80 ? -1 : frame < 160 ? 1 : -1;
    state = stepRider(state, { carve }, 1 / 60, { surface: "powder" });
    assert.equal(state.crashed, false, `crashed on frame ${frame}`);
  }
});
