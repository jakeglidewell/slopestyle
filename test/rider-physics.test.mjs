import assert from "node:assert/strict";
import test from "node:test";

import {
  crashRiderOnHazard,
  createRiderState,
  sampleSnowTerrain,
  stepRider,
} from "../src/rider/physics.js";

test("hitting an obstacle makes the rider tumble and lose speed", () => {
  const riding = createRiderState({
    position: { across: 1, downhill: 20 },
    surface: "powder",
    velocity: { across: 2, downhill: 18 },
  });
  const crashed = crashRiderOnHazard(riding, { kind: "steer", x: 1 });

  assert.equal(crashed.crashed, true);
  assert.equal(crashed.crashTimer, 2);
  assert.deepEqual(crashed.position, riding.position);
  assert.ok(crashed.speed < riding.speed * 0.6);
  assert.equal(stepRider(crashed, {}, 1 / 60, { surface: "powder" }).crashed, true);
});

test("snow terrain is deterministic and rougher in powder", () => {
  const position = { across: 1.25, downhill: 42 };
  const powder = sampleSnowTerrain(position, "powder");
  const repeated = sampleSnowTerrain(position, "powder");
  const ice = sampleSnowTerrain(position, "ice");

  assert.deepEqual(powder, repeated);
  assert.ok(powder.roughness > ice.roughness);
});

test("moving through powder produces physical bump contact", () => {
  let state = createRiderState({ speed: 18, surface: "powder" });
  let strongestBump = 0;

  for (let frame = 0; frame < 180; frame += 1) {
    state = stepRider(state, {}, 1 / 60, { surface: "powder" });
    strongestBump = Math.max(strongestBump, state.bumpImpact);
  }

  assert.ok(strongestBump > 0.2 && Math.abs(state.terrainHeight) > 0.01);
});

test("crouching absorbs most of a powder crest's upward kick", () => {
  const speed = 26;
  const frameTravel = speed / 60;
  let crest = 0;

  for (let downhill = 0; downhill < 80; downhill += 0.02) {
    const before = sampleSnowTerrain({ across: 0, downhill }, "powder");
    const after = sampleSnowTerrain(
      { across: 0, downhill: downhill + frameTravel },
      "powder",
    );
    if (before.slope > 0.1 && after.slope < 0) {
      crest = downhill;
      break;
    }
  }

  const terrain = sampleSnowTerrain({ across: 0, downhill: crest }, "powder");
  const initial = createRiderState({
    position: { across: 0, downhill: crest },
    speed,
    surface: "powder",
    terrainHeight: terrain.height,
    terrainPitch: terrain.slope,
  });
  const launched = stepRider(initial, {}, 1 / 60, { surface: "powder" });
  const loaded = createRiderState({ ...initial, stanceHeight: 0.45,
    crouchAmount: 1, crouchHeld: true });
  const absorbed = stepRider(loaded, { crouch: 1 }, 1 / 60, {
    surface: "powder",
  });

  assert.ok(launched.air > 0 && absorbed.air < launched.air * 0.25);
});

test("speed and rear-foot pressure float the nose in powder", () => {
  const slow = stepRider(
    createRiderState({ speed: 12, surface: "powder", frontFootPressure: 0.65 }),
    {},
    1 / 60,
    { surface: "powder" },
  );
  const fast = stepRider(
    createRiderState({ speed: 24, surface: "powder", frontFootPressure: 0.35 }),
    {},
    1 / 60,
    { surface: "powder" },
  );

  assert.ok(fast.noseFloat > slow.noseFloat);
});

test("a neutral rider accelerates downhill", () => {
  const initial = createRiderState({ speed: 8 });
  const next = stepRider(initial, {}, 0.25);

  assert.ok(next.speed > initial.speed && next.position.downhill > 0);
});

test("a carve engages progressively instead of snapping", () => {
  const initial = createRiderState();
  const next = stepRider(initial, { carve: 1 }, 1 / 60);

  assert.ok(next.edge > 0 && next.edge < 1);
});

test("a held carve gets the board turning within half a second", () => {
  let state = createRiderState({ speed: 16, surface: "powder" });

  for (let frame = 0; frame < 30; frame += 1) {
    state = stepRider(state, { carve: 1 }, 1 / 60, { surface: "powder" });
  }

  assert.ok(state.boardYaw > 0.2);
});

