import assert from "node:assert/strict";
import test from "node:test";

import { buildLowPolyRider } from "../src/rider/model.js";

const neutralPose = Object.freeze({
  boardRoll: 0,
  boardYaw: 0,
  bob: 0,
  crouch: 0.12,
  airborne: 0,
  jumpStretch: 0,
  lean: 0,
  upperBodyTwist: 0,
});

const getPart = (model, name) =>
  model.find((polygon) => polygon.part === name);

const center = (polygon) => ({
  x: polygon.points.reduce((sum, point) => sum + point.x, 0) / polygon.points.length,
  y: polygon.points.reduce((sum, point) => sum + point.y, 0) / polygon.points.length,
});

test("the low-poly model contains every major articulated part", () => {
  const names = buildLowPolyRider(neutralPose).map(({ part }) => part);

  assert.ok([
    "board",
    "left-boot",
    "right-boot",
    "left-leg",
    "right-leg",
    "torso",
    "left-arm",
    "right-arm",
    "head",
  ].every((part) => names.includes(part)));
});

test("the snowboard points downhill instead of sideways", () => {
  const board = getPart(buildLowPolyRider(neutralPose), "board");
  const xs = board.points.map(({ x }) => x);
  const ys = board.points.map(({ y }) => y);
  const width = Math.max(...xs) - Math.min(...xs);
  const height = Math.max(...ys) - Math.min(...ys);

  assert.ok(height > width * 2);
});

test("crouching lowers the rider head toward the board", () => {
  const standingHead = center(getPart(buildLowPolyRider(neutralPose), "head"));
  const crouchedHead = center(
    getPart(buildLowPolyRider({ ...neutralPose, crouch: 1 }), "head"),
  );

  assert.ok(crouchedHead.y > standingHead.y);
});

test("leaning moves the rider mass into the turn", () => {
  const neutralHead = center(getPart(buildLowPolyRider(neutralPose), "head"));
  const carvingHead = center(
    getPart(buildLowPolyRider({ ...neutralPose, lean: 0.55 }), "head"),
  );

  assert.ok(carvingHead.x > neutralHead.x);
});

test("takeoff extension lengthens the rider silhouette", () => {
  const neutralHead = center(getPart(buildLowPolyRider(neutralPose), "head"));
  const jumpingHead = center(
    getPart(
      buildLowPolyRider({ ...neutralPose, airborne: 1, jumpStretch: 1 }),
      "head",
    ),
  );

  assert.ok(jumpingHead.y < neutralHead.y);
});

test("extreme poses only produce finite polygon points", () => {
  const model = buildLowPolyRider({
    boardRoll: Math.PI,
    boardYaw: -Math.PI,
    bob: 1,
    crouch: 1,
    airborne: 1,
    jumpStretch: 1,
    lean: -1,
    upperBodyTwist: 1,
  });

  assert.ok(
    model.every((polygon) =>
      polygon.points.every(
        (point) => Number.isFinite(point.x) && Number.isFinite(point.y),
      ),
    ),
  );
});
