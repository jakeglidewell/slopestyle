import * as THREE from "../vendor/three/three.module.js";
import { createRiderModel } from "../rider/model3d.js";
import { createSnowTrackTrail } from "../rider/renderer.js";
import { CHUNK_LENGTH, COURSE_HALF_WIDTH, visibleSlopeChunks } from "./course.js";
import { clusterPieces, FALLEN_TREE, SNAPPED_TREE } from "./hazards.js";
import {
  SIDE_HIT_FIRST_LIP,
  SIDE_HIT_SPACING,
  sideHitFeatureAt,
  sideHitReliefAt,
  snowRutProfile,
  snowSurfaceHeight,
  snowSurfaceNormal,
} from "./terrain3d.js";

const TERRAIN_LENGTH = 36;
// Rows of snow mesh in each terrain section; anything laid on the snow follows them.
const TERRAIN_ROWS = 48;
const TERRAIN_AHEAD = 246;
const TERRAIN_BEHIND = 24;
const HALF_WIDTH = COURSE_HALF_WIDTH;
// Snow that carries on past each edge line, under the scenery trees.
const SHOULDER_WIDTH = 31;
const terrainMaterial = new THREE.MeshStandardMaterial({
  vertexColors: true,
  roughness: 0.98,
  metalness: 0,
  side: THREE.DoubleSide,
});
const barkMaterial = new THREE.MeshStandardMaterial({ color: 0x655849, roughness: 1 });
const barkLightMaterial = new THREE.MeshStandardMaterial({ color: 0x917963, roughness: 1 });
// Freshly broken wood, and the earth a fallen tree's roots tear up with them.
const splinterMaterial = new THREE.MeshStandardMaterial({ color: 0xc2a57e, roughness: 1, flatShading: true });
const earthMaterial = new THREE.MeshStandardMaterial({ color: 0x4a4037, roughness: 1, flatShading: true });
const needleMaterials = [0x1b4c42, 0x285c4e, 0x356d58].map(
  (color) => new THREE.MeshStandardMaterial({ color, roughness: 1, flatShading: true }),
);
const snowMaterial = new THREE.MeshStandardMaterial({ color: 0xeaf3f3, roughness: 0.98 });
const rockMaterial = new THREE.MeshStandardMaterial({ color: 0x697b83, roughness: 0.98, flatShading: true });
const rockShadeMaterial = new THREE.MeshStandardMaterial({ color: 0x4e626c, roughness: 1, flatShading: true });
const flagMaterial = new THREE.MeshStandardMaterial({ color: 0xd96c50, roughness: 0.83,
  side: THREE.DoubleSide, flatShading: true });
const landingFlagMaterial = new THREE.MeshStandardMaterial({ color: 0x3d8793, roughness: 0.86,
  side: THREE.DoubleSide, flatShading: true });
const edgeBaseMaterial = new THREE.MeshBasicMaterial({
  color: 0x79adb8, opacity: 0.65, transparent: true, depthWrite: false,
  side: THREE.DoubleSide,
});
const edgeWhiteMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff, opacity: 0.9, transparent: true, depthWrite: false,
  side: THREE.DoubleSide,
});

const clamp = (value, minimum, maximum) =>
  Math.min(maximum, Math.max(minimum, value));
const hash = (value) => {
  const wave = Math.sin(value * 127.1 + 31.37) * 43758.5453;
  return wave - Math.floor(wave);
};

const solid = (geometry, material, parent, x = 0, y = 0, z = 0) => {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
};

const makeSnowTexture = () => {
  const tile = document.createElement("canvas");
  tile.width = 256;
  tile.height = 256;
  const context = tile.getContext("2d");
  const pixels = context.createImageData(256, 256);
  let seed = 58291;
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) | 0;
    return (seed >>> 0) / 0x1_0000_0000;
  };
  for (let index = 0; index < pixels.data.length; index += 4) {
    const grain = Math.floor(236 + random() * 19);
    pixels.data[index] = grain;
    pixels.data[index + 1] = Math.min(255, grain + 3);
    pixels.data[index + 2] = Math.min(255, grain + 5);
    pixels.data[index + 3] = 255;
  }
  context.putImageData(pixels, 0, 0);
  for (let index = 0; index < 115; index += 1) {
    const x = random() * 256;
    const y = random() * 256;
    context.strokeStyle = `rgba(94, 139, 157, ${0.025 + random() * 0.055})`;
    context.lineWidth = 0.6 + random() * 1.3;
    context.beginPath();
    context.moveTo(x, y);
    context.quadraticCurveTo(x + 9, y - 1, x + 18 + random() * 18, y + 1);
    context.stroke();
  }
  const texture = new THREE.CanvasTexture(tile);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
};

