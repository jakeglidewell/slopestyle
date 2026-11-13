import assert from "node:assert/strict";
import test from "node:test";

import { buildLowPolyRider } from "../src/rider/model.js";
import { drawLowPolyRider } from "../src/rider/renderer.js";

const palette = Object.freeze({
  board: "board",
  boots: "boots",
  helmet: "helmet",
  jacket: "jacket",
  jacketShadow: "jacket-shadow",
  pants: "pants",
  pantsShadow: "pants-shadow",
});

const createContext = () => {
  const calls = [];
  const context = {
    beginPath: () => calls.push("beginPath"),
    closePath: () => calls.push("closePath"),
    fill: () => calls.push("fill"),
    lineTo: () => calls.push("lineTo"),
    moveTo: () => calls.push("moveTo"),
    restore: () => calls.push("restore"),
    rotate: () => calls.push("rotate"),
    save: () => calls.push("save"),
    scale: () => calls.push("scale"),
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
