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

  assert.ok(update.state && update.pose && update.camera && fillCount === 9);
});