test("a clean loaded edge develops carve quality and redirects momentum", () => {
  let state = createRiderState({ speed: 18, surface: "groomed" });

  for (let frame = 0; frame < 45; frame += 1) {
    state = stepRider(state, { carve: 0.72, crouch: 0.35 }, 1 / 60, {
      surface: "groomed",
    });
  }

  assert.ok(state.carveQuality > 0.45 && Math.abs(state.velocity.across) > 2);
});

test("switch riding has the same carve authority as regular riding", () => {
  let regular = createRiderState({ speed: 18, surface: "groomed" });
  let switched = createRiderState({
    boardYaw: Math.PI,
    speed: 18,
    surface: "groomed",
    switchRiding: true,
  });

  for (let frame = 0; frame < 30; frame += 1) {
    regular = stepRider(regular, { carve: 0.7 }, 1 / 60, {
      surface: "groomed",
    });
    switched = stepRider(switched, { carve: 0.7 }, 1 / 60, {
      surface: "groomed",
    });
  }

  assert.ok(
    Math.abs(switched.turnRate) >= Math.abs(regular.turnRate) * 0.95,
  );
});

test("left and right carves turn in opposite directions with stance asymmetry", () => {
  const initial = createRiderState();
  let left = initial;
  let right = initial;

  for (let frame = 0; frame < 60; frame += 1) {
    left = stepRider(left, { carve: -1 }, 1 / 60);
    right = stepRider(right, { carve: 1 }, 1 / 60);
  }

  assert.ok(
    left.position.across < 0 &&
      right.position.across > 0 &&
      Math.abs(left.position.across) !== Math.abs(right.position.across),
  );
});

test("releasing a carve returns the board toward a flat edge", () => {
  let state = createRiderState();

  for (let frame = 0; frame < 30; frame += 1) {
    state = stepRider(state, { carve: 1 }, 1 / 60);
  }

  const engagedEdge = state.edge;
  state = stepRider(state, { carve: 0 }, 0.25);

  assert.ok(state.edge >= 0 && state.edge < engagedEdge);
});

test("speed remains inside its playable range", () => {
  let state = createRiderState({ speed: 1_000 });

  state = stepRider(state, { carve: 4 }, 10);

  assert.ok(state.speed >= 12 && state.speed <= 34);
});

test("a held carve cannot turn the rider back uphill", () => {
  let state = createRiderState();

  for (let frame = 0; frame < 1_200; frame += 1) {
    state = stepRider(state, { carve: 1 }, 1 / 60);
  }

  assert.ok(state.heading > 0 && state.heading < Math.PI / 2);
});

test("jump input launches a grounded rider", () => {
  const state = stepRider(createRiderState(), { jump: 1 }, 1 / 60);

  assert.ok(state.air > 0 && state.verticalVelocity > 0);
});

test("a manual pop clears rising powder bumps instead of disappearing", () => {
  for (let downhill = 0; downhill <= 250; downhill += 5) {
    let state = createRiderState({
      position: { across: 0, downhill },
      speed: 20,
      surface: "powder",
    });
    let peak = 0;
    let airborneFrames = 0;
    for (let frame = 0; frame < 48; frame += 1) {
      state = stepRider(state, { jump: Number(frame === 0) }, 1 / 120, { surface: "powder" });
      peak = Math.max(peak, state.air);
      if (state.air > 0.02) airborneFrames += 1;
    }
    assert.ok(peak > 0.18 && airborneFrames > 14,
      `pop at ${downhill} m reached ${peak.toFixed(2)} m for ${airborneFrames} frames`);
  }
});

test("an airborne rider falls and lands back on the snow", () => {
  let state = stepRider(createRiderState(), { jump: 1 }, 1 / 60);

  for (let frame = 0; frame < 180; frame += 1) {
    state = stepRider(state, {}, 1 / 60);
  }

  assert.deepEqual(
    { air: state.air, verticalVelocity: state.verticalVelocity },
    { air: 0, verticalVelocity: 0 },
  );
});

test("a steeper slope accelerates the rider more strongly", () => {
  const initial = createRiderState({ speed: 12 });
  const shallow = stepRider(initial, {}, 0.05, { slopeGrade: 0.08 });
  const steep = stepRider(initial, {}, 0.05, { slopeGrade: 0.48 });

  assert.ok(steep.speed > shallow.speed);
});

