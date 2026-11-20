/**
 * Owner 3 entry point: flow, HUD, scoring, audio, deployment, and mobile input.
 */
import { COURSE } from "../mountain/index.js";
import { SIDE_HIT_FIRST_LIP, SIDE_HIT_SPACING,
  sideHitFeatureAt } from "../mountain/terrain3d.js";
import { riderSpeedRangeAt } from "../rider/physics.js";
import { createAirScoreTracker, stepAirScore } from "./scoring.js";

const STORAGE_KEY = "slopestyle.bestDistance";
const SCORE_STORAGE_KEY = "slopestyle.bestScore";
const START_SPEED = 16;
const MAX_SPEED = 44;
const HIT_WINDOW = 1.25;
const BOULDER_RADIUS = 1.15;

const clamp = (value, minimum, maximum) =>
  Math.min(maximum, Math.max(minimum, value));

export const courseSpeedForRider = (riderState) => {
  const downhillSpeed = Number.isFinite(riderState?.velocity?.downhill)
    ? riderState.velocity.downhill
    : Number(riderState?.speed) || 0;

  return riderState?.crashed
    ? Math.max(0, downhillSpeed)
    : Math.max(riderSpeedRangeAt(riderState?.position?.downhill).min,
      downhillSpeed);
};

export const riderOutsideCourse = (riderState) =>
  Math.abs(riderState?.position?.across ?? 0) > COURSE.halfWidth;

export const syncHazardsToRider = (hazards, riderDownhill, delta = 0) =>
  hazards.map((hazard) => {
    const z = hazard.worldDownhill - riderDownhill;
    if (hazard.variant !== "rolling-boulder") return { ...hazard, z };

    const lateralTravel = hazard.acrossSpeed * delta;
    return {
      ...hazard,
      x: hazard.x + lateralTravel,
      z,
      roll: hazard.roll + lateralTravel / hazard.radius,
    };
  });

export const hazardHitsRider = (hazard, riderState, input = {}) => {
  if (hazard.passed || Math.abs(hazard.z) > HIT_WINDOW) return false;
  const lateralGap = Math.abs(hazard.x - riderState.position.across);
  const air = Number(riderState.air) || 0;

  if (hazard.kind === "jump") {
    return lateralGap < (hazard.radius ?? COURSE.halfWidth * 0.94) && air < 0.5;
  }
  if (hazard.kind === "duck") {
    const halfSpan = hazard.variant === "bird" ? 0.86 : 0.88;
    return lateralGap < (hazard.radius ?? COURSE.halfWidth * halfSpan) &&
      (Number(input.crouch) || 0) < 0.75;
  }
  if (hazard.variant === "rolling-boulder") {
    return air < hazard.radius * 1.85 && lateralGap < hazard.radius;
  }
  return air < 0.35 && lateralGap < 1.05;
};

const randomBetween = (minimum, maximum) =>
  minimum + Math.random() * (maximum - minimum);

const getStoredNumber = (key) => {
  try {
    return Math.max(0, Number(localStorage.getItem(key)) || 0);
  } catch {
    return 0;
  }
};

const setStoredNumber = (key, value) => {
  try {
    localStorage.setItem(key, String(Math.floor(value)));
  } catch {
    // Local storage is a convenience, not a requirement for play.
  }
};

