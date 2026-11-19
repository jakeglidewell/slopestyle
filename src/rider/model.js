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

const baggyPant = (ankle, knee, hip) => [
  point(ankle.x - 10, ankle.y),
  point(ankle.x - 12, ankle.y - 6),
  point(knee.x - 15, knee.y + 5),
  point(knee.x - 14, knee.y - 6),
  point(hip.x - 12, hip.y - 4),
  point(hip.x + 12, hip.y - 4),
  point(knee.x + 14, knee.y - 6),
  point(knee.x + 15, knee.y + 5),
  point(ankle.x + 12, ankle.y - 6),
  point(ankle.x + 10, ankle.y),
];

const sleeve = (shoulder, end, shoulderWidth, endWidth) => [
  point(shoulder.x - shoulderWidth, shoulder.y - 2),
  point(shoulder.x + shoulderWidth, shoulder.y - 2),
  point(end.x + endWidth, end.y + 2),
  point(end.x - endWidth, end.y + 2),
];

const between = (start, end, fraction) =>
  point(
    start.x + (end.x - start.x) * fraction,
    start.y + (end.y - start.y) * fraction,
  );

const rotateAround = (subject, pivot, angle) => {
  const x = subject.x - pivot.x;
  const y = subject.y - pivot.y;
  const cosine = Math.cos(angle);
  const sine = Math.sin(angle);
  return point(
    pivot.x + x * cosine - y * sine,
    pivot.y + x * sine + y * cosine,
  );
};

const solveKnee = (ankle, hip, crouch, sideShape) => {
  const dx = hip.x - ankle.x;
  const dy = hip.y - ankle.y;
  const distance = Math.max(0.001, Math.hypot(dx, dy));
  const reach = Math.min(34, distance);
  const bend = Math.sqrt(Math.max(0, 18 ** 2 - (reach / 2) ** 2)) *
    (0.7 + crouch * 0.13) * sideShape;
  return point(
    (ankle.x + hip.x) / 2 - dy / distance * bend,
    (ankle.y + hip.y) / 2 + dx / distance * bend,
  );
};

