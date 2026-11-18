const MAX_STEP = 1 / 20;
const CAMERA_RESPONSE = 4;
const DOWNHILL_LOOK_AHEAD = 8;

const clamp = (value, minimum, maximum) =>
  Math.min(maximum, Math.max(minimum, value));

const finiteOr = (value, fallback = 0) =>
  Number.isFinite(value) ? value : fallback;

const freezeCamera = (position, roll = 0, zoom = 1, dip = 0) =>
  Object.freeze({
    dip,
    position: Object.freeze(position),
    roll,
    zoom,
  });

export function createCameraState(overrides = {}) {
  const position = overrides.position ?? {};

  return freezeCamera(
    {
      across: finiteOr(position.across),
      downhill: finiteOr(position.downhill),
    },
    finiteOr(overrides.roll),
    finiteOr(overrides.zoom, 1),
    finiteOr(overrides.dip),
  );
}

export function stepCamera(camera, rider, deltaSeconds = 0) {
  const delta = clamp(finiteOr(deltaSeconds), 0, MAX_STEP);
  const blend = 1 - Math.exp(-CAMERA_RESPONSE * delta);
  const heading = finiteOr(rider.heading);
  const targetAcross = finiteOr(rider.position?.across) + Math.sin(heading) * 2;
  const targetDownhill =
    finiteOr(rider.position?.downhill) + DOWNHILL_LOOK_AHEAD;

  return freezeCamera(
    {
      across:
        camera.position.across +
        (targetAcross - camera.position.across) * blend,
      downhill:
        camera.position.downhill +
        (targetDownhill + clamp(finiteOr(rider.air), 0, 2) * 1.5 -
          camera.position.downhill) * blend,
    },
    finiteOr(camera.roll) +
      (clamp(finiteOr(rider.lean) * 0.04, -0.045, 0.045) - finiteOr(camera.roll)) *
        (1 - Math.exp(-2.8 * delta)),
    finiteOr(camera.zoom, 1) +
      (1 - clamp(finiteOr(rider.speed) / 34, 0, 1) * 0.14 -
        finiteOr(camera.zoom, 1)) * (1 - Math.exp(-2 * delta)),
    finiteOr(camera.dip) +
      (clamp(finiteOr(rider.landingImpact) / 9, 0, 1) - finiteOr(camera.dip)) *
        (1 - Math.exp(-8 * delta)),
  );
}