test("tucking reduces aerodynamic drag at speed", () => {
  const initial = createRiderState({ speed: 26 });
  let upright = initial;
  let tucked = initial;

  for (let frame = 0; frame < 120; frame += 1) {
    upright = stepRider(upright, { crouch: 0 }, 1 / 60, { slopeGrade: 0.08 });
    tucked = stepRider(tucked, { crouch: 1 }, 1 / 60, { slopeGrade: 0.08 });
  }

  assert.ok(tucked.speed > upright.speed);
});

test("a hard high-speed carve breaks into a controlled skid", () => {
  let state = createRiderState({ speed: 24 });

  for (let frame = 0; frame < 45; frame += 1) {
    state = stepRider(state, { carve: 1 }, 1 / 60);
  }

  assert.ok(state.skid > 0.15 && state.skid < 1);
});

test("airborne steering is weaker than steering on snow", () => {
  let grounded = createRiderState({ speed: 14 });
  let airborne = createRiderState({ air: 1, speed: 14, verticalVelocity: 0 });

  for (let frame = 0; frame < 30; frame += 1) {
    grounded = stepRider(grounded, { carve: 1 }, 1 / 60);
    airborne = stepRider(airborne, { carve: 1 }, 1 / 60);
  }

  assert.ok(Math.abs(airborne.heading) < Math.abs(grounded.heading));
});

test("landing creates compression that settles over time", () => {
  let state = createRiderState({ air: 0.05, verticalVelocity: -4 });
  state = stepRider(state, {}, 0.05);
  const landingCompression = state.compression;

  for (let frame = 0; frame < 60; frame += 1) {
    state = stepRider(state, {}, 1 / 60);
  }

  assert.ok(landingCompression > 0.5 && state.compression < landingCompression);
});

test("releasing the edge preserves cross-slope momentum", () => {
  let state = createRiderState({ speed: 16 });

  for (let frame = 0; frame < 45; frame += 1) {
    state = stepRider(state, { carve: 1 }, 1 / 60);
  }

  const acrossBeforeRelease = state.velocity.across;
  state = stepRider(state, { carve: 0 }, 1 / 60);

  assert.ok(
    Math.sign(state.velocity.across) === Math.sign(acrossBeforeRelease) &&
      Math.abs(state.velocity.across) > 0.1,
  );
});

test("a skidding board can point away from its direction of travel", () => {
  const state = stepRider(
    createRiderState({
      boardYaw: 0,
      velocity: { across: 6, downhill: 14 },
    }),
    {},
    1 / 60,
  );

  assert.ok(Math.abs(state.slipAngle) > 0.2);
});

test("a fast downhill-edge transition can catch and crash", () => {
  let state = createRiderState({
    boardYaw: 0,
    edge: -0.45,
    lean: -0.6,
    velocity: { across: 8, downhill: 17 },
  });

  for (let frame = 0; frame < 45 && !state.crashed; frame += 1) {
    state = stepRider(state, { carve: 1 }, 1 / 60);
  }

  assert.equal(state.crashReason, "edge-catch");
});

test("a gentle low-speed edge change stays upright", () => {
  let state = createRiderState({
    boardYaw: 0,
    edge: -0.2,
    lean: -0.2,
    velocity: { across: 0.4, downhill: 6 },
  });

  for (let frame = 0; frame < 45; frame += 1) {
    state = stepRider(state, { carve: 1 }, 1 / 60);
  }

  assert.equal(state.crashed, false);
});

test("the front foot starts an edge change before the rear foot", () => {
  const state = stepRider(createRiderState(), { carve: 1 }, 1 / 60);

  assert.ok(Math.abs(state.frontEdge) > Math.abs(state.rearEdge));
});

test("ice releases into more skid than groomed snow", () => {
  let groomed = createRiderState({ speed: 18 });
  let ice = createRiderState({ speed: 18 });

  for (let frame = 0; frame < 60; frame += 1) {
    groomed = stepRider(groomed, { carve: 1 }, 1 / 60, { surface: "groomed" });
    ice = stepRider(ice, { carve: 1 }, 1 / 60, { surface: "ice" });
  }

  assert.ok(ice.skid > groomed.skid);
});

test("powder scrubs more speed than groomed snow", () => {
  let groomed = createRiderState({ speed: 18 });
  let powder = createRiderState({ speed: 18 });

  for (let frame = 0; frame < 120; frame += 1) {
    groomed = stepRider(groomed, {}, 1 / 60, { surface: "groomed" });
    powder = stepRider(powder, {}, 1 / 60, { surface: "powder" });
  }

  assert.ok(powder.speed < groomed.speed);
});

