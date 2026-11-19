const MIN_SPEED = 12;
const MAX_SPEED = 34;
const SPEED_RAMP_DISTANCE = 1200;
const SPEED_GAIN = 10;
const GRADE_GAIN = 0.12;
const MAX_STEP = 1 / 20;
const EARTH_GRAVITY = 9.81;
const AIR_GRAVITY = EARTH_GRAVITY;
const DEFAULT_SLOPE_GRADE = 0.34;
const CRASH_RECOVERY = 2;
const CROUCH_HEIGHT = 0.45;
const CROUCH_TRAVEL_TIME = 0.15;
const PRELOAD_FILL_TIME = 0.5;
const PRELOAD_DRAIN_TIME = 0.15;
const PRELOAD_HOLD_TIME = 1;
const LATE_POP_WINDOW = 0.08;

const SURFACE_PROFILES = Object.freeze({
  groomed: Object.freeze({ baseGrip: 1, drag: 1, edgeGrip: 1, skid: 1 }),
  ice: Object.freeze({ baseGrip: 0.16, drag: 0.45, edgeGrip: 0.25, skid: 0.7 }),
  powder: Object.freeze({ baseGrip: 0.7, drag: 1.85, edgeGrip: 0.76, skid: 1.12 }),
  slush: Object.freeze({ baseGrip: 0.85, drag: 1.8, edgeGrip: 0.74, skid: 1.35 }),
  chop: Object.freeze({ baseGrip: 0.82, drag: 1.3, edgeGrip: 0.82, skid: 1.2 }),
  rail: Object.freeze({ baseGrip: 0.02, drag: 0.3, edgeGrip: 0.02, skid: 0.3 }),
});

const TERRAIN_PROFILES = Object.freeze({
  groomed: Object.freeze({ amplitude: 0.055, roughness: 0.2 }),
  ice: Object.freeze({ amplitude: 0.012, roughness: 0.07 }),
  powder: Object.freeze({ amplitude: 0.34, roughness: 0.95 }),
  slush: Object.freeze({ amplitude: 0.14, roughness: 0.55 }),
  chop: Object.freeze({ amplitude: 0.24, roughness: 0.9 }),
  rail: Object.freeze({ amplitude: 0, roughness: 0 }),
});

const clamp = (value, minimum, maximum) =>
  Math.min(maximum, Math.max(minimum, value));
const finiteOr = (value, fallback) =>
  Number.isFinite(value) ? value : fallback;
const runProgress = (downhill) =>
  clamp(Math.max(0, finiteOr(downhill, 0)) / SPEED_RAMP_DISTANCE, 0, 1);

export function riderSpeedRangeAt(downhill) {
  const gain = runProgress(downhill) * SPEED_GAIN;
  return Object.freeze({ min: MIN_SPEED + gain, max: MAX_SPEED + gain });
}

export function baseSlopeHeightAt(downhill) {
  const d = finiteOr(downhill, 0);
  const progressed = clamp(d, 0, SPEED_RAMP_DISTANCE);
  const extraDrop = GRADE_GAIN * (progressed ** 2 /
    (2 * SPEED_RAMP_DISTANCE) + Math.max(0, d - SPEED_RAMP_DISTANCE));
  return -0.36 * d - extraDrop +
    (0.2 / 0.024) * (Math.cos(d * 0.024 - 0.3) - Math.cos(-0.3)) +
    (0.03 / 0.061) * (Math.cos(d * 0.061) - 1);
}
const normalizeAngle = (angle) =>
  Math.atan2(Math.sin(angle), Math.cos(angle));
const blend = (response, delta) => 1 - Math.exp(-response * delta);
const moveToward = (value, target, distance) =>
  value + clamp(target - value, -distance, distance);

const terrainWave = (across, downhill) =>
  Math.sin(downhill * 0.38 + across * 0.17) * 0.45 +
  Math.sin(downhill * 1.07 - across * 0.42 + 0.8) * 0.3 +
  Math.sin(downhill * 2.31 + across * 0.77 + 1.7) * 0.15 +
  Math.sin(downhill * 0.11 + across * 1.6) * 0.1;

export function sampleSnowTerrain(position = {}, surface = "groomed") {
  const across = finiteOr(position.across, 0);
  const downhill = finiteOr(position.downhill, 0);
  const profile = TERRAIN_PROFILES[surface] ?? TERRAIN_PROFILES.groomed;
  const sampleHeight = (x, z) => terrainWave(x, z) * profile.amplitude;
  const spacing = 0.08;
  const height = sampleHeight(across, downhill);
  const slope =
    (sampleHeight(across, downhill + spacing) -
      sampleHeight(across, downhill - spacing)) /
    (spacing * 2);
  const roll =
    (sampleHeight(across + spacing, downhill) -
      sampleHeight(across - spacing, downhill)) /
    (spacing * 2);

  return Object.freeze({
    height,
    roll,
    roughness:
      profile.roughness *
      (0.65 + clamp((Math.abs(slope) + Math.abs(roll)) * 0.9, 0, 0.35)),
    slope,
  });
}

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

const slopeHeight = (position, surface) => {
  const downhill = position.downhill;
  return baseSlopeHeightAt(downhill) +
    sampleSnowTerrain(position, surface).height;
};

const surfaceHeightAt = (position, surface, environment) =>
  typeof environment.surfaceHeight === "function"
    ? environment.surfaceHeight(position.across, position.downhill, surface)
    : slopeHeight(position, surface);

