import * as THREE from "../vendor/three/three.module.js";

const material = (color, roughness = 0.92) =>
  new THREE.MeshStandardMaterial({ color, roughness, metalness: 0 });

const PALETTE = Object.freeze({
  board: material(0xe76648, 0.48),
  boardBase: material(0x283747, 0.58),
  boardGraphic: material(0xf2e8d4, 0.6),
  boot: material(0x1d2937, 0.94),
  binding: material(0x384858, 0.74),
  face: material(0xc28f70, 0.98),
  goggles: material(0x14232d, 0.26),
  lens: material(0x8bc8d3, 0.2),
  helmet: material(0xdb654e, 0.65),
  helmetRim: material(0x29384a, 0.78),
  mitt: material(0x1d2937, 0.97),
  pants: material(0x596983, 1),
  pantsShade: material(0x3d4f68, 1),
  sleeve: material(0xd76952, 0.98),
  tee: material(0xece8dc, 0.98),
  teeShade: material(0xc9c6bb, 0.98),
});

const Y_AXIS = new THREE.Vector3(0, 1, 0);
const clamp = (value, minimum, maximum) =>
  Math.min(maximum, Math.max(minimum, value));
const finiteOr = (value, fallback = 0) =>
  Number.isFinite(value) ? value : fallback;

const solid = (geometry, surface, parent, position = [0, 0, 0]) => {
  const mesh = new THREE.Mesh(geometry, surface);
  mesh.position.set(...position);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
};

const segment = (parent, topRadius, bottomRadius, surface, sides = 7) =>
  solid(new THREE.CylinderGeometry(topRadius, bottomRadius, 1, sides), surface, parent);

const placeSegment = (mesh, from, to) => {
  const direction = new THREE.Vector3().subVectors(to, from);
  const length = Math.max(0.01, direction.length());
  mesh.position.copy(from).add(to).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(Y_AXIS, direction.normalize());
  mesh.scale.y = length;
};

const createBoard = (parent) => {
  const board = new THREE.Group();
  board.rotation.order = "YXZ";
  parent.add(board);

  solid(new THREE.BoxGeometry(0.37, 0.05, 1.86), PALETTE.boardBase, board, [0, 0.045, 0]);
  solid(new THREE.BoxGeometry(0.34, 0.013, 1.78), PALETTE.board, board, [0, 0.076, 0]);
  for (const end of [-1, 1]) {
    const tip = solid(new THREE.SphereGeometry(0.18, 9, 5), PALETTE.board, board,
      [0, 0.09, end * 0.91]);
    tip.scale.set(1, 0.24, 0.68);
    solid(new THREE.BoxGeometry(0.23, 0.016, 0.2), PALETTE.boardGraphic, board,
      [0, 0.088, end * 0.65]).rotation.y = end * 0.25;
    solid(new THREE.CylinderGeometry(0.13, 0.13, 0.025, 12), PALETTE.binding, board,
      [0, 0.103, end * 0.42]);
    solid(new THREE.BoxGeometry(0.33, 0.14, 0.18), PALETTE.boot, board,
      [0, 0.19, end * 0.42]);
  }
  for (const side of [-1, 1]) {
    solid(new THREE.BoxGeometry(0.018, 0.014, 1.82), PALETTE.boardGraphic, board,
      [side * 0.18, 0.053, 0]);
  }

  return board;
};

