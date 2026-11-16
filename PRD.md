# PRD: Slopestyle Snowboard Runner

## 1. Primary Users

The primary users are casual players of all ages who want short, repeatable snowboard runs on desktop. The game should be easy to understand without instruction, playable in brief sessions, and forgiving enough for younger or less experienced players while still rewarding improvement. Players should be able to start quickly, crash without harsh imagery, restart through a clear flow, and feel motivated to beat their best distance.

## 2. Problems to Solve

The game must deliver a short, repeatable survival challenge where the player controls a snowboarder traveling downhill and avoids clearly recognizable obstacles. The run should become harder as the player succeeds: each avoided obstacle increases speed and tension, making eventual failure expected. To keep the challenge from feeling punishing, every 10 successfully passed obstacles should trigger a brief reward period where the game slows slightly and holds that pace before ramping up again. Crashes should feel fair, understandable, and recoverable through a clear return flow.

## 3. Capabilities

The first version should deliver a desktop core arcade loop. Players control a snowboarder moving downhill and steer with `A` / `D` or the left / right arrow keys. Most hazards should be clearly recognizable obstacles that can be avoided by steering around them. The game should also include moderate use of action-specific hazards: full-width ground obstacles, such as fallen trees, require jumping with `Space` or the up arrow, and overhead hazards, such as large birds or low branches, require ducking with the down arrow. Steering obstacles should remain the most common hazard type.

The game should track distance, best distance, dodged obstacles, and crash state. Speed should increase as the player dodges obstacles, making the run progressively harder. Every 10 dodged obstacles should trigger a temporary reward period where speed slows slightly and holds before ramping again. On crash, the player should see the run result and return to the starting screen.

## 4. Required Inputs

Players steer with `A` / `D` or the left / right arrow keys, jump with `Space` or the up arrow, and duck with the down arrow. The run starts only when the player clicks the on-screen Start button.

The game should maintain current-run state during play, including distance, speed, dodged obstacle count, active hazards, and crash state. The only persistent saved value should be best distance, stored locally on the player's device.

## 5. User Flows

The player opens the game to an idle downhill mountain scene. No obstacles are visible yet. The top left shows distance at zero, and the top right shows the saved best distance. A large green rectangular Start button appears in the center of the screen. The run begins only when the player clicks Start.

During the run, the Start button disappears, obstacles begin appearing, and the distance counter increases as the snowboarder travels downhill. The player steers around most obstacles, jumps over full-width ground obstacles, and ducks under overhead hazards. Speed increases as obstacles are dodged. Every 10 dodged obstacles triggers a brief slowdown reward before the speed begins ramping again.

When the player crashes, the run ends. The center of the screen shows the final distance and a "Return to top" button. Clicking "Return to top" returns the player to the original idle mountain scene with the Start button, distance reset to zero, and best distance still visible.

## 6. Constraints

The first version should prioritize simple controls and a focused survival loop. Gameplay should use only left/right steering, jump, and duck. The game should not include collectibles, tricks, combos, upgrades, power-ups, accounts, multiplayer, or long progression systems.

The game may include audio, but audio should support the core loop rather than expand scope. Required audio includes theme music during the run, a crash sound effect, a celebratory sound when the player surpasses the saved best distance, and a snow-carving sound when the player makes a sharp turn. Audio should not interfere with responsiveness or clarity of play.

## 7. Interface Requirements

The game should use a colorful, detailed cartoon snowboarding style while keeping the playfield visually calm. The snow surface should remain plain white and free of decorative objects so hazards stand out naturally. Scenery may appear outside the playable path, but it should not compete with obstacles or reduce readability.

The playable area should have subtle slope edges that communicate the safe area without cluttering the screen. Dangerous objects should use strong contrast and clear silhouettes. Steering obstacles, full-width jump obstacles, and overhead duck hazards should be visually distinct from one another.

The interface should remain minimal and game-first. Distance appears in the top left. Best distance appears in the top right. Before play, the background shows the empty mountain with a large green rectangular Start button centered on screen. After a crash, the center of the screen shows the final distance and a "Return to top" button.

If the rider crosses a slope edge, the game should trigger an immediate cliff-fall crash. The crash presentation should include a falling animation and a fading "NOOOOOOO" voice effect before the run result is shown.

## 8. Technical Constraints

The first build should use a simple web stack: HTML, CSS, and JavaScript with Canvas for rendering. It should run in a desktop browser and be playable both locally and as a static website deployment. The game should not require installation, accounts, backend services, or an external game engine.

External libraries may be used only if they are necessary to solve a clear technical problem. Otherwise, the game should rely on local code and bundled assets. Best distance should be saved locally on the player's device. Audio should be implemented in a way that works reliably in modern desktop browsers, including any browser-required user interaction before playback.