const surfaceNormalAt = (position, surface, environment) => {
  if (typeof environment.surfaceNormal === "function") {
    const normal = environment.surfaceNormal(position.across, position.downhill, surface);
    return { across: normal.x, up: normal.y, downhill: -normal.z };
  }
  const spacing = 0.12;
  const dx = (surfaceHeightAt({ ...position, across: position.across + spacing }, surface, environment) -
    surfaceHeightAt({ ...position, across: position.across - spacing }, surface, environment)) / (spacing * 2);
  const dd = (surfaceHeightAt({ ...position, downhill: position.downhill + spacing }, surface, environment) -
    surfaceHeightAt({ ...position, downhill: position.downhill - spacing }, surface, environment)) / (spacing * 2);
  const length = Math.hypot(dx, 1, dd);
  return { across: -dx / length, up: 1 / length, downhill: -dd / length };
};

export function createRiderState(overrides = {}) {
  const position = overrides.position ?? {};
  const requestedHeading = finiteOr(overrides.heading, 0);
  const requestedSpeed = Math.max(0, finiteOr(overrides.speed, 8));
  const suppliedVelocity = overrides.velocity;
  const velocity = suppliedVelocity
    ? {
        across: finiteOr(suppliedVelocity.across, 0),
        downhill: finiteOr(suppliedVelocity.downhill, requestedSpeed),
      }
    : velocityFromHeading(requestedSpeed, requestedHeading);
  const speed = Math.hypot(velocity.across, velocity.downhill);
  const heading = suppliedVelocity
    ? Math.atan2(velocity.across, velocity.downhill)
    : requestedHeading;
  const switchRiding = Boolean(overrides.switchRiding);
  const boardYaw = finiteOr(overrides.boardYaw, heading + (switchRiding ? Math.PI : 0));
  const surface = SURFACE_PROFILES[overrides.surface]
    ? overrides.surface
    : "groomed";
  const terrain = sampleSnowTerrain(position, surface);

  return freezeState({
    air: Math.max(0, finiteOr(overrides.air, 0)),
    airtime: Math.max(0, finiteOr(overrides.airtime, 0)),
    boardLightness: clamp(finiteOr(overrides.boardLightness, 0), 0, 1),
    boardOffset: finiteOr(
      overrides.boardOffset,
      normalizeAngle(boardYaw - heading - (switchRiding ? Math.PI : 0)),
    ),
    boardRotation: finiteOr(overrides.boardRotation, boardYaw),
    boardYaw,
    bodyHeave: finiteOr(overrides.bodyHeave, terrain.height),
    bumpImpact: clamp(finiteOr(overrides.bumpImpact, 0), 0, 1),
    butter: clamp(finiteOr(overrides.butter, 0), 0, 1),
    carveQuality: clamp(finiteOr(overrides.carveQuality, 0), 0, 1),
    chatter: clamp(finiteOr(overrides.chatter, 0), 0, 1),
    compression: clamp(finiteOr(overrides.compression, 0), 0, 1),
    crouchAmount: clamp(finiteOr(overrides.crouchAmount, 0), 0, 1),
    crouchHeld: Boolean(overrides.crouchHeld),
    crouchPressedAge: Math.max(0, finiteOr(overrides.crouchPressedAge, 10)),
    crashed: Boolean(overrides.crashed),
    crashReason: overrides.crashReason ?? null,
    crashSpin: finiteOr(overrides.crashSpin, 0),
    crashTimer: Math.max(0, finiteOr(overrides.crashTimer, 0)),
    edge: clamp(finiteOr(overrides.edge, 0), -1, 1),
    elapsed: Math.max(0, finiteOr(overrides.elapsed, 0)),
    flickBrake: Math.max(0, finiteOr(overrides.flickBrake, 0)),
    flickRecovery: Math.max(0, finiteOr(overrides.flickRecovery, 0)),
    frontEdge: clamp(finiteOr(overrides.frontEdge, overrides.edge ?? 0), -1, 1),
    frontFootPressure: clamp(finiteOr(overrides.frontFootPressure, 0.58), 0, 1),
    gForce: Math.max(0, finiteOr(overrides.gForce, 0)),
    grounded: overrides.grounded === undefined
      ? finiteOr(overrides.air, 0) <= 0
      : Boolean(overrides.grounded),
    heading,
    impactMeter: clamp(finiteOr(overrides.impactMeter, 0), 0, 100),
    landingImpact: Math.max(0, finiteOr(overrides.landingImpact, 0)),
    lean: clamp(finiteOr(overrides.lean, overrides.edge ?? 0), -1, 1),
    noseFloat: clamp(finiteOr(overrides.noseFloat, 0), 0, 1),
    popCharge: clamp(finiteOr(overrides.preload, overrides.popCharge ?? 0), 0, 1),
    popArcVelocity: Math.max(0, finiteOr(overrides.popArcVelocity, 0)),
    popElapsed: Math.max(0, finiteOr(overrides.popElapsed, 0)),
    popped: Boolean(overrides.popped),
    position: {
      across: finiteOr(position.across, 0),
      downhill: finiteOr(position.downhill, 0),
    },
    pressAmount: clamp(finiteOr(overrides.pressAmount, 0), -1, 1),
    preload: clamp(finiteOr(overrides.preload, overrides.popCharge ?? 0), 0, 1),
    preloadReleaseAge: Math.max(0, finiteOr(overrides.preloadReleaseAge, PRELOAD_HOLD_TIME + 1)),
    rearEdge: clamp(finiteOr(overrides.rearEdge, overrides.edge ?? 0), -1, 1),
    skid: clamp(finiteOr(overrides.skid, 0), 0, 1),
    slash: clamp(finiteOr(overrides.slash, 0), 0, 1),
    slipAngle: finiteOr(overrides.slipAngle, normalizeAngle(boardYaw - heading)),
    slopeGrade: clamp(
      finiteOr(overrides.slopeGrade, DEFAULT_SLOPE_GRADE),
      0,
      0.78,
    ),
    speed,
    spinVelocity: finiteOr(overrides.spinVelocity, 0),
    angularMomentum: finiteOr(overrides.angularMomentum,
      finiteOr(overrides.spinVelocity, 0) * 1),
    stanceHeight: clamp(finiteOr(overrides.stanceHeight,
      1 - clamp(finiteOr(overrides.crouchAmount, 0), 0, 1) * (1 - CROUCH_HEIGHT)),
    0, 1),
    stance: overrides.stance === "goofy" ? "goofy" : "regular",
    steer: clamp(finiteOr(overrides.steer, 0), -1, 1),
    steerHold: Math.max(0, finiteOr(overrides.steerHold, 0)),
    surface,
    switchRiding,
    turnRate: finiteOr(overrides.turnRate, 0),
    tweak: clamp(finiteOr(overrides.tweak, 0), -1, 1),
    terrainHeight: finiteOr(overrides.terrainHeight, terrain.height),
    terrainLaunchCooldown: Math.max(0, finiteOr(overrides.terrainLaunchCooldown, 0)),
    terrainPitch: finiteOr(overrides.terrainPitch, terrain.slope),
    terrainRoll: finiteOr(overrides.terrainRoll, terrain.roll),
    torsoYaw: finiteOr(overrides.torsoYaw, heading + (switchRiding ? Math.PI : 0)),
    torsoRotation: finiteOr(overrides.torsoRotation, heading + (switchRiding ? Math.PI : 0)),
    velocity,
    verticalVelocity: finiteOr(overrides.verticalVelocity, 0),
    worldHeight: finiteOr(overrides.worldHeight,
      slopeHeight({ across: finiteOr(position.across, 0), downhill: finiteOr(position.downhill, 0) }, surface) +
        Math.max(0, finiteOr(overrides.air, 0))),
    worldVerticalVelocity: finiteOr(overrides.worldVerticalVelocity,
      finiteOr(overrides.verticalVelocity, 0) +
        velocity.downhill * (terrain.slope - sampleSlopeGrade(finiteOr(position.downhill, 0))) +
        velocity.across * terrain.roll),
    washout: clamp(finiteOr(overrides.washout, 0), 0, 1),
  });
}

