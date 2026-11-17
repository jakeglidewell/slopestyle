import assert from "node:assert/strict";
import test from "node:test";

import { buildLowPolyRider } from "../src/rider/model.js";
import {
  drawCarveTrace,
  drawLowPolyRider,
  drawSnowSpray,
  getJumpLift,
} from "../src/rider/renderer.js";

const palette = Object.freeze({
  board: "board",
  boardShadow: "board-shadow",
  boots: "boots",
  carveTrace: "trace",
  helmet: "helmet",
  helmetShadow: "helmet-shadow",
  jacket: "jacket",
  jacketShadow: "jacket-shadow",
  mitts: "mitts",
  pants: "pants",
  pantsShadow: "pants-shadow",
  snowSpray: "snow",
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
