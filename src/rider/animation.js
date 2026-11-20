import { STUMBLE_TIME } from "./landing.js";
import { LEG_COMPRESS, LEG_REACH } from "./legs.js";
import { armTargets, FLOURISHES, flourishAfter, flourishGap } from "./style.js";

const clamp = (value, minimum, maximum) =>
  Math.min(maximum, Math.max(minimum, value));

const finiteOr = (value, fallback = 0) =>
  Number.isFinite(value) ? value : fallback;

const normalizeAngle = (angle) =>
  Math.atan2(Math.sin(angle), Math.cos(angle));

export function getRiderPose(state, input = {}) {
  const edgeAmount = Math.abs(state.edge);
  const speedLean = clamp((finiteOr(state.speed, 8) - 8) / 22, 0, 1);
  const edgeDirection = Math.sign(state.edge || state.lean || 1);
  const elapsed = finiteOr(state.elapsed);
  const restingEdge = state.surface !== "rail" &&
    edgeAmount < 0.12 && (state.air ?? 0) <= 0
    ? (Math.sin(elapsed * 1.8 + 0.15) * 0.05 +
        Math.sin(elapsed * 0.77 + 0.8) * 0.02) *
      (1 - edgeAmount / 0.12)
    : 0;
  const idleSway = (Math.sin(elapsed * 1.3) + Math.sin(elapsed * 0.47 + 0.8) * 0.35) *
    0.022 * (1 - speedLean * 0.65) * (1 - edgeAmount);
  const airborne = clamp((state.air ?? 0) / 0.25, 0, 1);
  const verticalPhase = clamp((state.verticalVelocity ?? 0) / 7.8, -1, 1);
  const jumpStretch = airborne * Math.max(0, verticalPhase);
  const apexTuck = airborne * (1 - Math.abs(verticalPhase));
  const airOpen = verticalPhase < 0
    ? airborne * clamp((0.8 - finiteOr(state.air)) / 0.8, 0, 1)
    : 0;
  const compression = clamp(state.compression ?? 0, 0, 1);
  const gForce = clamp(state.gForce ?? 0, 0, 1.6);
  const skid = clamp(state.skid ?? 0, 0, 1);
  const slash = clamp(state.slash ?? 0, 0, 1);
  const bumpImpact = clamp(state.bumpImpact ?? 0, 0, 1);
  const chatter = clamp(state.chatter ?? 0, 0, 1);
  const impactWarning = clamp((finiteOr(state.impactMeter) - 70) / 30, 0, 1);
  const impactWobble = Math.sin(elapsed * 11.5) * impactWarning * 0.055;
  const requestedCrouch = clamp(
    Number.isFinite(input.crouch) ? input.crouch : 0,
    0,
    1,
  );
  const requestedStretch = clamp(
    Number.isFinite(input.stretch) ? input.stretch : 0,
    0,
    1,
  );
  const terrainHeight = Number.isFinite(state.terrainHeight)
    ? state.terrainHeight
    : 0;
  const chatterPhase = state.elapsed * state.speed * 1.7;
  const lightness = clamp(state.boardLightness ?? 0, 0, 1);
  const flickBite = slash * (1 - lightness);
  const loadedCrouch = clamp(state.crouchAmount ?? 0, 0, 1);
  const bodyTilt = clamp(
    finiteOr(state.lean, state.edge) * (0.2 + speedLean * 0.58) *
      (1 - airborne * 0.6) +
      edgeDirection * gForce * 0.055 + idleSway + impactWobble,
    -0.8,
    0.8,
  );
  const boardSwing = normalizeAngle(
    finiteOr(state.boardRotation, finiteOr(state.boardYaw, state.heading)) -
      finiteOr(state.torsoRotation, finiteOr(state.torsoYaw, state.heading)),
  ) + airborne * finiteOr(state.tweak) * 1.35;
  const flickVariation = 1 + Math.sin(elapsed * 17.3 + 0.4) * 0.08 * slash;
  const pop = state.air > 0
    ? clamp(1 - finiteOr(state.airtime) / 0.18, 0, 1)
    : 0;
  const toeSide = (state.edge ?? 0) * (state.stance === "goofy" ? -1 : 1) >= 0;
  const boardHeave = airborne
    ? 0
    : terrainHeight * 1.35 + Math.sin(chatterPhase) * chatter * 0.045 -
      lightness * 0.075;
  const bodyHeave = airborne
    ? 0
    : (Number.isFinite(state.bodyHeave) ? state.bodyHeave : terrainHeight) *
      1.35 - lightness * 0.035;
  const crashTimer = state.crashed && finiteOr(state.crashTimer) <= 0
    ? 2
    : finiteOr(state.crashTimer);
  const crashAge = state.crashed ? clamp(2 - crashTimer, 0, 2) : 0;
  const crashCollapse = state.crashed
    ? clamp(crashAge / 0.12, 0, 1) *
      (1 - clamp((crashAge - 1.15) / 0.85, 0, 1))
    : 0;
  const crashSit = state.crashed
    ? clamp((crashAge - 0.55) / 0.4, 0, 1) *
      (1 - clamp((crashAge - 1.35) / 0.5, 0, 1))
    : 0;
  const crashFallAngle = crashAge < 0.4
    ? 1.1 + crashAge / 0.4 * 1.1
    : crashAge < 0.75
      ? 2.2
      : crashAge < 1.3
        ? 2.2 - (crashAge - 0.75) / 0.55 * 1.3
        : 0.9 * (1 - clamp((crashAge - 1.3) / 0.7, 0, 1));
  const crouch = clamp(
    0.28 +
      speedLean * 0.05 +
      // A carve sits the rider down a little; it does not fold them up.
      edgeAmount * 0.2 +
      loadedCrouch * 0.52 +
      requestedCrouch * 0.22 +
      airborne * 0.26 +
      apexTuck * 0.16 -
      airOpen * 0.2 -
      jumpStretch * 0.1 +
      // The legs already soak a bump as leg travel; this is only the brace for it.
      bumpImpact * 0.14 +
      gForce * 0.08 +
      flickBite * 0.18,
    0,
    1,
  );
  const handDrift = Math.sin(elapsed * 1.09) + Math.sin(elapsed * 0.73 + 0.8) * 0.4;
  // A hard carve always slides a little; that is riding, not losing it.
  const stumble = clamp(
    crashCollapse + finiteOr(state.washout) * 0.2 +
      clamp(finiteOr(state.stumble) / STUMBLE_TIME, 0, 1) * 0.6 +
      Math.max(0, finiteOr(state.landingImpact) - 3) * 0.1 +
      // Rough snow is soaked by the legs; it barely unsettles the rider.
      finiteOr(state.bumpImpact) * 0.05 + impactWarning * 0.28,
    0,
    1,
  );

  return Object.freeze({
    // Where the hands hang for this pose; the animator adds how they trail it.
    arms: armTargets({ airborne, airOpen, collapse: crashCollapse, crouch,
      drift: handDrift, elapsed, lift: jumpStretch, speed: speedLean, stumble,
      tilt: bodyTilt }),
    boardRoll: clamp(
      finiteOr(state.edge) * (0.26 + speedLean * 0.79) *
        (state.surface === "rail" ? 0.1 : 1 - airborne * 0.7) + restingEdge +
        finiteOr(state.terrainRoll) * 0.18 +
        Math.sin(chatterPhase * 3.1) * chatter * 0.012 +
        impactWobble * 0.5,
      -1.08,
      1.08,
    ),
    bodyTilt,
    boardSwing: boardSwing * flickVariation,
    boardFlex: clamp(
      Math.abs(finiteOr(state.pressAmount)) * 0.55 +
        gForce * 0.22 + finiteOr(state.popCharge) * 0.35 +
        compression * 0.45 + bumpImpact * 0.16,
      0,
      1,
    ),
    snowResponse: clamp(compression * 0.55 + bumpImpact * 0.5 + chatter * 0.12,
      0, 1),
    boardYaw: state.boardYaw ?? state.heading,
    bodyYaw: state.torsoYaw ?? state.heading,
    bodySpin:
      (state.torsoRotation ?? state.torsoYaw ?? state.heading) -
      (state.heading ?? 0) -
      (state.switchRiding ? Math.PI : 0),
    boardBodyRotation:
      (state.boardRotation ?? state.boardYaw ?? state.heading) -
      (state.torsoRotation ?? state.torsoYaw ?? state.heading),
    bob: bodyHeave,
    boardBob: boardHeave,
    airborne,
    airOpen,
    flickBite,
    boardPitch:
      airborne * verticalPhase * 0.18 + pop * 0.34 +
      (state.terrainPitch ?? 0) * 0.6 +
      (state.noseFloat ?? 0) * 0.12 +
      (state.pressAmount ?? 0) * 0.15,
    boardSlip: clamp(state.slipAngle ?? 0, -0.75, 0.75),
    boardTweak: clamp(state.tweak ?? 0, -1, 1) * 1.35,
    butter: clamp(state.butter ?? 0, 0, 1),
    press: clamp(
      (state.pressAmount ?? 0) + (state.butter ?? 0) * 0.7,
      -1,
      1,
    ),
    crouch,
    fallRotation: state.crashed
      ? (Math.sign(state.crashSpin) || 1) * crashFallAngle
      : 0,
    crashCollapse,
    crashSit,
    crashRecovery: state.crashed
      ? clamp((1.25 - crashTimer) / 1.25, 0, 1)
      : 0,
    foreAft: clamp(
      ((state.frontFootPressure ?? 0.5) - 0.5) * 2 -
        (state.noseFloat ?? 0) * 0.24,
      -1,
      1,
    ),
    // A full carve brings the inside hand down; getting low in it lays it on the snow.
    handDrag: clamp(
      (Math.abs(state.lean ?? 0) - 0.62) * 1.4 +
        requestedCrouch * 0.5 + (state.washout ?? 0) * 0.15,
      0,
      1,
    ),
    grab: airborne * requestedCrouch,
    jumpStretch: clamp(
      jumpStretch + pop * 0.58 + airOpen * 0.33 +
        airborne * requestedStretch * 0.32,
      0,
      1,
    ),
    lean: clamp(
      bodyTilt / 0.78,
      -1.04,
      1.04,
    ),
    // Real leg travel: the model moves the hips by it over a board that stays put.
    legOffset: clamp(finiteOr(state.legOffset), -LEG_COMPRESS, LEG_REACH),
    spray: airborne
      ? 0
      : clamp(
          (state.crashed ? 1 : 0) +
            slash * 0.92 +
            skid * 0.24 +
            edgeAmount * 0.025 +
            bumpImpact * (state.surface === "powder" ? 0.24 : 0.08) +
            clamp((state.landingImpact ?? 0) / 9, 0, 0.35),
          0,
          1,
        ),
    scarfFlutter:
      clamp((state.speed ?? 0) / 34, 0, 1) *
      Math.sin((Number(state.elapsed) || 0) * (5 + (state.speed ?? 0) * 0.18)),
    stance: state.stance ?? "regular",
    switchRiding: Boolean(state.switchRiding),
    toeSide,
    headLook: clamp(
      finiteOr(input.carve) * 0.7 + finiteOr(state.turnRate) * 0.08 +
        Math.sin(elapsed * 0.43 + Math.sin(elapsed * 0.19)) * 0.05 *
        (1 - edgeAmount),
      -1,
      1,
    ),
    handDrift,
    clothFlutter: clamp(finiteOr(state.speed) / 34, 0, 1) *
      (Math.sin(elapsed * finiteOr(state.speed) * 1.7) * 0.6 +
        Math.sin(elapsed * finiteOr(state.speed) * 2.63 + 0.5) * 0.25),
    breath: Math.sin(elapsed * 1.67) * 0.5,
    hipTwist: clamp(boardSwing * 0.68, -1, 1),
    shoulderTwist: clamp(-boardSwing * 0.16 - finiteOr(state.edge) * 0.08, -0.45, 0.45),
    armLag: 0,
    clothLag: 0,
    stumble,
    // The rider's own touches; only the animator, which keeps time, adds any.
    airStyle: 0,
    flourish: "",
    spineHinge: 0,
    spineSide: 0,
    spineTwist: 0,
    stylePitch: 0,
    styleRoll: 0,
    styleYaw: 0,
    upperBodyTwist:
      state.edge * -0.22 -
      Math.sign(state.edge) * skid * 0.08 +
      clamp(input.steer ?? 0, -1, 1) * 0.025,
  });
}

