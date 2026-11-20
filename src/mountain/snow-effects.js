/** Snow the board throws and the trench it leaves. Nothing here draws anything. */

export const BOARD = Object.freeze({ length: 1.94, width: 0.4 });

const clamp = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));
const finiteOr = (value, fallback = 0) => (Number.isFinite(value) ? value : fallback);

// What each kind of snow does when a board scrapes it: how much comes up, how
// long it hangs in the air, how high it is thrown and how big each puff is.
const SNOW = Object.freeze({
  powder: Object.freeze({ amount: 1, hang: 1, lift: 1, grain: 1 }),
  chop: Object.freeze({ amount: 0.75, hang: 0.8, lift: 0.9, grain: 0.9 }),
  slush: Object.freeze({ amount: 0.6, hang: 0.45, lift: 0.6, grain: 1.1 }),
  groomed: Object.freeze({ amount: 0.32, hang: 0.4, lift: 0.5, grain: 0.55 }),
  ice: Object.freeze({ amount: 0.05, hang: 0.2, lift: 0.3, grain: 0.3 }),
  rail: Object.freeze({ amount: 0, hang: 0, lift: 0, grain: 0 }),
});

// Sideways speed, m/s, below which the base is not scraping anything loose, and
// the further speed over which the spray builds to its fullest.
const SCRAPE_FROM = 0.8;
const SCRAPE_SPAN = 9;
const SKID_PUFFS = 320;
const TAIL_PUFFS = 150;

/**
 * How the board is moving over the snow, split into running `along` its length
 * (positive nose-first) and sliding `sideways` across it (positive toward the
 * toe edge), in m/s. `nose` and `toe` are those two directions as
 * [across, downhill].
 */
export function boardSlip(state = {}, boardYaw = undefined) {
  const heading = finiteOr(state.heading);
  const yaw = finiteOr(boardYaw, finiteOr(state.boardYaw, heading));
  const speed = finiteOr(state.speed);
  const across = finiteOr(state.velocity?.across, Math.sin(heading) * speed);
  const downhill = finiteOr(state.velocity?.downhill, Math.cos(heading) * speed);
  const nose = Object.freeze([Math.sin(yaw), Math.cos(yaw)]);
  const toe = Object.freeze([Math.cos(yaw), -Math.sin(yaw)]);
  return Object.freeze({
    along: across * nose[0] + downhill * nose[1],
    sideways: across * toe[0] + downhill * toe[1],
    nose,
    toe,
  });
}

const NO_SPRAY = Object.freeze({ rate: 0, tailRate: 0, edge: 1, way: 1, tailEnd: 1, lift: 0,
  throwSpeed: 0, carry: 0, life: 0, size: 0, along: 0, nose: Object.freeze([0, 1]),
  toe: Object.freeze([1, 0]) });

/**
 * The snow a board is throwing this instant. A base sliding sideways scrapes
 * snow off along the edge that is dug in (`edge`: 1 toe, -1 heel) and pushes it
 * the way it is sliding (`way`), `rate` puffs a second at `throwSpeed` m/s along
 * the snow and `lift` m/s upward. A board carving cleanly on its edge throws
 * `tailRate` puffs a second off its trailing end (`tailEnd`: the local z of it)
 * instead. Running flat and true it throws nothing.
 */
export function skidSpray(state = {}, pose = {}) {
  const snow = SNOW[state.surface] ?? SNOW.groomed;
  if (finiteOr(state.air) > 0.08 || state.crashed || snow.amount <= 0) return NO_SPRAY;
  const slip = boardSlip(state, pose.boardYaw);
  const roll = finiteOr(pose.boardRoll);
  // An edge that is washing out lets the board drift out of its turn, away from
  // that edge, even while it still points the way it is going.
  const washing = Math.abs(roll) > 0.06
    ? -Math.sign(roll) * clamp(finiteOr(state.skid), 0, 1) * Math.abs(slip.along) * 0.3 : 0;
  const sideways = slip.sideways + washing;
  const sliding = Math.abs(sideways);
  const scrape = clamp((sliding - SCRAPE_FROM) / SCRAPE_SPAN, 0, 1);
  // A base cannot slide sideways dead flat, or its leading edge would catch: the
  // harder it skids, the more it must be riding the edge it drags behind it.
  const onEdge = clamp(Math.max(Math.abs(roll), scrape * 0.5) / 0.9, 0, 1);
  const way = Math.sign(sideways) || 1;
  // The edge in the snow; with the board flat, the one it is dragging behind it.
  const edge = Math.abs(roll) > 0.06 ? Math.sign(roll) : -way;
  // A clean carve: hard on the edge, moving fast, hardly sliding.
  const carve = clamp((Math.abs(roll) - 0.25) / 0.6, 0, 1) *
    clamp((Math.abs(slip.along) - 8) / 18, 0, 1) * (1 - scrape);
  return Object.freeze({
    rate: SKID_PUFFS * snow.amount * scrape * (0.45 + onEdge * 0.55),
    tailRate: TAIL_PUFFS * snow.amount * carve,
    edge,
    way,
    // The nose is the board's local -z end; whichever end trails is the tail.
    tailEnd: slip.along < 0 ? -1 : 1,
    // More edge turns more of the slide upward; a faster slide throws harder. A
    // board carving at speed throws with its speed along the edge as well.
    lift: (sliding * (0.06 + onEdge * 0.2) + scrape * 0.5 + Math.abs(slip.along) *
      clamp(Math.abs(roll) / 0.9, 0, 1) * 0.1 * (carve + Math.min(1, Math.abs(washing) / 3))) *
      snow.lift,
    throwSpeed: sliding * (0.35 + onEdge * 0.25),
    // Snow scraped by a board running along its length is carried along with it
    // for a moment; snow pushed by a board sliding sideways is not.
    carry: 0.06 + 0.34 * clamp(Math.abs(washing) / Math.max(sliding, 0.01), 0, 1),
    life: 0.3 + snow.hang * 0.8,
    size: 0.08 + snow.grain * 0.26,
    along: slip.along,
    nose: slip.nose,
    toe: slip.toe,
  });
}

