import assert from "node:assert/strict";
import test from "node:test";

import { createRiderAnimator, getRiderPose } from "../src/rider/animation.js";
import { crashRiderOnHazard, createRiderState, stepRider } from "../src/rider/physics.js";
import { snowSurfaceHeight } from "../src/mountain/terrain3d.js";

const FRAME = 1 / 60;
const LEVEL = { slopeGrade: 0.08, surface: "groomed", surfaceHeight: () => 0,
  surfaceNormal: () => ({ x: 0, y: 1, z: 0 }) };
const NO_HANDS = [{ x: 0, y: 0, out: 0 }, { x: 0, y: 0, out: 0 }];

const hands = (pose) => pose.arms ?? NO_HANDS;
const spread = (values) => Math.max(...values) - Math.min(...values);
const largestStep = (values) => Math.max(0,
  ...values.slice(1).map((value, index) => Math.abs(value - values[index])));
/** How far the line through both hands has turned, the way a positive board yaw turns. */
const armLine = (pose) => {
  const [lead, trail] = hands(pose);
  return Math.atan2(lead.x - trail.x, 0.52 + lead.out + trail.out);
};

/** Ride real physics for `seconds`, posing the rider every frame. */
const ride = (seconds, { animator = createRiderAnimator(), input = () => ({}),
  mountain = { surface: "groomed" }, from = createRiderState({ speed: 20, surface: "groomed" }),
} = {}) => {
  let state = from;
  const poses = [];
  const states = [];
  for (let frame = 0; frame < Math.round(seconds / FRAME); frame += 1) {
    const held = input(frame * FRAME);
    for (let step = 0; step < 2; step += 1) state = stepRider(state, held, FRAME / 2, mountain);
    poses.push(animator.step(state, held, FRAME));
    states.push(state);
  }
  return { animator, poses, state, states };
};

test("left alone on a straight run, the rider keeps moving, and moves smoothly", () => {
  const { poses } = ride(8);
  const settled = poses.slice(30);
  const channels = {
    crouch: settled.map((pose) => pose.crouch),
    leadHand: settled.map((pose) => hands(pose)[0].y),
    trailHand: settled.map((pose) => hands(pose)[1].y),
    styleYaw: settled.map((pose) => pose.styleYaw ?? 0),
    spineTwist: settled.map((pose) => pose.spineTwist ?? 0),
  };

  assert.ok(spread(channels.crouch) > 0.03, `knees moved ${spread(channels.crouch).toFixed(3)}`);
  assert.ok(spread(channels.leadHand) > 0.03 && spread(channels.trailHand) > 0.03,
    `hands moved ${spread(channels.leadHand).toFixed(3)} and ${spread(channels.trailHand).toFixed(3)} m`);
  // Nothing may jump from one frame to the next: in control, never twitchy.
  for (const [name, limit] of [["crouch", 0.02], ["leadHand", 0.02], ["trailHand", 0.02],
    ["styleYaw", 0.03], ["spineTwist", 0.02]]) {
    assert.ok(largestStep(channels[name]) < limit,
      `${name} jumped ${largestStep(channels[name]).toFixed(3)} in one frame`);
  }
});

test("every so often the rider throws in a small move of their own", () => {
  const moves = (poses) => poses.map((pose) => pose.flourish ?? "")
    .filter((name, index, names) => name && name !== names[index - 1]);
  const alone = ride(14).poses;
  const busy = ride(14, { input: (time) => ({ carve: Math.sin(time * 2.4) > 0 ? 0.7 : -0.7 }) }).poses;

  assert.ok(moves(alone).length >= 2, `${moves(alone).length} moves in 14 s`);
  assert.ok(new Set(moves(alone)).size >= 2, "the same move every time");
  assert.equal(moves(alone.slice(0, 90)).length, 0, "a move in the first second and a half");
  assert.equal(moves(busy).length, 0, "a move while the player was carving");
});

test("the rider's own moves never score a grab or turn the real board", () => {
  const { poses, state, states } = ride(14);

  poses.forEach((pose, frame) => {
    assert.ok(pose.grab < 0.5);
    assert.equal(pose.boardYaw, states[frame].boardYaw);
    assert.equal(pose.boardTweak, 0);
  });
  // The physics never heard about any of it: still running straight down the hill.
  assert.ok(Math.abs(state.position.across) < 0.5);
  assert.ok(poses.some((pose) => Math.abs(pose.styleYaw ?? 0) > 0.08),
    "the board never showed any style");
});