const addInterfaceStyles = () => {
  if (document.querySelector("[data-slopestyle-styles]")) return;

  const style = document.createElement("style");
  style.dataset.slopestyleStyles = "true";
  style.textContent = `
    * { box-sizing: border-box; }
    html, body { margin: 0; min-height: 100%; overflow: hidden; background: #8baab9; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    #game-root { position: relative; width: 100vw; height: 100vh; overflow: hidden; color: #f2f6f5; }
    #world-canvas, #game-canvas { position: absolute; inset: 0; display: block; width: 100%; height: 100%; }
    #game-canvas { pointer-events: none; }
    #hud-root { position: absolute; inset: 22px 26px auto 26px; display: flex; justify-content: space-between; pointer-events: none; }
    .hud-card { min-width: 122px; border: 1px solid rgba(237, 249, 251, 0.18); border-radius: 5px; padding: 10px 14px; background: rgba(15, 34, 43, 0.42); box-shadow: 0 8px 28px rgba(28, 56, 67, 0.12); backdrop-filter: blur(12px); }
    .hud-label { display: block; color: rgba(238, 248, 249, 0.68); font-size: 0.66rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; }
    .hud-value { display: block; margin-top: 4px; color: #f7faf9; font-size: clamp(1.25rem, 2.3vw, 1.8rem); font-weight: 650; line-height: 1; font-variant-numeric: tabular-nums; }
    .hud-unit { margin-left: 3px; font-size: 0.75rem; font-weight: 600; opacity: 0.68; }
    #overlay-root { position: absolute; inset: 0; display: grid; place-items: center; padding: 24px; pointer-events: none; }
    .overlay-panel { width: min(540px, 92vw); border: 1px solid rgba(234, 247, 248, 0.16); border-radius: 6px; padding: clamp(26px, 4vw, 42px); background: rgba(18, 39, 49, 0.82); box-shadow: 0 22px 75px rgba(17, 36, 46, 0.28); backdrop-filter: blur(18px); text-align: left; pointer-events: auto; }
    .overlay-panel h1 { margin: 0 0 12px; font-size: clamp(2.6rem, 6vw, 4.2rem); font-weight: 680; line-height: 0.96; letter-spacing: -0.055em; color: #f5f8f6; }
    .overlay-panel p { margin: 12px 0 0; color: #cedfdf; line-height: 1.48; }
    .overlay-kicker { margin: 0 0 12px !important; color: #a6c7cf !important; font-size: 0.72rem; font-weight: 750; letter-spacing: 0.2em; text-transform: uppercase; }
    .primary-action { min-width: 170px; margin-top: 25px; border: 0; border-radius: 4px; padding: 13px 23px; background: #e9f0ed; color: #203d46; cursor: pointer; font: inherit; font-size: 0.88rem; font-weight: 750; letter-spacing: 0.06em; text-transform: uppercase; }
    .primary-action:hover { background: #ffffff; }
    .primary-action:focus-visible { outline: 3px solid #b5dce3; outline-offset: 3px; }
    .run-note { margin-top: 23px !important; color: #a7c0c4 !important; font-size: 0.78rem; }
    .run-stat { margin-top: 22px !important; color: #f6faf9 !important; font-size: 2.4rem; font-weight: 650; line-height: 1; font-variant-numeric: tabular-nums; }
    .trick-callout { position: absolute; left: 50%; top: 75px; transform: translateX(-50%); color: #fff7e8; font-size: clamp(0.8rem, 1.6vw, 1rem); font-weight: 800; letter-spacing: 0.11em; text-align: center; text-shadow: 0 2px 12px #1d3946; white-space: nowrap; }
    .trick-callout strong { display: block; margin-top: 3px; font-size: clamp(1.4rem, 3vw, 2.2rem); letter-spacing: 0; }
    .fall-callout { border: 0; background: transparent; box-shadow: none; color: white; text-align: center; animation: fallaway 1.35s ease-in forwards; }
    .fall-callout h1 { font-size: clamp(2.6rem, 7vw, 5rem); }
    .is-hidden { display: none !important; }
    @media (max-width: 560px) { #hud-root { inset: 12px 12px auto 12px; } .hud-card { min-width: 90px; padding: 8px 10px; } .overlay-panel { padding: 25px; } }
    @keyframes fallaway {
      0% { opacity: 1; transform: translateY(-8vh) scale(1); }
      100% { opacity: 0; transform: translateY(28vh) scale(0.34); }
    }
  `;
  document.head.append(style);
};

