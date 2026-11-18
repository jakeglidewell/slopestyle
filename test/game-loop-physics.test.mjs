import assert from "node:assert/strict";
import test from "node:test";

import { courseSpeedForRider } from "../src/game-loop/index.js";

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
