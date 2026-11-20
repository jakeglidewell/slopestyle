import assert from "node:assert/strict";
import test from "node:test";

import { createRiderAnimator, getRiderPose } from "../src/rider/animation.js";
import { createRiderState, stepRider } from "../src/rider/physics.js";

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

test("leg travel reaches the pose once, as leg travel", () => {
  const neutral = getRiderPose(createRiderState({ compression: 0 }));
  const landing = getRiderPose(createRiderState({ compression: 0.7, legOffset: -0.3 }));
  const reaching = getRiderPose(createRiderState({ legOffset: 0.3 }));

  assert.equal(landing.legOffset, -0.3);
  assert.equal(reaching.legOffset, 0.3);
  // The hips drop by the leg travel itself; the crouch must not count it again.
  assert.equal(landing.crouch, neutral.crouch);
});

test("a stumble out of a sketchy landing shows in the pose", () => {
  const steady = getRiderPose(createRiderState({ speed: 18 }));
  const stumbling = getRiderPose(createRiderState({ speed: 18, stumble: 0.45 }));

  assert.ok(stumbling.stumble > steady.stumble + 0.4);
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

test("the grab reaches the board quickly and releases smoothly", () => {
  const animator = createRiderAnimator();
  const airborne = createRiderState({ air: 1.5, verticalVelocity: 0 });
  animator.step(airborne, {}, 1 / 60);
  const first = animator.step(airborne, { crouch: 1 }, 1 / 60);
  let held = first;
  for (let frame = 0; frame < 8; frame += 1) {
    held = animator.step(airborne, { crouch: 1 }, 1 / 60);
  }
  const released = animator.step(airborne, {}, 1 / 60);
  assert.ok(first.grab > 0 && first.grab < held.grab);
  assert.ok(held.grab > 0.8);
  assert.ok(released.grab < held.grab && released.grab > 0);
});

test("rough snow loads the rider's legs and flexes the board", () => {
  const calm = getRiderPose(createRiderState({ surface: "powder" }));
  const rough = getRiderPose(createRiderState({ surface: "powder",
    bumpImpact: 0.9, compression: 0.8, chatter: 0.7 }));
  assert.ok(rough.snowResponse > calm.snowResponse + 0.5);
  assert.ok(rough.boardFlex > calm.boardFlex + 0.3);
});

test("a deep low carve reaches for a hand drag", () => {
  const pose = getRiderPose(
    createRiderState({ edge: 1, lean: 1 }),
    { crouch: 1 },
  );

  assert.ok(pose.handDrag > 0.5);
});

test("a fast carve exposes a deeper board edge than body lean", () => {
  const slow = getRiderPose(createRiderState({ speed: 8, edge: 1, lean: 1 }));
  const fast = getRiderPose(createRiderState({ speed: 30, edge: 1, lean: 1 }));

  assert.ok(fast.boardRoll > 0.9 && fast.bodyTilt > 0.55);
  assert.ok(fast.boardRoll > fast.bodyTilt && fast.boardRoll > slow.boardRoll);
});

test("a straight glide carries a small living edge angle", () => {
  const pose = getRiderPose(createRiderState({ elapsed: 1.1, edge: 0 }));

  assert.ok(Math.abs(pose.boardRoll) >= 0.04 && Math.abs(pose.boardRoll) < 0.11);
});

test("the board stays flat on a rail", () => {
  const pose = getRiderPose(createRiderState({ surface: "rail", elapsed: 1.1 }));

  assert.ok(Math.abs(pose.boardRoll) < 0.02);
});

test("a board flick turns against the direction of travel", () => {
  const pose = getRiderPose(createRiderState({
    boardYaw: 0.9,
    heading: 0,
    torsoYaw: 0.1,
  }), { steer: 1 });

  assert.ok(pose.boardSwing > 0.6 && Math.abs(pose.shoulderTwist) < pose.boardSwing * 0.4);
});

test("the head starts a turn before the heavy upper body catches up", () => {
  const animator = createRiderAnimator();
  const state = createRiderState({ speed: 24 });
  animator.step(state, { carve: 0 }, 1 / 60);
  const first = animator.step(state, { carve: 1 }, 1 / 60);

  assert.ok(first.headLook > 0.1 && Math.abs(first.shoulderTwist) < first.headLook * 0.5);
});

test("a flick moves the board first and leaves the jacket settling last", () => {
  const animator = createRiderAnimator();
  const neutral = createRiderState({ speed: 22 });
  const flicked = createRiderState({ speed: 22, boardYaw: 0.9, slash: 1, steer: 1 });
  animator.step(neutral, {}, 1 / 60);
  const kick = animator.step(flicked, { steer: 1 }, 1 / 60);
  const release = animator.step(neutral, { steer: 0 }, 1 / 60);

  assert.ok(kick.boardSwing > Math.abs(kick.shoulderTwist) * 2);
  assert.ok(Math.abs(release.clothLag) > 0.01);
});

test("an air shifty twists the board while the shoulders stay quiet", () => {
  const pose = getRiderPose(createRiderState({ air: 1, tweak: 1 }), { steer: 1 });

  assert.ok(Math.abs(pose.boardSwing) > 1.1);
  assert.ok(Math.abs(pose.shoulderTwist) < 0.35);
});

test("the rider gathers in the air and opens before touching down", () => {
  const rising = getRiderPose(createRiderState({
    air: 1,
    airtime: 0.3,
    verticalVelocity: 3,
  }));
  const falling = getRiderPose(createRiderState({
    air: 0.2,
    airtime: 0.7,
    verticalVelocity: -4,
  }));

  assert.ok(rising.crouch > 0.45);
  assert.ok(falling.airOpen > 0.5 && falling.crouch < rising.crouch);
});

test("the landing folds quickly and rises more slowly", () => {
  const animator = createRiderAnimator();
  const level = { slopeGrade: 0.08, surface: "groomed", surfaceHeight: () => 0,
    surfaceNormal: () => ({ x: 0, y: 1, z: 0 }) };
  let state = createRiderState({ air: 0.6, airtime: 0.3, grounded: false, speed: 18,
    worldHeight: 0.6, worldVerticalVelocity: -3 });
  const legs = [];
  for (let step = 0; step < 240; step += 1) {
    state = stepRider(state, {}, 1 / 120, level);
    if (state.grounded) legs.push(animator.step(state, {}, 1 / 120).legOffset);
  }
  const deepest = legs.indexOf(Math.min(...legs));
  const risen = legs.findIndex((leg, index) => index > deepest && leg > legs[deepest] * 0.2);

  assert.ok(legs[0] > 0.1 && legs[deepest] < -0.05);
  assert.ok(deepest / 120 < 0.25, `folded in ${(deepest / 120).toFixed(2)} s`);
  assert.ok(risen - deepest > deepest,
    `folded in ${(deepest / 120).toFixed(2)} s, rose in ${((risen - deepest) / 120).toFixed(2)} s`);
});

test("a flick rises before the edge bites and folds the legs", () => {
  const neutral = getRiderPose(createRiderState({ surface: "powder" }));
  const lift = getRiderPose(createRiderState({ boardLightness: 1, slash: 1, surface: "powder" }));
  const bite = getRiderPose(createRiderState({ boardLightness: 0.15, slash: 1, surface: "powder" }));

  assert.ok(lift.boardBob < neutral.boardBob);
  assert.ok(bite.crouch > lift.crouch + 0.08);
});

test("a released flick swings slightly past straight and settles", () => {
  const animator = createRiderAnimator();
  const neutral = createRiderState({ speed: 22 });
  const kicked = createRiderState({ speed: 22, boardYaw: 0.8, steer: 1, slash: 1 });
  animator.step(neutral, {}, 1 / 60);
  for (let frame = 0; frame < 8; frame += 1) animator.step(kicked, { steer: 1 }, 1 / 60);
  let overshoot;
  for (let frame = 0; frame < 9; frame += 1) {
    overshoot = animator.step(neutral, { steer: 0 }, 1 / 60);
  }
  let settled;
  for (let frame = 0; frame < 15; frame += 1) {
    settled = animator.step(neutral, { steer: 0 }, 1 / 60);
  }

  assert.ok(overshoot.boardSwing < -0.06);
  assert.ok(Math.abs(settled.boardSwing) < 0.03);
});

test("a crash tumbles, sits up, and stands over the recovery window", () => {
  const early = getRiderPose(createRiderState({ crashed: true, crashSpin: 1, crashTimer: 1.9 }));
  const middle = getRiderPose(createRiderState({ crashed: true, crashSpin: 1, crashTimer: 1.0 }));
  const late = getRiderPose(createRiderState({ crashed: true, crashSpin: 1, crashTimer: 0.2 }));

  assert.ok(early.crashCollapse > 0.2);
  assert.ok(middle.crashSit > 0.5 && middle.crashCollapse > late.crashCollapse);
  assert.ok(Math.abs(late.fallRotation) < Math.abs(middle.fallRotation));
});
