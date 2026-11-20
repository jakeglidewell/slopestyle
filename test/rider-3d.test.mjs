import assert from "node:assert/strict";
import test from "node:test";

import * as THREE from "../src/vendor/three/three.module.js";
import { createRiderModel } from "../src/rider/model3d.js";
import { createRiderAnimator } from "../src/rider/animation.js";
import { createRiderState, stepRider } from "../src/rider/physics.js";
import { snowSurfaceHeight, snowSurfaceNormal } from "../src/mountain/terrain3d.js";
import { planeBoard } from "../src/rider/planing.js";

const state = (overrides = {}) => ({
  air: 0,
  boardYaw: 0,
  heading: 0,
  position: { across: 0, downhill: 0 },
  torsoYaw: 0,
  ...overrides,
});

const LEVEL = { x: 0, y: 1, z: 0 };

/** Every mesh of the rider whose part name passes `match`, with world matrices current. */
const partsOf = (rider, match) => {
  rider.group.updateMatrixWorld(true);
  const found = [];
  rider.group.traverse((object) => {
    if (object.isMesh && match(object.userData.part ?? "")) found.push(object);
  });
  return found;
};
const boundsOf = (meshes) => {
  const bounds = new THREE.Box3();
  for (const mesh of meshes) bounds.expandByObject(mesh);
  return bounds;
};
const centerOf = (meshes) => boundsOf(meshes).getCenter(new THREE.Vector3());
const worldOf = (object) => object.getWorldPosition(new THREE.Vector3());

/** The rider's skeleton: hips, knees, ankles, shoulders, elbows and hands, lead side first. */
const jointsOf = (rider) => {
  assert.ok(rider.joints, "the model exposes no skeleton");
  rider.group.updateMatrixWorld(true);
  // Joints live in the rig, which is what goes over when the rider falls.
  const place = (joint) => (rider.rig ? joint.clone().applyMatrix4(rider.rig.matrixWorld)
    : joint.clone().add(rider.group.position));
  return Object.fromEntries(Object.entries(rider.joints).map(([name, pair]) =>
    [name, pair.map(place)]));
};
const boneLengths = (rider) => {
  const joint = jointsOf(rider);
  const between = (from, to) => [0, 1].map((side) => joint[from][side].distanceTo(joint[to][side]));
  return { thigh: between("hips", "knees"), shin: between("knees", "ankles"),
    upperArm: between("shoulders", "elbows"), forearm: between("elbows", "hands") };
};
/** Which way the line from the lead joint to the trailing one points, seen from above. */
const yawOf = ([lead, trail]) => Math.atan2(trail.x - lead.x, trail.z - lead.z);
/**
 * The cloth of `part` number `index` beside the stretch of bone from `from` to `to`:
 * the middle of it and how wide it is around the bone.
 */
const clothAround = (rider, part, index, from, to, start = 0.3, end = 0.7) => {
  const mesh = partsOf(rider, (name) => name === part)[index];
  assert.ok(mesh, `no ${part} ${index}`);
  const along = to.clone().sub(from);
  const length = along.length();
  along.normalize();
  const beside = [];
  const corner = new THREE.Vector3();
  const { position } = mesh.geometry.attributes;
  const off = (point) => {
    const out = point.clone().sub(from);
    return out.addScaledVector(along, -out.dot(along)).length();
  };
  for (let vertex = 0; vertex < position.count; vertex += 1) {
    corner.fromBufferAttribute(position, vertex).applyMatrix4(mesh.matrixWorld);
    const reach = corner.clone().sub(from).dot(along) / length;
    // Beside this bone, not cloth from the far side of a folded joint.
    if (reach >= start && reach <= end && off(corner) < 0.3) beside.push(corner.clone());
  }
  assert.ok(beside.length >= 6, `no ${part} cloth beside that bone`);
  const middle = beside.reduce((sum, point) => sum.add(point), new THREE.Vector3())
    .divideScalar(beside.length);
  return { middle, width: 2 * Math.max(...beside.map(off)) };
};

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

test("folded legs lower the hips; stretched legs raise them only until they are straight", () => {
  const rider = createRiderModel();
  rider.update(state(), { crouch: 0.3, legOffset: 0 }, 0);
  const neutralHips = rider.body.position.y;
  const boardHeight = rider.board.position.y;
  rider.update(state(), { crouch: 0.3, legOffset: -0.3 }, 0);
  const foldedHips = rider.body.position.y;
  rider.update(state(), { crouch: 0.3, legOffset: 0.3 }, 0);

  // Folding is leg travel, metre for metre.
  assert.ok(Math.abs(foldedHips - (neutralHips - 0.3)) < 0.01);
  // The rider already stands tall, so there is little left to reach with: the
  // hips rise as far as straight legs allow and no further.
  const rose = rider.body.position.y - neutralHips;
  assert.ok(rose > -0.005 && rose < 0.3, `the hips rose ${rose.toFixed(3)} m`);
  for (const lengths of Object.values(boneLengths(rider))) {
    for (const length of lengths) assert.ok(length < 0.72);
  }
  assert.equal(rider.board.position.y, boardHeight);
});

test("cruising, the rider stands tall on nearly straight legs", () => {
  const rider = createRiderModel();
  const knees = (snow) => {
    rider.update(state(), { crouch: 0.28 }, 0, snow);
    const joint = jointsOf(rider);
    return [0, 1].map((side) => joint.hips[side].clone().sub(joint.knees[side])
      .angleTo(joint.ankles[side].clone().sub(joint.knees[side])) * 180 / Math.PI);
  };
  const level = knees(LEVEL);
  const onTheHill = knees({ x: 0, y: 1, z: -0.35 });

  assert.ok(Math.min(...level) > 140, `on the flat the knees are at ${level.map((k) => k.toFixed(0))} degrees`);
  // On a pitch the downhill leg is the long one; the uphill knee has to stay bent.
  assert.ok(Math.max(...onTheHill) > 150 && Math.max(...onTheHill) < 172,
    `on the hill the knees are at ${onTheHill.map((k) => k.toFixed(0))} degrees`);
});

test("the legs never fold through the board or stretch past straight", () => {
  const rider = createRiderModel();
  rider.update(state(), { crouch: 1, legOffset: -0.42 }, 0);
  const lowest = rider.body.position.y - rider.board.position.y;
  rider.update(state({ air: 1 }), { crouch: 0, jumpStretch: 1, legOffset: 0.45 }, 0);
  const tallest = rider.body.position.y - rider.board.position.y;

  assert.ok(lowest > 0.4, `hips ${lowest.toFixed(2)} m above the board`);
  assert.ok(tallest < 1.5, `hips ${tallest.toFixed(2)} m above the board`);
});

