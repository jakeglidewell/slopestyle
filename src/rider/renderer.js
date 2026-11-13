import { buildLowPolyRider } from "./model.js";

export const PROTOTYPE_RIDER_PALETTE = Object.freeze({
  board: "#22d3ee",
  boots: "#0f172a",
  helmet: "#ecfeff",
  jacket: "#0891b2",
  jacketShadow: "#155e75",
  pants: "#334155",
  pantsShadow: "#0f172a",
});

const clamp = (value, minimum, maximum) =>
  Math.min(maximum, Math.max(minimum, value));

export function drawLowPolyRider(context, model, options = {}) {
  const {
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
    const [firstPoint, ...remainingPoints] = polygon.points;
    context.beginPath();
    context.moveTo(firstPoint.x, firstPoint.y);

    for (const point of remainingPoints) {
      context.lineTo(point.x, point.y);
    }

    context.closePath();
    context.fillStyle = palette[polygon.tone];
    context.fill();
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

      drawLowPolyRider(context, buildLowPolyRider(pose), {
        palette,
        rotation: clamp(pose.boardYaw * 0.3, -0.35, 0.35),
        scale: viewportScale,
        x: canvas.width / 2 + cameraLag,
        y: canvas.height * 0.78,
      });
    },
  });
}