export function buildLowPolyRider(pose = {}) {
  const crouch = clamp(finiteOr(pose.crouch), 0, 1);
  const airborne = clamp(finiteOr(pose.airborne), 0, 1);
  const foreAft = clamp(finiteOr(pose.foreAft), -1, 1);
  const jumpStretch = clamp(finiteOr(pose.jumpStretch), 0, 1);
  const lean = clamp(finiteOr(pose.lean), -1, 1);
  const toeSide = pose.toeSide !== false;
  const twist = clamp(finiteOr(pose.upperBodyTwist), -1, 1);
  const boardAngle = clamp(finiteOr(pose.boardRoll), -1.08, 1.08);
  const boardSwing = clamp(finiteOr(pose.boardSwing), -1.8, 1.8);
  const bodyTilt = clamp(finiteOr(pose.bodyTilt), -0.8, 0.8);
  const hipTwist = clamp(finiteOr(pose.hipTwist), -1.2, 1.2);
  const shoulderTwist = clamp(finiteOr(pose.shoulderTwist, twist), -0.7, 0.7);
  const headLook = clamp(finiteOr(pose.headLook), -1, 1);
  const armLag = clamp(finiteOr(pose.armLag), -1, 1);
  const clothLag = clamp(finiteOr(pose.clothLag), -1.5, 1.5);
  const clothFlutter = clamp(finiteOr(pose.clothFlutter), -1, 1);
  const handDrift = clamp(finiteOr(pose.handDrift), -1.5, 1.5);
  const breath = clamp(finiteOr(pose.breath), -1, 1);
  const stumble = clamp(finiteOr(pose.stumble), 0, 1);
  const crashCollapse = clamp(finiteOr(pose.crashCollapse), 0, 1);
  const crashSit = clamp(finiteOr(pose.crashSit), 0, 1);
  const boardFlex = clamp(finiteOr(pose.boardFlex), 0, 1);
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
  const rollSign = Math.sign(boardAngle) || 1;
  const edgeX = rollSign * 13;
  const rollWidth = Math.cos(Math.abs(boardAngle));
  const pivotY = airborne > 0.1 ? 0 : butter > 0.5
    ? press >= 0 ? 43 : -43
    : pose.switchRiding ? 24 : -23;
  const pivot = point(edgeX + (0 - edgeX) * rollWidth, pivotY + boardBob);
  const boardPoint = (x, y) => {
    const rolledX = edgeX + (x - edgeX) * rollWidth;
    const endLift = y < 0 ? noseLift * (-y / 58) : tailLift * (y / 55);
    const flex = Math.sin(((y + 58) / 113) * Math.PI) * boardFlex * 2;
    const raised = point(
      rolledX,
      y + boardPitch * y * 0.28 - endLift + flex + boardBob,
    );
    return rotateAround(raised, pivot, boardSwing);
  };
  const undersideOffset = Math.sin(Math.abs(boardAngle)) * 9;
  const liftedSide = -rollSign;
  const stanceDirection =
    (pose.stance === "goofy" ? -1 : 1) * (pose.switchRiding ? -1 : 1);
  const headFacing = stanceDirection;
  const hipCenter = point(
    lean * (toeSide ? 16 : 11) + bodyTilt * 4 + hipTwist * 2,
    -2 + crouch * 14 - jumpStretch * 5 - foreAft * 5 +
      butter * 4 + (toeSide ? 0 : Math.abs(lean) * 3) + bob +
      crashCollapse * 12 + crashSit * 7,
  );
  const leftAnkle = boardPoint(-6, -23);
  const rightAnkle = boardPoint(2, 31);
  const leftHip = point(hipCenter.x - 7 + hipTwist * 2, hipCenter.y - 2 - hipTwist * 3);
  const rightHip = point(hipCenter.x + 7 + hipTwist * 2, hipCenter.y + 2 + hipTwist * 3);
  const leftKnee = solveKnee(leftAnkle, leftHip, crouch, toeSide ? 1.08 : 0.92);
  const rightKnee = solveKnee(rightAnkle, rightHip, crouch, toeSide ? 0.94 : 1.12);
  const shoulderCenter = point(
    hipCenter.x + lean * (toeSide ? 13 : 7) + shoulderTwist * 5,
    hipCenter.y - 29 + crouch * 14 - jumpStretch * 8 +
      (toeSide ? Math.abs(lean) * 2 : 0) + crashCollapse * 9 + breath,
  );
  const leftShoulder = point(shoulderCenter.x - 15, shoulderCenter.y + 3 - shoulderTwist * 5);
  const rightShoulder = point(shoulderCenter.x + 15, shoulderCenter.y - 3 + shoulderTwist * 5);
  const dragLeft = lean < 0 ? handDrag : 0;
  const dragRight = lean >= 0 ? handDrag : 0;
  const leftHand = point(
    hipCenter.x - 21 + shoulderTwist * 8 + armLag * 8 - crashSit * 11 + handDrift,
    hipCenter.y + 12 + crouch * 9 - airborne * 3 + dragLeft * 22 -
      stumble * 21 + crashSit * 9 + handDrift * 0.6,
  );
  const rightHand = point(
    hipCenter.x + 21 + shoulderTwist * 8 + armLag * 11 - grab * 10 +
      crashSit * 5 - handDrift * 0.7,
    hipCenter.y + 12 + crouch * 9 - airborne * 3 + dragRight * 22 + grab * 9 -
      stumble * 28 - crashSit * 4 - handDrift * 0.4,
  );
  const leftElbow = point((leftShoulder.x + leftHand.x) / 2 - 3, (leftShoulder.y + leftHand.y) / 2 - 2);
  const rightElbow = point((rightShoulder.x + rightHand.x) / 2 + 4, (rightShoulder.y + rightHand.y) / 2 - 1);
  const leftTeeCuff = between(leftShoulder, leftElbow, 0.68);
  const rightTeeCuff = between(rightShoulder, rightElbow, 0.68);
  const headCenter = point(
    shoulderCenter.x + lean * 4 + headLook * 5 - bodyTilt * 2,
    shoulderCenter.y - 15 - jumpStretch * 3 + crashCollapse * 4,
  );

  return Object.freeze([
    polygon(
      "board",
      "board",
      [
        boardPoint(-8, -58),
        boardPoint(8, -58),
        boardPoint(12, -52),
        boardPoint(13, 44),
        boardPoint(9, 54),
        boardPoint(-9, 54),
        boardPoint(-13, 44),
        boardPoint(-12, -52),
      ],
    ),
    polygon("board-side", "boardSide", [
      boardPoint(8, -58),
      point(boardPoint(8, -58).x + 4, boardPoint(8, -58).y + 4),
      point(boardPoint(13, 44).x + 4, boardPoint(13, 44).y + 4),
      boardPoint(13, 44),
    ]),
    polygon("board-tail-side", "boardBase", [
      boardPoint(-9, 54),
      boardPoint(9, 54),
      point(boardPoint(9, 54).x + 3, boardPoint(9, 54).y + 4),
      point(boardPoint(-9, 54).x + 3, boardPoint(-9, 54).y + 4),
    ]),
    polygon(
      "board-underside",
      "boardBase",
      [
        boardPoint(liftedSide * (11 + undersideOffset / rollWidth), -49),
        boardPoint(liftedSide * 11, -49),
        boardPoint(liftedSide * 13, 45),
        boardPoint(liftedSide * (13 + undersideOffset / rollWidth), 45),
      ],
    ),
    polygon(
      "board-edge",
      "boardEdge",
      [
        boardPoint(rollSign * 12.2, -48),
        boardPoint(rollSign * 13.2, -45),
        boardPoint(rollSign * 13.2, 42),
        boardPoint(rollSign * 12.2, 45),
      ],
    ),
    polygon(
      "board-inset",
      "boardShadow",
      [
        boardPoint(0, -46),
        boardPoint(5, -41),
        boardPoint(6, 41),
        boardPoint(-6, 41),
        boardPoint(-5, -41),
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
        -0.28 * stanceDirection + boardSwing,
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
        0.28 * stanceDirection + boardSwing,
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
      point(headCenter.x - 9, headCenter.y - 5),
      point(headCenter.x - 5, headCenter.y - 10),
      point(headCenter.x + 5, headCenter.y - 10),
      point(headCenter.x + 10, headCenter.y - 5),
      point(headCenter.x + 10, headCenter.y + 5),
      point(headCenter.x + 5, headCenter.y + 9),
      point(headCenter.x - 5, headCenter.y + 9),
      point(headCenter.x - 10, headCenter.y + 5),
    ]),
    polygon("helmet-side", "helmetSide", [
      point(headCenter.x + 5, headCenter.y - 10),
      point(headCenter.x + 10, headCenter.y - 5),
      point(headCenter.x + 10, headCenter.y + 5),
      point(headCenter.x + 5, headCenter.y + 9),
      point(headCenter.x + 4, headCenter.y + 2),
    ]),
    polygon("helmet-panel", "helmetShadow", [
      point(headCenter.x - 8, headCenter.y - 5),
      point(headCenter.x - 4, headCenter.y - 9),
      point(headCenter.x + 5, headCenter.y - 9),
      point(headCenter.x + 8, headCenter.y - 5),
      point(headCenter.x + 3, headCenter.y - 1),
      point(headCenter.x - 5, headCenter.y - 1),
    ]),
    polygon("helmet-highlight", "helmetHighlight", [
      point(headCenter.x - 5, headCenter.y - 5),
      point(headCenter.x, headCenter.y - 9),
      point(headCenter.x + 1, headCenter.y - 6),
      point(headCenter.x - 2, headCenter.y - 3),
    ]),
    polygon("face", "skin", [
      point(headCenter.x - 6, headCenter.y + 2),
      point(headCenter.x + 6, headCenter.y + 2),
      point(headCenter.x + 5, headCenter.y + 8),
      point(headCenter.x, headCenter.y + 10),
      point(headCenter.x - 5, headCenter.y + 8),
    ]),
    polygon("helmet-band", "helmetBand", [
      point(headCenter.x - 9, headCenter.y - 2),
      point(headCenter.x + 9, headCenter.y - 2),
      point(headCenter.x + 9, headCenter.y + 1),
      point(headCenter.x - 9, headCenter.y + 1),
    ]),
    polygon("goggles", "goggles", [
      point(headCenter.x + headFacing * 1 + headLook * 2, headCenter.y - 3),
      point(headCenter.x + headFacing * 8 + headLook * 2, headCenter.y - 2),
      point(headCenter.x + headFacing * 8 + headLook * 2, headCenter.y + 3),
      point(headCenter.x + headFacing * 1 + headLook * 2, headCenter.y + 3),
    ]),
    polygon("goggle-lens", "goggleLens", [
      point(headCenter.x + headFacing * 3 + headLook * 2, headCenter.y - 2),
      point(headCenter.x + headFacing * 7 + headLook * 2, headCenter.y - 1),
      point(headCenter.x + headFacing * 7 + headLook * 2, headCenter.y + 1),
      point(headCenter.x + headFacing * 3 + headLook * 2, headCenter.y + 1),
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
