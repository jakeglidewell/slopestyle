const clamp = (value, minimum, maximum) =>
  Math.min(maximum, Math.max(minimum, value));

const finiteOr = (value, fallback = 0) =>
  Number.isFinite(value) ? value : fallback;

const point = (x, y) => Object.freeze({ x, y });

const polygon = (part, tone, points) =>
  Object.freeze({
    part,
    points: Object.freeze(points),
    tone,
  });

const rotatedRectangle = (centerX, centerY, width, height, angle) => {
  const cosine = Math.cos(angle);
  const sine = Math.sin(angle);

  return [
    [-width / 2, -height / 2],
    [width / 2, -height / 2],
    [width / 2, height / 2],
    [-width / 2, height / 2],
  ].map(([x, y]) =>
    point(
      centerX + x * cosine - y * sine,
      centerY + x * sine + y * cosine,
    ),
  );
};

const limb = (ankle, knee, hip, halfWidth) => [
  point(ankle.x - halfWidth, ankle.y),
  point(knee.x - halfWidth, knee.y),
  point(hip.x - halfWidth, hip.y),
  point(hip.x + halfWidth, hip.y),
  point(knee.x + halfWidth, knee.y),
  point(ankle.x + halfWidth, ankle.y),
];

const segment = (start, end, width) => {
  const deltaX = end.x - start.x;
  const deltaY = end.y - start.y;
  const length = Math.hypot(deltaX, deltaY) || 1;
  const offsetX = (-deltaY / length) * (width / 2);
  const offsetY = (deltaX / length) * (width / 2);

  return [
    point(start.x + offsetX, start.y + offsetY),
    point(end.x + offsetX, end.y + offsetY),
    point(end.x - offsetX, end.y - offsetY),
    point(start.x - offsetX, start.y - offsetY),
  ];
};

export function buildLowPolyRider(pose = {}) {
  const crouch = clamp(finiteOr(pose.crouch), 0, 1);
  const lean = clamp(finiteOr(pose.lean), -1, 1);
  const twist = clamp(finiteOr(pose.upperBodyTwist), -1, 1);
  const boardAngle = clamp(finiteOr(pose.boardRoll), -Math.PI, Math.PI);
  const bob = finiteOr(pose.bob) * 20;
  const hipCenter = point(lean * 16, -42 + crouch * 18 + bob);
  const leftAnkle = point(-19, -4 + bob);
  const rightAnkle = point(19, -4 + bob);
  const leftKnee = point(-27 + lean * 5, -23 + crouch * 9 + bob);
  const rightKnee = point(27 + lean * 5, -23 + crouch * 9 + bob);
  const leftHip = point(hipCenter.x - 8, hipCenter.y);
  const rightHip = point(hipCenter.x + 8, hipCenter.y);
  const shoulderCenter = point(
    hipCenter.x + lean * 13 + twist * 4,
    hipCenter.y - 34 + crouch * 8,
  );
  const leftShoulder = point(shoulderCenter.x - 15, shoulderCenter.y + 2);
  const rightShoulder = point(shoulderCenter.x + 15, shoulderCenter.y - 2);
  const leftHand = point(
    hipCenter.x - 24 + twist * 14,
    hipCenter.y + 11 + crouch * 5,
  );
  const rightHand = point(
    hipCenter.x + 24 + twist * 14,
    hipCenter.y + 11 + crouch * 5,
  );
  const headCenter = point(
    shoulderCenter.x + lean * 9,
    shoulderCenter.y - 15,
  );

  return Object.freeze([
    polygon(
      "board",
      "board",
      rotatedRectangle(0, 2 + bob, 84, 7, boardAngle * 0.45),
    ),
    polygon(
      "left-boot",
      "boots",
      rotatedRectangle(leftAnkle.x, leftAnkle.y, 19, 8, boardAngle * 0.25),
    ),
    polygon(
      "right-boot",
      "boots",
      rotatedRectangle(rightAnkle.x, rightAnkle.y, 19, 8, boardAngle * 0.25),
    ),
    polygon("left-leg", "pantsShadow", limb(leftAnkle, leftKnee, leftHip, 5)),
    polygon("right-leg", "pants", limb(rightAnkle, rightKnee, rightHip, 5)),
    polygon("torso", "jacket", [
      leftHip,
      leftShoulder,
      rightShoulder,
      rightHip,
    ]),
    polygon("left-arm", "jacketShadow", segment(leftShoulder, leftHand, 8)),
    polygon("right-arm", "jacket", segment(rightShoulder, rightHand, 8)),
    polygon("head", "helmet", [
      point(headCenter.x - 8, headCenter.y - 6),
      point(headCenter.x, headCenter.y - 10),
      point(headCenter.x + 9, headCenter.y - 5),
      point(headCenter.x + 8, headCenter.y + 6),
      point(headCenter.x, headCenter.y + 10),
      point(headCenter.x - 9, headCenter.y + 5),
    ]),
  ]);
}
