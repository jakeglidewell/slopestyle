import assert from "node:assert/strict";
import test from "node:test";

import {
  CHUNK_LENGTH,
  courseViewAcross,
  createSlopeChunk,
  projectCoursePoint,
  sceneryTier,
  slopeHalfAtY,
  visibleSlopeChunks,
} from "../src/mountain/course.js";
import setupMountain from "../src/mountain/index.js";

test("course chunks repeat for a seed and change with a different seed", () => {
  const first = createSlopeChunk(8, { seed: 52 });
  assert.deepEqual(first, createSlopeChunk(8, { seed: 52 }));
  assert.notDeepEqual(first, createSlopeChunk(8, { seed: 53 }));
});

test("roadside props stay outside the playable slope as scenery grows denser", () => {
  const early = createSlopeChunk(0);
  const late = createSlopeChunk(20);
  assert.ok(late.scenery.length > early.scenery.length);
  assert.equal(sceneryTier(CHUNK_LENGTH * 2 - 1), 0);
  assert.equal(sceneryTier(CHUNK_LENGTH * 2), 1);
  assert.equal(sceneryTier(Number.POSITIVE_INFINITY), 0);
  assert.equal(sceneryTier(20 * CHUNK_LENGTH), 3);

  for (const chunk of [early, late]) {
    for (const prop of chunk.scenery) {
      assert.ok(Math.abs(prop.x) > 9.5);
      assert.ok(prop.z >= chunk.index * CHUNK_LENGTH);
      assert.ok(prop.z < (chunk.index + 1) * CHUNK_LENGTH);
      assert.ok(["pine", "rock"].includes(prop.kind));
    }
  }
});

test("visible chunks join across a section boundary", () => {
  assert.deepEqual(
    visibleSlopeChunks(CHUNK_LENGTH - 1, 44).map((chunk) => chunk.index),
    [0, 1, 2],
  );
  assert.deepEqual(
    visibleSlopeChunks(CHUNK_LENGTH, 44).map((chunk) => chunk.index),
    [1, 2],
  );
});

test("projection aligns hazards with the rider and shows the cliff edge", () => {
  const canvas = { width: 1200, height: 800 };
  const near = projectCoursePoint(canvas, 0, { x: 0, z: 0 });
  const edge = projectCoursePoint(canvas, 9.5, { x: 9.5, z: 0 });
  const far = projectCoursePoint(canvas, 0, { x: 0, z: 44 });

  assert.equal(near.y, canvas.height * 0.78);
  assert.equal(edge.x, canvas.width / 2);
  assert.equal(near.pathHalf, slopeHalfAtY(canvas, near.y));
  assert.ok(far.scale < near.scale);
  assert.ok(far.y < near.y);
});

test("course bends ahead while the contact point stays under the rider", () => {
  const canvas = { width: 1600, height: 900 };
  for (const travel of [0, 90, 210]) {
    const contact = projectCoursePoint(canvas, 3.5, { x: 3.5, z: 0 }, { travel });
    assert.ok(Math.abs(contact.x - canvas.width / 2) < 0.02);
  }
  const firstBend = projectCoursePoint(canvas, 0, { x: 0, z: 20 }, { travel: 0 });
  const nextBend = projectCoursePoint(canvas, 0, { x: 0, z: 20 }, { travel: 90 });
  assert.notEqual(firstBend.x, nextBend.x);
});