export const makeTerrain = (index) => {
  const geometry = new THREE.BufferGeometry();
  const positions = [];
  const colors = [];
  const uvs = [];
  const indices = [];
  const acrossSamples = [];
  // Fine columns across the run, coarse ones out under the scenery.
  const fine = Math.ceil(HALF_WIDTH * 2) / 2;
  const outer = fine + SHOULDER_WIDTH;
  for (let x = fine + 2.5; x < outer; x += 2.5) acrossSamples.unshift(-x);
  acrossSamples.unshift(-outer);
  for (let x = -fine; x <= fine + 1e-8; x += 0.5) acrossSamples.push(x);
  for (let x = fine + 2.5; x < outer; x += 2.5) acrossSamples.push(x);
  acrossSamples.push(outer);
  const columns = acrossSamples.length - 1;
  const rows = TERRAIN_ROWS;
  const groomed = new THREE.Color(0xeaf1f1);
  const shoulder = new THREE.Color(0xc8dde2);
  const color = new THREE.Color();
  const jumpSnow = new THREE.Color(0xd3e9e9);
  const landingSnow = new THREE.Color(0xb7d6df);
  const baseHeights = [];

  for (let row = 0; row <= rows; row += 1) {
    const downhill = index * TERRAIN_LENGTH + row / rows * TERRAIN_LENGTH;
    for (let column = 0; column <= columns; column += 1) {
      const across = acrossSamples[column];
      const height = snowSurfaceHeight(across, downhill);
      positions.push(across, height, -downhill);
      baseHeights.push(height);
      uvs.push(across / 8, downhill / 8);
      const edge = clamp((Math.abs(across) - 7.7) / 8, 0, 1);
      const variation = (Math.sin(downhill * 0.33 + across * 0.47) +
        Math.sin(downhill * 0.12 - across * 0.81)) * 0.019;
      color.copy(groomed).lerp(shoulder, edge).offsetHSL(0, 0, variation);
      const relief = sideHitReliefAt(across, downhill);
      if (relief > 0.15) color.lerp(jumpSnow, clamp(relief / 1.1, 0, 1) * 0.3);
      if (relief < -0.1) color.lerp(landingSnow, clamp(-relief / 0.35, 0, 1) * 0.14);
      colors.push(color.r, color.g, color.b);
    }
  }
  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const a = row * (columns + 1) + column;
      const b = a + 1;
      const c = a + columns + 1;
      const d = c + 1;
      indices.push(a, b, c, b, d, c);
    }
  }
  geometry.setIndex(indices);
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geometry.computeVertexNormals();
  const mesh = new THREE.Mesh(geometry, terrainMaterial);
  mesh.receiveShadow = true;
  mesh.frustumCulled = false;
  return {
    mesh,
    acrossSamples,
    baseHeights: Float32Array.from(baseHeights),
    baseColors: Float32Array.from(colors),
    rutOffsets: new Float32Array(baseHeights.length),
    rows,
  };
};

