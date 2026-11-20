import assert from "node:assert/strict";
import test from "node:test";

import {
  courseSpeedForRider,
  hazardHitsRider,
  riderOutsideCourse,
  spawnHazard,
  syncHazardsToRider,
} from "../src/game-loop/index.js";
import { COURSE } from "../src/mountain/index.js";
import { FALLEN_TREE, ROCK_GARDEN, SNAPPED_TREE, TREE_ISLAND } from "../src/mountain/hazards.js";
import { sideHitFeatureAt } from "../src/mountain/terrain3d.js";

/** A repeatable stand-in for Math.random. */
const seeded = (seed) => () => {
  seed = (seed * 1664525 + 1013904223) >>> 0;
  return seed / 4294967296;
};

/** Spawn `count` obstacles the way a run does, one after another. */
const spawnMany = (count, { riderAcross = () => 0, downhill = (index) => 400 + index * 37,
  dodged = 20, seed = 11 } = {}) => {
  const random = seeded(seed);
  const state = { dodged, lastLane: -1, nextBoulderId: 5, nextHazardId: 1 };
  const spawned = [];
  for (let index = 0; index < count; index += 1) {
    const across = riderAcross(index);
    const hazard = spawnHazard(state, downhill(index), 28, across, random);
    state.nextHazardId += 1;
    spawned.push({ ...hazard, riderAcross: across });
  }
  return spawned;
};

test("course motion keeps a minimum downhill pace during a traverse", () => {
  const traversingRider = {
    speed: 20,
    velocity: { across: 18, downhill: 5 },
  };

  assert.equal(courseSpeedForRider(traversingRider), 12);
});

test("a crashed rider can still come to a stop", () => {
  const uphillRider = {
    crashed: true,
    speed: 12,
    velocity: { across: 0, downhill: -2 },
  };

  assert.equal(courseSpeedForRider(uphillRider), 0);
});

test("crossing either marked course edge ends the run before the scenery trees", () => {
  const edge = COURSE.halfWidth;
  assert.equal(riderOutsideCourse({ position: { across: edge } }), false);
  assert.equal(riderOutsideCourse({ position: { across: edge + 0.1 } }), true);
  assert.equal(riderOutsideCourse({ position: { across: -edge - 0.1 } }), true);
});

test("hazards move with actual downhill progress, not score speed", () => {
  const fixedHazard = [{ id: 1, worldDownhill: 44, z: 44 }];
  const atFive = syncHazardsToRider(fixedHazard, 5);
  const stillAtFive = syncHazardsToRider(atFive, 5);
  const atEight = syncHazardsToRider(stillAtFive, 8);

  assert.equal(atFive[0].z, 39);
  assert.equal(stillAtFive[0].z, 39);
  assert.equal(atEight[0].z, 36);
  assert.equal(atEight[0].worldDownhill, 44);
});

test("rolling boulders spin and collide at their current position", () => {
  const boulder = {
    kind: "steer", variant: "rolling-boulder", worldDownhill: 30,
    acrossSpeed: 4, radius: 1, roll: 0, x: -2,
  };
  const rider = { position: { across: 0 }, air: 0 };
  const [approaching] = syncHazardsToRider([boulder], 28, 0.5);
  assert.equal(approaching.x, 0);
  assert.equal(approaching.roll, 2);
  assert.equal(hazardHitsRider(approaching, rider), false);

  const [crossing] = syncHazardsToRider([approaching], 30, 0.125);
  assert.equal(hazardHitsRider(crossing, rider), true);

  const [clear] = syncHazardsToRider([crossing], 30, 0.5);
  assert.equal(clear.x, 2.5);
  assert.equal(clear.z, 0);
  assert.equal(hazardHitsRider(clear, rider), false);
});

test("an overhead or jump obstacle only hits within its visible span", () => {
  const farSideRider = { position: { across: COURSE.halfWidth * 0.95 }, air: 0 };
  const centerRider = { position: { across: 0 }, air: 0 };

  for (const kind of ["jump", "duck"]) {
    const hazard = { kind, x: 0, z: 0 };
    assert.equal(hazardHitsRider(hazard, farSideRider, { crouch: 0 }), false);
    assert.equal(hazardHitsRider(hazard, centerRider, { crouch: 0 }), true);
  }
});

