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
| `rider:input` | Mobile/gamepad controls | `{ steer: -1..1, carve: -1..1, crouch: 0..1, jump: 0..1, press: -1..1, stretch: 0..1 }` | Supplies normalized non-keyboard rider input; steer flicks the board, carve controls lean/edge, press shifts weight from nose (-1) to tail (+1), stretch slows an airborne spin, and jump is consumed once |
| `rider:update` | Rider Feel | `{ state, pose, input, camera }` | Publishes the latest physics state, chase camera, and procedural animation pose; world renderers run during this event before the rider is drawn |
| `rider:surface` | Mountain & Content | `{ surface, slopeGrade? }` | Changes snow physics; surface is `groomed`, `ice`, `powder`, `slush`, `chop`, or `rail`; slopeGrade is the downhill angle in radians |
| `rider:stance` | Game Loop & Polish | `{ stance }` | Selects `regular` or `goofy` stance without changing the control directions |
| `rider:crash` | Rider Feel | rider state | Announces edge catches, bad landings, and rail slip-outs |
