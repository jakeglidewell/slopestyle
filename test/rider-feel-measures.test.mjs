import assert from "node:assert/strict";
import test from "node:test";

import { createRiderState, riderSpeedRangeAt, stepRider } from "../src/rider/physics.js";
import {
  sideHitFeatureAt,
  sideHitLipDistance,
  snowSurfaceHeight,
  snowSurfaceNormal,
} from "../src/mountain/terrain3d.js";

const GRAVITY = 9.81;
const STEP = 1 / 120;

/** The environment src/rider/index.js hands the physics on the real mountain. */
const mountain = (state, surface = "powder") => ({
  lipDistance: sideHitLipDistance(state.position.across, state.position.downhill),
  surface,
  surfaceHeight: snowSurfaceHeight,
  surfaceNormal: snowSurfaceNormal,
});

/** Shake left in a 60 Hz height trace once its half-second trend is removed. */
const shakeCentimetres = (heights) => {
  const reach = 15;
  let total = 0;
  let count = 0;
  for (let index = reach; index < heights.length - reach; index += 1) {
    let mean = 0;
    for (let offset = -reach; offset <= reach; offset += 1) mean += heights[index + offset];
    mean /= reach * 2 + 1;
    total += (heights[index] - mean) ** 2;
    count += 1;
  }
  return Math.sqrt(total / count) * 100;
};

const straightRun = (seconds = 40) => {
  const steps = [];
  let state = createRiderState({ speed: 16, surface: "powder" });
  for (let index = 0; index < seconds * 120; index += 1) {
    const before = state;
    state = stepRider(state, {}, STEP, mountain(state));
    steps.push({ before, state });
  }
  return steps;
};

test("a straight powder run never pulls the body down faster than gravity", () => {
  const steps = straightRun();
  // The first step places the rider on the hill; the measure starts once it is riding.
  const pulled = steps.slice(1).filter(({ before, state }) =>
    before.grounded && state.grounded &&
    (state.worldVerticalVelocity - before.worldVerticalVelocity) / STEP < -GRAVITY - 1e-6);

  assert.equal(pulled.length, 0,
    `${(pulled.length / steps.length * 100).toFixed(1)}% of steps pulled the body down`);
  assert.ok(steps.every(({ state }) => !state.crashed), "a straight run crashed");
});

test("the body shakes at most a third as much as the old welded ride", () => {
  const steps = straightRun();
  const body = steps.filter((_step, index) => index % 2 === 0)
    .map(({ state }) => state.worldHeight);
  const shake = shakeCentimetres(body);

  // The welded rider's height shook 19 cm rms on this run.
  assert.ok(shake <= 19 / 3, `body height shakes ${shake.toFixed(1)} cm rms`);
});

test("on snow the board stays on the surface while the legs take up the bumps", () => {
  const steps = straightRun(10);
  const riding = steps.filter(({ state }) => state.grounded);
  const offsets = riding.map(({ state }) => state.legOffset);

  assert.ok(riding.length > steps.length * 0.8);
  assert.ok(riding.every(({ state }) => state.air === 0));
  assert.ok(riding.every(({ state }) => Math.abs(state.worldHeight - state.legOffset -
    snowSurfaceHeight(state.position.across, state.position.downhill, "powder")) < 1e-6));
  assert.ok(Math.max(...offsets) - Math.min(...offsets) > 0.2,
    "the legs never moved over ten seconds of powder");
});

/** One hop pressed 0.625 s after dropping in at a spot, at that spot's middle speed. */
const hopAt = (downhill, charged) => {
  const range = riderSpeedRangeAt(downhill);
  let state = createRiderState({
    position: { across: 0, downhill },
    speed: (range.min + range.max) / 2,
    surface: "powder",
  });
  let airtime = 0;
  let clearTime = 0;
  let impact = 0;
  let peak = 0;
  let pressed = false;
  for (let index = 0; index < 8 * 120; index += 1) {
    const before = state;
    state = stepRider(state, {
      crouch: charged && index < 72 ? 1 : 0,
      jump: Number(index === 75),
    }, STEP, mountain(state));
    if (index === 75) pressed = true;
    if (!pressed) continue;
    if (state.grounded) {
      if (!before.grounded) {
        impact = state.landingImpact;
        break;
      }
      continue;
    }
    airtime += STEP;
    peak = Math.max(peak, state.air);
    if (state.air >= 0.5) clearTime += STEP;
  }
  return { airtime, clearTime, downhill, impact, peak };
};
const spots = Array.from({ length: 12 }, (_spot, index) => 20 + index * 60);
const spread = (hops, key) =>
  Math.max(...hops.map((hop) => hop[key])) / Math.min(...hops.map((hop) => hop[key]));
