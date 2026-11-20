/**
 * How a touchdown turns out. This is the knob that decides how forgiving the
 * game is: where a clean landing ends and where a crash begins.
 */

/** Board angle off the travel line, in radians, under which a landing is clean. */
export const CLEAN_LANDING_ANGLE = Math.PI / 9;
/** Board angle off the travel line past which a hard enough landing catches an edge. */
export const CRASH_LANDING_ANGLE = Math.PI / 3;
// Touchdown speeds, in m/s: softer than the first a crooked board is let off,
// softer than the second even a sideways board only stumbles.
export const SOFT_TOUCH = 1.2;
const EDGE_CATCH = 2.5;
/** Seconds a sketchy landing leaves the rider stumbling. */
export const STUMBLE_TIME = 0.45;

/**
 * misalign: how far off line the board is judged to be (radians, 0 to PI / 2).
 *           After a pop that is its angle off the travel line, plus a little for
 *           leftover spin. After a float the rider did not pop (a slash carried
 *           off a roller) it is only how much further the board turned in the air.
 * impact:   how fast the rider met the hill, square to the slope (m/s).
 * meter:    the impact meter after this landing; 100 is a ragdoll.
 *
 * Returns "clean" (ride away), "sketchy" (a stumble that is ridden out) or "crash".
 * The physics also reads the two angles above: how deep into the sketchy range a
 * landing is sets how much speed the stumble scrubs, and a crash past the crash
 * angle is reported as an edge catch (any other crash as an impact overload).
 */
export function landingVerdict({ misalign, impact, meter }) {
  if (meter >= 100) return "crash";
  if (misalign > CRASH_LANDING_ANGLE && impact > EDGE_CATCH) return "crash";
  if (misalign >= CLEAN_LANDING_ANGLE && impact > SOFT_TOUCH) return "sketchy";
  return "clean";
}