test("a quick flick snaps the hips round and throws the arms the other way", () => {
  const animator = createRiderAnimator();
  const neutral = createRiderState({ speed: 22 });
  const flicked = createRiderState({ speed: 22, boardYaw: 0.9, slash: 1, steer: 1 });
  let pose;
  for (let frame = 0; frame < 20; frame += 1) pose = animator.step(neutral, {}, FRAME);
  const rest = armLine(pose);
  for (let frame = 0; frame < 12; frame += 1) pose = animator.step(flicked, { steer: 1 }, FRAME);
  const thrown = armLine(pose) - rest;
  const after = [];
  for (let frame = 0; frame < 80; frame += 1) {
    after.push(armLine(animator.step(neutral, {}, FRAME)) - rest);
  }

  assert.ok(pose.hipTwist > 0.3, `hips came round ${pose.hipTwist.toFixed(2)} rad in 0.2 s`);
  assert.ok(thrown * Math.sign(pose.hipTwist) < -0.12,
    `the arms swung ${thrown.toFixed(2)} rad against hips at ${pose.hipTwist.toFixed(2)}`);
  // Loose, not robotic: they swing back past where they started, then settle.
  assert.ok(after.some((line) => line * Math.sign(thrown) < -0.015), "the arms never swung back past rest");
  assert.ok(Math.abs(after.at(-1)) < 0.04, `still ${after.at(-1).toFixed(2)} rad off after 1.3 s`);
});

test("the shoulders stay quieter than the hips through quick flicks", () => {
  const animator = createRiderAnimator();
  const states = [-1, 1].map((side) =>
    createRiderState({ speed: 22, boardYaw: side * 0.8, slash: 1, steer: side }));
  const poses = [];
  for (let frame = 0; frame < 180; frame += 1) {
    const side = Math.floor(frame / 15) % 2;
    poses.push(animator.step(states[side], { steer: side ? 1 : -1 }, FRAME));
  }
  const hips = spread(poses.map((pose) => pose.hipTwist));
  const shoulders = spread(poses.map((pose) => pose.spineTwist ?? pose.hipTwist));

  assert.ok(shoulders < hips * 0.5,
    `shoulders swung ${shoulders.toFixed(2)} rad, hips ${hips.toFixed(2)}`);
});

test("the shoulders open into a carve before the board comes round", () => {
  const animator = createRiderAnimator();
  const straight = createRiderState({ speed: 22 });
  let pose;
  for (let frame = 0; frame < 10; frame += 1) pose = animator.step(straight, {}, FRAME);
  for (let frame = 0; frame < 15; frame += 1) pose = animator.step(straight, { carve: 1 }, FRAME);
  const right = pose.spineTwist ?? 0;
  for (let frame = 0; frame < 40; frame += 1) pose = animator.step(straight, { carve: -1 }, FRAME);

  assert.ok(right > 0.08, `shoulders led ${right.toFixed(2)} rad into a right turn`);
  assert.ok((pose.spineTwist ?? 0) < -0.08);
});

test("the arms float up off a jump and soak the landing", () => {
  const animator = createRiderAnimator();
  const cruising = ride(1.5, { animator, mountain: LEVEL,
    from: createRiderState({ speed: 18, surface: "groomed" }) });
  const cruiseHands = hands(cruising.poses.at(-1)).map((hand) => hand.y);
  const launched = createRiderState({ ...cruising.state, air: 0.9, airtime: 0.05,
    grounded: false, worldHeight: 0.9, worldVerticalVelocity: 2.6, verticalVelocity: 2.6 });
  const flight = ride(2.6, { animator, mountain: LEVEL, from: launched });
  const landed = flight.poses.findIndex((pose) => pose.airborne <= 0);
  const inAir = flight.poses.slice(12, landed).map((pose) => hands(pose).map((hand) => hand.y));
  const afterLanding = flight.poses.slice(landed, landed + 30)
    .map((pose) => hands(pose).map((hand) => hand.y));
  const settledHands = hands(flight.poses.at(-1)).map((hand) => hand.y);

  assert.ok(landed > 20, `only ${landed} frames in the air`);
  for (const hand of [0, 1]) {
    const highest = Math.max(...inAir.map((pair) => pair[hand]));
    const lowest = Math.min(...afterLanding.map((pair) => pair[hand]));
    assert.ok(highest > cruiseHands[hand] + 0.1,
      `hand ${hand} rose ${(highest - cruiseHands[hand]).toFixed(2)} m in the air`);
    assert.ok(lowest < highest - 0.15,
      `hand ${hand} dropped ${(highest - lowest).toFixed(2)} m into the landing`);
    assert.ok(Math.abs(settledHands[hand] - cruiseHands[hand]) < 0.06,
      `hand ${hand} settled ${(settledHands[hand] - cruiseHands[hand]).toFixed(2)} m from where it rode`);
  }
});