test("over powder the hips ride the body's smooth line while the board follows the snow", () => {
  const rider = createRiderModel();
  const animator = createRiderAnimator();
  const mountain = { surface: "powder", surfaceHeight: snowSurfaceHeight,
    surfaceNormal: snowSurfaceNormal };
  let current = createRiderState({ speed: 24, surface: "powder" });
  const hips = [];
  const boards = [];
  for (let frame = 0; frame < 240; frame += 1) {
    for (let step = 0; step < 2; step += 1) current = stepRider(current, {}, 1 / 120, mountain);
    const pose = animator.step(current, {}, 1 / 60);
    const snow = snowSurfaceHeight(current.position.across, current.position.downhill, "powder");
    // As in the game: the board planes along the snow, the body stands on its own line.
    rider.update(current, pose, snow, undefined,
      planeBoard((across, downhill) => snowSurfaceHeight(across, downhill, "powder"),
        current.position.across, current.position.downhill, current.boardYaw));
    if (frame < 60 || !current.grounded) continue;
    // Take out the hill itself: what is left is how much each part bobs.
    hips.push(rider.body.position.y - current.worldHeight + current.ride);
    boards.push(rider.board.position.y - current.worldHeight + current.ride);
  }
  const swing = (values) => Math.max(...values) - Math.min(...values);

  assert.ok(swing(boards) > 0.3, `the board only moved ${swing(boards).toFixed(2)} m`);
  // Standing tall there is less leg to soak the hill with than in a deep crouch:
  // the hips still move less than the board, but they do come down with it when
  // the snow drops away further than straight legs reach.
  assert.ok(swing(hips) < swing(boards) * 0.9,
    `hips swung ${swing(hips).toFixed(2)} m, the board ${swing(boards).toFixed(2)} m`);
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
  // Gathered in the air, as the rider is: standing tall there is nothing to extend.
  rider.update(state({ air: 0.45 }), { crouch: 0.6, jumpStretch: 0 }, 0);
  const tuckedTorso = rider.body.position.y;
  const boardHeight = rider.board.position.y;
  rider.update(state({ air: 0.45 }), { crouch: 0.6, jumpStretch: 1 }, 0);

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
  const helmetAboveBoard = () =>
    centerOf(partsOf(rider, (part) => part === "helmet-shell")).y - rider.board.position.y;
  rider.update(state({ air: 1.7 }), { crouch: 0.8, grab: 0 }, -2);
  const open = helmetAboveBoard();
  rider.update(state({ air: 1.7 }), { crouch: 0.8, grab: 1 }, -2);
  rider.group.updateMatrixWorld(true);
  const hand = rider.grabHand.getWorldPosition(new rider.grabHand.position.constructor());
  const contact = rider.grabAnchor.getWorldPosition(new rider.grabAnchor.position.constructor());
  assert.ok(hand.distanceTo(contact) < 0.12);
  // Reaching the board folds the whole rider down over it.
  assert.ok(helmetAboveBoard() < open - 0.15,
    `the helmet came down ${(open - helmetAboveBoard()).toFixed(2)} m`);
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
    "oversized-tee", "long-sleeve", "helmet-shell",
    "goggle-lens", "binding-strap", "board-chevron"]) {
    assert.ok(parts.has(part), `missing ${part}`);
  }
});

test("the rider is built from flat facets in solid colours on a low-poly budget", () => {
  const rider = createRiderModel();
  let triangles = 0;
  rider.group.traverse((object) => {
    if (!object.isMesh || object === rider.shadow) return;
    const { index, attributes } = object.geometry;
    triangles += (index ? index.count : attributes.position.count) / 3;
    for (const surface of [object.material].flat()) {
      assert.equal(surface.flatShading, true, `${object.userData.part} is smooth shaded`);
      assert.equal(surface.map, null, `${object.userData.part} carries a texture`);
    }
  });

  // Rider, clothes, and a board with real bindings: still a low-poly figure.
  assert.ok(triangles > 300 && triangles < 1800, `${triangles} triangles`);
});

test("standing tall, the rider has a person's proportions", () => {
  const rider = createRiderModel();
  rider.update(state(), { crouch: 0, legOffset: 0.22 }, 0, LEVEL);
  const head = boundsOf(partsOf(rider, (part) =>
    part === "face" || part.startsWith("helmet") || part.startsWith("goggle")));
  const joint = jointsOf(rider);
  const height = head.max.y - rider.board.position.y;
  const headHeight = head.max.y - head.min.y;
  const shoulders = joint.shoulders[0].distanceTo(joint.shoulders[1]);
  const arm = joint.shoulders[0].distanceTo(joint.elbows[0]) +
    joint.elbows[0].distanceTo(joint.hands[0]);
  const leg = joint.hips[0].distanceTo(joint.knees[0]) + joint.knees[0].distanceTo(joint.ankles[0]);

  assert.ok(height / headHeight > 6.5 && height / headHeight < 8.5,
    `${(height / headHeight).toFixed(1)} heads tall`);
  assert.ok(shoulders > height * 0.19 && shoulders < height * 0.27,
    `shoulder joints ${(shoulders / height * 100).toFixed(0)}% of the rider's height apart`);
  assert.ok(rider.body.position.y - rider.board.position.y > height * 0.48,
    "the legs are shorter than half the rider");
  // Arms about two thirds the length of the legs, as on a person.
  assert.ok(arm > leg * 0.55 && arm < leg * 0.75, `arms ${(arm / leg * 100).toFixed(0)}% of the legs`);
});

test("no pose stretches a limb: every bone keeps its length", () => {
  const rider = createRiderModel();
  const seen = { thigh: [], shin: [], upperArm: [], forearm: [] };
  const poses = [
    [state(), { crouch: 0.1 }], [state(), { crouch: 0.3 }],
    [state(), { crouch: 0.6, legOffset: -0.2 }], [state(), { crouch: 0.95 }],
    [state(), { crouch: 0.3, legOffset: 0.25 }],
    [state(), { crouch: 0.5, bodyTilt: 0.6, boardRoll: 0.8 }],
    [state(), { crouch: 0.4, bodyTilt: -0.6, boardRoll: -0.8 }],
    [state(), { crouch: 0.4, arms: [{ x: 0.3, y: -0.2, out: 0.35 }, { x: -0.1, y: -0.6, out: 0.1 }] }],
    // The poses that used to pull the rider out of shape.
    [state({ air: 1.7 }), { crouch: 0.8, grab: 1 }], [state({ air: 1.2 }), { crouch: 0.3, grab: 1 }],
    [state(), { crouch: 0.85, bodyTilt: 0.7, handDrag: 1 }],
    [state(), { crouch: 0.3, bodyTilt: 0.3, handDrag: 1 }],
    [state({ air: 1 }), { crouch: 0, jumpStretch: 1, legOffset: 0.45 }],
    [state({ boardYaw: 1.3 }), { crouch: 0.3, boardPitch: 0.3, boardRoll: 0.9 }],
    [state(), { crouch: 0.3, arms: [{ x: 1.4, y: 0.6, out: 0.9 }, { x: -1.2, y: -1.5, out: 1.1 }] }],
    [state(), { crouch: 0.6, stumble: 1, fallRotation: 1.5 }],
  ];
  for (const snow of [LEVEL, { x: 0, y: 1, z: -0.5 }, { x: 0.2, y: 1, z: -0.2 }]) {
    for (const [riding, pose] of poses) {
      rider.update(riding, pose, 0, snow);
      for (const [bone, lengths] of Object.entries(boneLengths(rider))) seen[bone].push(...lengths);
    }
  }

  for (const [bone, lengths] of Object.entries(seen)) {
    const stretch = Math.max(...lengths) / Math.min(...lengths);
    assert.ok(stretch < 1.01, `a ${bone} changed length by ${((stretch - 1) * 100).toFixed(0)}%`);
  }
});

