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
  let theme;
  let ambience;
  let lastCarveAt = 0;
  let lastSlash = 0;
  let lastLandingImpact = 0;

  const ensure = () => {
    context ||= new (window.AudioContext || window.webkitAudioContext)();
    if (context.state === "suspended") {
      context.resume();
    }

    return context;
  };

  const tone = (frequency, duration, type = "sine", volume = 0.05) => {
    const audio = ensure();
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();

    oscillator.type = type;
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(volume, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + duration);
    oscillator.connect(gain);
    gain.connect(audio.destination);
    oscillator.start();
    oscillator.stop(audio.currentTime + duration);
  };

  const startAmbience = () => {
    if (ambience) return;
    const audio = ensure();
    const sampleCount = Math.floor(audio.sampleRate * 2);
    const buffer = audio.createBuffer(1, sampleCount, audio.sampleRate);
    const samples = buffer.getChannelData(0);
    let seed = 19341;
    for (let index = 0; index < sampleCount; index += 1) {
      seed = (Math.imul(seed, 1664525) + 1013904223) | 0;
      samples[index] = (seed / 0x80000000) * 0.5;
    }
    const source = audio.createBufferSource();
    source.buffer = buffer;
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
    startTheme() {
      const audio = ensure();

      if (theme) return;

      startAmbience();
      lastSlash = 0;
      lastLandingImpact = 0;

      const gain = audio.createGain();
      const bass = audio.createOscillator();
      const lead = audio.createOscillator();

      bass.type = "triangle";
      lead.type = "sine";
      bass.frequency.value = 110;
      lead.frequency.value = 220;
      gain.gain.value = 0.025;
      bass.connect(gain);
      lead.connect(gain);
      gain.connect(audio.destination);
      bass.start();
      lead.start();
      theme = { bass, gain, lead };

      let beat = 0;
      theme.timer = window.setInterval(() => {
        if (!theme) return;

        const notes = [220, 277, 330, 277, 392, 330, 277, 247];
        const now = audio.currentTime;
        theme.lead.frequency.setTargetAtTime(notes[beat % notes.length], now, 0.02);
        theme.bass.frequency.setTargetAtTime(beat % 4 === 0 ? 110 : 146.8, now, 0.03);
        beat += 1;
      }, 260);
    },
    stopTheme() {
      if (!theme && !ambience) return;

      const audio = ensure();
      if (theme) {
        window.clearInterval(theme.timer);
        theme.gain.gain.setTargetAtTime(0.0001, audio.currentTime, 0.08);
        theme.bass.stop(audio.currentTime + 0.2);
        theme.lead.stop(audio.currentTime + 0.2);
        theme = undefined;
      }
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
        tone(230, 0.065, "sawtooth", 0.016);
      }
      if (rider.landingImpact > 1.5 && lastLandingImpact <= 1.5) {
        tone(85 + rider.landingImpact * 8, 0.1, "triangle", 0.028);
      }
      lastSlash = rider.slash;
      lastLandingImpact = rider.landingImpact;
    },
    jump() {
      tone(420, 0.07, "triangle", 0.04);
    },
    carve(force) {
      const now = performance.now();

      if (now - lastCarveAt < 380) return;
      lastCarveAt = now;
      tone(90 + force * 70, 0.11, "sawtooth", 0.022);
    },
    clear(kind) {
      tone(kind === "jump" ? 590 : 470, 0.085, "triangle", 0.026);
    },
    crash() {
      tone(82, 0.24, "sawtooth", 0.07);
    },
    highScore() {
      tone(660, 0.08, "sine", 0.045);
      window.setTimeout(() => tone(990, 0.12, "sine", 0.04), 90);
    },
    noooo() {
      tone(196, 0.7, "sawtooth", 0.055);
      window.setTimeout(() => tone(146.8, 0.55, "sawtooth", 0.035), 420);
      window.setTimeout(() => tone(98, 0.5, "sawtooth", 0.02), 800);
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
      <span class="hud-label">Best</span>
      <strong class="hud-value" data-best>0 m</strong>
    </div>
    <div class="run-feedback" data-feedback aria-live="polite"></div>
  `;

  return Object.freeze({
    update({ best, distance, feedbackText, feedbackTimer }) {
      root.querySelector("[data-distance]").textContent = `${Math.floor(distance)} m`;
      root.querySelector("[data-best]").textContent = `${Math.floor(best)} m`;
      const feedback = root.querySelector("[data-feedback]");
      const visible = feedbackTimer > 0;
      feedback.textContent = visible ? feedbackText : "";
      feedback.classList.toggle("is-visible", visible);
    },
  });
};

const spawnHazard = (state) => {
  const actionRoll = Math.random();
  let kind = "steer";

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
      x: 0,
      z: COURSE.spawnDistance,
    };
  }

  if (kind === "duck") {
    return {
      id: state.nextHazardId,
      kind,
      passed: false,
      variant: Math.random() > 0.45 ? "bird" : "branch",
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
  nextHazardId: 1,
  phase: "idle",
  rewardTimer: 0,
  spawnLeft: 10,
  speed: START_SPEED,
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
        <p class="run-note">A/D or ←/→ steer &nbsp;·&nbsp; Space or ↑ jump &nbsp;·&nbsp; ↓ duck</p>
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
        <button class="primary-action" type="button" data-return>Return to top</button>
      </div>
    `;
    game.overlayRoot.querySelector("[data-return]").addEventListener("click", returnToTop, {
      once: true,
    });
  };

  const showFall = () => {
    game.overlayRoot.innerHTML = `
      <div class="overlay-panel fall-callout">
        <h1>NOOOOOOO</h1>
      </div>
    `;
  };

  const startRun = () => {
    state = {
      ...emptyRunState(state.best),
      phase: "running",
      spawnLeft: 4,
    };
    lastFrameAt = undefined;
    lastJumpValue = 0;
    game.canvas.parentElement?.classList.remove("is-crashed");
    game.overlayRoot.innerHTML = "";
    game.events.dispatchEvent(
      new CustomEvent("rider:reset", { detail: { speed: START_SPEED } }),
    );
    dispatchCourse();
    audio.startTheme();
  };

  const returnToTop = () => {
    state = emptyRunState(state.best);
    lastFrameAt = undefined;
    lastJumpValue = 0;
    game.canvas.parentElement?.classList.remove("is-crashed");
    game.events.dispatchEvent(
      new CustomEvent("rider:reset", { detail: { speed: START_SPEED } }),
    );
    dispatchCourse();
    hud.update(state);
    showIdle();
  };

  const endRun = (reason) => {
    state.finalDistance = state.distance;
    state.crashFx = 0.8;
    state.best = Math.max(state.best, Math.floor(state.distance));
    setStoredBest(state.best);
    audio.stopTheme();
    game.canvas.parentElement?.classList.add("is-crashed");

    if (reason === "cliff") {
      state.phase = "falling";
      state.fallTimer = 1.35;
      audio.noooo();
      showFall();
      return;
    }

    state.phase = "crashed";
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
    audio.ride(riderState);

    if (Math.abs(riderState.position.across) > COURSE.halfWidth) {
      endRun("cliff");
      return;
    }

    if (input.jump > 0 && lastJumpValue <= 0) {
      audio.jump();
    }
    lastJumpValue = input.jump;

    if (Math.abs(input.carve) > 0.85 && Math.abs(riderState.edge) > 0.48) {
      audio.carve(Math.abs(riderState.edge));
    }

    state.speed = riderState.speed;
    state.distance += courseSpeed * delta;
    state.spawnLeft -= courseSpeed * delta;
    state.rewardTimer = Math.max(0, state.rewardTimer - delta);

    if (state.distance > state.best && !state.celebratedBest) {
      state.best = Math.floor(state.distance);
      state.celebratedBest = true;
      setStoredBest(state.best);
      audio.highScore();
    }

    if (state.spawnLeft <= 0) {
      const hazard = spawnHazard(state);
      state.hazards.push(hazard);
      state.nextHazardId += 1;
      state.spawnLeft = nextSpawnDistance(state.speed, hazard.kind);
    }

    for (const hazard of state.hazards) {
      hazard.z -= courseSpeed * delta;

      if (hasCollision(hazard, riderState, input)) {
        endRun("hazard");
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

    hud.update(state);
    dispatchCourse();
  });

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  hud.update(state);
  dispatchCourse();
  showIdle();
}