test("natural hazard collision spans match their rendered size", () => {
  const branch = { kind: "duck", x: 0, z: 0, radius: 3.9 };
  const log = { kind: "jump", x: 0, z: 0, radius: 7.2 };

  assert.equal(hazardHitsRider(branch, { position: { across: 4.1 }, air: 0 }), false);
  assert.equal(hazardHitsRider(branch, { position: { across: 3 }, air: 0 }, { crouch: 1 }), false);
  assert.equal(hazardHitsRider(log, { position: { across: 6.5 }, air: 0 }), true);
  assert.equal(hazardHitsRider(log, { position: { across: 7.5 }, air: 0 }), false);
});

test("every kind of obstacle turns up, each the size of the real thing", () => {
  const spawned = spawnMany(600);
  const sizes = new Map();
  for (const hazard of spawned) {
    const seen = sizes.get(hazard.variant) ?? [];
    sizes.set(hazard.variant, [...seen, hazard.radius]);
  }
  const within = (variant, [smallest, largest]) => {
    const radii = sizes.get(variant) ?? [];
    assert.ok(radii.length > 10, `only ${radii.length} ${variant} in 600 obstacles`);
    assert.ok(Math.min(...radii) >= smallest && Math.max(...radii) <= largest,
      `${variant} from ${Math.min(...radii).toFixed(1)} to ${Math.max(...radii).toFixed(1)} m`);
  };

  // A windfall is a tree's length, not a barrier from edge line to edge line.
  within("fallen-tree", [5, 6]);
  within("snapped-tree", [4, 5]);
  within("tree-island", TREE_ISLAND.radius);
  within("rock-garden", ROCK_GARDEN.radius);
  assert.ok((sizes.get("rolling-boulder") ?? []).length > 10);
  assert.deepEqual(FALLEN_TREE.halfLength, [5, 6]);
  assert.deepEqual(SNAPPED_TREE.halfLength, [4, 5]);
});

test("every obstacle sits inside the run with room to carve round it", () => {
  const spawned = spawnMany(600, { riderAcross: (index) => Math.sin(index * 1.7) * 20 });
  for (const hazard of spawned.filter((each) => each.variant !== "rolling-boulder")) {
    const farEdge = Math.abs(hazard.x) + hazard.radius;
    assert.ok(farEdge <= COURSE.halfWidth - 1,
      `${hazard.variant} at ${hazard.x.toFixed(1)} m reaches ${farEdge.toFixed(1)} m across`);
    // The wider way round always has a full carve's width of open snow.
    assert.ok(COURSE.halfWidth + Math.abs(hazard.x) - hazard.radius >= 12);
  }
});

test("fallen and snapped trees lie where they fell, not always across the middle", () => {
  const spawned = spawnMany(600, { riderAcross: (index) => Math.sin(index * 1.7) * 20 });
  for (const variant of ["fallen-tree", "snapped-tree"]) {
    const places = new Set(spawned.filter((hazard) => hazard.variant === variant)
      .map((hazard) => Math.round(hazard.x / 4)));
    assert.ok(places.size >= 4, `${variant} only ever lies in ${places.size} places`);
  }
  const ends = new Set(spawned.filter((hazard) => hazard.variant === "fallen-tree")
    .map((hazard) => hazard.rootEnd));
  assert.deepEqual([...ends].sort(), [-1, 1]);
});

test("across the wide run, obstacles still turn up on the rider's own line", () => {
  for (const line of [-17, 0, 14]) {
    const spawned = spawnMany(400, { riderAcross: () => line })
      .filter((hazard) => hazard.variant !== "rolling-boulder");
    const inTheWay = spawned.filter((hazard) =>
      Math.abs(hazard.x - line) < hazard.radius + 5).length / spawned.length;
    assert.ok(inTheWay > 0.4 && inTheWay < 0.9,
      `${(inTheWay * 100).toFixed(0)}% of obstacles within a carve of a rider at ${line} m`);
  }
});

test("a rolling boulder is timed to cross the rider's line, wherever on the run that is", () => {
  for (const line of [-15, 0, 12]) {
    const boulders = spawnMany(300, { riderAcross: () => line })
      .filter((hazard) => hazard.variant === "rolling-boulder");
    assert.ok(boulders.length > 10);
    for (const boulder of boulders) {
      const arrival = COURSE.spawnDistance / 28;
      const crossing = boulder.x + boulder.acrossSpeed * arrival;
      assert.ok(Math.abs(crossing - line) < 2,
        `a boulder crosses at ${crossing.toFixed(1)} m with the rider at ${line} m`);
    }
  }
});