const createAudioController = () => {
  let context;
  let ambience;
  let noiseBuffer;
  let lastSlash = 0;
  let lastLandingImpact = 0;

  const ensure = () => {
    context ||= new (window.AudioContext || window.webkitAudioContext)();
    if (context.state === "suspended") {
      context.resume();
    }

    return context;
  };

  const makeNoiseBuffer = (audio) => {
    if (noiseBuffer) return noiseBuffer;
    const sampleCount = Math.floor(audio.sampleRate * 2);
    noiseBuffer = audio.createBuffer(1, sampleCount, audio.sampleRate);
    const samples = noiseBuffer.getChannelData(0);
    let seed = 19341;
    for (let index = 0; index < sampleCount; index += 1) {
      seed = (Math.imul(seed, 1664525) + 1013904223) | 0;
      samples[index] = (seed / 0x80000000) * 0.5;
    }
    return noiseBuffer;
  };

  const snowBurst = (duration, frequency, volume) => {
    const audio = ensure();
    const source = audio.createBufferSource();
    const filter = audio.createBiquadFilter();
    const gain = audio.createGain();
    source.buffer = makeNoiseBuffer(audio);
    filter.type = "bandpass";
    filter.frequency.value = frequency;
    filter.Q.value = 0.5;
    gain.gain.setValueAtTime(0.001, audio.currentTime);
    gain.gain.linearRampToValueAtTime(volume, audio.currentTime + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + duration);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(audio.destination);
    source.start(audio.currentTime, 0, duration);
  };

  const startAmbience = () => {
    if (ambience) return;
    const audio = ensure();
    const source = audio.createBufferSource();
    source.buffer = makeNoiseBuffer(audio);
    source.loop = true;
    const makeLayer = (type, frequency) => {
      const filter = audio.createBiquadFilter();
      filter.type = type;
      filter.frequency.value = frequency;
      const gain = audio.createGain();
      gain.gain.value = 0;
      source.connect(filter);
      filter.connect(gain);
      gain.connect(audio.destination);
      return { filter, gain };
    };
    ambience = {
      source,
      snow: makeLayer("highpass", 1600),
      skid: makeLayer("bandpass", 900),
      wind: makeLayer("lowpass", 420),
    };
    source.start();
  };

  return Object.freeze({
    startRide() {
      startAmbience();
      lastSlash = 0;
      lastLandingImpact = 0;
    },
    stopRide() {
      if (!ambience) return;

      const audio = ensure();
      if (ambience) {
        for (const layer of [ambience.snow, ambience.skid, ambience.wind]) {
          layer.gain.gain.setTargetAtTime(0.0001, audio.currentTime, 0.06);
        }
        ambience.source.stop(audio.currentTime + 0.2);
        ambience = undefined;
      }
    },
    ride(rider) {
      if (!ambience) return;
      const audio = ensure();
      const speed = clamp(rider.speed / MAX_SPEED, 0, 1);
      const onSnow = rider.air <= 0 && !rider.crashed ? 1 : 0;
      const surfaceVolume = {
        groomed: 0.034,
        powder: 0.014,
        ice: 0.048,
        slush: 0.036,
        chop: 0.042,
        rail: 0.02,
      }[rider.surface] ?? 0.03;
      const snowPitch = rider.surface === "ice" ? 2500 :
        rider.surface === "powder" ? 900 : 1600;
      ambience.snow.filter.frequency.setTargetAtTime(snowPitch + speed * 700, audio.currentTime, 0.07);
      ambience.snow.gain.gain.setTargetAtTime(
        onSnow * surfaceVolume * (0.25 + speed * 0.75), audio.currentTime, 0.04,
      );
      ambience.skid.gain.gain.setTargetAtTime(
        onSnow * (rider.skid * 0.046 + rider.slash * 0.016), audio.currentTime, 0.035,
      );
      ambience.wind.gain.gain.setTargetAtTime(
        (0.005 + speed * speed * 0.045) * (1 - (rider.crouchAmount ?? 0) * 0.2),
        audio.currentTime, 0.09,
      );
      if (rider.slash > 0.42 && lastSlash <= 0.42) {
        snowBurst(0.14, 750, 0.02);
      }
      if (rider.landingImpact > 1.5 && lastLandingImpact <= 1.5) {
        snowBurst(0.2, 280, 0.04);
      }
      lastSlash = rider.slash;
      lastLandingImpact = rider.landingImpact;
    },
    jump() {
      snowBurst(0.09, 1200, 0.015);
    },
    crash() {
      snowBurst(0.32, 220, 0.09);
    },
    fall() {
      snowBurst(0.3, 330, 0.035);
    },
  });
};

