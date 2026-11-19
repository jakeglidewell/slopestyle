/**
 * Owner 3 entry point: flow, HUD, scoring, audio, deployment, and mobile input.
 */
import { COURSE } from "../mountain/index.js";

const STORAGE_KEY = "slopestyle.bestDistance";
const START_SPEED = 16;
const MIN_COURSE_SPEED = 12;
const MAX_SPEED = 34;
const SPEED_PER_DODGE = 0.62;
const REWARD_EVERY = 10;
const REWARD_DROP = 3.2;
const REWARD_DURATION = 2.4;
const HIT_WINDOW = 1.25;

const clamp = (value, minimum, maximum) =>
  Math.min(maximum, Math.max(minimum, value));

export const courseSpeedForRider = (riderState) => {
  const downhillSpeed = Number.isFinite(riderState?.velocity?.downhill)
    ? riderState.velocity.downhill
    : Number(riderState?.speed) || 0;

  return riderState?.crashed
    ? Math.max(0, downhillSpeed)
    : Math.max(MIN_COURSE_SPEED, downhillSpeed);
};

export const syncHazardsToRider = (hazards, riderDownhill) =>
  hazards.map((hazard) => ({
    ...hazard,
    z: hazard.worldDownhill - riderDownhill,
  }));

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
  return air < 0.35 && lateralGap < 1.05;
};

const randomBetween = (minimum, maximum) =>
  minimum + Math.random() * (maximum - minimum);

const getStoredBest = () => {
  try {
    return Math.max(0, Number(localStorage.getItem(STORAGE_KEY)) || 0);
  } catch {
    return 0;
  }
};