test("hands off in the air, the rider styles it out and squares up to land", () => {
  const animator = createRiderAnimator();
  const floating = (airtime) =>
    createRiderState({ air: 1.5, airtime, grounded: false, speed: 20, verticalVelocity: 0 });
  animator.step(createRiderState({ speed: 20 }), {}, FRAME);
  let pose;
  for (let frame = 1; frame <= 40; frame += 1) pose = animator.step(floating(frame * FRAME), {}, FRAME);
  const styled = pose;
  const dropping = createRiderState({ air: 0.15, airtime: 0.9, grounded: false, speed: 20,
    verticalVelocity: -5 });
  for (let frame = 0; frame < 15; frame += 1) pose = animator.step(dropping, {}, FRAME);

  assert.ok(Math.abs(styled.styleYaw ?? 0) > 0.1,
    `the board was styled ${(styled.styleYaw ?? 0).toFixed(2)} rad`);
  assert.equal(styled.grab, 0);
  assert.equal(styled.boardTweak, 0);
  assert.ok(Math.abs(pose.styleYaw) < 0.03,
    `still ${pose.styleYaw.toFixed(2)} rad off straight a quarter second from the snow`);
});

test("the rider leaves the player's own air trick alone", () => {
  const animator = createRiderAnimator();
  animator.step(createRiderState({ speed: 20 }), {}, FRAME);
  let pose;
  for (let frame = 1; frame <= 40; frame += 1) {
    pose = animator.step(createRiderState({ air: 1.5, airtime: frame * FRAME, grounded: false,
      speed: 20, tweak: 0.8, verticalVelocity: 0 }), { steer: 1 }, FRAME);
  }

  assert.ok(Math.abs(pose.boardTweak) > 0.8);
  assert.ok(Math.abs(pose.styleYaw ?? 1) < 0.03);
});

test("successive jumps are not styled the same way", () => {
  const animator = createRiderAnimator();
  const grounded = createRiderState({ speed: 20 });
  const styles = [];
  for (let jump = 0; jump < 2; jump += 1) {
    for (let frame = 0; frame < 20; frame += 1) animator.step(grounded, {}, FRAME);
    let pose;
    for (let frame = 1; frame <= 40; frame += 1) {
      pose = animator.step(createRiderState({ air: 1.5, airtime: frame * FRAME, grounded: false,
        speed: 20, verticalVelocity: 0 }), {}, FRAME);
    }
    styles.push(pose.styleYaw ?? 0);
  }

  assert.ok(styles[0] * styles[1] < 0, `styled ${styles.map((yaw) => yaw.toFixed(2))}`);
});

test("on the game's own rolling powder the rider still finds room for moves of their own", () => {
  // The game always rides powder: the board bucks under the body and small floats
  // come every few seconds. None of that is the player doing anything.
  const { poses } = ride(24, { mountain: { surface: "powder", surfaceHeight: snowSurfaceHeight },
    from: createRiderState({ speed: 16, surface: "powder" }) });
  const moves = poses.map((pose) => pose.flourish ?? "")
    .filter((name, index, names) => name && name !== names[index - 1]);
  const unsettled = poses.filter((pose) => pose.stumble > 0.25).length / poses.length;

  assert.ok(moves.length >= 2, `${moves.length} moves in 24 s of hands-off powder`);
  assert.ok(unsettled < 0.1,
    `the rider looked unsettled ${(unsettled * 100).toFixed(0)}% of the time just riding bumps`);
});

