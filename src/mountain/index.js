/**
 * Owner 2 entry point: course generation, obstacles, pickups, and environment.
 */
export const COURSE = Object.freeze({
  halfWidth: 9.5,
  spawnDistance: 44,
});

const SKY_TOP = "#7dd3fc";
const SKY_BOTTOM = "#effcff";
const SNOW = "#ffffff";
const SNOW_SHADE = "#dff7ff";
const EDGE = "#74c7df";
const TREE = "#19724a";
const TREE_DARK = "#0e5137";
const ROCK = "#6b7280";
const LOG = "#8b5a2b";
const BIRD = "#263238";

const clamp = (value, minimum, maximum) =>
  Math.min(maximum, Math.max(minimum, value));

const project = (canvas, riderAcross, hazard) => {
  const z = clamp(hazard.z, 0, COURSE.spawnDistance);
  const t = 1 - z / COURSE.spawnDistance;
  const eased = t * t * (3 - 2 * t);
  const horizon = canvas.height * 0.2;
  const y = horizon + eased * canvas.height * 0.68;
  const pathHalf = canvas.width * (0.13 + eased * 0.38);
  const x =
    canvas.width / 2 +
    ((hazard.x - riderAcross) / COURSE.halfWidth) * pathHalf;

  return Object.freeze({
    alpha: clamp(eased * 1.4, 0, 1),
    pathHalf,
    scale: 0.28 + eased * 1.45,
    x,
    y,
  });
};

const drawMountainRange = (context, canvas, base, color) => {
  context.fillStyle = color;
  context.beginPath();
  context.moveTo(0, canvas.height * base);

  for (let x = -canvas.width * 0.1; x <= canvas.width * 1.1; x += canvas.width / 7) {
    context.lineTo(x + canvas.width / 14, canvas.height * (base - 0.18));
    context.lineTo(x + canvas.width / 7, canvas.height * base);
  }

  context.lineTo(canvas.width, canvas.height * 0.5);
  context.lineTo(0, canvas.height * 0.5);
  context.closePath();
  context.fill();
};

