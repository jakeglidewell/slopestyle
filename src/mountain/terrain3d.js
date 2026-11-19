import { sampleSnowTerrain } from "../rider/physics.js";
import { courseReliefAt } from "./course.js";

const finiteOr = (value, fallback = 0) =>
  Number.isFinite(value) ? value : fallback;

/** World-space snow height. The grade is integrated from the rider's slope model. */
export function snowSurfaceHeight(across, downhill, surface = "powder") {
  const x = finiteOr(across);
  const d = finiteOr(downhill);
  const grade =
    -0.36 * d +
    (0.2 / 0.024) * (Math.cos(d * 0.024 - 0.3) - Math.cos(-0.3)) +
    (0.03 / 0.061) * (Math.cos(d * 0.061) - 1);
  const shoulder = Math.max(0, Math.abs(x) - 9.5);
  const bank = shoulder ** 1.8 * 0.021 +
    Math.sin(d * 0.065 + x * 0.12) * shoulder * 0.025;
  const broadRoll = Math.sin(d * 0.075 + x * 0.095) * 0.22 +
    Math.sin(d * 0.19 - x * 0.16) * 0.085;
  const localSnow = sampleSnowTerrain({ across: x, downhill: d }, surface).height;

  return grade + courseReliefAt(d) * 0.48 + bank + broadRoll + localSnow;
}

/** Normal in the 3D scene's coordinates, where downhill is negative Z. */
export function snowSurfaceNormal(across, downhill, surface = "powder") {
  const spacing = 0.25;
  const dx = (
    snowSurfaceHeight(across + spacing, downhill, surface) -
    snowSurfaceHeight(across - spacing, downhill, surface)
  ) / (spacing * 2);
  const dz = (
    snowSurfaceHeight(across, downhill - spacing, surface) -
    snowSurfaceHeight(across, downhill + spacing, surface)
  ) / (spacing * 2);
  const length = Math.hypot(dx, 1, dz);

  return Object.freeze({ x: -dx / length, y: 1 / length, z: -dz / length });
}