test("the knees fold out over the toes as the rider gets low", () => {
  const rider = createRiderModel();
  rider.update(state(), { crouch: 0.75 }, 0, LEVEL);
  const [lead, trail] = jointsOf(rider).knees;

  // Toes point toward +x with the board running straight down the hill.
  assert.ok(lead.x > 0.2 && trail.x > 0.2,
    `knees ${lead.x.toFixed(2)} and ${trail.x.toFixed(2)} m toward the toes`);
  assert.ok(Math.abs(lead.z - trail.z) > 0.5, "the knees are knocked together");
});

const facing = (rider) => {
  const lens = centerOf(partsOf(rider, (part) => part === "goggle-lens"));
  const helmet = centerOf(partsOf(rider, (part) => part === "helmet-shell"));
  return lens.sub(helmet).setY(0).normalize();
};

test("the rider looks where they are going, not back at the camera", () => {
  const rider = createRiderModel();
  rider.update(state(), { crouch: 0.3 }, 0);
  const straight = facing(rider);
  rider.update(state({ heading: 0.6, boardYaw: 0.6, torsoYaw: 0.6 }), { crouch: 0.3 }, 0);
  const turning = facing(rider);

  // Downhill is -z; a heading of 0.6 rad travels toward +x.
  assert.ok(straight.z < -0.8, `goggles point ${straight.z.toFixed(2)} along downhill`);
  assert.ok(turning.x > 0.4 && turning.z < -0.6);
});

test("spinning, the head spots the way down only as far as a neck turns", () => {
  const rider = createRiderModel();
  for (const turned of [0.6, 1.4, 2.4, Math.PI, -2.2]) {
    rider.update(state({ air: 2, torsoYaw: turned }), { crouch: 0.5 }, 0);
    // Chest front is a quarter turn from the line through the shoulders.
    const [lead, trail] = jointsOf(rider).shoulders;
    const across = trail.sub(lead).setY(0).normalize();
    const chestFront = new THREE.Vector3(across.z, 0, -across.x);
    const neckTurn = facing(rider).angleTo(chestFront);
    assert.ok(neckTurn < 1.5, `neck turned ${neckTurn.toFixed(2)} rad with the torso at ${turned}`);
  }
});

test("the hips swing with the board while the shoulders hold back", () => {
  const rider = createRiderModel();
  rider.update(state(), { crouch: 0.4 }, 0, LEVEL);
  const rest = jointsOf(rider);
  rider.update(state({ boardYaw: 0.7 }), { crouch: 0.4 }, 0, LEVEL);
  const swung = jointsOf(rider);
  const hipTurn = Math.abs(yawOf(swung.hips) - yawOf(rest.hips));
  const shoulderTurn = Math.abs(yawOf(swung.shoulders) - yawOf(rest.shoulders));

  assert.ok(hipTurn > 0.25, `the hips turned ${hipTurn.toFixed(2)} rad with the board`);
  assert.ok(shoulderTurn < hipTurn * 0.4,
    `shoulders turned ${shoulderTurn.toFixed(2)} rad, hips ${hipTurn.toFixed(2)}`);
});

test("the spine only twists as far as a spine does", () => {
  const rider = createRiderModel();
  for (const boardYaw of [0.9, 1.5, -1.5]) {
    rider.update(state({ boardYaw }), { crouch: 0.4, hipTwist: boardYaw }, 0, LEVEL);
    const joint = jointsOf(rider);
    const twist = Math.abs(Math.atan2(Math.sin(yawOf(joint.hips) - yawOf(joint.shoulders)),
      Math.cos(yawOf(joint.hips) - yawOf(joint.shoulders))));
    assert.ok(twist < 0.85, `hips ${twist.toFixed(2)} rad round from the shoulders`);
  }
});

test("a hand never passes the reach of its arm, and a free arm keeps a soft elbow", () => {
  const rider = createRiderModel();
  rider.update(state(), { crouch: 0.3,
    arms: [{ x: 1.4, y: 0.6, out: 0.9 }, { x: -1.2, y: -1.5, out: 1.1 }] }, 0, LEVEL);
  const joint = jointsOf(rider);

  for (const side of [0, 1]) {
    const elbow = joint.shoulders[side].clone().sub(joint.elbows[side])
      .angleTo(joint.hands[side].clone().sub(joint.elbows[side]));
    assert.ok(elbow < 2.7, `elbow ${side} opened to ${(elbow * 180 / Math.PI).toFixed(0)} degrees`);
  }
});

test("crouched, carving or tucked, the pants are one garment joined to the body", () => {
  const rider = createRiderModel();
  for (const [riding, pose] of [
    [state(), { crouch: 0.2 }], [state(), { crouch: 0.6 }],
    [state(), { crouch: 1, legOffset: -0.3 }],
    [state(), { crouch: 0.7, bodyTilt: 0.6, boardRoll: 0.8 }],
    [state({ air: 1.5 }), { crouch: 0.9, grab: 1 }],
  ]) {
    rider.update(riding, pose, 0);
    const joint = jointsOf(rider);
    const legs = partsOf(rider, (part) => part === "baggy-pant-leg");
    const seat = boundsOf(partsOf(rider, (part) => part === "pant-seat"));
    const shirt = boundsOf(partsOf(rider, (part) => part === "oversized-tee"));
    assert.equal(legs.length, 2);
    for (const side of [0, 1]) {
      // One length of cloth wraps hip, knee and shin, and runs up inside the seat.
      const cloth = boundsOf([legs[side]]).expandByScalar(0.01);
      for (const [name, at] of [["hip", joint.hips[side]], ["knee", joint.knees[side]],
        ["shin", joint.knees[side].clone().lerp(joint.ankles[side], 0.8)]]) {
        assert.ok(cloth.containsPoint(at), `leg ${side} has no cloth at the ${name}, crouch ${pose.crouch}`);
      }
      assert.ok(cloth.intersectsBox(seat) && cloth.intersectsBox(shirt),
        `leg ${side} is not joined to the seat and the shirt, crouch ${pose.crouch}`);
    }
    // Nothing shows between the thighs either: the seat hangs down to fill it.
    const crotch = joint.hips[0].clone().lerp(joint.knees[0], 0.2)
      .add(joint.hips[1].clone().lerp(joint.knees[1], 0.2)).multiplyScalar(0.5);
    assert.ok(seat.expandByScalar(0.01).containsPoint(crotch),
      `daylight between the thighs, crouch ${pose.crouch}`);
  }
});

