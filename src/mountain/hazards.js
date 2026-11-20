/** What the obstacles on the run are: how big, and what each one blocks. */

// A windfall lying across the fall line, sunk a little into the snow. `clearance`
// metres of air carries the board over the trunk; the root plate standing at one
// end, `rootPlate.width` metres of the tree's length, asks for more.
export const FALLEN_TREE = Object.freeze({
  halfLength: Object.freeze([5, 6]),
  clearance: 0.5,
  rootPlate: Object.freeze({ width: 0.7, clearance: 1.15 }),
});

// A tree snapped off above head height, its top still hinged to the stump and
// come to rest on a boulder. The trunk between the two can be ducked. The stump,
// and the boulder end, cannot: those are the widths that stay solid.
export const SNAPPED_TREE = Object.freeze({
  halfLength: Object.freeze([4, 5]),
  stumpWidth: 0.8,
  restWidth: 1.9,
});

// A few pines and a rock grown together, and a patch of rocks showing through.
// `radius` is the circle each fills; `clearance` the air that carries over it.
export const TREE_ISLAND = Object.freeze({ radius: Object.freeze([2.5, 3.1]), clearance: 6 });
export const ROCK_GARDEN = Object.freeze({ radius: Object.freeze([2, 2.5]), clearance: 1 });

// How far a pine's lowest boughs and a rock's flanks reach from its own centre,
// for each unit of its size.
const PINE_REACH = 1.16;
const ROCK_REACH = 1.09;

const noise = (seed, slot) => {
  const wave = Math.sin(seed * 127.1 + slot * 311.7 + 31.37) * 43758.5453;
  return wave - Math.floor(wave);
};

/**
 * The trees and rocks that make up a tree island or rock garden, each placed so
 * that all of it stays inside the circle the obstacle collides in. The same
 * obstacle always gets the same arrangement; different ones differ.
 */
export function clusterPieces(hazard) {
  const radius = Number(hazard.radius) || 2.5;
  const seed = Number(hazard.id) || 0;
  const pieces = [];
  const place = (type, size, share, angle) => {
    const reach = (type === "pine" ? PINE_REACH : ROCK_REACH) * size;
    const distance = Math.max(0, radius - reach) * share;
    pieces.push(Object.freeze({
      type,
      size,
      turn: noise(seed, pieces.length + 20) * Math.PI * 2,
      x: Math.cos(angle) * distance,
      z: Math.sin(angle) * distance * 0.85,
    }));
  };
  // The group spreads across the run: its outer pieces sit to either side.
  const flank = (side, slot) => (side > 0 ? 0 : Math.PI) + (noise(seed, slot) - 0.5) * 1.1;
  const lean = noise(seed, 0) * Math.PI * 2;
  if (hazard.variant === "rock-garden") {
    place("rock", 0.7 + noise(seed, 1) * 0.15, 0.15, lean);
    place("rock", 0.42 + noise(seed, 2) * 0.3, 1, flank(1, 3));
    place("rock", 0.42 + noise(seed, 4) * 0.3, 1, flank(-1, 5));
    place("rock", 0.36 + noise(seed, 6) * 0.26, 0.8, Math.PI / 2 + (noise(seed, 7) - 0.5));
    if (noise(seed, 8) > 0.45) {
      place("rock", 0.34 + noise(seed, 9) * 0.22, 0.85, -Math.PI / 2 + (noise(seed, 10) - 0.5));
    }
  } else {
    place("pine", 1.1 + noise(seed, 1) * 0.22, 0.12, lean);
    place("pine", 0.58 + noise(seed, 2) * 0.3, 1, flank(1, 3));
    place("pine", 0.58 + noise(seed, 4) * 0.3, 1, flank(-1, 5));
    if (noise(seed, 6) > 0.4) {
      place("pine", 0.5 + noise(seed, 7) * 0.22, 0.9, Math.PI / 2 * (noise(seed, 8) > 0.5 ? 1 : -1));
    }
    place("rock", 0.48 + noise(seed, 9) * 0.26, 0.95,
      (noise(seed, 10) > 0.5 ? 1 : -1) * (0.9 + noise(seed, 11) * 0.5));
  }
  return Object.freeze(pieces);
}
