/** Measurements the rider's model and its animation both work from, in metres. */

// Half the distance between the shoulder joints.
export const SHOULDER_SPAN = 0.258;

// Loose arms hanging by the hips: where each hand rests relative to its own
// shoulder (x toward the toes, y up, out away from the body), lead hand first.
export const REST_ARMS = Object.freeze([
  Object.freeze({ x: 0.2, y: -0.57, out: 0.23 }),
  Object.freeze({ x: -0.02, y: -0.6, out: 0.21 }),
]);
