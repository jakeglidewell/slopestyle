import assert from "node:assert/strict";
import test from "node:test";

import { buildLowPolyRider } from "../src/rider/model.js";
import {
  createSnowTrackTrail,
  drawCarveTrace,
  drawLowPolyRider,
  drawSnowTracks,
  drawSnowSpray,
  getJumpLift,
} from "../src/rider/renderer.js";

const palette = Object.freeze({
  board: "board",
  boardShadow: "board-shadow",
  boots: "boots",
  carveTrace: "trace",
  flatTrace: "flat-trace",
  helmet: "helmet",
  helmetShadow: "helmet-shadow",
  jacket: "jacket",
  jacketShadow: "jacket-shadow",
  mitts: "mitts",
  pants: "pants",
  pantsShadow: "pants-shadow",
  snowSpray: "snow",
  skidTrace: "skid-trace",
});

const createContext = () => {
  const calls = [];
  const context = {
    beginPath: () => calls.push("beginPath"),
    closePath: () => calls.push("closePath"),
    ellipse: () => calls.push("ellipse"),
    fill: () => calls.push("fill"),
    lineTo: () => calls.push("lineTo"),
    moveTo: () => calls.push("moveTo"),
    restore: () => calls.push("restore"),
    rotate: () => calls.push("rotate"),
    save: () => calls.push("save"),
    scale: () => calls.push("scale"),
    stroke: () => calls.push("stroke"),
    translate: () => calls.push("translate"),
  };

  return { calls, context };
};

test("the canvas renderer fills every low-poly rider part", () => {
  const { calls, context } = createContext();
  const model = buildLowPolyRider();

  drawLowPolyRider(context, model, { palette, x: 100, y: 100 });

  assert.equal(calls.filter((call) => call === "fill").length, model.length);
});

test("the canvas renderer brackets its transform state", () => {
  const { calls, context } = createContext();

  drawLowPolyRider(context, buildLowPolyRider(), { palette });

  assert.deepEqual([calls[0], calls.at(-1)], ["save", "restore"]);
});

test("jump lift stays visible on a high-density canvas", () => {
  const canvas = {
    getBoundingClientRect: () => ({ height: 540 }),
    height: 1080,
  };

  assert.ok(getJumpLift(canvas, 1) >= 80);
});

test("a hard skid throws a visible snow plume", () => {
  const { calls, context } = createContext();

  drawSnowSpray(context, {
    direction: 1,
    intensity: 0.8,
    palette: { snowSpray: "snow" },
    scale: 1,
    x: 100,
    y: 100,
  });

  assert.ok(calls.filter((call) => call === "fill").length >= 5);
});

test("a clean edge leaves a pencil-thin carve trace", () => {
  const { calls, context } = createContext();

  drawCarveTrace(context, {
    edge: 0.8,
    palette: { carveTrace: "trace" },
    quality: 0.95,
    scale: 1,
    x: 100,
    y: 100,
  });

  assert.equal(calls.filter((call) => call === "stroke").length, 1);
});

test("the trail records a continuous carved path through world space", () => {
  const trail = createSnowTrackTrail(20);

  for (let step = 0; step < 6; step += 1) {
    trail.update({
      air: 0,
      boardYaw: 0.25,
      carveQuality: 0.9,
      crashed: false,
      edge: 0.7,
      elapsed: step / 10,
      position: { across: step * 0.12, downhill: step * 0.3 },
      skid: 0.05,
    });
  }

  assert.ok(trail.points().length >= 5 && trail.points().every((point) => point.kind === "carve"));
});

test("a flat board leaves a faint base ribbon", () => {
  const trail = createSnowTrackTrail(20);

  for (let step = 0; step < 4; step += 1) {
    trail.update({
      air: 0,
      boardYaw: 0,
      carveQuality: 0,
      crashed: false,
      edge: 0,
      elapsed: step / 10,
      position: { across: 0, downhill: step * 0.3 },
      skid: 0,
      surface: "groomed",
    });
  }

  assert.ok(trail.points().length >= 3 && trail.points().every((point) => point.kind === "flat"));
});

test("skidded tracks render wider than clean carve tracks", () => {
  const { calls, context } = createContext();
  const widths = [];
  Object.defineProperty(context, "lineWidth", {
    set(value) {
      widths.push(value);
    },
  });

  drawSnowTracks(
    context,
    [
      { across: 0, downhill: 0, kind: "carve", width: 1 },
      { across: 0.1, downhill: 0.3, kind: "carve", width: 1 },
      { across: 0.2, downhill: 0.6, kind: "skid", width: 6 },
    ],
    {
      cameraAcross: 0,
      currentDownhill: 1,
      groundY: 100,
      palette,
      scale: 1,
      viewportCenter: 100,
    },
  );

  assert.ok(calls.includes("stroke") && Math.max(...widths) >= 6);
});
