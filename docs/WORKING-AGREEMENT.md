# Slopestyle working agreement

The shared shell should stay small and stable. Feature work belongs in the owner folders so all three owners can work in parallel without editing the same files.

## Ownership

| Owner | Folder | Scope |
| --- | --- | --- |
| Rider Feel | `src/rider/` | Controls, physics, camera, animation, crash, respawn |
| Mountain & Content | `src/mountain/` | Course generation, obstacles, pickups, environment |
| Game Loop & Polish | `src/game-loop/` | Flow, HUD, scoring, audio, deployment, mobile input |

## Shared contract

Every owner entry module exports one async setup function. It receives a frozen `game` object with:

- `canvas`: the shared game canvas
- `hudRoot`: the HUD mount point
- `overlayRoot`: menus and full-screen messages
- `events`: an `EventTarget` for cross-owner communication

Use named `CustomEvent` messages to communicate across folders. Document the event name and `detail` shape here before another owner depends on it.

## Files to avoid during feature work

- `index.html`
- `src/main.js`
- Other owners' folders

Change a shared file only when the shared contract itself must change, and coordinate that change with the other owners first.

## Current events

| Event | Sender | Detail | Meaning |
| --- | --- | --- | --- |
| `ready` | Shared runtime | none | All owner setup functions have completed |
| `rider:input` | Mobile/gamepad controls | `{ carve: -1..1, crouch: 0..1 }` | Supplies normalized non-keyboard rider input |
| `rider:update` | Rider Feel | `{ state, pose, input, camera }` | Publishes the latest physics state, chase camera, and procedural animation pose; world renderers run during this event before the rider is drawn |
