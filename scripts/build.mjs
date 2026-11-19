import { build } from "esbuild";
import { sourceFingerprint } from "./source-fingerprint.mjs";

await build({
  banner: { js: `// Slopestyle source fingerprint: ${await sourceFingerprint()}` },
  bundle: true,
  entryPoints: ["src/main.js"],
  format: "iife",
  legalComments: "none",
  minify: true,
  outfile: "game.bundle.js",
  platform: "browser",
  target: "es2020",
});
