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
  const requestedCrouch = clamp(
    Number.isFinite(input.crouch) ? input.crouch : 0,
    0,
    1,
  );
  const heaveBySurface = {
    groomed: 0.04,
    ice: 0.012,
    powder: 0.22,
    rail: 0,
    slush: 0.09,
  };
  const heaveAmplitude = heaveBySurface[state.surface] ?? heaveBySurface.groomed;
  const heavePhase = state.elapsed * state.speed * 0.24;
  const terrainHeave = airborne
    ? 0
    : (Math.sin(heavePhase) + Math.sin(heavePhase * 2.17 + 0.8) * 0.34) *
      heaveAmplitude;

  return Object.freeze({
    boardRoll: state.edge * 0.45,
    boardYaw: state.boardYaw ?? state.heading,
    bob: terrainHeave,
    airborne,
    boardPitch: airborne * verticalPhase * 0.18,
    boardSlip: clamp(state.slipAngle ?? 0, -0.75, 0.75),
    boardTweak: clamp(state.tweak ?? 0, -1, 1) * 1.28,
    butter: clamp(state.butter ?? 0, 0, 1),
    crouch: clamp(
      0.28 +
        edgeAmount * 0.38 +
        requestedCrouch * 0.5 +
        apexTuck * 0.42 -
        jumpStretch * 0.18 +
        compression * 0.5 +
        gForce * 0.08,
      0,
      1,
    ),
    fallRotation: state.crashed
      ? (Math.sign(state.crashSpin) || 1) * 1.35
      : 0,
    foreAft: clamp(((state.frontFootPressure ?? 0.5) - 0.5) * 2, -1, 1),
    handDrag: clamp((Math.abs(state.lean ?? 0) - 0.52) * 2.1 + requestedCrouch * 0.38, 0, 1),
    jumpStretch,
    lean: clamp(
      (state.lean ?? state.edge) * 0.42 +
        Math.sign(state.edge) * gForce * 0.32,
      -0.78,
      0.78,
    ),
    spray: airborne
      ? 0
      : clamp(
          (state.crashed ? 1 : 0) + slash * 0.92 + skid * 0.24 + edgeAmount * 0.05,
          0,
          1,
        ),
    stance: state.stance ?? "regular",
    switchRiding: Boolean(state.switchRiding),
    upperBodyTwist:
      state.edge * -0.22 -
      Math.sign(state.edge) * skid * 0.08 +
      clamp(input.steer ?? 0, -1, 1) * 0.025,
  });
}