/**
 * One puff of that spray: where on the board it leaves from (`local`: x toward
 * the toes, y up, z toward the tail), and how it is thrown over the snow.
 */
export function sprayParticle(spray, random = Math.random) {
  const total = spray.rate + spray.tailRate;
  const fromTail = total > 0 && random() < spray.tailRate / total;
  const spread = () => random() * 2 - 1;
  let local;
  let alongToe;
  let alongNose;
  let up;
  if (fromTail) {
    local = [spray.edge * BOARD.width / 2, 0.07,
      spray.tailEnd * (BOARD.length / 2 - random() * 0.37)];
    // The base faces away from the edge that is set: the snow goes out of the turn.
    alongToe = -spray.edge * (1.2 + random() * 2.4) * (0.5 + Math.abs(spray.along) / 25);
    alongNose = spray.along * (0.35 + random() * 0.3);
    up = spray.lift * (0.5 + random() * 0.9);
  } else {
    local = [spray.edge * BOARD.width / 2, 0.07, spread() * (BOARD.length / 2 - 0.05)];
    alongToe = spray.way * spray.throwSpeed * (0.6 + random() * 0.7);
    alongNose = spray.along * (spray.carry ?? 0.06) * (0.5 + random()) +
      spread() * spray.throwSpeed * 0.12;
    up = spray.lift * (0.45 + random() * 1.1) + 0.2;
  }
  return Object.freeze({
    local: Object.freeze(local),
    velocity: Object.freeze({
      across: spray.toe[0] * alongToe + spray.nose[0] * alongNose,
      up,
      downhill: spray.toe[1] * alongToe + spray.nose[1] * alongNose,
    }),
    ...grain(spray, random(), random(), random()),
  });
}

// About a third of what a board throws is clumps: small, dense, gone quickly.
// The rest is fine snow that swells into the plume and hangs.
const CLUMPS = 0.32;
const grain = (spray, lasting, sized, kind) => (kind < CLUMPS
  ? { heavy: true, life: spray.life * (0.28 + lasting * 0.3), size: spray.size * (0.2 + sized * 0.22) }
  : { heavy: false, life: spray.life * (0.7 + lasting * 0.8), size: spray.size * (0.7 + sized * 0.8) });

const GRAVITY = 9.81;
// How quickly still air stops loose snow, per second, and how much of gravity it
// feels: a clump flies on and drops, fine snow stops short and settles slowly.
const AIR = Object.freeze({
  clump: Object.freeze({ drag: 0.5, weight: 1 }),
  fine: Object.freeze({ drag: 2.5, weight: 0.5 }),
});

/**
 * The puffs in the air. `emit(rate, delta, make)` adds `rate` a second however
 * long the frame was, never more than `capacity` at once, and returns how many
 * it made; `make()` gives each one as { x, y, z, vx, vy, vz, life, size }.
 * `step(delta)` moves them: thrown, slowed by the air, falling, gone when their
 * time is up or they are back in the snow.
 */
export function createSprayCloud(capacity = 700) {
  let live = [];
  let owed = 0;
  return Object.freeze({
    emit(rate, delta, make) {
      owed = Math.min(owed + Math.max(0, rate) * Math.max(0, delta), capacity);
      let born = 0;
      while (owed >= 1 - 1e-9 && live.length < capacity) {
        const puff = make();
        live.push({ ...puff, age: 0, floor: finiteOr(puff.floor, puff.y - 0.2) });
        owed -= 1;
        born += 1;
      }
      // Room ran out: whatever could not be made is not saved up for later.
      if (live.length >= capacity) owed = Math.min(owed, 1);
      return born;
    },
    particles: () => live,
    reset() {
      live = [];
      owed = 0;
    },
    step(delta) {
      if (!(delta > 0)) return;
      const kept = [];
      for (const puff of live) {
        puff.age += delta;
        if (puff.age >= puff.life) continue;
        const air = puff.heavy ? AIR.clump : AIR.fine;
        const slowed = Math.exp(-air.drag * delta);
        puff.vx *= slowed;
        puff.vz *= slowed;
        puff.vy = puff.vy * slowed - GRAVITY * air.weight * delta;
        puff.x += puff.vx * delta;
        puff.y += puff.vy * delta;
        puff.z += puff.vz * delta;
        if (puff.y < puff.floor && puff.vy < 0) continue;
        kept.push(puff);
      }
      live = kept;
    },
  });
}

