import * as THREE from "../vendor/three/three.module.js";

const material = (color, roughness = 0.92) =>
  new THREE.MeshStandardMaterial({ color, roughness, metalness: 0 });

const PALETTE = Object.freeze({
  board: material(0xe76648, 0.48),
  boardBase: material(0x283747, 0.58),
  boardGraphic: material(0xf2e8d4, 0.6),
  boardEdge: material(0xb9d0d4, 0.42),
  boot: material(0x1d2937, 0.94),
  binding: material(0x384858, 0.74),
  face: material(0xc28f70, 0.98),
  goggles: material(0x14232d, 0.26),
  lens: material(0x8bc8d3, 0.2),
  helmet: material(0xdb654e, 0.65),
  helmetRim: material(0x29384a, 0.78),
  helmetShade: material(0xb8523e, 0.74),
  mitt: material(0x1d2937, 0.97),
  pants: material(0x586b82, 1),
  pantsShade: material(0x475a71, 1),
  pantsFold: material(0x65778d, 1),
  sleeve: material(0xd76952, 0.98),
  sleeveShade: material(0xb85242, 0.98),
  tee: material(0xece8dc, 0.98),
  teeShade: material(0xc9c6bb, 0.98),
});

const Y_AXIS = new THREE.Vector3(0, 1, 0);
const clamp = (value, minimum, maximum) =>
  Math.min(maximum, Math.max(minimum, value));
const finiteOr = (value, fallback = 0) =>
  Number.isFinite(value) ? value : fallback;

const solid = (geometry, surface, parent, position = [0, 0, 0], part = "") => {
  const mesh = new THREE.Mesh(geometry, surface);
  mesh.position.set(...position);
  mesh.castShadow = ![
    "back-print", "binding-strap", "board-chevron", "boot-sole",
    "cargo-pocket", "chin-strap", "goggle-frame", "goggle-lens",
    "goggle-strap", "helmet-vent",
    "shirt-collar", "shirt-fold", "shirt-logo", "topsheet-stripe",
  ].includes(part);
  mesh.receiveShadow = true;
  mesh.userData.part = part;
  parent.add(mesh);
  return mesh;
};

const segment = (parent, topRadius, bottomRadius, surface, sides = 7, part = "") =>
  solid(new THREE.CylinderGeometry(topRadius, bottomRadius, 1, sides), surface,
    parent, [0, 0, 0], part);

const placeSegment = (mesh, from, to) => {
  const direction = new THREE.Vector3().subVectors(to, from);
  const length = Math.max(0.01, direction.length());
  mesh.position.copy(from).add(to).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(Y_AXIS, direction.normalize());
  mesh.scale.y = length;
};

