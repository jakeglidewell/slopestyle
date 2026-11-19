# Slopestyle

Double-click `index.html` to play the checked-in game build, or serve the folder as a static website. Neither method needs a game server or an installation.

## Changing the game

The editable modules are in `src/`. After changing them, install the development dependency and rebuild the browser file:

```sh
pnpm install
pnpm run build
pnpm test
```

Commit `game.bundle.js` with the source changes. The tests check that the bundle matches `src/`, so a forgotten build is caught before the game is shared. The bundler is used only while developing; players don't need it.

Browsers may handle saved best distance differently when the page is opened as a local `file://` URL. A hosted static site uses normal browser storage.