/**
 * Half the width of snow a board sweeps as it moves: half its own width running
 * true, half its length sliding fully sideways. Angles are the board's yaw and
 * the yaw of the way it is actually travelling.
 */
export function sweptHalfWidth(boardYaw, travelYaw) {
  const off = finiteOr(boardYaw) - finiteOr(travelYaw);
  return (BOARD.width * Math.abs(Math.cos(off)) + BOARD.length * Math.abs(Math.sin(off))) / 2;
}

// How deep a trench each snow keeps, as a share of powder's.
const TRENCH = Object.freeze({ powder: 1, chop: 0.7, slush: 0.55, groomed: 0.3, ice: 0.05, rail: 0 });

/**
 * Where the board has been. Each point is the middle of the board on the snow,
 * with the `halfWidth` it swept there, how `deep` that snow holds a trench, and
 * `starts` set on the first point of each stretch: a jump leaves a gap, and the
 * trench begins again where the board comes back down.
 */
export function createSnowTrail({ reach = 150, spacing = 0.3 } = {}) {
  let points = [];
  let lifted = true;
  let lastDownhill = -Infinity;
  return Object.freeze({
    points: () => points,
    reset() {
      points = [];
      lifted = true;
      lastDownhill = -Infinity;
    },
    update(state = {}, boardYaw = undefined) {
      const across = finiteOr(state.position?.across);
      const downhill = finiteOr(state.position?.downhill);
      // A new run starts back up the hill: the old trench is gone.
      if (downhill < lastDownhill - 5) points = [];
      lastDownhill = downhill;
      if (finiteOr(state.air) > 0.05 || state.crashed) {
        lifted = true;
        return;
      }
      const last = points.at(-1);
      if (last && !lifted &&
          Math.hypot(across - last.across, downhill - last.downhill) < spacing) return;
      const heading = finiteOr(state.heading);
      const speed = finiteOr(state.speed);
      const travel = Math.atan2(finiteOr(state.velocity?.across, Math.sin(heading) * speed),
        finiteOr(state.velocity?.downhill, Math.cos(heading) * speed));
      points.push(Object.freeze({
        across,
        downhill,
        halfWidth: sweptHalfWidth(finiteOr(boardYaw, finiteOr(state.boardYaw, heading)), travel),
        deep: TRENCH[state.surface] ?? 0.3,
        starts: lifted || !last,
      }));
      lifted = false;
      let stale = 0;
      while (stale < points.length && points[stale].downhill < downhill - reach) stale += 1;
      if (stale > 0) points = points.slice(stale);
    },
  });
}

/**
 * The shape of the trench across the board's path, for a sweep `halfWidth`
 * wide. Each strip is `at` metres to one side of the middle, `lift` metres over
 * the snow there, of `tone` "floor", "wall", "berm" or "snow", and `alpha`
 * strong: a shaded floor, a raised lighter lip either side, fading into
 * untouched snow.
 */
export function trailSection(halfWidth) {
  const half = Math.max(0.05, finiteOr(halfWidth, BOARD.width / 2));
  const side = (sign) => [
    { at: sign * half * 0.45, lift: 0.02, tone: "floor", alpha: 0.6 },
    { at: sign * half, lift: 0.022, tone: "wall", alpha: 0.58 },
    { at: sign * (half + 0.16), lift: 0.06, tone: "berm", alpha: 0.42 },
    { at: sign * (half + 0.37), lift: 0.03, tone: "snow", alpha: 0 },
  ];
  return Object.freeze([...side(-1).reverse(), ...side(1)].map((strip) => Object.freeze(strip)));
}

/**
 * Height inside one cell of the snow mesh, exactly as it is drawn. The corners
 * are `near` and `far` rows by `left` and `right` columns; `across` and `along`
 * are 0..1 across the cell. The mesh splits each cell along the diagonal from
 * near-right to far-left, so that is where the two flat halves meet.
 */
export function drawnCellHeight(nearLeft, nearRight, farLeft, farRight, across, along) {
  const u = clamp(across, 0, 1);
  const v = clamp(along, 0, 1);
  return u + v <= 1
    ? nearLeft + (nearRight - nearLeft) * u + (farLeft - nearLeft) * v
    : farRight + (farLeft - farRight) * (1 - u) + (nearRight - farRight) * (1 - v);
}
