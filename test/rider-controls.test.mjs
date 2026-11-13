import assert from "node:assert/strict";
import test from "node:test";

import { createKeyboardControls } from "../src/rider/controls.js";

const keyEvent = (type, code) => {
  const event = new Event(type, { cancelable: true });
  Object.defineProperty(event, "code", { value: code });
  return event;
};

test("left and right keys produce normalized carve input", () => {
  const target = new EventTarget();
  const controls = createKeyboardControls(target);

  target.dispatchEvent(keyEvent("keydown", "ArrowRight"));
  const right = controls.read();
  target.dispatchEvent(keyEvent("keydown", "ArrowLeft"));
  const cancelled = controls.read();

  assert.deepEqual([right.carve, cancelled.carve], [1, 0]);
});

test("releasing a key releases its carve input", () => {
  const target = new EventTarget();
  const controls = createKeyboardControls(target);

  target.dispatchEvent(keyEvent("keydown", "KeyA"));
  target.dispatchEvent(keyEvent("keyup", "KeyA"));

  assert.equal(controls.read().carve, 0);
});

test("down and space control the crouch input", () => {
  const target = new EventTarget();
  const controls = createKeyboardControls(target);

  target.dispatchEvent(keyEvent("keydown", "Space"));

  assert.equal(controls.read().crouch, 1);
});

test("destroy detaches keyboard listeners", () => {
  const target = new EventTarget();
  const controls = createKeyboardControls(target);
  controls.destroy();

  target.dispatchEvent(keyEvent("keydown", "ArrowRight"));

  assert.equal(controls.read().carve, 0);
});
