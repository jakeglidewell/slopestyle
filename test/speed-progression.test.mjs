import assert from "node:assert/strict";
import test from "node:test";

import { courseSpeedForRider } from "../src/game-loop/index.js";
import { sideHitLipDistance, snowSurfaceHeight,
  snowSurfaceNormal } from "../src/mountain/terrain3d.js";
import { baseSlopeHeightAt, createRiderState,
  riderSpeedRangeAt, stepRider } from "../src/rider/physics.js";

test("the minimum and maximum riding speeds rise as the run continues", () => {
  assert.deepEqual(riderSpeedRangeAt(0), { min: 12, max: 34 });
  assert.deepEqual(riderSpeedRangeAt(600), { min: 17, max: 39 });
  assert.deepEqual(riderSpeedRangeAt(1200), { min: 22, max: 44 });
  assert.deepEqual(riderSpeedRangeAt(1800), { min: 22, max: 44 });
  assert.deepEqual(riderSpeedRangeAt(-100), { min: 12, max: 34 });
  assert.deepEqual(riderSpeedRangeAt(NaN), { min: 12, max: 34 });
});

test("the physical slope grade matches the increasingly steep mountain", () => {
  for (const downhill of [0, 600, 1200, 1600]) {
    const state = stepRider(createRiderState({
      position: { across: 0, downhill }, surface: "groomed",
    }), {}, 0, { surface: "groomed" });
    const visualGrade = -(baseSlopeHeightAt(downhill + 0.01) -
      baseSlopeHeightAt(downhill - 0.01)) / 0.02;
    assert.ok(Math.abs(state.slopeGrade - visualGrade) < 0.02);
  }
});

test("a late skid cannot slow the rider or the course below the rising floor", () => {
  const lowSpeed = createRiderState({
    position: { across: 0, downhill: 1200 },
    speed: 4,
    surface: "powder",
  });
  const moving = stepRider(lowSpeed, { steer: 1 }, 1 / 120, { surface: "powder" });
  assert.ok(moving.speed >= 22);
  assert.equal(courseSpeedForRider({
    position: { across: 0, downhill: 1200 },
    speed: 25,
    velocity: { across: 24, downhill: 5 },
  }), 22);
});

test("the average speed of a straight run increases later on the mountain", () => {
  let current = createRiderState({ speed: 16, surface: "powder" });
  const windows = [[], []];
  for (let frame = 0; frame < 10_000 && current.position.downhill < 1200;
    frame += 1) {
    current = stepRider(current, {}, 1 / 120, {
      surface: "powder",
      surfaceHeight: snowSurfaceHeight,
      surfaceNormal: snowSurfaceNormal,
      lipDistance: sideHitLipDistance(current.position.across,
        current.position.downhill),
    });
    if (current.position.downhill < 300) windows[0].push(current.speed);
    if (current.position.downhill >= 900 && current.position.downhill < 1200) {
      windows[1].push(current.speed);
    }
  }
  const average = (values) => values.reduce((sum, value) => sum + value, 0) /
    values.length;
  assert.ok(windows[0].length > 0 && windows[1].length > 0);
  assert.ok(average(windows[1]) >= average(windows[0]) + 5,
    `early ${average(windows[0]).toFixed(1)} m/s, late ${average(windows[1]).toFixed(1)} m/s`);
});
