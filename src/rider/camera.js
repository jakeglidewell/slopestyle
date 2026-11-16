const MAX_STEP = 1 / 20;
const CAMERA_RESPONSE = 4;
const DOWNHILL_LOOK_AHEAD = 8;

const clamp = (value, minimum, maximum) =>
  Math.min(maximum, Math.max(minimum, value));

const finiteOr = (value, fallback = 0) =>
  Number.isFinite(value) ? value : fallback;

const freezeCamera = (position) =>
  Object.freeze({
    position: Object.freeze(position),
  });

export function createCameraState(overrides = {}) {
  const position = overrides.position ?? {};

  return freezeCamera({
    across: finiteOr(position.across),
    downhill: finiteOr(position.downhill),
  });
}

export function stepCamera(camera, rider, deltaSeconds = 0) {
  const delta = clamp(finiteOr(deltaSeconds), 0, MAX_STEP);
  const blend = 1 - Math.exp(-CAMERA_RESPONSE * delta);
  const heading = finiteOr(rider.heading);
  const targetAcross = finiteOr(rider.position?.across) + Math.sin(heading) * 2;
  const targetDownhill =
    finiteOr(rider.position?.downhill) + DOWNHILL_LOOK_AHEAD;

  return freezeCamera({
    across:
      camera.position.across +
      (targetAcross - camera.position.across) * blend,
    downhill:
      camera.position.downhill +
      (targetDownhill - camera.position.downhill) * blend,
  });
}
