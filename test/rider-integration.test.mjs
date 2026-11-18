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
});
