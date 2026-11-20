import { smoothHeight } from "./legs.js";

const MAX_STEP = 1 / 20;
const CAMERA_RESPONSE = 4;
const DOWNHILL_LOOK_AHEAD = 8;
// The 3D chase rig, in metres: where the camera sits and what it looks at.
const RIG_BEHIND = 6.2;
const RIG_BEHIND_AIR = 2.3;
const RIG_LEFT = 1.3;
const RIG_UP = 2.55;
const RIG_UP_AIR = 3.8;
const RIG_CLEARANCE = 1;
const RIG_DIP = 0.25;
const LOOK_AHEAD = 15;
const LOOK_AHEAD_AIR = 20;
const LOOK_RIGHT = 3;
const LOOK_INTO_TURN = 5.8;
const LOOK_UP = 3.7;
// Seconds the rig takes to settle onto a new height.
const RIG_SETTLE = 0.35;

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

/**
 * Follow the rider. Given `terrain` ({ height(across, downhill) }) the camera also
 * carries `rig`: where the 3D chase camera sits and what it looks at, in the
 * scene's axes (z is minus downhill). Its heights hang off the hill's smooth line
 * under the rider and ease toward where they belong, so ripples under the camera
 * never reach the picture.
 */
export function stepCamera(camera, rider, deltaSeconds = 0, terrain = undefined) {
  const delta = clamp(finiteOr(deltaSeconds), 0, MAX_STEP);
  const blend = 1 - Math.exp(-CAMERA_RESPONSE * delta);
  const heading = finiteOr(rider.heading);
  const targetAcross = finiteOr(rider.position?.across) + Math.sin(heading) * 2;
  const targetDownhill =
    finiteOr(rider.position?.downhill) + DOWNHILL_LOOK_AHEAD;

  const next = freezeCamera(
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
  if (typeof terrain?.height !== "function") return next;

  const across = finiteOr(rider.position?.across);
  const downhill = finiteOr(rider.position?.downhill);
  const heightAt = (x, d) => terrain.height(x, d);
  const line = smoothHeight(heightAt, across, downhill);
  const airborne = clamp(finiteOr(rider.air) / 2, 0, 1);
  const cameraAcross = next.position.across - RIG_LEFT;
  const cameraDownhill = downhill - RIG_BEHIND - airborne * RIG_BEHIND_AIR;
  const lookAcross = across + LOOK_RIGHT + Math.sin(heading) * LOOK_INTO_TURN;
  const lookDownhill = downhill + LOOK_AHEAD + airborne * LOOK_AHEAD_AIR;
  const body = finiteOr(rider.worldHeight, line + finiteOr(rider.air));
  // Wanted heights above the hill's line under the rider.
  const wantRise = Math.max(
    smoothHeight(heightAt, cameraAcross, cameraDownhill) + RIG_UP,
    body + airborne * RIG_UP_AIR,
  ) - line;
  const wantLookRise = smoothHeight(heightAt, lookAcross, lookDownhill) + LOOK_UP - line;
  const settle = 1 - Math.exp(-delta / RIG_SETTLE);
  const rise = Number.isFinite(camera.rise)
    ? camera.rise + (wantRise - camera.rise) * settle
    : wantRise;
  const lookRise = Number.isFinite(camera.lookRise)
    ? camera.lookRise + (wantLookRise - camera.lookRise) * settle
    : wantLookRise;
  const height = Math.max(
    line + rise - clamp(next.dip, 0, 1) * RIG_DIP,
    terrain.height(cameraAcross, cameraDownhill) + RIG_CLEARANCE,
  );
  const lookHeight = line + lookRise;

  return Object.freeze({
    ...next,
    height,
    lookHeight,
    lookRise,
    rig: Object.freeze({
      position: Object.freeze({ x: cameraAcross, y: height, z: -cameraDownhill }),
      target: Object.freeze({ x: lookAcross, y: lookHeight, z: -lookDownhill }),
    }),
    rise,
  });
}