test("the pants hang off the leg like cloth, lowest under a folded thigh", () => {
  const rider = createRiderModel();
  rider.update(state(), { crouch: 0.95, legOffset: -0.2 }, 0, LEVEL);
  const joint = jointsOf(rider);

  for (const side of [0, 1]) {
    const bone = joint.hips[side].clone().lerp(joint.knees[side], 0.5);
    const cloth = clothAround(rider, "baggy-pant-leg", side, joint.hips[side], joint.knees[side]);
    assert.ok(cloth.middle.y < bone.y - 0.015,
      `thigh cloth sits ${(bone.y - cloth.middle.y).toFixed(3)} m below the bone`);
  }
});

test("the pant legs trail a quick move of the board and then settle", () => {
  const rider = createRiderModel();
  let time = 0;
  // Where the cloth round each shin sits, measured from the shin and along it, so
  // the same number comes back whichever way the leg is turned.
  const slack = (boardYaw) => {
    time += 1 / 60;
    rider.update(state({ boardYaw, elapsed: time }), { crouch: 0.4 }, 0, LEVEL);
    const joint = jointsOf(rider);
    return [0, 1].map((side) => {
      const cloth = clothAround(rider, "baggy-pant-leg", side, joint.knees[side],
        joint.ankles[side], 0.4, 0.9).middle;
      return cloth.sub(joint.knees[side].clone().lerp(joint.ankles[side], 0.56)).length();
    });
  };
  for (let frame = 0; frame < 40; frame += 1) slack(0);
  const rest = slack(0);
  const flicked = [slack(0.5), slack(1), slack(1)];
  for (let frame = 0; frame < 70; frame += 1) slack(1);
  const settled = slack(1);

  for (const side of [0, 1]) {
    const trailed = Math.max(...flicked.map((pair) => pair[side])) - rest[side];
    assert.ok(trailed > 0.02, `the cloth on leg ${side} trailed ${trailed.toFixed(3)} m`);
    assert.ok(Math.abs(settled[side] - rest[side]) < 0.012);
  }
});

test("at speed the cloth is never dead still, and it is when the rider is", () => {
  const rider = createRiderModel();
  const drift = (speed) => {
    const seen = [];
    for (let frame = 0; frame < 40; frame += 1) {
      rider.update(state({ elapsed: 5 + frame / 60, speed }), { crouch: 0.4 }, 0, LEVEL);
      const joint = jointsOf(rider);
      seen.push(clothAround(rider, "baggy-pant-leg", 1, joint.knees[1], joint.ankles[1], 0.4, 0.9).middle);
    }
    return Math.max(...seen.slice(10).map((middle) => middle.distanceTo(seen[10])));
  };

  assert.ok(drift(26) > 0.004, `the cloth moved ${drift(26).toFixed(4)} m at speed`);
  assert.ok(drift(0) < 0.001);
});

test("the hands go where the pose sends them", () => {
  const rider = createRiderModel();
  rider.update(state(), { crouch: 0.3,
    arms: [{ x: 0.25, y: -0.15, out: 0.4 }, { x: 0, y: -0.7, out: 0.12 }] }, 0, LEVEL);
  const [lead, trail] = rider.hands.map(worldOf);
  rider.update(state(), { crouch: 0.3,
    arms: [{ x: 0, y: -0.7, out: 0.12 }, { x: 0.25, y: -0.15, out: 0.4 }] }, 0, LEVEL);
  const [leadLow, trailHigh] = rider.hands.map(worldOf);

  assert.ok(lead.y > trail.y + 0.4 && trailHigh.y > leadLow.y + 0.4);
  assert.ok(Math.abs(lead.y - trailHigh.y) < 0.05);
});

test("a styled board angle turns the board without moving the shoulders", () => {
  const rider = createRiderModel();
  rider.update(state(), { crouch: 0.3 }, 0, LEVEL);
  const board = rider.board.rotation.y;
  const torso = rider.body.rotation.y;
  rider.update(state(), { crouch: 0.3, styleYaw: 0.2 }, 0, LEVEL);

  assert.ok(Math.abs(Math.abs(rider.board.rotation.y - board) - 0.2) < 1e-6);
  assert.equal(rider.body.rotation.y, torso);
});

test("the rider wears a black tee over white long sleeves, white snow pants and a black helmet", () => {
  const rider = createRiderModel();
  const shade = (name) => {
    const [mesh] = partsOf(rider, (part) => part === name);
    assert.ok(mesh, `no ${name}`);
    const hex = [mesh.material].flat()[0].color.getHex();
    return [hex >> 16 & 255, hex >> 8 & 255, hex & 255].map((channel) => channel / 255);
  };
  const black = (name) => assert.ok(Math.max(...shade(name)) < 0.22, `${name} is not black`);
  const white = (name) => assert.ok(Math.min(...shade(name)) > 0.8, `${name} is not white`);

  for (const part of ["oversized-tee", "tee-sleeve", "helmet-shell",
    "goggle-frame", "goggle-strap"]) black(part);
  white("undershirt-hem");
  for (const part of ["long-sleeve", "baggy-pant-leg", "pant-seat", "stacked-pant-cuff"]) white(part);
  // Titanium lenses: a bright neutral grey with a metal sheen.
  const lens = shade("goggle-lens");
  const [lensMesh] = partsOf(rider, (part) => part === "goggle-lens");
  assert.ok(Math.max(...lens) - Math.min(...lens) < 0.1, "the lens is tinted");
  assert.ok(Math.min(...lens) > 0.45 && Math.max(...lens) < 0.82, "the lens is not titanium grey");
  assert.ok(lensMesh.material.metalness >= 0.4);
});

