import { buildLowPolyRider } from "./model.js";

export const PROTOTYPE_RIDER_PALETTE = Object.freeze({
  board: "#22d3ee",
  boardShadow: "#0891b2",
  boots: "#0f172a",
  carveTrace: "rgba(71, 125, 148, 0.58)",
  helmet: "#ecfeff",
  helmetShadow: "#94a3b8",
  jacket: "#0891b2",
  jacketShadow: "#155e75",
  mitts: "#0f172a",
  pants: "#334155",
  pantsShadow: "#0f172a",
  shadow: "rgba(15, 23, 42, 0.22)",
  snowSpray: "#b9e9f5",
});

const clamp = (value, minimum, maximum) =>
  Math.min(maximum, Math.max(minimum, value));

export function getJumpLift(canvas, air = 0) {
  const displayHeight = canvas.getBoundingClientRect?.().height || canvas.height;
  const pixelRatio = clamp(canvas.height / Math.max(1, displayHeight), 1, 2);

  return Math.max(0, air) * 42 * pixelRatio;
}

export function drawSnowSpray(context, options = {}) {
  const {
    direction = 1,
    intensity = 0,
    palette = PROTOTYPE_RIDER_PALETTE,
    scale = 1,
    x = 0,
    y = 0,
  } = options;

  if (intensity < 0.05) return;

  context.save();
  context.translate(x, y);
  context.scale(scale, scale);
  context.fillStyle = palette.snowSpray;

  for (let particle = 0; particle < 7; particle += 1) {
    const progress = (particle + 1) / 7;
    const spread = (7 + particle * 5) * direction;
    context.globalAlpha = intensity * (0.72 - progress * 0.42);
    context.beginPath();
    context.ellipse(
      spread,
      8 + particle * 2.4,
      2.5 + intensity * 4 * (1 - progress * 0.45),
      1.6 + intensity * 2.5 * (1 - progress * 0.5),
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
    context.fillStyle = palette[polygon.tone];
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
      const viewportScale = clamp(canvas.width / 480, 0.8, 1.6);
      const cameraLag =
        (state.position.across - camera.position.across) * 14;
      const jumpLift = getJumpLift(canvas, state.air);
      const riderX = canvas.width / 2 + cameraLag;
      const groundY = canvas.height * 0.78;
      const shadowScale = 1 - clamp((state.air ?? 0) / 3.5, 0, 0.55);

      drawCarveTrace(context, {
        edge: state.edge,
        palette,
        quality: state.air > 0 ? 0 : 1 - state.skid,
        scale: viewportScale,
        x: riderX,
        y: groundY,
      });

      drawSnowSpray(context, {
        direction: -Math.sign(state.edge || 1),
        intensity: pose.spray,
        palette,
        scale: viewportScale,
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
          pose.boardYaw * 0.12 + pose.boardSlip * 0.55 + pose.boardTweak,
        palette,
        rotation: clamp(
          pose.boardYaw * 0.12 + pose.boardSlip * 0.16 + pose.fallRotation,
          -1.55,
          1.55,
        ),
        scale: viewportScale,
        x: riderX,
        y: groundY - jumpLift,
      });
    },
  });
}
