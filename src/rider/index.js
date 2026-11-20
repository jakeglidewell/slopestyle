import { createRiderAnimator } from "./animation.js";
import { createCameraState, stepCamera } from "./camera.js";
import { createKeyboardControls } from "./controls.js";
import { crashRiderOnHazard, createRiderState, riderSpeedRangeAt, stepRider } from "./physics.js";
import { createRiderRenderer } from "./renderer.js";
import { sideHitLipDistance, snowSurfaceHeight } from "../mountain/terrain3d.js";

const PHYSICS_STEP = 1 / 120;
const clamp = (value, minimum, maximum) =>
  Math.min(maximum, Math.max(minimum, value));

/**
 * Split one frame into equal physics steps of at most 1/120 s that add up to the
 * frame's own duration, so the rider moves as far as the picture says it did.
 */
export const planPhysicsSteps = (deltaSeconds) => {
  if (!(deltaSeconds > 0)) return Object.freeze({ count: 0, step: 0 });
  const count = Math.ceil(deltaSeconds / PHYSICS_STEP - 1e-6);
  return Object.freeze({ count, step: deltaSeconds / count });
};

export const setRiderSpeed = (state, targetSpeed) => {
  if (!Number.isFinite(targetSpeed) || targetSpeed <= 0 || state.crashed) return state;
  const limits = riderSpeedRangeAt(state.position.downhill);
  const adjustedSpeed = clamp(targetSpeed, limits.min, limits.max);
  const currentSpeed = Math.hypot(state.velocity.across, state.velocity.downhill);
  const ratio = adjustedSpeed / Math.max(currentSpeed, 0.001);
  // The hill passes under the rider at the new pace; the body keeps whatever
  // it was doing on its legs.
  const riding = state.grounded && Number.isFinite(state.hillRate);
  return createRiderState({
    ...state,
    hillRate: riding ? state.hillRate * ratio : null,
    worldVerticalVelocity: riding
      ? state.worldVerticalVelocity + state.hillRate * (ratio - 1)
      : state.worldVerticalVelocity,
    velocity: {
      across: state.velocity.across * ratio,
      downhill: state.velocity.downhill * ratio,
    },
  });
};

/**
 * Owner 1 entry point: controls, physics, camera, animation, crash, and respawn.
 */
export default async function setupRider(game) {
  const keyboard = createKeyboardControls(window);
  const renderer = game.runtime?.world3d
    ? { beginFrame() {}, draw() {} }
    : createRiderRenderer(game.canvas);
  const animator = createRiderAnimator();
  let environment = Object.freeze({
    surface: "powder",
    surfaceHeight: snowSurfaceHeight,
  });
  // The chase camera reads the same snow the rider rides.
  const cameraTerrain = Object.freeze({
    height: (across, downhill) => snowSurfaceHeight(across, downhill, environment.surface),
  });
  let stance = "regular";
  let camera = createCameraState();
  let externalInput = Object.freeze({ carve: 0, crouch: 0, press: 0, steer: 0, stretch: 0 });
  let queuedExternalJump = false;
  let pendingJump = 0;
  let pendingPace;
  let paceHold = 0;
  let paceTarget = 0;
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
      surfaceHeight: snowSurfaceHeight,
    });
  });

  game.events.addEventListener("rider:pace", (event) => {
    if (!Number.isFinite(event.detail?.targetSpeed)) return;
    const limits = riderSpeedRangeAt(state.position.downhill);
    pendingPace = {
      holdSeconds: Math.max(0, Number(event.detail?.holdSeconds) || 0),
      targetSpeed: clamp(event.detail.targetSpeed, limits.min, limits.max),
    };
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
    pendingPace = undefined;
    paceHold = 0;
    paceTarget = 0;
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
    if (pendingPace && state.air <= 0.08) {
      state = setRiderSpeed(state, pendingPace.targetSpeed);
      paceTarget = pendingPace.targetSpeed;
      paceHold = pendingPace.holdSeconds;
      pendingPace = undefined;
    }
    const wasCrashed = state.crashed;
    pendingJump = Math.max(pendingJump, input.jump);
    const physics = planPhysicsSteps(deltaSeconds);
    let launched = 0;
    for (let index = 0; index < physics.count; index += 1) {
      launched = Math.max(launched, pendingJump);
      state = stepRider(
        state,
        { ...input, jump: pendingJump },
        physics.step,
        {
          ...environment,
          lipDistance: sideHitLipDistance(state.position.across, state.position.downhill),
        },
      );
      if (paceHold > 0 && state.speed > paceTarget) {
        state = setRiderSpeed(state, paceTarget);
      }
      paceHold = Math.max(0, paceHold - physics.step);
      pendingJump = 0;
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
    camera = stepCamera(camera, state, deltaSeconds, cameraTerrain);
    let pose = animator.step(state, frameInput, deltaSeconds);

    const warning = clamp((state.impactMeter - 70) / 30, 0, 1);
    const colorEffect = warning > 0
      ? `saturate(${1 - warning * 0.78}) contrast(${1 + warning * 0.08})`
      : "";
    if (game.worldCanvas?.style) game.worldCanvas.style.filter = colorEffect;
    if (game.canvas?.style) game.canvas.style.filter = colorEffect;

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
