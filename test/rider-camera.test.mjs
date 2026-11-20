import assert from "node:assert/strict";
import test from "node:test";

import {
  createCameraState,
  stepCamera,
} from "../src/rider/camera.js";

test("the chase camera follows without snapping to the rider", () => {
  const camera = createCameraState();
  const next = stepCamera(
    camera,
    { heading: 0.4, position: { across: 10, downhill: 20 } },
    1 / 60,
  );

  assert.ok(next.position.across > 0 && next.position.across < 10);
});

test("the chase camera maintains a downhill look-ahead", () => {
  let camera = createCameraState();
  const rider = { heading: 0, position: { across: 0, downhill: 20 } };

  for (let frame = 0; frame < 180; frame += 1) {
    camera = stepCamera(camera, rider, 1 / 60);
  }

  assert.ok(camera.position.downhill > rider.position.downhill);
});

test("the camera leans with the body while ignoring a board flick", () => {
  let camera = createCameraState();
  const flicking = {
    boardYaw: 1,
    heading: 0,
    lean: 0,
    position: { across: 0, downhill: 10 },
    speed: 24,
  };
  for (let frame = 0; frame < 30; frame += 1) {
    camera = stepCamera(camera, flicking, 1 / 60);
  }
  assert.equal(camera.roll, 0);
  assert.ok(camera.zoom < 1);

  for (let frame = 0; frame < 30; frame += 1) {
    camera = stepCamera(camera, { ...flicking, lean: 1 }, 1 / 60);
  }
  assert.ok(camera.roll > 0.02);
});

const riding = (overrides = {}) => ({
  air: 0,
  heading: 0,
  lean: 0,
  position: { across: 2, downhill: 40 },
  speed: 20,
  worldHeight: 0,
  ...overrides,
});

test("without terrain the camera carries no rig", () => {
  const next = stepCamera(createCameraState(), riding(), 1 / 60);

  assert.equal(next.rig, undefined);
});

test("on a steady slope the rig sits where the chase camera always sat", () => {
  const terrain = { height: (_across, downhill) => -0.4 * downhill };
  let camera = createCameraState();
  let downhill = 40;
  for (let frame = 0; frame < 120; frame += 1) {
    downhill += 20 / 60;
    camera = stepCamera(camera, riding({ position: { across: 2, downhill },
      worldHeight: -0.4 * downhill }), 1 / 60, terrain);
  }
  const { position, target } = camera.rig;

  assert.ok(Math.abs(position.x - (camera.position.across - 1.3)) < 1e-9);
  assert.ok(Math.abs(position.z - -(downhill - 6.2)) < 1e-9);
  assert.ok(Math.abs(position.y - (-0.4 * (downhill - 6.2) + 2.55)) < 0.05,
    `camera ${position.y.toFixed(2)} m, expected ${(-0.4 * (downhill - 6.2) + 2.55).toFixed(2)} m`);
  assert.ok(Math.abs(target.x - (2 + 3)) < 1e-9);
  assert.ok(Math.abs(target.z - -(downhill + 15)) < 1e-9);
  assert.ok(Math.abs(target.y - (-0.4 * (downhill + 15) + 3.7)) < 0.05);
  assert.equal(camera.height, position.y);
  assert.equal(camera.lookHeight, target.y);
});

test("the rig rises with a rider in the air and looks further ahead", () => {
  const terrain = { height: () => 0 };
  let camera = createCameraState();
  for (let frame = 0; frame < 180; frame += 1) {
    camera = stepCamera(camera, riding({ air: 2, worldHeight: 2 }), 1 / 60, terrain);
  }

  assert.ok(Math.abs(camera.rig.position.y - (2 + 3.8)) < 0.05);
  assert.ok(Math.abs(camera.rig.position.z - -(40 - 8.5)) < 1e-9);
  assert.ok(Math.abs(camera.rig.target.z - -(40 + 35)) < 1e-9);
});

test("the rig eases to a new height instead of jumping", () => {
  const terrain = { height: () => 0 };
  let camera = createCameraState();
  for (let frame = 0; frame < 60; frame += 1) {
    camera = stepCamera(camera, riding(), 1 / 60, terrain);
  }
  const settled = camera.rig.position.y;
  camera = stepCamera(camera, riding({ air: 2, worldHeight: 2 }), 1 / 60, terrain);

  assert.ok(camera.rig.position.y > settled);
  assert.ok(camera.rig.position.y < settled + 0.4);
});

test("the rig never sinks into a bank beside the piste", () => {
  // The hill's line under the camera is near 0 m, but a wall of snow stands right there.
  const terrain = { height: (_across, downhill) => Math.abs(downhill - (40 - 6.2)) < 0.5 ? 3 : 0 };
  let camera = createCameraState({ position: { across: 2, downhill: 48 } });
  for (let frame = 0; frame < 60; frame += 1) {
    camera = stepCamera(camera, riding(), 1 / 60, terrain);
  }

  assert.ok(camera.rig.position.y >= 3 + 1);
});