const describeHops = (hops) => hops.map((hop) =>
  `${hop.downhill} m: ${hop.airtime.toFixed(2)} s, ${hop.peak.toFixed(2)} m`).join("; ");

test("a tap hop is the same hop down the hill and always clears a log", () => {
  const hops = spots.map((downhill) => hopAt(downhill, false));

  assert.ok(spread(hops, "airtime") <= 2, describeHops(hops));
  assert.ok(spread(hops, "peak") <= 3, describeHops(hops));
  for (const hop of hops) {
    assert.ok(hop.clearTime >= 0.22,
      `tap at ${hop.downhill} m held 0.5 m of air for ${hop.clearTime.toFixed(2)} s`);
  }
});

test("a charged ollie is even down the hill too", () => {
  const hops = spots.map((downhill) => hopAt(downhill, true));

  assert.ok(spread(hops, "airtime") <= 2, describeHops(hops));
  assert.ok(spread(hops, "peak") <= 3, describeHops(hops));
});

test("a pop leaves the snow on the step it is pressed, wherever it is pressed", () => {
  for (let downhill = 0; downhill <= 600; downhill += 7) {
    let state = createRiderState({ position: { across: 0, downhill }, speed: 24,
      surface: "powder" });
    for (let index = 0; index < 30; index += 1) {
      state = stepRider(state, {}, STEP, mountain(state));
    }
    if (!state.grounded) continue;
    state = stepRider(state, { jump: 1 }, STEP, mountain(state));
    assert.equal(state.grounded, false, `pop at ${downhill} m stayed on the snow`);
    assert.ok(state.verticalVelocity > 0,
      `pop at ${downhill} m left the body sinking at ${state.verticalVelocity.toFixed(2)} m/s`);
    let peak = state.air;
    for (let index = 0; index < 60; index += 1) {
      state = stepRider(state, {}, STEP, mountain(state));
      peak = Math.max(peak, state.air);
    }
    assert.ok(peak >= 0.5,
      `a pop at ${downhill} m only lifted the board ${peak.toFixed(2)} m in half a second`);
  }
});

test("charging a pop in a crouch keeps the board on the snow", () => {
  for (const downhill of spots) {
    const range = riderSpeedRangeAt(downhill);
    let state = createRiderState({
      position: { across: 0, downhill },
      speed: (range.min + range.max) / 2,
      surface: "powder",
    });
    let floated = 0;
    for (let index = 0; index < 72; index += 1) {
      state = stepRider(state, { crouch: 1 }, STEP, mountain(state));
      if (!state.grounded) floated += STEP;
    }
    assert.ok(floated < 0.1,
      `crouching at ${downhill} m left the snow for ${floated.toFixed(2)} s`);
  }
});

test("the camera's height and aim shake at most a third as much as they did", async () => {
  const { createCameraState, stepCamera } = await import("../src/rider/camera.js");
  const terrain = { height: (across, downhill) => snowSurfaceHeight(across, downhill, "powder") };
  let camera = createCameraState();
  let state = createRiderState({ speed: 16, surface: "powder" });
  const heights = [];
  const aims = [];
  for (let frame = 0; frame < 40 * 60; frame += 1) {
    for (let step = 0; step < 2; step += 1) state = stepRider(state, {}, STEP, mountain(state));
    camera = stepCamera(camera, state, 1 / 60, terrain);
    heights.push(camera.rig.position.y);
    aims.push(camera.rig.target.y);
  }

  // Read straight off the snow, the camera's height shook 19 cm rms on this run
  // and the point it looks at 34 cm.
  assert.ok(shakeCentimetres(heights) <= 19 / 3,
    `camera height shakes ${shakeCentimetres(heights).toFixed(1)} cm rms`);
  assert.ok(shakeCentimetres(aims) <= 34 / 3,
    `camera aim shakes ${shakeCentimetres(aims).toFixed(1)} cm rms`);
});

test("a straight run finds air off the rollers, and brief floats are not judged", () => {
  const steps = straightRun();
  const airs = [];
  let air = null;
  for (const { before, state } of steps) {
    if (before.grounded && !state.grounded) air = { time: 0, meter: before.impactMeter };
    if (air && !state.grounded) air.time += STEP;
    if (air && !before.grounded && state.grounded) {
      airs.push({ ...air, judged: state.impactMeter > before.impactMeter || state.stumble > 0 });
      air = null;
    }
  }
  const real = airs.filter((flight) => flight.time >= 0.25);
  const brief = airs.filter((flight) => flight.time < 0.15);

  assert.ok(real.length >= 3, `only ${real.length} airs of a quarter second or more`);
  assert.ok(brief.every((flight) => !flight.judged),
    "a float shorter than 0.15 s was judged as a landing");
});