const createHud = (root) => {
  root.innerHTML = `
    <div class="hud-card" aria-live="polite">
      <span class="hud-label">Distance</span>
      <strong class="hud-value" data-distance>0 m</strong>
    </div>
    <div class="hud-card" aria-live="polite">
      <span class="hud-label">Speed</span>
      <strong class="hud-value" data-speed>0<span class="hud-unit">km/h</span></strong>
    </div>
    <div class="hud-card" aria-live="polite">
      <span class="hud-label">Score</span>
      <strong class="hud-value" data-score>0</strong>
    </div>
    <div class="trick-callout is-hidden" data-trick></div>
  `;

  return Object.freeze({
    update({ distance, score, speed, trickNotice, trickNoticeTimer }) {
      root.querySelector("[data-distance]").textContent = `${Math.floor(distance)} m`;
      root.querySelector("[data-speed]").innerHTML = `${Math.round(speed * 3.6)}<span class="hud-unit">km/h</span>`;
      root.querySelector("[data-score]").textContent = String(Math.floor(score));
      const notice = root.querySelector("[data-trick]");
      notice.classList.toggle("is-hidden", !trickNotice || trickNoticeTimer <= 0);
      if (trickNotice && trickNoticeTimer > 0) {
        notice.textContent = trickNotice.label;
        const amount = document.createElement("strong");
        amount.textContent = `+${trickNotice.points}`;
        notice.append(amount);
      }
    },
  });
};

const spawnHazard = (state, riderDownhill, courseSpeed) => {
  const worldDownhill = riderDownhill + COURSE.spawnDistance;
  if (state.nextHazardId === state.nextBoulderId) {
    state.nextBoulderId += 5 + Math.floor(Math.random() * 3);
    const direction = Math.random() < 0.5 ? 1 : -1;
    const x = -direction * COURSE.halfWidth * 0.86;
    const crossingX = direction * randomBetween(0.15, 1.5);
    // Time the crossing near the center of the run at the rider's current pace.
    const acrossSpeed = (crossingX - x) * courseSpeed / COURSE.spawnDistance;
    return {
      id: state.nextHazardId,
      kind: "steer",
      passed: false,
      variant: "rolling-boulder",
      radius: BOULDER_RADIUS,
      acrossSpeed,
      roll: 0,
      worldDownhill,
      x,
      z: COURSE.spawnDistance,
    };
  }

  const actionRoll = Math.random();
  let kind = "steer";
  const sideHit = sideHitFeatureAt(Math.max(0,
    Math.round((worldDownhill - SIDE_HIT_FIRST_LIP) / SIDE_HIT_SPACING)));
  const clearSideHit = worldDownhill >= sideHit.start - 4 &&
    worldDownhill <= sideHit.lip + 42;

  if (!clearSideHit && state.dodged > 4 && actionRoll > 0.82) {
    kind = "duck";
  } else if (!clearSideHit && state.dodged > 2 && actionRoll > 0.64) {
    kind = "jump";
  }

  if (kind === "jump") {
    return {
      id: state.nextHazardId,
      kind,
      passed: false,
      variant: "fallen-log",
      radius: 7.2,
      worldDownhill,
      x: 0,
      z: COURSE.spawnDistance,
    };
  }

  if (kind === "duck") {
    return {
      id: state.nextHazardId,
      kind,
      passed: false,
      variant: "branch",
      radius: 3.9,
      worldDownhill,
      x: 0,
      z: COURSE.spawnDistance,
    };
  }

  const lanes = [-0.66, -0.34, 0, 0.34, 0.66];
  const candidates = lanes.map((_, index) => index)
    .filter((index) => index !== state.lastLane &&
      (!clearSideHit || Math.abs(lanes[index] * COURSE.halfWidth -
        sideHit.centerX) > 3.4));
  const lane = candidates[Math.floor(Math.random() * candidates.length)];
  state.lastLane = lane;
  return {
    id: state.nextHazardId,
    kind,
    passed: false,
    variant: Math.random() > 0.38 ? "pine" : "rock",
    worldDownhill,
    x: lanes[lane] * COURSE.halfWidth + randomBetween(-0.18, 0.18),
    z: COURSE.spawnDistance,
  };
};