test("riding switch, the hands swap jobs: the one now leading does what the lead hand does", () => {
  const regular = getRiderPose(createRiderState({ speed: 20, edge: 0.5, lean: 0.5 }));
  const riding = getRiderPose(createRiderState({ speed: 20, edge: 0.5, lean: 0.5, switchRiding: true }));
  const mirrored = getRiderPose(createRiderState({ speed: 20, edge: -0.5, lean: -0.5 }));

  // Switch on the same edge of the hill is the mirror of riding regular on the other.
  for (const hand of [0, 1]) {
    for (const axis of ["x", "y", "out"]) {
      // (to within the rider's small idle sway, which does not mirror)
      assert.ok(Math.abs(riding.arms[hand][axis] - mirrored.arms[1 - hand][axis]) < 0.005,
        `hand ${hand} ${axis}: ${riding.arms[hand][axis]} against ${mirrored.arms[1 - hand][axis]}`);
    }
  }
  assert.notDeepEqual(riding.arms, regular.arms);
});

test("a crash goes down fast, stays down while the rider slides, then gets them back up", () => {
  const animator = createRiderAnimator();
  let state = createRiderState({ speed: 24, surface: "powder" });
  for (let frame = 0; frame < 30; frame += 1) {
    state = stepRider(state, {}, FRAME, { surface: "powder" });
    animator.step(state, {}, FRAME);
  }
  const boardBefore = animator.step(state, {}, 0).boardYaw;
  state = crashRiderOnHazard(state, { x: 1 });
  const seen = [];
  for (let frame = 0; frame < 150; frame += 1) {
    state = stepRider(state, {}, FRAME, { surface: "powder" });
    seen.push({ ...animator.step(state, {}, FRAME), crashed: state.crashed, time: frame * FRAME });
  }
  const at = (seconds) => seen[Math.round(seconds / FRAME)];

  assert.ok(at(0.3).fall > 0.9, `0.3 s in the rider is only ${at(0.3).fall.toFixed(2)} of the way down`);
  assert.ok(at(0.8).fall > 0.9);
  assert.ok(at(1.5).fall < 0.75 && at(1.5).fall > 0.1, "not getting up by 1.5 s");
  assert.ok(at(2.2).fall === 0 && !at(2.2).crashed, "not back up and riding by 2.2 s");
  // Down and up are movements, not jumps.
  const jump = Math.max(...seen.slice(1).map((pose, index) => Math.abs(pose.fall - seen[index].fall)));
  assert.ok(jump < 0.12, `the fall jumped ${jump.toFixed(2)} in one frame`);
  // The board goes down with the rider: it does not spin like a top under them.
  const turned = Math.max(...seen.filter((pose) => pose.time < 1.2)
    .map((pose) => Math.abs(Math.atan2(Math.sin(pose.boardYaw - boardBefore), Math.cos(pose.boardYaw - boardBefore)))));
  assert.ok(turned < 0.25, `the board turned ${turned.toFixed(2)} rad under the fallen rider`);
});

test("what went wrong decides how the rider goes down", () => {
  const kind = (overrides) => getRiderPose(createRiderState({ crashed: true, crashTimer: 1.6,
    speed: 14, ...overrides })).fallKind;

  // Hitting something, or catching the edge the chest is facing: thrown onto the front.
  assert.equal(kind({ crashReason: "hazard", crashSpin: 1 }), "front");
  assert.equal(kind({ crashReason: "edge-catch", crashSpin: 1, velocity: { across: 6, downhill: 10 } }), "front");
  // Catching the edge behind the heels throws the rider onto their back.
  assert.equal(kind({ crashReason: "edge-catch", crashSpin: -1, velocity: { across: -6, downhill: 10 } }), "back");
  // Riding switch the heels are on the other side of the hill.
  assert.equal(kind({ crashReason: "edge-catch", crashSpin: 1, switchRiding: true,
    velocity: { across: 6, downhill: 10 } }), "back");
  // A landing too hard for the legs just sits the rider down.
  assert.equal(kind({ crashReason: "impact-overload", crashSpin: 1 }), "sit");
  assert.equal(getRiderPose(createRiderState({ speed: 14 })).fallKind, "");
});
