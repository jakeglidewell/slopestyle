import assert from "node:assert/strict";
import test from "node:test";

import { getRiderPose } from "../src/rider/animation.js";
import { createRiderState } from "../src/rider/physics.js";

test("the rider leans into the engaged edge", () => {
  const pose = getRiderPose(createRiderState({ edge: 0.75 }));

  assert.ok(pose.lean > 0);
});

test("hard carving lowers the rider stance", () => {
  const neutral = getRiderPose(createRiderState({ edge: 0 }));
  const carving = getRiderPose(createRiderState({ edge: 1 }));

  assert.ok(carving.crouch > neutral.crouch);
});

test("explicit crouch input blends with the procedural carve pose", () => {
  const state = createRiderState({ edge: 0.4 });
  const automatic = getRiderPose(state, { crouch: 0 });
  const tucked = getRiderPose(state, { crouch: 1 });

  assert.ok(tucked.crouch > automatic.crouch);
});
