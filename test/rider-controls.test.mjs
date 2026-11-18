import assert from "node:assert/strict";
import test from "node:test";

import { createKeyboardControls } from "../src/rider/controls.js";

const keyEvent = (type, code) => {
  const event = new Event(type, { cancelable: true });
  Object.defineProperty(event, "code", { value: code });
  return event;
};

test("left and right arrows produce normalized flick input", () => {
  const target = new EventTarget();
  const controls = createKeyboardControls(target);

  target.dispatchEvent(keyEvent("keydown", "ArrowRight"));
  const right = controls.read();
  target.dispatchEvent(keyEvent("keydown", "ArrowLeft"));
  const cancelled = controls.read();

  assert.deepEqual([right.steer, cancelled.steer], [1, 0]);
});

test("A and D produce carving without adding a flick", () => {
  const target = new EventTarget();
  const controls = createKeyboardControls(target);

  target.dispatchEvent(keyEvent("keydown", "KeyD"));
  const turning = controls.read();
  target.dispatchEvent(keyEvent("keyup", "KeyD"));
  const released = controls.read();

  assert.deepEqual(
    [turning.carve, turning.steer, released.carve],
    [1, 0, 0],
  );
});

test("down controls the crouch input", () => {
  const target = new EventTarget();
  const controls = createKeyboardControls(target);

  target.dispatchEvent(keyEvent("keydown", "ArrowDown"));

  assert.equal(controls.read().crouch, 1);
});

test("W and S shift pressure toward the nose and tail", () => {
  const target = new EventTarget();
  const controls = createKeyboardControls(target);

  target.dispatchEvent(keyEvent("keydown", "KeyW"));
  const nose = controls.read();
  target.dispatchEvent(keyEvent("keyup", "KeyW"));
  target.dispatchEvent(keyEvent("keydown", "KeyS"));
  const tail = controls.read();

  assert.deepEqual([nose.press, tail.press], [-1, 1]);
});

test("space and up queue a jump input once per press", () => {
  const target = new EventTarget();
  const controls = createKeyboardControls(target);

  target.dispatchEvent(keyEvent("keydown", "Space"));

  assert.equal(controls.read().jump, 1);
  assert.equal(controls.read().jump, 0);

  target.dispatchEvent(keyEvent("keyup", "Space"));
  target.dispatchEvent(keyEvent("keydown", "ArrowUp"));

  assert.equal(controls.read().jump, 1);
});

test("holding up stretches the rider after the initial jump", () => {
  const target = new EventTarget();
  const controls = createKeyboardControls(target);

  target.dispatchEvent(keyEvent("keydown", "ArrowUp"));
  const pressed = controls.read();
  const held = controls.read();

  assert.deepEqual(
    [pressed.jump, pressed.stretch, held.jump, held.stretch],
    [1, 1, 0, 1],
  );
});

test("destroy detaches keyboard listeners", () => {
  const target = new EventTarget();
  const controls = createKeyboardControls(target);
  controls.destroy();

  target.dispatchEvent(keyEvent("keydown", "ArrowRight"));

  assert.equal(controls.read().steer, 0);
});
