import { createRiderAnimator } from "./animation.js";
import { createCameraState, stepCamera } from "./camera.js";
import { createKeyboardControls } from "./controls.js";
import { crashRiderOnHazard, createRiderState, stepRider } from "./physics.js";
import { createRiderRenderer } from "./renderer.js";

const PHYSICS_STEP = 1 / 120;
const clamp = (value, minimum, maximum) =>
  Math.min(maximum, Math.max(minimum, value));

/**
 * Owner 1 entry point: controls, physics, camera, animation, crash, and respawn.
 */
export default async function setupRider(game) {
  const keyboard = createKeyboardControls(window);
  const renderer = game.runtime?.world3d
    ? { beginFrame() {}, draw() {} }
    : createRiderRenderer(game.canvas);
  const animator = createRiderAnimator();
  let environment = Object.freeze({ surface: "powder" });
  let stance = "regular";
  let camera = createCameraState();
  let externalInput = Object.freeze({ carve: 0, crouch: 0, press: 0, steer: 0, stretch: 0 });
  let queuedExternalJump = false;
  let pendingJump = 0;
  let physicsRemainder = 0;
  let previousTimestamp;
  let state = createRiderState({ surface: environment.surface });

  game.events.addEventListener("rider:input", (event) => {
    if (Number(event.detail?.jump) > 0) queuedExternalJump = true;
    externalInput = Object.freeze({
      carve: clamp(Number(event.detail?.carve) || 0, -1, 1),
      crouch: clamp(Number(event.detail?.crouch) || 0, 0, 1),
      press: clamp(Number(event.detail?.press) || 0, -1, 1),
      steer: clamp(Number(event.detail?.steer) || 0, -1, 1),
      stretch: clamp(Number(event.detail?.stretch) || 0, 0, 1),
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
    animator.reset();
    camera = createCameraState();
    previousTimestamp = undefined;
    queuedExternalJump = false;
    pendingJump = 0;
    physicsRemainder = 0;
    state = createRiderState({
      speed: Number(event.detail?.speed) || 16,
      stance,
      surface: environment.surface,
    });
  });

  game.events.addEventListener("rider:impact", (event) => {
    state = crashRiderOnHazard(state, event.detail);
    pendingJump = 0;
    queuedExternalJump = false;
  });

  const update = (timestamp) => {
    const keyboardInput = keyboard.read();
    const input = Object.freeze({
      carve: clamp(keyboardInput.carve + externalInput.carve, -1, 1),
      crouch: Math.max(keyboardInput.crouch, externalInput.crouch),
      jump: Math.max(keyboardInput.jump, Number(queuedExternalJump)),
      press: clamp(keyboardInput.press + externalInput.press, -1, 1),
      steer: clamp(keyboardInput.steer + externalInput.steer, -1, 1),
      stretch: Math.max(keyboardInput.stretch, externalInput.stretch),
    });
    queuedExternalJump = false;
    const deltaSeconds = previousTimestamp === undefined
      ? 0
      : clamp((timestamp - previousTimestamp) / 1_000, 0, 0.1);

    previousTimestamp = timestamp;
    const wasCrashed = state.crashed;
    pendingJump = Math.max(pendingJump, input.jump);
    physicsRemainder += deltaSeconds;
    let launched = 0;
    while (physicsRemainder + 1e-9 >= PHYSICS_STEP) {
      launched = Math.max(launched, pendingJump);
      state = stepRider(
        state,
        { ...input, jump: pendingJump },
        PHYSICS_STEP,
        environment,
      );
      pendingJump = 0;
      physicsRemainder -= PHYSICS_STEP;
    }
    const frameInput = Object.freeze({ ...input, jump: launched });
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
    let pose = animator.step(state, frameInput, deltaSeconds);

    renderer.beginFrame();

    const stateBeforeEvents = state;

    game.events.dispatchEvent(
      new CustomEvent("rider:update", {
        detail: Object.freeze({
          camera,
          input: frameInput,
          pose,
          state,
        }),
      }),
    );

    if (state !== stateBeforeEvents) {
      pose = animator.step(state, frameInput, 0);
    }

    renderer.draw({ camera, pose, state });

    requestAnimationFrame(update);
  };

  game.events.addEventListener(
    "ready",
    () => requestAnimationFrame(update),
    { once: true },
  );
}
