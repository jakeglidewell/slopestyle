import assert from "node:assert/strict";
import test from "node:test";

import { snowSurfaceHeight, snowSurfaceNormal } from "../src/mountain/terrain3d.js";
import { COURSE_HALF_WIDTH } from "../src/mountain/course.js";
import { FALLEN_TREE, ROCK_GARDEN, SNAPPED_TREE, TREE_ISLAND } from "../src/mountain/hazards.js";
import { makeCourseEdges, makeHazard, makeTerrain } from "../src/mountain/world3d.js";
import { createRiderModel } from "../src/rider/model3d.js";
import * as THREE from "../src/vendor/three/three.module.js";

test("the mountain descends continuously as the rider moves downhill", () => {
  const uphill = snowSurfaceHeight(0, 80);
  const downhill = snowSurfaceHeight(0, 120);

  assert.ok(downhill < uphill - 8);
});

test("terrain remains fixed in world space across repeated samples", () => {
  const first = snowSurfaceHeight(3.2, 117.5, "powder");
  const second = snowSurfaceHeight(3.2, 117.5, "powder");

  assert.equal(first, second);
});

test("the piste has shallow variation while the sides rise into a natural bank", () => {
  const center = snowSurfaceHeight(0, 65);
  const shoulder = snowSurfaceHeight(COURSE_HALF_WIDTH + 16.5, 65);

  assert.ok(shoulder > center + 2);
});

test("surface normals face upward and track the downhill grade", () => {
  const normal = snowSurfaceNormal(1, 100);

  assert.ok(normal.y > 0.7 && normal.z < 0);
});

test("the marked course edge hugs the snow mesh along its whole length", () => {
  const ray = new THREE.Raycaster();
  const down = new THREE.Vector3(0, -1, 0);
  const corner = new THREE.Vector3();
  let lowest = Infinity;
  let highest = -Infinity;
  let samples = 0;

  // Sections 2 and 4 each carry a side hit, where the snow bends hardest.
  for (const index of [2, 4]) {
    const { mesh } = makeTerrain(index);
    for (const ribbon of makeCourseEdges(index)) {
      const position = ribbon.geometry.getAttribute("position");
      for (let first = 0; first < position.count; first += 3) {
        const centre = new THREE.Vector3();
        for (let offset = 0; offset < 3; offset += 1) {
          centre.addScaledVector(corner.fromBufferAttribute(position, first + offset), 1 / 3);
        }
        ray.set(new THREE.Vector3(centre.x, centre.y + 40, centre.z), down);
        const [snow] = ray.intersectObject(mesh);
        assert.ok(snow, `no snow under the edge line ${-centre.z} m down the hill`);
        lowest = Math.min(lowest, centre.y - snow.point.y);
        highest = Math.max(highest, centre.y - snow.point.y);
        samples += 1;
      }
    }
  }

  assert.ok(samples > 150);
  assert.ok(lowest > -0.01,
    `the edge line dips ${(-lowest * 100).toFixed(1)} cm under the snow`);
  assert.ok(highest < 0.08,
    `the edge line floats ${(highest * 100).toFixed(1)} cm above the snow`);
});

test("the snow mesh is fine across the whole run and carries on well past its edges", () => {
  const { acrossSamples } = makeTerrain(0);
  let widestOnRun = 0;
  for (let index = 1; index < acrossSamples.length; index += 1) {
    if (Math.abs(acrossSamples[index - 1]) <= COURSE_HALF_WIDTH &&
        Math.abs(acrossSamples[index]) <= COURSE_HALF_WIDTH) {
      widestOnRun = Math.max(widestOnRun, acrossSamples[index] - acrossSamples[index - 1]);
    }
  }

  assert.ok(widestOnRun <= 0.5 + 1e-9, `a column on the run is ${widestOnRun} m wide`);
  assert.ok(acrossSamples.includes(COURSE_HALF_WIDTH) && acrossSamples.includes(-COURSE_HALF_WIDTH),
    "the edge lines do not sit on a mesh column");
  // Scenery trees stand up to 19.2 m outside the edge; they need ground under them.
  assert.ok(acrossSamples.at(-1) >= COURSE_HALF_WIDTH + 30 &&
    acrossSamples[0] <= -COURSE_HALF_WIDTH - 30);
});

