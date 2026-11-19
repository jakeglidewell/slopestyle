import assert from "node:assert/strict";
import test from "node:test";

import { setRiderSpeed } from "../src/rider/index.js";
import { createRiderState } from "../src/rider/physics.js";

test("a course pace change keeps the rider's line and position", () => {
  const rider = createRiderState({
    position: { across: 2.2, downhill: 84 },
    velocity: { across: 6, downhill: 15 },
  });
  const faster = setRiderSpeed(rider, 22);

  assert.ok(Math.abs(faster.speed - 22) < 1e-9);
  assert.ok(Math.abs(faster.heading - rider.heading) < 1e-9);
  assert.deepEqual(faster.position, rider.position);
});

test("a crash cannot receive a course speed boost", () => {
  const crashed = createRiderState({ crashed: true, speed: 16 });
  assert.equal(setRiderSpeed(crashed, 24), crashed);
});
