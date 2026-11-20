import assert from "node:assert/strict";
import test from "node:test";

import { createRiderModel } from "../src/rider/model3d.js";
import { planeBoard } from "../src/rider/planing.js";
import { createRiderState, stepRider } from "../src/rider/physics.js";
import { snowSurfaceHeight } from "../src/mountain/terrain3d.js";

const powder = (across, downhill) => snowSurfaceHeight(across, downhill, "powder");
const rms = (values) => Math.sqrt(values.reduce((sum, value) => sum + value * value, 0) / values.length);
const steps = (values) => values.slice(1).map((value, index) => value - values[index]);

test("on powder the board planes through the chop instead of rattling over every ripple", () => {
  // Hands off down the real hill, then: what the snow does right under the board
  // against what the board itself does.
  let state = createRiderState({ speed: 26, surface: "powder" });
  const snow = { height: [], pitch: [] };
  const board = { height: [], pitch: [] };
  for (let frame = 0; frame < 360; frame += 1) {
    for (let step = 0; step < 2; step += 1) {
      state = stepRider(state, {}, 1 / 120, { surface: "powder", surfaceHeight: snowSurfaceHeight });
    }
    const { across, downhill } = state.position;
    const under = powder(across, downhill);
    snow.height.push(under);
    snow.pitch.push(Math.atan((powder(across, downhill + 0.25) - powder(across, downhill - 0.25)) / 0.5));
    const plane = planeBoard(powder, across, downhill, state.boardYaw);
    board.height.push(plane.height);
    board.pitch.push(plane.pitch);
    // In the snow, never hovering over it and never buried in it.
    assert.ok(plane.height <= under + 0.05 && plane.height >= under - 0.32,
      `the board rides ${(plane.height - under).toFixed(2)} m from the snow at ${downhill.toFixed(0)} m`);
  }
  const tipping = rms(steps(board.pitch)) / rms(steps(snow.pitch));
  const jolting = rms(steps(steps(board.height))) / rms(steps(steps(snow.height)));

  assert.ok(tipping < 0.35, `the board tips ${(tipping * 100).toFixed(0)}% as fast as the snow under it`);
  assert.ok(jolting < 0.45, `the board is jolted ${(jolting * 100).toFixed(0)}% as hard as the snow under it`);
});

test("the board still rides the big rollers of the hill", () => {
  // A long swell, far longer than a board: it goes up and over all of it.
  const swell = (across, downhill) => Math.sin(downhill / 6) * 0.4;
  const heights = [];
  for (let downhill = 0; downhill < 80; downhill += 0.5) {
    heights.push(planeBoard(swell, 0, downhill, 0).height);
  }

  assert.ok(Math.max(...heights) - Math.min(...heights) > 0.6);
});

test("a board turned across the hill lies on its grade edge to edge, not nose down", () => {
  const hill = (across, downhill) => -0.35 * downhill;
  const down = planeBoard(hill, 0, 50, 0);
  const acrossHill = planeBoard(hill, 0, 50, Math.PI / 2);

  assert.ok(Math.abs(down.pitch + Math.atan(0.35)) < 0.02 && Math.abs(down.roll) < 0.02);
  // Pointing along +across, a regular rider's toe edge is the uphill one.
  assert.ok(Math.abs(acrossHill.pitch) < 0.02, `nose tipped ${acrossHill.pitch.toFixed(2)} rad`);
  assert.ok(Math.abs(acrossHill.roll - Math.atan(0.35)) < 0.02, `rolled ${acrossHill.roll.toFixed(2)} rad`);
});

test("handed a planing line the board rides it, and the body stays on its own", () => {
  const rider = createRiderModel();
  const riding = { air: 0, boardYaw: 0, heading: 0, position: { across: 0, downhill: 0 }, torsoYaw: 0 };
  const level = { x: 0, y: 1, z: 0 };
  // (Knees bent enough that the legs have the reach to take up the difference.)
  rider.update(riding, { crouch: 0.6 }, 0, level);
  const hips = rider.body.position.y;
  rider.update(riding, { crouch: 0.6 }, 0, level, { height: -0.12, pitch: 0.2, roll: 0.1 });

  assert.ok(Math.abs(rider.board.position.y - (-0.12 + 0.035)) < 1e-6);
  assert.ok(Math.abs(rider.board.rotation.x - 0.2) < 1e-6 && Math.abs(rider.board.rotation.z - 0.1) < 1e-6);
  assert.equal(rider.body.position.y, hips);
  // In the air the board flies at the rider's height; the snow has no say.
  rider.update({ ...riding, air: 1 }, { crouch: 0.6 }, 0, level, { height: -0.12, pitch: 0.2, roll: 0.1 });
  assert.ok(Math.abs(rider.board.position.y - (1 + 0.035)) < 1e-6);
});
