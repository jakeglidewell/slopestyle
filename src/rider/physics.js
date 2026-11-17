const MIN_SPEED = 12;
const MAX_SPEED = 34;
const MAX_STEP = 1 / 20;
const EDGE_RESPONSE = 8;
const LEAN_RESPONSE = 6.3;
const GRAVITY = 18;
const JUMP_VELOCITY = 7.8;
const EARTH_GRAVITY = 9.81;
const DEFAULT_SLOPE_GRADE = 0.34;
const EDGE_CATCH_RECOVERY = 1.15;

const SURFACE_PROFILES = Object.freeze({
  groomed: Object.freeze({ baseGrip: 1, drag: 1, edgeGrip: 1, skid: 1 }),
  ice: Object.freeze({ baseGrip: 0.22, drag: 0.62, edgeGrip: 0.28, skid: 2.5 }),
  powder: Object.freeze({ baseGrip: 1.35, drag: 2, edgeGrip: 0.76, skid: 1.14 }),
  slush: Object.freeze({ baseGrip: 0.82, drag: 1.75, edgeGrip: 0.74, skid: 1.35 }),
  rail: Object.freeze({ baseGrip: 0.04, drag: 0.3, edgeGrip: 0.04, skid: 3 }),
});

const clamp = (value, minimum, maximum) =>
  Math.min(maximum, Math.max(minimum, value));

const finiteOr = (value, fallback) =>
  Number.isFinite(value) ? value : fallback;

const normalizeAngle = (angle) =>
  Math.atan2(Math.sin(angle), Math.cos(angle));

const freezeState = (state) =>
  Object.freeze({
    ...state,
    position: Object.freeze({ ...state.position }),
    velocity: Object.freeze({ ...state.velocity }),
  });

const velocityFromHeading = (speed, heading) => ({
  across: Math.sin(heading) * speed,
  downhill: Math.cos(heading) * speed,
});

export function createRiderState(overrides = {}) {
  const position = overrides.position ?? {};
  const heading = finiteOr(overrides.heading, 0);
  const requestedSpeed = Math.max(0, finiteOr(overrides.speed, 8));
  const suppliedVelocity = overrides.velocity;
  const velocity = suppliedVelocity
    ? {
        across: finiteOr(suppliedVelocity.across, 0),
        downhill: finiteOr(suppliedVelocity.downhill, requestedSpeed),
      }
    : velocityFromHeading(requestedSpeed, heading);
  const speed = Math.hypot(velocity.across, velocity.downhill);

  return freezeState({
    air: Math.max(0, finiteOr(overrides.air, 0)),
    boardYaw: finiteOr(overrides.boardYaw, heading),
    butter: clamp(finiteOr(overrides.butter, 0), 0, 1),
    compression: clamp(finiteOr(overrides.compression, 0), 0, 1),
    crashed: Boolean(overrides.crashed),
    crashReason: overrides.crashReason ?? null,
    crashSpin: finiteOr(overrides.crashSpin, 0),
    crashTimer: Math.max(0, finiteOr(overrides.crashTimer, 0)),
    edge: clamp(finiteOr(overrides.edge, 0), -1, 1),
    elapsed: Math.max(0, finiteOr(overrides.elapsed, 0)),
    frontEdge: clamp(
      finiteOr(overrides.frontEdge, overrides.edge ?? 0),
      -1,
      1,
    ),
    frontFootPressure: clamp(
      finiteOr(overrides.frontFootPressure, 0.58),
      0,
      1,
    ),
    gForce: Math.max(0, finiteOr(overrides.gForce, 0)),
    heading: suppliedVelocity
      ? Math.atan2(velocity.across, velocity.downhill)
      : heading,
    lean: clamp(finiteOr(overrides.lean, overrides.edge ?? 0), -1, 1),
    position: {
      across: finiteOr(position.across, 0),
      downhill: finiteOr(position.downhill, 0),
    },
    popCharge: clamp(finiteOr(overrides.popCharge, 0), 0, 1),
    rearEdge: clamp(
      finiteOr(overrides.rearEdge, overrides.edge ?? 0),
      -1,
      1,
    ),
    skid: clamp(finiteOr(overrides.skid, 0), 0, 1),
    slash: clamp(finiteOr(overrides.slash, 0), 0, 1),
    slipAngle: finiteOr(overrides.slipAngle, 0),
    slopeGrade: clamp(
      finiteOr(overrides.slopeGrade, DEFAULT_SLOPE_GRADE),
      0.04,
      0.65,
    ),
    speed,
    spinVelocity: finiteOr(overrides.spinVelocity, 0),
    stance: overrides.stance === "goofy" ? "goofy" : "regular",
    steer: clamp(finiteOr(overrides.steer, 0), -1, 1),
    surface: SURFACE_PROFILES[overrides.surface]
      ? overrides.surface
      : "groomed",
    switchRiding: Boolean(overrides.switchRiding),
    turnRate: finiteOr(overrides.turnRate, 0),
    tweak: clamp(finiteOr(overrides.tweak, 0), -1, 1),
    velocity,
    verticalVelocity: finiteOr(overrides.verticalVelocity, 0),
  });
}