test("the snow pants are baggy: far wider than the sleeves, and they stack over the boots", () => {
  const rider = createRiderModel();
  rider.update(state(), { crouch: 0, legOffset: 0.22 }, 0, LEVEL);
  const joint = jointsOf(rider);
  const thigh = clothAround(rider, "baggy-pant-leg", 0, joint.hips[0], joint.knees[0]).width;
  const shin = clothAround(rider, "baggy-pant-leg", 0, joint.knees[0], joint.ankles[0]).width;
  const sleeve = clothAround(rider, "long-sleeve", 0, joint.elbows[0], joint.hands[0], 0.2, 0.7).width;
  const cuff = clothAround(rider, "stacked-pant-cuff", 0, joint.knees[0], joint.ankles[0], 0.75, 1.3).width;
  const cuffBottom = boundsOf(partsOf(rider, (part) => part === "stacked-pant-cuff").slice(0, 1)).min.y;

  assert.ok(shin > sleeve * 2.1, `pant leg ${shin.toFixed(2)} m wide, sleeve ${sleeve.toFixed(2)} m`);
  // Baggy all the way down: the leg does not taper toward the boot.
  assert.ok(shin > thigh * 0.92, `thigh ${thigh.toFixed(2)} m, shin ${shin.toFixed(2)} m`);
  // The cuff pools on the boot, wider than the leg and down past the ankle.
  assert.ok(cuff > shin * 1.05, `cuff ${cuff.toFixed(2)} m wide, leg ${shin.toFixed(2)} m`);
  assert.ok(cuffBottom < joint.ankles[0].y - 0.03, "the cuff stops above the ankle");
});

test("a carve sets the inside edge and lifts the outside one, so nothing catches", () => {
  const rider = createRiderModel();
  const edges = (pose) => {
    rider.update(state(), { crouch: 0.6, ...pose }, 0, LEVEL);
    rider.group.updateMatrixWorld(true);
    // Toes point toward +x: that edge is the toe edge, the other the heel edge.
    const [toe, heel] = [0.2, -0.2].map((x) =>
      new THREE.Vector3(x, 0.095, 0).applyMatrix4(rider.board.matrixWorld).y);
    return { toe, heel, hips: rider.body.position.x };
  };
  const flat = edges({});
  const toeSide = edges({ bodyTilt: 0.6, boardRoll: 0.8 });
  const heelSide = edges({ bodyTilt: -0.6, boardRoll: -0.8 });

  assert.ok(Math.abs(flat.toe - flat.heel) < 0.01);
  // Carving right on the toes: the rider leans toward the toes and the heel edge comes up.
  assert.ok(toeSide.hips > 0.2 && toeSide.heel > toeSide.toe + 0.2,
    `toe side: toe edge ${toeSide.toe.toFixed(2)} m, heel edge ${toeSide.heel.toFixed(2)} m`);
  // Carving left on the heels: the toe edge comes up.
  assert.ok(heelSide.hips < -0.2 && heelSide.toe > heelSide.heel + 0.2,
    `heel side: toe edge ${heelSide.toe.toFixed(2)} m, heel edge ${heelSide.heel.toFixed(2)} m`);
});

test("riding flat across a side slope, the board lies the way the snow does", () => {
  const rider = createRiderModel();
  // Snow that rises toward +x: its normal leans back toward -x.
  rider.update(state(), { crouch: 0.4 }, 0, { x: -0.3, y: 0.95, z: 0 });
  rider.group.updateMatrixWorld(true);
  const [high, low] = [0.2, -0.2].map((x) =>
    new THREE.Vector3(x, 0.095, 0).applyMatrix4(rider.board.matrixWorld).y);

  assert.ok(high > low + 0.01, `uphill edge ${high.toFixed(3)} m, downhill edge ${low.toFixed(3)} m`);
});

/** How far `point` is from the nearest of the straight bones between `joints`. */
const offBones = (point, joints) => Math.min(...joints.slice(1).map((end, index) => {
  const start = joints[index];
  const bone = end.clone().sub(start);
  const along = Math.min(1, Math.max(0, point.clone().sub(start).dot(bone) / bone.lengthSq()));
  return point.distanceTo(start.clone().addScaledVector(bone, along));
}));
const furthestCloth = (mesh, joints) => {
  const { position } = mesh.geometry.attributes;
  const corner = new THREE.Vector3();
  let furthest = 0;
  for (let vertex = 0; vertex < position.count; vertex += 1) {
    corner.fromBufferAttribute(position, vertex).applyMatrix4(mesh.matrixWorld);
    furthest = Math.max(furthest, offBones(corner, joints));
  }
  return furthest;
};

test("cloth rounds a folded knee or elbow instead of spiking out of it", () => {
  const rider = createRiderModel();
  for (const [riding, pose] of [
    [state(), { crouch: 0.95, legOffset: -0.2 }],
    [state(), { crouch: 0.7, bodyTilt: 0.6, boardRoll: 0.8 }],
    [state({ air: 1.5 }), { crouch: 0.9, grab: 1 }],
    [state(), { crouch: 0.5, arms: [{ x: 0.3, y: 0.1, out: 0.1 }, { x: 0.35, y: -0.1, out: 0.05 }] }],
  ]) {
    rider.update(riding, pose, 0);
    const joint = jointsOf(rider);
    const legs = partsOf(rider, (part) => part === "baggy-pant-leg");
    const sleeves = partsOf(rider, (part) => part === "long-sleeve");
    for (const side of [0, 1]) {
      // No corner of the cloth stands further off the limb than loose cloth hangs.
      const leg = furthestCloth(legs[side], [joint.hips[side], joint.knees[side], joint.ankles[side]]);
      const arm = furthestCloth(sleeves[side],
        [joint.shoulders[side], joint.elbows[side], joint.hands[side]]);
      assert.ok(leg < 0.27, `pant leg ${side} sticks ${leg.toFixed(2)} m off the leg, crouch ${pose.crouch}`);
      assert.ok(arm < 0.12, `sleeve ${side} sticks ${arm.toFixed(2)} m off the arm, crouch ${pose.crouch}`);
    }
  }
});

test("at speed the pant leg ripples as one piece: no loop of cloth jerks against the next", () => {
  const rider = createRiderModel();
  const [leg] = partsOf(rider, (part) => part === "baggy-pant-leg");
  let before;
  let worst = 0;
  for (let frame = 0; frame < 90; frame += 1) {
    rider.update(state({ elapsed: 3 + frame / 60, speed: 32 }), { crouch: 0.4 }, 0, LEVEL);
    const now = Float32Array.from(leg.geometry.attributes.position.array);
    if (before && frame > 20) {
      for (let at = 0; at < now.length; at += 1) worst = Math.max(worst, Math.abs(now[at] - before[at]));
    }
    before = now;
  }

  assert.ok(worst < 0.004, `a corner of the cloth jumped ${(worst * 1000).toFixed(1)} mm in one frame`);
});