const setStoredBest = (distance) => {
  try {
    localStorage.setItem(STORAGE_KEY, String(Math.floor(distance)));
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
    html, body { margin: 0; min-height: 100%; overflow: hidden; background: #c5e8ed; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    #game-root { position: relative; width: 100vw; height: 100vh; overflow: hidden; color: #10283a; }
    #game-canvas { display: block; width: 100%; height: 100%; }
    #hud-root { position: absolute; top: clamp(14px, 3vh, 32px); left: 50%; width: min(1120px, calc(100% - 40px)); transform: translateX(-50%); display: flex; justify-content: space-between; align-items: flex-start; pointer-events: none; }
    .hud-card { min-width: clamp(136px, 16vw, 188px); border: 1px solid rgba(255, 255, 255, 0.55); border-radius: 16px; padding: 12px 18px 14px; background: rgba(19, 51, 68, 0.84); box-shadow: 0 12px 30px rgba(20, 55, 72, 0.2), inset 0 1px 0 rgba(255,255,255,0.12); color: #fff; backdrop-filter: blur(10px); }
    .hud-card:first-child { border-bottom: 3px solid #6de3df; }
    .hud-card:nth-child(2) { border-bottom: 3px solid #f3c579; text-align: right; }
    .hud-label { display: block; color: #b8e3e9; font-size: clamp(0.7rem, 1.2vw, 0.82rem); font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; }
    .hud-value { display: block; margin-top: 3px; font-size: clamp(1.55rem, 3vw, 2.45rem); font-weight: 900; letter-spacing: -0.045em; line-height: 1; font-variant-numeric: tabular-nums; }
    .hud-unit { margin-left: 3px; font-size: 0.45em; font-weight: 700; letter-spacing: 0; }
    .run-feedback { position: absolute; left: 50%; top: 88px; transform: translateX(-50%); min-width: 170px; border-radius: 999px; padding: 8px 16px; background: rgba(23, 67, 77, 0.82); color: #fff; font-size: 0.82rem; font-weight: 900; letter-spacing: 0.12em; text-align: center; text-transform: uppercase; opacity: 0; transition: opacity 0.14s ease; white-space: nowrap; }
    .run-feedback.is-visible { opacity: 1; }
    #overlay-root { position: absolute; inset: 0; display: grid; place-items: center; padding: 24px; pointer-events: none; }
    .overlay-panel { width: min(540px, 92vw); border: 1px solid rgba(255,255,255,0.46); border-radius: 24px; padding: clamp(24px, 4vw, 40px); background: linear-gradient(150deg, rgba(18, 56, 75, 0.94), rgba(26, 84, 96, 0.91)); box-shadow: 0 24px 60px rgba(18, 58, 75, 0.28), inset 0 1px 0 rgba(255,255,255,0.2); text-align: center; color: #fff; pointer-events: auto; backdrop-filter: blur(12px); }
    .overlay-panel h1 { margin: 4px 0 10px; font-size: clamp(2.7rem, 7vw, 4.8rem); line-height: 0.94; letter-spacing: -0.06em; color: #fff; text-shadow: 0 4px 18px rgba(0,0,0,0.16); }
    .overlay-panel p { margin: 12px 0 0; color: #cce8e9; line-height: 1.5; }
    .overlay-eyebrow { color: #8df0dc !important; font-size: 0.8rem; font-weight: 900; letter-spacing: 0.22em; text-transform: uppercase; }
    .primary-action { min-width: 220px; margin-top: 24px; border: 0; border-radius: 12px; padding: 16px 26px; background: #31bc76; color: #fff; cursor: pointer; font: inherit; font-size: 1.14rem; font-weight: 900; box-shadow: 0 12px 25px rgba(10, 42, 46, 0.25); transition: transform 0.12s ease, background 0.12s ease; }
    .primary-action:hover { background: #3bd389; transform: translateY(-2px); }
    .primary-action:focus-visible { outline: 4px solid #b5ffe0; outline-offset: 3px; }
    .run-note { margin-top: 20px !important; border-top: 1px solid rgba(255,255,255,0.16); padding-top: 16px; font-size: 0.87rem; }
    .fall-callout { border: 0; background: transparent; box-shadow: none; color: #17324a; animation: fallaway 1.35s ease-in forwards; }
    .fall-callout h1 { font-size: clamp(2.8rem, 9vw, 6rem); }
    .is-hidden { display: none !important; }
    #game-root.is-crashed #game-canvas { animation: crash-jolt 0.36s ease-out; }
    #game-root.is-crashed::after { content: ""; position: absolute; inset: 0; background: #fff; opacity: 0; pointer-events: none; animation: crash-flash 0.35s ease-out; }
    @keyframes crash-jolt { 0% { transform: translate(0,0); } 22% { transform: translate(-9px,5px); } 50% { transform: translate(7px,-4px); } 100% { transform: translate(0,0); } }
    @keyframes crash-flash { 0% { opacity: 0.45; } 100% { opacity: 0; } }
    @keyframes fallaway {
      0% { opacity: 1; transform: translateY(-8vh) scale(1); }
      100% { opacity: 0; transform: translateY(28vh) scale(0.34); }
    }
    @media (max-width: 600px) { #hud-root { width: calc(100% - 24px); top: 12px; } .hud-card { min-width: 118px; padding: 10px 12px; } .run-feedback { top: 72px; } .overlay-panel { padding: 24px; } }
    @media (prefers-reduced-motion: reduce) { #game-root.is-crashed #game-canvas, #game-root.is-crashed::after, .fall-callout { animation: none; } .primary-action { transition: none; } }
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
    clear(kind) {
      snowBurst(0.11, kind === "jump" ? 950 : 700, 0.025);
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
    <div class="run-feedback" data-feedback aria-live="polite"></div>
  `;

  return Object.freeze({
    update({ distance, speed, feedbackText, feedbackTimer }) {
      root.querySelector("[data-distance]").textContent = `${Math.floor(distance)} m`;
      root.querySelector("[data-speed]").innerHTML =
        `${Math.round(speed * 3.6)}<span class="hud-unit">km/h</span>`;
      const feedback = root.querySelector("[data-feedback]");
      const visible = feedbackTimer > 0;
      feedback.textContent = visible ? feedbackText : "";
      feedback.classList.toggle("is-visible", visible);
    },
  });
};

const spawnHazard = (state, riderDownhill) => {
  const actionRoll = Math.random();
  let kind = "steer";
  const worldDownhill = riderDownhill + COURSE.spawnDistance;

  if (state.dodged > 4 && actionRoll > 0.82) {
    kind = "duck";
  } else if (state.dodged > 2 && actionRoll > 0.64) {
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
  const candidates = lanes.map((_, index) => index).filter((index) => index !== state.lastLane);
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

const nextSpawnDistance = (speed, kind) => {
  const actionSpacing = kind === "steer" ? 1 : 1.28;
  return randomBetween(
    clamp(29 - speed * 0.28, 16, 25),
    clamp(42 - speed * 0.36, 24, 36),
  ) * actionSpacing;
};

const emptyRunState = (best) => ({
  best,
  celebratedBest: false,
  crashFx: 0,
  distance: 0,
  dodged: 0,
  fallTimer: 0,
  feedbackText: "",
  feedbackTimer: 0,
  finalDistance: 0,
  hazards: [],
  lastLane: -1,
  lastRiderDownhill: 0,
  nextHazardId: 1,
  phase: "idle",
  rewardTimer: 0,
  spawnLeft: 12,
  speed: 0,
});

export default async function setupGameLoop(game) {
  addInterfaceStyles();

  const audio = createAudioController();
  const hud = createHud(game.hudRoot);
  let state = emptyRunState(getStoredBest());
  let lastFrameAt;
  let lastJumpValue = 0;

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
          rewardTimer: state.rewardTimer,
        }),
      }),
    );
  };

  const showIdle = () => {
    game.overlayRoot.innerHTML = `
      <div class="overlay-panel">
        <p class="overlay-eyebrow">The mountain is calling</p>
        <h1>Slopestyle</h1>
        <p>Find your line through deep powder. Dodge trees and rocks, jump logs, and duck low hazards.</p>
        <button class="primary-action" type="button" data-start>Start</button>
        <p class="run-note">A/D carve &nbsp;·&nbsp; ←/→ steer &nbsp;·&nbsp; Space or ↑ jump &nbsp;·&nbsp; ↓ crouch &nbsp;·&nbsp; W/S shift weight</p>
      </div>
    `;
    game.overlayRoot.querySelector("[data-start]").addEventListener("click", startRun, {
      once: true,
    });
  };

  const showCrash = () => {
    game.overlayRoot.innerHTML = `
      <div class="overlay-panel">
        <p class="overlay-eyebrow">Run complete</p>
        <h1>${Math.floor(state.finalDistance)} m</h1>
        <p>Final distance · ${state.dodged} obstacles cleared</p>
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
      ...emptyRunState(state.best),
      phase: "running",
      spawnLeft: 4,
      speed: START_SPEED,
    };
    lastFrameAt = undefined;
    lastJumpValue = 0;
    game.canvas.parentElement?.classList.remove("is-crashed");
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
    setStoredBest(state.best);
    audio.stopRide();
    game.canvas.parentElement?.classList.add("is-crashed");

    if (reason === "cliff") {
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

  const recordDodge = (hazard) => {
    state.dodged += 1;
    if (hazard.kind === "jump" || hazard.kind === "duck") {
      state.feedbackText = hazard.kind === "jump" ? "Clean jump" : "Nice duck";
      state.feedbackTimer = 0.85;
      audio.clear(hazard.kind);
    }

    if (state.dodged % REWARD_EVERY === 0) {
      state.speed = Math.max(START_SPEED, state.speed - REWARD_DROP);
      state.rewardTimer = REWARD_DURATION;
      state.feedbackText = "10 cleared · breathe";
      state.feedbackTimer = 1.3;
      game.events.dispatchEvent(new CustomEvent("rider:pace", {
        detail: { holdSeconds: REWARD_DURATION, targetSpeed: state.speed },
      }));
      return;
    }

    if (state.rewardTimer <= 0) {
      state.speed = Math.min(MAX_SPEED, state.speed + SPEED_PER_DODGE);
      game.events.dispatchEvent(new CustomEvent("rider:pace", {
        detail: { targetSpeed: state.speed },
      }));
    }
  };

  const hasCollision = (hazard, riderState, input) => {
    if (Math.abs(hazard.z) > HIT_WINDOW) return false;

    if (hazard.kind === "jump") {
      return riderState.air < 0.5;
    }

    if (hazard.kind === "duck") {
      return input.crouch < 0.75;
    }

    return (
      riderState.air < 0.35 &&
      Math.abs(hazard.x - riderState.position.across) < 1.05
    );
  };

  const updateRunning = (detail, delta) => {
    const { input, state: riderState } = detail;
    const courseSpeed = courseSpeedForRider(riderState);
    const riderDownhill = Number.isFinite(riderState.position.downhill)
      ? riderState.position.downhill
      : state.lastRiderDownhill;
    const downhillProgress = Math.max(0, riderDownhill - state.lastRiderDownhill);
    state.lastRiderDownhill = riderDownhill;
    audio.ride(riderState);

    if (Math.abs(riderState.position.across) >
        (game.runtime?.world3d ? 38 : COURSE.halfWidth)) {
      endRun("cliff");
      return;
    }

    if (input.jump > 0 && lastJumpValue <= 0) {
      audio.jump();
    }
    lastJumpValue = input.jump;

    state.speed = riderState.speed;
    state.distance += courseSpeed * delta;
    state.spawnLeft -= downhillProgress;
    state.rewardTimer = Math.max(0, state.rewardTimer - delta);

    if (state.spawnLeft <= 0) {
      const hazard = spawnHazard(state, riderDownhill);
      state.hazards.push(hazard);
      state.nextHazardId += 1;
      state.spawnLeft = nextSpawnDistance(state.speed, hazard.kind);
    }

    state.hazards = syncHazardsToRider(state.hazards, riderDownhill);
    for (const hazard of state.hazards) {
      if (hazardHitsRider(hazard, riderState, input)) {
        endRun("hazard", hazard);
        return;
      }

      if (!hazard.passed && hazard.z < -HIT_WINDOW) {
        hazard.passed = true;
        recordDodge(hazard);
      }
    }

    state.hazards = state.hazards.filter((hazard) => hazard.z > -5);
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
    state.feedbackTimer = Math.max(0, state.feedbackTimer - delta);

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
