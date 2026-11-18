import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { sourceFingerprint } from "../scripts/source-fingerprint.mjs";

const projectUrl = new URL("../", import.meta.url);

test("the shared page exposes stable game mount points", async () => {
  const html = await readFile(new URL("index.html", projectUrl), "utf8");

  assert.match(html, /id="game-canvas"/);
  assert.match(html, /id="hud-root"/);
  assert.match(html, /id="overlay-root"/);
  assert.match(html, /<script defer src="\.\/game\.bundle\.js"><\/script>/);
});

test("the shared runtime loads each owner through a stable entry module", async () => {
  const source = await readFile(new URL("src/main.js", projectUrl), "utf8");

  assert.match(source, /\.\/rider\/index\.js/);
  assert.match(source, /\.\/mountain\/index\.js/);
  assert.match(source, /\.\/game-loop\/index\.js/);
});

test("the Finder-ready bundle matches the current game source", async () => {
  const bundle = await readFile(new URL("game.bundle.js", projectUrl), "utf8");
  assert.match(
    bundle,
    new RegExp(`^// Slopestyle source fingerprint: ${await sourceFingerprint()}\\n`),
  );
});