const SWITCH = { boardYaw: Math.PI, torsoYaw: Math.PI, switchRiding: true };
const edgeHeights = (rider) => {
  rider.group.updateMatrixWorld(true);
  const [toe, heel] = [0.2, -0.2].map((x) =>
    new THREE.Vector3(x, 0.095, 0).applyMatrix4(rider.board.matrixWorld));
  return toe.x > heel.x ? { right: toe.y, left: heel.y } : { right: heel.y, left: toe.y };
};
/** How far the chest is folded over the hips: 0 standing straight up out of them. */
const foldOf = (rider) => {
  const joint = jointsOf(rider);
  const hips = joint.hips[0].clone().add(joint.hips[1]).multiplyScalar(0.5);
  const shoulders = joint.shoulders[0].clone().add(joint.shoulders[1]).multiplyScalar(0.5);
  const legs = hips.clone().sub(worldOf(rider.board)).normalize();
  return shoulders.sub(hips).normalize().angleTo(legs);
};

test("riding switch, a carve still sets the inside edge and the rider still looks ahead", () => {
  const rider = createRiderModel();
  // Tail first down the hill, carving right: the right-hand edge has to bite.
  rider.update(state(SWITCH), { crouch: 0.5, bodyTilt: 0.6, boardRoll: 0.8 }, 0, LEVEL);
  const right = edgeHeights(rider);
  assert.ok(rider.body.position.x > 0.2 && right.left > right.right + 0.2,
    `carving right: right edge ${right.right.toFixed(2)} m, left edge ${right.left.toFixed(2)} m`);
  rider.update(state(SWITCH), { crouch: 0.5, bodyTilt: -0.6, boardRoll: -0.8 }, 0, LEVEL);
  const left = edgeHeights(rider);
  assert.ok(rider.body.position.x < -0.2 && left.right > left.left + 0.2);
  rider.update(state(SWITCH), { crouch: 0.3 }, 0);
  assert.ok(facing(rider).z < -0.8, "riding switch the rider is not looking down the hill");
});

test("switch swaps which carve is on the toes: the body sits back on the heels either way", () => {
  const rider = createRiderModel();
  const fold = (riding, bodyTilt) => {
    rider.update(state(riding), { crouch: 0.5, bodyTilt, boardRoll: bodyTilt * 1.3 }, 0, LEVEL);
    return foldOf(rider);
  };
  // Regular, the toes are on the right; switch, on the left.
  const toes = fold({}, 0.6);
  const heels = fold({}, -0.6);
  assert.ok(heels > toes + 0.2);
  assert.ok(Math.abs(fold(SWITCH, 0.6) - heels) < 0.06, "carving right in switch is not a heel-side carve");
  assert.ok(Math.abs(fold(SWITCH, -0.6) - toes) < 0.06, "carving left in switch is not a toe-side carve");
});

/** Lowest any joint or the helmet sits over the snow, and where the helmet is. */
const overSnow = (rider, snow = () => 0) => {
  const joint = jointsOf(rider);
  const helmet = centerOf(partsOf(rider, (part) => part === "helmet-shell"));
  const points = [...Object.values(joint).flat(), helmet];
  return { helmet, lowest: Math.min(...points.map((point) => point.y - snow(point))) };
};

test("going down, the rider ends up lying on the snow the way they were travelling", () => {
  const rider = createRiderModel();
  rider.update(state(), { crouch: 0.4 }, 0, LEVEL);
  const standing = overSnow(rider);
  rider.update(state({ crashed: true }), { crouch: 0.4, fall: 1, fallKind: "front" }, 0, LEVEL);
  const down = overSnow(rider);

  // Travelling down the hill is toward -z: that is the way the body goes.
  assert.ok(down.helmet.z < standing.helmet.z - 0.6,
    `the helmet went ${(standing.helmet.z - down.helmet.z).toFixed(2)} m down the hill`);
  assert.ok(down.helmet.y < 0.7, `the helmet is still ${down.helmet.y.toFixed(2)} m up`);
  assert.ok(down.lowest > -0.03, `part of the rider is ${(-down.lowest).toFixed(2)} m under the snow`);
});

test("on a slope a fallen rider lies along the snow, not hanging over it or sunk in it", () => {
  const rider = createRiderModel();
  const slope = { x: 0, y: 1, z: -0.4 };
  const snow = (point) => 0.4 * point.z;
  for (const fallKind of ["front", "back", "sit"]) {
    rider.update(state({ crashed: true }), { crouch: 0.4, fall: 1, fallKind }, 0, slope);
    const down = overSnow(rider, snow);
    assert.ok(down.lowest > -0.05 && down.lowest < 0.3,
      `${fallKind}: the lowest part of the rider is ${down.lowest.toFixed(2)} m over the snow`);
  }
});

test("how the rider lands depends on how they went down", () => {
  const rider = createRiderModel();
  const chestFacing = (fallKind) => {
    rider.update(state({ crashed: true }), { crouch: 0.4, fall: 1, fallKind }, 0, LEVEL);
    const joint = jointsOf(rider);
    const across = joint.shoulders[1].clone().sub(joint.shoulders[0]);
    const spine = joint.shoulders[0].clone().add(joint.shoulders[1]).multiplyScalar(0.5)
      .sub(joint.hips[0].clone().add(joint.hips[1]).multiplyScalar(0.5));
    // Which way the chest points: out of the plane of the spine and the shoulders.
    return { front: spine.clone().cross(across).normalize(), spine: spine.normalize() };
  };

  assert.ok(chestFacing("front").front.y < -0.5, "thrown forward, the rider is not chest down");
  assert.ok(chestFacing("back").front.y > 0.5, "thrown backward, the rider is not on their back");
  // Legs giving out sits the rider down: back near upright, hips on the snow.
  const sat = chestFacing("sit");
  assert.ok(sat.spine.y > 0.5 && rider.body.getWorldPosition(new THREE.Vector3()).y < 0.55);
});

test("partway through a fall, and back on their feet, nothing stretches or goes under the snow", () => {
  const rider = createRiderModel();
  const lengths = { thigh: [], shin: [], upperArm: [], forearm: [] };
  for (const fallKind of ["front", "back", "sit"]) {
    for (const fall of [0, 0.25, 0.5, 0.75, 1]) {
      rider.update(state({ crashed: fall > 0 }), { crouch: 0.4, fall, fallKind }, 0, LEVEL);
      assert.ok(overSnow(rider).lowest > -0.06, `${fallKind} at ${fall}: under the snow`);
      for (const [bone, pair] of Object.entries(boneLengths(rider))) lengths[bone].push(...pair);
    }
  }
  for (const [bone, seen] of Object.entries(lengths)) {
    assert.ok(Math.max(...seen) / Math.min(...seen) < 1.01, `a ${bone} stretched in a fall`);
  }
  rider.update(state(), { crouch: 0.4, fall: 0 }, 0, LEVEL);
  assert.ok(overSnow(rider).helmet.y > 1.8);
});

