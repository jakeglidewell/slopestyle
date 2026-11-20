import assert from "node:assert/strict";
import test from "node:test";

import { createRiderState, stepRider } from "../src/rider/physics.js";

const STEP = 1 / 120;
const flat = { slopeGrade: 0.3, surface: "groomed", surfaceHeight: () => 0,
  surfaceNormal: () => ({ x: 0, y: 1, z: 0 }) };
const groomed = { surface: "groomed" };

/** Ride for `seconds` holding what `inputAt(time)` says. */
const hold = (state, seconds, inputAt, mountain = groomed) => {
  let riding = state;
  for (let step = 0; step < Math.round(seconds / STEP); step += 1) {
    riding = stepRider(riding, inputAt(step * STEP), STEP, mountain);
  }
  return riding;
};

test("a quick crouched slide comes back; only holding it a couple of seconds goes switch", () => {
  const start = createRiderState({ speed: 16, surface: "groomed" });
  const slide = () => ({ crouch: 1, steer: 1 });

  const quick = hold(start, 0.6, slide);
  assert.ok(Math.abs(quick.boardOffset) > 0.8 && Math.abs(quick.boardOffset) < Math.PI / 2,
    `0.6 s in the board is ${quick.boardOffset.toFixed(2)} rad round`);
  const letGo = hold(quick, 0.6, () => ({}));
  assert.ok(!letGo.switchRiding && Math.abs(letGo.boardOffset) < 0.2, "a quick slide went switch");

  // Still only sliding well over a second in...
  const held = hold(start, 1.6, slide);
  assert.ok(Math.abs(held.boardOffset) < Math.PI / 2, `1.6 s in: ${held.boardOffset.toFixed(2)} rad`);
  assert.ok(!hold(held, 0.6, () => ({})).switchRiding);
  // ...and round to switch once it has been held a couple of seconds.
  const committed = hold(start, 2.6, slide);
  const riding = hold(committed, 0.6, () => ({}));
  assert.ok(riding.switchRiding && !riding.crashed, "2.6 s of holding did not go switch");
  assert.ok(riding.velocity.downhill > 0);
  // The same again brings the rider back round to regular.
  assert.ok(!hold(hold(riding, 2.6, slide), 0.6, () => ({})).switchRiding);
});

/**
 * Charge a pop for half a second and jump with `held` down, then fly until
 * landing. A carve is held all through the charge; a spin key only goes down
 * with the jump, since held under a crouch it is a slide.
 */
const popHolding = (held, { keepInAir = true } = {}) => {
  let state = hold(createRiderState({ speed: 20, surface: "groomed" }), 0.3, () => ({}), flat);
  state = hold(state, 0.5, () => ({ carve: held.carve ?? 0, crouch: 1 }), flat);
  state = stepRider(state, { ...held, jump: 1 }, STEP, flat);
  let turned = 0;
  for (let step = 0; step < 400; step += 1) {
    const before = state;
    state = stepRider(state, keepInAir ? held : {}, STEP, flat);
    turned += Math.atan2(Math.sin(state.boardRotation - before.boardRotation),
      Math.cos(state.boardRotation - before.boardRotation));
    if (!before.grounded && state.grounded) break;
  }
  return { degrees: turned * 180 / Math.PI, landed: state };
};

test("A or D held into a pop throws a 180 that lands switch", () => {
  for (const carve of [1, -1]) {
    const { degrees, landed } = popHolding({ carve });
    assert.ok(Math.abs(degrees - carve * 180) < 25, `carve ${carve} turned ${degrees.toFixed(0)} degrees`);
    assert.ok(landed.switchRiding && !landed.crashed,
      `carve ${carve} landed ${landed.switchRiding ? "switch" : "regular"}, crash ${landed.crashReason}`);
  }
});

test("an arrow held into a pop still throws a 360, and nothing held throws nothing", () => {
  const spun = popHolding({ steer: 1 }, { keepInAir: false });
  assert.ok(Math.abs(spun.degrees - 360) < 30, `turned ${spun.degrees.toFixed(0)} degrees`);
  assert.ok(!spun.landed.switchRiding && !spun.landed.crashed);
  const straight = popHolding({});
  assert.ok(Math.abs(straight.degrees) < 5 && !straight.landed.switchRiding);
});

test("a held heel-side skid sits a little shorter across the hill than a toe-side one", () => {
  const degrees = (angle) => Math.abs(angle) * 180 / Math.PI;
  const skid = (steer, overrides = {}) => degrees(hold(
    createRiderState({ speed: 22, surface: "groomed", ...overrides }), 1, () => ({ steer })).boardOffset);

  // Regular: the left arrow swings the nose round until the rider faces down the
  // hill on their heels. Held as far as the toe-side skid, the nose reads as
  // pointing back up the hill.
  const heels = skid(-1);
  const toes = skid(1);
  assert.ok(toes > 76 && toes < 84, `toe side ${toes.toFixed(0)} degrees`);
  assert.ok(heels > 62 && heels < 72, `heel side ${heels.toFixed(0)} degrees`);
  // Goofy, the heels are on the other arrow.
  assert.ok(skid(1, { stance: "goofy" }) < 72 && skid(-1, { stance: "goofy" }) > 76);
});
