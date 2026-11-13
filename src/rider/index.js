import { getRiderPose } from "./animation.js";
import { createCameraState, stepCamera } from "./camera.js";
import { createKeyboardControls } from "./controls.js";
import { createRiderState, stepRider } from "./physics.js";
import { createRiderRenderer } from "./renderer.js";

const clamp = (value, minimum, maximum) =>
  Math.min(maximum, Math.max(minimum, value));

/**
 * Owner 1 entry point: controls, physics, camera, animation, crash, and respawn.
 */
export default async function setupRider(game) {
  const keyboard = createKeyboardControls(window);
  const renderer = createRiderRenderer(game.canvas);
  let camera = createCameraState();
  let externalInput = Object.freeze({ carve: 0, crouch: 0 });
  let previousTimestamp;
  let state = createRiderState();

  game.events.addEventListener("rider:input", (event) => {
    externalInput = Object.freeze({
      carve: clamp(Number(event.detail?.carve) || 0, -1, 1),
      crouch: clamp(Number(event.detail?.crouch) || 0, 0, 1),
    });
  });

  const update = (timestamp) => {
    const keyboardInput = keyboard.read();
    const input = Object.freeze({
      carve: clamp(keyboardInput.carve + externalInput.carve, -1, 1),
      crouch: Math.max(keyboardInput.crouch, externalInput.crouch),
    });
    const deltaSeconds =
      previousTimestamp === undefined ? 0 : (timestamp - previousTimestamp) / 1_000;

    previousTimestamp = timestamp;
    state = stepRider(state, input, deltaSeconds);
    camera = stepCamera(camera, state, deltaSeconds);
    const pose = getRiderPose(state, input);

    renderer.beginFrame();

    game.events.dispatchEvent(
      new CustomEvent("rider:update", {
        detail: Object.freeze({
          camera,
          input,
          pose,
          state,
        }),
      }),
    );

    renderer.draw({ camera, pose, state });

    requestAnimationFrame(update);
  };

  game.events.addEventListener(
    "ready",
    () => requestAnimationFrame(update),
    { once: true },
  );
}
