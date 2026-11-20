import assert from "node:assert/strict";
import test from "node:test";

import {
  sideHitFeatureAt,
  sideHitFeatureNear,
  sideHitLipDistance,
  sideHitReliefAt,
  snowSurfaceHeight,
  snowSurfaceNormal,
  snowRutProfile,
} from "../src/mountain/terrain3d.js";
import { createAirScoreTracker, stepAirScore } from "../src/game-loop/scoring.js";
import { createRiderState, stepRider } from "../src/rider/physics.js";

test("small side hits alternate along the piste and leave the center open", () => {
  const left = sideHitFeatureAt(0);
  const right = sideHitFeatureAt(1);
  assert.ok(left.centerX < -5 && right.centerX > 5);
  assert.ok(right.lip > left.lip + 50);
  assert.ok(sideHitReliefAt(left.centerX, left.lip) > 0.8);
  assert.ok(sideHitReliefAt(left.centerX, left.lip) < 2.5);
  assert.equal(sideHitReliefAt(0, left.lip), 0);
  assert.equal(sideHitReliefAt(right.centerX, left.lip), 0);
  assert.equal(sideHitReliefAt(left.centerX, left.lip + 32), 0);
  assert.ok(sideHitLipDistance(left.centerX, left.lip - 1) <= 1.1);
  assert.equal(sideHitLipDistance(0, left.lip - 1), Infinity);
  assert.equal(sideHitFeatureNear(left.lip, 0, 2), null);
  assert.equal(sideHitFeatureNear(left.lip, left.centerX, 2).id, left.id);
  for (let index = 0; index < 12; index += 1) {
    const feature = sideHitFeatureAt(index);
    assert.ok(feature.height >= 1 && feature.height < 1.4);
    assert.equal(sideHitReliefAt(0, feature.lip), 0);
    assert.equal(Math.sign(feature.centerX), index % 2 === 0 ? -1 : 1);
  }
  assert.equal(sideHitFeatureNear(NaN, left.centerX, 2), null);
  assert.equal(sideHitReliefAt(left.centerX, NaN), 0);
});

test("side hit lips give controllable airtime and return to the slope", () => {
  for (const index of [0, 1]) {
    const feature = sideHitFeatureAt(index);
    for (const surface of ["groomed", "powder"]) {
      let current = createRiderState({
        position: { across: feature.centerX, downhill: feature.start - 2 },
        speed: 26,
        surface,
      });
      let takeoff = null;
      let landing = null;
      let peakAir = 0;
      for (let step = 0; step < 600; step += 1) {
        const previous = current;
        current = stepRider(current, {}, 1 / 120, {
          surface,
          surfaceHeight: snowSurfaceHeight,
          surfaceNormal: snowSurfaceNormal,
          lipDistance: sideHitLipDistance(current.position.across,
            current.position.downhill),
        });
        if (!takeoff && previous.grounded && !current.grounded &&
            Math.abs(current.position.downhill - feature.lip) < 2) takeoff = current;
        if (takeoff) peakAir = Math.max(peakAir, current.air);
        if (takeoff && !previous.grounded && current.grounded) {
          landing = current;
          break;
        }
      }
      assert.ok(takeoff, `${surface} side hit ${index} should launch`);
      assert.ok(peakAir > 0.4 && peakAir < 10,
        `${surface} side hit ${index} peaked at ${peakAir} m`);
      assert.ok(landing && !landing.crashed &&
        landing.position.downhill < feature.lip + 55,
      `${surface} side hit ${index} landed at ${landing?.position.downhill}`);
    }
  }
});

test("snow rut sinks under the board and pushes a small berm outward", () => {
  const center = snowRutProfile(0, 0, 0.65, 0.14);
  const shoulder = snowRutProfile(0.9, 0, 0.65, 0.14);
  const distant = snowRutProfile(3, 0, 0.65, 0.14);
  assert.ok(center < -0.12);
  assert.ok(shoulder > 0);
  assert.equal(distant, 0);
});

const rider = (grounded, downhill, across, boardRotation = 0, overrides = {}) => ({
  air: grounded ? 0 : 2,
  boardRotation,
  crashed: false,
  elapsed: downhill / 20,
  grounded,
  position: { across, downhill },
  ...overrides,
});

test("a landed side hit rewards spins and grabs", () => {
  const feature = sideHitFeatureAt(0);
  const x = feature.centerX;
  let tracker = createAirScoreTracker();
  let result = stepAirScore(tracker, rider(true, feature.lip - 1, x),
    rider(false, feature.lip, x), { grab: 0 });
  tracker = result.tracker;
  assert.equal(result.award, null);
  result = stepAirScore(tracker, rider(false, feature.lip, x),
    rider(false, feature.lip + 2, x, Math.PI + 0.02), { grab: 1 });
  tracker = result.tracker;
  result = stepAirScore(tracker, rider(false, feature.lip + 2, x, Math.PI + 0.02),
    rider(false, feature.lip + 5, x, Math.PI + 0.02), { grab: 1 });
  tracker = result.tracker;
  result = stepAirScore(tracker, rider(false, feature.lip + 5, x, Math.PI + 0.02),
    rider(true, feature.lip + 16, x, Math.PI + 0.02), { grab: 0 });
  assert.ok(result.award.points >= 300);
  assert.match(result.award.label, /SIDE HIT/);
  assert.match(result.award.label, /180/);
  assert.match(result.award.label, /GRAB/);
});

test("a centerline hop or crashed landing earns no side hit bonus", () => {
  const feature = sideHitFeatureAt(0);
  const away = stepAirScore(createAirScoreTracker(),
    rider(true, feature.lip - 1, 0), rider(false, feature.lip, 0), {});
  assert.equal(away.tracker.active, null);
  const takeoff = stepAirScore(createAirScoreTracker(),
    rider(true, feature.lip - 1, feature.centerX),
    rider(false, feature.lip, feature.centerX), {});
  const crash = stepAirScore(takeoff.tracker,
    rider(false, feature.lip + 8, feature.centerX),
    rider(true, feature.lip + 15, feature.centerX, 0, { crashed: true }), {});
  assert.equal(crash.award, null);
});
