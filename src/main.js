import setupGameLoop from "./game-loop/index.js";
import setupMountain from "./mountain/index.js";
import setupRider from "./rider/index.js";

const requireElement = (selector) => {
  const element = document.querySelector(selector);

  if (!element) {
    throw new Error(`Shared game mount is missing: ${selector}`);
  }

  return element;
};

const game = Object.freeze({
  canvas: requireElement("#game-canvas"),
  events: new EventTarget(),
  hudRoot: requireElement("#hud-root"),
  overlayRoot: requireElement("#overlay-root"),
});

for (const setupOwnerModule of [setupMountain, setupRider, setupGameLoop]) {
  await setupOwnerModule(game);
}

game.events.dispatchEvent(new Event("ready"));
