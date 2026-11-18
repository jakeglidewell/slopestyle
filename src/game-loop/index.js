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
    html, body { margin: 0; min-height: 100%; overflow: hidden; background: #dff7ff; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    #game-root { position: relative; width: 100vw; height: 100vh; overflow: hidden; color: #102033; }
    #game-canvas { display: block; width: 100%; height: 100%; }
    #hud-root { position: absolute; inset: 18px 22px auto 22px; display: flex; justify-content: space-between; pointer-events: none; }
    .hud-card { min-width: 136px; border: 2px solid rgba(16, 32, 51, 0.16); border-radius: 8px; padding: 10px 12px; background: rgba(255, 255, 255, 0.78); box-shadow: 0 8px 24px rgba(40, 71, 90, 0.12); }
    .hud-label { display: block; color: #517085; font-size: 0.72rem; font-weight: 800; text-transform: uppercase; }
    .hud-value { display: block; margin-top: 2px; font-size: clamp(1.25rem, 2.3vw, 1.8rem); font-weight: 900; line-height: 1; }
    #overlay-root { position: absolute; inset: 0; display: grid; place-items: center; padding: 24px; pointer-events: none; }
    .overlay-panel { width: min(520px, 92vw); border: 2px solid rgba(16, 32, 51, 0.14); border-radius: 8px; padding: clamp(22px, 4vw, 34px); background: rgba(255, 255, 255, 0.84); box-shadow: 0 18px 50px rgba(20, 49, 69, 0.18); text-align: center; pointer-events: auto; }
    .overlay-panel h1 { margin: 0 0 8px; font-size: clamp(2.4rem, 7vw, 4.5rem); line-height: 0.95; letter-spacing: 0; color: #17324a; }
    .overlay-panel p { margin: 10px 0 0; color: #425c70; line-height: 1.45; }
    .primary-action { min-width: 190px; margin-top: 18px; border: 0; border-radius: 8px; padding: 15px 24px; background: #22c55e; color: white; cursor: pointer; font: inherit; font-size: 1.12rem; font-weight: 900; box-shadow: 0 10px 24px rgba(34, 197, 94, 0.28); }
    .primary-action:focus-visible { outline: 4px solid rgba(34, 197, 94, 0.35); outline-offset: 3px; }
    .run-note { font-size: 0.9rem; }
    .fall-callout { border: 0; background: transparent; box-shadow: none; color: #17324a; animation: fallaway 1.35s ease-in forwards; }
    .fall-callout h1 { font-size: clamp(2.8rem, 9vw, 6rem); }
    .is-hidden { display: none !important; }
    @keyframes fallaway {
      0% { opacity: 1; transform: translateY(-8vh) scale(1); }
      100% { opacity: 0; transform: translateY(28vh) scale(0.34); }
    }
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
  `;

  return Object.freeze({
    update({ best, distance }) {
      root.querySelector("[data-distance]").textContent = `${Math.floor(distance)} m`;
      root.querySelector("[data-best]").textContent = `${Math.floor(best)} m`;
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

  return {
    id: state.nextHazardId,
    kind,
    passed: false,
    variant: Math.random() > 0.38 ? "pine" : "rock",
    x: randomBetween(-COURSE.halfWidth * 0.76, COURSE.halfWidth * 0.76),
    z: COURSE.spawnDistance,
  };
};

const nextSpawnDistance = (speed) =>
  randomBetween(clamp(24 - speed * 0.35, 10, 18), clamp(36 - speed * 0.42, 16, 28));

const emptyRunState = (best) => ({
  best,
  celebratedBest: false,
  distance: 0,
  dodged: 0,
  fallTimer: 0,
  finalDistance: 0,
  hazards: [],
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
        <h1>Slopestyle</h1>
        <p>Carve down the mountain, jump fallen logs, duck overhead hazards, and survive as long as you can.</p>
        <button class="primary-action" type="button" data-start>Start</button>
        <p class="run-note">A/D carve. Left/Right flick or hold to skid. Down crouches; Down plus an arrow butters. W/S press the nose/tail. Space or Up jumps.</p>
      </div>
    `;
    game.overlayRoot.querySelector("[data-start]").addEventListener("click", startRun, {
      once: true,
    });
  };

  const showCrash = () => {
    game.overlayRoot.innerHTML = `
      <div class="overlay-panel">
        <h1>${Math.floor(state.finalDistance)} m</h1>
        <p>Final distance</p>
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
    game.events.dispatchEvent(
      new CustomEvent("rider:reset", { detail: { speed: START_SPEED } }),
    );
    dispatchCourse();
    hud.update(state);
    showIdle();
  };

  const endRun = (reason) => {
    state.finalDistance = state.distance;
    state.best = Math.max(state.best, Math.floor(state.distance));
    setStoredBest(state.best);
    audio.stopTheme();

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

  const recordDodge = () => {
    state.dodged += 1;

    if (state.dodged % REWARD_EVERY === 0) {
      state.speed = Math.max(START_SPEED, state.speed - REWARD_DROP);
      state.rewardTimer = REWARD_DURATION;
      return;
    }

    if (state.rewardTimer <= 0) {
      state.speed = Math.min(MAX_SPEED, state.speed + SPEED_PER_DODGE);
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
      state.hazards.push(spawnHazard(state));
      state.nextHazardId += 1;
      state.spawnLeft = nextSpawnDistance(state.speed);
    }

    for (const hazard of state.hazards) {
      hazard.z -= courseSpeed * delta;

      if (hasCollision(hazard, riderState, input)) {
        endRun("hazard");
        return;
      }

      if (!hazard.passed && hazard.z < -HIT_WINDOW) {
        hazard.passed = true;
        recordDodge();
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