test("on a steep hill the rider stands up out of it instead of pitching down it", () => {
  const rider = createRiderModel();
  rider.update(state({ slopeGrade: 0.5 }), { crouch: 0.35 }, 0, { x: 0, y: 1, z: -0.5 });
  const downTheHill = rider.board.position.z - rider.body.position.z;
  const up = rider.body.position.y - rider.board.position.y;
  const joint = jointsOf(rider);
  const shoulders = joint.shoulders[0].clone().add(joint.shoulders[1]).multiplyScalar(0.5);

  // The hill here drops 27 degrees. Square to it the hips would hang half their
  // height out over the nose and the rider would go over the front.
  assert.ok(downTheHill / up < 0.2, `hips ${(downTheHill / up * 100).toFixed(0)}% of their height down the hill`);
  assert.ok(rider.board.position.z - shoulders.z < 0.45,
    `shoulders ${(rider.board.position.z - shoulders.z).toFixed(2)} m out over the nose`);
});

test("in a skid the board tips back onto its trailing edge and the leading edge rides clear", () => {
  const rider = createRiderModel();
  for (const boardYaw of [1.2, -1.2]) {
    // Travelling straight down the hill with the board thrown most of the way across it.
    rider.update(state({ boardYaw, speed: 20 }), { crouch: 0.5 }, 0, LEVEL);
    rider.group.updateMatrixWorld(true);
    const edges = [0.2, -0.2].map((x) =>
      new THREE.Vector3(x, 0.095, 0).applyMatrix4(rider.board.matrixWorld));
    // Down the hill is -z: the edge further that way is the one leading.
    const [leading, trailing] = edges[0].z < edges[1].z ? edges : [edges[1], edges[0]];
    assert.ok(leading.y > trailing.y + 0.1,
      `board at ${boardYaw}: leading edge ${leading.y.toFixed(2)} m, trailing edge ${trailing.y.toFixed(2)} m`);
  }
  // Running straight, either way round, it sits flat.
  for (const boardYaw of [0, Math.PI]) {
    rider.update(state({ boardYaw, speed: 20 }), { crouch: 0.5 }, 0, LEVEL);
    assert.ok(Math.abs(rider.board.rotation.z) < 0.02);
  }
});

test("the board is a true twin: nose and tail mirror each other, with sidecut and kicked tips", () => {
  const rider = createRiderModel();
  rider.update(state(), { crouch: 0.3 }, 0, LEVEL);
  rider.group.updateMatrixWorld(true);
  const toBoard = rider.board.matrixWorld.clone().invert();
  // Every corner of the deck, in the board's own space (nose toward -z, toes toward +x).
  const corners = [];
  const corner = new THREE.Vector3();
  for (const mesh of partsOf(rider, (part) => part === "snowboard")) {
    const { position } = mesh.geometry.attributes;
    for (let vertex = 0; vertex < position.count; vertex += 1) {
      corners.push(corner.fromBufferAttribute(position, vertex)
        .applyMatrix4(mesh.matrixWorld).applyMatrix4(toBoard).clone());
    }
  }
  assert.ok(corners.length > 60, "the deck is a plain slab");

  // Twin: every corner has its mirror at the other end, and across the board.
  for (const point of corners) {
    for (const mirror of [new THREE.Vector3(point.x, point.y, -point.z),
      new THREE.Vector3(-point.x, point.y, point.z)]) {
      assert.ok(corners.some((other) => other.distanceTo(mirror) < 1e-4),
        `nothing mirrors the corner at ${point.toArray().map((v) => v.toFixed(2))}`);
    }
  }
  const widthAt = (from, to) => Math.max(...corners.filter((point) =>
    Math.abs(point.z) >= from && Math.abs(point.z) <= to).map((point) => Math.abs(point.x))) * 2;
  const length = Math.max(...corners.map((point) => point.z)) * 2;
  const waist = widthAt(0, 0.05);
  const shoulders = widthAt(0.6, 0.8);
  const tipEnd = widthAt(length / 2 - 0.03, length / 2);
  const deck = Math.max(...corners.filter((point) => Math.abs(point.z) < 0.3).map((point) => point.y));
  const kick = Math.max(...corners.map((point) => point.y)) - deck;

  assert.ok(length > 1.8 && length < 2.05, `${length.toFixed(2)} m long`);
  assert.ok(shoulders - waist > 0.03 && shoulders - waist < 0.09,
    `sidecut: ${waist.toFixed(2)} m at the waist, ${shoulders.toFixed(2)} m at the tips`);
  assert.ok(tipEnd < shoulders * 0.6, "the tips are cut square");
  assert.ok(kick > 0.06 && kick < 0.14, `the tips kick up ${kick.toFixed(3)} m`);
  // Bindings centred on the board, the same distance either side of its middle.
  const boots = partsOf(rider, (part) => part === "boot")
    .map((boot) => worldOf(boot).applyMatrix4(toBoard));
  assert.equal(boots.length, 2);
  assert.ok(Math.abs(boots[0].z + boots[1].z) < 1e-6 && Math.abs(boots[0].z) > 0.35);
});

test("on a hill the rider stays stacked over the board: the legs take the slope, not the back", () => {
  const rider = createRiderModel();
  const kneeAngle = (joint, side) => joint.hips[side].clone().sub(joint.knees[side])
    .angleTo(joint.ankles[side].clone().sub(joint.knees[side])) * 180 / Math.PI;
  for (const [grade, riding] of [[0.35, {}], [0.55, {}], [0.55, SWITCH]]) {
    for (const crouch of [0.3, 0.6]) {
      rider.update(state({ ...riding, slopeGrade: grade }), { crouch }, 0, { x: 0, y: 1, z: -grade });
      const joint = jointsOf(rider);
      const hips = joint.hips[0].clone().add(joint.hips[1]).multiplyScalar(0.5);
      const shoulders = joint.shoulders[0].clone().add(joint.shoulders[1]).multiplyScalar(0.5);
      const helmet = centerOf(partsOf(rider, (part) => part === "helmet-shell"));
      const where = `grade ${grade}, crouch ${crouch}`;
      // Up the hill is +z. The hips sit over the middle of the board and the
      // shoulders over the hips: the weight is on top of the board, not out past
      // the nose, and not thrown back behind the tail to make up for it either.
      assert.ok(Math.abs(hips.z - rider.board.position.z) < 0.06,
        `${where}: hips ${(rider.board.position.z - hips.z).toFixed(2)} m down the hill from the board's middle`);
      assert.ok(Math.abs(shoulders.z - hips.z) < 0.1,
        `${where}: shoulders ${(hips.z - shoulders.z).toFixed(2)} m down the hill from the hips`);
      assert.ok(helmet.z > Math.min(joint.ankles[0].z, joint.ankles[1].z) + 0.3);
      // That takes a straighter downhill leg and a more bent uphill one.
      const downhill = joint.ankles[0].z < joint.ankles[1].z ? 0 : 1;
      assert.ok(kneeAngle(joint, downhill) > kneeAngle(joint, 1 - downhill) + 15,
        `${where}: downhill knee ${kneeAngle(joint, downhill).toFixed(0)}, uphill knee ${kneeAngle(joint, 1 - downhill).toFixed(0)}`);
    }
  }
});

