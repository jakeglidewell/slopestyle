import { buildLowPolyRider } from "./model.js";

export const PROTOTYPE_RIDER_PALETTE = Object.freeze({
  board: "#18364f",
  boardAccent: "#61e2e8",
  boardShadow: "#2b6e80",
  boardUnderside: "#f5a357",
  boots: "#152536",
  carveTrace: "rgba(71, 125, 148, 0.58)",
  flatTrace: "rgba(116, 174, 194, 0.18)",
  goggleLens: "#89f0eb",
  goggleStrap: "#10243a",
  helmet: "#20354a",
  helmetShadow: "#10243a",
  jacket: "#ef7954",
  jacketAccent: "#ffe3af",
  jacketShadow: "#bc5147",
  mitts: "#17283a",
  pants: "#183c54",
  pantsShadow: "#10283b",
  powderTrace: "rgba(85, 159, 185, 0.24)",
  pressTrace: "rgba(71, 125, 148, 0.32)",
  scarf: "#f6cd75",
  shadow: "rgba(15, 42, 58, 0.24)",
  skidTrace: "rgba(116, 174, 194, 0.3)",
  snowSpray: "#ffffff",
});

const clamp = (value, minimum, maximum) =>
  Math.min(maximum, Math.max(minimum, value));

const normalizeAngle = (angle) =>
  Math.atan2(Math.sin(angle), Math.cos(angle));

export function getJumpLift(canvas, air = 0) {
  const displayHeight = canvas.getBoundingClientRect?.().height || canvas.height;
  const pixelRatio = clamp(canvas.height / Math.max(1, displayHeight), 1, 2);

  return Math.max(0, air) * 42 * pixelRatio;
}

export function createSnowTrackTrail(maxPoints = 1500) {
  let trackPoints = [];
  let previousElapsed = -1;
  let previousDownhill = -Infinity;
  let previousLandingImpact = 0;

  return Object.freeze({
    points() {
      return Object.freeze([...trackPoints]);
    },
    reset() {
      trackPoints = [];
      previousElapsed = -1;
      previousDownhill = -Infinity;
      previousLandingImpact = 0;
    },
    update(state) {
      const elapsed = Number(state?.elapsed) || 0;
      const downhill = Number(state?.position?.downhill) || 0;

      if (elapsed < previousElapsed || downhill < previousDownhill - 1) {
        trackPoints = [];
        previousLandingImpact = 0;
      }
      previousElapsed = elapsed;
      previousDownhill = downhill;

      const edge = Number(state?.edge) || 0;
      const skid = clamp(Number(state?.skid) || 0, 0, 1);
      const landingImpact = Number(state?.landingImpact) || 0;
      if (state?.air > 0 || state?.crashed) {
        previousLandingImpact = landingImpact;
        return;
      }

      const boardYaw = Number(state?.boardYaw) || 0;
      const edgeDirection = Math.sign(edge || state?.slipAngle || 1);
      const across =
        (Number(state?.position?.across) || 0) +
        Math.cos(boardYaw) * edgeDirection * 0.12;
      const previous = trackPoints.at(-1);
      const freshLanding = landingImpact > 1.5 && previousLandingImpact <= 1.5;
      previousLandingImpact = landingImpact;
      if (
        previous &&
        Math.hypot(across - previous.across, downhill - previous.downhill) < 0.1 &&
        !freshLanding
      ) {
        return;
      }

      const carveQuality = clamp(Number(state?.carveQuality) || 0, 0, 1);
      const kind =
        freshLanding
          ? "landing"
          : (Number(state?.butter) || 0) > 0.55
            ? "butter"
            : Math.abs(Number(state?.pressAmount) || 0) > 0.45 && skid < 0.2
              ? "press"
              : carveQuality >= 0.45 && skid < 0.36
          ? "carve"
          : skid >= 0.12 || Math.abs(edge) >= 0.08
            ? "skid"
            : state?.surface === "powder"
              ? "powder"
              : "flat";
      trackPoints.push(
        Object.freeze({
          across,
          downhill,
          kind,
          width:
            kind === "carve" ? 0.9 :
              kind === "press" ? 0.85 :
                kind === "flat" ? 1.5 :
                  kind === "powder" ? 2.5 :
                    kind === "landing" ? 4 + landingImpact * 0.5 :
                      2.2 + skid * 5.8,
        }),
      );
      if (trackPoints.length > maxPoints) {
        trackPoints = trackPoints.slice(-maxPoints);
      }
    },
  });
}

