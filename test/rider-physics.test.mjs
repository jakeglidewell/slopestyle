import assert from "node:assert/strict";
import test from "node:test";

import {
  createRiderState,
  stepRider,
} from "../src/rider/physics.js";

test("a neutral rider accelerates downhill", () => {
  const initial = createRiderState({ speed: 8 });
  const next = stepRider(initial, {}, 0.25);

  assert.ok(next.speed > initial.speed && next.position.downhill > 0);
});

test("a carve engages progressively instead of snapping", () => {
  const initial = createRiderState();
  const next = stepRider(initial, { carve: 1 }, 1 / 60);

  assert.ok(next.edge > 0 && next.edge < 1);
});

test("left and right carves are symmetric", () => {
  const initial = createRiderState();
  let left = initial;
  let right = initial;

  for (let frame = 0; frame < 60; frame += 1) {
    left = stepRider(left, { carve: -1 }, 1 / 60);
    right = stepRider(right, { carve: 1 }, 1 / 60);
  }

  assert.ok(Math.abs(left.position.across + right.position.across) < 1e-9);
});

test("releasing a carve returns the board toward a flat edge", () => {
  let state = createRiderState();

  for (let frame = 0; frame < 30; frame += 1) {
    state = stepRider(state, { carve: 1 }, 1 / 60);
  }

  const engagedEdge = state.edge;
  state = stepRider(state, { carve: 0 }, 0.25);

  assert.ok(state.edge >= 0 && state.edge < engagedEdge);
});

test("speed remains inside its playable range", () => {
  let state = createRiderState({ speed: 1_000 });

  state = stepRider(state, { carve: 4 }, 10);

  assert.ok(state.speed >= 4 && state.speed <= 28);
});

test("a held carve cannot turn the rider back uphill", () => {
  let state = createRiderState();

  for (let frame = 0; frame < 1_200; frame += 1) {
    state = stepRider(state, { carve: 1 }, 1 / 60);
  }

  assert.ok(state.heading > 0 && state.heading < Math.PI / 2);
});