const sampleSlopeGrade = (downhill) =>
  DEFAULT_SLOPE_GRADE +
  Math.sin(downhill * 0.018) * 0.035 +
  Math.sin(downhill * 0.051) * 0.012;

const stepCrashedRider = (state, delta, slopeGrade) => {
  const damping = Math.exp(-2.4 * delta);
  const velocity = {
    across: state.velocity.across * damping,
    downhill:
      state.velocity.downhill * damping +
      EARTH_GRAVITY * Math.sin(slopeGrade) * delta,
  };
  const speed = Math.hypot(velocity.across, velocity.downhill);
  const heading = Math.atan2(velocity.across, velocity.downhill);
  const crashTimer = Math.max(0, state.crashTimer - delta);
  const recovered = crashTimer <= 0;

  return freezeState({
    ...state,
    boardYaw: recovered
      ? heading
      : normalizeAngle(state.boardYaw + state.crashSpin * 2.6 * delta),
    butter: state.butter * Math.exp(-9 * delta),
    compression: state.compression * Math.exp(-5 * delta),
    crashed: !recovered,
    crashReason: recovered ? null : state.crashReason,
    crashSpin: recovered ? 0 : state.crashSpin,
    crashTimer,
    edge: recovered ? 0 : state.edge * Math.exp(-6 * delta),
    elapsed: state.elapsed + delta,
    gForce: 0,
    heading,
    lean: recovered ? 0 : state.lean * Math.exp(-4 * delta),
    position: {
      across: state.position.across + velocity.across * delta,
      downhill: state.position.downhill + velocity.downhill * delta,
    },
    skid: recovered ? 0 : 1,
    slash: recovered ? 0 : state.slash * Math.exp(-10 * delta),
    slipAngle: recovered ? 0 : normalizeAngle(state.boardYaw - heading),
    slopeGrade,
    speed,
    turnRate: recovered ? 0 : state.turnRate,
    tweak: state.tweak * Math.exp(-12 * delta),
    velocity,
  });
};

