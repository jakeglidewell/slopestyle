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

test("a rising jump extends the rider out of the crouch", () => {
  const pose = getRiderPose(
    createRiderState({ air: 0.8, verticalVelocity: 5 }),
  );

  assert.ok(pose.airborne > 0 && pose.jumpStretch > 0);
});

test("the rider tucks near the top of a jump", () => {
  const rising = getRiderPose(
    createRiderState({ air: 0.5, verticalVelocity: 5 }),
  );
  const apex = getRiderPose(
    createRiderState({ air: 1.5, verticalVelocity: 0 }),
  );

  assert.ok(apex.crouch > rising.crouch);
});

test("landing compression visibly lowers the rider stance", () => {
  const neutral = getRiderPose(createRiderState({ compression: 0 }));
  const landing = getRiderPose(createRiderState({ compression: 1 }));

  assert.ok(landing.crouch > neutral.crouch);
});

test("a skidding board slips across the direction of travel", () => {
  const pose = getRiderPose(
    createRiderState({ edge: 1, skid: 0.7, slipAngle: 0.3 }),
  );

  assert.ok(pose.boardSlip > 0.1);
});

test("an edge catch tips the rider onto the snow", () => {
  const pose = getRiderPose(
    createRiderState({ crashed: true, crashSpin: 1 }),
  );

  assert.ok(Math.abs(pose.fallRotation) > 0.8);
});

test("powder produces more terrain heave than ice", () => {
  const powder = getRiderPose(
    createRiderState({ elapsed: 1.3, speed: 14, surface: "powder" }),
  );
  const ice = getRiderPose(
    createRiderState({ elapsed: 1.3, speed: 14, surface: "ice" }),
  );

  assert.ok(Math.abs(powder.bob) > Math.abs(ice.bob));
});

test("a powder bump compresses the knees and pitches the board", () => {
  const neutral = getRiderPose(createRiderState({ surface: "powder" }));
  const bump = getRiderPose(
    createRiderState({
      bumpImpact: 0.9,
      surface: "powder",
      terrainPitch: 0.35,
    }),
  );

  assert.ok(bump.crouch > neutral.crouch && bump.boardPitch > neutral.boardPitch);
});

test("the park stance stays low even without active input", () => {
  const pose = getRiderPose(createRiderState());

  assert.ok(pose.crouch >= 0.25);
});

test("an airborne shifty moves the board more than the torso", () => {
  const pose = getRiderPose(
    createRiderState({ air: 1, tweak: 0.9 }),
    { steer: 1 },
  );

  assert.ok(Math.abs(pose.boardTweak) > Math.abs(pose.upperBodyTwist) * 3);
});

test("holding crouch in the air reaches down for a grab", () => {
  const pose = getRiderPose(
    createRiderState({ air: 1, verticalVelocity: 0 }),
    { crouch: 1 },
  );

  assert.ok(pose.grab > 0.5);
});

test("a deep low carve reaches for a hand drag", () => {
  const pose = getRiderPose(
    createRiderState({ edge: 1, lean: 1 }),
    { crouch: 1 },
  );

  assert.ok(pose.handDrag > 0.5);
});
