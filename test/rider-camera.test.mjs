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
