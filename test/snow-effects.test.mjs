import assert from "node:assert/strict";
import test from "node:test";

import {
  BOARD, boardSlip, createSnowTrail, createSprayCloud, drawnCellHeight, skidSpray, sprayParticle,
  sweptHalfWidth, trailSection,
} from "../src/mountain/snow-effects.js";

/** Riding at `speed` down the fall line with the board turned `yaw` from it. */
const sliding = (yaw, overrides = {}) => ({
  air: 0, boardYaw: yaw, heading: 0, speed: 18, surface: "powder",
  velocity: { across: 0, downhill: overrides.speed ?? 18 }, ...overrides,
});
const mean = (values) => values.reduce((sum, value) => sum + value, 0) / values.length;
/** A repeatable stand-in for Math.random. */
const dice = (seed = 3) => () => {
  seed = (seed * 1664525 + 1013904223) >>> 0;
  return seed / 4294967296;
};
const puffs = (spray, count = 200) => {
  const random = dice();
  return Array.from({ length: count }, () => sprayParticle(spray, random));
};

test("the board's motion splits into running along its length and sliding across it", () => {
  const straight = boardSlip(sliding(0));
  const sideways = boardSlip(sliding(Math.PI / 2));

  assert.ok(Math.abs(straight.along - 18) < 1e-9 && Math.abs(straight.sideways) < 1e-9);
  // Nose toward +across puts a regular rider's toes uphill: sliding downhill is heel-first.
  assert.ok(Math.abs(sideways.along) < 1e-9 && Math.abs(sideways.sideways + 18) < 1e-9);
});

test("a board running straight throws no snow; turned across its path it throws plenty", () => {
  assert.equal(skidSpray(sliding(0), { boardRoll: 0 }).rate, 0);
  assert.equal(skidSpray(sliding(0.03), { boardRoll: 0.05 }).rate, 0);
  const skid = skidSpray(sliding(1.1), { boardRoll: 0.6 });
  const drift = skidSpray(sliding(0.3), { boardRoll: 0.6 });

  assert.ok(skid.rate > 150, `a hard skid throws ${skid.rate.toFixed(0)} puffs a second`);
  assert.ok(drift.rate > 10 && drift.rate < skid.rate * 0.6);
});

test("the snow leaves the edge that is dug in, all along it, the way the board is sliding", () => {
  // Board across the hill, toes uphill, toe edge set: a toe-side skid sliding downhill.
  const spray = skidSpray(sliding(Math.PI / 2), { boardRoll: 0.6 });
  const thrown = puffs(spray);

  assert.equal(spray.edge, 1);
  for (const puff of thrown) {
    assert.ok(Math.abs(puff.local[0] - BOARD.width / 2) < 0.03, "a puff left the wrong edge");
    assert.ok(Math.abs(puff.local[2]) <= BOARD.length / 2);
    assert.ok(puff.velocity.downhill > 0 && puff.velocity.up > 0);
  }
  // Spread over the edge's whole length, not from one spot.
  const along = thrown.map((puff) => puff.local[2]);
  assert.ok(Math.max(...along) > 0.7 && Math.min(...along) < -0.7);
  // Thrown mostly the way it slides: downhill, far more than across.
  assert.ok(mean(thrown.map((puff) => puff.velocity.downhill)) >
    mean(thrown.map((puff) => Math.abs(puff.velocity.across))) * 3);
  // The same board on its heel edge sheds from the other side.
  assert.equal(skidSpray(sliding(-Math.PI / 2), { boardRoll: -0.6 }).edge, -1);
  assert.ok(puffs(skidSpray(sliding(-Math.PI / 2), { boardRoll: -0.6 }))
    .every((puff) => puff.local[0] < 0 && puff.velocity.downhill > 0));
});

test("more edge and a faster slide throw the snow higher", () => {
  const height = (speed, boardRoll) => mean(puffs(skidSpray(sliding(1.2, { speed }), { boardRoll }))
    .map((puff) => puff.velocity.up));

  assert.ok(height(18, 0.9) > height(18, 0.25) * 1.4);
  assert.ok(height(26, 0.6) > height(10, 0.6) * 1.6);
});

