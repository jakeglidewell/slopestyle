import assert from "node:assert/strict";
import test from "node:test";

import setupRider from "../src/rider/index.js";

test("the rider loop publishes state and draws a low-poly frame", async (context) => {
  const originalWindow = globalThis.window;
  const originalRequestAnimationFrame = globalThis.requestAnimationFrame;
  const frames = [];
  let fillCount = 0;
  let update;

  globalThis.window = new EventTarget();
  globalThis.requestAnimationFrame = (callback) => {
    frames.push(callback);
    return frames.length;
  };

  context.after(() => {
    globalThis.window = originalWindow;
    globalThis.requestAnimationFrame = originalRequestAnimationFrame;
  });

  const drawingContext = {
    beginPath() {},
    clearRect() {},
    closePath() {},
    ellipse() {},
    fill() {
      fillCount += 1;
    },
    lineTo() {},
    moveTo() {},
    restore() {},
    rotate() {},
    save() {},
    scale() {},
    translate() {},
  };
  const game = {
    canvas: {
      getContext: () => drawingContext,
      height: 150,
      width: 300,
    },
    events: new EventTarget(),
  };

  game.events.addEventListener("rider:update", (event) => {
    update = event.detail;
  });

  await setupRider(game);
  game.events.dispatchEvent(new Event("ready"));
  frames.shift()(0);

  const jumpEvent = new Event("keydown", { cancelable: true });
  Object.defineProperty(jumpEvent, "code", { value: "Space" });
  globalThis.window.dispatchEvent(jumpEvent);
  frames.shift()(16);

  assert.ok(
    update.state.air > 0 &&
      update.pose.airborne > 0 &&
      update.camera &&
      fillCount >= 18,
  );

  const impact = new Event("rider:impact");
  impact.detail = { kind: "steer", x: 0 };
  game.events.dispatchEvent(impact);
  frames.shift()(32);
  assert.equal(update.state.crashed, true);
});

/** A page-less game: frames are run by hand and every published update is kept. */
const startRiderLoop = async (context) => {
  const originalWindow = globalThis.window;
  const originalRequestAnimationFrame = globalThis.requestAnimationFrame;
  const frames = [];
  const updates = [];
  globalThis.window = new EventTarget();
  globalThis.requestAnimationFrame = (callback) => frames.push(callback);
  context.after(() => {
    globalThis.window = originalWindow;
    globalThis.requestAnimationFrame = originalRequestAnimationFrame;
  });
  const game = {
    events: new EventTarget(),
    runtime: { world3d: {} },
  };
  game.events.addEventListener("rider:update", (event) => updates.push(event.detail));
  await setupRider(game);
  game.events.dispatchEvent(new Event("ready"));
  return { frame: (timestamp) => frames.shift()(timestamp), updates };
};

test("the rider loop publishes a steadied camera rig for the 3D world", async (context) => {
  const loop = await startRiderLoop(context);
  loop.frame(0);
  loop.frame(16.7);
  const { camera, state } = loop.updates.at(-1);

  assert.ok(Number.isFinite(camera.rig.position.y) && Number.isFinite(camera.rig.target.y));
  assert.ok(camera.rig.position.y > state.worldHeight + 2);
  assert.ok(camera.rig.position.z > -state.position.downhill);
});

test("every frame moves the rider by exactly that frame's duration", async (context) => {
  const loop = await startRiderLoop(context);
  // 60 Hz frames with timestamps rounded to 0.1 ms, as browsers hand them out.
  let previous;
  for (let frame = 0; frame < 240; frame += 1) {
    const timestamp = Math.round(frame * 1000 / 60 * 10) / 10;
    const before = loop.updates.at(-1)?.state.elapsed ?? 0;
    loop.frame(timestamp);
    const advanced = loop.updates.at(-1).state.elapsed - before;
    const expected = previous === undefined ? 0 : (timestamp - previous) / 1000;
    assert.ok(Math.abs(advanced - expected) < 1e-9,
      `frame ${frame} lasted ${(expected * 1000).toFixed(1)} ms, the rider moved ${(advanced * 1000).toFixed(1)} ms`);
    previous = timestamp;
  }
});