const createSpring = () => ({ value: 0, velocity: 0 });

const advanceSpring = (spring, target, frequency, delta, damping = 0.74) => {
  const steps = Math.max(1, Math.ceil(delta * 120));
  const step = delta / steps;
  const omega = frequency * Math.PI * 2;
  for (let index = 0; index < steps; index += 1) {
    const acceleration = (target - spring.value) * omega ** 2 -
      2 * damping * omega * spring.velocity;
    spring.velocity += acceleration * step;
    spring.value += spring.velocity * step;
  }
  return spring.value;
};

/**
 * Something loose hanging off the body: it rests at zero and is left behind
 * whenever the body accelerates by `push` (m/s², positive up or toward a turn).
 */
const advanceLoose = (spring, push, frequency, delta, damping) => {
  const steps = Math.max(1, Math.ceil(delta * 120));
  const step = delta / steps;
  const omega = frequency * Math.PI * 2;
  for (let index = 0; index < steps; index += 1) {
    const acceleration = -push - spring.value * omega ** 2 -
      2 * damping * omega * spring.velocity;
    spring.velocity += acceleration * step;
    spring.value += spring.velocity * step;
  }
  return spring.value;
};

const LAYERS = ["airStyle", "arm", "cloth", "crouch", "float", "grab", "head", "hinge",
  "hips", "lean", "shoulders", "side", "stumble", "sway", "swing", "twist"];