export function crashRiderOnHazard(state, hazard = {}) {
  if (state.crashed) return state;
  const spin = Math.sign(
    state.velocity.across || hazard.x - state.position.across || state.edge || 1,
  );
  return createRiderState({
    ...state,
    air: 0,
    angularMomentum: 0,
    compression: 1,
    crashed: true,
    crashReason: "hazard",
    crashSpin: spin,
    crashTimer: CRASH_RECOVERY,
    grounded: true,
    popArcVelocity: 0,
    popElapsed: 0,
    popped: false,
    velocity: {
      across: state.velocity.across * 0.45,
      downhill: state.velocity.downhill * 0.45,
    },
  });
}

const sampleSlopeGrade = (downhill) =>
  0.36 + GRADE_GAIN * runProgress(downhill) +
  Math.sin(downhill * 0.024 - 0.3) * 0.2 +
  Math.sin(downhill * 0.061) * 0.03;

const stepCrashedRider = (state, delta, slopeGrade, surface) => {
  const slideFriction = surface === "ice" ? 0.5 : surface === "powder" ? 3.4 : 1.9;
  const damping = Math.exp(-slideFriction * delta);
  const velocity = {
    across: state.velocity.across * damping,
    downhill: state.velocity.downhill * damping + EARTH_GRAVITY * Math.sin(slopeGrade) * delta,
  };
  const position = {
    across: state.position.across + velocity.across * delta,
    downhill: state.position.downhill + velocity.downhill * delta,
  };
  const terrain = sampleSnowTerrain(position, surface);
  const speed = Math.hypot(velocity.across, velocity.downhill);
  const heading = Math.atan2(velocity.across, velocity.downhill);
  const crashTimer = Math.max(0, state.crashTimer - delta);
  const recovered = crashTimer <= 0;
  const boardYaw = recovered
    ? heading + (state.switchRiding ? Math.PI : 0)
    : normalizeAngle(state.boardYaw + state.crashSpin * 2.3 * delta);

  return freezeState({
    ...state,
    boardRotation: state.boardRotation + normalizeAngle(boardYaw - state.boardYaw),
    boardYaw,
    boardOffset: 0,
    butter: state.butter * Math.exp(-9 * delta),
    bumpImpact: state.bumpImpact * Math.exp(-10 * delta),
    carveQuality: 0,
    chatter: state.chatter * Math.exp(-8 * delta),
    compression: state.compression * Math.exp(-5 * delta),
    crashed: !recovered,
    crashReason: recovered ? null : state.crashReason,
    crashSpin: recovered ? 0 : state.crashSpin,
    crashTimer,
    edge: recovered ? 0 : state.edge * Math.exp(-6 * delta),
    elapsed: state.elapsed + delta,
    flickBrake: 0,
    flickRecovery: 0,
    gForce: 0,
    grounded: true,
    heading,
    impactMeter: Math.max(0, state.impactMeter - 25 * delta),
    landingImpact: state.landingImpact * Math.exp(-3 * delta),
    lean: recovered ? 0 : state.lean * Math.exp(-4 * delta),
    position,
    popArcVelocity: 0,
    popElapsed: 0,
    popped: false,
    angularMomentum: 0,
    pressAmount: 0,
    skid: recovered ? 0 : 1,
    slash: state.slash * Math.exp(-8 * delta),
    slipAngle: recovered ? 0 : normalizeAngle(state.boardYaw - heading),
    slopeGrade,
    speed,
    surface,
    terrainHeight: terrain.height,
    terrainPitch: terrain.slope,
    terrainRoll: terrain.roll,
    torsoYaw: state.torsoYaw,
    velocity,
    washout: 0,
  });
};

