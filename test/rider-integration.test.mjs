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
  return { frame: (timestamp) => frames.shift()(timestamp), game, updates };
};

/** Run `seconds` of 60 Hz frames, with the course reporting `phase` after each. */
const play = (loop, seconds, phase) => {
  loop.clock ??= 0;
  for (let frame = 0; frame < Math.round(seconds * 60); frame += 1) {
    loop.frame(loop.clock);
    loop.clock += 1000 / 60;
    if (phase) {
      loop.game.events.dispatchEvent(
        new CustomEvent("course:update", { detail: { hazards: [], phase } }));
    }
  }
  return loop.updates.at(-1);
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

test("on the main menu the rider waits at the top instead of riding off down the hill", async (context) => {
  const loop = await startRiderLoop(context);
  play(loop, 0.1, "idle");
  const from = loop.updates.at(-1).state.position.downhill;
  const waiting = play(loop, 3, "idle");

  assert.ok(waiting.state.position.downhill - from < 0.05,
    `the rider rode ${(waiting.state.position.downhill - from).toFixed(1)} m while the menu was up`);
  assert.equal(waiting.state.speed, 0);
  assert.ok(!waiting.state.crashed && waiting.pose.fall === 0);
  // Still alive up there: time passes for them even though the hill does not.
  assert.ok(waiting.state.elapsed > 2.5);

  // The run starts with a reset, and then they go.
  loop.game.events.dispatchEvent(new CustomEvent("rider:reset", { detail: { speed: 16 } }));
  const riding = play(loop, 1, "running");
  assert.ok(riding.state.position.downhill > 8 && riding.state.speed > 10);
});

test("when the run ends the rider goes down and stays down instead of riding away", async (context) => {
  const loop = await startRiderLoop(context);
  play(loop, 1, "running");
  loop.game.events.dispatchEvent(new CustomEvent("rider:impact", { detail: { x: 1 } }));
  const hit = loop.updates.at(-1).state.position.downhill;
  const early = play(loop, 0.5, "crashed");
  const settled = play(loop, 2.5, "crashed");
  const later = play(loop, 4, "crashed");

  assert.ok(early.state.crashed && early.pose.fall > 0.9, "not down half a second after the hit");
  assert.ok(later.state.crashed && later.pose.fall > 0.9,
    `six seconds on the rider is ${later.state.crashed ? "down" : "up and riding"} (fall ${later.pose.fall})`);
  assert.ok(Math.abs(later.state.position.downhill - settled.state.position.downhill) < 0.05,
    `the rider kept moving ${(later.state.position.downhill - settled.state.position.downhill).toFixed(1)} m`);
  assert.ok(later.state.position.downhill - hit < 25);

  // "Ride again" resets them onto their feet.
  loop.game.events.dispatchEvent(new CustomEvent("rider:reset", { detail: { speed: 16 } }));
  const again = play(loop, 1, "running");
  assert.ok(!again.state.crashed && again.pose.fall === 0 && again.state.speed > 10);
});
