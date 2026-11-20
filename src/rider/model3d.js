import * as THREE from "../vendor/three/three.module.js";
import { LEG_COMPRESS, LEG_REACH } from "./legs.js";
import { REST_ARMS, SHOULDER_SPAN } from "./rig.js";

// Every surface is a flat facet in one solid colour: the low-poly look.
const material = (color, roughness = 0.92, metalness = 0) =>
  new THREE.MeshStandardMaterial({ color, roughness, metalness, flatShading: true });

// A black tee over a white long sleeve, white snow pants, black helmet and goggles.
const PALETTE = Object.freeze({
  board: material(0xe76648, 0.48),
  boardBase: material(0xe76648, 0.5),
  boardDeck: material(0x23272e, 0.55),
  boardGraphic: material(0xf2e8d4, 0.6),
  boardEdge: material(0xc9d3d6, 0.4),
  bootSole: material(0xe4e2dc, 0.8),
  boot: material(0x16181c, 0.94),
  binding: material(0x33373d, 0.74),
  face: material(0xc28f70, 0.98),
  goggles: material(0x0e0f11, 0.35),
  goggleStrap: material(0x2a2d31, 0.9),
  // Titanium: a bright neutral grey with a metal sheen.
  lens: Object.assign(material(0xc4c7cb, 0.3, 0.45), { emissive: new THREE.Color(0x2c2f33) }),
  lensTint: Object.assign(material(0x848a91, 0.26, 0.6), { emissive: new THREE.Color(0x1c1f23) }),
  helmet: material(0x25282d, 0.5),
  helmetTrim: material(0x0d0e10, 0.8),
  mitt: material(0x1d2024, 0.97),
  pants: material(0xf0f0ee, 1),
  pantsShade: material(0xd4d6d8, 1),
  pantsFold: material(0xe3e4e4, 1),
  sleeve: material(0xf2f1ec, 0.98),
  sleeveShade: material(0xdddbd3, 0.98),
  tee: material(0x2b2e33, 0.95),
});

// Hip height over the board with the legs fully folded, and the most it can be.
const HIP_LOWEST = 0.6;
const HIP_TALLEST = 1.6;
// Hip height standing easy. The rider rides tall, on nearly straight legs; when
// the snow drops away further than those legs can follow, the hips come down
// with the board rather than the legs growing.
const HIP_STANDING = 1.56;
/** How far a crouch lowers the hips: next to nothing standing easy, then all the way down. */
const crouchDrop = (crouch) => Math.max(0, crouch - 0.22) ** 1.15;
// The share of their length the legs straighten to on the snow, and in the air.
const KNEE_SOFT = 0.97;
const KNEE_STRAIGHT = 0.995;
// Bone lengths in metres. Thigh and shin are a touch longer than the tallest
// stance needs, so the knees stay soft even at full stretch.
const THIGH = 0.705;
const SHIN = 0.685;
const UPPER_ARM = 0.4;
const FOREARM = 0.36;
const PALM = 0.09;
// Joints, measured from the hips (the body's origin) with the chest facing +x.
const HIP_SOCKET = 0.12;
const WAIST = 0.17;
const SHOULDER_HEIGHT = 0.5;
const NECK_HEIGHT = 0.63;
const ANKLE = Object.freeze({ height: 0.2, stance: 0.42 });
// How far the shoulders open down the hill from square across the board, and how
// much squarer than that the hips sit.
const STANCE_OPEN = 0.48;
const HIP_CLOSE = 0.2;
// How the rider stands on a hill, as shares of its grade (0 is plumb, 1 square
// to the slope). Plumb: the hips stay over the middle of the board and the body
// stacks straight up over the hips, so the weight is on top of the board. The
// legs take the slope instead, the downhill one straighter and the uphill one
// more bent. Square to a steep slope the rider would be out over the nose.
const SLOPE_HIPS = 0;
const SLOPE_LEAN = 0;
// Radians the rider tips into a turn at full lean.
const INCLINE = 0.62;
const NECK_REACH = 1.25;
const HEAD_QUICKNESS = 12;
// As far round from the shoulders as the hips can turn.
const SPINE_TWIST = 0.8;
// Share of its full length an arm reaches: a free arm keeps a soft elbow, and only
// a hand going for the board or the snow straightens it. Nothing ever stretches.
const FREE_REACH = 0.94;
const FULL_REACH = 0.985;
const ARM = UPPER_ARM + FOREARM + PALM;
// How much leg, either side of the knee, the pant cloth takes to come round it.
const KNEE_ROUND = 0.16;
const LEG = THIGH + SHIN;

const clamp = (value, minimum, maximum) =>
  Math.min(maximum, Math.max(minimum, value));
const finiteOr = (value, fallback = 0) =>
  Number.isFinite(value) ? value : fallback;
const normalizeAngle = (angle) => Math.atan2(Math.sin(angle), Math.cos(angle));

const UP = new THREE.Vector3(0, 1, 0);
const ACROSS = new THREE.Vector3(1, 0, 0);
const ALONG = new THREE.Vector3(0, 0, 1);

const solid = (geometry, surface, parent, position = [0, 0, 0], part = "") => {
  const mesh = new THREE.Mesh(geometry, surface);
  mesh.position.set(...position);
  mesh.castShadow = ![
    "back-print", "binding-strap", "board-chevron", "boot-sole", "boot-cuff",
    "chin-strap", "goggle-nose", "goggle-outrigger", "goggle-strap-mark", "goggle-tint",
    "helmet-sticker", "helmet-vent",
    "cargo-pocket", "goggle-frame", "goggle-lens", "goggle-strap",
    "helmet-brim", "shirt-collar", "topsheet-stripe",
  ].includes(part);
  mesh.receiveShadow = true;
  mesh.userData.part = part;
  parent.add(mesh);
  return mesh;
};

// Corners cut off a box: the slightly blocky cross-section of the body.
const CHAMFER = 0.6;
const OCTAGON = [[1, -CHAMFER], [1, CHAMFER], [CHAMFER, 1], [-CHAMFER, 1],
  [-1, CHAMFER], [-1, -CHAMFER], [-CHAMFER, -1], [CHAMFER, -1]];

const loop = (ring, sides) => {
  const shift = ring.shift ?? 0;
  if (sides === 8) {
    return OCTAGON.map(([x, z]) => [x * ring.x + shift, ring.y, z * ring.z]);
  }
  return Array.from({ length: sides }, (_, side) => {
    const angle = (side + 0.5) / sides * Math.PI * 2;
    return [Math.cos(angle) * ring.x + shift, ring.y, Math.sin(angle) * ring.z];
  });
};

/**
 * A faceted shell through `rings`, bottom to top, closed at both ends. Each ring
 * is { y, x: half depth, z: half width, shift: forward offset }.
 */
