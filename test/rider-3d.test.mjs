import assert from "node:assert/strict";
import test from "node:test";

import { createRiderModel } from "../src/rider/model3d.js";
import { createRiderAnimator } from "../src/rider/animation.js";
import { createRiderState, stepRider } from "../src/rider/physics.js";

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

test("airborne arrows twist the visible board without turning the torso", () => {
  const rider = createRiderModel();
  rider.update(state({ air: 2 }), { boardTweak: 0, crouch: 0.5 }, 0);
  const neutralBoardYaw = rider.board.rotation.y;
  const neutralBodyYaw = rider.body.rotation.y;
  rider.update(state({ air: 2 }), { boardTweak: 1, crouch: 0.5 }, 0);
  assert.ok(Math.abs(rider.board.rotation.y - neutralBoardYaw) > 0.8);
  assert.equal(rider.body.rotation.y, neutralBodyYaw);
  rider.update(state({ air: 2 }), { boardTweak: 0, crouch: 0.5 }, 0);
  assert.equal(rider.board.rotation.y, neutralBoardYaw);
});

test("crouching lowers the rider without sinking the board", () => {
  const rider = createRiderModel();
  rider.update(state(), { crouch: 0.2 }, 0);
  const tallBody = rider.body.position.y;
  const boardHeight = rider.board.position.y;
  rider.update(state(), { crouch: 0.9 }, 0);

  assert.ok(rider.body.position.y < tallBody - 0.4 && rider.board.position.y === boardHeight);
});

test("holding crouch visibly lowers the helmet within a third of a second", () => {
  const rider = createRiderModel();
  const animator = createRiderAnimator();
  let current = createRiderState({ speed: 16, surface: "groomed" });
  let pose;
  for (let frame = 0; frame < 30; frame += 1) {
    current = stepRider(current, {}, 1 / 60, { surface: "groomed" });
    pose = animator.step(current, {}, 1 / 60);
  }
  rider.update(current, pose, 0);
  const tallHelmet = rider.body.position.y;
  const boardHeight = rider.board.position.y;
  for (let frame = 0; frame < 18; frame += 1) {
    current = stepRider(current, { crouch: 1 }, 1 / 60, { surface: "groomed" });
    pose = animator.step(current, { crouch: 1 }, 1 / 60);
  }
  rider.update(current, pose, 0);
  assert.ok(rider.body.position.y < tallHelmet - 0.3);
  assert.equal(rider.board.position.y, boardHeight);
});

test("jump extension raises the torso while the board follows the same arc", () => {
  const rider = createRiderModel();
  rider.update(state({ air: 0.45 }), { crouch: 0.35, jumpStretch: 0 }, 0);
  const tuckedTorso = rider.body.position.y;
  const boardHeight = rider.board.position.y;
  rider.update(state({ air: 0.45 }), { crouch: 0.35, jumpStretch: 1 }, 0);

  assert.ok(rider.body.position.y > tuckedTorso + 0.15);
  assert.equal(rider.board.position.y, boardHeight);
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

test("an airborne crouch moves a mitten onto the board edge", () => {
  const rider = createRiderModel();
  rider.update(state({ air: 1.7 }), { crouch: 0.8, grab: 0 }, -2);
  const openPitch = rider.body.rotation.x;
  rider.update(state({ air: 1.7 }), { crouch: 0.8, grab: 1 }, -2);
  rider.group.updateMatrixWorld(true);
  const hand = rider.grabHand.getWorldPosition(new rider.grabHand.position.constructor());
  const contact = rider.grabAnchor.getWorldPosition(new rider.grabAnchor.position.constructor());
  assert.ok(hand.distanceTo(contact) < 0.12);
  assert.ok(rider.body.rotation.x < openPitch - 0.15);
});

test("a deep carve drags only the downhill mitten through the snow", () => {
  const rider = createRiderModel();
  rider.update(state(), { crouch: 0.85, bodyTilt: 0.7, handDrag: 1 }, 0);
  rider.group.updateMatrixWorld(true);
  const hands = rider.hands.map((mitt) =>
    mitt.getWorldPosition(new mitt.position.constructor()));
  assert.ok(hands[1].y < 0.2);
  assert.ok(hands[0].y > hands[1].y + 0.3);
});

test("the 3D rider has distinct layered clothing and matching board details", () => {
  const rider = createRiderModel();
  const parts = new Set();
  rider.group.traverse((object) => {
    if (object.userData.part) parts.add(object.userData.part);
  });
  for (const part of ["baggy-pant-leg", "stacked-pant-cuff", "cargo-pocket",
    "oversized-tee", "long-sleeve-forearm", "helmet-shell",
    "goggle-lens", "binding-strap", "board-chevron"]) {
    assert.ok(parts.has(part), `missing ${part}`);
  }
});
