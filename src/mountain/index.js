import {
  courseViewAcross,
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

const bottomX = (canvas, y, riderAcross, portion) =>
  canvas.width / 2 +
  (portion - riderAcross / COURSE.halfWidth) * slopeHalfAtY(canvas, y);

const edgePoints = (canvas, riderAcross, travel, portion) => {
  const options = {
    halfWidth: COURSE.halfWidth,
    viewDistance: COURSE.spawnDistance,
    travel,
  };
  const points = [];
  for (let step = 0; step <= 32; step += 1) {
    const z = COURSE.spawnDistance * (1 - step / 32);
    const projected = projectCoursePoint(
      canvas, riderAcross, { x: portion * COURSE.halfWidth, z }, options,
    );
    points.push({ x: projected.x, y: projected.y, z });
  }
  for (let step = 1; step <= 6; step += 1) {
    const y = canvas.height * (0.78 + 0.22 * step / 6);
    points.push({ x: bottomX(canvas, y, riderAcross, portion), y, z: 0 });
  }
  return points;
};

const traceEdge = (context, canvas, riderAcross, travel, side) => {
  const points = edgePoints(canvas, riderAcross, travel, side);
  for (let index = 0; index < points.length; index += 1) {
    const { x, y } = points[index];
    if (index === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  }
};

const fillSlopeStrip = (context, canvas, riderAcross, travel, portion, color) => {
  const left = edgePoints(canvas, riderAcross, travel, -portion);
  const right = edgePoints(canvas, riderAcross, travel, portion);
  context.beginPath();
  context.moveTo(left[0].x, left[0].y);
  for (const point of left.slice(1)) context.lineTo(point.x, point.y);
  for (const point of right.reverse()) context.lineTo(point.x, point.y);
  context.closePath();
  context.fillStyle = color;
  context.fill();
};

const drawSnowBank = (context, canvas, riderAcross, travel, side) => {
  const points = edgePoints(canvas, riderAcross, travel, side);
  const outer = points.map((point) => {
    const depth = clamp((point.y / canvas.height - 0.22) / 0.78, 0, 1);
    const variation = 0.9 + Math.sin((travel + point.z) * 0.55 + side * 1.8) * 0.13;
    const thickness = canvas.width * (0.006 + depth * 0.021) * variation;
    return { x: point.x + side * thickness, y: point.y, depth };
  });

  context.beginPath();
  context.moveTo(outer[0].x, outer[0].y);
  for (const point of outer.slice(1)) context.lineTo(point.x, point.y);
  for (const point of [...outer].reverse()) {
    context.lineTo(
      point.x + side * point.depth * 5,
      point.y + point.depth * 14 * screenUnit(canvas),
    );
  }
  context.closePath();
  context.fillStyle = side < 0 ? "#9fc4d5" : "#b1d0dc";
  context.fill();

  context.beginPath();
  context.moveTo(points[0].x, points[0].y);
  for (const point of points.slice(1)) context.lineTo(point.x, point.y);
  for (const point of [...outer].reverse()) context.lineTo(point.x, point.y);
  context.closePath();
  context.fillStyle = side < 0 ? "#c7e1ed" : "#d3eaf2";
  context.fill();

  context.beginPath();
  traceEdge(context, canvas, riderAcross, travel, side);
  context.strokeStyle = "#f8fdff";
  context.lineWidth = Math.max(3, canvas.width * 0.005);
  context.stroke();
};

const drawMountainLayer = (context, canvas, peaks, base, color, shadow, snowcap, parallax) => {
  for (const [center, height, width] of peaks) {
    const x = canvas.width * center - parallax;
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

    context.fillStyle = shadow;
    context.beginPath();
    context.moveTo(x - half, bottom);
    context.lineTo(x, top);
    context.lineTo(x + half * 0.04, bottom);
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

    context.fillStyle = "rgba(121, 177, 197, 0.2)";
    context.beginPath();
    context.moveTo(x - half * 0.23, top + (bottom - top) * 0.23);
    context.lineTo(x, top);
    context.lineTo(x - half * 0.04, top + (bottom - top) * 0.23);
    context.closePath();
    context.fill();
  }
};

const drawChairlift = (context, canvas, parallax) => {
  const start = { x: canvas.width * 0.67 - parallax, y: canvas.height * 0.22 };
  const end = { x: canvas.width * 1.04 - parallax, y: canvas.height * 0.36 };
  const unit = screenUnit(canvas);
  context.save();
  context.strokeStyle = "rgba(74, 105, 128, 0.52)";
  context.lineWidth = Math.max(1, unit * 1.5);
  for (const offset of [0, 3 * unit]) {
    context.beginPath();
    context.moveTo(start.x, start.y + offset);
    context.lineTo(end.x, end.y + offset);
    context.stroke();
  }
  for (const fraction of [0.22, 0.52, 0.83]) {
    const x = start.x + (end.x - start.x) * fraction;
    const y = start.y + (end.y - start.y) * fraction;
    context.strokeStyle = "#69869a";
    context.lineWidth = Math.max(1, unit * 1.8);
    context.beginPath();
    context.moveTo(x, y + 2 * unit);
    context.lineTo(x, y + 12 * unit);
    context.lineTo(x + 10 * unit, y + 12 * unit);
    context.stroke();
    context.fillStyle = "#3a6178";
    context.fillRect(x - 2 * unit, y + 10 * unit, 16 * unit, 4 * unit);
  }
  context.restore();
};

const drawOffPisteFacets = (context, canvas, riderAcross, travel) => {
  const first = Math.floor(travel / 16) * 16;
  const options = { halfWidth: COURSE.halfWidth, viewDistance: COURSE.spawnDistance, travel };
  for (let world = first; world < travel + COURSE.spawnDistance; world += 16) {
    const z = world - travel;
    if (z < 3 || z > COURSE.spawnDistance - 7) continue;
    for (const side of [-1, 1]) {
      const innerFar = projectCoursePoint(canvas, riderAcross, { x: side * 10.2, z: z + 6 }, options);
      const outerFar = projectCoursePoint(canvas, riderAcross, { x: side * 18, z: z + 6 }, options);
      const innerNear = projectCoursePoint(canvas, riderAcross, { x: side * 10.2, z: z - 2 }, options);
      const outerNear = projectCoursePoint(canvas, riderAcross, { x: side * 18, z: z - 2 }, options);
      context.fillStyle = side < 0 ? "rgba(168, 204, 220, 0.32)" : "rgba(182, 211, 224, 0.28)";
      context.beginPath();
      context.moveTo(innerFar.x, innerFar.y);
      context.lineTo(outerFar.x, outerFar.y);
      context.lineTo(outerNear.x, outerNear.y);
      context.lineTo(innerNear.x, innerNear.y);
      context.closePath();
      context.fill();
      context.fillStyle = "rgba(250, 254, 255, 0.24)";
      context.beginPath();
      context.moveTo(innerFar.x, innerFar.y);
      context.lineTo(outerNear.x, outerNear.y);
      context.lineTo(innerNear.x, innerNear.y);
      context.closePath();
      context.fill();
    }
  }
};

const drawBackground = (context, canvas, riderAcross, travel) => {
  const sky = context.createLinearGradient(0, 0, 0, canvas.height * 0.62);
  sky.addColorStop(0, "#77cef8");
  sky.addColorStop(1, "#eefbff");
  context.fillStyle = sky;
  context.fillRect(0, 0, canvas.width, canvas.height);

  drawMountainLayer(
    context, canvas,
    [[-0.03, 0.14, 0.32], [0.22, 0.06, 0.34], [0.49, 0.12, 0.36], [0.78, 0.05, 0.36], [1.06, 0.13, 0.36]],
    0.42, "#9ec4d3", "#82aebf", "#effaff", riderAcross * 1.6,
  );
  drawMountainLayer(
    context, canvas,
    [[0.07, 0.29, 0.3], [0.36, 0.24, 0.34], [0.67, 0.28, 0.32], [0.96, 0.23, 0.34]],
    0.49, "#c4e0e9", "#aacbd8", "#ffffff", riderAcross * 3.1,
  );
  drawChairlift(context, canvas, riderAcross * 3.1);

  context.fillStyle = "#d7e8ef";
  context.fillRect(0, canvas.height * 0.45, canvas.width, canvas.height);
  drawOffPisteFacets(context, canvas, riderAcross, travel);

  fillSlopeStrip(context, canvas, riderAcross, travel, 1, "#e4f1f6");
  fillSlopeStrip(context, canvas, riderAcross, travel, 0.86, "#f8fcfe");

  for (const side of [-1, 1]) {
    drawSnowBank(context, canvas, riderAcross, travel, side);
  }

  for (const side of [-1, 1]) {
    context.beginPath();
    traceEdge(context, canvas, riderAcross, travel, side);
    context.strokeStyle = "rgba(73, 139, 166, 0.38)";
    context.lineWidth = Math.max(1.5, canvas.width * 0.0018);
    context.stroke();
  }
};

const drawSnowTexture = (context, canvas, riderAcross, travel, surface, speed) => {
  const project = (x, z) => projectCoursePoint(
    canvas, riderAcross, { x, z },
    { halfWidth: COURSE.halfWidth, viewDistance: COURSE.spawnDistance, travel },
  );
  const half = COURSE.halfWidth;

  context.save();

  // Broad, moving shade bands make the terrain roll away down the mountain.
  const firstRoller = Math.floor(travel / 12) * 12;
  for (let world = firstRoller; world < travel + COURSE.spawnDistance; world += 12) {
    const z = world - travel;
    if (z < 1.5 || z > COURSE.spawnDistance - 2) continue;
    const backLeft = project(-half * 0.85, z + 1.8);
    const backRight = project(half * 0.85, z + 1.8);
    const frontLeft = project(-half * 0.85, z - 0.8);
    const frontRight = project(half * 0.85, z - 0.8);
    context.fillStyle = surface === "ice" ? "rgba(88, 163, 191, 0.12)" :
      "rgba(102, 163, 187, 0.09)";
    context.globalAlpha = frontLeft.alpha;
    context.beginPath();
    context.moveTo(backLeft.x, backLeft.y);
    context.lineTo(backRight.x, backRight.y);
    context.lineTo(frontRight.x, frontRight.y);
    context.lineTo(frontLeft.x, frontLeft.y);
    context.closePath();
    context.fill();
    context.fillStyle = "rgba(95, 153, 177, 0.1)";
    context.beginPath();
    context.moveTo(frontLeft.x, frontLeft.y);
    context.lineTo(frontRight.x, frontRight.y);
    context.lineTo(frontRight.x, frontRight.y + 5 * frontRight.scale);
    context.lineTo(frontLeft.x, frontLeft.y + 5 * frontLeft.scale);
    context.closePath();
    context.fill();
    context.strokeStyle = "rgba(255, 255, 255, 0.7)";
    context.lineWidth = Math.max(0.7, frontLeft.scale * 1.8);
    context.beginPath();
    context.moveTo(frontLeft.x, frontLeft.y);
    context.quadraticCurveTo((frontLeft.x + frontRight.x) / 2, frontLeft.y - 2 * frontLeft.scale, frontRight.x, frontRight.y);
    context.stroke();
  }

  // Longitudinal groomer grooves remain faint in fresh powder.
  const grooves = surface === "groomed" ? 26 : surface === "ice" ? 12 : 18;
  context.globalAlpha = surface === "groomed" ? 0.2 : 0.105;
  context.strokeStyle = surface === "ice" ? "#78b6cc" : "#8dbed0";
  context.lineWidth = Math.max(0.6, screenUnit(canvas) * 0.8);
  for (let line = 0; line <= grooves; line += 1) {
    const portion = -0.8 + (line / grooves) * 1.6;
    context.beginPath();
    for (let sample = 0; sample <= 12; sample += 1) {
      const z = COURSE.spawnDistance * (1 - sample / 12);
      const position = project(portion * half, z);
      if (sample === 0) context.moveTo(position.x, position.y);
      else context.lineTo(position.x, position.y);
    }
    context.lineTo(bottomX(canvas, canvas.height, riderAcross, portion), canvas.height);
    context.stroke();
  }

  // A prior rider's paired tracks give the untouched slope a sense of use.
  context.globalAlpha = surface === "powder" ? 0.18 : 0.14;
  context.strokeStyle = "#7aaec3";
  context.lineWidth = Math.max(1, screenUnit(canvas) * 1.8);
  for (const offset of [-0.16, 0.16]) {
    context.beginPath();
    for (let sample = 0; sample <= 22; sample += 1) {
      const z = COURSE.spawnDistance * (1 - sample / 22);
      const world = travel + z;
      const across = -half * 0.48 + Math.sin(world * 0.13) * 0.75 +
        Math.sin(world * 0.035) * 0.35 + offset;
      const position = project(across, z);
      if (sample === 0) context.moveTo(position.x, position.y);
      else context.lineTo(position.x, position.y);
    }
    context.stroke();
  }

  // Wind lips stay short and irregular rather than forming flat screen-wide bars.
  const markSpacing = surface === "powder" ? 5.6 : 8.4;
  const firstMark = Math.floor(travel / markSpacing) * markSpacing;
  context.strokeStyle = surface === "ice" ? "#a7d7e7" : "#b5dce9";
  for (let world = firstMark; world < travel + COURSE.spawnDistance; world += markSpacing) {
    const z = world - travel;
    if (z < 1 || z > COURSE.spawnDistance - 1) continue;
    const center = Math.sin(world * 0.41) * half * 0.46;
    const width = (1.8 + Math.sin(world * 0.23) * 0.5) * half / 9.5;
    const left = project(center - width, z);
    const right = project(center + width, z);
    context.globalAlpha = left.alpha * (surface === "powder" ? 0.4 : 0.22) *
      (0.75 + Math.min(speed / 35, 1) * 0.25);
    context.lineWidth = Math.max(0.7, left.scale * 2);
    context.beginPath();
    context.moveTo(left.x, left.y);
    context.quadraticCurveTo((left.x + right.x) / 2, left.y - 4 * left.scale, right.x, right.y);
    context.stroke();
  }
  context.restore();
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

const drawSnowSpray = (context, canvas, centerX, direction, intensity, travel) => {
  const force = clamp(intensity, 0, 1);
  if (force < 0.08) return;
  const unit = screenUnit(canvas);
  const baseY = canvas.height * 0.78;

  for (const side of [-1, 1]) {
    const sideForce = force * (side * direction > 0 ? 1 : 0.32);
    for (let index = 0; index < 7; index += 1) {
      const phase = (travel * 2.6 + index * 0.73) % 7;
      const x = centerX + side * (24 + phase * (4.5 + force * 3)) * unit;
      const y = baseY + (phase * 2.7 + Math.sin(index * 2.1) * 4) * unit;
      const radius = (3 + (7 - phase) * 0.7) * unit * sideForce;
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
  context.fillStyle = "rgba(37, 83, 98, 0.19)";
  context.beginPath();
  context.ellipse(x + size * 0.23, y + size * 0.06, size * 0.5, size * 0.12, -0.12, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = "#84512c";
  context.fillRect(x - size * 0.045, y - size * 0.29, size * 0.09, size * 0.31);
  context.fillStyle = "#5e3826";
  context.fillRect(x - size * 0.045, y - size * 0.29, size * 0.035, size * 0.31);

  for (let layer = 0; layer < 3; layer += 1) {
    const peak = y - size * (1 - layer * 0.23);
    const base = y - size * (0.25 - layer * 0.09);
    const half = size * (0.28 + layer * 0.11);
    context.fillStyle = layer === 1 ? "#0b5a4e" : "#0b554a";
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

    context.fillStyle = "rgba(244, 252, 255, 0.88)";
    context.beginPath();
    context.moveTo(x, peak);
    context.lineTo(x - half * 0.4, peak + (base - peak) * 0.52);
    context.lineTo(x - half * 0.19, peak + (base - peak) * 0.43);
    context.lineTo(x + half * 0.11, peak + (base - peak) * 0.55);
    context.closePath();
    context.fill();
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

  context.fillStyle = "#4e6477";
  context.beginPath();
  context.moveTo(x + size * 0.06, y - size * 0.47);
  context.lineTo(x + size * 0.39, y - size * 0.25);
  context.lineTo(x + size * 0.46, y);
  context.lineTo(x + size * 0.12, y - size * 0.06);
  context.closePath();
  context.fill();

  context.fillStyle = "#b2c5cb";
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
      canvas, riderAcross, { x: prop.x, z },
      { halfWidth: COURSE.halfWidth, viewDistance: COURSE.spawnDistance, travel },
    );
    const size = 82 * screenUnit(canvas) * projected.scale * prop.size;
    context.save();
    context.globalAlpha = projected.alpha * 0.86;
    if (prop.kind === "rock") drawRock(context, projected.x, projected.y, size * 0.7);
    else drawPine(context, projected.x, projected.y, size);
    context.restore();
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
  const width = projected.pathHalf * 1.88;
  const height = 18 * screenUnit(canvas) * projected.scale;
  const { x, y } = projected;

  context.fillStyle = "rgba(52, 103, 121, 0.2)";
  context.beginPath();
  context.ellipse(x + width * 0.04, y + height * 1.4, width * 0.52, height * 0.32, 0, 0, Math.PI * 2);
  context.fill();

  // A raised snow wedge and a shaded log make the takeoff height legible.
  context.fillStyle = "#9ac8d8";
  context.beginPath();
  context.moveTo(x - width * 0.43, y + height * 1.25);
  context.lineTo(x - width * 0.37, y - height * 0.6);
  context.lineTo(x + width * 0.37, y - height * 0.6);
  context.lineTo(x + width * 0.43, y + height * 1.25);
  context.closePath();
  context.fill();

  context.fillStyle = "#e9f8fc";
  context.beginPath();
  context.moveTo(x - width * 0.37, y - height * 0.6);
  context.lineTo(x + width * 0.37, y - height * 0.6);
  context.lineTo(x + width * 0.43, y + height * 0.72);
  context.lineTo(x - width * 0.43, y + height * 0.72);
  context.closePath();
  context.fill();

  context.fillStyle = "#6d3b1e";
  context.fillRect(x - width / 2, y - height, width, height);
  context.fillStyle = "#a86832";
  context.beginPath();
  context.moveTo(x - width / 2, y - height);
  context.lineTo(x - width / 2 + height * 0.32, y - height * 1.34);
  context.lineTo(x + width / 2 - height * 0.32, y - height * 1.34);
  context.lineTo(x + width / 2, y - height);
  context.closePath();
  context.fill();
  context.fillStyle = "#875029";
  context.fillRect(x - width / 2, y - height * 0.28, width, height * 0.28);
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

  context.fillStyle = "rgba(41, 89, 104, 0.13)";
  context.beginPath();
  context.ellipse(x + 9 * scale, projected.y + 4 * scale, wing * 0.54, 6 * scale, 0, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = "#18283a";
  for (const side of [-1, 1]) {
    context.beginPath();
    context.moveTo(x + side * 7 * scale, y - 3 * scale);
    context.quadraticCurveTo(x + side * wing * 0.55, y - 37 * scale, x + side * wing, y + 2 * scale);
    context.lineTo(x + side * wing * 0.72, y + 8 * scale);
    context.quadraticCurveTo(x + side * wing * 0.4, y - 13 * scale, x + side * 9 * scale, y + 7 * scale);
    context.closePath();
    context.fill();
    context.fillStyle = "#33475c";
    context.beginPath();
    context.moveTo(x + side * 8 * scale, y - 4 * scale);
    context.quadraticCurveTo(x + side * wing * 0.55, y - 35 * scale, x + side * wing * 0.9, y);
    context.lineTo(x + side * wing * 0.56, y - 5 * scale);
    context.closePath();
    context.fill();
    context.fillStyle = "#18283a";
  }

  context.fillStyle = "#243347";
  context.beginPath();
  context.ellipse(x, y, 18 * scale, 10 * scale, 0, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = "#41546a";
  context.beginPath();
  context.ellipse(x - 3 * scale, y - 3 * scale, 11 * scale, 4 * scale, -0.2, 0, Math.PI * 2);
  context.fill();
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

  context.fillStyle = "rgba(47, 100, 110, 0.11)";
  context.beginPath();
  context.ellipse(x + 12 * scale, projected.y + 5 * scale, half * 0.73, 6 * scale, 0, 0, Math.PI * 2);
  context.fill();

  context.lineCap = "round";
  context.lineWidth = Math.max(5, 11 * scale);
  context.strokeStyle = "#4e301f";
  context.beginPath();
  context.moveTo(x - half, y - 6 * scale);
  context.quadraticCurveTo(x, y + 14 * scale, x + half, y - 6 * scale);
  context.stroke();
  context.lineWidth = Math.max(2, 4 * scale);
  context.strokeStyle = "#a36b3c";
  context.beginPath();
  context.moveTo(x - half, y - 9 * scale);
  context.quadraticCurveTo(x, y + 9 * scale, x + half, y - 9 * scale);
  context.stroke();

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

const drawHazards = (context, canvas, riderAcross, travel, hazards) => {
  for (const hazard of [...hazards].sort((a, b) => b.z - a.z)) {
    if (hazard.z < -2 || hazard.z > COURSE.spawnDistance) continue;

    const projected = projectCoursePoint(
      canvas, riderAcross, hazard,
      { halfWidth: COURSE.halfWidth, viewDistance: COURSE.spawnDistance, travel },
    );
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
  let course = { hazards: [], phase: "idle" };

  game.events.addEventListener("course:update", (event) => {
    course = {
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
    const viewAcross = courseViewAcross(
      game.canvas, riderAcross, cameraAcross, zoom, COURSE.halfWidth,
    );
    const downhill = Number(riderState?.position?.downhill) || 0;
    const surface = riderState?.surface ?? "powder";
    if (course.phase === "idle") {
      travel = 0;
      trail = [];
    } else {
      travel = Math.max(0, downhill);
      if (surface !== "powder") trail = [];
      if (course.phase === "running" && surface === "powder" &&
          (riderState?.air ?? 0) < 0.08 &&
          (trail.length === 0 || travel - trail.at(-1).downhill >= 0.45)) {
        trail.push({ across: riderAcross, downhill: travel });
      }
      trail = trail.filter((sample) => travel - sample.downhill < 42);
    }

    context.save();
    context.translate(game.canvas.width / 2, game.canvas.height / 2);
    context.rotate(-(Number(camera?.roll) || 0));
    context.translate(-game.canvas.width / 2, -game.canvas.height / 2);
    drawBackground(context, game.canvas, viewAcross, travel);
    drawSnowTexture(
      context,
      game.canvas,
      viewAcross,
      travel,
      surface,
      Number(riderState?.speed) || 0,
    );
    if (surface === "powder") {
      drawPowderTrail(context, game.canvas, viewAcross, travel, trail);
    }
    if (surface === "powder" && course.phase === "running" &&
        (riderState?.air ?? 0) < 0.08) {
      const spray = clamp(
        (Number(riderState?.slash) || 0) * 0.85 +
          (Number(riderState?.skid) || 0) * 0.5 +
          (Number(riderState?.washout) || 0) * 0.35,
        0,
        1,
      );
      const direction = Math.sign(riderState?.slipAngle || riderState?.edge || 1);
      const riderX = game.canvas.width / 2 + (riderAcross - cameraAcross) * 14 * zoom;
      drawSnowSpray(context, game.canvas, riderX, direction, spray, travel);
    }
    drawSideScenery(context, game.canvas, viewAcross, travel);
    drawPisteMarkers(context, game.canvas, viewAcross, travel);
    drawHazards(context, game.canvas, viewAcross, travel, course.hazards);
    context.restore();
  });
}