test("powder hangs in big plumes, groomed snow sprays low and fine, ice barely at all", () => {
  const on = (surface) => skidSpray(sliding(1.2, { surface }), { boardRoll: 0.6 });
  const powder = on("powder");
  const groomed = on("groomed");
  const ice = on("ice");

  assert.ok(powder.rate > groomed.rate * 2 && groomed.rate > ice.rate * 3);
  assert.ok(powder.life > groomed.life * 1.6 && powder.size > groomed.size * 1.4);
  assert.ok(powder.lift > groomed.lift * 1.5);
  assert.ok(ice.rate < powder.rate * 0.08);
});

test("nothing is thrown in the air or after a crash", () => {
  assert.equal(skidSpray(sliding(1.2, { air: 0.6 }), { boardRoll: 0.6 }).rate, 0);
  assert.equal(skidSpray(sliding(1.2, { crashed: true }), { boardRoll: 0.6 }).rate, 0);
});

test("a clean carve throws a rooster tail off the tail of the board, out of the turn", () => {
  // Running nearly true along its length, hard on the toe edge, at speed.
  const spray = skidSpray(sliding(0.06, { speed: 26 }), { boardRoll: 0.8 });
  const flat = skidSpray(sliding(0.06, { speed: 26 }), { boardRoll: 0.05 });
  const thrown = puffs({ ...spray, rate: 0 });

  assert.ok(spray.tailRate > 40 && flat.tailRate === 0);
  for (const puff of thrown) {
    // Nose is local -z, so the tail is the +z end.
    assert.ok(puff.local[2] > BOARD.length / 2 - 0.4, "the tail spray left the middle of the board");
    assert.ok(puff.velocity.up > 0);
  }
  // On the toe edge the base faces the heel side: that is where the snow goes.
  assert.ok(mean(thrown.map((puff) => puff.velocity.across)) < -0.5);
  // And it is left behind: slower down the hill than the rider.
  assert.ok(mean(thrown.map((puff) => puff.velocity.downhill)) < 26 * 0.6);
});

test("the cloud of spray never outgrows its room and does not care about frame rate", () => {
  const spray = skidSpray(sliding(1.2), { boardRoll: 0.7 });
  const run = (frames, capacity = 5000) => {
    const cloud = createSprayCloud(capacity);
    const random = dice(9);
    let born = 0;
    for (let frame = 0; frame < frames; frame += 1) {
      cloud.step(1 / frames);
      born += cloud.emit(spray.rate, 1 / frames, () => {
        const puff = sprayParticle(spray, random);
        return { x: 0, y: 0, z: 0, vx: puff.velocity.across, vy: puff.velocity.up,
          vz: -puff.velocity.downhill, life: puff.life, size: puff.size };
      });
    }
    return { born, cloud };
  };
  const slow = run(30);
  const fast = run(120);

  assert.ok(Math.abs(slow.born - fast.born) <= 2, `${slow.born} puffs at 30 fps, ${fast.born} at 120`);
  assert.ok(Math.abs(slow.born - spray.rate) <= 2);
  assert.ok(run(60, 80).cloud.particles().length <= 80);
  // Left alone, every puff falls and fades away.
  for (let frame = 0; frame < 300; frame += 1) slow.cloud.step(1 / 60);
  assert.equal(slow.cloud.particles().length, 0);
});

test("a puff rises, is slowed by the air, and falls back", () => {
  const cloud = createSprayCloud(10);
  cloud.emit(60, 1 / 60, () => ({ x: 0, y: 0, z: 0, vx: 6, vy: 4, vz: 0, life: 3, size: 0.3 }));
  const heights = [];
  const speeds = [];
  for (let frame = 0; frame < 90; frame += 1) {
    cloud.step(1 / 60);
    const [puff] = cloud.particles();
    if (!puff) break;
    heights.push(puff.y);
    speeds.push(puff.vx);
  }

  assert.ok(Math.max(...heights) > 0.3 && heights.at(-1) < Math.max(...heights));
  assert.ok(speeds.at(-1) < speeds[0] * 0.7, "the air never slowed it");
});

