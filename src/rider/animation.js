const clamp = (value, minimum, maximum) =>
  Math.min(maximum, Math.max(minimum, value));

export function getRiderPose(state, input = {}) {
  const edgeAmount = Math.abs(state.edge);
  const requestedCrouch = clamp(
    Number.isFinite(input.crouch) ? input.crouch : 0,
    0,
    1,
  );

  return Object.freeze({
    boardRoll: state.edge * 0.45,
    boardYaw: state.heading,
    bob: Math.sin(state.elapsed * state.speed * 0.45) * 0.025,
    crouch: clamp(0.12 + edgeAmount * 0.42 + requestedCrouch * 0.46, 0, 1),
    lean: state.edge * 0.55,
    upperBodyTwist: state.edge * -0.25,
  });
}
