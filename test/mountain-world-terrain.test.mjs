import assert from "node:assert/strict";
import test from "node:test";

import { snowSurfaceHeight, snowSurfaceNormal } from "../src/mountain/terrain3d.js";

test("the mountain descends continuously as the rider moves downhill", () => {
  const uphill = snowSurfaceHeight(0, 80);
  const downhill = snowSurfaceHeight(0, 120);

  assert.ok(downhill < uphill - 8);
});

test("terrain remains fixed in world space across repeated samples", () => {
  const first = snowSurfaceHeight(3.2, 117.5, "powder");
  const second = snowSurfaceHeight(3.2, 117.5, "powder");

  assert.equal(first, second);
});

test("the piste has shallow variation while the sides rise into a natural bank", () => {
  const center = snowSurfaceHeight(0, 65);
  const shoulder = snowSurfaceHeight(26, 65);

  assert.ok(shoulder > center + 2);
});

test("surface normals face upward and track the downhill grade", () => {
  const normal = snowSurfaceNormal(1, 100);

  assert.ok(normal.y > 0.7 && normal.z < 0);
});
