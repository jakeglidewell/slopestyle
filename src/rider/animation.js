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
      edgeDirection * gForce * 0.055 + idleSway,
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

  return Object.freeze({
    boardRoll: clamp(
      finiteOr(state.edge) * (0.26 + speedLean * 0.79) *
        (state.surface === "rail" ? 0.1 : 1 - airborne * 0.7) + restingEdge +
        finiteOr(state.terrainRoll) * 0.18 +
        Math.sin(chatterPhase * 3.1) * chatter * 0.012,
      -1.08,
      1.08,
    ),
    bodyTilt,
    boardSwing: boardSwing * flickVariation,
    boardFlex: clamp(
      Math.abs(finiteOr(state.pressAmount)) * 0.55 +
        gForce * 0.22 + finiteOr(state.popCharge) * 0.35 +
        compression * 0.3,
      0,
      1,
    ),
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
    boardTweak: clamp(state.tweak ?? 0, -1, 1) * 1.55,
    butter: clamp(state.butter ?? 0, 0, 1),
    press: clamp(
      (state.pressAmount ?? 0) + (state.butter ?? 0) * 0.7,
      -1,
      1,
    ),
    crouch: clamp(
      0.28 +
        speedLean * 0.08 +
        edgeAmount * 0.38 +
        loadedCrouch * 0.48 +
        requestedCrouch * 0.05 +
        airborne * 0.34 +
        apexTuck * 0.18 -
        airOpen * 0.2 -
        jumpStretch * 0.1 +
        compression * 0.5 +
        bumpImpact * 0.38 +
        gForce * 0.08 +
        flickBite * 0.18,
      0,
      1,
    ),
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
    handDrag: clamp(
      (Math.abs(state.lean ?? 0) - 0.52) * 2.1 +
        requestedCrouch * 0.38 + (state.washout ?? 0) * 0.65,
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
    handDrift: Math.sin(elapsed * 1.09) + Math.sin(elapsed * 0.73 + 0.8) * 0.4,
    clothFlutter: clamp(finiteOr(state.speed) / 34, 0, 1) *
      (Math.sin(elapsed * finiteOr(state.speed) * 1.7) * 0.6 +
        Math.sin(elapsed * finiteOr(state.speed) * 2.63 + 0.5) * 0.25),
    breath: Math.sin(elapsed * 1.67) * 0.5,
    hipTwist: clamp(boardSwing * 0.68, -1, 1),
    shoulderTwist: clamp(-boardSwing * 0.16 - finiteOr(state.edge) * 0.08, -0.45, 0.45),
    armLag: 0,
    clothLag: 0,
    stumble: clamp(
      crashCollapse + finiteOr(state.washout) * 0.8 +
        Math.max(0, finiteOr(state.landingImpact) - 3) * 0.1 +
        finiteOr(state.bumpImpact) * 0.2,
      0,
      1,
    ),
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

/** Independent pose layers keep the quick board and quiet upper body out of sync. */
export function createRiderAnimator() {
  let layers = {
    arm: createSpring(),
    cloth: createSpring(),
    crouch: createSpring(),
    head: createSpring(),
    hips: createSpring(),
    lean: createSpring(),
    shoulders: createSpring(),
    stumble: createSpring(),
  };
  let initialized = false;
  let steerDirection = 0;
  let flickAge = 0;
  let recoveryAge = Infinity;
  let recoveryDirection = 0;

  return Object.freeze({
    reset() {
      layers = {
        arm: createSpring(),
        cloth: createSpring(),
        crouch: createSpring(),
        head: createSpring(),
        hips: createSpring(),
        lean: createSpring(),
        shoulders: createSpring(),
        stumble: createSpring(),
      };
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
        initialized = true;
      }
      const headLook = advanceSpring(layers.head, target.headLook, 5.5, delta);
      const hipTwist = advanceSpring(layers.hips, boardSwing * 0.68, 3.2, delta);
      const shoulderTwist = advanceSpring(layers.shoulders,
        target.shoulderTwist + hipTwist * 0.12, 1.5, delta);
      const armLag = advanceSpring(layers.arm,
        -boardSwing * 0.23 - shoulderTwist * 0.4, 1.7, delta);
      const clothLag = advanceSpring(layers.cloth,
        -boardSwing * 0.9 - hipTwist * 0.22, 1.8, delta, 0.68);
      const bodyTilt = advanceSpring(layers.lean, target.bodyTilt, 3, delta);
      const crouch = advanceSpring(layers.crouch, target.crouch,
        target.crouch > layers.crouch.value ? 5 : 1.9, delta, 0.7);
      const stumble = advanceSpring(layers.stumble, target.stumble, 2.4, delta);

      return Object.freeze({
        ...target,
        armLag,
        bodyTilt,
        boardSwing,
        clothLag,
        crouch: clamp(crouch, 0, 1),
        headLook,
        hipTwist,
        lean: clamp(bodyTilt / 0.78, -1.04, 1.04),
        shoulderTwist,
        stumble,
        upperBodyTwist: shoulderTwist,
      });
    },
  });
}
