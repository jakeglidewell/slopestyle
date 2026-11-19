import {
  biomeAt,
  CHUNK_LENGTH,
  courseBendAt,
  courseViewAcross,
  HORIZON_Y,
  projectCoursePoint,
  RIDER_Y,
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

const screenUnit = (canvas) => clamp(Math.min(canvas.width / 1100, canvas.height / 700), 0.72, 1.75);

const depthAtY = (canvas, y) => {
  const eased = clamp((y / canvas.height - HORIZON_Y) / (RIDER_Y - HORIZON_Y), 0, 1);
  let low = 0;
  let high = 1;
  for (let step = 0; step < 12; step += 1) {
    const middle = (low + high) / 2;
    if (middle * middle * (3 - 2 * middle) < eased) low = middle;
    else high = middle;
  }
  return (low + high) / 2;
};

const slopeX = (canvas, y, riderAcross, side, travel) => {
  const z = (1 - depthAtY(canvas, y)) * COURSE.spawnDistance;
  const widthChange = 1 + 0.09 * Math.sin((travel + z) / 34) * z / COURSE.spawnDistance;
  const half = slopeHalfAtY(canvas, y) * widthChange;
  const bend = courseBendAt(travel + z) - courseBendAt(travel);
  return canvas.width / 2 + (side + (bend - riderAcross) / COURSE.halfWidth) * half;
};

const traceEdge = (context, canvas, riderAcross, side, travel) => {
  for (let step = 0; step <= 48; step += 1) {
    const y = canvas.height * (HORIZON_Y + (1 - HORIZON_Y) * step / 48);
    const x = slopeX(canvas, y, riderAcross, side, travel);
    if (step === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  }
};

const drawSnowBank = (context, canvas, riderAcross, side, travel) => {
  context.beginPath();
  traceEdge(context, canvas, riderAcross, side, travel);
  for (let step = 48; step >= 0; step -= 1) {
    const y = canvas.height * (HORIZON_Y + (1 - HORIZON_Y) * step / 48);
    const depth = step / 48;
    const mound = Math.sin(step * 0.72 + travel * 0.12) * depth * canvas.width * 0.002;
    const thickness = canvas.width * (0.003 + depth * depth * 0.018) + mound;
    context.lineTo(slopeX(canvas, y, riderAcross, side, travel) + side * thickness, y);
  }
  context.closePath();
  context.fillStyle = "#b9dbe8";
  context.fill();
  context.beginPath();
  traceEdge(context, canvas, riderAcross, side, travel);
  context.strokeStyle = "#f8ffff";
  context.lineWidth = Math.max(5, canvas.width * 0.006);
  context.stroke();
  context.beginPath();
  traceEdge(context, canvas, riderAcross, side, travel);
  context.strokeStyle = "#61cfe0";
  context.lineWidth = Math.max(1.5, canvas.width * 0.0013);
  context.stroke();
};

const drawMountainLayer = (context, canvas, peaks, base, color, shade, snow, drift) => {
  for (const [center, height, width, skew] of peaks) {
    const x = canvas.width * center + drift;
    const top = canvas.height * height;
    const bottom = canvas.height * base;
    const half = canvas.width * width * 0.5;
    const left = x - half;
    const right = x + half;
    const shoulder = (bottom - top) * 0.28;

    context.fillStyle = color;
    context.beginPath();
    context.moveTo(left, bottom);
    context.lineTo(x - half * 0.53, top + shoulder * 1.4);
    context.lineTo(x - half * 0.22, top + shoulder * 0.58);
    context.lineTo(x + skew * half, top);
    context.lineTo(x + half * 0.27, top + shoulder * 0.74);
    context.lineTo(x + half * 0.62, top + shoulder * 1.6);
    context.lineTo(right, bottom);
    context.closePath();
    context.fill();

    context.fillStyle = shade;
    context.beginPath();
    context.moveTo(x + skew * half, top);
    context.lineTo(x + half * 0.27, top + shoulder * 0.74);
    context.lineTo(right, bottom);
    context.lineTo(x + half * 0.1, bottom);
    context.lineTo(x - half * 0.09, top + shoulder * 1.6);
    context.closePath();
    context.fill();

    context.fillStyle = snow;
    context.beginPath();
    context.moveTo(x - half * 0.22, top + shoulder * 0.58);
    context.lineTo(x + skew * half, top);
    context.lineTo(x + half * 0.27, top + shoulder * 0.74);
    context.lineTo(x + half * 0.08, top + shoulder * 0.9);
    context.lineTo(x - half * 0.02, top + shoulder * 0.72);
    context.lineTo(x - half * 0.11, top + shoulder * 1.05);
    context.closePath();
    context.fill();

    context.fillStyle = "rgba(121, 177, 197, 0.2)";
    context.beginPath();
    context.moveTo(x - half * 0.23, top + (bottom - top) * 0.23);
    context.lineTo(x, top);
    context.lineTo(x - half * 0.04, top + (bottom - top) * 0.23);
    context.closePath();
    context.fill();
  }
};

const drawBackground = (context, canvas, riderAcross, travel) => {
  const sky = context.createLinearGradient(0, 0, 0, canvas.height * 0.6);
  sky.addColorStop(0, "#58a7cc");
  sky.addColorStop(0.62, "#b9e4ef");
  sky.addColorStop(1, "#effaff");
  context.fillStyle = sky;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const sunX = canvas.width * 0.76 - riderAcross * 4;
  const sunY = canvas.height * 0.13;
  const glow = context.createRadialGradient(sunX, sunY, 2, sunX, sunY, canvas.height * 0.28);
  glow.addColorStop(0, "rgba(255,250,222,0.68)");
  glow.addColorStop(1, "rgba(255,250,222,0)");
  context.fillStyle = glow;
  context.fillRect(0, 0, canvas.width, canvas.height * 0.48);
  context.fillStyle = "#fff9e4";
  context.beginPath();
  context.arc(sunX, sunY, canvas.height * 0.029, 0, Math.PI * 2);
  context.fill();

  drawMountainLayer(context, canvas,
    [[-0.06, 0.17, 0.31, -0.08], [0.17, 0.08, 0.35, 0.04], [0.43, 0.19, 0.34, -0.1], [0.7, 0.09, 0.37, 0.08], [1.04, 0.16, 0.36, -0.06]],
    0.42, "#c8dbe1", "#a9c8d2", "#f5fbfa", -riderAcross * 2.5);
  drawMountainLayer(context, canvas,
    [[-0.07, 0.29, 0.27, 0.09], [0.16, 0.2, 0.34, -0.07], [0.48, 0.27, 0.3, 0.06], [0.78, 0.2, 0.35, -0.08], [1.08, 0.27, 0.31, 0.07]],
    0.51, "#9bbbc7", "#739bac", "#eff9fa", -riderAcross * 5);
  drawMountainLayer(context, canvas,
    [[-0.11, 0.39, 0.33, 0.08], [0.24, 0.32, 0.32, -0.06], [0.53, 0.38, 0.28, 0.07], [0.87, 0.31, 0.34, -0.08], [1.13, 0.4, 0.3, 0.04]],
    0.59, "#6f9baa", "#4c7d91", "#d9eef1", -riderAcross * 8);

  const sideSnow = context.createLinearGradient(0, canvas.height * 0.45, 0, canvas.height);
  sideSnow.addColorStop(0, "#e3f5f6");
  sideSnow.addColorStop(1, "#c3e0e8");
  context.fillStyle = sideSnow;
  context.beginPath();
  context.moveTo(0, canvas.height * 0.56);
  context.bezierCurveTo(
    canvas.width * 0.13, canvas.height * 0.46,
    canvas.width * 0.23, canvas.height * 0.56,
    canvas.width * 0.39, canvas.height * 0.5,
  );
  context.bezierCurveTo(
    canvas.width * 0.57, canvas.height * 0.43,
    canvas.width * 0.65, canvas.height * 0.57,
    canvas.width * 0.79, canvas.height * 0.48,
  );
  context.bezierCurveTo(
    canvas.width * 0.88, canvas.height * 0.44,
    canvas.width * 0.95, canvas.height * 0.54,
    canvas.width, canvas.height * 0.52,
  );
  context.lineTo(canvas.width, canvas.height);
  context.lineTo(0, canvas.height);
  context.closePath();
  context.fill();

  const snow = context.createLinearGradient(0, canvas.height * HORIZON_Y, 0, canvas.height);
  snow.addColorStop(0, "#f6fcfc");
  snow.addColorStop(0.55, "#ffffff");
  snow.addColorStop(1, "#f7fcff");
  context.fillStyle = snow;
  context.beginPath();
  traceEdge(context, canvas, riderAcross, -1, travel);
  for (let step = 48; step >= 0; step -= 1) {
    const y = canvas.height * (HORIZON_Y + (1 - HORIZON_Y) * step / 48);
    context.lineTo(slopeX(canvas, y, riderAcross, 1, travel), y);
  }
  context.closePath();
  context.fill();

  for (const side of [-1, 1]) drawSnowBank(context, canvas, riderAcross, side, travel);
};

const drawSnowTexture = (context, canvas, riderAcross, travel, surface, speed) => {
  const spacing = surface === "powder" ? 4.8 : 2.8;
  const firstMark = Math.floor(travel / spacing) * spacing;
  const strong = surface === "ice" ? 0.05 : surface === "powder" ? 0.075 : 0.11;

  context.save();
  context.strokeStyle = surface === "ice" ? "#81c9d7" : "#9bcbd4";
  for (let worldZ = firstMark; worldZ < travel + COURSE.spawnDistance; worldZ += spacing) {
    const z = worldZ - travel;
    if (z < 0.5 || z > COURSE.spawnDistance) continue;
    const options = { ...COURSE, travel };
    const left = projectCoursePoint(canvas, riderAcross, { x: -COURSE.halfWidth * 0.86, z }, options);
    const right = projectCoursePoint(canvas, riderAcross, { x: COURSE.halfWidth * 0.86, z }, options);
    const ripple = Math.sin(worldZ * 0.75) * 5 * left.scale;
    context.globalAlpha = strong * left.alpha * (0.65 + Math.min(speed / 34, 1) * 0.35);
    context.lineWidth = Math.max(0.7, left.scale * (surface === "powder" ? 2.5 : 1.4));
    context.beginPath();
    context.moveTo(left.x, left.y);
    context.quadraticCurveTo((left.x + right.x) / 2, left.y - 4 * left.scale, right.x, right.y);
    context.stroke();
  }
  context.restore();
};

const drawWind = (context, canvas, riderAcross, travel, speed) => {
  const gust = 0.58 + 0.42 * Math.sin(travel * 0.14 + 0.8) ** 2;
  const intensity = clamp((speed - 14) / 20, 0, 1) * gust;
  if (intensity < 0.1) return;
  context.save();
  context.strokeStyle = "#ffffff";
  context.lineCap = "round";
  for (let index = 0; index < 14; index += 1) {
    const z = (index * 8 + travel * (0.65 + index % 3 * 0.09)) % COURSE.spawnDistance;
    const side = index % 2 ? 1 : -1;
    const projected = projectCoursePoint(canvas, riderAcross, {
      x: side * (COURSE.halfWidth + 3.5 + index % 3 * 2), z,
    }, { ...COURSE, travel });
    const length = (11 + projected.scale * 42) * screenUnit(canvas);
    context.globalAlpha = projected.alpha * intensity * 0.28;
    context.lineWidth = Math.max(1, projected.scale * 2.2);
    context.beginPath();
    context.moveTo(projected.x - length * 0.5, projected.y);
    context.quadraticCurveTo(projected.x, projected.y - 4 * projected.scale, projected.x + length, projected.y - 2 * projected.scale);
    context.stroke();
  }
  context.restore();
};

const drawSideRidges = (context, canvas, riderAcross, travel) => {
  const spacing = 7.5;
  const first = Math.floor(travel / spacing) * spacing;
  context.save();
  context.lineCap = "round";
  for (let worldZ = first; worldZ < travel + COURSE.spawnDistance; worldZ += spacing) {
    const z = worldZ - travel;
    if (z < 1 || z > COURSE.spawnDistance) continue;
    for (const side of [-1, 1]) {
      const inner = projectCoursePoint(canvas, riderAcross, {
        x: side * (COURSE.halfWidth + 1.8), z,
      }, { ...COURSE, travel });
      const outer = projectCoursePoint(canvas, riderAcross, {
        x: side * (COURSE.halfWidth + 9), z,
      }, { ...COURSE, travel });
      context.globalAlpha = inner.alpha * 0.34;
      context.strokeStyle = "#8bbac9";
      context.lineWidth = Math.max(1, inner.scale * 3.5);
      context.beginPath();
      context.moveTo(inner.x, inner.y);
      context.quadraticCurveTo(
        (inner.x + outer.x) / 2,
        inner.y - 8 * inner.scale,
        outer.x,
        outer.y - 3 * inner.scale,
      );
      context.stroke();
    }
  }
  context.restore();
};

const trailPoint = (canvas, riderAcross, travel, sample) => {
  const behind = Math.max(0, travel - sample.downhill);
  const y = canvas.height * RIDER_Y + behind * Math.max(3.5, canvas.height * 0.006);
  const x = canvas.width / 2 +
    ((sample.across - riderAcross) / COURSE.halfWidth) * slopeHalfAtY(canvas, y);
  return { x, y, behind };
};

const drawPowderTrail = (context, canvas, riderAcross, travel, samples) => {
  if (samples.length < 2) return;

  const points = samples
    .map((sample) => ({ ...trailPoint(canvas, riderAcross, travel, sample), speed: sample.speed }))
    .filter((point) => point.y <= canvas.height + 25);
  if (points.length < 2) return;

  const unit = screenUnit(canvas);
  context.lineCap = "round";
  context.lineJoin = "round";
  for (const [offset, width, color] of [
    [-10, 9, "rgba(85,150,166,0.32)"],
    [10, 9, "rgba(85,150,166,0.32)"],
    [-10, 4, "rgba(255,255,255,0.92)"],
    [10, 4, "rgba(255,255,255,0.92)"],
  ]) {
    context.beginPath();
    context.moveTo(points[0].x + offset * unit, points[0].y);
    for (const point of points.slice(1)) context.lineTo(point.x + offset * unit, point.y);
    context.strokeStyle = color;
    context.lineWidth = width * unit;
    context.stroke();
  }

  for (let index = 0; index < points.length; index += 3) {
    const point = points[index];
    const freshness = clamp(1 - point.behind / 28, 0, 1);
    const speedFactor = clamp((point.speed || 16) / 25, 0.7, 1.45);
    const spread = (20 + (index % 4) * 5) * unit;
    const radius = (8 + (index % 5) * 2.1) * unit * freshness * speedFactor;
    if (radius < 0.5) continue;
    for (const side of [-1, 1]) {
      context.globalAlpha = freshness;
      context.fillStyle = "rgba(93,151,166,0.27)";
      context.beginPath();
      context.ellipse(point.x + side * spread, point.y + radius * 0.55, radius * 1.65, radius * 0.65, 0, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = "#ffffff";
      context.beginPath();
      context.ellipse(point.x + side * spread, point.y, radius * 1.2, radius * 0.8, 0, 0, Math.PI * 2);
      context.fill();
    }
  }
  context.globalAlpha = 1;
};

export const drawSnowSpray = (context, canvas, carve, travel, landingImpact = 0, speed = 16, centerX = canvas.width / 2) => {
  const unit = screenUnit(canvas);
  const baseY = canvas.height * RIDER_Y;
  const force = clamp(Math.abs(carve), 0, 1);
  const landing = clamp(landingImpact / 8, 0, 1);
  if (force < 0.05 && landing < 0.08) return;
  const speedFactor = clamp(speed / 24, 0.75, 1.5);

  for (const side of [-1, 1]) {
    const sideForce = (0.52 + (side * carve > 0 ? force * 1.1 : force * 0.35) + landing * 0.8) * speedFactor;
    for (let index = 0; index < 12; index += 1) {
      const phase = (travel * 2.7 + index * 0.8) % 11;
      const x = centerX + side * (28 + phase * (5.2 + force * 3.4)) * unit;
      const y = baseY + (phase * 2.3 + Math.sin(index * 2.1) * 6) * unit;
      const radius = (5 + (11 - phase) * 0.95) * unit * sideForce;
      context.fillStyle = "rgba(85,151,174,0.24)";
      context.beginPath();
      context.ellipse(x, y + radius * 0.45, radius * 1.42, radius * 0.72, 0, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = "rgba(255,255,255,0.96)";
      context.beginPath();
      context.ellipse(x, y, radius * 1.12, radius * 0.8, 0, 0, Math.PI * 2);
      context.fill();
    }
  }
};

const drawCrashBurst = (context, canvas, strength) => {
  if (strength <= 0) return;
  const unit = screenUnit(canvas);
  const progress = 1 - clamp(strength / 0.8, 0, 1);
  const centerX = canvas.width / 2;
  const centerY = canvas.height * RIDER_Y;
  context.save();
  context.globalAlpha = clamp(strength * 1.2, 0, 1);
  for (let index = 0; index < 18; index += 1) {
    const angle = index * Math.PI * 2 / 18;
    const distance = (18 + progress * 110 + index % 3 * 11) * unit;
    const radius = (6 + (index % 4) * 2.4) * unit * (1 - progress * 0.55);
    context.fillStyle = index % 3 === 0 ? "#b5e3e9" : "#ffffff";
    context.beginPath();
    context.ellipse(
      centerX + Math.cos(angle) * distance,
      centerY + Math.sin(angle) * distance * 0.45,
      radius * 1.3, radius * 0.8, 0, 0, Math.PI * 2,
    );
    context.fill();
  }
  context.restore();
};

const drawPine = (context, x, y, size, danger = false) => {
  context.fillStyle = danger ? "rgba(21,48,61,0.28)" : "rgba(45,104,114,0.16)";
  context.beginPath();
  context.ellipse(x + size * 0.15, y + size * 0.06, size * 0.52, size * 0.13, 0, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = "#624535";
  context.fillRect(x - size * 0.06, y - size * 0.3, size * 0.12, size * 0.32);

  for (let layer = 0; layer < 3; layer += 1) {
    const peak = y - size * (1 - layer * 0.24);
    const base = y - size * (0.32 - layer * 0.13);
    const half = size * (0.25 + layer * 0.105);
    context.fillStyle = danger ? (layer === 1 ? "#17664e" : "#0a463d") :
      (layer === 1 ? "#2a8b6b" : "#176c57");
    context.beginPath();
    context.moveTo(x, peak);
    context.lineTo(x - half, base);
    context.lineTo(x + size * 0.04, base);
    context.closePath();
    context.fill();

    context.fillStyle = layer === 1 ? "#269976" : "#1a856a";
    context.beginPath();
    context.moveTo(x, peak);
    context.lineTo(x + size * 0.04, base);
    context.lineTo(x + half, base);
    context.closePath();
    context.fill();

    context.fillStyle = danger ? "#0d4d43" : "#1d765f";
    context.beginPath();
    context.moveTo(x, peak);
    context.lineTo(x + half, base);
    context.lineTo(x + half * 0.06, base);
    context.closePath();
    context.fill();

    context.strokeStyle = "#e6f6f5";
    context.lineWidth = Math.max(1, size * 0.027);
    context.beginPath();
    context.moveTo(x - half * 0.13, peak + size * 0.08);
    context.lineTo(x - half * 0.45, peak + (base - peak) * 0.63);
    context.lineTo(x - half * 0.67, peak + (base - peak) * 0.68);
    context.stroke();
  }

  if (danger) {
    context.strokeStyle = "rgba(229,106,65,0.8)";
    context.lineWidth = Math.max(2, size * 0.035);
    context.beginPath();
    context.ellipse(x, y + size * 0.02, size * 0.43, size * 0.1, 0, 0, Math.PI * 2);
    context.stroke();
  }
};

const drawRock = (context, x, y, size, danger = false) => {
  context.fillStyle = danger ? "rgba(21,48,61,0.26)" : "rgba(45,104,114,0.15)";
  context.beginPath();
  context.ellipse(x + size * 0.14, y + size * 0.06, size * 0.59, size * 0.15, 0, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = danger ? "#374859" : "#627889";
  context.beginPath();
  context.moveTo(x - size * 0.44, y);
  context.lineTo(x - size * 0.34, y - size * 0.33);
  context.lineTo(x + size * 0.06, y - size * 0.47);
  context.lineTo(x + size * 0.39, y - size * 0.25);
  context.lineTo(x + size * 0.46, y);
  context.closePath();
  context.fill();
  context.strokeStyle = danger ? "#273746" : "#536d7b";
  context.lineWidth = Math.max(1.5, size * 0.025);
  context.stroke();

  context.fillStyle = danger ? "#708b99" : "#9bb9c2";
  context.beginPath();
  context.moveTo(x - size * 0.34, y - size * 0.33);
  context.lineTo(x + size * 0.06, y - size * 0.47);
  context.lineTo(x + size * 0.16, y - size * 0.31);
  context.lineTo(x - size * 0.21, y - size * 0.23);
  context.closePath();
  context.fill();

  context.strokeStyle = "#effbfb";
  context.lineWidth = Math.max(2, size * 0.055);
  context.beginPath();
  context.moveTo(x - size * 0.21, y - size * 0.32);
  context.lineTo(x + size * 0.03, y - size * 0.42);
  context.lineTo(x + size * 0.16, y - size * 0.33);
  context.stroke();

  if (danger) {
    context.strokeStyle = "rgba(229,106,65,0.85)";
    context.lineWidth = Math.max(2, size * 0.035);
    context.beginPath();
    context.moveTo(x - size * 0.43, y + size * 0.02);
    context.quadraticCurveTo(x, y + size * 0.16, x + size * 0.43, y + size * 0.02);
    context.stroke();
  }
};

const drawSideScenery = (context, canvas, riderAcross, travel) => {
  const chunks = visibleSlopeChunks(travel, COURSE.spawnDistance, {
    halfWidth: COURSE.halfWidth,
  });
  const props = chunks.flatMap((chunk) => chunk.scenery);

  props.sort((a, b) => b.z - a.z);
  for (const prop of props) {
    const z = prop.z - travel;
    if (z < 0 || z > COURSE.spawnDistance) continue;

    const projected = projectCoursePoint(
      canvas, riderAcross, { x: prop.x, z }, { ...COURSE, travel },
    );
    const size = projected.pathHalf / COURSE.halfWidth * 2.35 * prop.size;
    context.save();
    context.globalAlpha = projected.alpha * 0.92;
    if (biomeAt(prop.z) === "glow") {
      context.fillStyle = "rgba(54,218,225,0.18)";
      context.beginPath();
      context.ellipse(projected.x, projected.y, size * 0.65, size * 0.13, 0, 0, Math.PI * 2);
      context.fill();
    }
    if (prop.kind === "rock") drawRock(context, projected.x, projected.y, size);
    else drawPine(context, projected.x, projected.y, size);
    context.restore();
  }

  for (const chunk of chunks) {
    if (chunk.index % 8 !== 3) continue;
    const z = chunk.index * CHUNK_LENGTH + CHUNK_LENGTH / 2 - travel;
    if (z < 0 || z > COURSE.spawnDistance) continue;
    const side = chunk.index % 16 === 3 ? -1 : 1;
    const landmark = projectCoursePoint(canvas, riderAcross, {
      x: side * (COURSE.halfWidth + 10), z,
    }, { ...COURSE, travel });
    const unit = landmark.pathHalf / COURSE.halfWidth;
    context.save();
    context.globalAlpha = landmark.alpha * 0.8;
    context.fillStyle = "#284f61";
    context.fillRect(landmark.x - unit * 0.7, landmark.y - unit * 2.5, unit * 1.4, unit * 2.5);
    context.fillStyle = "#e6f5f6";
    context.beginPath();
    context.moveTo(landmark.x - unit, landmark.y - unit * 2.5);
    context.lineTo(landmark.x, landmark.y - unit * 3.5);
    context.lineTo(landmark.x + unit, landmark.y - unit * 2.5);
    context.closePath();
    context.fill();
    context.fillStyle = "#ef9d65";
    context.fillRect(landmark.x - unit * 0.2, landmark.y - unit * 1.2, unit * 0.4, unit * 1.2);
    context.restore();
  }

  for (const chunk of chunks) {
    if (chunk.biome !== "glow" || chunk.index % 4 !== 0) continue;
    const z = chunk.index * CHUNK_LENGTH + 3 - travel;
    if (z < 0 || z > COURSE.spawnDistance) continue;
    for (const side of [-1, 1]) {
      const marker = projectCoursePoint(canvas, riderAcross, {
        x: side * (COURSE.halfWidth + 4.5), z,
      }, { ...COURSE, travel });
      const unit = marker.pathHalf / COURSE.halfWidth;
      context.save();
      context.globalAlpha = marker.alpha;
      context.fillStyle = "rgba(53,219,222,0.25)";
      context.beginPath();
      context.ellipse(marker.x, marker.y, unit * 1.3, unit * 0.32, 0, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = "#24485c";
      context.fillRect(marker.x - unit * 0.16, marker.y - unit * 2.5, unit * 0.32, unit * 2.5);
      context.fillStyle = "#55e2df";
      context.beginPath();
      context.arc(marker.x, marker.y - unit * 2.55, unit * 0.45, 0, Math.PI * 2);
      context.fill();
      context.restore();
    }
  }
};

const drawPisteMarkers = (context, canvas, riderAcross, travel) => {
  const first = Math.floor(travel / 10) * 10;
  for (let world = first; world < travel + COURSE.spawnDistance; world += 10) {
    const z = world - travel;
    if (z < 1 || z > COURSE.spawnDistance - 1) continue;
    for (const side of [-1, 1]) {
      const projected = projectCoursePoint(
        canvas, riderAcross, { x: side * (COURSE.halfWidth + 0.55), z },
        { halfWidth: COURSE.halfWidth, viewDistance: COURSE.spawnDistance, travel },
      );
      const unit = screenUnit(canvas) * projected.scale;
      const poleHeight = 38 * unit;
      const { x, y } = projected;
      context.save();
      context.globalAlpha = projected.alpha;
      context.strokeStyle = "rgba(55, 103, 123, 0.22)";
      context.lineWidth = Math.max(1, 2 * unit);
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x + side * 16 * unit, y + 3 * unit);
      context.stroke();
      context.strokeStyle = "#e15f50";
      context.lineWidth = Math.max(1.5, 3 * unit);
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x, y - poleHeight);
      context.stroke();
      context.strokeStyle = "#f58e71";
      context.lineWidth = Math.max(0.8, unit);
      context.beginPath();
      context.moveTo(x - unit * 0.75, y - 2 * unit);
      context.lineTo(x - unit * 0.75, y - poleHeight);
      context.stroke();
      context.fillStyle = "#c6b9aa";
      context.beginPath();
      context.moveTo(x + 2 * unit, y - poleHeight + unit);
      context.lineTo(x - side * 13 * unit + 2 * unit, y - poleHeight + 6 * unit);
      context.lineTo(x + 2 * unit, y - poleHeight + 11 * unit);
      context.closePath();
      context.fill();
      context.fillStyle = "#f4e9d8";
      context.beginPath();
      context.moveTo(x, y - poleHeight);
      context.lineTo(x - side * 15 * unit, y - poleHeight + 5 * unit);
      context.lineTo(x, y - poleHeight + 10 * unit);
      context.closePath();
      context.fill();
      context.restore();
    }
  }
};

const drawJumpHazard = (context, canvas, projected) => {
  const width = projected.pathHalf * 2.08;
  const height = Math.max(7, projected.pathHalf / COURSE.halfWidth * 0.72);
  const { x, y } = projected;

  context.fillStyle = "rgba(25,53,63,0.22)";
  context.beginPath();
  context.ellipse(x, y + height * 0.7, width * 0.52, height * 0.7, 0, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = "#a9d7db";
  context.beginPath();
  context.moveTo(x - width * 0.43, y + height * 1.6);
  context.lineTo(x - width * 0.4, y - height * 0.6);
  context.lineTo(x + width * 0.4, y - height * 0.6);
  context.lineTo(x + width * 0.43, y + height * 1.6);
  context.closePath();
  context.fill();

  context.fillStyle = "#523929";
  context.fillRect(x - width / 2, y - height, width, height * 1.12);
  context.fillStyle = "#ac7044";
  context.fillRect(x - width / 2, y - height, width, height * 0.3);
  context.fillStyle = "#f2f9f5";
  context.fillRect(x - width * 0.48, y - height * 1.12, width * 0.96, height * 0.2);
  context.strokeStyle = "#2d2928";
  context.lineWidth = Math.max(2, height * 0.12);
  context.strokeRect(x - width / 2, y - height, width, height * 1.12);

  context.strokeStyle = "rgba(35,28,24,0.45)";
  context.lineWidth = Math.max(1, height * 0.07);
  for (const offset of [-0.32, -0.08, 0.22]) {
    context.beginPath();
    context.moveTo(x + width * offset, y - height * 0.52);
    context.lineTo(x + width * (offset + 0.12), y - height * 0.2);
    context.stroke();
  }

  for (const side of [-1, 1]) {
    context.fillStyle = "#cf9c6f";
    context.beginPath();
    context.ellipse(x + side * width * 0.49, y - height * 0.42, height * 0.35, height * 0.49, 0, 0, Math.PI * 2);
    context.fill();
  }
};

const drawBird = (context, canvas, projected) => {
  const scale = projected.pathHalf / COURSE.halfWidth / 32;
  const x = projected.x;
  const y = projected.y - 90 * scale;
  const wing = projected.pathHalf * 1.04;

  context.fillStyle = "rgba(29,47,65,0.16)";
  context.beginPath();
  context.ellipse(x, projected.y + 3 * scale, wing * 0.6, 8 * scale, 0, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = "#222b43";
  context.beginPath();
  context.ellipse(x, y, 22 * scale, 13 * scale, 0, 0, Math.PI * 2);
  context.fill();
  context.strokeStyle = "#222b43";
  context.lineCap = "round";
  context.lineWidth = Math.max(3, 10 * scale);
  context.beginPath();
  context.moveTo(x - 8 * scale, y);
  context.quadraticCurveTo(x - wing * 0.58, y - 45 * scale, x - wing, y + 5 * scale);
  context.moveTo(x + 8 * scale, y);
  context.quadraticCurveTo(x + wing * 0.58, y - 45 * scale, x + wing, y + 5 * scale);
  context.stroke();
  context.fillStyle = "#f0a65c";
  context.beginPath();
  context.moveTo(x, y + 2 * scale);
  context.lineTo(x - 4 * scale, y + 10 * scale);
  context.lineTo(x + 4 * scale, y + 10 * scale);
  context.closePath();
  context.fill();
};

const drawBranch = (context, canvas, projected) => {
  const scale = projected.pathHalf / COURSE.halfWidth / 32;
  const y = projected.y - 83 * scale;
  const half = projected.pathHalf * 1.04;
  const x = projected.x;

  context.fillStyle = "rgba(29,47,65,0.16)";
  context.beginPath();
  context.ellipse(x, projected.y + 3 * scale, half * 0.68, 8 * scale, 0, 0, Math.PI * 2);
  context.fill();

  context.strokeStyle = "#52382e";
  context.lineCap = "round";
  context.lineWidth = Math.max(5, 15 * scale);
  context.beginPath();
  context.moveTo(x - half, y - 9 * scale);
  context.quadraticCurveTo(x, y + 9 * scale, x + half, y - 9 * scale);
  context.stroke();

  context.fillStyle = "#1b624f";
  for (const offset of [-0.72, -0.36, 0.08, 0.47, 0.77]) {
    const leafX = x + half * offset;
    const leafY = y - 10 * scale;
    context.fillStyle = "#0b584e";
    context.beginPath();
    context.moveTo(leafX - 16 * scale, leafY + 5 * scale);
    context.lineTo(leafX + 2 * scale, leafY - 12 * scale);
    context.lineTo(leafX + 16 * scale, leafY + 5 * scale);
    context.closePath();
    context.fill();
    context.fillStyle = "#249575";
    context.beginPath();
    context.moveTo(leafX + 2 * scale, leafY - 12 * scale);
    context.lineTo(leafX + 16 * scale, leafY + 5 * scale);
    context.lineTo(leafX + 2 * scale, leafY + 5 * scale);
    context.closePath();
    context.fill();
  }
};

const drawActionCue = (context, projected, kind) => {
  const radius = clamp(projected.pathHalf * 0.12, 9, 31);
  const y = projected.y - (kind === "jump"
    ? radius * 3
    : projected.pathHalf / COURSE.halfWidth * 3.5 + radius * 1.5);
  context.globalAlpha = projected.alpha;
  context.fillStyle = kind === "jump" ? "#dc754e" : "#684f90";
  context.beginPath();
  context.arc(projected.x, y, radius, 0, Math.PI * 2);
  context.fill();
  context.strokeStyle = "#ffffff";
  context.lineWidth = Math.max(2, radius * 0.16);
  context.lineCap = "round";
  context.lineJoin = "round";
  context.beginPath();
  const direction = kind === "jump" ? -1 : 1;
  context.moveTo(projected.x, y - direction * radius * 0.42);
  context.lineTo(projected.x, y + direction * radius * 0.42);
  context.moveTo(projected.x - radius * 0.32, y + direction * radius * 0.1);
  context.lineTo(projected.x, y + direction * radius * 0.42);
  context.lineTo(projected.x + radius * 0.32, y + direction * radius * 0.1);
  context.stroke();
};

const drawRollingBoulder = (context, projected, hazard) => {
  const { x, y, pathHalf } = projected;
  const radius = pathHalf / COURSE.halfWidth * hazard.radius;
  context.fillStyle = "rgba(21,48,61,0.26)";
  context.beginPath();
  context.ellipse(x, y, radius, radius * 0.25, 0, 0, Math.PI * 2);
  context.fill();

  context.translate(x, y - radius * 0.92);
  context.rotate(hazard.roll);
  context.fillStyle = "#374859";
  context.beginPath();
  context.moveTo(-radius, 0);
  context.lineTo(-radius * 0.72, -radius * 0.7);
  context.lineTo(0, -radius);
  context.lineTo(radius * 0.76, -radius * 0.58);
  context.lineTo(radius, radius * 0.18);
  context.lineTo(radius * 0.52, radius * 0.84);
  context.lineTo(-radius * 0.28, radius * 0.94);
  context.lineTo(-radius * 0.81, radius * 0.57);
  context.closePath();
  context.fill();
  context.strokeStyle = "#273746";
  context.lineWidth = Math.max(1.5, radius * 0.06);
  context.stroke();

  context.fillStyle = "#c3dbe1";
  context.beginPath();
  context.moveTo(-radius * 0.72, -radius * 0.7);
  context.lineTo(0, -radius);
  context.lineTo(radius * 0.49, -radius * 0.73);
  context.lineTo(radius * 0.16, -radius * 0.54);
  context.lineTo(-radius * 0.43, -radius * 0.44);
  context.closePath();
  context.fill();
};

const drawHazards = (context, canvas, riderAcross, travel, hazards) => {
  for (const hazard of [...hazards].sort((a, b) => b.z - a.z)) {
    if (hazard.z < -2 || hazard.z > COURSE.spawnDistance) continue;

    const projected = projectCoursePoint(canvas, riderAcross, hazard, { ...COURSE, travel });
    context.save();
    context.globalAlpha = projected.alpha;

    if (hazard.kind === "jump") {
      drawJumpHazard(context, canvas, projected);
      if (hazard.z > 3) drawActionCue(context, projected, "jump");
    } else if (hazard.kind === "duck") {
      if (hazard.variant === "bird") drawBird(context, canvas, projected);
      else drawBranch(context, canvas, projected);
      if (hazard.z > 3) drawActionCue(context, projected, "duck");
    } else if (hazard.variant === "rolling-boulder") {
      drawRollingBoulder(context, projected, hazard);
    } else {
      const size = projected.pathHalf / COURSE.halfWidth * 2.35;
      if (hazard.variant === "rock") drawRock(context, projected.x, projected.y, size, true);
      else drawPine(context, projected.x, projected.y, size, true);
    }

    context.restore();
  }
};

/** Mountain owner: render the course before the rider is drawn each frame. */
export default async function setupMountain(game) {
  if (game.worldCanvas && game.runtime) {
    try {
      const { createMountainWorld } = await import("./world3d.js");
      const world = createMountainWorld(game.worldCanvas);
      game.runtime.world3d = world;
      game.canvas.style.visibility = "hidden";
      game.events.addEventListener("course:update", (event) => {
        world.setCourse(event.detail);
      });
      game.events.addEventListener("rider:update", (event) => {
        world.render(event.detail);
      });
      return;
    } catch (error) {
      console.warn("3D mountain renderer unavailable; using the canvas view", error);
      game.worldCanvas.style.display = "none";
    }
  }

  const context = game.canvas.getContext("2d");
  if (!context) throw new Error("Mountain rendering requires a 2D canvas context");

  let travel = 0;
  let trail = [];
  let course = { crashFx: 0, distance: 0, hazards: [], phase: "idle" };

  game.events.addEventListener("course:update", (event) => {
    course = {
      crashFx: Number(event.detail?.crashFx) || 0,
      distance: Number(event.detail?.distance) || 0,
      hazards: Array.isArray(event.detail?.hazards) ? event.detail.hazards : [],
      phase: event.detail?.phase ?? "idle",
    };
  });

  game.events.addEventListener("rider:update", (event) => {
    const riderState = event.detail?.state;
    const camera = event.detail?.camera;
    const riderAcross = Number(riderState?.position?.across) || 0;
    const cameraAcross = Number(camera?.position?.across) || 0;
    const zoom = clamp(Number(camera?.zoom) || 1, 0.82, 1);
    const viewAcross = courseViewAcross(game.canvas, riderAcross, cameraAcross, zoom, COURSE.halfWidth);
    const sceneTravel = course.phase === "idle"
      ? 0
      : Number(riderState?.position?.downhill) || course.distance;
    if (course.phase === "idle") {
      travel = 0;
      trail = [];
    } else if (course.phase === "running") {
      travel = Math.max(0, sceneTravel);
      if ((riderState?.air ?? 0) < 0.08 &&
          (trail.length === 0 || travel - trail.at(-1).downhill >= 0.45)) {
        trail.push({ across: riderAcross, downhill: travel, speed: Number(riderState?.speed) || 16 });
      }
      trail = trail.filter((sample) => travel - sample.downhill < 42);
    }

    context.save();
    context.translate(game.canvas.width / 2, game.canvas.height / 2);
    context.rotate(-(Number(camera?.roll) || 0));
    context.translate(-game.canvas.width / 2, -game.canvas.height / 2);
    drawBackground(context, game.canvas, viewAcross, sceneTravel);
    drawSnowTexture(
      context,
      game.canvas,
      viewAcross,
      sceneTravel,
      riderState?.surface ?? "powder",
      Number(riderState?.speed) || 0,
    );
    drawSideRidges(context, game.canvas, viewAcross, sceneTravel);
    drawPowderTrail(context, game.canvas, viewAcross, travel, trail);
    if (course.phase === "running" && (riderState?.air ?? 0) < 0.08) {
      const spray = riderState?.surface === "ice" ? 0 : clamp(
        (Number(riderState?.slash) || 0) * 0.85 +
        (Number(riderState?.skid) || 0) * 0.5 +
        (Number(riderState?.washout) || 0) * 0.35,
        0, 1,
      );
      const direction = Math.sign(riderState?.slipAngle || riderState?.edge || event.detail?.input?.carve || 1);
      const riderX = game.canvas.width / 2 + (riderAcross - cameraAcross) * 14 * zoom;
      if (riderState?.surface !== "ice") {
        drawSnowSpray(context, game.canvas, direction * spray, travel,
          Number(riderState?.landingImpact) || 0, Number(riderState?.speed) || 16, riderX);
      }
    }
    drawWind(context, game.canvas, viewAcross, sceneTravel, Number(riderState?.speed) || 0);
    drawSideScenery(context, game.canvas, viewAcross, sceneTravel);
    drawPisteMarkers(context, game.canvas, viewAcross, sceneTravel);
    drawHazards(context, game.canvas, viewAcross, sceneTravel, course.hazards);
    drawCrashBurst(context, game.canvas, course.crashFx);
    context.restore();
  });
}