test("horizontal momentum is locked once airborne", () => {
  const initial = createRiderState({
    air: 1,
    boardYaw: 0.2,
    velocity: { across: 5, downhill: 14 },
    verticalVelocity: 1,
  });
  const next = stepRider(initial, { carve: -1 }, 0.05);

  assert.deepEqual(next.velocity, initial.velocity);
});

test("tucking increases a locked airborne spin rate", () => {
  const initial = createRiderState({
    air: 1,
    boardYaw: 0,
    spinVelocity: 1,
    velocity: { across: 0, downhill: 14 },
  });
  const open = stepRider(initial, { crouch: 0 }, 0.05);
  const tucked = stepRider(initial, { crouch: 1 }, 0.05);

  assert.ok(Math.abs(tucked.boardYaw) > Math.abs(open.boardYaw));
});

test("air controls allow a small spin correction and an up-arrow stretch", () => {
  let neutral = createRiderState({ air: 1, speed: 18, spinVelocity: 1.5,
    stanceHeight: 0.45, crouchAmount: 1 });
  let corrected = neutral;
  let stretched = neutral;

  for (let frame = 0; frame < 20; frame += 1) {
    neutral = stepRider(neutral, {}, 1 / 60);
    corrected = stepRider(corrected, { carve: 1 }, 1 / 60);
    stretched = stepRider(stretched, { stretch: 1 }, 1 / 60);
  }

  assert.ok(
    neutral.air > 0 && corrected.air > 0 && stretched.air > 0 &&
    corrected.spinVelocity > neutral.spinVelocity &&
      Math.abs(stretched.boardYaw) < Math.abs(neutral.boardYaw),
  );
});

test("loading the tail before takeoff creates a stronger pop", () => {
  let loaded = createRiderState();

  for (let frame = 0; frame < 45; frame += 1) {
    loaded = stepRider(loaded, { crouch: 1 }, 1 / 60);
  }

  const popped = stepRider(loaded, { jump: 1 }, 1 / 60);
  const unweighted = stepRider(createRiderState(), { jump: 1 }, 1 / 60);

  assert.ok(popped.verticalVelocity > unweighted.verticalVelocity);
});

test("landing sideways catches an edge", () => {
  const state = stepRider(
    createRiderState({
      air: 0.03,
      boardYaw: 0.8,
      velocity: { across: 0, downhill: 14 },
      verticalVelocity: -3,
    }),
    {},
    0.05,
  );

  assert.equal(state.crashReason, "landing-edge");
});

test("a clean 180 landing continues switch", () => {
  const state = stepRider(
    createRiderState({
      air: 0.03,
      boardYaw: Math.PI,
      velocity: { across: 0, downhill: 14 },
      verticalVelocity: -3,
    }),
    {},
    0.05,
  );

  assert.ok(state.switchRiding && !state.crashed);
});

test("regular and goofy riders initiate opposite edge sides differently", () => {
  const regular = stepRider(
    createRiderState({ stance: "regular" }),
    { carve: 1 },
    1 / 60,
  );
  const goofy = stepRider(
    createRiderState({ stance: "goofy" }),
    { carve: 1 },
    1 / 60,
  );

  assert.ok(Math.abs(regular.frontEdge) > Math.abs(goofy.frontEdge));
});

test("putting an edge down on a rail slips the rider out", () => {
  let state = createRiderState({ speed: 12 });

  for (let frame = 0; frame < 30 && !state.crashed; frame += 1) {
    state = stepRider(state, { carve: 1 }, 1 / 60, { surface: "rail" });
  }

  assert.equal(state.crashReason, "rail-edge");
});

test("steering pivots a flat board without creating edge lean", () => {
  let state = createRiderState({ speed: 16 });

  for (let frame = 0; frame < 30; frame += 1) {
    state = stepRider(state, { steer: 1 }, 1 / 60);
  }

  assert.ok(state.boardYaw > 0.1 && Math.abs(state.edge) < 0.05);
});

test("a left board flick never creates rightward thrust", () => {
  let left = createRiderState({ speed: 18, surface: "powder" });
  let right = createRiderState({ speed: 18, surface: "powder" });

  for (let frame = 0; frame < 60; frame += 1) {
    left = stepRider(left, { steer: -1 }, 1 / 60, { surface: "powder" });
    right = stepRider(right, { steer: 1 }, 1 / 60, { surface: "powder" });
  }

  assert.ok(left.velocity.across <= 0 && right.velocity.across >= 0);
});

