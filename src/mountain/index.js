import {
  projectCoursePoint,
  slopeHalfAtY,
  visibleSlopeChunks,
} from "./course.js";

/** Shared dimensions used by the game loop for spawning and edge collisions. */
export const COURSE = Object.freeze({
  halfWidth: 9.5,
  spawnDistance: 44,
});

const clamp = (value, minimum, maximum) =>
  Math.min(maximum, Math.max(minimum, value));

const screenUnit = (canvas) => clamp(canvas.width / 850, 0.75, 1.35);

const slopeX = (canvas, y, riderAcross, side) =>
  canvas.width / 2 +
  (side - riderAcross / COURSE.halfWidth) * slopeHalfAtY(canvas, y);

const traceEdge = (context, canvas, riderAcross, side) => {
  for (let step = 0; step <= 28; step += 1) {
    const y = canvas.height * (0.22 + (0.78 * step) / 28);
    const x = slopeX(canvas, y, riderAcross, side);
    if (step === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  }
};

const drawSnowBank = (context, canvas, riderAcross, side) => {
  context.beginPath();
  traceEdge(context, canvas, riderAcross, side);
  for (let step = 28; step >= 0; step -= 1) {
    const y = canvas.height * (0.22 + (0.78 * step) / 28);
    const depth = step / 28;
    const thickness = canvas.width * (0.006 + depth * 0.025);
    context.lineTo(slopeX(canvas, y, riderAcross, side) + side * thickness, y);
  }
  context.closePath();
  context.fillStyle = "#d2eefa";
  context.fill();

  context.beginPath();
  traceEdge(context, canvas, riderAcross, side);
  context.strokeStyle = "#f7fdff";
  context.lineWidth = Math.max(4, canvas.width * 0.007);
  context.stroke();
};

const drawMountainLayer = (context, canvas, peaks, base, color, snowcap) => {
  for (const [center, height, width] of peaks) {
    const x = canvas.width * center;
    const top = canvas.height * height;
    const bottom = canvas.height * base;
    const half = canvas.width * width * 0.5;

    context.fillStyle = color;
    context.beginPath();
    context.moveTo(x - half, bottom);
    context.lineTo(x, top);
    context.lineTo(x + half, bottom);
    context.closePath();
    context.fill();

    context.fillStyle = snowcap;
    context.beginPath();
    context.moveTo(x - half * 0.23, top + (bottom - top) * 0.23);
    context.lineTo(x, top);
    context.lineTo(x + half * 0.23, top + (bottom - top) * 0.23);
    context.lineTo(x + half * 0.08, top + (bottom - top) * 0.2);
    context.lineTo(x, top + (bottom - top) * 0.27);
    context.lineTo(x - half * 0.08, top + (bottom - top) * 0.2);
    context.closePath();
    context.fill();
  }
};

const drawBackground = (context, canvas, riderAcross) => {
  const sky = context.createLinearGradient(0, 0, 0, canvas.height * 0.62);
  sky.addColorStop(0, "#77cef8");
  sky.addColorStop(1, "#eefbff");
  context.fillStyle = sky;
  context.fillRect(0, 0, canvas.width, canvas.height);

  drawMountainLayer(
    context, canvas,
    [[-0.03, 0.14, 0.32], [0.22, 0.06, 0.34], [0.49, 0.12, 0.36], [0.78, 0.05, 0.36], [1.06, 0.13, 0.36]],
    0.42, "#9ec4d3", "#effaff",
  );
  drawMountainLayer(
    context, canvas,
    [[0.07, 0.29, 0.3], [0.36, 0.24, 0.34], [0.67, 0.28, 0.32], [0.96, 0.23, 0.34]],
    0.49, "#c4e0e9", "#ffffff",
  );

  context.fillStyle = "#dceff8";
  context.fillRect(0, canvas.height * 0.45, canvas.width, canvas.height);

  // The playable surface is intentionally plain so hazards remain readable.
  context.fillStyle = "#ffffff";
  context.beginPath();
  traceEdge(context, canvas, riderAcross, -1);
  for (let step = 28; step >= 0; step -= 1) {
    const y = canvas.height * (0.22 + (0.78 * step) / 28);
    context.lineTo(slopeX(canvas, y, riderAcross, 1), y);
  }
  context.closePath();
  context.fill();

  for (const side of [-1, 1]) {
    drawSnowBank(context, canvas, riderAcross, side);
  }

  for (const side of [-1, 1]) {
    context.beginPath();
    traceEdge(context, canvas, riderAcross, side);
    context.strokeStyle = "rgba(57, 147, 177, 0.54)";
    context.lineWidth = Math.max(2, canvas.width * 0.0024);
    context.stroke();

    context.beginPath();
    traceEdge(context, canvas, riderAcross, side);
    context.strokeStyle = "rgba(34, 211, 238, 0.38)";
    context.lineWidth = Math.max(1, canvas.width * 0.0012);
    context.stroke();
  }
};

const trailPoint = (canvas, riderAcross, travel, sample) => {
  const behind = Math.max(0, travel - sample.downhill);
  const y = canvas.height * 0.78 + behind * Math.max(3.5, canvas.height * 0.006);
  const x = canvas.width / 2 +
    ((sample.across - riderAcross) / COURSE.halfWidth) * slopeHalfAtY(canvas, y);
  return { x, y, behind };
};

const drawPowderTrail = (context, canvas, riderAcross, travel, samples) => {
  if (samples.length < 2) return;

  const points = samples
    .map((sample) => trailPoint(canvas, riderAcross, travel, sample))
    .filter((point) => point.y <= canvas.height + 25);
  if (points.length < 2) return;

  // A soft displaced-snow channel with loose powder on both sides.
  context.lineCap = "round";
  context.lineJoin = "round";
  for (const [width, color] of [
    [34, "rgba(128, 199, 225, 0.22)"],
    [25, "rgba(244, 252, 255, 0.95)"],
  ]) {
    context.beginPath();
    context.moveTo(points[0].x, points[0].y);
    for (const point of points.slice(1)) context.lineTo(point.x, point.y);
    context.strokeStyle = color;
    context.lineWidth = width * screenUnit(canvas);
    context.stroke();
  }

  for (let index = 0; index < points.length; index += 2) {
    const point = points[index];
    const freshness = clamp(1 - point.behind / 32, 0, 1);
    const spread = (18 + (index % 3) * 6) * screenUnit(canvas);
    const radius = (5 + (index % 4) * 1.5) * screenUnit(canvas) * freshness;
    if (radius < 0.5) continue;
    for (const side of [-1, 1]) {
      context.fillStyle = `rgba(119, 190, 218, ${0.34 * freshness})`;
      context.beginPath();
      context.arc(point.x + side * spread, point.y + radius * 0.4, radius * 1.35, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = `rgba(255, 255, 255, ${0.9 * freshness})`;
      context.beginPath();
      context.arc(point.x + side * spread, point.y, radius, 0, Math.PI * 2);
      context.fill();
    }
  }
};

const drawSnowSpray = (context, canvas, carve, travel) => {
  const unit = screenUnit(canvas);
  const centerX = canvas.width / 2;
  const baseY = canvas.height * 0.78;
  const force = clamp(Math.abs(carve), 0, 1);

  for (const side of [-1, 1]) {
    const sideForce = 0.55 + (side * carve > 0 ? force * 0.95 : force * 0.35);
    for (let index = 0; index < 9; index += 1) {
      const phase = (travel * 2.6 + index * 0.73) % 9;
      const x = centerX + side * (24 + phase * (4.5 + force * 3)) * unit;
      const y = baseY + (phase * 2.7 + Math.sin(index * 2.1) * 4) * unit;
      const radius = (3 + (9 - phase) * 0.7) * unit * sideForce;
      context.fillStyle = "rgba(119, 190, 218, 0.28)";
      context.beginPath();
      context.arc(x, y + radius * 0.4, radius * 1.25, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = "rgba(255, 255, 255, 0.94)";
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    }
  }
};

const drawPine = (context, x, y, size) => {
  context.fillStyle = "rgba(45, 104, 114, 0.14)";
  context.beginPath();
  context.ellipse(x + size * 0.12, y + size * 0.05, size * 0.42, size * 0.1, 0, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = "#84512c";
  context.fillRect(x - size * 0.045, y - size * 0.29, size * 0.09, size * 0.31);

  for (let layer = 0; layer < 3; layer += 1) {
    const peak = y - size * (1 - layer * 0.23);
    const base = y - size * (0.25 - layer * 0.09);
    const half = size * (0.28 + layer * 0.11);
    context.fillStyle = layer === 1 ? "#178462" : "#12694f";
    context.beginPath();
    context.moveTo(x, peak);
    context.lineTo(x - half, base);
    context.lineTo(x + half, base);
    context.closePath();
    context.fill();

    context.strokeStyle = "rgba(222, 250, 255, 0.8)";
    context.lineWidth = Math.max(1, size * 0.025);
    context.beginPath();
    context.moveTo(x, peak);
    context.lineTo(x - half * 0.33, peak + (base - peak) * 0.53);
    context.stroke();
  }
};

const drawRock = (context, x, y, size) => {
  context.fillStyle = "rgba(45, 104, 114, 0.13)";
  context.beginPath();
  context.ellipse(x + size * 0.1, y + size * 0.05, size * 0.52, size * 0.13, 0, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = "#64788a";
  context.beginPath();
  context.moveTo(x - size * 0.44, y);
  context.lineTo(x - size * 0.34, y - size * 0.33);
  context.lineTo(x + size * 0.06, y - size * 0.47);
  context.lineTo(x + size * 0.39, y - size * 0.25);
  context.lineTo(x + size * 0.46, y);
  context.closePath();
  context.fill();

  context.fillStyle = "#91a9b6";
  context.beginPath();
  context.moveTo(x - size * 0.34, y - size * 0.33);
  context.lineTo(x + size * 0.06, y - size * 0.47);
  context.lineTo(x + size * 0.16, y - size * 0.31);
  context.lineTo(x - size * 0.21, y - size * 0.23);
  context.closePath();
  context.fill();

  context.strokeStyle = "#f6fdff";
  context.lineWidth = Math.max(2, size * 0.055);
  context.beginPath();
  context.moveTo(x - size * 0.21, y - size * 0.32);
  context.lineTo(x + size * 0.03, y - size * 0.42);
  context.lineTo(x + size * 0.16, y - size * 0.33);
  context.stroke();
};

const drawSideScenery = (context, canvas, riderAcross, travel) => {
  const props = visibleSlopeChunks(travel, COURSE.spawnDistance, {
    halfWidth: COURSE.halfWidth,
  }).flatMap((chunk) => chunk.scenery);

  props.sort((a, b) => b.z - a.z);
  for (const prop of props) {
    const z = prop.z - travel;
    if (z < 0 || z > COURSE.spawnDistance) continue;

    const projected = projectCoursePoint(
      canvas, riderAcross, { x: prop.x, z }, COURSE,
    );
    const size = 82 * screenUnit(canvas) * projected.scale * prop.size;
    context.save();
    context.globalAlpha = projected.alpha * 0.86;
    if (prop.kind === "rock") drawRock(context, projected.x, projected.y, size * 0.7);
    else drawPine(context, projected.x, projected.y, size);
    context.restore();
  }
};

const drawJumpHazard = (context, canvas, projected) => {
  const width = projected.pathHalf * 1.88;
  const height = 18 * screenUnit(canvas) * projected.scale;
  const { x, y } = projected;

  // A pale takeoff lip makes the fallen log read as a jump from a distance.
  context.fillStyle = "#bdeaf5";
  context.beginPath();
  context.moveTo(x - width * 0.43, y + height * 1.25);
  context.lineTo(x - width * 0.37, y - height * 0.6);
  context.lineTo(x + width * 0.37, y - height * 0.6);
  context.lineTo(x + width * 0.43, y + height * 1.25);
  context.closePath();
  context.fill();

  context.fillStyle = "#6d3b1e";
  context.fillRect(x - width / 2, y - height, width, height);
  context.fillStyle = "#b87739";
  context.fillRect(x - width / 2, y - height, width, height * 0.28);
  context.strokeStyle = "#432714";
  context.lineWidth = Math.max(2, height * 0.12);
  context.strokeRect(x - width / 2, y - height, width, height);

  for (const side of [-1, 1]) {
    context.fillStyle = "#dcb383";
    context.beginPath();
    context.ellipse(x + side * width * 0.48, y - height * 0.5, height * 0.3, height * 0.48, 0, 0, Math.PI * 2);
    context.fill();
  }
};

const drawBird = (context, canvas, projected) => {
  const scale = screenUnit(canvas) * projected.scale;
  const x = projected.x;
  const y = projected.y - 82 * scale;
  const wing = projected.pathHalf * 0.86;

  context.fillStyle = "#243347";
  context.beginPath();
  context.ellipse(x, y, 18 * scale, 10 * scale, 0, 0, Math.PI * 2);
  context.fill();
  context.strokeStyle = "#243347";
  context.lineCap = "round";
  context.lineWidth = Math.max(3, 7 * scale);
  context.beginPath();
  context.moveTo(x - 8 * scale, y);
  context.quadraticCurveTo(x - wing * 0.58, y - 31 * scale, x - wing, y + 2 * scale);
  context.moveTo(x + 8 * scale, y);
  context.quadraticCurveTo(x + wing * 0.58, y - 31 * scale, x + wing, y + 2 * scale);
  context.stroke();
  context.fillStyle = "#f6c44f";
  context.beginPath();
  context.moveTo(x, y + 2 * scale);
  context.lineTo(x - 4 * scale, y + 10 * scale);
  context.lineTo(x + 4 * scale, y + 10 * scale);
  context.closePath();
  context.fill();
};

const drawBranch = (context, canvas, projected) => {
  const scale = screenUnit(canvas) * projected.scale;
  const y = projected.y - 76 * scale;
  const half = projected.pathHalf * 0.88;
  const x = projected.x;

  context.strokeStyle = "#613d24";
  context.lineCap = "round";
  context.lineWidth = Math.max(5, 11 * scale);
  context.beginPath();
  context.moveTo(x - half, y - 9 * scale);
  context.quadraticCurveTo(x, y + 11 * scale, x + half, y - 9 * scale);
  context.stroke();

  context.fillStyle = "#19765b";
  for (const offset of [-0.72, -0.36, 0.08, 0.47, 0.77]) {
    context.beginPath();
    context.ellipse(x + half * offset, y - 10 * scale, 16 * scale, 8 * scale, offset * 0.25, 0, Math.PI * 2);
    context.fill();
  }
};

const drawHazards = (context, canvas, riderAcross, hazards) => {
  for (const hazard of [...hazards].sort((a, b) => b.z - a.z)) {
    if (hazard.z < -2 || hazard.z > COURSE.spawnDistance) continue;

    const projected = projectCoursePoint(canvas, riderAcross, hazard, COURSE);
    context.save();
    context.globalAlpha = projected.alpha;

    if (hazard.kind === "jump") {
      drawJumpHazard(context, canvas, projected);
    } else if (hazard.kind === "duck") {
      if (hazard.variant === "bird") drawBird(context, canvas, projected);
      else drawBranch(context, canvas, projected);
    } else {
      const size = 82 * screenUnit(canvas) * projected.scale;
      if (hazard.variant === "rock") drawRock(context, projected.x, projected.y, size * 0.7);
      else drawPine(context, projected.x, projected.y, size);
    }

    context.restore();
  }
};

/** Mountain owner: render the course before the rider is drawn each frame. */
export default async function setupMountain(game) {
  const context = game.canvas.getContext("2d");
  if (!context) throw new Error("Mountain rendering requires a 2D canvas context");

  let travel = 0;
  let trail = [];
  let course = { hazards: [], phase: "idle" };

  game.events.addEventListener("course:update", (event) => {
    course = {
      hazards: Array.isArray(event.detail?.hazards) ? event.detail.hazards : [],
      phase: event.detail?.phase ?? "idle",
    };
  });

  game.events.addEventListener("rider:update", (event) => {
    const riderAcross = Number(event.detail?.state?.position?.across) || 0;
    const downhill = Number(event.detail?.state?.position?.downhill) || 0;
    if (course.phase === "idle") {
      travel = 0;
      trail = [];
    } else if (course.phase === "running") {
      travel = Math.max(0, downhill);
      if ((event.detail?.state?.air ?? 0) < 0.08 &&
          (trail.length === 0 || travel - trail.at(-1).downhill >= 0.45)) {
        trail.push({ across: riderAcross, downhill: travel });
      }
      trail = trail.filter((sample) => travel - sample.downhill < 42);
    }

    context.save();
    drawBackground(context, game.canvas, riderAcross);
    drawPowderTrail(context, game.canvas, riderAcross, travel, trail);
    if (course.phase === "running" && (event.detail?.state?.air ?? 0) < 0.08) {
      drawSnowSpray(context, game.canvas, Number(event.detail?.input?.carve) || 0, travel);
    }
    drawSideScenery(context, game.canvas, riderAcross, travel);
    drawHazards(context, game.canvas, riderAcross, course.hazards);
    context.restore();
  });
}
