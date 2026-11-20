import { REST_ARMS, SHOULDER_SPAN } from "./rig.js";

const clamp = (value, minimum, maximum) =>
  Math.min(maximum, Math.max(minimum, value));

/** One smooth rise and fall over 0..1. */
const swell = (progress) => Math.sin(Math.PI * clamp(progress, 0, 1)) ** 2;

/**
 * Where the hands go, as offsets from each shoulder (x toward the toes, y up,
 * out away from the body), lead hand first. Everything is optional; with nothing
 * passed the arms hang loose.
 *
 * `float`, `sway` and `swing` are how far the arms currently trail the body:
 * metres up, lean still to catch up, and radians turned about the spine.
 */
export function armTargets({
  airborne = 0, airOpen = 0, airStyle = 0, collapse = 0, crouch = 0.3, drift = 0,
  elapsed = 0, float = 0, lead: leadExtra, lift = 0, speed = 0, stumble = 0,
  sway = 0, swing = 0, switchRiding = false, tilt = 0, trail: trailExtra,
} = {}) {
  // `lead` is whichever hand is going first: the other one when riding switch.
  // `tilt` is positive toward the toes whichever way the rider is going.
  const lead = { ...REST_ARMS[0] };
  const trail = { ...REST_ARMS[1] };
  const low = Math.max(0, crouch - 0.3);
  const toe = Math.max(0, tilt);
  const heel = Math.max(0, -tilt);
  // Tucked in the air the hands stay down by the knees instead of rising with them.
  const lifted = low * (1 - airborne * 0.7);
  for (const arm of [lead, trail]) {
    // Getting low brings the hands forward and up off the knees; sitting back on
    // the heels brings them forward for balance; in the air they open a little.
    arm.x += lifted * 0.16 + heel * 0.22 - sway * 0.3;
    arm.y += lifted * 0.18 + airborne * 0.08 + airOpen * 0.06 + lift * 0.08 + collapse * 0.3;
    arm.out += lifted * 0.07 + airborne * 0.07 + airOpen * 0.1 - speed * 0.03 + collapse * 0.3;
  }
  lead.y += float;
  trail.y += float * 0.85;
  // Toe side: the back hand reaches down for the snow and the front one rises.
  trail.x += toe * 0.12 - speed * 0.06;
  trail.y -= toe * 0.2 + heel * 0.05;
  trail.out += toe * 0.1 + heel * 0.12;
  lead.x += airborne * 0.1;
  lead.y += toe * 0.12 + heel * 0.08;
  trail.x -= airborne * 0.08;
  lead.out += toe * 0.08;
  // Styling an air: front hand points down the line, back hand trails high.
  lead.x += airStyle * 0.12;
  lead.y -= airStyle * 0.06;
  trail.x -= airStyle * 0.12;
  trail.y += airStyle * 0.12;
  trail.out += airStyle * 0.08;
  // Never perfectly still.
  lead.x += drift * 0.012;
  lead.y += drift * 0.02;
  trail.y -= drift * 0.016;
  // Catching balance: both arms fly up and out, a beat apart.
  lead.x -= stumble * 0.05;
  lead.y += stumble * (0.3 + Math.sin(elapsed * 13) * 0.1);
  lead.out += stumble * 0.22;
  trail.x -= stumble * 0.12;
  trail.y += stumble * (0.24 + Math.sin(elapsed * 13 + 2.1) * 0.1);
  trail.out += stumble * 0.26;
  for (const [arm, extra] of [[lead, leadExtra], [trail, trailExtra]]) {
    if (!extra) continue;
    arm.x += extra.x ?? 0;
    arm.y += extra.y ?? 0;
    arm.out += extra.out ?? 0;
  }
  if (swing) {
    // Both arms turn together about the spine, the way a positive board yaw turns.
    const cos = Math.cos(swing);
    const sin = Math.sin(swing);
    for (const [arm, side] of switchRiding ? [[lead, 1], [trail, -1]] : [[lead, -1], [trail, 1]]) {
      const across = side * (SHOULDER_SPAN + arm.out);
      const x = arm.x * cos - across * sin;
      arm.out = side * (arm.x * sin + across * cos) - SHOULDER_SPAN;
      arm.x = x;
    }
  }
  return Object.freeze(switchRiding ? [Object.freeze(trail), Object.freeze(lead)]
    : [Object.freeze(lead), Object.freeze(trail)]);
}

/**
 * Small moves the rider makes unprompted on a quiet straight. Each lasts
 * `seconds` and returns what it adds to the pose at `progress` 0..1. None of
 * them reach the physics: the board's real line never changes.
 */
export const FLOURISHES = Object.freeze({
  // A loose left-right wiggle of the board under still shoulders.
  shimmy: Object.freeze({
    seconds: 0.9,
    at(progress) {
      const wave = Math.sin(2 * Math.PI * progress) * Math.sin(Math.PI * progress);
      return { styleYaw: wave * 0.22, styleRoll: wave * 0.06, crouch: swell(progress) * 0.03 };
    },
  }),
  // Sink into the knees and bounce back out.
  pump: Object.freeze({
    seconds: 0.85,
    at(progress) {
      const rebound = swell((progress - 0.5) / 0.5);
      return { crouch: swell(progress / 0.62) * 0.13 - rebound * 0.05,
        stylePitch: rebound * 0.04 };
    },
  }),
  // Rock back onto the tail and float the nose for a moment.
  press: Object.freeze({
    seconds: 0.95,
    at(progress) {
      const hold = swell(progress);
      return { stylePitch: hold * 0.09, foreAft: -hold * 0.5, spineSide: hold * 0.09,
        crouch: hold * 0.05 };
    },
  }),
  // Dip a shoulder and trail the back hand toward the snow.
  reach: Object.freeze({
    seconds: 1.2,
    at(progress) {
      const hold = swell(progress);
      return { crouch: hold * 0.1, spineSide: hold * 0.1, headLook: hold * 0.12,
        trail: { x: -hold * 0.1, y: -hold * 0.17, out: hold * 0.1 } };
    },
  }),
});

const FLOURISH_ORDER = Object.freeze(
  ["shimmy", "pump", "reach", "press", "pump", "shimmy", "press", "reach"]);

export const flourishAfter = (count) => FLOURISH_ORDER[count % FLOURISH_ORDER.length];

/** Seconds of quiet riding before move number `count`: uneven, but repeatable. */
export const flourishGap = (count) => {
  const noise = Math.sin(count * 127.1 + 311.7) * 43758.5453;
  return 2.2 + (noise - Math.floor(noise)) * 2.1;
};