const drawBackground = (context, canvas, course) => {
  const sky = context.createLinearGradient(0, 0, 0, canvas.height * 0.5);

  sky.addColorStop(0, SKY_TOP);
  sky.addColorStop(1, SKY_BOTTOM);
  context.fillStyle = sky;
  context.fillRect(0, 0, canvas.width, canvas.height);

  drawMountainRange(context, canvas, 0.31, "#89b7c8");
  drawMountainRange(context, canvas, 0.43, "#b4d7e3");

  context.fillStyle = "#7aa95e";
  for (let index = 0; index < 18; index += 1) {
    const side = index % 2 === 0 ? -1 : 1;
    const x =
      canvas.width / 2 +
      side * (canvas.width * 0.34 + (index % 5) * canvas.width * 0.045);
    const y = canvas.height * (0.36 + (index % 6) * 0.075);
    const size = canvas.width * (0.018 + (index % 3) * 0.006);

    context.fillStyle = index % 3 === 0 ? TREE_DARK : TREE;
    context.beginPath();
    context.moveTo(x, y - size * 2.4);
    context.lineTo(x - size, y + size * 0.7);
    context.lineTo(x + size, y + size * 0.7);
    context.closePath();
    context.fill();
  }

  const horizon = canvas.height * 0.2;
  const nearLeft = canvas.width * 0.08;
  const nearRight = canvas.width * 0.92;
  const farLeft = canvas.width * 0.39;
  const farRight = canvas.width * 0.61;

  context.fillStyle = SNOW_SHADE;
  context.fillRect(0, canvas.height * 0.45, canvas.width, canvas.height);

  context.fillStyle = SNOW;
  context.beginPath();
  context.moveTo(farLeft, horizon);
  context.quadraticCurveTo(canvas.width * 0.46, canvas.height * 0.54, nearLeft, canvas.height);
  context.lineTo(nearRight, canvas.height);
  context.quadraticCurveTo(canvas.width * 0.54, canvas.height * 0.54, farRight, horizon);
  context.closePath();
  context.fill();

  context.strokeStyle = EDGE;
  context.lineWidth = Math.max(2, canvas.width * 0.003);
  context.globalAlpha = 0.72;

  for (const side of [-1, 1]) {
    context.beginPath();
    context.moveTo(side < 0 ? farLeft : farRight, horizon);
    context.quadraticCurveTo(
      canvas.width * (side < 0 ? 0.46 : 0.54),
      canvas.height * 0.54,
      side < 0 ? nearLeft : nearRight,
      canvas.height,
    );
    context.stroke();
  }

  context.globalAlpha = 1;

  if (course.phase === "running" && course.rewardTimer > 0) {
    context.fillStyle = "rgba(54, 211, 153, 0.12)";
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
};

const drawSteerHazard = (context, projected, hazard) => {
  context.globalAlpha = projected.alpha;

  if (hazard.variant === "rock") {
    context.fillStyle = ROCK;
    context.beginPath();
    context.ellipse(
      projected.x,
      projected.y,
      24 * projected.scale,
      16 * projected.scale,
      -0.18,
      0,
      Math.PI * 2,
    );
    context.fill();
    context.fillStyle = "rgba(255, 255, 255, 0.36)";
    context.beginPath();
    context.ellipse(
      projected.x - 7 * projected.scale,
      projected.y - 7 * projected.scale,
      7 * projected.scale,
      3 * projected.scale,
      -0.4,
      0,
      Math.PI * 2,
    );
    context.fill();
  } else {
    context.fillStyle = LOG;
    context.fillRect(
      projected.x - 4 * projected.scale,
      projected.y - 20 * projected.scale,
      8 * projected.scale,
      24 * projected.scale,
    );

    for (let layer = 0; layer < 3; layer += 1) {
      context.fillStyle = layer === 1 ? TREE : TREE_DARK;
      context.beginPath();
      context.moveTo(projected.x, projected.y - (72 - layer * 20) * projected.scale);
      context.lineTo(
        projected.x - (32 - layer * 4) * projected.scale,
        projected.y - (14 - layer * 2) * projected.scale,
      );
      context.lineTo(
        projected.x + (32 - layer * 4) * projected.scale,
        projected.y - (14 - layer * 2) * projected.scale,
      );
      context.closePath();
      context.fill();
    }
  }

  context.globalAlpha = 1;
};

const drawJumpHazard = (context, projected) => {
  const width = projected.pathHalf * 1.55;
  const height = 18 * projected.scale;

  context.globalAlpha = projected.alpha;
  context.save();
  context.translate(projected.x, projected.y);
  context.rotate(-0.05);
  context.fillStyle = LOG;
  context.fillRect(-width / 2, -height, width, height);
  context.fillStyle = "#b7793c";
  context.fillRect(-width / 2, -height, width, height * 0.28);
  context.strokeStyle = "#5f351b";
  context.lineWidth = Math.max(2, 2 * projected.scale);
  context.strokeRect(-width / 2, -height, width, height);
  context.restore();
  context.globalAlpha = 1;
};

const drawDuckHazard = (context, projected, hazard) => {
  context.globalAlpha = projected.alpha;
  context.save();
  context.translate(projected.x, projected.y - 92 * projected.scale);

  if (hazard.variant === "bird") {
    context.fillStyle = BIRD;
    context.beginPath();
    context.ellipse(0, 0, 17 * projected.scale, 9 * projected.scale, 0, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = BIRD;
    context.lineWidth = Math.max(2, 4 * projected.scale);
    context.beginPath();
    context.moveTo(-8 * projected.scale, -2 * projected.scale);
    context.quadraticCurveTo(-40 * projected.scale, -24 * projected.scale, -64 * projected.scale, 0);
    context.moveTo(8 * projected.scale, -2 * projected.scale);
    context.quadraticCurveTo(40 * projected.scale, -24 * projected.scale, 64 * projected.scale, 0);
    context.stroke();
  } else {
    context.strokeStyle = "#7c4a24";
    context.lineWidth = Math.max(5, 9 * projected.scale);
    context.lineCap = "round";
    context.beginPath();
    context.moveTo(-projected.pathHalf * 0.72, 0);
    context.quadraticCurveTo(0, -18 * projected.scale, projected.pathHalf * 0.72, 0);
    context.stroke();
    context.fillStyle = TREE;
    for (const x of [-0.42, -0.18, 0.16, 0.4]) {
      context.beginPath();
      context.ellipse(
        projected.pathHalf * x,
        -8 * projected.scale,
        14 * projected.scale,
        8 * projected.scale,
        x,
        0,
        Math.PI * 2,
      );
      context.fill();
    }
  }

  context.restore();
  context.globalAlpha = 1;
};

const drawHazards = (context, canvas, riderAcross, hazards) => {
  for (const hazard of [...hazards].sort((a, b) => b.z - a.z)) {
    if (hazard.z < -2 || hazard.z > COURSE.spawnDistance) continue;

    const projected = project(canvas, riderAcross, hazard);

    if (hazard.kind === "jump") {
      drawJumpHazard(context, projected);
    } else if (hazard.kind === "duck") {
      drawDuckHazard(context, projected, hazard);
    } else {
      drawSteerHazard(context, projected, hazard);
    }
  }
};

export default async function setupMountain(game) {
  const context = game.canvas.getContext("2d");
  let course = Object.freeze({
    hazards: Object.freeze([]),
    phase: "idle",
    rewardTimer: 0,
  });

  game.events.addEventListener("course:update", (event) => {
    course = Object.freeze({
      hazards: Object.freeze([...(event.detail?.hazards ?? [])]),
      phase: event.detail?.phase ?? "idle",
      rewardTimer: Number(event.detail?.rewardTimer) || 0,
    });
  });

  game.events.addEventListener("rider:update", (event) => {
    const riderAcross = Number(event.detail?.state?.position?.across) || 0;

    drawBackground(context, game.canvas, course);
    drawHazards(context, game.canvas, riderAcross, course.hazards);
  });
}
