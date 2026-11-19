import assert from "node:assert/strict";
import test from "node:test";

import { createRiderModel } from "../src/rider/model3d.js";

const state = (overrides = {}) => ({
  air: 0,
  boardYaw: 0,
  heading: 0,
  position: { across: 0, downhill: 0 },
  torsoYaw: 0,
  ...overrides,
});

test("a board flick rotates beneath a quieter torso", () => {
  const rider = createRiderModel();
  rider.update(state({ boardYaw: 0.65 }), { boardRoll: 0, crouch: 0.3 }, 0);

  assert.ok(Math.abs(rider.board.rotation.y - rider.body.rotation.y) > 0.5);
});

test("crouching lowers the rider without sinking the board", () => {
  const rider = createRiderModel();
  rider.update(state(), { crouch: 0.2 }, 0);
  const tallBody = rider.body.position.y;
  const boardHeight = rider.board.position.y;
  rider.update(state(), { crouch: 0.9 }, 0);

  assert.ok(rider.body.position.y < tallBody - 0.2 && rider.board.position.y === boardHeight);
});

test("a jump lifts the rider while its shadow stays on the snow", () => {
  const rider = createRiderModel();
  rider.update(state({ air: 1.1 }), { crouch: 0.3 }, 12);

  assert.ok(rider.board.position.y > rider.shadow.position.y + 1);
});

test("the board follows the fall-line angle under the rider", () => {
  const rider = createRiderModel();
  rider.update(state(), { crouch: 0.3 }, 0, { x: 0, y: 0.93, z: -0.37 });

  assert.ok(rider.board.rotation.x < -0.3);
});

test("airborne board pitch holds the takeoff slope while terrain falls away", () => {
  const rider = createRiderModel();
  rider.update(state(), { crouch: 0.3 }, 0, { x: 0, y: 0.93, z: -0.37 });
  const takeoffPitch = rider.board.rotation.x;
  rider.update(state({ air: 0.8 }), { crouch: 0.3 }, -1,
    { x: 0, y: 0.98, z: -0.2 });

  assert.ok(Math.abs(rider.board.rotation.x - takeoffPitch) < 0.01);
});
