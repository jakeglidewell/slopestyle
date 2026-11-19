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
  const airborne = clamp(finiteOr(pose.airborne), 0, 1);
  const foreAft = clamp(finiteOr(pose.foreAft), -1, 1);
  const jumpStretch = clamp(finiteOr(pose.jumpStretch), 0, 1);
  const lean = clamp(finiteOr(pose.lean), -1, 1);
  const toeSide = pose.toeSide !== false;
  const twist = clamp(finiteOr(pose.upperBodyTwist), -1, 1);
  const boardAngle = clamp(finiteOr(pose.boardRoll), -Math.PI, Math.PI);
  const boardPitch = clamp(finiteOr(pose.boardPitch), -0.6, 0.6);
  const butter = clamp(finiteOr(pose.butter), 0, 1);
  const press = clamp(finiteOr(pose.press), -1, 1);
  const noseLift = Math.max(0, press) * 18;
  const tailLift = Math.max(0, -press) * 18;
  const handDrag = clamp(finiteOr(pose.handDrag), 0, 1);
  const grab = clamp(finiteOr(pose.grab), 0, 1);
  const scarfFlutter = clamp(finiteOr(pose.scarfFlutter), -1, 1);
  const bob = finiteOr(pose.bob) * 20;
  const boardBob = finiteOr(pose.boardBob, finiteOr(pose.bob)) * 20;
  const kneeBob = bob * 0.42 + boardBob * 0.58;
  const boardShear = Math.sin(boardAngle) * 8;
  const stanceDirection =
    (pose.stance === "goofy" ? -1 : 1) * (pose.switchRiding ? -1 : 1);
  const hipCenter = point(
    lean * (toeSide ? 16 : 11),
    -2 + crouch * 14 - jumpStretch * 5 - foreAft * 5 +
      butter * 4 + (toeSide ? 0 : Math.abs(lean) * 3) + bob,
  );
  const leftAnkle = point(-2 + boardShear * 0.1, -23 - noseLift * 0.35 + boardBob);
  const rightAnkle = point(2 - boardShear * 0.1, 24 - tailLift * 0.35 + boardBob);
  const leftKnee = point(-9 + lean * 5, -9 + crouch * 7 + kneeBob);
  const rightKnee = point(9 + lean * 5, 10 + crouch * 5 + kneeBob);
  const leftHip = point(hipCenter.x - 7, hipCenter.y - 2);
  const rightHip = point(hipCenter.x + 7, hipCenter.y + 2);
  const shoulderCenter = point(
    hipCenter.x + lean * (toeSide ? 14 : 8) + twist * 5,
    hipCenter.y - 29 + crouch * 14 - jumpStretch * 8 +
      (toeSide ? Math.abs(lean) * 2 : 0),
  );
  const leftShoulder = point(shoulderCenter.x - 15, shoulderCenter.y + 3);
  const rightShoulder = point(shoulderCenter.x + 15, shoulderCenter.y - 3);
  const dragLeft = lean < 0 ? handDrag : 0;
  const dragRight = lean >= 0 ? handDrag : 0;
  const leftHand = point(
    hipCenter.x - 21 + twist * 8,
    hipCenter.y + 12 + crouch * 9 - airborne * 3 + dragLeft * 22,
  );
  const rightHand = point(
    hipCenter.x + 21 + twist * 8 - grab * 10,
    hipCenter.y + 12 + crouch * 9 - airborne * 3 + dragRight * 22 + grab * 9,
  );
  const headCenter = point(
    shoulderCenter.x + lean * 8,
    shoulderCenter.y - 15 - jumpStretch * 3,
  );

  return Object.freeze([
    polygon(
      "board",
      "board",
      [
        point(boardShear, -60 + boardPitch * 10 - noseLift + boardBob),
        point(11 + boardShear * 0.72, -48 + boardPitch * 6 - noseLift * 0.7 + boardBob),
        point(13 - boardShear * 0.65, 44 + boardBob),
        point(7 - boardShear, 58 - boardPitch * 3 - tailLift + boardBob),
        point(-7 - boardShear, 58 - boardPitch * 3 - tailLift + boardBob),
        point(-13 - boardShear * 0.65, 44 + boardBob),
        point(-11 + boardShear * 0.72, -48 + boardPitch * 6 - noseLift * 0.7 + boardBob),
      ],
    ),
    polygon(
      "board-inset",
      "boardShadow",
      [
        point(boardShear * 0.7, -46 + boardBob),
        point(5 + boardShear * 0.4, -39 + boardBob),
        point(6 - boardShear * 0.4, 43 + boardBob),
        point(-6 - boardShear * 0.4, 43 + boardBob),
        point(-5 + boardShear * 0.4, -39 + boardBob),
      ],
    ),
    polygon("board-stripe", "boardAccent", [
      point(boardShear * 0.65, -41 + boardBob),
      point(3 + boardShear * 0.35, -35 + boardBob),
      point(3 - boardShear * 0.2, 40 + boardBob),
      point(-3 - boardShear * 0.2, 40 + boardBob),
      point(-3 + boardShear * 0.35, -35 + boardBob),
    ]),
    ...(airborne > 0.12 ? [polygon("board-underside", "boardUnderside", [
      point(11 + boardShear * 0.72, -48 + boardBob),
      point(16 + boardShear * 0.6, -43 + boardBob),
      point(18 - boardShear * 0.65, 46 + boardBob),
      point(7 - boardShear, 58 + boardBob),
      point(13 - boardShear * 0.65, 44 + boardBob),
    ])] : []),
    polygon(
      "left-boot",
      "boots",
      rotatedRectangle(
        leftAnkle.x,
        leftAnkle.y,
        29,
        9,
        -0.28 * stanceDirection + boardAngle * 0.1,
      ),
    ),
    polygon(
      "right-boot",
      "boots",
      rotatedRectangle(
        rightAnkle.x,
        rightAnkle.y,
        29,
        9,
        0.28 * stanceDirection + boardAngle * 0.1,
      ),
    ),
    polygon("left-leg", "pantsShadow", limb(leftAnkle, leftKnee, leftHip, 8.5)),
    polygon("right-leg", "pants", limb(rightAnkle, rightKnee, rightHip, 8.5)),
    polygon("torso", "jacket", [
      leftHip,
      leftShoulder,
      rightShoulder,
      rightHip,
    ]),
    polygon("back-panel", "jacketShadow", [
      point(shoulderCenter.x - 4, shoulderCenter.y),
      point(shoulderCenter.x + 12, shoulderCenter.y - 1),
      point(hipCenter.x + 5, hipCenter.y),
      point(hipCenter.x - 2, hipCenter.y - 1),
    ]),
    polygon("jacket-skirt", "jacket", [
      point(leftHip.x - 2, leftHip.y - 2),
      point(rightHip.x + 3, rightHip.y + 1),
      point(rightHip.x + 5, rightHip.y + 10),
      point(hipCenter.x, hipCenter.y + 13),
      point(leftHip.x - 4, leftHip.y + 8),
    ]),
    polygon("jacket-stripe", "jacketAccent", [
      point(leftShoulder.x + 4, leftShoulder.y + 4),
      point(rightShoulder.x - 4, rightShoulder.y + 1),
      point(rightShoulder.x - 4, rightShoulder.y + 7),
      point(leftShoulder.x + 4, leftShoulder.y + 10),
    ]),
    polygon("left-arm", "jacketShadow", segment(leftShoulder, leftHand, 8)),
    polygon("right-arm", "jacket", segment(rightShoulder, rightHand, 8)),
    polygon("left-mitt", "mitts", rotatedRectangle(leftHand.x, leftHand.y, 8, 10, -0.18)),
    polygon("right-mitt", "mitts", rotatedRectangle(rightHand.x, rightHand.y, 8, 10, 0.18)),
    polygon("head", "helmet", [
      point(headCenter.x - 8, headCenter.y - 6),
      point(headCenter.x, headCenter.y - 10),
      point(headCenter.x + 9, headCenter.y - 5),
      point(headCenter.x + 8, headCenter.y + 6),
      point(headCenter.x, headCenter.y + 10),
      point(headCenter.x - 9, headCenter.y + 5),
    ]),
    polygon("helmet-panel", "helmetShadow", [
      point(headCenter.x - 7, headCenter.y - 5),
      point(headCenter.x, headCenter.y - 9),
      point(headCenter.x + 7, headCenter.y - 4),
      point(headCenter.x + 3, headCenter.y),
      point(headCenter.x - 5, headCenter.y),
    ]),
    polygon("goggle-strap", "goggleStrap", [
      point(headCenter.x - 9, headCenter.y - 1),
      point(headCenter.x + 9, headCenter.y - 1),
      point(headCenter.x + 8, headCenter.y + 3),
      point(headCenter.x - 8, headCenter.y + 3),
    ]),
    polygon("goggle-lens", "goggleLens", [
      point(headCenter.x - 6, headCenter.y - 2),
      point(headCenter.x + 7, headCenter.y - 2),
      point(headCenter.x + 5, headCenter.y + 2),
      point(headCenter.x - 5, headCenter.y + 2),
    ]),
    polygon("scarf", "scarf", [
      point(shoulderCenter.x + 7, shoulderCenter.y - 10),
      point(shoulderCenter.x + 15, shoulderCenter.y - 8),
      point(shoulderCenter.x + 21 + lean * 4 + scarfFlutter * 5,
        shoulderCenter.y + 10 - airborne * 5 - Math.abs(scarfFlutter) * 4),
      point(shoulderCenter.x + 11, shoulderCenter.y + 2),
    ]),
  ]);
}
