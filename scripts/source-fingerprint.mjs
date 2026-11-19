import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const sourceRoot = fileURLToPath(new URL("../src/", import.meta.url));

async function sourceFiles(directory = sourceRoot) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(path);
    return entry.isFile() && entry.name.endsWith(".js") ? [path] : [];
  }));
  return nested.flat().sort();
}

export async function sourceFingerprint() {
  const hash = createHash("sha256");
  for (const path of await sourceFiles()) {
    hash.update(path.slice(sourceRoot.length));
    hash.update("\0");
    hash.update(await readFile(path));
    hash.update("\0");
  }
  return hash.digest("hex");
}