const loft = (rings, sides = 8) => {
  const loops = rings.map((ring) => loop(ring, sides));
  const positions = [];
  for (let band = 0; band < loops.length - 1; band += 1) {
    for (let side = 0; side < sides; side += 1) {
      const next = (side + 1) % sides;
      const lower = loops[band];
      const upper = loops[band + 1];
      positions.push(...lower[side], ...upper[side], ...lower[next],
        ...lower[next], ...upper[side], ...upper[next]);
    }
  }
  for (const [ring, points, top] of [[rings[0], loops[0], false],
    [rings.at(-1), loops.at(-1), true]]) {
    const center = [ring.shift ?? 0, ring.y, 0];
    for (let side = 0; side < sides; side += 1) {
      const next = (side + 1) % sides;
      positions.push(...center, ...points[top ? next : side], ...points[top ? side : next]);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.computeVertexNormals();
  return geometry;
};

const scratch = {
  axis: new THREE.Vector3(),
  bend: new THREE.Vector3(),
  cross: new THREE.Vector3(),
  basis: new THREE.Matrix4(),
};

/**
 * Lay a bone from `from` to `to` and return its length. Each bone keeps the
 * facing it had last frame, so its facets never spin around its own axis.
 */
const aim = (mesh, from, to, hint) => {
  const axis = scratch.axis.subVectors(to, from);
  const length = Math.max(0.01, axis.length());
  axis.divideScalar(length);
  const facing = mesh.userData.facing ?? (mesh.userData.facing = hint.clone());
  facing.addScaledVector(axis, -facing.dot(axis));
  if (facing.lengthSq() < 1e-6) {
    facing.copy(Math.abs(axis.x) < 0.9 ? ACROSS : ALONG);
    facing.addScaledVector(axis, -facing.dot(axis));
  }
  facing.normalize();
  scratch.cross.crossVectors(facing, axis);
  mesh.quaternion.setFromRotationMatrix(
    scratch.basis.makeBasis(facing, axis, scratch.cross));
  mesh.position.copy(from).add(to).multiplyScalar(0.5);
  mesh.scale.y = length;
  return length;
};

/**
 * Where the knee or elbow sits between `root` and `tip` for bones of the given
 * lengths, bending toward `pole`. Out of reach, both bones stretch together.
 */
const solveJoint = (joint, root, tip, upper, lower, pole) => {
  const axis = scratch.axis.subVectors(tip, root);
  const reach = Math.max(1e-4, axis.length());
  axis.divideScalar(reach);
  const stretch = Math.max(1, reach / ((upper + lower) * 0.999));
  const near = upper * stretch;
  const far = lower * stretch;
  const along = clamp((near * near - far * far + reach * reach) / (2 * reach), -near, near);
  const bend = scratch.bend.copy(pole).addScaledVector(axis, -pole.dot(axis));
  if (bend.lengthSq() < 1e-8) bend.copy(Math.abs(axis.y) < 0.9 ? UP : ACROSS);
  bend.normalize();
  return joint.copy(root).addScaledVector(axis, along)
    .addScaledVector(bend, Math.sqrt(Math.max(0, near * near - along * along)));
};

// A true twin park board: the same nose and tail either side of a centred stance,
// widest just inside each tip, pinched at the waist, both ends kicked up alike.
const BOARD = Object.freeze({
  half: 0.97, flat: 0.7, widest: 0.75, waist: 0.176, tip: 0.208, kick: 0.095,
  top: 0.1, thick: 0.034,
});
const boardHalfWidth = (along) => {
  const out = Math.abs(along);
  if (out <= BOARD.widest) {
    return BOARD.waist + (BOARD.tip - BOARD.waist) * (out / BOARD.widest) ** 2;
  }
  // Past its widest point the tip rounds in.
  const round = (out - BOARD.widest) / (BOARD.half - BOARD.widest);
  return BOARD.tip * Math.sqrt(Math.max(0.08, 1 - round * round));
};
const boardKick = (along) => {
  const out = Math.abs(along);
  return out <= BOARD.flat ? 0
    : BOARD.kick * ((out - BOARD.flat) / (BOARD.half - BOARD.flat)) ** 1.7;
};

/**
 * One length of the deck between the `stations` along it (metres from the
 * middle), drawn about `origin` so a tip can hinge there. `paint(along)` picks
 * the topsheet colour of each stretch.
 */
const deckGeometry = (stations, origin, paint, closed) => {
  const surfaces = [PALETTE.boardBase, PALETTE.boardEdge, ...new Set(
    stations.slice(1).map((station, index) => paint((station + stations[index]) / 2)))];
  const faces = surfaces.map(() => []);
  const corner = (along, side, top) => [side * boardHalfWidth(along),
    BOARD.top - (top ? 0 : BOARD.thick) + boardKick(along), along - origin];
  const quad = (surface, a, b, c, d) => faces[surfaces.indexOf(surface)].push(...a, ...b, ...c, ...a, ...c, ...d);
  for (let index = 1; index < stations.length; index += 1) {
    const near = stations[index - 1];
    const far = stations[index];
    quad(paint((near + far) / 2), corner(near, -1, true), corner(far, -1, true),
      corner(far, 1, true), corner(near, 1, true));
    quad(PALETTE.boardBase, corner(near, 1, false), corner(far, 1, false),
      corner(far, -1, false), corner(near, -1, false));
    quad(PALETTE.boardEdge, corner(near, 1, true), corner(far, 1, true),
      corner(far, 1, false), corner(near, 1, false));
    quad(PALETTE.boardEdge, corner(near, -1, false), corner(far, -1, false),
      corner(far, -1, true), corner(near, -1, true));
  }
  for (const [end, facing] of closed) {
    const [a, b, c, d] = [corner(end, -1, true), corner(end, 1, true),
      corner(end, 1, false), corner(end, -1, false)];
    if (facing > 0) quad(PALETTE.boardEdge, a, b, c, d);
    else quad(PALETTE.boardEdge, d, c, b, a);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(faces.flat(), 3));
  let offset = 0;
  faces.forEach((face, index) => {
    geometry.addGroup(offset, face.length / 3, index);
    offset += face.length / 3;
  });
  geometry.computeVertexNormals();
  return { geometry, surfaces };
};

const createBoard = (parent) => {
  const board = new THREE.Group();
  board.rotation.order = "YXZ";
  parent.add(board);
  // The same graphic at both ends: dark deck, a pale band, and coloured tips.
  const paint = (along) => {
    const out = Math.abs(along);
    return out > 0.66 ? PALETTE.board : out > 0.6 ? PALETTE.boardGraphic : PALETTE.boardDeck;
  };
  const middle = deckGeometry([-0.7, -0.66, -0.6, -0.3, 0, 0.3, 0.6, 0.66, 0.7], 0, paint, []);
  solid(middle.geometry, middle.surfaces, board, [0, 0, 0], "snowboard");
  // A pale diamond between the feet, the same mark the rider wears.
  const mark = new THREE.Shape();
  mark.moveTo(0, 0.11);
  mark.lineTo(0.07, 0);
  mark.lineTo(0, -0.11);
  mark.lineTo(-0.07, 0);
  mark.closePath();
  solid(new THREE.ShapeGeometry(mark), PALETTE.boardGraphic, board,
    [0, BOARD.top + 0.002, 0], "topsheet-stripe").rotation.x = -Math.PI / 2;
  const tips = [];
  for (const end of [-1, 1]) {
    // Each tip hinges where the kick begins, so the board can flex.
    const tip = new THREE.Group();
    tip.position.z = end * BOARD.flat;
    board.add(tip);
    const stations = [0.7, 0.75, 0.82, 0.89, 0.94, 0.97].map((out) => end * out);
    const shape = deckGeometry(end > 0 ? stations : [...stations].reverse(), end * BOARD.flat,
      paint, [[end * BOARD.half, end]]);
    solid(shape.geometry, shape.surfaces, tip, [0, 0, 0], "snowboard");
    tips.push(tip);
    const chevron = solid(new THREE.BoxGeometry(0.2, 0.006, 0.035), PALETTE.boardGraphic, tip,
      [0, BOARD.top + boardKick(end * 0.79) + 0.004, end * 0.09], "board-chevron");
    chevron.rotation.x = -end * 0.16;
    // Binding: a baseplate, a highback behind the heel, and two straps over a boot
    // turned out a little, duck-footed, the same angle each way.
    const binding = new THREE.Group();
    binding.position.set(0, BOARD.top, end * ANKLE.stance);
    binding.rotation.y = -end * 0.2;
    board.add(binding);
    solid(new THREE.BoxGeometry(0.34, 0.022, 0.21), PALETTE.binding, binding,
      [0, 0.011, 0], "binding-disc");
    const highback = solid(new THREE.BoxGeometry(0.035, 0.24, 0.17), PALETTE.binding, binding,
      [-0.165, 0.14, 0], "binding-highback");
    highback.rotation.z = -0.2;
    solid(new THREE.BoxGeometry(0.37, 0.02, 0.2), PALETTE.bootSole, binding,
      [0.012, 0.032, 0], "boot-sole");
    solid(new THREE.BoxGeometry(0.36, 0.13, 0.185), PALETTE.boot, binding,
      [0.012, 0.107, 0], "boot");
    solid(new THREE.BoxGeometry(0.19, 0.16, 0.175), PALETTE.boot, binding,
      [-0.07, 0.24, 0], "boot-cuff").rotation.z = -0.12;
    solid(new THREE.BoxGeometry(0.07, 0.03, 0.215), PALETTE.board, binding,
      [0.02, 0.185, 0], "binding-strap");
    solid(new THREE.BoxGeometry(0.06, 0.028, 0.215), PALETTE.board, binding,
      [0.15, 0.135, 0], "binding-strap");
  }
  return { board, tips };
};

/** A length of a ring standing on end, `half` radians either side of `toward`. */
const arc = (top, bottom, height, half, toward = Math.PI / 2, open = false, facets = 4) =>
  new THREE.CylinderGeometry(top, bottom, height, facets, 1, open, toward - half, half * 2);
const FRONT = Math.PI / 2;
const BACK = Math.PI * 1.5;

const createHead = (chest) => {
  const head = new THREE.Group();
  head.position.set(0.012, NECK_HEIGHT, 0);
  chest.add(head);
  solid(loft([
    { y: -0.02, x: 0.058, z: 0.052, shift: 0.03 },
    { y: 0.045, x: 0.094, z: 0.088, shift: 0.016 },
    { y: 0.125, x: 0.11, z: 0.1, shift: 0.004 },
    { y: 0.2, x: 0.108, z: 0.1 },
  ], 6), PALETTE.face, head, [0, 0, 0], "face");

  // A low-profile park helmet: a dome over the top, sides and back that come down
  // over the ears and the back of the head, and a short brim.
  solid(loft([
    { y: 0.19, x: 0.166, z: 0.156, shift: -0.012 },
    { y: 0.25, x: 0.16, z: 0.15, shift: -0.014 },
    { y: 0.298, x: 0.13, z: 0.122, shift: -0.016 },
    { y: 0.33, x: 0.076, z: 0.07, shift: -0.018 },
  ]), PALETTE.helmet, head, [0, 0, 0], "helmet-shell");
  const skirt = solid(arc(0.162, 0.154, 0.14, 2, BACK, true, 7), PALETTE.helmet, head,
    [-0.012, 0.125, 0], "helmet-skirt");
  skirt.scale.set(1.04, 1, 0.965);
  solid(arc(0.2, 0.2, 0.014, 0.55, FRONT, false, 3), PALETTE.helmetTrim, head,
    [-0.012, 0.2, 0], "helmet-brim");
  for (const [x, z] of [[0.085, 0], [0.06, 0.052], [0.06, -0.052]]) {
    solid(new THREE.BoxGeometry(0.046, 0.008, 0.014), PALETTE.helmetTrim, head,
      [x, 0.31 - Math.abs(z) * 0.25, z], "helmet-vent").rotation.z = -0.5;
  }
  for (const side of [-1, 1]) {
    // Soft pads over the ears, and the strap from each down under the chin.
    solid(new THREE.BoxGeometry(0.1, 0.1, 0.028), PALETTE.helmetTrim, head,
      [-0.005, 0.03, side * 0.142], "helmet-ear-pad");
    const strap = solid(new THREE.BoxGeometry(0.014, 0.014, 0.1), PALETTE.helmetTrim, head,
      [0.03, -0.018, side * 0.09], "chin-strap");
    strap.rotation.x = side * 0.42;
    strap.rotation.y = side * 0.3;
  }
  // Stickers, as on any park rider's lid.
  solid(new THREE.BoxGeometry(0.055, 0.036, 0.005), PALETTE.board, head,
    [-0.04, 0.145, 0.153], "helmet-sticker");
  solid(new THREE.BoxGeometry(0.005, 0.03, 0.05), PALETTE.boardGraphic, head,
    [-0.179, 0.15, -0.035], "helmet-sticker");

  // Goggles tucked up under the brim: a frame, a wide lens in two tones proud of
  // it, a notch for the nose, and outriggers taking a strap round the helmet.
  solid(arc(0.166, 0.166, 0.1, 1.2), PALETTE.goggles, head, [0, 0.142, 0], "goggle-frame");
  solid(arc(0.176, 0.176, 0.05, 1.05), PALETTE.lens, head, [0, 0.158, 0], "goggle-lens");
  solid(arc(0.176, 0.173, 0.034, 1.05), PALETTE.lensTint, head, [0, 0.117, 0], "goggle-tint");
  solid(new THREE.BoxGeometry(0.02, 0.03, 0.046), PALETTE.goggles, head,
    [0.162, 0.098, 0], "goggle-nose");
  solid(loft([
    { y: 0.12, x: 0.172, z: 0.163, shift: -0.012 },
    { y: 0.172, x: 0.172, z: 0.163, shift: -0.012 },
  ]), PALETTE.goggleStrap, head, [0, 0, 0], "goggle-strap");
  for (const side of [-1, 1]) {
    solid(new THREE.BoxGeometry(0.034, 0.052, 0.02), PALETTE.goggles, head,
      [0.062, 0.143, side * 0.158], "goggle-outrigger");
    solid(new THREE.BoxGeometry(0.06, 0.028, 0.005), PALETTE.boardGraphic, head,
      [-0.045, 0.146, side * 0.166], "goggle-strap-mark");
  }
  return head;
};

const HEXAGON = Array.from({ length: 6 }, (_, corner) => {
  const angle = (corner + 0.5) / 6 * Math.PI * 2;
  return [Math.cos(angle), Math.sin(angle)];
});

/**
 * A length of cloth: loops of corners strung along a path, redrawn every frame.
 * Each loop on the path has a `center` and half-widths `rx` (fore and aft) and
 * `rz` (side to side). A loop marked `framed` also carries its own `forward` and
 * `normal`; the rest turn to follow the path, so the cloth bends where the limb
 * inside it bends instead of breaking at a joint.
 */
const createCloth = (parent, loops, sides, surface, part) => {
  const corners = loops * sides;
  const index = [];
  for (let loop = 0; loop < loops - 1; loop += 1) {
    for (let side = 0; side < sides; side += 1) {
      const a = loop * sides + side;
      const b = loop * sides + (side + 1) % sides;
      index.push(a, a + sides, b, b, a + sides, b + sides);
    }
  }
  for (let side = 0; side < sides; side += 1) {
    const next = (side + 1) % sides;
    index.push(corners, side, next, corners + 1, corners - sides + next, corners - sides + side);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setIndex(index);
  geometry.setAttribute("position",
    new THREE.BufferAttribute(new Float32Array((corners + 2) * 3), 3));
  const mesh = solid(geometry, surface, parent, [0, 0, 0], part);
  mesh.frustumCulled = false;
  return {
    mesh,
    sides,
    shape: sides === 8 ? OCTAGON : HEXAGON,
    path: Array.from({ length: loops }, () => ({ center: new THREE.Vector3(), rx: 0.1,
      rz: 0.1, framed: false, forward: new THREE.Vector3(), normal: new THREE.Vector3() })),
  };
};

const drapeScratch = Object.fromEntries(["into", "out", "side", "bend", "corner"]
  .map((name) => [name, new THREE.Vector3()]));

/** Redraw a cloth along its path. `hint` is which way the first loop faces. */
const drape = (cloth, hint) => {
  const { path, shape, sides } = cloth;
  const { into, out, side, bend, corner } = drapeScratch;
  const position = cloth.mesh.geometry.attributes.position;
  const last = path.length - 1;
  for (let loop = 0; loop <= last; loop += 1) {
    const ring = path[loop];
    let widen = 1;
    if (!ring.framed) {
      into.subVectors(ring.center, path[Math.max(0, loop - 1)].center);
      out.subVectors(path[Math.min(last, loop + 1)].center, ring.center);
      if (into.lengthSq() < 1e-10) into.copy(out);
      if (out.lengthSq() < 1e-10) out.copy(into);
      into.normalize();
      out.normalize();
      ring.normal.addVectors(into, out);
      if (ring.normal.lengthSq() < 1e-8) ring.normal.copy(out);
      ring.normal.normalize();
      // Round a bend the loop is cut on the slant, so it has to reach further.
      bend.subVectors(out, into);
      if (bend.lengthSq() > 1e-6) {
        bend.normalize();
        widen = 1 / Math.max(0.82, ring.normal.dot(into));
      }
      ring.forward.copy(loop === 0 ? hint : path[loop - 1].forward);
      ring.forward.addScaledVector(ring.normal, -ring.forward.dot(ring.normal));
      if (ring.forward.lengthSq() < 1e-8) {
        ring.forward.copy(Math.abs(ring.normal.x) < 0.9 ? ACROSS : ALONG);
        ring.forward.addScaledVector(ring.normal, -ring.forward.dot(ring.normal));
      }
      ring.forward.normalize();
    }
    side.crossVectors(ring.forward, ring.normal);
    for (let at = 0; at < sides; at += 1) {
      corner.set(0, 0, 0).addScaledVector(ring.forward, shape[at][0] * ring.rx)
        .addScaledVector(side, shape[at][1] * ring.rz);
      if (widen > 1) corner.addScaledVector(bend, corner.dot(bend) * (widen - 1));
      corner.add(ring.center);
      position.setXYZ(loop * sides + at, corner.x, corner.y, corner.z);
    }
  }
  const corners = path.length * sides;
  position.setXYZ(corners, path[0].center.x, path[0].center.y, path[0].center.z);
  position.setXYZ(corners + 1, path[last].center.x, path[last].center.y, path[last].center.z);
  position.needsUpdate = true;
  cloth.mesh.geometry.boundingBox = null;
  cloth.mesh.geometry.boundingSphere = null;
};

const pair = () => [new THREE.Vector3(), new THREE.Vector3()];

/**
 * Solid rider built the way a person is: a skeleton of fixed-length bones (hips on
 * the physics body, a chest that hinges over them, legs and arms that reach
 * between body and board) with clothes draped over it. Nothing stretches: if a
 * hand or a foot cannot reach, the body folds or the hand stops short.
 * The chest faces +x, so a regular rider's lead shoulder points down the hill.
 */
export function createRiderModel() {
  const group = new THREE.Group();
  // Everything that goes over when the rider falls: the board and all of them.
  const rig = new THREE.Group();
  group.add(rig);
  const { board, tips } = createBoard(rig);
  const body = new THREE.Group();
  body.rotation.order = "YXZ";
  rig.add(body);
  const pelvis = new THREE.Group();
  body.add(pelvis);
  const chest = new THREE.Group();
  chest.position.set(0, WAIST, 0);
  chest.rotation.order = "XZY";
  body.add(chest);
  solid(loft([
    { y: 0.535, x: 0.088, z: 0.102, shift: -0.004 },
    { y: 0.578, x: 0.078, z: 0.088, shift: -0.002 },
  ]), PALETTE.sleeve, chest, [0, 0, 0], "shirt-collar");
  solid(new THREE.CylinderGeometry(0.066, 0.072, 0.12, 6), PALETTE.face, chest,
    [0.004, 0.61, 0], "neck");
  const badgeShape = new THREE.Shape();
  badgeShape.moveTo(0, 0.06);
  badgeShape.lineTo(0.056, 0);
  badgeShape.lineTo(0, -0.06);
  badgeShape.lineTo(-0.056, 0);
  badgeShape.closePath();
  solid(new THREE.ShapeGeometry(badgeShape), PALETTE.sleeve, chest,
    [-0.193, 0.22, 0], "back-print").rotation.y = -Math.PI / 2;
  const head = createHead(chest);

  // Clothes, each one length of cloth from end to end.
  const shirt = createCloth(rig, 7, 8, PALETTE.tee, "oversized-tee");
  const undershirt = createCloth(rig, 2, 8, PALETTE.sleeve, "undershirt-hem");
  const seat = createCloth(rig, 5, 8, PALETTE.pants, "pant-seat");
  const legs = [0, 1].map(() => ({
    cloth: createCloth(rig, 11, 8, PALETTE.pants, "baggy-pant-leg"),
    cuff: createCloth(rig, 3, 8, PALETTE.pantsShade, "stacked-pant-cuff"),
    pocket: solid(new THREE.BoxGeometry(0.16, 0.19, 0.04), PALETTE.pantsShade,
      rig, [0, 0, 0], "cargo-pocket"),
    // Where each loop of cloth was a moment ago: cloth trails what it hangs on.
    trail: Array.from({ length: 11 }, () => new THREE.Vector3()),
  }));
  const arms = [0, 1].map(() => {
    const mitt = solid(new THREE.BoxGeometry(0.075, 0.19, 0.115), PALETTE.mitt,
      rig, [0, 0, 0], "mitten");
    solid(new THREE.BoxGeometry(0.05, 0.085, 0.05), PALETTE.mitt, mitt,
      [0.04, -0.02, 0], "mitten-thumb");
    return {
      tee: createCloth(rig, 3, 6, PALETTE.tee, "tee-sleeve"),
      sleeve: createCloth(rig, 7, 6, PALETTE.sleeve, "long-sleeve"),
      mitt,
    };
  });
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

  // The skeleton, in the group's own space, lead side first.
  const joints = Object.freeze({ hips: pair(), knees: pair(), ankles: pair(),
    shoulders: pair(), elbows: pair(), hands: pair() });
  let takeoffPitch = -0.35;
  let takeoffRoll = 0;
  let standGrade = 0.35;
  let lastElapsed;
  const gaze = new THREE.Quaternion();
  const v = Object.fromEntries(["anchor", "back", "crease", "down", "drag", "front", "hang", "limb",
    "point", "thrown", "tumble",
    "nose", "offset", "pelvisFront", "pelvisUp", "pole", "reach", "right", "shin", "side",
    "thigh", "toe", "travel", "upright", "waist", "wind", "wrist"]
    .map((name) => [name, new THREE.Vector3()]));
  const q = Object.fromEntries(["chest", "fall", "hips", "lean", "look", "middle", "pelvis", "slope", "spin",
    "turn", "yaw"]
    .map((name) => [name, new THREE.Quaternion()]));
  const euler = new THREE.Euler();

  /** Put loop `at` of a cloth at `center`, optionally squared to a frame. */
  const loop = (cloth, at, center, rx, rz, frame) => {
    const ring = cloth.path[at];
    ring.center.copy(center);
    ring.rx = rx;
    ring.rz = rz;
    ring.framed = Boolean(frame);
    if (frame) {
      ring.forward.copy(ACROSS).applyQuaternion(frame);
      ring.normal.copy(UP).applyQuaternion(frame);
    }
    return ring.center;
  };

  /**
   * `groundHeight` and `groundNormal` are the snow right under the rider, which
   * the body's height is measured from. `plane`, when given, is where the snow
   * carries the board (see planing.js): the board rides that, and the legs take
   * up the difference.
   */
  const update = (state = {}, pose = {}, groundHeight = 0,
    groundNormal = { x: 0, y: 1, z: -0.35 }, plane = undefined) => {
    const across = finiteOr(state.position?.across);
    const downhill = finiteOr(state.position?.downhill);
    const air = Math.max(0, finiteOr(state.air));
    const heading = finiteOr(state.heading);
    const boardYaw = finiteOr(pose.boardYaw, finiteOr(state.boardYaw, heading));
    const boardTweak = air > 0.02
      ? clamp(finiteOr(pose.boardTweak), -1.35, 1.35) : 0;
    // A touch of board angle the rider adds for style; it never steers.
    const styleYaw = clamp(finiteOr(pose.styleYaw), -0.4, 0.4);
    const bodyYaw = finiteOr(pose.bodyYaw, finiteOr(state.torsoYaw, heading));
    const jumpStretch = clamp(finiteOr(pose.jumpStretch), 0, 1);
    const grab = clamp(finiteOr(pose.grab), 0, 1) * (1 - finiteOr(pose.fall));
    const stumble = clamp(finiteOr(pose.stumble), 0, 1);
    // How far down the rider is in a fall (1 is flat on the snow), and how they
    // went: thrown onto their "front" or "back", or sat down ("sit").
    const fall = clamp(finiteOr(pose.fall), 0, 1);
    const fallKind = ["back", "sit"].includes(pose.fallKind) ? pose.fallKind : "front";
    const down = fall * fall * (3 - 2 * fall);
    // Which side of the line of travel the toes are on: +1 riding regular, -1
    // riding switch, passing through 0 with the board square across the hill.
    const toes = clamp(Math.cos(normalizeAngle(boardYaw - heading)) * 3, -1, 1);
    const standing = clamp(finiteOr(pose.crouch, 0.3), 0, 1);
    const crouch = standing + ((fallKind === "sit" ? 1 : 0.55) - standing) * down;
    const lean = clamp(finiteOr(pose.bodyTilt, finiteOr(pose.lean) * 0.55), -0.8, 0.8) * (1 - down);
    const dragSide = Math.sign(lean) || 1;
    // The hand that goes to the snow is the trailing one: the right riding regular,
    // the left riding switch. Only on the toes, facing the snow, does the rider
    // bend down to lay it there; on the heels it trails behind them.
    const dragHand = toes < 0 ? 0 : 1;
    const facingSnow = lean * toes > 0 ? 1 : 0;
    const drag = air <= 0.05 ? clamp(finiteOr(pose.handDrag), 0, 1) * (1 - down) : 0;
    // The hips sit on the physics body: leg travel moves them, not the board.
    const legOffset = clamp(finiteOr(pose.legOffset), -LEG_COMPRESS, LEG_REACH);
    const legFold = clamp(-legOffset / LEG_COMPRESS, 0, 1);
    const snowResponse = clamp(finiteOr(pose.snowResponse), 0, 1);
    // How high the rider stands before the legs work: leg travel comes on top.
    const hipHeight = clamp(HIP_STANDING - crouchDrop(crouch) + jumpStretch * 0.22 -
      snowResponse * (air > 0 ? 0 : 0.08) - grab * 0.18 - drag * 0.06 +
      clamp(finiteOr(pose.spray), 0, 1) * 0.05,
    HIP_LOWEST, HIP_TALLEST);
    const ridingHeight = groundHeight + air;
    const normalY = Math.max(0.2, finiteOr(groundNormal.y, 1));
    const carried = Number.isFinite(plane?.height);
    // Without a planing line the board lies on the snow under the rider: tipped
    // nose-up by how the snow rises toward its nose, and toe-edge-up by how it
    // rises toward its toes, whichever way round the board is.
    const riseX = -finiteOr(groundNormal.x) / normalY;
    const riseZ = -finiteOr(groundNormal.z, -0.35) / normalY;
    const slopePitch = carried ? finiteOr(plane.pitch)
      : Math.atan(riseX * Math.sin(boardYaw) - riseZ * Math.cos(boardYaw));
    const slopeRoll = carried ? finiteOr(plane.roll)
      : Math.atan(riseX * Math.cos(boardYaw) + riseZ * Math.sin(boardYaw));
    // In deep snow at speed the nose rides up a touch.
    const noseFloat = air <= 0.02 && state.surface === "powder"
      ? clamp(finiteOr(state.speed) / 18, 0, 1) * 0.045 : 0;
    if (air <= 0.02) {
      takeoffPitch = slopePitch;
      takeoffRoll = slopeRoll;
      // The hill's smooth grade, so ripples in the snow never rock the body.
      standGrade = finiteOr(state.slopeGrade, -finiteOr(groundNormal.z, -0.35) / normalY);
    }
    const elapsed = finiteOr(state.elapsed, NaN);
    const passed = elapsed - lastElapsed;
    lastElapsed = elapsed;
    // Seconds since the last frame, or none when this pose stands on its own.
    const delta = passed > 0 && passed < 0.1 ? passed : 0;

    group.position.set(across, 0, -downhill);
    rig.position.set(0, 0, 0);
    rig.quaternion.identity();
    // Thrown across its line of travel the board skids on the edge behind it: the
    // edge going first is lifted clear, or it would catch.
    const skidRoll = air > 0.02 ? 0 : -Math.sin(boardYaw + styleYaw - heading) * 0.42 *
      clamp(finiteOr(state.speed) / 10, 0, 1);
    // On the snow the board sits where the snow carries it; leaving it, it eases
    // up to the rider's own height.
    const lifted = clamp(air / 0.3, 0, 1);
    board.position.set(0, (carried
      ? plane.height + air + (groundHeight - plane.height) * lifted : ridingHeight) + 0.035, 0);
    board.rotation.set(
      // Everything that lifts "the front" of the board lifts the end going first:
      // the nose riding regular, the tail riding switch.
      clamp((air > 0.02 ? takeoffPitch : slopePitch) + toes * (noseFloat +
        finiteOr(pose.boardPitch) + finiteOr(pose.press) * 0.15 +
        clamp(finiteOr(pose.stylePitch), -0.25, 0.25)), -0.8, 0.8),
      -boardYaw - boardTweak - styleYaw,
      // The edge inside the turn bites and the outside one lifts clear. Toes are
      // on the +x edge, so a toe-side roll tips that edge down into the snow.
      clamp(-finiteOr(pose.boardRoll) * toes + skidRoll - clamp(finiteOr(pose.styleRoll), -0.3, 0.3) +
        (air > 0.02 ? takeoffRoll : slopeRoll), -1.1, 1.1),
    );
    const flex = clamp(finiteOr(pose.boardFlex), 0, 1);
    // Loaded, the board bows: both tips lift a little more, the same amount.
    tips[0].rotation.x = flex * 0.1;
    tips[1].rotation.x = -flex * 0.1;
    v.toe.copy(ACROSS).applyQuaternion(board.quaternion);
    v.nose.copy(ALONG).negate().applyQuaternion(board.quaternion);
    for (const side of [0, 1]) {
      joints.ankles[side].set(0, ANKLE.height, (side ? 1 : -1) * ANKLE.stance)
        .applyQuaternion(board.quaternion).add(board.position);
    }

    // The body stands square to the hill and tips into the turn as one line from
    // the board up, about the line of travel; only then does it turn and fold.
    // The shoulders open toward the way the rider is going, switch or not.
    const yaw = STANCE_OPEN * toes - bodyYaw + finiteOr(pose.upperBodyTwist) * 0.09;
    v.travel.set(Math.sin(heading), 0, -Math.cos(heading));
    v.right.set(Math.cos(heading), 0, Math.sin(heading));
    const pitch = Math.atan(standGrade);
    q.slope.setFromAxisAngle(ACROSS, -pitch * SLOPE_LEAN);
    q.lean.setFromAxisAngle(v.travel, lean * INCLINE + dragSide * drag * 0.1);
    q.turn.setFromEuler(euler.set(
      toes * (-Math.max(0, crouch - 0.3) * 0.06 - finiteOr(pose.foreAft) * 0.04 +
        finiteOr(pose.press) * 0.1) + stumble * 0.07,
      yaw,
      0,
      "YXZ"));
    body.quaternion.copy(q.lean).multiply(q.slope).multiply(q.turn);
    // The lean back up the hill is from the waist: the hips stay with the legs.
    q.hips.setFromAxisAngle(ACROSS, -pitch * SLOPE_HIPS).premultiply(q.lean).multiply(q.turn);
    // The hips swing in over the edge on legs that keep their bend.
    v.upright.set(0, Math.cos(pitch * SLOPE_HIPS), -Math.sin(pitch * SLOPE_HIPS));
    const standAt = (height) => {
      body.position.copy(v.upright).multiplyScalar(height / v.upright.y)
        .applyQuaternion(q.lean)
        .addScaledVector(v.offset.copy(v.nose).setY(0), finiteOr(pose.foreAft) * 0.08 * toes);
      body.position.y += ridingHeight;
    };
    standAt(hipHeight);

    // Hips follow the board as far as a spine twists; the shoulders stay quiet.
    const swing = Number.isFinite(pose.hipTwist) ? pose.hipTwist
      : clamp(normalizeAngle(boardYaw + boardTweak + styleYaw - bodyYaw) * 0.68, -1, 1);
    const shoulderTurn = -finiteOr(pose.spineTwist);
    const toeSide = clamp(lean * toes / 0.6, 0, 1);
    const heelSide = clamp(-lean * toes / 0.6, 0, 1);
    // How far the chest folds forward over the hips; the hips tip with it a little.
    // On the toes the rider opens up into one long line; on the heels they sit
    // back and the chest comes forward to balance.
    // (Throwing spray, the rider opens up and stands a little taller.)
    const spraying = clamp(finiteOr(pose.spray), 0, 1) * (1 - down);
    // (All the way down, the chest comes over the knees: that is how the rider
    // ducks under something.)
    let hinge = clamp((0.08 + crouch * 0.4 + Math.max(0, crouch - 0.7) + legFold * 0.14 -
      spraying * 0.08) * (1 - toeSide * 0.7) -
      toeSide * 0.12 + heelSide * 0.38 + grab * 0.6 + drag * 0.1 * facingSnow - jumpStretch * 0.16 +
      stumble * 0.12 * (1 - down) + finiteOr(pose.spineHinge), -0.3, 1.35);
    // Thrown down, the body lies long; sat down, it stays folded over the knees.
    hinge += ((fallKind === "sit" ? 1.25 : fallKind === "back" ? 0.12 : 0.3) - hinge) * down;
    // Folding at the waist carries an open chest partly down the hill; the chest
    // tips back toward the uphill shoulder just enough to take that out. Uphill is
    // the tail riding regular, the nose riding switch.
    const sideBend = grab * 0.34 + finiteOr(pose.spineSide) +
      toes * hinge * 0.45 * (1 - down) * (1 - clamp(air / 0.3, 0, 1));
    const fold = () => {
      pelvis.rotation.set(0,
        clamp(-HIP_CLOSE * toes - swing * 0.9, shoulderTurn - SPINE_TWIST, shoulderTurn + SPINE_TWIST),
        -hinge * 0.3);
      chest.rotation.set(sideBend, shoulderTurn, -hinge);
      q.pelvis.copy(q.hips).multiply(pelvis.quaternion);
      q.chest.copy(body.quaternion).multiply(chest.quaternion);
      v.waist.set(0, WAIST, 0).applyQuaternion(body.quaternion).add(body.position);
      for (const side of [0, 1]) {
        const sign = side ? 1 : -1;
        joints.hips[side].set(0, 0, sign * HIP_SOCKET).applyQuaternion(q.pelvis)
          .add(body.position);
        joints.shoulders[side].set(0, SHOULDER_HEIGHT, sign * SHOULDER_SPAN)
          .applyQuaternion(q.chest).add(v.waist);
      }
    };
    fold();
    // Legs are only so long: if a foot is out of reach the hips come down to it.
    // Returns how far they had to come down.
    const reachBoard = () => {
      let lowered = 0;
      for (let pass = 0; pass < 4; pass += 1) {
        const over = Math.max(joints.hips[0].distanceTo(joints.ankles[0]),
          joints.hips[1].distanceTo(joints.ankles[1])) - LEG * (air > 0.3 ? KNEE_STRAIGHT : KNEE_SOFT);
        if (over <= 0) break;
        v.offset.copy(board.position).setY(board.position.y + ANKLE.height).sub(body.position);
        body.position.addScaledVector(v.offset.normalize(), over * 1.05);
        lowered += over * 1.05;
        fold();
      }
      return lowered;
    };
    // Folding the legs lowers the hips from where the rider actually stands, metre
    // for metre; stretching them raises the hips only as far as the legs allow.
    const stood = hipHeight - reachBoard();
    if (legOffset !== 0) {
      standAt(clamp(stood + legOffset, HIP_LOWEST, HIP_TALLEST));
      fold();
      reachBoard();
    }
    // Reaching for the board folds the rider down to it rather than growing the arm.
    if (grab > 0) {
      v.anchor.copy(grabAnchor.position).applyQuaternion(board.quaternion).add(board.position);
      for (let pass = 0; pass < 4; pass += 1) {
        const short = joints.shoulders[1].distanceTo(v.anchor) - ARM * FULL_REACH * 0.99;
        if (short <= 0 || hinge >= 1.5) break;
        hinge = Math.min(1.5, hinge + short * 1.8 * grab);
        fold();
      }
    }
    const snowAt = (point) => groundHeight -
      (finiteOr(groundNormal.x) * point.x + finiteOr(groundNormal.z, -0.35) * point.z) / normalY;
    // The same for a hand laid on the snow, but only once the rider commits to it:
    // a hand that is merely held low never pulls the body down after it.
    const laidDown = clamp((drag - 0.7) / 0.3, 0, 1) * facingSnow;
    if (laidDown > 0) {
      const inside = dragHand;
      const bent = hinge;
      for (let pass = 0; pass < 4; pass += 1) {
        v.drag.copy(joints.shoulders[inside]).addScaledVector(v.right, dragSide * 0.15);
        v.drag.y = snowAt(v.drag) + 0.06;
        const short = joints.shoulders[inside].distanceTo(v.drag) - ARM * FULL_REACH * 0.99;
        if (short <= 0 || hinge >= bent + 0.8 * laidDown) break;
        hinge = Math.min(bent + 0.8 * laidDown, hinge + short * 1.6 * laidDown);
        fold();
      }
    }
    v.front.copy(ACROSS).applyQuaternion(body.quaternion);
    v.pelvisFront.copy(ACROSS).applyQuaternion(q.pelvis);
    v.pelvisUp.copy(UP).applyQuaternion(q.pelvis);
    v.down.set(0, -1, 0);

    // The head looks down the line of travel, as far round as a neck turns.
    const look = heading + clamp(finiteOr(pose.headLook), -1, 1) * 0.4;
    q.look.setFromEuler(euler.set(0, Math.PI / 2 - look, -0.1, "YZX"));
    q.look.premultiply(q.yaw.copy(q.chest).invert());
    const turned = 2 * Math.acos(clamp(Math.abs(q.look.w), 0, 1));
    if (turned > NECK_REACH) q.yaw.identity().slerp(q.look, NECK_REACH / turned);
    else q.yaw.copy(q.look);
    if (delta > 0) gaze.slerp(q.yaw, 1 - Math.exp(-HEAD_QUICKNESS * delta));
    else gaze.copy(q.yaw);
    head.quaternion.copy(state.crashed ? gaze.identity() : gaze);

    q.yaw.setFromAxisAngle(UP, yaw + shoulderTurn);
    // How hard the air pulls at loose cloth, and the time its ripples run on.
    const rush = clamp(finiteOr(state.speed) / 28, 0, 1);
    const clock = finiteOr(state.elapsed);
    /** The part of `pull` that drags cloth sideways off a bone running along `bone`. */
    const hangOff = (bone, pull) => v.hang.copy(pull).addScaledVector(bone, -pull.dot(bone));

    for (const side of [0, 1]) {
      const sign = side ? 1 : -1;
      const leg = legs[side];
      const hip = joints.hips[side];
      const knee = joints.knees[side];
      const ankle = joints.ankles[side];
      // Knees track out over the toes of a duck stance.
      v.pole.copy(v.toe).addScaledVector(v.nose, -sign * 0.3).addScaledVector(v.front, 0.2);
      solveJoint(knee, hip, ankle, THIGH, SHIN, v.pole);
      v.thigh.subVectors(knee, hip).normalize();
      v.shin.subVectors(ankle, knee).normalize();

      // The pant leg: one tube from inside the seat to the boot. It sags under a
      // folded thigh, is pressed back by the wind, ripples at speed, and trails
      // whatever the leg has just done.
      const { path } = leg.cloth;
      // Cloth cannot turn a sharp corner: either side of the knee it takes
      // `KNEE_ROUND` of leg to come round, cutting inside the joint as it does.
      const kneeTurn = Math.acos(clamp(v.thigh.dot(v.shin), -1, 1));
      v.crease.subVectors(v.shin, v.thigh);
      if (v.crease.lengthSq() > 1e-8) v.crease.normalize();
      const loops = [
        ["waist", 0, 0.14, 0.13, 0, 0, 0],
        ["hip", 0, 0.166, 0.152, 0, 0, 0],
        [v.thigh, 0.34, 0.17, 0.16, 0.04, 0.012, 0.3],
        [v.thigh, 0.66, 0.168, 0.16, 0.034, 0.014, 0.5],
        ["above", 0, 0.166, 0.164, 0.02, 0.014, 0.6],
        ["knee", 0, 0.164, 0.168, 0.012, 0.016, 0.65],
        ["below", 0, 0.168, 0.166, 0.016, 0.02, 0.75],
        [v.shin, 0.45, 0.174, 0.168, 0.02, 0.03, 0.9],
        [v.shin, 0.7, 0.176, 0.17, 0.012, 0.04, 1],
        [v.shin, 0.95, 0.178, 0.172, 0, 0.034, 0.85],
        [v.shin, 1.03, 0.176, 0.17, 0, 0.03, 0.8],
      ];
      loops.forEach(([where, along, rx, rz, sag, blown, loose], at) => {
        const center = path[at].center;
        let bone = null;
        if (where === "waist") center.copy(hip).addScaledVector(v.pelvisUp, 0.1);
        else if (where === "hip") center.copy(hip).addScaledVector(v.pelvisFront, -0.03);
        else if (where === "above") center.copy(knee).addScaledVector(bone = v.thigh, -KNEE_ROUND);
        else if (where === "below") center.copy(knee).addScaledVector(bone = v.shin, KNEE_ROUND);
        else if (where === "knee") {
          bone = v.shin;
          center.copy(knee).addScaledVector(v.crease, KNEE_ROUND * Math.tan(kneeTurn / 4) - 0.015);
        } else {
          bone = where;
          if (bone === v.thigh) center.copy(hip).lerp(knee, along);
          else center.copy(knee).lerp(ankle, along);
        }
        if (bone) {
          center.addScaledVector(hangOff(bone, v.down), sag);
          center.addScaledVector(hangOff(bone, v.travel), -blown * rush);
        }
        // Trail: the cloth is a beat behind the bone it hangs on.
        const behind = leg.trail[at];
        if (delta > 0) {
          v.offset.copy(center);
          behind.lerp(center, 1 - Math.exp(-delta * 22));
          v.limb.subVectors(behind, center).multiplyScalar(loose);
          if (v.limb.length() > 0.08) v.limb.setLength(0.08);
          center.add(v.limb);
          // What is remembered stays tied to the bone, not to the drawn cloth.
          behind.sub(v.offset).clampLength(0, 0.3).add(v.offset);
        } else {
          behind.copy(center);
        }
        // At speed one slow ripple runs down the leg, the same wave loop to loop.
        if (bone) {
          v.side.crossVectors(v.travel, bone);
          center.addScaledVector(v.side,
            Math.sin(clock * 11 - at * 0.9 + side * 2.4) * 0.006 * rush * loose);
        }
        path[at].rx = rx;
        path[at].rz = rz;
        path[at].framed = false;
      });
      drape(leg.cloth, v.toe);
      // The cuff pools on the boot.
      loop(leg.cuff, 0, v.offset.copy(path[8].center).lerp(path[9].center, 0.5), 0.186, 0.18);
      loop(leg.cuff, 1, path[10].center, 0.2, 0.192);
      loop(leg.cuff, 2, v.offset.copy(path[10].center).addScaledVector(v.shin, 0.075), 0.194, 0.184);
      drape(leg.cuff, v.toe);
      const length = leg.pocket.scale.y;
      aim(leg.pocket, hip, knee, v.toe);
      leg.pocket.scale.y = length;
      leg.pocket.position.copy(path[2].center).lerp(path[3].center, 0.6)
        .add(v.offset.set(0, 0, sign * 0.162).applyQuaternion(leg.pocket.quaternion));

      const arm = arms[side];
      const shoulder = joints.shoulders[side];
      const elbow = joints.elbows[side];
      const hand = joints.hands[side];
      const riding = pose.arms?.[side] ?? REST_ARMS[side];
      // Going down the hands go out to meet the snow: ahead of the chest, out
      // behind, or down beside the hips.
      const braced = fallKind === "back" ? { x: -0.2, y: -0.12, out: 0.44 }
        : fallKind === "sit" ? { x: -0.12, y: -0.5, out: 0.32 } : { x: 0.4, y: 0.1, out: 0.24 };
      const rest = down > 0 ? {
        x: finiteOr(riding.x) + (braced.x - finiteOr(riding.x)) * down,
        y: finiteOr(riding.y) + (braced.y - finiteOr(riding.y)) * down,
        out: finiteOr(riding.out) + (braced.out - finiteOr(riding.out)) * down,
      } : riding;
      const reaching = side === 1 ? grab : 0;
      const dragging = side === dragHand ? drag : 0;
      // The free hand comes up to balance a grab or a hand on the snow.
      const balance = (side === 0 ? grab : 0) * 0.26 + (side === dragHand ? 0 : drag) * 0.18;
      hand.set(finiteOr(rest.x, REST_ARMS[side].x),
        finiteOr(rest.y, REST_ARMS[side].y) + balance,
        sign * (finiteOr(rest.out, REST_ARMS[side].out) + balance * 0.4))
        .applyQuaternion(q.yaw).add(shoulder);
      if (dragging > 0) {
        // Facing the snow the hand goes down under its own shoulder; on the heels
        // it goes down behind the rider, out beside the hips.
        if (facingSnow) v.drag.copy(shoulder).addScaledVector(v.right, dragSide * 0.15);
        else v.drag.copy(body.position).addScaledVector(v.right, dragSide * 0.55).lerp(shoulder, 0.25);
        v.drag.y = snowAt(v.drag) + 0.06;
        hand.lerp(v.drag, dragging * 0.9);
      }
      if (reaching > 0) hand.lerp(v.anchor, reaching);
      // A free arm keeps a soft elbow; reaching for something may straighten it.
      const length_ = ARM * (FREE_REACH + (FULL_REACH - FREE_REACH) * Math.max(dragging, reaching));
      v.reach.subVectors(hand, shoulder);
      if (v.reach.length() > length_) hand.copy(shoulder).addScaledVector(v.reach.normalize(), length_);
      // Elbows hang back, a little out from the ribs.
      v.pole.set(-0.85, -0.25, sign * 0.25).applyQuaternion(q.yaw);
      solveJoint(elbow, shoulder, hand, UPPER_ARM, FOREARM + PALM, v.pole);
      v.limb.subVectors(elbow, shoulder).normalize();
      v.reach.subVectors(hand, elbow).normalize();
      v.wrist.copy(hand).addScaledVector(v.reach, -PALM);
      // The tee's short sleeve, then the long sleeve showing from under it.
      loop(arm.tee, 0, v.offset.copy(shoulder).addScaledVector(v.limb, -0.05), 0.098, 0.098);
      loop(arm.tee, 1, v.offset.copy(shoulder).addScaledVector(v.limb, 0.09), 0.104, 0.104);
      loop(arm.tee, 2, v.offset.copy(shoulder).addScaledVector(v.limb, 0.2)
        .addScaledVector(hangOff(v.limb, v.down), 0.012), 0.112, 0.112);
      drape(arm.tee, v.front);
      loop(arm.sleeve, 0, v.offset.copy(shoulder).addScaledVector(v.limb, 0.14), 0.08, 0.08);
      loop(arm.sleeve, 1, v.offset.copy(shoulder).addScaledVector(v.limb, 0.29), 0.078, 0.078);
      v.crease.subVectors(v.reach, v.limb);
      if (v.crease.lengthSq() > 1e-8) v.crease.normalize();
      loop(arm.sleeve, 2, v.offset.copy(elbow).addScaledVector(v.crease,
        0.11 * Math.tan(Math.acos(clamp(v.limb.dot(v.reach), -1, 1)) / 4)), 0.08, 0.08);
      loop(arm.sleeve, 3, v.offset.copy(elbow).addScaledVector(v.reach, 0.11)
        .addScaledVector(hangOff(v.reach, v.down), 0.01), 0.077, 0.077);
      loop(arm.sleeve, 4, v.offset.copy(elbow).lerp(v.wrist, 0.6)
        .addScaledVector(hangOff(v.reach, v.down), 0.014), 0.071, 0.071);
      loop(arm.sleeve, 5, v.offset.copy(v.wrist).addScaledVector(v.reach, -0.04), 0.064, 0.064);
      loop(arm.sleeve, 6, v.wrist, 0.058, 0.058);
      drape(arm.sleeve, v.front);
      const mittLength = arm.mitt.scale.y;
      aim(arm.mitt, elbow, hand, v.front);
      arm.mitt.scale.y = mittLength;
      arm.mitt.position.copy(hand);
    }

    // The seat of the pants: waistband, hips, and a low crotch hanging between the
    // thighs, so the legs never show daylight where they join the body.
    const between = (share) => v.offset.copy(joints.hips[0]).lerp(joints.knees[0], share)
      .add(v.limb.copy(joints.hips[1]).lerp(joints.knees[1], share)).multiplyScalar(0.5);
    loop(seat, 0, v.wrist.copy(body.position).addScaledVector(v.pelvisUp, 0.13), 0.14, 0.19, q.pelvis);
    loop(seat, 1, v.wrist.copy(body.position).addScaledVector(v.pelvisUp, 0.05), 0.16, 0.215, q.pelvis);
    loop(seat, 2, v.wrist.copy(body.position).addScaledVector(v.pelvisUp, -0.05)
      .addScaledVector(v.pelvisFront, -0.015), 0.18, 0.236, q.pelvis);
    loop(seat, 3, between(0.22), 0.16, 0.15);
    loop(seat, 4, between(0.36).addScaledVector(v.down, 0.03), 0.1, 0.07);
    drape(seat, v.pelvisFront);

    // The tee: one piece from a hem that hangs off the hips up to the collar. When
    // the thighs fold up under it the hem rides up instead of cutting through them.
    const tucked = clamp((v.thigh.dot(v.pelvisUp) + 0.75) / 0.6, 0, 1);
    q.middle.copy(q.pelvis).slerp(q.chest, 0.5);
    const hemAt = -0.2 + tucked * 0.12;
    const pelvisPoint = (height, forward = 0) => v.wrist.copy(body.position)
      .addScaledVector(v.pelvisUp, height).addScaledVector(v.pelvisFront, forward);
    const chestPoint = (height, forward = 0) =>
      v.wrist.set(forward, height, 0).applyQuaternion(q.chest).add(v.waist);
    loop(shirt, 0, pelvisPoint(hemAt), 0.24, 0.305, q.pelvis);
    loop(shirt, 1, pelvisPoint(0.04), 0.232, 0.296, q.pelvis);
    loop(shirt, 2, v.waist, 0.208, 0.274, q.middle);
    loop(shirt, 3, chestPoint(0.13), 0.186, 0.25, q.chest);
    loop(shirt, 4, chestPoint(0.3, 0.008), 0.19, 0.262, q.chest);
    loop(shirt, 5, chestPoint(0.455), 0.166, 0.26, q.chest);
    loop(shirt, 6, chestPoint(0.548, -0.008), 0.1, 0.168, q.chest);
    drape(shirt, v.front);
    loop(undershirt, 0, pelvisPoint(hemAt - 0.06), 0.234, 0.299, q.pelvis);
    loop(undershirt, 1, pelvisPoint(hemAt + 0.02), 0.234, 0.299, q.pelvis);
    drape(undershirt, v.front);

    if (down > 0) {
      // The rider goes over about the board, the way they were thrown, turning as
      // they go so that they land on their front or their back, and comes to rest
      // lying along the snow. Sat down, they only rock back onto their heels.
      const thrownAt = finiteOr(pose.fallHeading, heading);
      v.thrown.set(Math.sin(thrownAt), 0, -Math.cos(thrownAt));
      v.point.copy(v.front).setY(0).normalize();
      // Sitting down rocks them back over the heel edge, along the board.
      if (fallKind === "sit") v.thrown.copy(v.toe).setY(0).normalize().negate();
      const facing = fallKind === "back" ? -1 : 1;
      const turn = fallKind === "sit" ? 0 : Math.atan2(
        v.point.z * v.thrown.x * facing - v.point.x * v.thrown.z * facing,
        (v.point.x * v.thrown.x + v.point.z * v.thrown.z) * facing);
      q.spin.setFromAxisAngle(UP, turn * down);
      // How the snow falls away in the direction they went.
      const grade = -(finiteOr(groundNormal.x) * v.thrown.x +
        finiteOr(groundNormal.z, -0.35) * v.thrown.z) / normalY;
      const over = fallKind === "sit" ? 1.15 - Math.atan(grade) : Math.PI / 2 - Math.atan(grade) - 0.1;
      v.tumble.crossVectors(UP, v.thrown).normalize();
      q.fall.setFromAxisAngle(v.tumble, over * down).multiply(q.spin);
      rig.quaternion.copy(q.fall);
      rig.position.copy(board.position).applyQuaternion(q.fall).negate().add(board.position);
      // Rest on the snow: nothing under it, and once down nothing hanging over it.
      let lowest = Infinity;
      for (const pair of Object.values(joints)) {
        for (const joint of pair) {
          v.point.copy(joint).applyQuaternion(q.fall).add(rig.position);
          lowest = Math.min(lowest, v.point.y - snowAt(v.point));
        }
      }
      // The board comes over with them. It is the body that rests on the snow; a
      // tip of the board may dig into the powder, but only so far.
      for (const [x, z] of [[0.2, 0.97], [-0.2, 0.97], [0.2, -0.97], [-0.2, -0.97]]) {
        v.point.set(x, 0.07, z).applyQuaternion(board.quaternion).add(board.position)
          .applyQuaternion(q.fall).add(rig.position);
        lowest = Math.min(lowest, v.point.y - snowAt(v.point) + 0.3);
      }
      rig.position.y += Math.max(0.03 - lowest, (0.12 - lowest) * down);
    }

    shadow.position.set(0.13, groundHeight + 0.024, 0.13);
    shadow.scale.set(1 + air * 0.18, 0.48 + air * 0.08, 1);
    shadow.material.opacity = 0.22 / (1 + air * 0.9);
  };

  update();
  return Object.freeze({ board, body, grabAnchor, grabHand: arms[1].mitt, group,
    hands: Object.freeze(arms.map((arm) => arm.mitt)), head, joints, rig, shadow, update });
}