const nextSpawnDistance = (speed) =>
  randomBetween(clamp(40 - speed * 0.25, 28, 40), clamp(58 - speed * 0.35, 37, 55));

const emptyRunState = (best, bestScore = 0) => ({
  best,
  bestScore,
  crashFx: 0,
  distance: 0,
  score: 0,
  trickPoints: 0,
  trickNotice: null,
  trickNoticeTimer: 0,
  dodged: 0,
  fallTimer: 0,
  finalDistance: 0,
  hazards: [],
  lastLane: -1,
  lastRiderDownhill: 0,
  nextBoulderId: 4 + Math.floor(Math.random() * 3),
  nextHazardId: 1,
  phase: "idle",
  spawnLeft: 12,
  speed: 0,
});

export default async function setupGameLoop(game) {
  addInterfaceStyles();

  const audio = createAudioController();
  const hud = createHud(game.hudRoot);
  let state = emptyRunState(getStoredNumber(STORAGE_KEY), getStoredNumber(SCORE_STORAGE_KEY));
  let lastFrameAt;
  let lastJumpValue = 0;
  let previousRiderState;
  let airScoreTracker = createAirScoreTracker();

  const resizeCanvas = () => {
    const rect = game.canvas.getBoundingClientRect();
    const scale = Math.min(window.devicePixelRatio || 1, 2);
    game.canvas.width = Math.max(1, Math.floor(rect.width * scale));
    game.canvas.height = Math.max(1, Math.floor(rect.height * scale));
  };

  const dispatchCourse = () => {
    game.events.dispatchEvent(
      new CustomEvent("course:update", {
        detail: Object.freeze({
          crashFx: state.crashFx,
          distance: state.distance,
          hazards: Object.freeze(state.hazards.map((hazard) => Object.freeze({ ...hazard }))),
          phase: state.phase,
        }),
      }),
    );
  };

  const showIdle = () => {
    game.overlayRoot.innerHTML = `
      <div class="overlay-panel">
        <p class="overlay-kicker">An endless descent</p>
        <h1>Slopestyle</h1>
        <p>Read the terrain, set an edge, and find a line through the mountain. Cut toward the flagged side hits, grab or spin, and land clean for trick points. The pace builds as you descend.</p>
        <button class="primary-action" type="button" data-start>Drop in</button>
        <p class="run-note">A/D carve · ←/→ flick or skid · ↓ crouch or grab · W/S shift weight · Space or ↑ jump<br>Best run: ${Math.floor(state.best)} m · Best score: ${Math.floor(state.bestScore)}</p>
      </div>
    `;
    game.overlayRoot.querySelector("[data-start]").addEventListener("click", startRun, {
      once: true,
    });
  };

  const showCrash = () => {
    game.overlayRoot.innerHTML = `
      <div class="overlay-panel">
        <p class="overlay-kicker">Run ended</p>
        <h1>Back to the top</h1>
        <p class="run-stat">${Math.floor(state.score)} points</p>
        <p>${Math.floor(state.finalDistance)} m ridden · Best run: ${Math.floor(state.best)} m · Best score: ${Math.floor(state.bestScore)}</p>
        <button class="primary-action" type="button" data-restart>Ride again</button>
      </div>
    `;
    game.overlayRoot.querySelector("[data-restart]").addEventListener("click", startRun, {
      once: true,
    });
  };

  const showFall = () => {
    game.overlayRoot.innerHTML = `
      <div class="overlay-panel fall-callout">
        <h1>Off the mountain</h1>
      </div>
    `;
  };

  const startRun = () => {
    state = {
      ...emptyRunState(state.best, state.bestScore),
      phase: "running",
      spawnLeft: 4,
      speed: START_SPEED,
    };
    lastFrameAt = undefined;
    lastJumpValue = 0;
    previousRiderState = undefined;
    airScoreTracker = createAirScoreTracker();
    game.overlayRoot.innerHTML = "";
    game.events.dispatchEvent(
      new CustomEvent("rider:reset", { detail: { speed: START_SPEED } }),
    );
    dispatchCourse();
    audio.startRide();
  };

  const endRun = (reason, hazard) => {
    state.finalDistance = state.distance;
    state.crashFx = 0.8;
    state.best = Math.max(state.best, Math.floor(state.distance));
    state.bestScore = Math.max(state.bestScore, Math.floor(state.score));
    setStoredNumber(STORAGE_KEY, state.best);
    setStoredNumber(SCORE_STORAGE_KEY, state.bestScore);
    audio.stopRide();

    if (reason === "cliff") {
      game.events.dispatchEvent(new CustomEvent("rider:impact", { detail: hazard }));
      state.phase = "falling";
      state.fallTimer = 1.35;
      audio.fall();
      showFall();
      return;
    }

    state.phase = "crashed";
    if (reason === "hazard") {
      game.events.dispatchEvent(new CustomEvent("rider:impact", { detail: hazard }));
    }
    audio.crash();
    showCrash();
  };

  const recordDodge = () => { state.dodged += 1; };

  const updateRunning = (detail, delta) => {
    const { input, state: riderState } = detail;
    const courseSpeed = courseSpeedForRider(riderState);
    const riderDownhill = Number.isFinite(riderState.position.downhill)
      ? riderState.position.downhill
      : state.lastRiderDownhill;
    const downhillProgress = Math.max(0, riderDownhill - state.lastRiderDownhill);
    state.lastRiderDownhill = riderDownhill;
    audio.ride(riderState);

    if (riderOutsideCourse(riderState)) {
      endRun("cliff", { kind: "course-edge", x: riderState.position.across });
      return;
    }

    if (input.jump > 0 && lastJumpValue <= 0) {
      audio.jump();
    }
    lastJumpValue = input.jump;

    state.speed = riderState.speed;
    state.distance += Math.max(downhillProgress, courseSpeed * delta);
    state.score = Math.floor(state.distance) + state.trickPoints;
    state.trickNoticeTimer = Math.max(0, state.trickNoticeTimer - delta);
    state.spawnLeft -= downhillProgress;

    state.hazards = syncHazardsToRider(state.hazards, riderDownhill, delta);
    if (state.spawnLeft <= 0) {
      const hazard = spawnHazard(state, riderDownhill, courseSpeed);
      if (hazard) {
        state.hazards.push(hazard);
        state.nextHazardId += 1;
      }
      state.spawnLeft = nextSpawnDistance(state.speed);
    }

    for (const hazard of state.hazards) {
      if (hazardHitsRider(hazard, riderState, input)) {
        endRun("hazard", hazard);
        return;
      }

      if (!hazard.passed && hazard.z < -HIT_WINDOW) {
        hazard.passed = true;
        recordDodge();
      }
    }

    state.hazards = state.hazards.filter((hazard) => hazard.z > -5);
    const scoreResult = stepAirScore(airScoreTracker,
      previousRiderState ?? riderState, riderState, detail.pose);
    airScoreTracker = scoreResult.tracker;
    previousRiderState = riderState;
    if (scoreResult.award) {
      state.trickPoints += scoreResult.award.points;
      state.score = Math.floor(state.distance) + state.trickPoints;
      state.trickNotice = scoreResult.award;
      state.trickNoticeTimer = 1.9;
      state.bestScore = Math.max(state.bestScore, state.score);
      setStoredNumber(SCORE_STORAGE_KEY, state.bestScore);
    }
  };

  const updateFalling = (delta) => {
    state.fallTimer -= delta;

    if (state.fallTimer <= 0) {
      state.phase = "crashed";
      audio.crash();
      showCrash();
    }
  };

  game.events.addEventListener("rider:update", (event) => {
    const now = performance.now();
    const delta =
      lastFrameAt === undefined ? 0 : clamp((now - lastFrameAt) / 1_000, 0, 0.05);

    lastFrameAt = now;
    state.crashFx = Math.max(0, state.crashFx - delta);

    if (state.phase === "running") {
      updateRunning(event.detail, delta);
    } else if (state.phase === "falling") {
      updateFalling(delta);
    }

    if (state.phase !== "running") {
      state.hazards = syncHazardsToRider(
        state.hazards, Number(event.detail?.state?.position?.downhill) || 0,
      );
    }

    hud.update(state);
    dispatchCourse();
  });

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  hud.update(state);
  dispatchCourse();
  showIdle();
}