export function drawSnowTracks(context, points, options = {}) {
  const {
    cameraAcross = 0,
    currentDownhill = 0,
    groundY = 0,
    palette = PROTOTYPE_RIDER_PALETTE,
    scale = 1,
    viewportCenter = 0,
  } = options;

  if (!Array.isArray(points) || points.length < 2) return;

  const project = (point) => ({
    x: viewportCenter + (point.across - cameraAcross) * 14,
    y: groundY + (currentDownhill - point.downhill) * 10 * scale,
  });

  context.save();
  context.lineCap = "round";

  for (let index = 1; index < points.length; index += 1) {
    const start = points[index - 1];
    const end = points[index];
    const startBehind = currentDownhill - start.downhill;
    const endBehind = currentDownhill - end.downhill;
    if (startBehind < -0.2 || endBehind < -0.2 || startBehind > 22 || endBehind > 22) {
      continue;
    }

    const from = project(start);
    const to = project(end);
    const fade = 1 - clamp(Math.max(startBehind, endBehind) / 22, 0, 0.82);
    context.globalAlpha = fade;
    context.strokeStyle = end.kind === "carve"
      ? palette.carveTrace
      : end.kind === "flat"
        ? palette.flatTrace
        : end.kind === "powder"
          ? palette.powderTrace ?? palette.flatTrace
          : end.kind === "press"
            ? palette.pressTrace ?? palette.flatTrace
            : palette.skidTrace;
    if (end.kind === "landing") {
      context.fillStyle = palette.skidTrace;
      context.beginPath();
      context.ellipse(to.x, to.y, end.width * scale, end.width * scale * 0.35, 0, 0, Math.PI * 2);
      context.fill();
      continue;
    }
    context.lineWidth = Math.max(0.8, end.width * scale);
    context.beginPath();
    context.moveTo(from.x, from.y);
    context.lineTo(to.x, to.y);
    context.stroke();
  }

  context.restore();
}

export function drawSnowSpray(context, options = {}) {
  const {
    direction = 1,
    intensity = 0,
    palette = PROTOTYPE_RIDER_PALETTE,
    scale = 1,
    surface = "groomed",
    x = 0,
    y = 0,
  } = options;

  if (intensity < 0.05) return;

  context.save();
  context.translate(x, y);
  context.scale(scale, scale);
  context.fillStyle = palette.snowSpray;

  const count = surface === "powder" ? 12 : surface === "ice" ? 4 : 7;
  const size = surface === "powder" ? 1.65 : surface === "slush" ? 1.3 : 1;
  for (let particle = 0; particle < count; particle += 1) {
    const progress = (particle + 1) / count;
    const spread = (7 + particle * 5) * direction;
    context.globalAlpha = intensity * (0.72 - progress * 0.42);
    context.beginPath();
    context.ellipse(
      spread,
      8 + particle * 2.4,
      (2.5 + intensity * 4 * (1 - progress * 0.45)) * size,
      (1.6 + intensity * 2.5 * (1 - progress * 0.5)) * size,
      direction * -0.28,
      0,
      Math.PI * 2,
    );
    context.fill();
  }

  context.restore();
}

