export const CHUNK_LENGTH = 36;
export const MAX_SCENERY_TIER = 3;
export const HORIZON_Y = 0.36;
export const RIDER_Y = 0.78;

const BIOMES = Object.freeze(["summit", "forest", "rocky", "glow"]);

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

const visibleChunkCache = new Map();

const cachedSlopeChunk = (index, options) => {
  const key = [index, options.halfWidth ?? 9.5, options.seed ?? 1].join(":");
  let chunk = visibleChunkCache.get(key);
  if (!chunk) {
    chunk = createSlopeChunk(index, options);
    visibleChunkCache.set(key, chunk);
    if (visibleChunkCache.size > 32) {
      visibleChunkCache.delete(visibleChunkCache.keys().next().value);
    }
  }
  return chunk;
};

/** Roadside scenery gets denser as the game loop increases speed and hazards. */
export function sceneryTier(distance) {
  const safeDistance = Math.max(0, Number.isFinite(distance) ? distance : 0);
  return Math.min(MAX_SCENERY_TIER, Math.floor(safeDistance / (CHUNK_LENGTH * 2)));
}

export function biomeAt(distance) {
  const chunk = Math.floor(Math.max(0, Number.isFinite(distance) ? distance : 0) / CHUNK_LENGTH);
  return BIOMES[Math.floor(chunk / 4) % BIOMES.length];
}

/** The course bends ahead of the rider; its center remains at zero at the board. */
export function courseBendAt(distance) {
  const safeDistance = Math.max(0, Number.isFinite(distance) ? distance : 0);
  return 1.8 * Math.sin(safeDistance / 55) + 0.72 * Math.sin(safeDistance / 21 + 0.55);
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
  const biome = biomeAt(index * CHUNK_LENGTH);
  const baseCount = { summit: 7, forest: 15, rocky: 10, glow: 9 }[biome];
  const count = baseCount + tier * 2;
  const scenery = Array.from({ length: count }, (_, slot) => {
    const side = slot % 2 === 0 ? -1 : 1;
    const section = CHUNK_LENGTH / count;
    const z = index * CHUNK_LENGTH +
      (slot + 0.3 + randomAt(seed, index, slot, 0) * 0.4) * section;
    const cluster = Math.floor(slot / 3);
    const clearance = 2.5 + cluster % 2 * 1.8 + randomAt(seed, index, slot, 1) * 5.2;
    const rockChance = { summit: 0.46, forest: 0.1, rocky: 0.68, glow: 0.22 }[biome];

    return Object.freeze({
      kind: randomAt(seed, index, slot, 2) < rockChance ? "rock" : "pine",
      size: 0.72 + randomAt(seed, index, slot, 3) * 0.75,
      x: side * (halfWidth + clearance),
      z,
    });
  });

  return Object.freeze({ biome, index, tier, scenery: Object.freeze(scenery) });
}

export function visibleSlopeChunks(distance, viewDistance, options = {}) {
  if (!Number.isFinite(viewDistance) || viewDistance < 0) {
    throw new RangeError("View distance must be non-negative and finite");
  }

  const startDistance = Math.max(0, Number.isFinite(distance) ? distance : 0);
  const first = Math.floor(startDistance / CHUNK_LENGTH);
  const last = Math.floor((startDistance + viewDistance) / CHUNK_LENGTH);

  return Array.from({ length: last - first + 1 }, (_, offset) =>
    cachedSlopeChunk(first + offset, options),
  );
}

export function slopeHalfAtY(canvas, y) {
  const depth = clamp((y / canvas.height - HORIZON_Y) / (1 - HORIZON_Y), 0, 1);
  return canvas.width * (0.058 + 0.285 * depth ** 1.16);
}

/** Shared projection keeps scenery, hazards, and cliff edges in one perspective. */
export function projectCoursePoint(canvas, riderAcross, point, {
  halfWidth = 9.5,
  travel = 0,
  viewDistance = 44,
} = {}) {
  const z = clamp(point.z, 0, viewDistance);
  const depth = 1 - z / viewDistance;
  const eased = depth * depth * (3 - 2 * depth);
  const y = canvas.height * (HORIZON_Y + eased * (RIDER_Y - HORIZON_Y));
  const widthChange = 1 + 0.09 * Math.sin((travel + z) / 34) * (z / viewDistance);
  const pathHalf = slopeHalfAtY(canvas, y) * widthChange;
  const bend = courseBendAt(travel + z) - courseBendAt(travel);

  return Object.freeze({
    alpha: clamp(eased * 1.6 + 0.2, 0, 1),
    pathHalf,
    scale: 0.23 + eased * 0.77,
    x: canvas.width / 2 + ((point.x - riderAcross + bend) / halfWidth) * pathHalf,
    y,
  });
}
