export const CHUNK_LENGTH = 36;
export const MAX_SCENERY_TIER = 3;

const clamp = (value, minimum, maximum) =>
  Math.min(maximum, Math.max(minimum, value));

const hash = (value) => {
  let bits = value | 0;
  bits = Math.imul(bits ^ (bits >>> 16), 0x7feb352d);
  bits = Math.imul(bits ^ (bits >>> 15), 0x846ca68b);
  return (bits ^ (bits >>> 16)) >>> 0;
};

const randomAt = (seed, chunk, slot, channel) =>
  hash(seed ^ Math.imul(chunk + 1, 0x9e3779b1) ^ Math.imul(slot + 1, 0x85ebca6b) ^ channel) /
  0x1_0000_0000;

/** Smooth centerline in world space; near-camera motion cancels out in projection. */
export function courseCenterAt(distance) {
  const along = Math.max(0, Number.isFinite(distance) ? distance : 0);
  return Math.sin(along * 0.035 - 0.5) * 2.8 +
    Math.sin(along * 0.082 + 0.7) * 1.0;
}

export function courseWidthFactor(travel, ahead) {
  const distance = Math.max(0, Number.isFinite(travel) ? travel : 0);
  const z = Math.max(0, Number.isFinite(ahead) ? ahead : 0);
  return 1 + 0.07 * (
    Math.sin((distance + z) * 0.046 + 0.3) -
    Math.sin(distance * 0.046 + 0.3)
  );
}

export function courseReliefAt(distance) {
  const along = Math.max(0, Number.isFinite(distance) ? distance : 0);
  return Math.sin(along * 0.11) * 0.45 + Math.sin(along * 0.38) * 0.18;
}

/** Roadside scenery gets denser as the game loop increases speed and hazards. */
export function sceneryTier(distance) {
  const safeDistance = Math.max(0, Number.isFinite(distance) ? distance : 0);
  return Math.min(MAX_SCENERY_TIER, Math.floor(safeDistance / (CHUNK_LENGTH * 2)));
}

/** Stable world-space props for one course section. The white slope stays empty. */
export function createSlopeChunk(index, { halfWidth = 9.5, seed = 1 } = {}) {
  if (!Number.isInteger(index) || index < 0) {
    throw new RangeError("Chunk index must be a non-negative integer");
  }
  if (!Number.isFinite(halfWidth) || halfWidth <= 0) {
    throw new RangeError("Slope half-width must be positive and finite");
  }

  const tier = sceneryTier(index * CHUNK_LENGTH);
  const count = 6 + tier * 2;
  const scenery = Array.from({ length: count }, (_, slot) => {
    const side = randomAt(seed, index, slot, 4) < 0.5 ? -1 : 1;
    const section = CHUNK_LENGTH / count;
    const z = index * CHUNK_LENGTH +
      (slot + 0.3 + randomAt(seed, index, slot, 0) * 0.4) * section;
    const clearance = 2.2 + randomAt(seed, index, slot, 1) * 17;

    return Object.freeze({
      kind: randomAt(seed, index, slot, 2) < 0.2 ? "rock" : "pine",
      size: 0.7 + randomAt(seed, index, slot, 3) * 0.65,
      x: side * (halfWidth + clearance),
      z,
    });
  });

  return Object.freeze({ index, tier, scenery: Object.freeze(scenery) });
}

export function visibleSlopeChunks(distance, viewDistance, options = {}) {
  if (!Number.isFinite(viewDistance) || viewDistance < 0) {
    throw new RangeError("View distance must be non-negative and finite");
  }

  const startDistance = Math.max(0, Number.isFinite(distance) ? distance : 0);
  const first = Math.floor(startDistance / CHUNK_LENGTH);
  const last = Math.floor((startDistance + viewDistance) / CHUNK_LENGTH);

  return Array.from({ length: last - first + 1 }, (_, offset) =>
    createSlopeChunk(first + offset, options),
  );
}

export function slopeHalfAtY(canvas, y) {
  const depth = clamp((y / canvas.height - 0.22) / 0.78, 0, 1);
  return canvas.width * (0.11 + 0.31 * depth ** 1.3);
}

/** Match the near-ground piste projection to the chase camera's rider offset. */
export function courseViewAcross(canvas, riderAcross, cameraAcross, zoom = 1, halfWidth = 9.5) {
  const cameraLag = (riderAcross - cameraAcross) * 14 * clamp(zoom || 1, 0.82, 1);
  const nearHalf = Math.max(1, slopeHalfAtY(canvas, canvas.height * 0.78));
  return riderAcross - cameraLag * halfWidth / nearHalf;
}

/** Shared projection keeps scenery, hazards, and cliff edges in one perspective. */
export function projectCoursePoint(canvas, riderAcross, point, {
  halfWidth = 9.5,
  viewDistance = 44,
  travel = 0,
} = {}) {
  const z = clamp(point.z, 0, viewDistance);
  const depth = 1 - z / viewDistance;
  const eased = depth * 0.5 + depth * depth * (3 - 2 * depth) * 0.5;
  const baseY = canvas.height * (0.22 + eased * 0.56);
  const scale = 0.2 + eased * 0.8;
  const near = clamp(z / 7, 0, 1);
  const bendBlend = near * near * (3 - 2 * near);
  const pathHalf = slopeHalfAtY(canvas, baseY) *
    (1 + (courseWidthFactor(travel, z) - 1) * bendBlend);
  const centerShift = (courseCenterAt(travel + z) - courseCenterAt(travel)) * bendBlend;
  const relief = (courseReliefAt(travel + z) - courseReliefAt(travel)) * bendBlend;
  const y = baseY - relief * scale * canvas.height * 0.045;

  return Object.freeze({
    alpha: clamp(eased * 1.6 + 0.15, 0, 1),
    pathHalf,
    scale,
    x: canvas.width / 2 + ((point.x - riderAcross + centerShift) / halfWidth) * pathHalf,
    y,
  });
}