test("the trench is as wide as what the board swept: its width running straight, its length sideways", () => {
  assert.ok(Math.abs(sweptHalfWidth(0, 0) - BOARD.width / 2) < 1e-9);
  assert.ok(Math.abs(sweptHalfWidth(Math.PI / 2, 0) - BOARD.length / 2) < 1e-9);
  // It is the angle between board and path that counts, not which way either points.
  assert.ok(Math.abs(sweptHalfWidth(0.9, 0.9) - BOARD.width / 2) < 1e-9);
  assert.ok(sweptHalfWidth(0.5, 0) > BOARD.width / 2 && sweptHalfWidth(0.5, 0) < BOARD.length / 2);
});

const ridden = (downhill, overrides = {}) => ({
  air: 0, boardYaw: 0, heading: 0, position: { across: 0, downhill }, speed: 20,
  surface: "powder", velocity: { across: 0, downhill: 20 }, ...overrides,
});

test("the trail follows where the board went and remembers how wide it swept", () => {
  const trail = createSnowTrail();
  for (let downhill = 0; downhill < 20; downhill += 0.2) trail.update(ridden(downhill));
  for (let downhill = 20; downhill < 30; downhill += 0.2) {
    trail.update(ridden(downhill, { boardYaw: 1.2, position: { across: 3, downhill } }));
  }
  const points = trail.points();
  const straight = points.filter((point) => point.downhill < 19);
  const skidded = points.filter((point) => point.downhill > 21);

  assert.ok(points.length > 60);
  assert.ok(straight.every((point) => Math.abs(point.halfWidth - BOARD.width / 2) < 0.02));
  assert.ok(skidded.every((point) => point.halfWidth > 0.8 && point.across === 3));
});

test("no trench is drawn through the air: it stops at takeoff and starts again on landing", () => {
  const trail = createSnowTrail();
  for (let downhill = 0; downhill < 10; downhill += 0.25) trail.update(ridden(downhill));
  for (let downhill = 10; downhill < 22; downhill += 0.25) trail.update(ridden(downhill, { air: 1.2 }));
  for (let downhill = 22; downhill < 30; downhill += 0.25) trail.update(ridden(downhill));
  const points = trail.points();

  assert.ok(!points.some((point) => point.downhill > 10.3 && point.downhill < 21.9));
  // The first point back on the snow starts a new stretch instead of bridging the gap.
  const landing = points.find((point) => point.downhill >= 21.9);
  assert.equal(landing.starts, true);
  assert.equal(points.filter((point) => point.starts).length, 2);
});

test("the trail reaches about 150 m back up the hill and then lets go", () => {
  const trail = createSnowTrail();
  for (let downhill = 0; downhill < 400; downhill += 0.5) trail.update(ridden(downhill));
  const points = trail.points();
  const oldest = points[0].downhill;

  assert.ok(400 - oldest > 140 && 400 - oldest < 165, `the trail is ${(400 - oldest).toFixed(0)} m long`);
  assert.ok(points.length < 700);
  trail.reset();
  assert.equal(trail.points().length, 0);
});

test("the trench has a sunk, shaded floor between raised, lighter edges that fade into the snow", () => {
  const section = trailSection(0.6);
  const floor = section.filter((strip) => Math.abs(strip.at) < 0.6);
  const edges = section.filter((strip) => strip.tone === "berm");
  const rim = [section[0], section.at(-1)];

  assert.ok(section.every((strip, index) => index === 0 || strip.at > section[index - 1].at));
  assert.ok(floor.length >= 2 && edges.length === 2);
  assert.ok(Math.max(...floor.map((strip) => strip.lift)) < Math.min(...edges.map((strip) => strip.lift)));
  assert.ok(edges.every((strip) => Math.abs(strip.at) > 0.6 && Math.abs(strip.at) < 0.95));
  assert.ok(floor.every((strip) => strip.tone !== "berm" && strip.alpha > 0.25));
  assert.ok(rim.every((strip) => strip.alpha === 0));
  // A wider sweep gives a wider floor with the same edges either side.
  assert.ok(trailSection(0.97).at(-1).at - section.at(-1).at > 0.3);
});