/** The first thing a ray meets inside a drawn obstacle, or null. */
const probe = (mesh, from, toward) => {
  mesh.updateMatrixWorld(true);
  const [hit] = new THREE.Raycaster(new THREE.Vector3(...from),
    new THREE.Vector3(...toward).normalize()).intersectObject(mesh, true);
  return hit ? hit.point : null;
};
const DOWN = [0, -1, 0];
const UP = [0, 1, 0];

test("a fallen tree is drawn as long as it collides, low enough for half a metre of air", () => {
  for (const radius of FALLEN_TREE.halfLength) {
    for (const rootEnd of [-1, 1]) {
      const tree = makeHazard({ id: 4, kind: "jump", variant: "fallen-tree", radius, rootEnd });
      const bounds = new THREE.Box3().setFromObject(tree, true);
      const length = bounds.max.x - bounds.min.x;
      assert.ok(Math.abs(length - radius * 2) < 0.3 && bounds.max.x <= radius + 0.05 &&
        bounds.min.x >= -radius - 0.05,
      `a tree that collides ${radius * 2} m long is drawn from ${bounds.min.x.toFixed(1)} to ${bounds.max.x.toFixed(1)} m`);
      // It lies in the snow, not on it.
      assert.ok(bounds.min.y < -0.05);

      let tallest = 0;
      for (let along = -radius + 0.15; along <= radius - FALLEN_TREE.rootPlate.width; along += 0.25) {
        for (const z of [-1.2, -0.6, 0, 0.6, 1.2]) {
          // `along` runs from the crown tip toward the roots, stopping short of them.
          tallest = Math.max(tallest, probe(tree, [rootEnd * along, 5, z], DOWN)?.y ?? 0);
        }
      }
      assert.ok(tallest > 0.25 && tallest <= FALLEN_TREE.clearance + 0.12,
        `the trunk stands ${tallest.toFixed(2)} m out of the snow`);
      // The roots stand up at their own end, taller than the trunk but no taller
      // than the air that end asks for.
      const roots = probe(tree, [rootEnd * (radius - 0.2), 5, 0], DOWN)?.y ?? 0;
      assert.ok(roots > 0.75 && bounds.max.y <= FALLEN_TREE.rootPlate.clearance,
        `roots ${roots.toFixed(2)} m tall, whole tree ${bounds.max.y.toFixed(2)} m`);
    }
  }
});

/** How high the top of the rider's helmet rides over the snow in a given stance. */
const helmetTop = (pose) => {
  const rider = createRiderModel();
  rider.update({ air: 0, boardYaw: 0, heading: 0, position: { across: 0, downhill: 0 }, torsoYaw: 0 },
    pose, 0);
  rider.group.updateMatrixWorld(true);
  let top = -Infinity;
  rider.group.traverse((part) => {
    if (part.userData.part === "helmet-shell") top = new THREE.Box3().setFromObject(part).max.y;
  });
  return top;
};

test("a snapped tree hangs where a crouch clears it and standing does not", () => {
  // Held crouch against the rider's ordinary riding stance.
  const ducked = helmetTop({ crouch: 1 });
  const riding = helmetTop({ crouch: 0.37 });
  assert.ok(riding > ducked + 0.3);
  for (const radius of SNAPPED_TREE.halfLength) {
    for (const stumpEnd of [-1, 1]) {
      const tree = makeHazard({ id: 7, kind: "duck", variant: "snapped-tree", radius, stumpEnd });
      const bounds = new THREE.Box3().setFromObject(tree, true);
      assert.ok(Math.abs(bounds.max.x - bounds.min.x - radius * 2) < 0.4 &&
        bounds.max.x <= radius + 0.05 && bounds.min.x >= -radius - 0.05,
      `a tree that collides ${radius * 2} m wide is drawn from ${bounds.min.x.toFixed(1)} to ${bounds.max.x.toFixed(1)} m`);

      // Along the stretch that can be ducked there is nothing below head height...
      const from = -radius + SNAPPED_TREE.stumpWidth + 0.1;
      const to = radius - SNAPPED_TREE.restWidth - 0.1;
      for (let along = from; along <= to; along += 0.3) {
        const underside = probe(tree, [stumpEnd * -along, 0.02, 0.1], UP);
        assert.ok(underside && underside.y >= ducked + 0.15 && underside.y <= riding,
          `${along.toFixed(1)} m along, the trunk hangs ${underside?.y.toFixed(2)} m over the snow; ` +
          `a ducked helmet is at ${ducked.toFixed(2)} m, a riding one at ${riding.toFixed(2)} m`);
      }
      // ...and at each end something solid stands on the snow.
      const stump = probe(tree, [stumpEnd * (radius - SNAPPED_TREE.stumpWidth / 2), 0.6, 4], [0, 0, -1]);
      const rock = probe(tree, [-stumpEnd * (radius - SNAPPED_TREE.restWidth / 2), 0.6, 4], [0, 0, -1]);
      assert.ok(stump && rock, "an end of the snapped tree rests on nothing");
      // The stump is what is left of a tree: taller than the rider.
      assert.ok(bounds.max.y > 2.2 && bounds.max.y < 3.4);
    }
  }
});