const makeTeeGeometry = () => {
  const rings = [
    { y: 0.015, x: 0.46, z: 0.4 },
    { y: 0.12, x: 0.47, z: 0.41 },
    { y: 0.52, x: 0.44, z: 0.4 },
    { y: 0.75, x: 0.42, z: 0.37 },
  ];
  const positions = [];
  const sides = 8;
  for (let ring = 0; ring < rings.length - 1; ring += 1) {
    const lower = rings[ring];
    const upper = rings[ring + 1];
    for (let side = 0; side < sides; side += 1) {
      const a = side / sides * Math.PI * 2;
      const b = (side + 1) / sides * Math.PI * 2;
      const l0 = [Math.cos(a) * lower.x, lower.y, Math.sin(a) * lower.z];
      const l1 = [Math.cos(b) * lower.x, lower.y, Math.sin(b) * lower.z];
      const u0 = [Math.cos(a) * upper.x, upper.y, Math.sin(a) * upper.z];
      const u1 = [Math.cos(b) * upper.x, upper.y, Math.sin(b) * upper.z];
      positions.push(...l0, ...u0, ...l1, ...l1, ...u0, ...u1);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.computeVertexNormals();
  return geometry;
};

const makeVisorGeometry = (width, halfHeight, depth) => {
  const positions = [];
  const columns = 8;
  const rows = 2;
  const point = (column, row) => {
    const side = column / columns * 2 - 1;
    const vertical = row / rows * 2 - 1;
    return [
      -depth + Math.abs(side) ** 1.7 * 0.064 + vertical ** 2 * 0.009,
      -0.105 + vertical * halfHeight,
      side * width,
    ];
  };
  for (let column = 0; column < columns; column += 1) {
    for (let row = 0; row < rows; row += 1) {
      const a = point(column, row);
      const b = point(column + 1, row);
      const c = point(column, row + 1);
      const d = point(column + 1, row + 1);
      positions.push(...a, ...b, ...c, ...b, ...d, ...c);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.computeVertexNormals();
  return geometry;
};

const createBoard = (parent) => {
  const board = new THREE.Group();
  board.rotation.order = "YXZ";
  parent.add(board);
  const outline = new THREE.Shape();
  outline.moveTo(-0.12, -0.97);
  for (const [x, z] of [
    [-0.19, -0.9], [-0.2, -0.68], [-0.2, 0.68], [-0.19, 0.9],
    [-0.12, 0.97], [0.12, 0.97], [0.19, 0.9], [0.2, 0.68],
    [0.2, -0.68], [0.19, -0.9], [0.12, -0.97],
  ]) outline.lineTo(x, z);
  outline.closePath();
  const boardGeometry = new THREE.ExtrudeGeometry(outline, {
    depth: 0.05, bevelEnabled: false, curveSegments: 1,
  });
  boardGeometry.rotateX(Math.PI / 2);
  solid(boardGeometry, [PALETTE.board, PALETTE.boardEdge], board,
    [0, 0.095, 0], "snowboard");
  solid(new THREE.BoxGeometry(0.075, 0.01, 1.34), PALETTE.boardGraphic,
    board, [0, 0.103, 0], "topsheet-stripe");
  const tips = [];
  for (const end of [-1, 1]) {
    const tip = new THREE.Group();
    tip.position.z = end * 0.77;
    board.add(tip);
    solid(new THREE.BoxGeometry(0.31, 0.018, 0.27), PALETTE.board, tip,
      [0, 0.099, end * 0.065], "upturned-tip");
    tips.push(tip);
    solid(new THREE.BoxGeometry(0.23, 0.016, 0.2), PALETTE.boardGraphic, board,
      [0, 0.111, end * 0.65], "board-chevron").rotation.y = end * 0.25;
    solid(new THREE.CylinderGeometry(0.13, 0.13, 0.025, 12), PALETTE.binding, board,
      [0, 0.128, end * 0.42], "binding-disc");
    solid(new THREE.BoxGeometry(0.33, 0.14, 0.18), PALETTE.boot, board,
      [0, 0.21, end * 0.42], "boot");
    solid(new THREE.BoxGeometry(0.35, 0.025, 0.2), PALETTE.boardBase, board,
      [0, 0.14, end * 0.42], "boot-sole");
    solid(new THREE.BoxGeometry(0.34, 0.028, 0.058), PALETTE.boardGraphic, board,
      [0, 0.29, end * 0.42], "binding-strap");
  }
  return { board, tips };
};

/** Solid rider model; body and board use separate yaw pivots. */
export function createRiderModel() {
  const group = new THREE.Group();
  const { board, tips } = createBoard(group);
  const body = new THREE.Group();
  body.rotation.order = "YXZ";
  group.add(body);

  const shirt = solid(makeTeeGeometry(), PALETTE.tee, body,
    [0, 0, 0], "oversized-tee");
  solid(new THREE.CylinderGeometry(0.445, 0.47, 0.055, 8), PALETTE.teeShade,
    body, [0, 0.025, 0], "tee-hem");
  const collar = solid(new THREE.TorusGeometry(0.13, 0.02, 4, 8),
    PALETTE.teeShade, body, [0, 0.75, 0], "shirt-collar");
  collar.rotation.x = Math.PI / 2;
  const badgeShape = new THREE.Shape();
  badgeShape.moveTo(0, 0.055);
  badgeShape.lineTo(0.052, 0);
  badgeShape.lineTo(0, -0.055);
  badgeShape.lineTo(-0.052, 0);
  badgeShape.closePath();
  const badge = solid(new THREE.ShapeGeometry(badgeShape), PALETTE.board, body,
    [-0.455, 0.56, -0.17], "back-print");
  badge.rotation.y = -Math.PI / 2;

  const head = new THREE.Group();
  head.position.set(0, 1.12, 0);
  body.add(head);
  const neck = solid(new THREE.CylinderGeometry(0.1, 0.1, 0.16, 8), PALETTE.face,
    head, [0, -0.3, 0], "neck");
  neck.castShadow = false;
  solid(new THREE.SphereGeometry(0.235, 8, 5), PALETTE.face, head,
    [0, -0.1, 0], "face");
  solid(new THREE.SphereGeometry(0.29, 10, 5, 0, Math.PI * 2,
    0, Math.PI * 0.62), PALETTE.helmet, head,
  [0, 0.065, 0], "helmet-shell");
  solid(new THREE.CylinderGeometry(0.273, 0.282, 0.047, 10),
    PALETTE.helmetRim, head, [0, -0.04, 0], "helmet-rim");
  const strap = solid(new THREE.TorusGeometry(0.258, 0.022, 4, 12),
    PALETTE.helmetRim, head, [0, -0.105, 0], "goggle-strap");
  strap.rotation.x = Math.PI / 2;
  solid(makeVisorGeometry(0.265, 0.095, 0.32), PALETTE.goggles, head,
    [0, 0, 0], "goggle-frame");
  solid(makeVisorGeometry(0.235, 0.067, 0.329), PALETTE.lens, head,
    [0, 0, 0], "goggle-lens");
  for (const side of [-1, 1]) {
    const earPad = solid(new THREE.SphereGeometry(0.12, 7, 4),
      PALETTE.helmetRim, head, [0.015, -0.13, side * 0.23], "helmet-ear-pad");
    earPad.scale.set(0.72, 0.85, 0.52);
    const chinStrap = segment(head, 0.021, 0.021, PALETTE.helmetRim, 5,
      "chin-strap");
    placeSegment(chinStrap, new THREE.Vector3(0.04, -0.15, side * 0.26),
      new THREE.Vector3(-0.04, -0.3, side * 0.09));
  }

  const arms = [];
  const shirtSleeves = [];
  const forearms = [];
  const elbows = [];
  const mitts = [];
  for (const side of [-1, 1]) {
    arms.push(segment(body, 0.135, 0.12, PALETTE.sleeve, 7, "long-sleeve-upper"));
    shirtSleeves.push(segment(body, 0.17, 0.15, PALETTE.tee, 7, "tee-sleeve"));
    forearms.push(segment(body, 0.12, 0.105, PALETTE.sleeveShade, 7,
      "long-sleeve-forearm"));
    elbows.push(solid(new THREE.DodecahedronGeometry(0.125, 0), PALETTE.sleeve,
      body, [0, 0, 0], "elbow-fold"));
    mitts.push(solid(new THREE.BoxGeometry(0.18, 0.18, 0.17), PALETTE.mitt,
      body, [0, 0, 0], "mitten"));
  }

  const thighs = [
    segment(group, 0.23, 0.255, PALETTE.pants, 7, "baggy-pant-thigh"),
    segment(group, 0.23, 0.255, PALETTE.pants, 7, "baggy-pant-thigh"),
  ];
  const shins = [
    segment(group, 0.235, 0.25, PALETTE.pants, 7, "baggy-pant-leg"),
    segment(group, 0.235, 0.25, PALETTE.pants, 7, "baggy-pant-leg"),
  ];
  const knees = [-1, 1].map(() => solid(new THREE.DodecahedronGeometry(0.205, 0),
    PALETTE.pantsFold, group, [0, 0, 0], "knee-fold"));
  const cuffs = [-1, 1].map(() => solid(new THREE.CylinderGeometry(0.245, 0.265, 0.11, 7),
    PALETTE.pantsShade, group, [0, 0, 0], "stacked-pant-cuff"));
  const pockets = [-1, 1].map(() => solid(new THREE.BoxGeometry(0.18, 0.18, 0.035),
    PALETTE.pantsShade, group, [0, 0, 0], "cargo-pocket"));
  const grabAnchor = new THREE.Object3D();
  grabAnchor.position.set(0.18, 0.12, 0.08);
  board.add(grabAnchor);

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
    const boardTweak = air > 0.02
      ? clamp(finiteOr(pose.boardTweak), -1.35, 1.35) : 0;
    const bodyYaw = finiteOr(pose.bodyYaw, finiteOr(state.torsoYaw, finiteOr(state.heading)));
    const crouch = clamp(finiteOr(pose.crouch, 0.3), 0, 1);
    const jumpStretch = clamp(finiteOr(pose.jumpStretch), 0, 1);
    const grab = clamp(finiteOr(pose.grab), 0, 1);
    const lean = clamp(finiteOr(pose.bodyTilt, finiteOr(pose.lean) * 0.55), -0.8, 0.8);
    const suspension = clamp((finiteOr(pose.bob) - finiteOr(pose.boardBob)) * 0.3,
      -0.18, 0.18);
    const snowResponse = clamp(finiteOr(pose.snowResponse), 0, 1);
    const hipHeight = 1.24 - crouch * 0.72 + jumpStretch * 0.22 + suspension -
      snowResponse * (air > 0 ? 0 : 0.08);
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
      -boardYaw - boardTweak,
      clamp(finiteOr(pose.boardRoll) +
        (air > 0.02 ? takeoffRoll : slopeRoll), -1.1, 1.1),
    );
    const flex = clamp(finiteOr(pose.boardFlex), 0, 1);
    tips[0].rotation.x = -0.12 - flex * 0.12;
    tips[1].rotation.x = 0.12 + flex * 0.12;
    body.position.set(lean * 0.32, ridingHeight + hipHeight,
      finiteOr(pose.foreAft) * 0.13);
    body.rotation.set(-Math.max(0, crouch - 0.3) * 0.3 + jumpStretch * 0.12 -
      grab * 0.25 + finiteOr(pose.stumble) * 0.07,
      0.58 - bodyYaw + finiteOr(pose.upperBodyTwist) * 0.09,
      -lean * 0.68 + finiteOr(pose.fallRotation) * 0.6);
    shirt.scale.x = 1 + finiteOr(pose.clothFlutter) * 0.018;
    shirt.rotation.z = finiteOr(pose.clothLag) * 0.018;
    head.rotation.y = clamp(finiteOr(pose.headLook) * 0.25, -0.25, 0.25);
    head.rotation.z = -lean * 0.11;
    head.rotation.x = grab * 0.13;

    for (let index = 0; index < 2; index += 1) {
      const side = index === 0 ? -1 : 1;
      const foot = new THREE.Vector3(0, 0.2, side * 0.42)
        .applyEuler(board.rotation).add(board.position);
      const hip = new THREE.Vector3(0, 0, side * 0.25)
        .applyEuler(body.rotation).add(body.position);
      const knee = new THREE.Vector3(
        (foot.x + hip.x) * 0.5 + 0.08 + crouch * 0.075 + snowResponse * 0.04,
        (foot.y + hip.y) * 0.5 + 0.08,
        (foot.z + hip.z) * 0.5 + side * 0.07,
      );
      placeSegment(thighs[index], knee, hip);
      placeSegment(shins[index], foot, knee);
      knees[index].position.copy(knee);
      knees[index].scale.set(1, 0.58, 1);
      cuffs[index].position.copy(foot).add(new THREE.Vector3(0, 0.08, 0));
      pockets[index].position.copy(hip).lerp(knee, 0.55);
      pockets[index].position.z += side * 0.22;

      const shoulder = new THREE.Vector3(-0.02, 0.66, side * 0.39);
      const elbow = new THREE.Vector3(0.035 + finiteOr(pose.armLag) * 0.025,
        0.35 + crouch * 0.04 - snowResponse * 0.025, side * 0.51);
      const sleeveEnd = shoulder.clone().lerp(elbow, 0.44);
      const drag = side === (Math.sign(lean) || 1) && air <= 0.05
        ? clamp(finiteOr(pose.handDrag), 0, 1) : 0;
      const hand = new THREE.Vector3(
        0.09,
        0.08 - finiteOr(pose.stumble) * 0.1,
        side * (0.55 + finiteOr(pose.armLag) * 0.025),
      );
      if (drag > 0) {
        const dragWorld = new THREE.Vector3(side * 0.7,
          groundHeight + 0.06, side * 0.25);
        const dragLocal = dragWorld.sub(body.position)
          .applyQuaternion(body.quaternion.clone().invert());
        hand.lerp(dragLocal, drag);
        elbow.lerp(shoulder.clone().add(hand).multiplyScalar(0.5), drag * 0.5);
      }
      if (index === 1 && grab > 0) {
        const grabWorld = grabAnchor.position.clone()
          .applyEuler(board.rotation).add(board.position);
        const grabLocal = grabWorld.sub(body.position)
          .applyQuaternion(body.quaternion.clone().invert());
        hand.lerp(grabLocal, grab);
        elbow.lerp(shoulder.clone().add(hand).multiplyScalar(0.5), grab * 0.7);
        elbow.x += grab * 0.13;
      }
      placeSegment(arms[index], sleeveEnd, elbow);
      placeSegment(shirtSleeves[index], shoulder, sleeveEnd);
      placeSegment(forearms[index], elbow, hand);
      elbows[index].position.copy(elbow);
      mitts[index].position.copy(hand);
    }

    shadow.position.set(0.13, groundHeight + 0.024, 0.13);
    shadow.scale.set(1 + air * 0.18, 0.48 + air * 0.08, 1);
    shadow.material.opacity = 0.22 / (1 + air * 0.9);
  };

  update();
  return Object.freeze({ board, body, grabAnchor, grabHand: mitts[1],
    group, hands: Object.freeze([...mitts]), shadow, update });
}
