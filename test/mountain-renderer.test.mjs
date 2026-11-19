import assert from "node:assert/strict";
import test from "node:test";

import setupMountain from "../src/mountain/index.js";

test("the mountain renders a running course with every hazard type", async () => {
  let drawings = 0;
  const rotations = [];
  const noop = () => {};
  const context = {
    arc: noop,
    beginPath: noop,
    bezierCurveTo: noop,
    closePath: noop,
    createLinearGradient: () => ({ addColorStop: noop }),
    createRadialGradient: () => ({ addColorStop: noop }),
    ellipse: noop,
    fill: () => { drawings += 1; },
    fillRect: () => { drawings += 1; },
    lineTo: noop,
    moveTo: noop,
    quadraticCurveTo: noop,
    restore: noop,
    rotate: (angle) => { rotations.push(angle); },
    save: noop,
    stroke: () => { drawings += 1; },
    strokeRect: () => { drawings += 1; },
    translate: noop,
  };
  const game = {
    canvas: { getContext: () => context, height: 800, width: 1200 },
    events: new EventTarget(),
  };
  await setupMountain(game);
  const hazards = [
    { kind: "steer", variant: "rock", x: -3, z: 8 },
    { kind: "steer", variant: "rolling-boulder", x: 1, z: 11, radius: 1.15, roll: 0.83 },
    { kind: "steer", variant: "pine", x: 4, z: 15 },
    { kind: "jump", x: 0, z: 25 },
    { kind: "duck", variant: "bird", x: 0, z: 34 },
    { kind: "duck", variant: "branch", x: 0, z: 42 },
  ];
  for (const [step, downhill] of [20, 21, 22].entries()) {
    game.events.dispatchEvent(new CustomEvent("course:update", {
      detail: { crashFx: 0.7, distance: 24 + step, hazards, phase: "running" },
    }));
    game.events.dispatchEvent(new CustomEvent("rider:update", {
      detail: {
        camera: { roll: 0.01 },
        input: { carve: 0.8 },
        state: {
          air: 0,
          landingImpact: 2,
          position: { across: 1, downhill },
          speed: 20,
          surface: "powder",
        },
      },
    }));
  }
  assert.ok(drawings > 250);
  assert.ok(rotations.includes(0.83));
});