export function drawCarveTrace(context, options = {}) {
  const {
    edge = 0,
    palette = PROTOTYPE_RIDER_PALETTE,
    quality = 0,
    scale = 1,
    x = 0,
    y = 0,
  } = options;

  if (Math.abs(edge) < 0.12 || quality < 0.35) return;

  const direction = Math.sign(edge) || 1;
  context.save();
  context.globalAlpha = clamp(quality, 0, 1) * 0.82;
  context.strokeStyle = palette.carveTrace;
  context.lineWidth = Math.max(1, scale * 0.9);
  context.beginPath();
  context.moveTo(x - direction * 4 * scale, y + 7 * scale);
  context.lineTo(x - direction * 15 * scale, y + 54 * scale);
  context.stroke();
  context.restore();
}

export function drawLowPolyRider(context, model, options = {}) {
  const {
    boardTweak = 0,
    palette = PROTOTYPE_RIDER_PALETTE,
    rotation = 0,
    scale = 1,
    x = 0,
    y = 0,
  } = options;

  context.save();
  context.translate(x, y);
  context.rotate(rotation);
  context.scale(scale, scale);

  for (const polygon of model) {
    const isBoard = polygon.part.startsWith("board") || polygon.part.endsWith("boot");
    const isLeg = polygon.part.endsWith("leg");
    const partTweak = isBoard ? boardTweak : isLeg ? boardTweak * 0.45 : 0;
    const [firstPoint, ...remainingPoints] = polygon.points;
    context.save();
    context.rotate(partTweak);
    context.beginPath();
    context.moveTo(firstPoint.x, firstPoint.y);

    for (const point of remainingPoints) {
      context.lineTo(point.x, point.y);
    }

    context.closePath();
    context.fillStyle = palette[polygon.tone] ?? palette.jacket;
    context.fill();
    context.restore();
  }

  context.restore();
}

export function createRiderRenderer(
  canvas,
  palette = PROTOTYPE_RIDER_PALETTE,
) {
  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error("Rider rendering requires a 2D canvas context");
  }
  return Object.freeze({
    beginFrame() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    },
    draw({ camera, pose, state }) {
      const zoom = clamp(Number(camera.zoom) || 1, 0.82, 1);
      const viewportScale = clamp(
        Math.min(canvas.width / 700, canvas.height / 500), 1.1, 2.4,
      ) * zoom;
      const cameraLag =
        (state.position.across - camera.position.across) * 14 * zoom;
      const jumpLift = getJumpLift(canvas, state.air);
      const riderX = canvas.width / 2 + cameraLag;
      const groundY = canvas.height * 0.78 + (Number(camera.dip) || 0) * 9;
      const shadowScale = 1 - clamp((state.air ?? 0) / 3.5, 0, 0.55);

      context.save();
      context.translate(canvas.width / 2, canvas.height / 2);
      context.rotate(-(Number(camera.roll) || 0));
      context.translate(-canvas.width / 2, -canvas.height / 2);
      drawSnowSpray(context, {
        direction: -Math.sign(state.slipAngle || state.edge || 1),
        intensity: pose.spray,
        palette,
        scale: viewportScale,
        surface: state.surface,
        x: riderX,
        y: groundY + 4 * viewportScale,
      });

      context.save();
      context.fillStyle = palette.shadow;
      context.beginPath();
      context.ellipse(
        riderX,
        groundY + 10 * viewportScale,
        24 * viewportScale * shadowScale,
        7 * viewportScale * shadowScale,
        0,
        0,
        Math.PI * 2,
      );
      context.fill();
      context.restore();

      drawLowPolyRider(context, buildLowPolyRider(pose), {
        boardTweak:
          (pose.boardBodyRotation ?? normalizeAngle(pose.boardYaw - pose.bodyYaw)) * 0.78 +
          pose.boardTweak,
        palette,
        rotation:
          (pose.airborne > 0
            ? pose.bodySpin
            : clamp(normalizeAngle(pose.bodyYaw) * 0.12 + pose.lean * 0.08, -0.4, 0.4)) +
          pose.fallRotation,
        scale: viewportScale,
        x: riderX,
        y: groundY - jumpLift,
      });
      context.restore();
    },
  });
}
