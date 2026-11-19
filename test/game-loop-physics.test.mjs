import assert from "node:assert/strict";
import test from "node:test";

import {
  courseSpeedForRider,
  hazardHitsRider,
  syncHazardsToRider,
} from "../src/game-loop/index.js";

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

test("an overhead or jump obstacle only hits within its visible span", () => {
  const farSideRider = { position: { across: 9 }, air: 0 };
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
