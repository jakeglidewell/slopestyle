import { baseSlopeHeightAt, sampleSnowTerrain } from "../rider/physics.js";
import { courseReliefAt } from "./course.js";

const finiteOr = (value, fallback = 0) =>
  Number.isFinite(value) ? value : fallback;
const clamp = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));
const smoothstep = (value) => {
  const t = clamp(value, 0, 1);
  return t * t * (3 - 2 * t);
};

export const SIDE_HIT_FIRST_LIP = 90;
export const SIDE_HIT_SPACING = 82;
const SIDE_HIT_APPROACH = 28;
const SIDE_HIT_RUNOUT = 30;
const SIDE_HIT_HALF_WIDTH = 3.6;
const sideHitFeatureCache = new Map();

export function sideHitFeatureAt(index) {
  const id = Math.max(0, Math.floor(finiteOr(index)));
  if (sideHitFeatureCache.has(id)) return sideHitFeatureCache.get(id);
  const lip = SIDE_HIT_FIRST_LIP + id * SIDE_HIT_SPACING;
  const side = id % 2 === 0 ? -1 : 1;
  const centerX = side * (6.9 + Math.sin(id * 1.7) * 0.25);
  const height = 1.2 + Math.sin(id * 1.7) * 0.14;
  const feature = Object.freeze({ id, lip, start: lip - SIDE_HIT_APPROACH,
    landingEnd: lip + SIDE_HIT_RUNOUT, centerX, side, height });
  sideHitFeatureCache.set(id, feature);
  if (sideHitFeatureCache.size > 32) {
    sideHitFeatureCache.delete(sideHitFeatureCache.keys().next().value);
  }
  return feature;
}

export function sideHitFeatureNear(downhill, across = 0, range = 0) {
  if (!Number.isFinite(downhill) || !Number.isFinite(across) || downhill < 0) {
    return null;
  }
  const index = Math.max(0,
    Math.round((downhill - SIDE_HIT_FIRST_LIP) / SIDE_HIT_SPACING));
  const feature = sideHitFeatureAt(index);
  return Math.abs(downhill - feature.lip) <= range &&
    Math.abs(across - feature.centerX) <= 2.4 ? feature : null;
}

export function sideHitLipDistance(across, downhill) {
  const feature = sideHitFeatureNear(downhill, across, 12);
  return feature && downhill <= feature.lip ? feature.lip - downhill : Infinity;
}

export function sideHitReliefAt(across, downhill) {
  if (!Number.isFinite(across) || !Number.isFinite(downhill)) return 0;
  const index = Math.max(0, Math.floor((downhill - SIDE_HIT_FIRST_LIP +
    SIDE_HIT_APPROACH) / SIDE_HIT_SPACING));
  const feature = sideHitFeatureAt(index);
  const local = downhill - feature.lip;
  const lateral = Math.abs(across - feature.centerX);
  if (local < -SIDE_HIT_APPROACH || local >= SIDE_HIT_RUNOUT ||
      lateral >= SIDE_HIT_HALF_WIDTH) return 0;
  const width = 1 - smoothstep((lateral - 0.9) /
    (SIDE_HIT_HALF_WIDTH - 0.9));
  let relief;
  if (local < 0) relief = feature.height *
    ((local + SIDE_HIT_APPROACH) / SIDE_HIT_APPROACH) ** 2.35;
  else if (local < 6) relief = feature.height +
    (-0.35 - feature.height) * smoothstep(local / 6);
  else if (local < 18) relief = -0.35;
  else relief = -0.35 * (1 - smoothstep((local - 18) / 12));
  return relief * width;
}

const sideHitPackedSnowWeight = (across, downhill) => {
  const index = Math.max(0, Math.floor((downhill - SIDE_HIT_FIRST_LIP +
    SIDE_HIT_APPROACH + 3) / SIDE_HIT_SPACING));
  const feature = sideHitFeatureAt(index);
  const lateral = Math.abs(across - feature.centerX);
  if (lateral >= SIDE_HIT_HALF_WIDTH) return 0;
  const local = downhill - feature.lip;
  return (1 - smoothstep((lateral - 0.9) /
    (SIDE_HIT_HALF_WIDTH - 0.9))) *
    smoothstep((local + SIDE_HIT_APPROACH + 3) / 4) *
    (1 - smoothstep((local - SIDE_HIT_RUNOUT + 5) / 8));
};

/** Local snow displacement: a packed trough with a slight displaced berm. */
export function snowRutProfile(acrossOffset, downhillOffset, halfWidth, depth) {
  const width = Math.max(0.05, finiteOr(halfWidth, 0.5));
  const amount = Math.max(0, finiteOr(depth, 0));
  const distance = Math.hypot(acrossOffset, downhillOffset * 0.55);
  const core = width * 0.85;
  const outer = width * 1.8;
  if (distance <= core) return -amount * (1 - (distance / core) ** 2);
  if (distance >= outer) return 0;
  return amount * 0.22 * Math.sin(Math.PI * (distance - core) / (outer - core));
}

/** World-space snow height without the small side hit banks. */
function baseSnowSurfaceHeight(across, downhill, surface = "powder") {
  const x = finiteOr(across);
  const d = finiteOr(downhill);
  const grade = baseSlopeHeightAt(d);
  const shoulder = Math.max(0, Math.abs(x) - 9.5);
  const bank = shoulder ** 1.8 * 0.021 +
    Math.sin(d * 0.065 + x * 0.12) * shoulder * 0.025;
  const broadRoll = Math.sin(d * 0.075 + x * 0.095) * 0.22 +
    Math.sin(d * 0.19 - x * 0.16) * 0.085;
  const localSnow = sampleSnowTerrain({ across: x, downhill: d }, surface).height;

  return grade + courseReliefAt(d) * 0.48 + bank + broadRoll + localSnow;
}

/** Side hits share the same collision and rendering surface. */
export function snowSurfaceHeight(across, downhill, surface = "powder") {
  const x = finiteOr(across);
  const d = finiteOr(downhill);
  const packed = sideHitPackedSnowWeight(x, d);
  const snowDifference = packed > 0
    ? (sampleSnowTerrain({ across: x, downhill: d }, "groomed").height -
      sampleSnowTerrain({ across: x, downhill: d }, surface).height) * packed
    : 0;
  return baseSnowSurfaceHeight(x, d, surface) + snowDifference +
    sideHitReliefAt(x, d);
}

/** Normal in the 3D scene's coordinates, where downhill is negative Z. */
export function snowSurfaceNormal(across, downhill, surface = "powder") {
  const spacing = 0.25;
  const dx = (
    snowSurfaceHeight(across + spacing, downhill, surface) -
    snowSurfaceHeight(across - spacing, downhill, surface)
  ) / (spacing * 2);
  const dz = (
    snowSurfaceHeight(across, downhill - spacing, surface) -
    snowSurfaceHeight(across, downhill + spacing, surface)
  ) / (spacing * 2);
  const length = Math.hypot(dx, 1, dz);

  return Object.freeze({ x: -dx / length, y: 1 / length, z: -dz / length });
}