test("the helmet and goggles are built in detail, the goggles tucked up under the brim", () => {
  const rider = createRiderModel();
  rider.update(state(), { crouch: 0.3 }, 0, LEVEL);
  rider.group.updateMatrixWorld(true);
  const toHead = rider.head.matrixWorld.clone().invert();
  // Each part's box in the head's own space: +x is the face, +y the crown.
  const box = (name) => {
    const meshes = partsOf(rider, (part) => part === name);
    assert.ok(meshes.length > 0, `no ${name}`);
    const bounds = new THREE.Box3();
    const corner = new THREE.Vector3();
    for (const mesh of meshes) {
      const { position } = mesh.geometry.attributes;
      for (let vertex = 0; vertex < position.count; vertex += 1) {
        bounds.expandByPoint(corner.fromBufferAttribute(position, vertex)
          .applyMatrix4(mesh.matrixWorld).applyMatrix4(toHead));
      }
    }
    return { bounds, count: meshes.length };
  };

  // A helmet: a shell with a short brim, sides and back that come down over the
  // ears and the back of the head, vents, ear pads, a chin strap and a sticker.
  const shell = box("helmet-shell").bounds;
  const skirt = box("helmet-skirt").bounds;
  const brim = box("helmet-brim").bounds;
  const face = box("face").bounds;
  assert.ok(skirt.min.y < shell.min.y - 0.08, "the helmet does not come down over the ears");
  assert.ok(skirt.min.x < face.min.x - 0.02 && skirt.max.x < face.max.x - 0.02,
    "the sides of the helmet close over the face");
  assert.ok(brim.max.x > shell.max.x + 0.02 && brim.max.x < shell.max.x + 0.08, "no short brim");
  assert.ok(box("helmet-vent").count >= 2 && box("helmet-ear-pad").count === 2);
  assert.ok(box("chin-strap").count === 2 && box("helmet-sticker").count >= 1);

  // Goggles: a frame round a wide two-tone lens, outriggers, and a marked strap.
  const lens = box("goggle-lens").bounds;
  const tint = box("goggle-tint").bounds;
  const frame = box("goggle-frame").bounds;
  const lensWidth = Math.max(lens.max.z, tint.max.z) - Math.min(lens.min.z, tint.min.z);
  assert.ok(lensWidth > (face.max.z - face.min.z) * 1.25, "the lens is no wider than the face");
  assert.ok(lens.min.y >= tint.max.y - 0.01 && tint.min.y < lens.min.y - 0.02, "the lens is one flat tone");
  assert.ok(frame.max.y > lens.max.y && frame.min.y < tint.min.y &&
    frame.max.z > lens.max.z && frame.min.z < lens.min.z, "the lens has no frame round it");
  assert.ok(lens.max.x > frame.max.x - 0.002, "the lens is sunk behind its frame");
  // No gap between goggles and helmet: the frame runs up to the brim.
  assert.ok(Math.abs(frame.max.y - brim.min.y) < 0.03,
    `a ${(brim.min.y - frame.max.y).toFixed(3)} m gap between the goggles and the brim`);
  assert.ok(box("goggle-outrigger").count === 2 && box("goggle-strap-mark").count >= 1);
  const strap = box("goggle-strap").bounds;
  assert.ok(strap.min.x < skirt.min.x && strap.max.z > skirt.max.z, "the strap does not go round the helmet");
});

test("low in a heel-side carve the rider sits back and trails a hand, without folding away from it", () => {
  const rider = createRiderModel();
  // Regular carving left, and switch carving right: both are on the heels.
  for (const [riding, tilt, trailing] of [[{}, -0.7, 1], [SWITCH, 0.7, 0]]) {
    rider.update(state(riding), { crouch: 0.85, bodyTilt: tilt, boardRoll: tilt * 1.3, handDrag: 1 }, 0, LEVEL);
    const dragged = foldOf(rider);
    const hands = rider.hands.map(worldOf);
    rider.update(state(riding), { crouch: 0.85, bodyTilt: tilt, boardRoll: tilt * 1.3, handDrag: 0 }, 0, LEVEL);
    const plain = foldOf(rider);
    const joint = jointsOf(rider);
    const hips = joint.hips[0].clone().add(joint.hips[1]).multiplyScalar(0.5);
    const where = riding.switchRiding ? "switch" : "regular";

    // Reaching for the snow behind them must not bend the rider further forward,
    // away from that hand.
    assert.ok(dragged < plain + 0.05, `${where}: the chest folded ${(dragged - plain).toFixed(2)} rad further`);
    // It is the trailing hand that goes down, on the side they are leaning to.
    assert.ok(hands[trailing].y < hands[1 - trailing].y - 0.15,
      `${where}: trailing hand ${hands[trailing].y.toFixed(2)} m, leading hand ${hands[1 - trailing].y.toFixed(2)} m`);
    assert.ok((hands[trailing].x - hips.x) * Math.sign(tilt) > 0.05, `${where}: the hand is on the wrong side`);
  }
});

test("the board floats its leading end, whichever end that is: riding switch it is the tail", () => {
  const rider = createRiderModel();
  // Height of the end of the board that is going first (down the hill is -z).
  const leadingTip = (riding, pose) => {
    rider.update(state({ speed: 20, surface: "powder", ...riding }), { crouch: 0.3, ...pose }, 0, LEVEL);
    rider.group.updateMatrixWorld(true);
    const ends = [-0.9, 0.9].map((z) => new THREE.Vector3(0, 0.1, z).applyMatrix4(rider.board.matrixWorld));
    const [leading, trailing] = ends[0].z < ends[1].z ? ends : [ends[1], ends[0]];
    return leading.y - trailing.y;
  };
  for (const riding of [{}, SWITCH]) {
    const where = riding.switchRiding ? "switch" : "regular";
    // In powder at speed the end going first rides up, the weight behind it.
    assert.ok(leadingTip(riding, {}) > 0.03, `${where}: leading end ${leadingTip(riding, {}).toFixed(3)} m over the trailing one`);
    // And whatever lifts the front of the board lifts that same end.
    assert.ok(leadingTip(riding, { boardPitch: 0.15 }) > leadingTip(riding, {}) + 0.15, `${where}: board pitch lifts the wrong end`);
    assert.ok(leadingTip(riding, { press: 1 }) > leadingTip(riding, {}) + 0.1, `${where}: a tail press lifts the wrong end`);
  }
});
