const clamp = (value, minimum, maximum) =>
  Math.min(maximum, Math.max(minimum, value));

export function getRiderPose(state, input = {}) {
  const edgeAmount = Math.abs(state.edge);
  const airborne = clamp((state.air ?? 0) / 1.5, 0, 1);
  const verticalPhase = clamp((state.verticalVelocity ?? 0) / 7.8, -1, 1);
  const jumpStretch = airborne * Math.max(0, verticalPhase);
  const apexTuck = airborne * (1 - Math.abs(verticalPhase));
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
  const loadedCrouch = clamp(state.crouchAmount ?? 0, 0, 1);
  const toeSide = (state.edge ?? 0) * (state.stance === "goofy" ? -1 : 1) >= 0;
  const boardHeave = airborne
    ? 0
    : terrainHeight * 1.35 + Math.sin(chatterPhase) * chatter * 0.045 -
      lightness * 0.075;
  const bodyHeave = airborne
    ? 0
    : (Number.isFinite(state.bodyHeave) ? state.bodyHeave : terrainHeight) *
      1.35 - lightness * 0.035;

  return Object.freeze({
    boardRoll: state.edge * 0.45 + (state.terrainRoll ?? 0) * 0.18,
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
    boardPitch:
      airborne * verticalPhase * 0.18 +
      (state.terrainPitch ?? 0) * 0.42 -
      (state.noseFloat ?? 0) * 0.08 -
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
        edgeAmount * 0.38 +
        loadedCrouch * 0.48 +
        requestedCrouch * 0.05 +
        apexTuck * 0.42 -
        jumpStretch * 0.18 +
        compression * 0.5 +
        bumpImpact * 0.38 +
        gForce * 0.08,
      0,
      1,
    ),
    fallRotation: state.crashed
      ? (Math.sign(state.crashSpin) || 1) *
        (1.2 + clamp((2 - (state.crashTimer ?? 0)) / 2, 0, 1) * Math.PI * 2)
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
    jumpStretch: clamp(jumpStretch + airborne * requestedStretch * 0.32, 0, 1),
    lean: clamp(
      (state.lean ?? state.edge) * 0.54 +
        Math.sign(state.edge) * gForce * 0.32,
      -1.04,
      1.04,
    ),
    spray: airborne
      ? 0
      : clamp(
          (state.crashed ? 1 : 0) +
            slash * 0.92 +
            skid * 0.24 +
            edgeAmount * 0.05 +
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
    upperBodyTwist:
      state.edge * -0.22 -
      Math.sign(state.edge) * skid * 0.08 +
      clamp(input.steer ?? 0, -1, 1) * 0.025,
  });
}