/** Solid rider model; body and board use separate yaw pivots. */
export function createRiderModel() {
  const group = new THREE.Group();
  const board = createBoard(group);
  const body = new THREE.Group();
  body.rotation.order = "YXZ";
  group.add(body);

  const shirt = solid(new THREE.CylinderGeometry(0.36, 0.43, 0.72, 7), PALETTE.tee, body,
    [0, 0.38, 0]);
  solid(new THREE.CylinderGeometry(0.43, 0.43, 0.12, 7), PALETTE.teeShade, body,
    [0, 0.06, 0]);
  const logo = solid(new THREE.ConeGeometry(0.13, 0.19, 3), PALETTE.board, body,
    [0.241, 0.43, 0]);
  logo.rotation.z = Math.PI / 2;
  logo.rotation.y = Math.PI / 2;
  for (const side of [-1, 1]) {
    const backMark = solid(new THREE.BoxGeometry(0.018, 0.22, 0.055), PALETTE.board,
      body, [-0.35, 0.42, side * 0.085]);
    backMark.rotation.x = side * 0.58;
  }

  const neck = solid(new THREE.CylinderGeometry(0.1, 0.1, 0.16, 8), PALETTE.face,
    body, [0, 0.82, 0]);
  neck.castShadow = false;
  solid(new THREE.DodecahedronGeometry(0.265, 1), PALETTE.helmet, body,
    [0, 1.12, 0]);
  solid(new THREE.BoxGeometry(0.46, 0.06, 0.43), PALETTE.helmetRim, body,
    [0.025, 0.99, 0]);
  solid(new THREE.BoxGeometry(0.08, 0.18, 0.31), PALETTE.face, body,
    [0.255, 1.03, 0]);
  solid(new THREE.BoxGeometry(0.075, 0.12, 0.47), PALETTE.goggles, body,
    [0.285, 1.14, 0]);
  solid(new THREE.BoxGeometry(0.012, 0.085, 0.35), PALETTE.lens, body,
    [0.325, 1.15, 0]);

  const arms = [];
  const shirtSleeves = [];
  const mitts = [];
  for (const side of [-1, 1]) {
    arms.push(segment(body, 0.12, 0.105, PALETTE.sleeve));
    shirtSleeves.push(segment(body, 0.15, 0.13, PALETTE.tee));
    mitts.push(solid(new THREE.BoxGeometry(0.18, 0.18, 0.17), PALETTE.mitt, body));
  }

  const thighs = [
    segment(group, 0.21, 0.25, PALETTE.pantsShade),
    segment(group, 0.21, 0.25, PALETTE.pants),
  ];
  const shins = [
    segment(group, 0.25, 0.21, PALETTE.pantsShade),
    segment(group, 0.25, 0.21, PALETTE.pants),
  ];

  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.82, 24),
    new THREE.MeshBasicMaterial({ color: 0x3b6878, transparent: true, opacity: 0.2, depthWrite: false }),
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.scale.y = 0.48;
  group.add(shadow);
  let takeoffPitch = -0.35;
  let takeoffRoll = 0;

  const update = (state = {}, pose = {}, groundHeight = 0,
    groundNormal = { x: 0, y: 1, z: -0.35 }) => {
    const across = finiteOr(state.position?.across);
    const downhill = finiteOr(state.position?.downhill);
    const air = Math.max(0, finiteOr(state.air));
    const boardYaw = finiteOr(pose.boardYaw, finiteOr(state.boardYaw, finiteOr(state.heading)));
    const bodyYaw = finiteOr(pose.bodyYaw, finiteOr(state.torsoYaw, finiteOr(state.heading)));
    const crouch = clamp(finiteOr(pose.crouch, 0.3), 0, 1);
    const lean = clamp(finiteOr(pose.bodyTilt, finiteOr(pose.lean) * 0.55), -0.8, 0.8);
    const hipHeight = 1.2 - crouch * 0.48;
    const ridingHeight = groundHeight + air;
    const slopePitch = Math.atan2(finiteOr(groundNormal.z, -0.35),
      finiteOr(groundNormal.y, 1));
    const slopeRoll = finiteOr(groundNormal.x) * 0.2;
    if (air <= 0.02) {
      takeoffPitch = slopePitch;
      takeoffRoll = slopeRoll;
    }

    group.position.set(across, 0, -downhill);
    board.position.set(0, ridingHeight + 0.035, 0);
    board.rotation.set(
      clamp((air > 0.02 ? takeoffPitch : slopePitch) +
        finiteOr(pose.boardPitch) + finiteOr(pose.press) * 0.15, -0.8, 0.55),
      -boardYaw,
      clamp(finiteOr(pose.boardRoll) +
        (air > 0.02 ? takeoffRoll : slopeRoll), -1.1, 1.1),
    );
    body.position.set(lean * 0.32, ridingHeight + hipHeight, 0);
    body.rotation.set(0, 0.58 - bodyYaw,
      -lean * 0.68 + finiteOr(pose.fallRotation) * 0.6);
    shirt.scale.x = 1 + finiteOr(pose.clothFlutter) * 0.018;

    for (let index = 0; index < 2; index += 1) {
      const side = index === 0 ? -1 : 1;
      const foot = new THREE.Vector3(0, 0.2, side * 0.42)
        .applyEuler(board.rotation).add(board.position);
      const hip = new THREE.Vector3(lean * 0.32, ridingHeight + hipHeight,
        side * 0.25).applyAxisAngle(Y_AXIS, -bodyYaw);
      hip.y = ridingHeight + hipHeight;
      const knee = new THREE.Vector3(
        (foot.x + hip.x) * 0.5 + 0.15,
        ridingHeight + hipHeight * 0.5 + 0.12,
        (foot.z + hip.z) * 0.5 + side * 0.07,
      );
      placeSegment(thighs[index], knee, hip);
      placeSegment(shins[index], foot, knee);

      const shoulder = new THREE.Vector3(-0.02, 0.66, side * 0.39);
      const elbow = new THREE.Vector3(0.035, 0.35 + crouch * 0.04,
        side * (0.48 + finiteOr(pose.armLag) * 0.035));
      const hand = new THREE.Vector3(
        0.09 + finiteOr(pose.handDrag) * 0.12,
        0.08 - finiteOr(pose.handDrag) * 0.16,
        side * 0.55,
      );
      placeSegment(arms[index], hand, shoulder);
      placeSegment(shirtSleeves[index], shoulder, elbow);
      shirtSleeves[index].scale.y *= 0.36;
      shirtSleeves[index].position.lerp(shoulder, 0.45);
      mitts[index].position.copy(hand);
    }

    shadow.position.set(0.13, groundHeight + 0.024, 0.13);
    shadow.scale.set(1 + air * 0.18, 0.48 + air * 0.08, 1);
    shadow.material.opacity = 0.22 / (1 + air * 0.9);
  };

  update();
  return Object.freeze({ board, body, group, shadow, update });
}