export function stepRider(
  state,
  input = {},
  deltaSeconds = 0,
  environment = {},
) {
  const delta = clamp(finiteOr(deltaSeconds, 0), 0, MAX_STEP);
  const slopeGrade = clamp(
    finiteOr(
      environment.slopeGrade,
      sampleSlopeGrade(state.position.downhill),
    ),
    0.04,
    0.65,
  );
  const surface = SURFACE_PROFILES[environment.surface]
    ? environment.surface
    : state.surface;
  const surfaceProfile = SURFACE_PROFILES[surface] ?? SURFACE_PROFILES.groomed;

  if (state.crashed) {
    return stepCrashedRider(state, delta, slopeGrade);
  }

  const carve = clamp(finiteOr(input.carve, 0), -1, 1);
  const crouch = clamp(finiteOr(input.crouch, 0), 0, 1);
  const steer = clamp(finiteOr(input.steer, 0), -1, 1);
  const leanBlend = 1 - Math.exp(-LEAN_RESPONSE * delta);
  const lean = state.lean + (carve - state.lean) * leanBlend;
  const pressure = 0.72 + crouch * 0.28;
  const edgeTarget = lean * pressure;
  const stanceDirection = state.stance === "goofy" ? -1 : 1;
  const toeSide = edgeTarget * stanceDirection >= 0;
  const frontEdgeBlend =
    1 - Math.exp(-EDGE_RESPONSE * (toeSide ? 1.35 : 1.1) * delta);
  const rearEdgeBlend =
    1 - Math.exp(-EDGE_RESPONSE * (toeSide ? 0.76 : 0.64) * delta);
  const frontEdge =
    state.frontEdge + (edgeTarget - state.frontEdge) * frontEdgeBlend;
  const rearEdge =
    state.rearEdge + (edgeTarget - state.rearEdge) * rearEdgeBlend;
  const edge = frontEdge * 0.58 + rearEdge * 0.42;
  const initiation = clamp(Math.abs(carve - state.lean), 0, 1);
  const pressureBase = surface === "powder" ? 0.44 - crouch * 0.08 : 0.56;
  const frontFootPressure = clamp(
    pressureBase + initiation * 0.27 + (surface === "powder" ? 0 : crouch * 0.12),
    0,
    1,
  );
  const boardForward = {
    across: Math.sin(state.boardYaw),
    downhill: Math.cos(state.boardYaw),
  };
  const boardSide = {
    across: Math.cos(state.boardYaw),
    downhill: -Math.sin(state.boardYaw),
  };
  const forwardSpeed =
    state.velocity.across * boardForward.across +
    state.velocity.downhill * boardForward.downhill;
  const lateralSpeed =
    state.velocity.across * boardSide.across +
    state.velocity.downhill * boardSide.downhill;
  const changedEdge =
    Math.sign(edge) !== Math.sign(state.edge) &&
    Math.abs(state.edge) > 0.015 &&
    Math.abs(edge) > 0.015;
  const downhillEdgeEngaged = Math.sign(edge) === Math.sign(lateralSpeed);
  const caughtEdge =
    state.air <= 0 &&
    changedEdge &&
    downhillEdgeEngaged &&
    Math.abs(lateralSpeed) > 2.2 &&
    state.speed > 10;
  const railEdgeCatch =
    state.air <= 0 && surface === "rail" && Math.abs(edge) > 0.22;

  if (caughtEdge || railEdgeCatch) {
    const crashSpin = Math.sign(lateralSpeed || edge) || 1;
    const velocity = {
      across: state.velocity.across * 0.62,
      downhill: state.velocity.downhill * 0.62,
    };

    return freezeState({
      ...state,
      compression: 1,
      crashed: true,
      crashReason: railEdgeCatch ? "rail-edge" : "edge-catch",
      crashSpin,
      crashTimer: EDGE_CATCH_RECOVERY,
      edge,
      elapsed: state.elapsed + delta,
      frontEdge,
      frontFootPressure,
      gForce: 1.6,
      lean,
      position: {
        across: state.position.across + velocity.across * delta,
        downhill: state.position.downhill + velocity.downhill * delta,
      },
      skid: 1,
      slipAngle: normalizeAngle(state.boardYaw - state.heading),
      slopeGrade,
      speed: Math.hypot(velocity.across, velocity.downhill),
      rearEdge,
      surface,
      velocity,
    });
  }

  const grounded = state.air <= 0;
  const switchPenalty = state.switchRiding ? 0.84 : 1;
  const butterTarget =
    grounded && crouch > 0.62 && Math.abs(steer) > 0.3
      ? Math.abs(steer) * crouch
      : 0;
  const butterBlend = 1 - Math.exp(-(butterTarget > state.butter ? 8 : 12) * delta);
  const butter = state.butter + (butterTarget - state.butter) * butterBlend;
  const sidecutRadius = 11.4 - crouch * 3.2;
  const sidecutTurnRate =
    (edge * Math.abs(forwardSpeed) * switchPenalty) / sidecutRadius;
  const pivotTurnRate =
    steer * (5.2 + butter * 0.8) * (1 - Math.abs(edge) * 0.9) * switchPenalty;
  const snapBackTurnRate =
    Math.abs(steer) < 0.05 && Math.abs(edge) < 0.25 && state.slash > 0.04
      ? normalizeAngle(state.heading - state.boardYaw) * 18
      : 0;
  const targetTurnRate = sidecutTurnRate + pivotTurnRate + snapBackTurnRate;
  const flicking =
    Math.abs(steer) > 0.05 ||
    (Math.abs(edge) < 0.25 && Math.abs(snapBackTurnRate) > 0.05);
  const turnBlend = 1 - Math.exp(-(flicking ? 32 : 14) * delta);
  let turnRate =
    state.turnRate + (targetTurnRate - state.turnRate) * turnBlend;
  let spinVelocity = state.spinVelocity;
  let boardYaw;

  if (grounded) {
    const rawBoardYaw = normalizeAngle(state.boardYaw + turnRate * delta);
    const fallLineReference = state.switchRiding
      ? rawBoardYaw >= 0
        ? Math.PI
        : -Math.PI
      : 0;
    const relativeToFallLine = normalizeAngle(
      rawBoardYaw - fallLineReference,
    );
    boardYaw = normalizeAngle(
      fallLineReference + clamp(relativeToFallLine, -1.35, 1.35),
    );
  } else {
    const tuckSpinMultiplier = 1 + crouch * 0.72;
    turnRate = spinVelocity * tuckSpinMultiplier;
    boardYaw = normalizeAngle(state.boardYaw + turnRate * delta);
  }
  const edgeSideGrip = toeSide ? 1.06 : 0.92;
  const lateralGrip = grounded
    ? (0.12 * surfaceProfile.baseGrip +
        Math.abs(edge) * (6.8 + crouch * 2.2) * surfaceProfile.edgeGrip) *
      edgeSideGrip *
      switchPenalty
    : 0;
  const lateralAcceleration = -lateralSpeed * lateralGrip;
  const snowResistance = grounded
    ? surfaceProfile.drag *
      (0.24 +
        state.skid *
          1.8 *
          (1 - Math.abs(edge) * 0.55) *
          (1 - Math.abs(steer) * 0.62) +
        (surface === "powder"
          ? clamp((10 - state.speed) / 6, 0, 1) *
            (0.65 + frontFootPressure * 0.5)
          : 0))
    : 0;
  const aerodynamicDrag =
    state.speed * 0.0045 * (1 - crouch * 0.38);
  const acceleration = grounded ? {
    across:
      boardSide.across * lateralAcceleration -
      state.velocity.across * aerodynamicDrag -
      boardForward.across * Math.sign(forwardSpeed || 1) * snowResistance,
    downhill:
      EARTH_GRAVITY * Math.sin(slopeGrade) +
      boardSide.downhill * lateralAcceleration -
      state.velocity.downhill * aerodynamicDrag -
      boardForward.downhill * Math.sign(forwardSpeed || 1) * snowResistance,
  } : { across: 0, downhill: 0 };
  let velocity = grounded
    ? {
        across: state.velocity.across + acceleration.across * delta,
        downhill: state.velocity.downhill + acceleration.downhill * delta,
      }
    : { ...state.velocity };
  let speed = Math.hypot(velocity.across, velocity.downhill);

  if (speed < MIN_SPEED || speed > MAX_SPEED) {
    const clampedSpeed = clamp(speed, MIN_SPEED, MAX_SPEED);
    const ratio = clampedSpeed / Math.max(speed, 0.001);
    velocity = {
      across: velocity.across * ratio,
      downhill: velocity.downhill * ratio,
    };
    speed = clampedSpeed;
  }

  const heading = Math.atan2(velocity.across, velocity.downhill);
  const slipAngle = normalizeAngle(boardYaw - heading);
  const skidTarget = clamp(
    (Math.abs(lateralSpeed) / Math.max(speed, 1)) *
      2.25 *
      (grounded ? surfaceProfile.skid : 0),
    0,
    0.95,
  );
  const skidBlend = 1 - Math.exp(-7 * delta);
  const skid = state.skid + (skidTarget - state.skid) * skidBlend;
  const slashTarget = clamp(
    Math.abs(steer - state.steer) * 1.55 + Math.abs(steer) * skid * 0.55,
    0,
    1,
  );
  const slashBlend = 1 - Math.exp(-(slashTarget > state.slash ? 24 : 11) * delta);
  const slash = state.slash + (slashTarget - state.slash) * slashBlend;
  const canJump = state.air <= 0 && finiteOr(input.jump, 0) > 0;
  const chargeBlend = 1 - Math.exp(-3.8 * delta);
  let popCharge = grounded
    ? state.popCharge + (crouch - state.popCharge) * chargeBlend
    : state.popCharge;
  let verticalVelocity = canJump
    ? JUMP_VELOCITY - 0.9 + popCharge * 2.5
    : finiteOr(state.verticalVelocity, 0);
  if (canJump) {
    spinVelocity = state.turnRate * 0.62 + state.lean * 1.18;
    popCharge = 0;
  }
  let air = Math.max(0, finiteOr(state.air, 0));
  const wasAirborne = air > 0;
  let compression = clamp(finiteOr(state.compression, 0), 0, 1);
  let crashed = false;
  let crashReason = null;
  let crashSpin = 0;
  let crashTimer = 0;
  let switchRiding = state.switchRiding;

  if (air > 0 || verticalVelocity > 0) {
    air += verticalVelocity * delta;
    verticalVelocity -= GRAVITY * delta;

    if (air <= 0) {
      const impactSpeed = Math.abs(verticalVelocity);
      air = 0;
      verticalVelocity = 0;
      if (wasAirborne) {
        compression = Math.max(
          compression,
          clamp(impactSpeed / 8, 0.55, 1),
        );
        const landingAngle = Math.abs(normalizeAngle(boardYaw - heading));
        const landingAlignment = Math.min(
          landingAngle,
          Math.abs(Math.PI - landingAngle),
        );
        switchRiding = landingAngle > Math.PI / 2;

        if (landingAlignment > 0.46) {
          crashed = true;
          crashReason = "landing-edge";
          crashSpin = Math.sign(normalizeAngle(boardYaw - heading)) || 1;
          crashTimer = EDGE_CATCH_RECOVERY;
        }
      }
    }
  }

  if (air > 0 || !wasAirborne) {
    compression *= Math.exp(-8 * delta);
  }

  const tweakTarget = air > 0 ? steer : 0;
  const tweakBlend =
    1 - Math.exp(-(Math.abs(tweakTarget) > Math.abs(state.tweak) ? 15 : 12) * delta);
  const tweak = state.tweak + (tweakTarget - state.tweak) * tweakBlend;

  const gForce = clamp(Math.abs(lateralAcceleration) / EARTH_GRAVITY, 0, 1.6);

  return freezeState({
    air,
    boardYaw,
    butter,
    compression,
    crashed,
    crashReason,
    crashSpin,
    crashTimer,
    edge,
    elapsed: state.elapsed + delta,
    frontEdge,
    frontFootPressure,
    gForce,
    heading,
    lean,
    position: {
      across: state.position.across + velocity.across * delta,
      downhill: state.position.downhill + velocity.downhill * delta,
    },
    popCharge,
    rearEdge,
    skid,
    slash,
    slipAngle,
    slopeGrade,
    speed,
    spinVelocity,
    stance: state.stance,
    steer,
    surface,
    switchRiding,
    turnRate,
    tweak,
    velocity,
    verticalVelocity,
  });
}