const makeSnowGrooves = (index) => {
  const vertices = [];
  const lines = Math.floor((HALF_WIDTH - 1.1) / 0.76);
  for (let line = -lines; line <= lines; line += 1) {
    const x = line * 0.76;
    for (let step = 0; step < 12; step += 1) {
      const a = index * TERRAIN_LENGTH + step * 3;
      const b = a + 3;
      vertices.push(
        x, snowSurfaceHeight(x, a) + 0.018, -a,
        x, snowSurfaceHeight(x, b) + 0.018, -b,
      );
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  const grooves = new THREE.LineSegments(
    geometry,
    new THREE.LineBasicMaterial({ color: 0x86aeb8, transparent: true, opacity: 0.09, depthWrite: false }),
  );
  grooves.frustumCulled = false;
  return grooves;
};

const makeCourseEdgeRibbon = (index, width, lift, material) => {
  const vertices = [];
  for (const side of [-1, 1]) {
    for (let row = 0; row < TERRAIN_ROWS; row += 1) {
      const near = index * TERRAIN_LENGTH + row / TERRAIN_ROWS * TERRAIN_LENGTH;
      const far = index * TERRAIN_LENGTH + (row + 1) / TERRAIN_ROWS * TERRAIN_LENGTH;
      const left = side * HALF_WIDTH - width / 2;
      const right = side * HALF_WIDTH + width / 2;
      const a = [left, snowSurfaceHeight(left, near) + lift, -near];
      const b = [right, snowSurfaceHeight(right, near) + lift, -near];
      const c = [left, snowSurfaceHeight(left, far) + lift, -far];
      const d = [right, snowSurfaceHeight(right, far) + lift, -far];
      vertices.push(...a, ...b, ...c, ...b, ...d, ...c);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  const ribbon = new THREE.Mesh(geometry, material);
  ribbon.frustumCulled = false;
  return ribbon;
};

export const makeCourseEdges = (index) => [
  makeCourseEdgeRibbon(index, 0.34, 0.025, edgeBaseMaterial),
  makeCourseEdgeRibbon(index, 0.16, 0.03, edgeWhiteMaterial),
];

const makePine = (size = 1) => {
  const tree = new THREE.Group();
  const height = 3.9 * size;
  solid(new THREE.CylinderGeometry(0.09 * size, 0.17 * size, height * 0.38, 7),
    barkMaterial, tree, 0, height * 0.19, 0);
  for (let tier = 0; tier < 3; tier += 1) {
    const radius = (1.15 - tier * 0.22) * size;
    const coneHeight = (2.2 - tier * 0.15) * size;
    const centerY = (1.5 + tier * 0.8) * size;
    solid(new THREE.ConeGeometry(radius, coneHeight, 7), needleMaterials[tier],
      tree, 0, centerY, 0);
    const cap = solid(new THREE.ConeGeometry(radius * 0.54, coneHeight * 0.42, 7),
      snowMaterial, tree, 0, centerY + coneHeight * 0.3, 0);
    cap.castShadow = false;
  }
  return tree;
};

const makeRock = (size = 1) => {
  const rock = new THREE.Group();
  const main = solid(new THREE.DodecahedronGeometry(0.86 * size, 0), rockMaterial,
    rock, 0, 0.48 * size, 0);
  main.scale.set(1.2, 0.68, 0.92);
  main.rotation.set(0.18, 0.47, -0.11);
  const side = solid(new THREE.DodecahedronGeometry(0.47 * size, 0), rockShadeMaterial,
    rock, 0.52 * size, 0.28 * size, 0.2 * size);
  side.scale.y = 0.66;
  const snow = solid(new THREE.ConeGeometry(0.52 * size, 0.22 * size, 5),
    snowMaterial, rock, -0.1 * size, 0.96 * size, -0.1 * size);
  snow.rotation.z = -0.18;
  return rock;
};

const makeRollingBoulder = (radius) => {
  const boulder = new THREE.Group();
  solid(new THREE.DodecahedronGeometry(radius, 0), rockMaterial, boulder);
  const snow = solid(new THREE.DodecahedronGeometry(radius * 0.43, 0),
    snowMaterial, boulder, -radius * 0.13, radius * 0.74, radius * 0.12);
  snow.scale.y = 0.65;
  return boulder;
};

const UPRIGHT = new THREE.Vector3(0, 1, 0);
const FLAT_SNOW = () => 0;
const seededNoise = (seed, slot) => hash(seed * 7.13 + slot * 3.71);
const at = (x, y, z) => new THREE.Vector3(x, y, z);

/** A round timber from `from` to `to`, `startRadius` thick at one end and `endRadius` at the other. */
const beam = (parent, material, from, to, startRadius, endRadius, sides = 8) => {
  const span = new THREE.Vector3().subVectors(to, from);
  const mesh = solid(new THREE.CylinderGeometry(endRadius, startRadius, span.length(), sides),
    material, parent);
  mesh.position.copy(from).add(to).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(UPRIGHT, span.normalize());
  return mesh;
};

/** A bough pressed flat, from `base` out to `tip`, `spread` wide where it starts. */
const bough = (parent, material, base, tip, spread, thickness) => {
  const along = new THREE.Vector3().subVectors(tip, base);
  const length = along.length();
  along.normalize();
  const geometry = new THREE.ConeGeometry(spread, length, 6);
  geometry.scale(1, 1, thickness / spread);
  const mesh = solid(geometry, material, parent);
  const across = new THREE.Vector3().crossVectors(along, UPRIGHT).normalize();
  mesh.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(
    across, along, new THREE.Vector3().crossVectors(across, along)));
  mesh.position.copy(base).add(tip).multiplyScalar(0.5);
  return mesh;
};

/**
 * A windfall: a whole tree down across the fall line and settled into the snow,
 * its roots torn up at one end. `groundAt(x, z)` is the snow's height around it.
 */
const makeFallenTree = (hazard, groundAt) => {
  const tree = new THREE.Group();
  const reach = Number(hazard.radius) || 5.5;
  const roots = hazard.rootEnd === -1 ? -1 : 1;
  const seed = Number(hazard.id) || 0;
  const butt = at(roots * (reach - 0.3), 0, 0);
  const tip = at(-roots * (reach - 0.03), 0, 0);
  // Sunk in: a third of the trunk's thickness is under the snow.
  butt.y = groundAt(butt.x, 0) + 0.12;
  tip.y = groundAt(tip.x, 0) + 0.05;
  const girth = (share) => 0.36 - share * 0.23;
  const along = (share) => butt.clone().lerp(tip, share);
  beam(tree, barkMaterial, butt, tip, girth(0), girth(1), 9);

  // The root plate: a ragged disc of earth stood on edge, roots splayed from it.
  const plateX = roots * (reach - 0.15);
  const plateY = groundAt(plateX, 0) + 0.26;
  const plate = solid(new THREE.CylinderGeometry(0.8, 0.72, 0.26, 7), earthMaterial, tree,
    plateX, plateY, 0);
  plate.rotation.set(seededNoise(seed, 1) * 0.6, 0, Math.PI / 2);
  for (const [slot, angle] of [-1.9, -0.75, 0.35, 1.5].entries()) {
    const swing = angle + (seededNoise(seed, 2 + slot) - 0.5) * 0.4;
    beam(tree, barkMaterial,
      at(plateX - roots * 0.08, plateY + Math.cos(swing) * 0.4, Math.sin(swing) * 0.4),
      at(roots * (reach - 0.04), plateY + Math.cos(swing) * 0.8, Math.sin(swing) * 0.95),
      0.075, 0.02, 5);
  }
  const plateSnow = solid(new THREE.BoxGeometry(0.24, 0.07, 0.95), snowMaterial, tree,
    plateX, plateY + 0.8, 0);
  plateSnow.castShadow = false;

  // Limbs snapped off short in the fall, pale where they broke.
  const stubs = 6;
  for (let stub = 0; stub < stubs; stub += 1) {
    const share = 0.1 + (stub + seededNoise(seed, 10 + stub) * 0.6) / stubs * 0.72;
    const side = stub % 2 === 0 ? 1 : -1;
    const root = along(share).add(at(0, girth(share) * 0.45, side * girth(share) * 0.6));
    const length = 0.24 + seededNoise(seed, 20 + stub) * 0.2;
    const end = root.clone().add(at(-roots * 0.22, 0.32, side).normalize().multiplyScalar(length));
    beam(tree, barkMaterial, root, end, 0.06, 0.04, 5);
    beam(tree, splinterMaterial, end,
      end.clone().add(at(-roots * 0.22, 0.32, side).normalize().multiplyScalar(0.04)), 0.04, 0.03, 5);
  }
  // Toward the crown a few boughs still hold their needles, lying out over the
  // snow to either side and following it up and down the hill.
  for (const [slot, share] of [0.56, 0.68, 0.8, 0.9].entries()) {
    const side = slot % 2 === 0 ? 1 : -1;
    const base = along(share);
    const reachOut = 1.5 - slot * 0.12;
    const tipAt = at(base.x - roots * 0.4, 0, side * reachOut);
    base.y = groundAt(base.x, 0) + 0.22;
    tipAt.y = groundAt(tipAt.x, tipAt.z) + 0.16;
    bough(tree, needleMaterials[slot % 3], base, tipAt, 0.5, 0.16);
    // A little snow caught along its spine.
    const dusting = bough(tree, snowMaterial, base.clone().add(at(0, 0.11, 0)),
      base.clone().lerp(tipAt, 0.5).add(at(0, 0.11, 0)), 0.14, 0.07);
    dusting.castShadow = false;
  }
  // Snow has settled along the top of the trunk.
  const lie = Math.atan2(tip.y - butt.y, tip.x - butt.x);
  for (const [from, to] of [[0.06, 0.34], [0.42, 0.62], [0.7, 0.97]]) {
    const middle = along((from + to) / 2);
    const drift = solid(new THREE.BoxGeometry((to - from) * butt.distanceTo(tip), 0.05,
      girth((from + to) / 2) * 1.3), snowMaterial, tree,
    middle.x, middle.y + girth((from + to) / 2) + 0.012, 0);
    drift.rotation.z = lie;
    drift.castShadow = false;
  }
  return tree;
};

/**
 * A tree snapped off above head height: the stump still standing, the rest of
 * the tree hinged to it and come to rest across a boulder. The trunk hangs
 * clear of the snow between the two.
 */
const makeSnappedTree = (hazard, groundAt) => {
  const tree = new THREE.Group();
  const reach = Number(hazard.radius) || 4.5;
  const stumpSide = hazard.stumpEnd === 1 ? 1 : -1;
  const seed = Number(hazard.id) || 0;
  const stumpX = stumpSide * (reach - 0.42);
  const rockX = -stumpSide * (reach - 0.95);
  const stumpGround = groundAt(stumpX, 0);
  const rockGround = groundAt(rockX, 0);

  beam(tree, barkMaterial, at(stumpX, stumpGround - 0.3, 0), at(stumpX, stumpGround + 0.5, 0),
    0.4, 0.34, 9);
  // The break is above a riding helmet and the trunk hangs just under it: a held
  // crouch goes beneath with room to spare, a rider standing up does not.
  beam(tree, barkMaterial, at(stumpX, stumpGround + 0.5, 0), at(stumpX, stumpGround + 2.42, 0),
    0.34, 0.29, 9);
  // Where it broke: long splinters standing up out of the stump.
  for (let spike = 0; spike < 5; spike += 1) {
    const angle = spike * 1.26 + seededNoise(seed, spike) * 0.5;
    const rim = at(stumpX + Math.cos(angle) * 0.18, stumpGround + 2.38, Math.sin(angle) * 0.18);
    beam(tree, splinterMaterial, rim,
      rim.clone().add(at(Math.cos(angle) * 0.05, 0.3 + seededNoise(seed, 10 + spike) * 0.4,
        Math.sin(angle) * 0.05)), 0.07, 0.012, 4);
  }

  const boulder = solid(new THREE.DodecahedronGeometry(0.9, 0), rockMaterial, tree,
    rockX, rockGround + 0.98, 0.05);
  boulder.scale.set(0.98, 1.32, 1.08);
  boulder.rotation.set(0.3, seededNoise(seed, 20) * 3, 0.2);
  const chock = solid(new THREE.DodecahedronGeometry(0.42, 0), rockShadeMaterial, tree,
    rockX + stumpSide * 0.25, groundAt(rockX, 0.95) + 0.18, 0.95);
  chock.scale.y = 0.7;

  // The fallen top: hinged at the break, lying over the boulder.
  const hinge = at(stumpX - stumpSide * 0.12, stumpGround + 2.37, 0.1);
  const rest = at(rockX, rockGround + 2.16, 0.1);
  const fall = rest.clone().sub(hinge);
  const tipX = -stumpSide * (reach - 0.12);
  const tip = hinge.clone().addScaledVector(fall, (tipX - hinge.x) / fall.x);
  const girth = (share) => 0.23 - share * 0.1;
  const along = (share) => hinge.clone().lerp(tip, share);
  beam(tree, barkMaterial, hinge, tip, girth(0), girth(1), 9);
  // A strip of torn wood still joins it to the stump.
  beam(tree, splinterMaterial, at(stumpX, stumpGround + 2.3, 0.16),
    hinge.clone().add(at(-stumpSide * 0.25, 0.1, 0.06)), 0.11, 0.07, 4);
  for (let stub = 0; stub < 5; stub += 1) {
    const share = 0.16 + (stub + seededNoise(seed, 30 + stub) * 0.5) / 5 * 0.7;
    const side = stub % 2 === 0 ? 1 : -1;
    const lean = at(-stumpSide * 0.2, 0.55, side).normalize();
    const root = along(share).addScaledVector(lean, girth(share) * 0.6);
    const end = root.clone().addScaledVector(lean, 0.25 + seededNoise(seed, 40 + stub) * 0.25);
    beam(tree, barkMaterial, root, end, 0.055, 0.035, 5);
    beam(tree, splinterMaterial, end, end.clone().addScaledVector(lean, 0.04), 0.035, 0.028, 5);
  }
  // What is left of the crown droops over the far side of the boulder.
  for (const [slot, drop] of [0.55, 0.85].entries()) {
    const hang = solid(new THREE.ConeGeometry(0.34 - slot * 0.06, 0.9, 6), needleMaterials[slot + 1],
      tree, tip.x + stumpSide * (0.42 + slot * 0.3), tip.y - drop * 0.5, 0.1 + (slot ? -0.3 : 0.25));
    hang.rotation.set(slot ? -0.5 : 0.5, 0, Math.PI + stumpSide * 0.35);
  }
  const lie = Math.atan2(tip.y - hinge.y, tip.x - hinge.x);
  for (const [from, to] of [[0.08, 0.42], [0.5, 0.86]]) {
    const middle = along((from + to) / 2);
    const drift = solid(new THREE.BoxGeometry((to - from) * hinge.distanceTo(tip), 0.05,
      girth((from + to) / 2) * 1.3), snowMaterial, tree,
    middle.x, middle.y + girth((from + to) / 2) + 0.012, middle.z);
    drift.rotation.z = lie;
    drift.castShadow = false;
  }
  const cap = solid(new THREE.DodecahedronGeometry(0.4, 0), snowMaterial, tree,
    rockX - stumpSide * 0.2, rockGround + 1.42, -0.42);
  cap.scale.y = 0.4;
  cap.castShadow = false;
  return tree;
};

/** A tree island or rock garden: each tree and rock stood on its own patch of snow. */
const makeCluster = (hazard, groundAt) => {
  const cluster = new THREE.Group();
  for (const piece of clusterPieces(hazard)) {
    const model = piece.type === "rock" ? makeRock(piece.size) : makePine(piece.size);
    model.position.set(piece.x, groundAt(piece.x, piece.z), piece.z);
    model.rotation.y = piece.turn;
    cluster.add(model);
  }
  return cluster;
};

/**
 * The model for one obstacle, built around its own middle. `groundAt(x, z)` is
 * how much higher the snow is that far across and that far back up the hill.
 */
export const makeHazard = (hazard, groundAt = FLAT_SNOW) => {
  if (hazard.kind === "jump") return makeFallenTree(hazard, groundAt);
  if (hazard.kind === "duck") return makeSnappedTree(hazard, groundAt);
  if (hazard.variant === "rolling-boulder") return makeRollingBoulder(hazard.radius);
  if (hazard.variant === "tree-island" || hazard.variant === "rock-garden") {
    return makeCluster(hazard, groundAt);
  }
  return hazard.variant === "rock" ? makeRock(1.15) : makePine(1.25);
};

const makeSideHitMarkers = (feature) => {
  const markers = new THREE.Group();
  for (const [downhill, surface, height] of [
    [feature.lip - 3, flagMaterial, 1.75],
    [feature.lip + 26, landingFlagMaterial, 1.2],
  ]) {
    const x = feature.side * (HALF_WIDTH + 1.2);
    const pole = new THREE.Group();
    pole.position.set(x, snowSurfaceHeight(x, downhill), -downhill);
    solid(new THREE.CylinderGeometry(0.025, 0.035, height, 6),
      rockShadeMaterial, pole, 0, height * 0.5, 0);
    const pennant = new THREE.Shape();
    pennant.moveTo(0, 0);
    pennant.lineTo(0, 0.35);
    pennant.lineTo(-feature.side * 0.48, 0.22);
    pennant.closePath();
    solid(new THREE.ShapeGeometry(pennant), surface, pole,
      0, height - 0.38, 0);
    markers.add(pole);
  }
  return markers;
};

const makeSky = () => {
  const geometry = new THREE.SphereGeometry(900, 24, 16);
  const position = geometry.getAttribute("position");
  const colors = [];
  const horizon = new THREE.Color(0xc8dce5);
  const zenith = new THREE.Color(0x6298ba);
  const shade = new THREE.Color();
  for (let index = 0; index < position.count; index += 1) {
    const elevation = clamp((position.getY(index) / 900 + 0.08) * 1.45, 0, 1);
    shade.copy(horizon).lerp(zenith, elevation);
    colors.push(shade.r, shade.g, shade.b);
  }
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  const sky = new THREE.Mesh(geometry,
    new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false,
      depthWrite: false, toneMapped: false }));
  sky.renderOrder = -1;
  return sky;
};

const makeMountainRange = () => {
  const group = new THREE.Group();
  const materials = [
    new THREE.MeshBasicMaterial({ color: 0x839eaa, side: THREE.DoubleSide, fog: true }),
    new THREE.MeshBasicMaterial({ color: 0xa2bbc4, side: THREE.DoubleSide, fog: true }),
    new THREE.MeshBasicMaterial({ color: 0xdce9ea, side: THREE.DoubleSide, fog: true }),
  ];
  for (let layer = 0; layer < 2; layer += 1) {
    const facePositions = [];
    const snowPositions = [];
    const ridge = [];
    for (let index = 0; index <= 22; index += 1) {
      ridge.push({
        x: -480 + index * 44,
        y: 28 + hash(index * 7 + layer * 19) * 43 +
          Math.sin(index * 0.87 + layer) * 20,
      });
    }
    const z = -layer * 80;
    for (let index = 0; index < ridge.length - 1; index += 1) {
      const a = ridge[index];
      const b = ridge[index + 1];
      facePositions.push(
        a.x, -70, z, a.x, a.y, z - 8, b.x, b.y, z - 8,
        a.x, -70, z, b.x, b.y, z - 8, b.x, -70, z,
      );
      snowPositions.push(
        a.x, a.y, z - 8, b.x, b.y, z - 8,
        a.x + 7, a.y - 13, z - 5,
        b.x, b.y, z - 8, b.x - 8, b.y - 16, z - 5,
        a.x + 7, a.y - 13, z - 5,
      );
    }
    const faceGeometry = new THREE.BufferGeometry();
    faceGeometry.setAttribute("position", new THREE.Float32BufferAttribute(facePositions, 3));
    const snowGeometry = new THREE.BufferGeometry();
    snowGeometry.setAttribute("position", new THREE.Float32BufferAttribute(snowPositions, 3));
    group.add(new THREE.Mesh(faceGeometry, materials[layer]));
    group.add(new THREE.Mesh(snowGeometry, materials[2]));
  }
  return group;
};

/** Full 3D downhill scene, rendered once for each rider physics frame. */
export function createMountainWorld(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.03;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
  canvas.dataset.renderMode = "webgl";
  terrainMaterial.map = makeSnowTexture();
  terrainMaterial.needsUpdate = true;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xaacbd9);
  scene.fog = new THREE.Fog(0xb4ced9, 220, 480);
  const sky = makeSky();
  scene.add(sky);
  const mountains = makeMountainRange();
  scene.add(mountains);

  scene.add(new THREE.HemisphereLight(0xe9f7ff, 0x829cab, 1.25));
  const sun = new THREE.DirectionalLight(0xfff5e5, 2.15);
  sun.position.set(-40, 90, 35);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.left = -48;
  sun.shadow.camera.right = 48;
  sun.shadow.camera.top = 62;
  sun.shadow.camera.bottom = -30;
  sun.shadow.camera.near = 0.5;
  sun.shadow.camera.far = 185;
  sun.shadow.bias = -0.0003;
  sun.target.position.set(0, 0, -25);
  scene.add(sun, sun.target);

  const camera = new THREE.PerspectiveCamera(64, 1, 0.08, 980);
  camera.rotation.order = "YXZ";
  const rider = createRiderModel();
  scene.add(rider.group);
  const terrain = new Map();
  const scenery = new Map();
  const hazardMeshes = new Map();
  const sideHitMeshes = new Map();
  const tracks = createSnowTrackTrail(750);
  const trackMesh = new THREE.Mesh(
    new THREE.BufferGeometry(),
    new THREE.MeshBasicMaterial({ color: 0x739bab, transparent: true, opacity: 0.18,
      depthWrite: false, side: THREE.DoubleSide }),
  );
  trackMesh.renderOrder = 1;
  scene.add(trackMesh);
  const particles = [];
  const sprayGeometry = new THREE.BufferGeometry();
  const sprayPositions = new Float32Array(140 * 3);
  sprayGeometry.setAttribute("position", new THREE.BufferAttribute(sprayPositions, 3));
  sprayGeometry.setDrawRange(0, 0);
  const spray = new THREE.Points(sprayGeometry,
    new THREE.PointsMaterial({ color: 0xeaf9fb, size: 0.16, transparent: true,
      opacity: 0.8, depthWrite: false, sizeAttenuation: true }));
  scene.add(spray);

  let course = { hazards: [], phase: "idle" };
  let previousElapsed = 0;
  let lastSnowStamp = null;

  const resize = () => {
    const width = Math.max(1, canvas.clientWidth || window.innerWidth);
    const height = Math.max(1, canvas.clientHeight || window.innerHeight);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };
  window.addEventListener("resize", resize);
  resize();

  const updateTerrain = (distance) => {
    const first = Math.floor((distance - TERRAIN_BEHIND) / TERRAIN_LENGTH);
    const last = Math.ceil((distance + TERRAIN_AHEAD) / TERRAIN_LENGTH);
    for (let index = first; index <= last; index += 1) {
      if (terrain.has(index)) continue;
      const chunk = makeTerrain(index);
      const grooves = makeSnowGrooves(index);
      const edges = makeCourseEdges(index);
      scene.add(chunk.mesh, grooves, ...edges);
      terrain.set(index, { ...chunk, grooves, edges });
    }
    for (const [index, chunk] of terrain) {
      if (index >= first && index <= last) continue;
      scene.remove(chunk.mesh, chunk.grooves, ...chunk.edges);
      chunk.mesh.geometry.dispose();
      chunk.grooves.geometry.dispose();
      chunk.grooves.material.dispose();
      for (const edge of chunk.edges) edge.geometry.dispose();
      terrain.delete(index);
    }
  };

  const updateSideHitMarkers = (distance) => {
    const first = Math.max(0, Math.floor((distance - 50 - SIDE_HIT_FIRST_LIP) /
      SIDE_HIT_SPACING));
    const last = Math.max(0, Math.ceil((distance + TERRAIN_AHEAD - SIDE_HIT_FIRST_LIP) /
      SIDE_HIT_SPACING));
    for (let index = first; index <= last; index += 1) {
      if (sideHitMeshes.has(index)) continue;
      const mesh = makeSideHitMarkers(sideHitFeatureAt(index));
      scene.add(mesh);
      sideHitMeshes.set(index, mesh);
    }
    for (const [index, mesh] of sideHitMeshes) {
      if (index >= first && index <= last) continue;
      scene.remove(mesh);
      mesh.traverse((part) => part.geometry?.dispose());
      sideHitMeshes.delete(index);
    }
  };

  const readSnowRut = (across, downhill) => {
    const chunkIndex = Math.floor(downhill / TERRAIN_LENGTH);
    const chunk = terrain.get(chunkIndex);
    if (!chunk) return 0;
    const samples = chunk.acrossSamples;
    let column = 0;
    while (column < samples.length - 2 && samples[column + 1] < across) column += 1;
    const acrossMix = clamp((across - samples[column]) /
      (samples[column + 1] - samples[column]), 0, 1);
    const rowValue = clamp((downhill - chunkIndex * TERRAIN_LENGTH) /
      TERRAIN_LENGTH * chunk.rows, 0, chunk.rows);
    const row = Math.min(chunk.rows - 1, Math.floor(rowValue));
    const downhillMix = rowValue - row;
    const stride = samples.length;
    const at = (r, c) => chunk.rutOffsets[r * stride + c];
    const near = at(row, column) * (1 - acrossMix) + at(row, column + 1) * acrossMix;
    const far = at(row + 1, column) * (1 - acrossMix) +
      at(row + 1, column + 1) * acrossMix;
    return near * (1 - downhillMix) + far * downhillMix;
  };

  const resetSnowRuts = () => {
    lastSnowStamp = null;
    for (const chunk of terrain.values()) {
      const position = chunk.mesh.geometry.getAttribute("position");
      const color = chunk.mesh.geometry.getAttribute("color");
      for (let index = 0; index < chunk.baseHeights.length; index += 1) {
        if (chunk.rutOffsets[index] === 0) continue;
        position.setY(index, chunk.baseHeights[index]);
        color.setXYZ(index, chunk.baseColors[index * 3],
          chunk.baseColors[index * 3 + 1], chunk.baseColors[index * 3 + 2]);
      }
      chunk.rutOffsets.fill(0);
      position.needsUpdate = true;
      color.needsUpdate = true;
      chunk.mesh.geometry.computeVertexNormals();
    }
  };

  const stampSnow = (state) => {
    if (course.phase !== "running" || state.air > 0.08 || state.crashed) return;
    const across = state.position.across;
    const downhill = state.position.downhill;
    if (lastSnowStamp && Math.hypot(across - lastSnowStamp.across,
      downhill - lastSnowStamp.downhill) < 0.34) return;
    lastSnowStamp = { across, downhill };
    const depthBySurface = {
      powder: 0.16, chop: 0.095, slush: 0.075,
      groomed: 0.045, ice: 0.008, rail: 0,
    };
    const depth = (depthBySurface[state.surface] ?? 0.08) *
      (0.7 + clamp(state.compression || 0, 0, 1) * 0.22 +
        clamp(state.gForce || 0, 0, 1.5) * 0.12);
    const width = 0.6 + clamp(state.skid || 0, 0, 1) * 0.3;
    for (const [chunkIndex, chunk] of terrain) {
      if (downhill < chunkIndex * TERRAIN_LENGTH - 2 ||
          downhill > (chunkIndex + 1) * TERRAIN_LENGTH + 2) continue;
      const positions = chunk.mesh.geometry.getAttribute("position");
      const colors = chunk.mesh.geometry.getAttribute("color");
      const samples = chunk.acrossSamples;
      let changed = false;
      for (let row = 0; row <= chunk.rows; row += 1) {
        const sampleDownhill = chunkIndex * TERRAIN_LENGTH +
          row / chunk.rows * TERRAIN_LENGTH;
        if (Math.abs(sampleDownhill - downhill) > width * 3.4) continue;
        for (let column = 0; column < samples.length; column += 1) {
          const sampleAcross = samples[column];
          if (Math.abs(sampleAcross - across) > width * 1.8) continue;
          const offset = snowRutProfile(sampleAcross - across,
            sampleDownhill - downhill, width, depth);
          const vertex = row * samples.length + column;
          const previous = chunk.rutOffsets[vertex];
          const next = offset < 0 ? Math.min(previous, offset) :
            previous < 0 ? previous : Math.max(previous, offset);
          if (next === previous) continue;
          chunk.rutOffsets[vertex] = next;
          positions.setY(vertex, chunk.baseHeights[vertex] + next);
          const trough = clamp(-next / 0.16, 0, 1);
          const berm = clamp(next / 0.04, 0, 1);
          colors.setXYZ(vertex,
            chunk.baseColors[vertex * 3] * (1 - trough * 0.13 + berm * 0.035),
            chunk.baseColors[vertex * 3 + 1] * (1 - trough * 0.08 + berm * 0.025),
            chunk.baseColors[vertex * 3 + 2] * (1 - trough * 0.04 + berm * 0.02));
          changed = true;
        }
      }
      if (changed) {
        positions.needsUpdate = true;
        colors.needsUpdate = true;
        chunk.mesh.geometry.computeVertexNormals();
      }
    }
  };

  const updateScenery = (distance) => {
    const chunks = visibleSlopeChunks(Math.max(0, distance - 20), TERRAIN_AHEAD, {
      halfWidth: HALF_WIDTH,
    });
    const visible = new Set(chunks.map((chunk) => chunk.index));
    for (const chunk of chunks) {
      if (scenery.has(chunk.index)) continue;
      const group = new THREE.Group();
      for (const prop of chunk.scenery) {
        const model = prop.kind === "rock" ? makeRock(prop.size) : makePine(prop.size);
        model.position.set(prop.x, snowSurfaceHeight(prop.x, prop.z), -prop.z);
        model.rotation.y = hash(prop.z + prop.x) * Math.PI * 2;
        group.add(model);
      }
      scene.add(group);
      scenery.set(chunk.index, group);
    }
    for (const [index, group] of scenery) {
      if (visible.has(index)) continue;
      scene.remove(group);
      scenery.delete(index);
    }
  };

  const updateHazards = () => {
    const active = new Set(course.hazards.map((hazard) => hazard.id));
    for (const hazard of course.hazards) {
      const rolling = hazard.variant === "rolling-boulder";
      let mesh = hazardMeshes.get(hazard.id);
      const ground = snowSurfaceHeight(hazard.x, hazard.worldDownhill);
      if (!mesh) {
        // Each part stands on the snow under it; local z runs back up the hill.
        mesh = makeHazard(hazard, (x, z) =>
          snowSurfaceHeight(hazard.x + x, hazard.worldDownhill - z) - ground);
        scene.add(mesh);
        hazardMeshes.set(hazard.id, mesh);
      } else if (!rolling) {
        continue;
      }
      const lift = rolling ? hazard.radius * 0.93 : 0;
      mesh.position.set(hazard.x, ground + lift, -hazard.worldDownhill);
      if (rolling) mesh.rotation.z = -hazard.roll;
    }
    for (const [id, mesh] of hazardMeshes) {
      if (active.has(id)) continue;
      scene.remove(mesh);
      mesh.traverse((object) => object.geometry?.dispose());
      hazardMeshes.delete(id);
    }
  };

  const updateTracks = (state) => {
    tracks.update(state);
    const vertices = [];
    const now = state.position.downhill;
    const points = tracks.points();
    for (let index = 1; index < points.length; index += 1) {
      const a = points[index - 1];
      const b = points[index];
      if (now - a.downhill > 5 || b.downhill > now + 0.2 ||
          b.downhill - a.downhill > 1.8) continue;
      const width = b.kind === "carve" ? 0.035 : b.kind === "skid" ? 0.14 : 0.07;
      const leftA = a.across - width;
      const rightA = a.across + width;
      const leftB = b.across - width;
      const rightB = b.across + width;
      const ya = snowSurfaceHeight(a.across, a.downhill) +
        readSnowRut(a.across, a.downhill) + 0.022;
      const yb = snowSurfaceHeight(b.across, b.downhill) +
        readSnowRut(b.across, b.downhill) + 0.022;
      vertices.push(
        leftA, ya, -a.downhill, rightA, ya, -a.downhill, leftB, yb, -b.downhill,
        rightA, ya, -a.downhill, rightB, yb, -b.downhill, leftB, yb, -b.downhill,
      );
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    trackMesh.geometry.dispose();
    trackMesh.geometry = geometry;
  };

  const updateSpray = (state, pose, ground, delta) => {
    for (let index = particles.length - 1; index >= 0; index -= 1) {
      const particle = particles[index];
      particle.life -= delta;
      if (particle.life <= 0) {
        particles.splice(index, 1);
        continue;
      }
      particle.x += particle.vx * delta;
      particle.y += particle.vy * delta;
      particle.z += particle.vz * delta;
      particle.vy -= 5.8 * delta;
    }
    const intensity = clamp(Number(pose.spray) || 0, 0, 1);
    if (course.phase === "running" && state.air < 0.08 && intensity > 0.12) {
      const count = Math.min(10, Math.ceil(intensity * 7));
      const side = Math.sign(state.slipAngle || state.edge || 1);
      for (let index = 0; index < count && particles.length < 140; index += 1) {
        const seed = hash(state.elapsed * 113 + index * 23);
        particles.push({
          x: state.position.across + side * (0.15 + seed * 0.22),
          y: ground + 0.09,
          z: -state.position.downhill + 0.2,
          vx: side * (0.7 + seed * 2.9),
          vy: 1.2 + seed * 2.9,
          vz: 1.2 + hash(seed * 17) * 3.5,
          life: 0.3 + seed * 0.45,
        });
      }
    }
    for (let index = 0; index < particles.length; index += 1) {
      const particle = particles[index];
      sprayPositions[index * 3] = particle.x;
      sprayPositions[index * 3 + 1] = particle.y;
      sprayPositions[index * 3 + 2] = particle.z;
    }
    sprayGeometry.attributes.position.needsUpdate = true;
    sprayGeometry.setDrawRange(0, particles.length);
  };

  const render = ({ camera: follow = {}, pose = {}, state = {} } = {}) => {
    const position = state.position ?? { across: 0, downhill: 0 };
    const distance = Number.isFinite(position.downhill) ? position.downhill : 0;
    const across = Number.isFinite(position.across) ? position.across : 0;
    const elapsed = Number.isFinite(state.elapsed) ? state.elapsed : 0;
    const restarted = elapsed < previousElapsed || elapsed === 0;
    const delta = elapsed < previousElapsed ? 0 : clamp(elapsed - previousElapsed, 0, 0.05);
    previousElapsed = elapsed;
    if (restarted) {
      tracks.reset();
      particles.length = 0;
      resetSnowRuts();
    }

    updateTerrain(distance);
    updateSideHitMarkers(distance);
    updateScenery(distance);
    updateHazards();
    stampSnow(state);
    const ground = snowSurfaceHeight(across, distance, state.surface) +
      readSnowRut(across, distance);
    rider.update(state, pose, ground,
      snowSurfaceNormal(across, distance, state.surface));
    updateTracks(state);
    updateSpray(state, pose, ground, delta);

    const cameraAcross = Number.isFinite(follow.position?.across)
      ? follow.position.across : across;
    const airborne = clamp((Number(state.air) || 0) / 2, 0, 1);
    const followBehind = 6.2 + airborne * 2.3;
    const cameraGround = snowSurfaceHeight(cameraAcross - 1.3,
      distance - followBehind, state.surface);
    const riderHeight = Number.isFinite(state.worldHeight)
      ? state.worldHeight : ground + (Number(state.air) || 0);
    const heading = Number.isFinite(state.heading) ? state.heading : 0;
    const targetAcross = across + 3 + Math.sin(heading) * 5.8;
    const targetDistance = distance + 15 + airborne * 20;
    // The rider module's steadied rig when it sends one; the raw snow otherwise.
    const rig = follow.rig;
    if (rig) {
      camera.position.set(rig.position.x, rig.position.y, rig.position.z);
      camera.lookAt(rig.target.x, rig.target.y, rig.target.z);
    } else {
      camera.position.set(
        cameraAcross - 1.3,
        Math.max(cameraGround + 2.55, riderHeight + airborne * 3.8) -
          clamp(follow.dip || 0, 0, 1) * 0.25,
        -distance + followBehind,
      );
      camera.lookAt(targetAcross,
        snowSurfaceHeight(targetAcross, targetDistance, state.surface) + 3.7,
        -targetDistance);
    }
    camera.rotateZ(clamp(follow.roll || 0, -0.06, 0.06));
    const fov = 60 + (1 - clamp(follow.zoom || 1, 0.8, 1)) * 20;
    if (Math.abs(camera.fov - fov) > 0.04) {
      camera.fov = fov;
      camera.updateProjectionMatrix();
    }

    sky.position.copy(camera.position);
    mountains.position.set(across * 0.14,
      snowSurfaceHeight(0, distance + 315) + 14, -distance - 315);
    sun.position.set(across - 42, ground + 85, -distance + 38);
    sun.target.position.set(across, ground - 10, -distance - 28);
    sun.target.updateMatrixWorld();
    renderer.render(scene, camera);
  };

  return Object.freeze({
    render,
    setCourse(detail = {}) {
      course = {
        hazards: Array.isArray(detail.hazards) ? detail.hazards : [],
        phase: detail.phase ?? "idle",
      };
    },
  });
}
