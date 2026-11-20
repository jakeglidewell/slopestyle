import assert from "node:assert/strict";
import test from "node:test";

import {
  CHUNK_LENGTH,
  COURSE_HALF_WIDTH,
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
      assert.ok(Math.abs(prop.x) > COURSE_HALF_WIDTH);
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

test("the visible piste bends ahead while its near edge stays aligned", () => {
  const canvas = { width: 1200, height: 800 };
  const options = { halfWidth: 9.5, travel: 36 };
  const near = projectCoursePoint(canvas, 0, { x: 0, z: 0 }, options);
  const ahead = projectCoursePoint(canvas, 0, { x: 0, z: 24 }, options);
  const aheadEdge = projectCoursePoint(canvas, 0, { x: 9.5, z: 24 }, options);
  const later = projectCoursePoint(canvas, 0, { x: 0, z: 24 }, { ...options, travel: 80 });

  assert.equal(near.x, canvas.width / 2);
  assert.ok(Math.abs(ahead.x - near.x) > 5);
  assert.ok(Math.abs(ahead.x - later.x) > 5);
  assert.ok(Math.abs(aheadEdge.x - ahead.x - ahead.pathHalf) < 0.001);
});

test("rolling terrain changes the projected slope height without moving the rider contact point", () => {
  const canvas = { width: 1200, height: 800 };
  const near = projectCoursePoint(canvas, 0, { x: 0, z: 0 }, { travel: 31 });
  const firstRoll = projectCoursePoint(canvas, 0, { x: 0, z: 18 }, { travel: 0 });
  const laterRoll = projectCoursePoint(canvas, 0, { x: 0, z: 18 }, { travel: 31 });

  assert.equal(near.y, canvas.height * 0.78);
  assert.ok(Math.abs(firstRoll.y - laterRoll.y) > 2);
});

test("an obstacle at the rider's position lines up with camera lag", () => {
  const canvas = { width: 1200, height: 800 };
  const riderAcross = 4;
  const cameraAcross = 2;
  const zoom = 0.9;
  const viewAcross = courseViewAcross(canvas, riderAcross, cameraAcross, zoom,
    COURSE_HALF_WIDTH);
  const obstacle = projectCoursePoint(canvas, viewAcross, { x: riderAcross, z: 0 });
  const riderScreenX = canvas.width / 2 + (riderAcross - cameraAcross) * 14 * zoom;

  assert.ok(Math.abs(obstacle.x - riderScreenX) < 0.001);
});

test("powder spray appears on a slash, follows the rider, and stops off powder", async () => {
  let sprayMarks = 0;
  const sprayXs = [];
  const context = new Proxy({
    createLinearGradient: () => ({ addColorStop() {} }),
    createRadialGradient: () => ({ addColorStop() {} }),
    ellipse: (x) => {
      if (context.fillStyle === "rgba(255,255,255,0.96)") {
        sprayMarks += 1;
        sprayXs.push(x);
      }
    },
  }, { get(target, key) { return target[key] ?? (() => {}); } });
  const game = {
    canvas: { width: 850, height: 600, getContext: () => context },
    events: new EventTarget(),
  };
  await setupMountain(game);
  const send = (type, detail) => {
    const event = new Event(type);
    event.detail = detail;
    game.events.dispatchEvent(event);
  };
  send("course:update", { phase: "running", hazards: [] });
  const state = { position: { across: 0, downhill: 1 }, air: 0, speed: 20 };
  send("rider:update", { state: { ...state, skid: 0, slash: 0 } });
  const glidingMarks = sprayMarks;
  send("rider:update", { state: { ...state, skid: 0.7, slash: 1, slipAngle: 0.6 } });
  const powderMarks = sprayMarks;
  const originalSprayX = sprayXs[0];
  send("rider:update", { state: { ...state, surface: "ice", skid: 0.7, slash: 1 } });
  const iceMarks = sprayMarks;
  send("rider:update", {
    state: { ...state, position: { across: 4, downhill: 1 }, skid: 0.7, slash: 1, slipAngle: 0.6 },
    camera: { position: { across: 0 }, zoom: 1 },
  });

  assert.equal(glidingMarks, 0);
  assert.ok(powderMarks > glidingMarks);
  assert.equal(iceMarks, powderMarks);
  assert.ok(sprayXs[powderMarks] > originalSprayX + 30);
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

test("the marked run leaves room to carve round an obstacle and back", () => {
  // Measured: a full-lock carve at about 30 m/s takes 12 m of sideways travel to
  // bring back. From the middle that is one such carve to either side.
  const carveRoom = 12;
  assert.ok(COURSE_HALF_WIDTH >= carveRoom * 2,
    `only ${COURSE_HALF_WIDTH} m from the middle of the run to each edge line`);
});