test("the run-in and landing of a side hit stay clear of every obstacle", () => {
  const feature = sideHitFeatureAt(3);
  const spawned = spawnMany(400, {
    downhill: (index) => feature.start - COURSE.spawnDistance + index % 60,
    riderAcross: () => feature.centerX,
  }).filter((hazard) => hazard.variant !== "rolling-boulder");
  // The bank is 3.6 m to either side of its own line; nothing may reach it.
  for (const hazard of spawned) {
    assert.ok(Math.abs(hazard.x - feature.centerX) >= hazard.radius + 3.6,
      `${hazard.variant} ${Math.abs(hazard.x - feature.centerX).toFixed(1)} m from the side hit's line`);
  }
  // Trees still fall elsewhere on the run while a side hit goes by.
  assert.ok(spawned.some((hazard) => hazard.kind === "jump"));
  assert.ok(spawned.some((hazard) => hazard.kind === "duck"));
});

test("a tree island cannot be hopped, a rock garden only with real air", () => {
  const island = { kind: "steer", variant: "tree-island", radius: 2.8,
    clearance: TREE_ISLAND.clearance, x: 0, z: 0 };
  const rocks = { kind: "steer", variant: "rock-garden", radius: 2.2,
    clearance: ROCK_GARDEN.clearance, x: 0, z: 0 };
  const rider = (across, air = 0) => ({ position: { across }, air });

  assert.equal(hazardHitsRider(island, rider(2.5)), true);
  assert.equal(hazardHitsRider(island, rider(-2.5, 2)), true);
  assert.equal(hazardHitsRider(island, rider(3)), false);
  assert.equal(hazardHitsRider(rocks, rider(1.9, 0.6)), true);
  assert.equal(hazardHitsRider(rocks, rider(1.9, ROCK_GARDEN.clearance + 0.1)), false);
  assert.equal(hazardHitsRider(rocks, rider(2.4)), false);
});

test("a fallen tree's root plate needs more air than its trunk", () => {
  const tree = { kind: "jump", variant: "fallen-tree", radius: 5.5, rootEnd: 1, x: 2, z: 0 };
  const rider = (across, air) => ({ position: { across }, air });

  assert.equal(hazardHitsRider(tree, rider(2, 0.3)), true);
  assert.equal(hazardHitsRider(tree, rider(2, 0.6)), false);
  assert.equal(hazardHitsRider(tree, rider(-3.2, 0.6)), false);
  // The roots stand at the +x end here (its outermost quarter metre may be brushed).
  assert.equal(hazardHitsRider(tree, rider(7.1, 0.6)), true);
  assert.equal(hazardHitsRider(tree, rider(7.1, FALLEN_TREE.rootPlate.clearance + 0.1)), false);
  assert.equal(hazardHitsRider(tree, rider(7.6, 0)), false);
  assert.equal(hazardHitsRider({ ...tree, rootEnd: -1 }, rider(7.1, 0.6)), false);
});

test("a snapped tree is ducked between its stump and the rock it rests on, not through them", () => {
  const tree = { kind: "duck", variant: "snapped-tree", radius: 4.5, stumpEnd: -1, x: 0, z: 0 };
  const rider = (across) => ({ position: { across }, air: 0 });
  const low = { crouch: 1 };

  assert.equal(hazardHitsRider(tree, rider(0), { crouch: 0 }), true);
  assert.equal(hazardHitsRider(tree, rider(0), low), false);
  assert.equal(hazardHitsRider(tree, rider(-4.5 + SNAPPED_TREE.stumpWidth + 0.1), low), false);
  assert.equal(hazardHitsRider(tree, rider(-4.5 + SNAPPED_TREE.stumpWidth - 0.1), low), true);
  assert.equal(hazardHitsRider(tree, rider(4.5 - SNAPPED_TREE.restWidth + 0.1), low), true);
  assert.equal(hazardHitsRider(tree, rider(4.5 - SNAPPED_TREE.restWidth - 0.1), low), false);
  assert.equal(hazardHitsRider(tree, rider(4.7), low), false);
});