test("the trench is measured on the snow as it is drawn: two flat halves of each mesh cell", () => {
  // A cell with one corner pressed down, as a rut leaves it.
  const [nearLeft, nearRight, farLeft, farRight] = [1, 1, 1, 0.6];

  assert.equal(drawnCellHeight(nearLeft, nearRight, farLeft, farRight, 0, 0), 1);
  assert.equal(drawnCellHeight(nearLeft, nearRight, farLeft, farRight, 1, 1), 0.6);
  // The half the pressed corner is not part of stays flat right up to the diagonal.
  assert.equal(drawnCellHeight(nearLeft, nearRight, farLeft, farRight, 0.3, 0.3), 1);
  assert.equal(drawnCellHeight(nearLeft, nearRight, farLeft, farRight, 0.5, 0.5), 1);
  // Past it the snow slopes down to that corner.
  assert.ok(Math.abs(drawnCellHeight(nearLeft, nearRight, farLeft, farRight, 0.75, 0.75) - 0.8) < 1e-9);
});

test("a board skidding flat still rides its trailing edge: the snow comes up off that edge", () => {
  // The flick the rider's pose draws: board well across its path, no edge angle given.
  const spray = skidSpray(sliding(1.25, { speed: 23 }), { boardRoll: 0 });
  const thrown = puffs(spray);

  // Sliding heel-first, so the toe edge is the one dragging behind and digging.
  assert.equal(spray.way, -1);
  assert.equal(spray.edge, 1);
  assert.ok(mean(thrown.map((puff) => puff.velocity.up)) > 2.5,
    `thrown up at ${mean(thrown.map((puff) => puff.velocity.up)).toFixed(1)} m/s`);
  assert.ok(spray.rate > 200);
});

test("a carve that is washing out sheds snow off its whole edge, to the outside of the turn", () => {
  // The board still points where it is going; the physics says its edge is giving way.
  const washing = skidSpray(sliding(0, { speed: 27, skid: 0.45 }), { boardRoll: 0.66 });
  const holding = skidSpray(sliding(0, { speed: 27, skid: 0 }), { boardRoll: 0.66 });
  const thrown = puffs({ ...washing, tailRate: 0 });

  assert.equal(holding.rate, 0);
  assert.ok(washing.rate > 40, `${washing.rate.toFixed(0)} puffs a second`);
  // Toe edge set, so the base faces the heel side: -across with the nose down the hill.
  assert.equal(washing.edge, 1);
  assert.ok(thrown.every((puff) => puff.local[0] > 0 && puff.velocity.up > 0));
  assert.ok(mean(thrown.map((puff) => puff.velocity.across)) < -1);
});

test("spray is two kinds of snow: clumps that arc and drop, and fine snow that hangs", () => {
  const spray = skidSpray({ air: 0, boardYaw: 1.2, heading: 0, skid: 0.8, speed: 20,
    surface: "powder", velocity: { across: 0, downhill: 20 } }, { boardRoll: 0.4 });
  let seed = 7;
  const random = () => (seed = seed * 16807 % 2147483647) / 2147483647;
  const puffs = Array.from({ length: 800 }, () => sprayParticle(spray, random));
  const clumps = puffs.filter((puff) => puff.heavy);
  const fine = puffs.filter((puff) => !puff.heavy);
  const mean = (list, key) => list.reduce((sum, puff) => sum + puff[key], 0) / list.length;

  assert.ok(clumps.length > puffs.length * 0.2 && clumps.length < puffs.length * 0.5,
    `${clumps.length} clumps in ${puffs.length} puffs`);
  assert.ok(mean(clumps, "size") < mean(fine, "size") * 0.5);
  assert.ok(mean(clumps, "life") < mean(fine, "life") * 0.7);

  // Thrown the same way, a clump carries further and is down while the fine snow hangs.
  const cloud = createSprayCloud();
  for (const heavy of [true, false]) {
    cloud.emit(1, 1, () => ({ x: 0, y: 0, z: 0, vx: 5, vy: 3, vz: 0, life: 5, size: 0.1,
      floor: -50, heavy }));
  }
  for (let step = 0; step < 48; step += 1) cloud.step(1 / 60);
  const [clump, mist] = cloud.particles();
  assert.ok(clump.x > mist.x + 0.5, `clump ${clump.x.toFixed(2)} m out, fine snow ${mist.x.toFixed(2)} m`);
  assert.ok(clump.y < mist.y - 0.3, `clump at ${clump.y.toFixed(2)} m, fine snow at ${mist.y.toFixed(2)} m`);
});