test("tree islands and rock gardens are groups that fill the circle they collide in", () => {
  for (const [variant, spec] of [["tree-island", TREE_ISLAND], ["rock-garden", ROCK_GARDEN]]) {
    for (let id = 1; id <= 8; id += 1) {
      const radius = spec.radius[id % 2];
      const cluster = makeHazard({ id, kind: "steer", variant, radius, clearance: spec.clearance });
      const bounds = new THREE.Box3().setFromObject(cluster, true);
      assert.ok(cluster.children.length >= 3, `a ${variant} of ${cluster.children.length}`);
      assert.ok(bounds.max.x <= radius + 0.05 && bounds.min.x >= -radius - 0.05,
        `${variant} ${id} spreads from ${bounds.min.x.toFixed(2)} to ${bounds.max.x.toFixed(2)} m, collides to ${radius} m`);
      assert.ok(bounds.max.x - bounds.min.x >= radius * 1.3,
        `${variant} ${id} is only ${(bounds.max.x - bounds.min.x).toFixed(1)} m wide but collides ${radius * 2} m`);
      if (variant === "rock-garden") {
        assert.ok(bounds.max.y <= spec.clearance, `rocks ${bounds.max.y.toFixed(2)} m tall`);
      } else {
        assert.ok(bounds.max.y > 3.5, "an island with no full-grown tree");
      }
    }
  }
  const [first, second] = [3, 4].map((id) => new THREE.Box3().setFromObject(
    makeHazard({ id, kind: "steer", variant: "tree-island", radius: 2.8 }), true)
    .getSize(new THREE.Vector3()));
  assert.notDeepEqual(first, second, "every island is the same");
});

test("obstacles stand on the snow under each of their parts", () => {
  // Snow that climbs toward +x and drops away downhill of the obstacle.
  const groundAt = (x, z) => x * 0.2 + z * 0.1;
  const tree = makeHazard({ id: 2, kind: "duck", variant: "snapped-tree", radius: 4.5, stumpEnd: -1 },
    groundAt);
  const island = makeHazard({ id: 2, kind: "steer", variant: "tree-island", radius: 2.8 }, groundAt);
  const flatIsland = makeHazard({ id: 2, kind: "steer", variant: "tree-island", radius: 2.8 });

  const lowEnd = probe(tree, [-4.1, 6, 0], DOWN);
  const highEnd = probe(tree, [3.6, 6, 0], DOWN);
  assert.ok(highEnd.y - lowEnd.y > 0.4, "both ends of the snapped tree sit at one height on a side slope");
  island.children.forEach((piece, index) => {
    const expected = groundAt(piece.position.x, piece.position.z) + flatIsland.children[index].position.y;
    assert.ok(Math.abs(piece.position.y - expected) < 1e-6);
  });
});

test("a fallen tree's boughs lie along the hill, neither buried uphill nor floating downhill", () => {
  const groundAt = (x, z) => z * 0.3;
  const tree = makeHazard({ id: 4, kind: "jump", variant: "fallen-tree", radius: 5.5, rootEnd: 1 },
    groundAt);
  // Local +z runs back up the hill: probe a metre either side of the trunk, along the crown.
  for (const z of [-0.9, 0.9]) {
    const clearances = [];
    for (let x = -5.3; x <= 0; x += 0.1) {
      const hit = probe(tree, [x, 8, z], DOWN);
      if (hit) clearances.push(hit.y - groundAt(x, z));
    }
    const side = z > 0 ? "uphill" : "downhill";
    assert.ok(clearances.length >= 4, `no bough shows on the ${side} side`);
    assert.ok(Math.max(...clearances) < 0.5 && Math.min(...clearances) > -0.05,
      `${side} boughs sit ${Math.min(...clearances).toFixed(2)} to ${Math.max(...clearances).toFixed(2)} m off the snow`);
  }
});
