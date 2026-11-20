import assert from "node:assert/strict";
import test from "node:test";

import { hazardHitsRider } from "../src/game-loop/index.js";
import { landingVerdict } from "../src/rider/landing.js";

const degrees = (angle) => angle * Math.PI / 180;

test("a landing well off line is ridden out as a stumble; only a nearly sideways one goes down", () => {
  assert.equal(landingVerdict({ misalign: degrees(65), impact: 5, meter: 0 }), "sketchy");
  assert.equal(landingVerdict({ misalign: degrees(75), impact: 5, meter: 0 }), "crash");
  // Set down gently, even a sideways board only stumbles.
  assert.equal(landingVerdict({ misalign: degrees(85), impact: 3, meter: 0 }), "sketchy");
  assert.equal(landingVerdict({ misalign: degrees(85), impact: 3.6, meter: 0 }), "crash");
  // What was clean and what was a wreck before still are.
  assert.equal(landingVerdict({ misalign: degrees(10), impact: 6, meter: 0 }), "clean");
  assert.equal(landingVerdict({ misalign: 0, impact: 2, meter: 100 }), "crash");
});

test("brushing the outside of an obstacle is let off; riding into it is not", () => {
  const rider = (across, air = 0) => ({ position: { across }, air });
  const island = { kind: "steer", variant: "tree-island", x: 0, z: 0, radius: 2.8, clearance: 6 };
  const rocks = { kind: "steer", variant: "rock-garden", x: 0, z: 0, radius: 2.2, clearance: 1 };
  const boulder = { kind: "steer", variant: "rolling-boulder", x: 0, z: 0, radius: 1.15 };
  const tree = { kind: "jump", variant: "fallen-tree", x: 0, z: 0, radius: 5.5, rootEnd: 1 };

  for (const hazard of [island, rocks, boulder, tree]) {
    assert.equal(hazardHitsRider(hazard, rider(hazard.radius - 0.15)), false,
      `the last 15 cm of a ${hazard.variant} still wrecks the rider`);
    assert.equal(hazardHitsRider(hazard, rider(-(hazard.radius - 0.15))), false);
    assert.equal(hazardHitsRider(hazard, rider(hazard.radius - 0.5)), true,
      `half a metre into a ${hazard.variant} does nothing`);
    assert.equal(hazardHitsRider(hazard, rider(0)), true);
  }
});
