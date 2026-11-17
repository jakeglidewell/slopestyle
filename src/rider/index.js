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
  let environment = Object.freeze({ surface: "powder" });
  let stance = "regular";
  let camera = createCameraState();
  let externalInput = Object.freeze({ carve: 0, crouch: 0, steer: 0 });
  let queuedExternalJump = false;
  let previousTimestamp;
  let state = createRiderState({ surface: environment.surface });

  game.events.addEventListener("rider:input", (event) => {
    if (Number(event.detail?.jump) > 0) queuedExternalJump = true;
    externalInput = Object.freeze({
      carve: clamp(Number(event.detail?.carve) || 0, -1, 1),
      crouch: clamp(Number(event.detail?.crouch) || 0, 0, 1),
      steer: clamp(Number(event.detail?.steer) || 0, -1, 1),
    });
  });

  game.events.addEventListener("rider:surface", (event) => {
    environment = Object.freeze({
      slopeGrade: Number.isFinite(event.detail?.slopeGrade)
        ? event.detail.slopeGrade
        : undefined,
      surface: event.detail?.surface ?? environment.surface,
    });
  });

  game.events.addEventListener("rider:stance", (event) => {
    stance = event.detail?.stance === "goofy" ? "goofy" : "regular";
    state = createRiderState({ ...state, stance });
  });

  game.events.addEventListener("rider:reset", (event) => {
    camera = createCameraState();
    previousTimestamp = undefined;
    queuedExternalJump = false;
    state = createRiderState({
      speed: Number(event.detail?.speed) || 16,
      stance,
      surface: environment.surface,
    });
  });

  const update = (timestamp) => {
    const keyboardInput = keyboard.read();
    const input = Object.freeze({
      carve: clamp(keyboardInput.carve + externalInput.carve, -1, 1),
      crouch: Math.max(keyboardInput.crouch, externalInput.crouch),
      jump: Math.max(keyboardInput.jump, Number(queuedExternalJump)),
      steer: clamp(keyboardInput.steer + externalInput.steer, -1, 1),
    });
    queuedExternalJump = false;
    const deltaSeconds =
      previousTimestamp === undefined ? 0 : (timestamp - previousTimestamp) / 1_000;

    previousTimestamp = timestamp;
    const wasCrashed = state.crashed;
    state = stepRider(state, input, deltaSeconds, environment);
    if (!wasCrashed && state.crashed) {
      game.events.dispatchEvent(
        new CustomEvent("rider:crash", { detail: state }),
      );
      if (state.crashReason === "edge-catch") {
        game.events.dispatchEvent(
          new CustomEvent("rider:edge-catch", { detail: state }),
        );
      }
    }
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