test("side hits launch at the lip and land within 55 m of it from slow to fast", () => {
  for (const index of [0, 1]) {
    const feature = sideHitFeatureAt(index);
    for (const speed of [18, 26, 34]) {
      let state = createRiderState({
        position: { across: feature.centerX, downhill: feature.start - 2 },
        speed,
        surface: "powder",
      });
      let takeoff = null;
      let landing = null;
      let peak = 0;
      for (let step = 0; step < 720 && !landing; step += 1) {
        const before = state;
        state = stepRider(state, {}, STEP, mountain(state));
        if (!takeoff && before.grounded && !state.grounded &&
            Math.abs(state.position.downhill - feature.lip) < 2) takeoff = state;
        if (takeoff) peak = Math.max(peak, state.air);
        if (takeoff && !before.grounded && state.grounded) landing = state;
      }
      const label = `side hit ${index} at ${speed} m/s`;
      assert.ok(takeoff, `${label} did not launch at the lip`);
      assert.ok(peak > 0.4 && peak < 10, `${label} peaked at ${peak.toFixed(2)} m`);
      assert.ok(landing && !landing.crashed &&
        landing.position.downhill < feature.lip + 55,
      `${label} landed at ${landing?.position.downhill.toFixed(0)} m, lip at ${feature.lip} m`);
    }
  }
});

test("a side hit ridden for real still earns its trick score", async () => {
  const { createAirScoreTracker, stepAirScore } = await import("../src/game-loop/scoring.js");
  const feature = sideHitFeatureAt(0);
  let state = createRiderState({
    position: { across: feature.centerX, downhill: feature.start - 2 },
    speed: 26,
    surface: "powder",
  });
  let tracker = createAirScoreTracker();
  let award = null;
  for (let step = 0; step < 720 && !award; step += 1) {
    const before = state;
    state = stepRider(state, {}, STEP, mountain(state));
    ({ tracker, award } = stepAirScore(tracker, before, state, { grab: 0 }));
  }

  assert.ok(award, "the side hit paid nothing");
  assert.match(award.label, /SIDE HIT/);
  assert.ok(award.points >= 150);
});

test("a hop's landing reads about as hard as it always did", () => {
  // Audio, spray and the camera dip key off landingImpact; the welded rider's tap
  // hops landed around 8 on this scale.
  const impacts = spots.map((downhill) => hopAt(downhill, false).impact).sort((a, b) => a - b);
  const median = (impacts[5] + impacts[6]) / 2;

  assert.ok(impacts[0] > 3, `the softest tap landing read ${impacts[0].toFixed(1)}`);
  assert.ok(median > 5 && median < 12, `tap landings read ${median.toFixed(1)} in the middle`);
});

test("a jump pressed while the board floats over a dip still clears a log", () => {
  let state = createRiderState({ speed: 16, surface: "powder" });
  let floats = 0;
  for (let index = 0; index < 40 * 120; index += 1) {
    state = stepRider(state, {}, STEP, mountain(state));
    if (state.grounded || state.popped || state.airtime >= 0.25 || index % 3 !== 0) continue;
    floats += 1;
    let hop = stepRider(state, { jump: 1 }, STEP, mountain(state));
    assert.equal(hop.popped, true,
      `a press ${state.airtime.toFixed(2)} s into a float at ${state.position.downhill.toFixed(0)} m was dropped`);
    let peak = hop.air;
    for (let step = 0; step < 60; step += 1) {
      hop = stepRider(hop, {}, STEP, mountain(hop));
      peak = Math.max(peak, hop.air);
    }
    assert.ok(peak >= 0.5,
      `a press in a float at ${state.position.downhill.toFixed(0)} m only reached ${peak.toFixed(2)} m`);
  }
  assert.ok(floats > 10, `only ${floats} float moments were tried`);
});

test("hopping every two seconds for two minutes never overloads the legs", () => {
  let state = createRiderState({ speed: 16, surface: "powder" });
  let peakMeter = 0;
  for (let index = 0; index < 120 * 120; index += 1) {
    state = stepRider(state, { jump: Number(index % 240 === 0) }, STEP, mountain(state));
    peakMeter = Math.max(peakMeter, state.impactMeter);
    assert.equal(state.crashed, false,
      `crashed (${state.crashReason}) ${(index / 120).toFixed(1)} s in`);
  }

  assert.ok(peakMeter < 70, `the impact meter reached ${peakMeter.toFixed(0)}`);
});
