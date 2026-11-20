import { sideHitFeatureNear } from "../mountain/terrain3d.js";

const finiteOr = (value, fallback = 0) => Number.isFinite(value) ? value : fallback;

export const createAirScoreTracker = () => Object.freeze({ active: null });

/** Track one flight from a marked lip to a completed landing. */
export function stepAirScore(tracker, previous, current, pose = {}) {
  const wasGrounded = Boolean(previous?.grounded ?? previous?.air <= 0);
  const isGrounded = Boolean(current?.grounded ?? current?.air <= 0);
  let active = tracker?.active ?? null;
  let award = null;

  if (wasGrounded && !isGrounded) {
    const feature = sideHitFeatureNear(
      finiteOr(current?.position?.downhill), finiteOr(current?.position?.across), 6,
    );
    active = feature ? {
      featureId: feature.id,
      takeoffRotation: finiteOr(current?.boardRotation),
      peakAir: finiteOr(current?.air),
      maxRotation: 0,
      grabTime: 0,
    } : null;
  }

  if (active && !isGrounded) {
    const delta = Math.max(0, Math.min(0.1,
      finiteOr(current?.elapsed) - finiteOr(previous?.elapsed)));
    active = {
      ...active,
      peakAir: Math.max(active.peakAir, finiteOr(current?.air)),
      maxRotation: Math.max(active.maxRotation,
        Math.abs(finiteOr(current?.boardRotation) - active.takeoffRotation)),
      grabTime: active.grabTime + (finiteOr(pose.grab) > 0.5 ? delta : 0),
    };
  }

  if (active && !wasGrounded && isGrounded) {
    if (!current.crashed && active.peakAir >= 0.45) {
      const halfTurns = Math.floor((active.maxRotation + 0.32) / Math.PI);
      const grabbed = active.grabTime >= 0.12;
      const points = Math.round(150 + halfTurns * 140 +
        (grabbed ? 80 : 0) + Math.min(100, active.peakAir * 15));
      award = Object.freeze({
        featureId: active.featureId,
        label: ["SIDE HIT", halfTurns ? `${halfTurns * 180}°` : null,
          grabbed ? "GRAB" : null].filter(Boolean).join(" · "),
        points,
      });
    }
    active = null;
  }

  if (current?.crashed) active = null;
  return Object.freeze({ tracker: Object.freeze({ active }), award });
}