test("holding A and left reinforces a leftward path", () => {
  let state = createRiderState({ speed: 18, surface: "powder" });

  for (let frame = 0; frame < 60; frame += 1) {
    state = stepRider(
      state,
      { carve: -1, steer: -1 },
      1 / 60,
      { surface: "powder" },
    );
  }

  assert.ok(state.position.across < -1 && state.velocity.across < 0);
});

test("matching steer and lean converts a skid into a gripped turn", () => {
  let skid = createRiderState({ speed: 18 });
  let carve = createRiderState({ speed: 18 });

  for (let frame = 0; frame < 60; frame += 1) {
    skid = stepRider(skid, { steer: 1 }, 1 / 60);
    carve = stepRider(carve, { carve: 1, steer: 1 }, 1 / 60);
  }

  assert.ok(carve.skid < skid.skid);
});

test("a quick steering flick snaps the board back toward travel", () => {
  let state = createRiderState({ speed: 14, surface: "powder" });

  for (let frame = 0; frame < 6; frame += 1) {
    state = stepRider(state, { steer: 1 }, 1 / 60, { surface: "powder" });
  }
  const flickAngle = Math.abs(state.slipAngle);

  for (let frame = 0; frame < 12; frame += 1) {
    state = stepRider(state, {}, 1 / 60, { surface: "powder" });
  }

  assert.ok(flickAngle > 0.3 && Math.abs(state.slipAngle) < 0.12);
});

test("a released flick cannot remain stuck sideways after a carve", () => {
  let state = createRiderState({ speed: 18, surface: "powder" });

  for (let frame = 0; frame < 24; frame += 1) {
    state = stepRider(
      state,
      { carve: 1, steer: 1 },
      1 / 60,
      { surface: "powder" },
    );
  }

  for (let frame = 0; frame < 45; frame += 1) {
    state = stepRider(state, {}, 1 / 60, { surface: "powder" });
  }

  assert.ok(Math.abs(state.slipAngle) < 0.12);
});

test("a held park flick scrubs speed without killing the run", () => {
  let state = createRiderState({ speed: 18, surface: "powder" });

  for (let frame = 0; frame < 60; frame += 1) {
    state = stepRider(state, { steer: 1 }, 1 / 60, { surface: "powder" });
  }

  assert.ok(state.speed > 14 && state.speed < 17.5);
});

test("a held skid costs more speed than a quick flick", () => {
  let flick = createRiderState({ speed: 22, surface: "powder" });
  let skid = createRiderState({ speed: 22, surface: "powder" });

  for (let frame = 0; frame < 60; frame += 1) {
    flick = stepRider(
      flick,
      { steer: frame < 6 ? 1 : 0 },
      1 / 60,
      { slopeGrade: 0.08, surface: "powder" },
    );
    skid = stepRider(skid, { steer: 1 }, 1 / 60, {
      slopeGrade: 0.08,
      surface: "powder",
    });
  }

  assert.ok(flick.speed > skid.speed * 1.08);
});

test("a crooked but recoverable landing skids into line", () => {
  const state = stepRider(
    createRiderState({
      air: 0.03,
      boardYaw: 0.55,
      velocity: { across: 0, downhill: 18 },
      verticalVelocity: -3,
    }),
    {},
    0.05,
  );

  assert.ok(!state.crashed && state.skid > 0.3);
});

test("air steering creates a shifty without changing locked momentum", () => {
  const initial = createRiderState({
    air: 1,
    velocity: { across: 2, downhill: 14 },
    verticalVelocity: 1,
  });
  const shifted = stepRider(initial, { steer: 1 }, 0.05);

  assert.ok(shifted.tweak > 0 && shifted.velocity.across === 2);
});

test("a released shifty snaps back before landing", () => {
  let state = createRiderState({
    air: 1,
    tweak: 1,
    velocity: { across: 0, downhill: 14 },
    verticalVelocity: 1,
  });

  for (let frame = 0; frame < 20; frame += 1) {
    state = stepRider(state, {}, 1 / 60);
  }

  assert.ok(state.tweak < 0.2);
});

test("crouched steering loads a grounded butter press", () => {
  let state = createRiderState({ speed: 10, surface: "powder" });

  for (let frame = 0; frame < 15; frame += 1) {
    state = stepRider(
      state,
      { crouch: 1, steer: 1 },
      1 / 60,
      { surface: "powder" },
    );
  }

  assert.ok(state.butter > 0.5);
});
