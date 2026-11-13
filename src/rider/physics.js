const MIN_SPEED = 4;
const MAX_SPEED = 28;
const MAX_STEP = 1 / 20;
const EDGE_RESPONSE = 8;
const TURN_STRENGTH = 1.7;
const MAX_HEADING = 1.15;

const clamp = (value, minimum, maximum) =>
  Math.min(maximum, Math.max(minimum, value));

const finiteOr = (value, fallback) =>
  Number.isFinite(value) ? value : fallback;

const freezeState = (state) =>
  Object.freeze({
    ...state,
    position: Object.freeze({ ...state.position }),
  });

export function createRiderState(overrides = {}) {
  const position = overrides.position ?? {};

  return freezeState({
    edge: clamp(finiteOr(overrides.edge, 0), -1, 1),
    elapsed: Math.max(0, finiteOr(overrides.elapsed, 0)),
    heading: finiteOr(overrides.heading, 0),
    position: {
      across: finiteOr(position.across, 0),
      downhill: finiteOr(position.downhill, 0),
    },
    speed: Math.max(0, finiteOr(overrides.speed, 8)),
  });
}

export function stepRider(state, input = {}, deltaSeconds = 0) {
  const delta = clamp(finiteOr(deltaSeconds, 0), 0, MAX_STEP);
  const carve = clamp(finiteOr(input.carve, 0), -1, 1);
  const edgeBlend = 1 - Math.exp(-EDGE_RESPONSE * delta);
  const edge = state.edge + (carve - state.edge) * edgeBlend;
  const normalizedSpeed = clamp(
    (state.speed - MIN_SPEED) / (MAX_SPEED - MIN_SPEED),
    0,
    1,
  );
  const steeringResponse = 0.35 + normalizedSpeed * 0.65;
  const heading = clamp(
    state.heading + edge * TURN_STRENGTH * steeringResponse * delta,
    -MAX_HEADING,
    MAX_HEADING,
  );
  const carveDrag = Math.abs(edge) ** 1.5 * 3.2;
  const downhillPull = Math.max(0.2, Math.cos(heading)) * 5.5;
  const speed = clamp(
    state.speed + (downhillPull - 0.8 - carveDrag) * delta,
    MIN_SPEED,
    MAX_SPEED,
  );
  const distance = speed * delta;

  return freezeState({
    edge,
    elapsed: state.elapsed + delta,
    heading,
    position: {
      across: state.position.across + Math.sin(heading) * distance,
      downhill: state.position.downhill + Math.cos(heading) * distance,
    },
    speed,
  });
}