const createLayers = () =>
  Object.fromEntries(LAYERS.map((name) => [name, createSpring()]));
// What the rider is doing off their own bat: idle life, small moves, air style.
const createStyle = () => ({
  active: "",
  age: 0,
  calm: 0,
  count: 0,
  ease: 0,
  gap: flourishGap(0),
  jumps: 0,
  rising: undefined,
  wasAirborne: false,
});

/**
 * Turns each frame's target pose into the rider's motion. The board is the
 * physics and moves at once; the hips chase it fast and loose, the shoulders
 * stay quiet and lead with the eyes, and the arms hang off all of it. On top
 * sits the rider's own style, which fades the moment the player takes over.
 */
export function createRiderAnimator() {
  let layers = createLayers();
  let style = createStyle();
  let initialized = false;
  let steerDirection = 0;
  let flickAge = 0;
  let recoveryAge = Infinity;
  let recoveryDirection = 0;

  return Object.freeze({
    reset() {
      layers = createLayers();
      style = createStyle();
      initialized = false;
      steerDirection = 0;
      flickAge = 0;
      recoveryAge = Infinity;
      recoveryDirection = 0;
    },
    step(state, input = {}, deltaSeconds = 0) {
      const target = getRiderPose(state, input);
      const delta = clamp(finiteOr(deltaSeconds), 0, 0.1);
      const steer = clamp(finiteOr(input.steer), -1, 1);
      const carve = clamp(finiteOr(input.carve), -1, 1);
      const holdingCrouch = clamp(finiteOr(input.crouch), 0, 1);
      const elapsed = finiteOr(state.elapsed);
      const speed = finiteOr(state.speed);
      const speedLean = clamp((speed - 8) / 22, 0, 1);
      const direction = Math.abs(steer) > 0.05 && target.butter < 0.5
        ? Math.sign(steer)
        : 0;
      if (direction !== 0 && direction !== steerDirection) {
        flickAge = 0;
        recoveryAge = Infinity;
      } else if (direction !== 0) {
        flickAge += delta;
      }
      if (direction === 0 && steerDirection !== 0) {
        recoveryAge = 0;
        recoveryDirection = steerDirection;
      }
      if (direction === 0 && recoveryAge < 0.3) recoveryAge += delta;
      steerDirection = direction;
      let boardSwing = target.boardSwing;
      if (direction !== 0 && flickAge < 0.05) {
        boardSwing *= 0.45 + flickAge / 0.05 * 0.55;
      }
      if (direction === 0 && recoveryAge < 0.3) {
        boardSwing -= recoveryDirection * 0.12 *
          Math.sin(Math.PI * recoveryAge / 0.3);
      }
      if (!initialized) {
        layers.crouch.value = target.crouch;
        layers.lean.value = target.bodyTilt;
        layers.sway.value = target.bodyTilt;
        initialized = true;
      }

      // Quiet riding: nothing held, no edge set, nothing to recover from, and no
      // more air than the float over a roller.
      const calm = finiteOr(state.air) < 0.3 && !state.crashed && speed > 6 &&
        Math.abs(steer) < 0.1 && Math.abs(carve) < 0.15 && holdingCrouch < 0.1 &&
        Math.abs(finiteOr(state.edge)) < 0.22 && finiteOr(state.slash) < 0.1 &&
        target.stumble < 0.25;
      style.ease += (Number(calm) - style.ease) * (1 - Math.exp(-delta * (calm ? 2.5 : 9)));
      // Smaller the faster the rider is going.
      const show = style.ease * (1 - speedLean * 0.45);
      style.calm = calm ? style.calm + delta : 0;
      if (!style.active && style.calm >= style.gap && target.airborne <= 0) {
        style.active = flourishAfter(style.count);
        style.age = 0;
      }
      let move = {};
      if (style.active) {
        style.age += delta;
        const progress = style.age / FLOURISHES[style.active].seconds;
        if (progress < 1) {
          move = FLOURISHES[style.active].at(progress);
        } else {
          style.active = "";
          style.calm = 0;
          style.count += 1;
          style.gap = flourishGap(style.count);
        }
      }
      const add = (name) => finiteOr(move[name]) * show;

      // In the air with nothing held the rider adds a touch of their own, the
      // other way each jump, and lets it go in time to land square.
      if (target.airborne > 0 && !style.wasAirborne) style.jumps += 1;
      style.wasAirborne = target.airborne > 0;
      const falling = finiteOr(state.verticalVelocity) < 0;
      const landingSoon = falling ? clamp(1 - (finiteOr(state.air) - 0.25) / 0.7, 0, 1) : 0;
      const handsOff = (1 - clamp(Math.abs(finiteOr(state.tweak)) * 3, 0, 1)) *
        (1 - holdingCrouch) * (1 - Math.abs(steer)) *
        (1 - clamp(Math.abs(finiteOr(state.spinVelocity)) / 2.5, 0, 1));
      const airStyle = clamp(advanceSpring(layers.airStyle,
        state.crashed ? 0 : target.airborne * handsOff * (1 - landingSoon) *
          clamp((finiteOr(state.airtime) - 0.1) / 0.25, 0, 1),
        3.2, delta, 0.85), 0, 1);
      const styleSide = style.jumps % 2 === 0 ? -1 : 1;

      const styleYaw = add("styleYaw") + styleSide * airStyle * 0.24;
      const styleRoll = add("styleRoll") - styleSide * airStyle * 0.07;
      const stylePitch = add("stylePitch") - airStyle * 0.05;
      // Idle life: sink a little into each lazy edge change.
      const flow = Math.sin(elapsed * 1.8 + 0.15) ** 2 * 0.04 * style.ease;

      const headLook = advanceSpring(layers.head, target.headLook + add("headLook"),
        5.5, delta);
      // Hips snap round with the board and wobble once: quick and loose.
      const hipTwist = advanceSpring(layers.hips, (boardSwing + styleYaw) * 0.68,
        4, delta, 0.5);
      const shoulderTwist = advanceSpring(layers.shoulders,
        target.shoulderTwist + hipTwist * 0.12, 1.5, delta);
      const armLag = advanceSpring(layers.arm,
        -boardSwing * 0.23 - shoulderTwist * 0.4, 1.7, delta);
      const clothLag = advanceSpring(layers.cloth,
        -boardSwing * 0.9 - hipTwist * 0.22, 1.8, delta, 0.68);
      const bodyTilt = advanceSpring(layers.lean, target.bodyTilt, 3, delta);
      const crouchTarget = clamp(target.crouch + flow + add("crouch") + airStyle * 0.07, 0, 1);
      const crouch = clamp(advanceSpring(layers.crouch, crouchTarget,
        crouchTarget > layers.crouch.value ? 6.5 : 1.9, delta, 0.7), 0, 1);
      const stumble = advanceSpring(layers.stumble, target.stumble, 2.4, delta);
      const grab = advanceSpring(layers.grab, target.grab,
        target.grab > layers.grab.value ? 5.5 : 4, delta, 0.86);

      // Shoulders open into a turn ahead of the board and counter its flicks.
      const spineTwist = advanceSpring(layers.twist,
        clamp(carve * 0.2 - boardSwing * 0.18 - styleSide * airStyle * 0.2, -0.6, 0.6),
        2.4, delta, 0.8);
      const spineHinge = advanceSpring(layers.hinge,
        clamp(finiteOr(state.compression), 0, 1) * 0.2 +
          clamp(finiteOr(state.bumpImpact), 0, 1) * 0.12 + target.flickBite * 0.1 +
          speedLean * 0.05 + target.breath * 0.012 * style.ease + add("spineHinge"),
        3.4, delta, 0.7);
      const spineSide = advanceSpring(layers.side,
        Math.max(0, bodyTilt) * 0.12 + Math.min(0, bodyTilt) * 0.06 + target.press * 0.14 +
          styleSide * airStyle * 0.08 + add("spineSide"),
        2.6, delta, 0.8);

      // The arms are loose weight: left behind when the body is pushed up or
      // dropped, when it tips into a turn, and when the board flicks under it.
      const rising = finiteOr(state.worldVerticalVelocity, finiteOr(state.verticalVelocity)) -
        layers.crouch.velocity * 0.8;
      const push = delta > 0 && style.rising !== undefined
        ? clamp((rising - style.rising) / delta, -35, 35) : 0;
      if (delta > 0) style.rising = rising;
      const float = clamp(advanceLoose(layers.float, push, 2, delta, 0.45), -0.28, 0.28);
      const sway = bodyTilt - advanceSpring(layers.sway, bodyTilt, 1.9, delta, 0.5);
      const swing = advanceSpring(layers.swing, -(boardSwing + styleYaw) * 0.5, 3, delta, 0.42);
      const arms = armTargets({
        airborne: target.airborne,
        airOpen: target.airOpen,
        airStyle,
        collapse: target.crashCollapse,
        crouch,
        drift: target.handDrift * style.ease,
        elapsed,
        float,
        lead: move.lead && { x: move.lead.x * show, y: move.lead.y * show, out: move.lead.out * show },
        lift: target.jumpStretch,
        speed: speedLean,
        stumble: clamp(stumble, 0, 1),
        sway,
        swing,
        tilt: bodyTilt,
        trail: move.trail && { x: move.trail.x * show, y: move.trail.y * show, out: move.trail.out * show },
      });

      return Object.freeze({
        ...target,
        airStyle,
        armLag,
        arms,
        bodyTilt,
        boardSwing,
        clothLag,
        crouch,
        flourish: show > 0.5 ? style.active : "",
        foreAft: clamp(target.foreAft + add("foreAft"), -1, 1),
        grab: clamp(grab, 0, 1),
        headLook,
        hipTwist,
        lean: clamp(bodyTilt / 0.78, -1.04, 1.04),
        shoulderTwist,
        spineHinge,
        spineSide,
        spineTwist,
        stumble,
        stylePitch,
        styleRoll,
        styleYaw,
        upperBodyTwist: shoulderTwist,
      });
    },
  });
}
