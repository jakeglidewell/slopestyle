import assert from "node:assert/strict";
import test from "node:test";

import { buildLowPolyRider } from "../src/rider/model.js";

test("a tail press visibly raises the board nose", () => {
  const normal = buildLowPolyRider({ press: 0 });
  const tailPress = buildLowPolyRider({ press: 1 });

  assert.ok(tailPress[0].points[0].y < normal[0].points[0].y);
});

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

test("the snowboard nose visibly lifts over a powder bump", () => {
  const flat = getPart(buildLowPolyRider(neutralPose), "board");
  const lifted = getPart(
    buildLowPolyRider({ ...neutralPose, boardPitch: 0.4 }),
    "board",
  );

  assert.ok(lifted.points[0].y < flat.points[0].y);
});

test("the legs absorb terrain while the head stays comparatively level", () => {
  const neutral = buildLowPolyRider(neutralPose);
  const bump = buildLowPolyRider({
    ...neutralPose,
    boardBob: 0.4,
    bob: 0.08,
  });
  const boardTravel = Math.abs(
    center(getPart(bump, "board")).y - center(getPart(neutral, "board")).y,
  );
  const headTravel = Math.abs(
    center(getPart(bump, "head")).y - center(getPart(neutral, "head")).y,
  );

  assert.ok(boardTravel > headTravel * 2);
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

test("a rolled board shows its underside while its biting edge stays planted", () => {
  const flat = buildLowPolyRider({ boardRoll: 0 });
  const edged = buildLowPolyRider({ boardRoll: 1 });
  const flatBoard = getPart(flat, "board");
  const edgedBoard = getPart(edged, "board");
  const underside = getPart(edged, "board-underside");

  assert.ok(underside && underside.points.length >= 4);
  assert.ok(Math.abs(Math.max(...flatBoard.points.map(({ x }) => x)) -
    Math.max(...edgedBoard.points.map(({ x }) => x))) < 1);
  assert.ok(Math.min(...underside.points.map(({ x }) => x)) <
    Math.min(...edgedBoard.points.map(({ x }) => x)) - 4);
});

test("a flick holds the front foot while the tail swings away", () => {
  const straight = buildLowPolyRider({ boardSwing: 0 });
  const flicked = buildLowPolyRider({ boardSwing: 0.8 });
  const nose = (model) => getPart(model, "board").points[0];
  const tail = (model) => getPart(model, "board").points[3];
  const noseShift = Math.hypot(nose(flicked).x - nose(straight).x, nose(flicked).y - nose(straight).y);
  const tailShift = Math.hypot(tail(flicked).x - tail(straight).x, tail(flicked).y - tail(straight).y);

  assert.ok(tailShift > noseShift * 1.8);
});

test("both boots stay attached to the solved legs during a board swing", () => {
  const model = buildLowPolyRider({ boardSwing: 1, crouch: 0.55, lean: 0.5 });
  for (const side of ["left", "right"]) {
    const boot = center(getPart(model, `${side}-boot`));
    const leg = getPart(model, `${side}-leg`);
    const ankle = {
      x: (leg.points[0].x + leg.points.at(-1).x) / 2,
      y: leg.points[0].y,
    };
    assert.ok(Math.hypot(boot.x - ankle.x, boot.y - ankle.y) < 0.001);
  }
});

test("switch riding turns the helmet toward the new leading shoulder", () => {
  const regular = buildLowPolyRider({ switchRiding: false });
  const switchPose = buildLowPolyRider({ switchRiding: true });
  const regularFace = center(getPart(regular, "goggles"));
  const switchFace = center(getPart(switchPose, "goggles"));
  const regularHead = center(getPart(regular, "head"));
  const switchHead = center(getPart(switchPose, "head"));

  assert.ok((regularFace.x - regularHead.x) * (switchFace.x - switchHead.x) < 0);
});