export function stepRider(state, input = {}, deltaSeconds = 0, environment = {}) {
  const delta = clamp(finiteOr(deltaSeconds, 0), 0, MAX_STEP);
  const speedRange = riderSpeedRangeAt(state.position.downhill);
  const slopeGrade = clamp(
    finiteOr(environment.slopeGrade, sampleSlopeGrade(state.position.downhill)),
    0,
    0.78,
  );
  const surface = SURFACE_PROFILES[environment.surface]
    ? environment.surface
    : state.surface;
  const profile = SURFACE_PROFILES[surface];
  if (state.crashed) return stepCrashedRider(state, delta, slopeGrade, surface);

  const carve = clamp(finiteOr(input.carve, 0), -1, 1);
  const steer = clamp(finiteOr(input.steer, 0), -1, 1);
  const crouch = clamp(finiteOr(input.crouch, 0), 0, 1);
  const stretch = clamp(finiteOr(input.stretch, 0), 0, 1);
  const press = clamp(finiteOr(input.press, 0), -1, 1);
  const grounded = state.grounded ?? (state.air <= 0);
  const crouchHeld = crouch > 0.5;
  const crouchPressedAge = crouchHeld && !state.crouchHeld
    ? 0
    : state.crouchPressedAge + delta;
  const preloadReleaseAge = crouchHeld
    ? 0
    : state.crouchHeld ? delta : state.preloadReleaseAge + delta;
  const stanceHeight = moveToward(
    state.stanceHeight,
    grounded
      ? 1 - (1 - CROUCH_HEIGHT) * crouch
      : crouchHeld ? 0 : stretch > 0.5 ? 1 : state.stanceHeight,
    (grounded ? 1 - CROUCH_HEIGHT : 1) * delta / CROUCH_TRAVEL_TIME,
  );
  const crouchAmount = clamp((1 - stanceHeight) / (1 - CROUCH_HEIGHT), 0, 1);
  let preload = grounded
    ? clamp(state.preload + delta * (crouchHeld ? 1 / PRELOAD_FILL_TIME :
      preloadReleaseAge <= PRELOAD_HOLD_TIME ? 0 : -1 / PRELOAD_DRAIN_TIME), 0, 1)
    : state.preload;
  const pressAmount = state.pressAmount + (press - state.pressAmount) * blend(7, delta);
  const lean = state.lean + (carve - state.lean) * blend(6.3, delta);
  const edgeTarget = lean * (0.75 + crouchAmount * 0.25);
  const toeSide = edgeTarget * (state.stance === "goofy" ? -1 : 1) >= 0;
  const frontEdge = state.frontEdge +
    (edgeTarget - state.frontEdge) * blend(toeSide ? 10.8 : 8.8, delta);
  const rearEdge = state.rearEdge +
    (edgeTarget - state.rearEdge) * blend(toeSide ? 6.1 : 5.1, delta);
  const edge = frontEdge * 0.58 + rearEdge * 0.42;
  const edgeAmount = Math.abs(edge);
  const edgeChange =
    Math.sign(edge) !== Math.sign(state.edge) &&
    Math.abs(state.edge) > 0.015 &&
    edgeAmount > 0.015;

  const boardSide = {
    across: Math.cos(state.boardYaw),
    downhill: -Math.sin(state.boardYaw),
  };
  const lateralSpeed = state.velocity.across * boardSide.across +
    state.velocity.downhill * boardSide.downhill;
  const caughtEdge =
    grounded && surface !== "powder" && surface !== "rail" &&
    (edgeChange && Math.sign(edge) === Math.sign(lateralSpeed) ||
      Math.sign(carve) !== Math.sign(state.edge) &&
        Math.sign(carve) === Math.sign(lateralSpeed) &&
        Math.abs(state.edge) > 0.15) &&
    Math.abs(lateralSpeed) > 3.8 && state.speed > 16 &&
    Math.abs(steer) < 0.05 && state.flickRecovery <= 0;
  const railEdgeCatch = grounded && surface === "rail" && edgeAmount > 0.22;
  if (caughtEdge || railEdgeCatch) {
    const velocity = {
      across: state.velocity.across * 0.62,
      downhill: state.velocity.downhill * 0.62,
    };
    return freezeState({
      ...state,
      compression: 1,
      crashed: true,
      crashReason: railEdgeCatch ? "rail-edge" : "edge-catch",
      crashSpin: Math.sign(lateralSpeed || edge) || 1,
      crashTimer: CRASH_RECOVERY,
      edge,
      elapsed: state.elapsed + delta,
      frontEdge,
      gForce: 1.6,
      lean,
      position: {
        across: state.position.across + velocity.across * delta,
        downhill: state.position.downhill + velocity.downhill * delta,
      },
      rearEdge,
      skid: 1,
      slopeGrade,
      speed: Math.hypot(velocity.across, velocity.downhill),
      surface,
      velocity,
    });
  }

  const projectedPosition = {
    across: state.position.across + state.velocity.across * delta,
    downhill: state.position.downhill + state.velocity.downhill * delta,
  };
  const terrain = sampleSnowTerrain(projectedPosition, surface);
  const terrainVerticalSpeed = delta > 0
    ? (terrain.height - state.terrainHeight) / delta
    : 0;
  const bumpTarget = grounded
    ? clamp(
        Math.abs(terrainVerticalSpeed) * (0.09 + state.speed * 0.004) *
          terrain.roughness * (1 - crouchAmount * 0.8),
        0,
        1,
      )
    : 0;
  const bumpImpact = state.bumpImpact +
    (bumpTarget - state.bumpImpact) * blend(bumpTarget > state.bumpImpact ? 18 : 9, delta);
  const bodyHeaveTarget = clamp(terrain.height, state.bodyHeave - 0.4, state.bodyHeave + 0.4);
  const bodyHeave = state.bodyHeave +
    (bodyHeaveTarget - state.bodyHeave) * blend(3.4, delta);
  const frontFootPressure = clamp(
    (surface === "powder" ? 0.43 : 0.54) - pressAmount * 0.24 +
      Math.abs(carve - state.lean) * 0.17,
    0.16,
    0.84,
  );
  const noseFloat = surface === "powder" && grounded
    ? clamp(state.speed / 24 * 0.7 + (1 - frontFootPressure) * 0.9 - 0.24, 0, 1)
    : 0;

  const steerHold = Math.abs(steer) > 0.05
    ? Math.sign(steer) === Math.sign(state.steer)
      ? state.steerHold + delta
      : delta
    : 0;
  const buttering = grounded && crouch > 0.62 && Math.abs(steer) > 0.3;
  const wasButtering = state.butter > 0.5 && Math.abs(state.steer) > 0.3;
  const butterTarget = buttering ? 1 : 0;
  const butter = state.butter +
    (butterTarget - state.butter) * blend(butterTarget > state.butter ? 12 : 10, delta);
  const newFlick = grounded && !buttering && Math.abs(steer) > 0.05 &&
    Math.sign(steer) !== Math.sign(state.steer);
  let flickBrake = newFlick ? 0.1 : state.flickBrake;
  const flickBrakeStep = Math.min(delta, flickBrake);
  flickBrake = Math.max(0, flickBrake - delta);
  const boardLightness = newFlick
    ? 1
    : state.boardLightness * Math.exp(-5 * delta);
  let flickRecovery = Math.max(0, state.flickRecovery - delta);
  if (Math.abs(steer) < 0.05 && Math.abs(state.steer) > 0.05) {
    flickRecovery = 0.3;
  }

  let boardOffset = state.boardOffset;
  let switchRiding = state.switchRiding;
  if (grounded && buttering) {
    boardOffset += steer * (4.2 + Math.abs(pressAmount) * 0.5) * delta;
  } else if (grounded && wasButtering && Math.abs(steer) < 0.05) {
    const halfTurns = Math.round(boardOffset / Math.PI);
    if (Math.abs(halfTurns) % 2 === 1) switchRiding = !switchRiding;
    boardOffset -= halfTurns * Math.PI;
    boardOffset -= clamp(boardOffset, -9.2 * delta, 9.2 * delta);
  } else if (grounded && Math.abs(steer) > 0.05) {
    const heldSlash = clamp((steerHold - 0.08) / 0.22, 0, 1);
    const targetOffset = steer * (0.92 + heldSlash * 0.48);
    const boardRate = 2.1 + 7.1 * boardLightness *
      (1 - edgeAmount * 0.55 - crouchAmount * 0.35);
    boardOffset += clamp(targetOffset - boardOffset, -boardRate * delta, boardRate * delta);
  } else if (grounded) {
    boardOffset -= clamp(boardOffset, -9.2 * delta, 9.2 * delta);
  }

  const speedForForces = Math.max(state.speed, 0.001);
  const travel = {
    across: state.velocity.across / speedForForces,
    downhill: state.velocity.downhill / speedForForces,
  };
  const turnSide = { across: travel.downhill, downhill: -travel.across };
  const radius = 18 - edgeAmount * 12;
  const requestedCarveForce = edgeAmount * speedForForces ** 2 / radius *
    (1 + crouchAmount * 0.3) * (state.impactMeter > 70 ? 0.72 : 1);
  const gripLimit = EARTH_GRAVITY * profile.edgeGrip *
    (0.6 + edgeAmount * 1.6) * (1 + crouchAmount * 0.3);
  const washout = grounded && surface !== "rail" && requestedCarveForce > 0
    ? clamp((requestedCarveForce - gripLimit) / requestedCarveForce, 0, 1)
    : 0;
  const crossHillLimit = 1 - clamp((Math.abs(state.heading) - 1.05) / 0.38, 0, 1);
  const carveForce = grounded && surface !== "rail"
    ? Math.sign(edge) * Math.min(requestedCarveForce, gripLimit) * crossHillLimit
    : 0;
  const sidewaysForce = grounded && !buttering && surface !== "rail"
    ? clamp(
        -lateralSpeed * profile.baseGrip *
          (0.12 + clamp((steerHold - 0.16) / 0.32, 0, 1) * 0.08) *
          (1 + crouchAmount * 0.3),
        -2.6,
        2.6,
      )
    : 0;
  const heldSkid = clamp((steerHold - 0.14) / 0.3, 0, 1);
  const skidBrake = grounded && !buttering
    ? heldSkid * (1.4 + Math.abs(boardOffset) * 1.5) * profile.skid
    : 0;
  const powderSink = surface === "powder" ? 1 - noseFloat : 0;
  const pumpGain = grounded && terrain.slope < -0.05 &&
    state.crouchAmount > crouchAmount && !buttering
    ? (state.crouchAmount - crouchAmount) * 1.4 *
      clamp(-terrain.slope / 0.15, 0, 1)
    : 0;
  const baseFriction = grounded
    ? profile.drag * (0.22 + powderSink * 0.24 + Math.abs(pressAmount) * 0.05)
    : 0;
  const airDrag = grounded
    ? state.speed ** 2 * 0.0032 * (1 - crouchAmount * 0.35)
    : 0;
  const flickBrakeForce = grounded && !buttering && flickBrakeStep > 0 && delta > 0
    ? state.speed * 0.06 * flickBrakeStep / (0.1 * delta)
    : 0;
  const dragForce = baseFriction + airDrag + skidBrake + flickBrakeForce;
  const acceleration = grounded
    ? {
        across:
          turnSide.across * carveForce +
          boardSide.across * sidewaysForce -
          travel.across * dragForce -
          EARTH_GRAVITY * terrain.roll * 0.18,
        downhill:
          EARTH_GRAVITY * Math.sin(slopeGrade) +
          turnSide.downhill * carveForce +
          boardSide.downhill * sidewaysForce -
          travel.downhill * dragForce,
      }
    : { across: 0, downhill: 0 };
  let velocity = grounded
    ? {
        across: state.velocity.across + acceleration.across * delta + travel.across * pumpGain,
        downhill: state.velocity.downhill + acceleration.downhill * delta + travel.downhill * pumpGain,
      }
    : { ...state.velocity };
  let speed = Math.hypot(velocity.across, velocity.downhill);
  if (grounded && (speed < speedRange.min ||
      speed > speedRange.max * (1 - crouchAmount * 0.1))) {
    const adjusted = clamp(speed, speedRange.min,
      speedRange.max * (1 - crouchAmount * 0.1));
    const ratio = adjusted / Math.max(speed, 0.001);
    velocity = { across: velocity.across * ratio, downhill: velocity.downhill * ratio };
    speed = adjusted;
  }
  let heading = Math.atan2(velocity.across, velocity.downhill);
  let turnRate = grounded && delta > 0
    ? normalizeAngle(heading - state.heading) / delta
    : state.turnRate;
  let boardYaw = grounded
    ? normalizeAngle(heading + (switchRiding ? Math.PI : 0) + boardOffset)
    : state.boardYaw;
  let angularMomentum = grounded ? 0 : state.angularMomentum;
  let spinVelocity = grounded ? 0 : state.spinVelocity;
  const jumpPressed = finiteOr(input.jump, 0) > 0;
  const canJump = jumpPressed && (grounded ||
    state.airtime > 0 && state.airtime <= LATE_POP_WINDOW && !state.popped);
  const terrainLaunchCooldown = Math.max(0, state.terrainLaunchCooldown - delta);
  const terrainLaunch = grounded && surface !== "rail" &&
    terrainLaunchCooldown <= 0 && state.speed > 20 &&
    ((state.terrainPitch > 0.1 && terrain.slope < 0) ||
      (finiteOr(environment.lipDistance, Infinity) >= 0 &&
        finiteOr(environment.lipDistance, Infinity) <= state.velocity.downhill * delta));
  let nextPosition = {
    across: state.position.across + velocity.across * delta,
    downhill: state.position.downhill + velocity.downhill * delta,
  };
  const currentGround = surfaceHeightAt(state.position, surface, environment);
  let nextGround = surfaceHeightAt(nextPosition, surface, environment);
  const takeoffNormal = surfaceNormalAt(state.position, surface, environment);
  let groundVerticalSpeed = delta > 0
    ? (nextGround - currentGround) / delta
    : 0;
  const lookAhead = {
    across: state.position.across + velocity.across * 0.1,
    downhill: state.position.downhill + velocity.downhill * 0.1,
  };
  const timeToLip = finiteOr(environment.timeToLip, Infinity);
  const lipDistance = finiteOr(environment.lipDistance, Infinity);
  const nearLip = terrainLaunch ||
    (state.terrainPitch > 0.08 &&
      sampleSnowTerrain(lookAhead, surface).slope < 0) ||
    (timeToLip >= 0 && timeToLip <= 0.1) ||
    (lipDistance >= 0 && lipDistance <= speed * 0.1);
  const timingBonus = grounded && nearLip ? 1.15 : 1;
  const popPreload = state.preload;
  const pop = canJump
    ? (3 + (6 - 3) * popPreload) * timingBonus *
      (grounded ? 1 : 0.5)
    : 0;
  let popped = state.popped;
  let popArcVelocity = state.popArcVelocity;
  let popElapsed = state.popElapsed;
  let worldHeight = grounded ? currentGround : state.worldHeight;
  let worldVerticalVelocity = grounded
    ? groundVerticalSpeed
    : state.worldVerticalVelocity;
  let verticalVelocity = state.verticalVelocity;
  let launchCooldown = terrainLaunch ? 0.7 : terrainLaunchCooldown;
  if (terrainLaunch && !canJump) {
    // Keep the takeoff tangent; the falling surface creates clearance naturally.
    const before = {
      across: state.position.across - velocity.across * Math.max(delta, 1 / 120),
      downhill: state.position.downhill - velocity.downhill * Math.max(delta, 1 / 120),
    };
    const lipTangent = (currentGround - surfaceHeightAt(before, surface, environment)) /
      Math.max(delta, 1 / 120);
    worldVerticalVelocity = groundVerticalSpeed +
      (lipTangent - groundVerticalSpeed) * (1 - crouchAmount * 0.85);
  }
  if (canJump) {
    velocity = {
      across: velocity.across + takeoffNormal.across * pop,
      downhill: velocity.downhill + takeoffNormal.downhill * pop,
    };
    nextPosition = {
      across: state.position.across + velocity.across * delta,
      downhill: state.position.downhill + velocity.downhill * delta,
    };
    nextGround = surfaceHeightAt(nextPosition, surface, environment);
    groundVerticalSpeed = delta > 0 ? (nextGround - currentGround) / delta : 0;
    speed = Math.hypot(velocity.across, velocity.downhill);
    heading = Math.atan2(velocity.across, velocity.downhill);
    boardYaw = grounded
      ? normalizeAngle(heading + (switchRiding ? Math.PI : 0) + boardOffset)
      : boardYaw;
    worldVerticalVelocity += takeoffNormal.up * pop;
    verticalVelocity = takeoffNormal.up * pop;
    angularMomentum = grounded
      ? clamp(steer * (2.6 + popPreload * 1.5) + turnRate * 0.12, -6, 6)
      : clamp(angularMomentum + steer * 0.18, -6, 6);
    preload = 0;
    popped = true;
    popArcVelocity = pop * takeoffNormal.up;
    popElapsed = 0;
  }
  let air = state.air;
  let airtime = state.airtime;
  let compression = Math.max(state.compression * Math.exp(-8 * delta), bumpImpact * 0.72);
  let landingImpact = state.landingImpact * Math.exp(-4 * delta);
  let impactMeter = Math.max(0, state.impactMeter -
    (5 + 8 * (1 - clamp(speed / MAX_SPEED, 0, 1))) * delta +
    (grounded ? bumpImpact * 2.4 * delta : 0));
  let crashed = false;
  let crashReason = null;
  let crashSpin = 0;
  let crashTimer = 0;
  let skid = state.skid;
  if (!grounded || canJump || terrainLaunch) {
    if (!grounded && Math.abs(steer) > 0.05 &&
      Math.sign(steer) !== Math.sign(state.steer)) {
      angularMomentum = clamp(angularMomentum + steer * 0.22, -6, 6);
    }
    if (!grounded) angularMomentum = clamp(angularMomentum + carve * 0.08 * delta, -6, 6);
    const inertia = 0.6 + stanceHeight * 0.4;
    spinVelocity = angularMomentum / inertia;
    boardYaw = normalizeAngle(boardYaw +
      (spinVelocity + (grounded ? 0 : carve * 0.35)) * delta);
    airtime = grounded ? delta : airtime + delta;
    if (popArcVelocity > 0) popElapsed += delta;
    worldHeight += worldVerticalVelocity * delta;
    worldVerticalVelocity -= AIR_GRAVITY * delta;
    // Small powder waves should not swallow a deliberate ollie on the next frame.
    const protectedPopArc = Math.max(0,
      popArcVelocity * popElapsed - AIR_GRAVITY * popElapsed ** 2 * 0.5);
    air = Math.max(worldHeight - nextGround, protectedPopArc);
    const landingNormal = surfaceNormalAt(nextPosition, surface, environment);
    const tangentVerticalSpeed = -(
      landingNormal.across * velocity.across +
      landingNormal.downhill * velocity.downhill
    ) / Math.max(landingNormal.up, 0.1);
    verticalVelocity = worldVerticalVelocity - tangentVerticalSpeed;
    if (air <= 0) {
      const wasAirborne = !grounded;
      air = 0;
      worldHeight = nextGround;
      if (wasAirborne) {
        const vn = Math.max(0, -(
          velocity.across * landingNormal.across +
          worldVerticalVelocity * landingNormal.up +
          velocity.downhill * landingNormal.downhill
        ));
        const boardToTravel = Math.abs(normalizeAngle(
          boardYaw + state.tweak * 1.35 - heading));
        const alignment = Math.min(boardToTravel, Math.PI - boardToTravel);
        const misalign = clamp(alignment + Math.abs(spinVelocity) * 0.04, 0, Math.PI / 2);
        const freshAbsorb = crouchHeld && crouchPressedAge <= 0.12;
        const absorb = freshAbsorb ? 0.4 : crouchHeld ? 0.15 : 0;
        landingImpact = vn * (1 + 1.5 * Math.sin(misalign)) * (1 - absorb);
        impactMeter = clamp(impactMeter + landingImpact, 0, 100);
        compression = Math.max(compression, clamp(landingImpact / 8, 0.5, 1));
        switchRiding = boardToTravel > Math.PI / 2;
        if (misalign > Math.PI / 4 || impactMeter >= 100) {
          crashed = true;
          crashReason = misalign > Math.PI / 4 ? "landing-edge" : "impact-overload";
          crashSpin = Math.sign(normalizeAngle(boardYaw - heading)) || 1;
          crashTimer = CRASH_RECOVERY;
        } else if (misalign >= Math.PI / 12) {
          const severity = clamp((misalign - Math.PI / 12) / (Math.PI / 4 - Math.PI / 12), 0, 1);
          skid = Math.max(skid, 0.35 + severity * 0.45);
          flickRecovery = 0.3;
          const retention = 1 - severity * 0.24;
          velocity = {
            across: velocity.across * retention,
            downhill: velocity.downhill * retention,
          };
          speed = Math.hypot(velocity.across, velocity.downhill);
          const landingMinSpeed = riderSpeedRangeAt(nextPosition.downhill).min;
          if (speed < landingMinSpeed) {
            const ratio = landingMinSpeed / Math.max(speed, 0.001);
            velocity = { across: velocity.across * ratio, downhill: velocity.downhill * ratio };
            speed = landingMinSpeed;
          }
        }
        if (!crashed && misalign < Math.PI / 12 && freshAbsorb) preload = 0.5;
        boardOffset = normalizeAngle(boardYaw - heading - (switchRiding ? Math.PI : 0));
      }
      worldVerticalVelocity = tangentVerticalSpeed;
      verticalVelocity = 0;
      angularMomentum = 0;
      spinVelocity = 0;
      airtime = 0;
      popped = false;
      popArcVelocity = 0;
      popElapsed = 0;
    }
  } else {
    worldHeight = nextGround;
    worldVerticalVelocity = groundVerticalSpeed;
    verticalVelocity = 0;
    air = 0;
    airtime = 0;
    popped = false;
    popArcVelocity = 0;
    popElapsed = 0;
  }

  const slipAngle = normalizeAngle(boardYaw - heading);
  const skidTarget = grounded
    ? clamp(
        Math.abs(boardOffset) / 1.5 * (0.3 + heldSkid * 0.4) *
          (1 - (Math.sign(edge) === Math.sign(steer) ? edgeAmount * 0.35 : 0)) +
          washout * 0.6,
        0,
        0.95,
      )
    : 0;
  skid = Math.max(skid, state.skid + (skidTarget - state.skid) * blend(10, delta));
  if (grounded && skidTarget < state.skid) {
    skid = Math.max(0, state.skid + (skidTarget - state.skid) * blend(10, delta));
  }
  const carveQuality = grounded && surface !== "rail"
    ? clamp(
        edgeAmount * 1.6 * (1 - washout * 0.7) *
          (1 - clamp(Math.abs(boardOffset) / 0.7, 0, 1) * 0.85),
        0,
        1,
      )
    : 0;
  const slashTarget = grounded
    ? clamp((newFlick ? 1 : 0) + Math.abs(steer) * skid * 0.5, 0, 1)
    : 0;
  const slash = newFlick
    ? 1
    : state.slash +
      (slashTarget - state.slash) * blend(slashTarget > state.slash ? 28 : 11, delta);
  const chatter = grounded
    ? clamp(
        terrain.roughness * (0.12 + speed / MAX_SPEED * 0.38) +
          edgeAmount * (1 - profile.edgeGrip) * 0.55,
        0,
        1,
      )
    : 0;
  const desiredTorsoYaw = normalizeAngle(
    air > 0 ? boardYaw - spinVelocity * 0.1 : heading + (switchRiding ? Math.PI : 0),
  );
  const torsoYaw = normalizeAngle(
    state.torsoYaw + normalizeAngle(desiredTorsoYaw - state.torsoYaw) *
      blend(air > 0 ? 12 : 5, delta),
  );
  const boardRotation = state.boardRotation + normalizeAngle(boardYaw - state.boardYaw);
  const torsoRotation = state.torsoRotation + normalizeAngle(torsoYaw - state.torsoYaw);
  const tweakTarget = air > 0 ? steer : 0;
  const tweak = state.tweak +
    (tweakTarget - state.tweak) * blend(Math.abs(tweakTarget) > Math.abs(state.tweak) ? 18 : 14, delta);

  return freezeState({
    air,
    airtime,
    boardLightness,
    boardOffset,
    boardRotation,
    boardYaw,
    bodyHeave,
    bumpImpact,
    butter,
    carveQuality,
    chatter,
    compression,
    crouchAmount,
    crouchHeld,
    crouchPressedAge,
    crashed,
    crashReason,
    crashSpin,
    crashTimer,
    edge,
    elapsed: state.elapsed + delta,
    flickBrake,
    flickRecovery,
    frontEdge,
    frontFootPressure,
    gForce: clamp(Math.abs(carveForce) / EARTH_GRAVITY, 0, 1.8),
    grounded: air <= 0,
    heading,
    impactMeter,
    landingImpact,
    lean,
    noseFloat,
    popCharge: preload,
    popArcVelocity,
    popElapsed,
    popped,
    position: nextPosition,
    pressAmount,
    preload,
    preloadReleaseAge,
    rearEdge,
    skid,
    slash,
    slipAngle,
    slopeGrade,
    speed,
    angularMomentum,
    spinVelocity,
    stance: state.stance,
    stanceHeight,
    steer,
    steerHold,
    surface,
    switchRiding,
    turnRate,
    tweak,
    terrainHeight: terrain.height,
    terrainLaunchCooldown: launchCooldown,
    terrainPitch: terrain.slope,
    terrainRoll: terrain.roll,
    torsoYaw,
    torsoRotation,
    velocity,
    verticalVelocity,
    worldHeight,
    worldVerticalVelocity,
    washout,
  });
}
