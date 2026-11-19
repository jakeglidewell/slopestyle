// Slopestyle source fingerprint: 9c760e82da58874da44c7863c1edd80c9be77fd42182178cba2ac1bd1e4ec762
(() => {
  // src/mountain/course.js
  var CHUNK_LENGTH = 36;
  var MAX_SCENERY_TIER = 3;
  var clamp = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));
  var hash = (value) => {
    let bits = value | 0;
    bits = Math.imul(bits ^ bits >>> 16, 2146121005);
    bits = Math.imul(bits ^ bits >>> 15, 2221713035);
    return (bits ^ bits >>> 16) >>> 0;
  };
  var randomAt = (seed, chunk, slot, channel) => hash(seed ^ Math.imul(chunk + 1, 2654435761) ^ Math.imul(slot + 1, 2246822507) ^ channel) / 4294967296;
  function sceneryTier(distance) {
    const safeDistance = Math.max(0, Number.isFinite(distance) ? distance : 0);
    return Math.min(MAX_SCENERY_TIER, Math.floor(safeDistance / (CHUNK_LENGTH * 2)));
  }
  function createSlopeChunk(index, { halfWidth = 9.5, seed = 1 } = {}) {
    if (!Number.isInteger(index) || index < 0) {
      throw new RangeError("Chunk index must be a non-negative integer");
    }
    if (!Number.isFinite(halfWidth) || halfWidth <= 0) {
      throw new RangeError("Slope half-width must be positive and finite");
    }
    const tier = sceneryTier(index * CHUNK_LENGTH);
    const count = 4 + tier;
    const scenery = Array.from({ length: count }, (_, slot) => {
      const side = slot % 2 === 0 ? -1 : 1;
      const section = CHUNK_LENGTH / count;
      const z = index * CHUNK_LENGTH + (slot + 0.3 + randomAt(seed, index, slot, 0) * 0.4) * section;
      const clearance = 2.2 + randomAt(seed, index, slot, 1) * 5.5;
      return Object.freeze({
        kind: randomAt(seed, index, slot, 2) < 0.28 ? "rock" : "pine",
        size: 0.8 + randomAt(seed, index, slot, 3) * 0.45,
        x: side * (halfWidth + clearance),
        z
      });
    });
    return Object.freeze({ index, tier, scenery: Object.freeze(scenery) });
  }
  function visibleSlopeChunks(distance, viewDistance, options = {}) {
    if (!Number.isFinite(viewDistance) || viewDistance < 0) {
      throw new RangeError("View distance must be non-negative and finite");
    }
    const startDistance = Math.max(0, Number.isFinite(distance) ? distance : 0);
    const first = Math.floor(startDistance / CHUNK_LENGTH);
    const last = Math.floor((startDistance + viewDistance) / CHUNK_LENGTH);
    return Array.from(
      { length: last - first + 1 },
      (_, offset) => createSlopeChunk(first + offset, options)
    );
  }
  function slopeHalfAtY(canvas, y) {
    const depth = clamp((y / canvas.height - 0.22) / 0.78, 0, 1);
    return canvas.width * (0.11 + 0.31 * depth ** 1.3);
  }
  function projectCoursePoint(canvas, riderAcross, point2, {
    halfWidth = 9.5,
    viewDistance = 44
  } = {}) {
    const z = clamp(point2.z, 0, viewDistance);
    const depth = 1 - z / viewDistance;
    const eased = depth * depth * (3 - 2 * depth);
    const y = canvas.height * (0.22 + eased * 0.56);
    const pathHalf = slopeHalfAtY(canvas, y);
    return Object.freeze({
      alpha: clamp(eased * 1.6 + 0.15, 0, 1),
      pathHalf,
      scale: 0.2 + eased * 0.8,
      x: canvas.width / 2 + (point2.x - riderAcross) / halfWidth * pathHalf,
      y
    });
  }

  // src/mountain/index.js
  var COURSE = Object.freeze({
    halfWidth: 9.5,
    spawnDistance: 44
  });
  var clamp2 = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));
  var screenUnit = (canvas) => clamp2(canvas.width / 850, 0.75, 1.35);
  var slopeX = (canvas, y, riderAcross, side) => canvas.width / 2 + (side - riderAcross / COURSE.halfWidth) * slopeHalfAtY(canvas, y);
  var traceEdge = (context, canvas, riderAcross, side) => {
    for (let step = 0; step <= 28; step += 1) {
      const y = canvas.height * (0.22 + 0.78 * step / 28);
      const x = slopeX(canvas, y, riderAcross, side);
      if (step === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    }
  };
  var drawSnowBank = (context, canvas, riderAcross, side) => {
    context.beginPath();
    traceEdge(context, canvas, riderAcross, side);
    for (let step = 28; step >= 0; step -= 1) {
      const y = canvas.height * (0.22 + 0.78 * step / 28);
      const depth = step / 28;
      const thickness = canvas.width * (6e-3 + depth * 0.025);
      context.lineTo(slopeX(canvas, y, riderAcross, side) + side * thickness, y);
    }
    context.closePath();
    context.fillStyle = "#d2eefa";
    context.fill();
    context.beginPath();
    traceEdge(context, canvas, riderAcross, side);
    context.strokeStyle = "#f7fdff";
    context.lineWidth = Math.max(4, canvas.width * 7e-3);
    context.stroke();
  };
  var drawMountainLayer = (context, canvas, peaks, base, color, snowcap) => {
    for (const [center, height, width] of peaks) {
      const x = canvas.width * center;
      const top = canvas.height * height;
      const bottom = canvas.height * base;
      const half = canvas.width * width * 0.5;
      context.fillStyle = color;
      context.beginPath();
      context.moveTo(x - half, bottom);
      context.lineTo(x, top);
      context.lineTo(x + half, bottom);
      context.closePath();
      context.fill();
      context.fillStyle = snowcap;
      context.beginPath();
      context.moveTo(x - half * 0.23, top + (bottom - top) * 0.23);
      context.lineTo(x, top);
      context.lineTo(x + half * 0.23, top + (bottom - top) * 0.23);
      context.lineTo(x + half * 0.08, top + (bottom - top) * 0.2);
      context.lineTo(x, top + (bottom - top) * 0.27);
      context.lineTo(x - half * 0.08, top + (bottom - top) * 0.2);
      context.closePath();
      context.fill();
    }
  };
  var drawBackground = (context, canvas, riderAcross) => {
    const sky = context.createLinearGradient(0, 0, 0, canvas.height * 0.62);
    sky.addColorStop(0, "#77cef8");
    sky.addColorStop(1, "#eefbff");
    context.fillStyle = sky;
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawMountainLayer(
      context,
      canvas,
      [[-0.03, 0.14, 0.32], [0.22, 0.06, 0.34], [0.49, 0.12, 0.36], [0.78, 0.05, 0.36], [1.06, 0.13, 0.36]],
      0.42,
      "#9ec4d3",
      "#effaff"
    );
    drawMountainLayer(
      context,
      canvas,
      [[0.07, 0.29, 0.3], [0.36, 0.24, 0.34], [0.67, 0.28, 0.32], [0.96, 0.23, 0.34]],
      0.49,
      "#c4e0e9",
      "#ffffff"
    );
    context.fillStyle = "#dceff8";
    context.fillRect(0, canvas.height * 0.45, canvas.width, canvas.height);
    context.fillStyle = "#ffffff";
    context.beginPath();
    traceEdge(context, canvas, riderAcross, -1);
    for (let step = 28; step >= 0; step -= 1) {
      const y = canvas.height * (0.22 + 0.78 * step / 28);
      context.lineTo(slopeX(canvas, y, riderAcross, 1), y);
    }
    context.closePath();
    context.fill();
    for (const side of [-1, 1]) {
      drawSnowBank(context, canvas, riderAcross, side);
    }
    for (const side of [-1, 1]) {
      context.beginPath();
      traceEdge(context, canvas, riderAcross, side);
      context.strokeStyle = "rgba(57, 147, 177, 0.54)";
      context.lineWidth = Math.max(2, canvas.width * 24e-4);
      context.stroke();
      context.beginPath();
      traceEdge(context, canvas, riderAcross, side);
      context.strokeStyle = "rgba(34, 211, 238, 0.38)";
      context.lineWidth = Math.max(1, canvas.width * 12e-4);
      context.stroke();
    }
  };
  var trailPoint = (canvas, riderAcross, travel, sample) => {
    const behind = Math.max(0, travel - sample.downhill);
    const y = canvas.height * 0.78 + behind * Math.max(3.5, canvas.height * 6e-3);
    const x = canvas.width / 2 + (sample.across - riderAcross) / COURSE.halfWidth * slopeHalfAtY(canvas, y);
    return { x, y, behind };
  };
  var drawPowderTrail = (context, canvas, riderAcross, travel, samples) => {
    if (samples.length < 2) return;
    const points = samples.map((sample) => trailPoint(canvas, riderAcross, travel, sample)).filter((point2) => point2.y <= canvas.height + 25);
    if (points.length < 2) return;
    context.lineCap = "round";
    context.lineJoin = "round";
    for (const [width, color] of [
      [34, "rgba(128, 199, 225, 0.22)"],
      [25, "rgba(244, 252, 255, 0.95)"]
    ]) {
      context.beginPath();
      context.moveTo(points[0].x, points[0].y);
      for (const point2 of points.slice(1)) context.lineTo(point2.x, point2.y);
      context.strokeStyle = color;
      context.lineWidth = width * screenUnit(canvas);
      context.stroke();
    }
    for (let index = 0; index < points.length; index += 2) {
      const point2 = points[index];
      const freshness = clamp2(1 - point2.behind / 32, 0, 1);
      const spread = (18 + index % 3 * 6) * screenUnit(canvas);
      const radius = (5 + index % 4 * 1.5) * screenUnit(canvas) * freshness;
      if (radius < 0.5) continue;
      for (const side of [-1, 1]) {
        context.fillStyle = `rgba(119, 190, 218, ${0.34 * freshness})`;
        context.beginPath();
        context.arc(point2.x + side * spread, point2.y + radius * 0.4, radius * 1.35, 0, Math.PI * 2);
        context.fill();
        context.fillStyle = `rgba(255, 255, 255, ${0.9 * freshness})`;
        context.beginPath();
        context.arc(point2.x + side * spread, point2.y, radius, 0, Math.PI * 2);
        context.fill();
      }
    }
  };
  var drawSnowSpray = (context, canvas, carve, travel) => {
    const unit = screenUnit(canvas);
    const centerX = canvas.width / 2;
    const baseY = canvas.height * 0.78;
    const force = clamp2(Math.abs(carve), 0, 1);
    for (const side of [-1, 1]) {
      const sideForce = 0.55 + (side * carve > 0 ? force * 0.95 : force * 0.35);
      for (let index = 0; index < 9; index += 1) {
        const phase = (travel * 2.6 + index * 0.73) % 9;
        const x = centerX + side * (24 + phase * (4.5 + force * 3)) * unit;
        const y = baseY + (phase * 2.7 + Math.sin(index * 2.1) * 4) * unit;
        const radius = (3 + (9 - phase) * 0.7) * unit * sideForce;
        context.fillStyle = "rgba(119, 190, 218, 0.28)";
        context.beginPath();
        context.arc(x, y + radius * 0.4, radius * 1.25, 0, Math.PI * 2);
        context.fill();
        context.fillStyle = "rgba(255, 255, 255, 0.94)";
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
      }
    }
  };
  var drawPine = (context, x, y, size) => {
    context.fillStyle = "rgba(45, 104, 114, 0.14)";
    context.beginPath();
    context.ellipse(x + size * 0.12, y + size * 0.05, size * 0.42, size * 0.1, 0, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "#84512c";
    context.fillRect(x - size * 0.045, y - size * 0.29, size * 0.09, size * 0.31);
    for (let layer = 0; layer < 3; layer += 1) {
      const peak = y - size * (1 - layer * 0.23);
      const base = y - size * (0.25 - layer * 0.09);
      const half = size * (0.28 + layer * 0.11);
      context.fillStyle = layer === 1 ? "#178462" : "#12694f";
      context.beginPath();
      context.moveTo(x, peak);
      context.lineTo(x - half, base);
      context.lineTo(x + half, base);
      context.closePath();
      context.fill();
      context.strokeStyle = "rgba(222, 250, 255, 0.8)";
      context.lineWidth = Math.max(1, size * 0.025);
      context.beginPath();
      context.moveTo(x, peak);
      context.lineTo(x - half * 0.33, peak + (base - peak) * 0.53);
      context.stroke();
    }
  };
  var drawRock = (context, x, y, size) => {
    context.fillStyle = "rgba(45, 104, 114, 0.13)";
    context.beginPath();
    context.ellipse(x + size * 0.1, y + size * 0.05, size * 0.52, size * 0.13, 0, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "#64788a";
    context.beginPath();
    context.moveTo(x - size * 0.44, y);
    context.lineTo(x - size * 0.34, y - size * 0.33);
    context.lineTo(x + size * 0.06, y - size * 0.47);
    context.lineTo(x + size * 0.39, y - size * 0.25);
    context.lineTo(x + size * 0.46, y);
    context.closePath();
    context.fill();
    context.fillStyle = "#91a9b6";
    context.beginPath();
    context.moveTo(x - size * 0.34, y - size * 0.33);
    context.lineTo(x + size * 0.06, y - size * 0.47);
    context.lineTo(x + size * 0.16, y - size * 0.31);
    context.lineTo(x - size * 0.21, y - size * 0.23);
    context.closePath();
    context.fill();
    context.strokeStyle = "#f6fdff";
    context.lineWidth = Math.max(2, size * 0.055);
    context.beginPath();
    context.moveTo(x - size * 0.21, y - size * 0.32);
    context.lineTo(x + size * 0.03, y - size * 0.42);
    context.lineTo(x + size * 0.16, y - size * 0.33);
    context.stroke();
  };
  var drawSideScenery = (context, canvas, riderAcross, travel) => {
    const props = visibleSlopeChunks(travel, COURSE.spawnDistance, {
      halfWidth: COURSE.halfWidth
    }).flatMap((chunk) => chunk.scenery);
    props.sort((a, b) => b.z - a.z);
    for (const prop of props) {
      const z = prop.z - travel;
      if (z < 0 || z > COURSE.spawnDistance) continue;
      const projected = projectCoursePoint(
        canvas,
        riderAcross,
        { x: prop.x, z },
        COURSE
      );
      const size = 82 * screenUnit(canvas) * projected.scale * prop.size;
      context.save();
      context.globalAlpha = projected.alpha * 0.86;
      if (prop.kind === "rock") drawRock(context, projected.x, projected.y, size * 0.7);
      else drawPine(context, projected.x, projected.y, size);
      context.restore();
    }
  };
  var drawJumpHazard = (context, canvas, projected) => {
    const width = projected.pathHalf * 1.88;
    const height = 18 * screenUnit(canvas) * projected.scale;
    const { x, y } = projected;
    context.fillStyle = "#bdeaf5";
    context.beginPath();
    context.moveTo(x - width * 0.43, y + height * 1.25);
    context.lineTo(x - width * 0.37, y - height * 0.6);
    context.lineTo(x + width * 0.37, y - height * 0.6);
    context.lineTo(x + width * 0.43, y + height * 1.25);
    context.closePath();
    context.fill();
    context.fillStyle = "#6d3b1e";
    context.fillRect(x - width / 2, y - height, width, height);
    context.fillStyle = "#b87739";
    context.fillRect(x - width / 2, y - height, width, height * 0.28);
    context.strokeStyle = "#432714";
    context.lineWidth = Math.max(2, height * 0.12);
    context.strokeRect(x - width / 2, y - height, width, height);
    for (const side of [-1, 1]) {
      context.fillStyle = "#dcb383";
      context.beginPath();
      context.ellipse(x + side * width * 0.48, y - height * 0.5, height * 0.3, height * 0.48, 0, 0, Math.PI * 2);
      context.fill();
    }
  };
  var drawBird = (context, canvas, projected) => {
    const scale = screenUnit(canvas) * projected.scale;
    const x = projected.x;
    const y = projected.y - 82 * scale;
    const wing = projected.pathHalf * 0.86;
    context.fillStyle = "#243347";
    context.beginPath();
    context.ellipse(x, y, 18 * scale, 10 * scale, 0, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "#243347";
    context.lineCap = "round";
    context.lineWidth = Math.max(3, 7 * scale);
    context.beginPath();
    context.moveTo(x - 8 * scale, y);
    context.quadraticCurveTo(x - wing * 0.58, y - 31 * scale, x - wing, y + 2 * scale);
    context.moveTo(x + 8 * scale, y);
    context.quadraticCurveTo(x + wing * 0.58, y - 31 * scale, x + wing, y + 2 * scale);
    context.stroke();
    context.fillStyle = "#f6c44f";
    context.beginPath();
    context.moveTo(x, y + 2 * scale);
    context.lineTo(x - 4 * scale, y + 10 * scale);
    context.lineTo(x + 4 * scale, y + 10 * scale);
    context.closePath();
    context.fill();
  };
  var drawBranch = (context, canvas, projected) => {
    const scale = screenUnit(canvas) * projected.scale;
    const y = projected.y - 76 * scale;
    const half = projected.pathHalf * 0.88;
    const x = projected.x;
    context.strokeStyle = "#613d24";
    context.lineCap = "round";
    context.lineWidth = Math.max(5, 11 * scale);
    context.beginPath();
    context.moveTo(x - half, y - 9 * scale);
    context.quadraticCurveTo(x, y + 11 * scale, x + half, y - 9 * scale);
    context.stroke();
    context.fillStyle = "#19765b";
    for (const offset of [-0.72, -0.36, 0.08, 0.47, 0.77]) {
      context.beginPath();
      context.ellipse(x + half * offset, y - 10 * scale, 16 * scale, 8 * scale, offset * 0.25, 0, Math.PI * 2);
      context.fill();
    }
  };
  var drawHazards = (context, canvas, riderAcross, hazards) => {
    for (const hazard of [...hazards].sort((a, b) => b.z - a.z)) {
      if (hazard.z < -2 || hazard.z > COURSE.spawnDistance) continue;
      const projected = projectCoursePoint(canvas, riderAcross, hazard, COURSE);
      context.save();
      context.globalAlpha = projected.alpha;
      if (hazard.kind === "jump") {
        drawJumpHazard(context, canvas, projected);
      } else if (hazard.kind === "duck") {
        if (hazard.variant === "bird") drawBird(context, canvas, projected);
        else drawBranch(context, canvas, projected);
      } else {
        const size = 82 * screenUnit(canvas) * projected.scale;
        if (hazard.variant === "rock") drawRock(context, projected.x, projected.y, size * 0.7);
        else drawPine(context, projected.x, projected.y, size);
      }
      context.restore();
    }
  };
  async function setupMountain(game2) {
    const context = game2.canvas.getContext("2d");
    if (!context) throw new Error("Mountain rendering requires a 2D canvas context");
    let travel = 0;
    let trail = [];
    let course = { hazards: [], phase: "idle" };
    game2.events.addEventListener("course:update", (event) => {
      course = {
        hazards: Array.isArray(event.detail?.hazards) ? event.detail.hazards : [],
        phase: event.detail?.phase ?? "idle"
      };
    });
    game2.events.addEventListener("rider:update", (event) => {
      const riderAcross = Number(event.detail?.state?.position?.across) || 0;
      const downhill = Number(event.detail?.state?.position?.downhill) || 0;
      if (course.phase === "idle") {
        travel = 0;
        trail = [];
      } else if (course.phase === "running") {
        travel = Math.max(0, downhill);
        if ((event.detail?.state?.air ?? 0) < 0.08 && (trail.length === 0 || travel - trail.at(-1).downhill >= 0.45)) {
          trail.push({ across: riderAcross, downhill: travel });
        }
        trail = trail.filter((sample) => travel - sample.downhill < 42);
      }
      context.save();
      drawBackground(context, game2.canvas, riderAcross);
      drawPowderTrail(context, game2.canvas, riderAcross, travel, trail);
      if (course.phase === "running" && (event.detail?.state?.air ?? 0) < 0.08) {
        drawSnowSpray(context, game2.canvas, Number(event.detail?.input?.carve) || 0, travel);
      }
      drawSideScenery(context, game2.canvas, riderAcross, travel);
      drawHazards(context, game2.canvas, riderAcross, course.hazards);
      context.restore();
    });
  }

  // src/game-loop/index.js
  var STORAGE_KEY = "slopestyle.bestDistance";
  var START_SPEED = 12;
  var MAX_SPEED = 32;
  var SPEED_PER_DODGE = 0.62;
  var REWARD_EVERY = 10;
  var REWARD_DROP = 3.2;
  var REWARD_DURATION = 2.4;
  var HIT_WINDOW = 1.25;
  var clamp3 = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));
  var randomBetween = (minimum, maximum) => minimum + Math.random() * (maximum - minimum);
  var getStoredBest = () => {
    try {
      return Math.max(0, Number(localStorage.getItem(STORAGE_KEY)) || 0);
    } catch {
      return 0;
    }
  };
  var setStoredBest = (distance) => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Math.floor(distance)));
    } catch {
    }
  };
  var addInterfaceStyles = () => {
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
  var createAudioController = () => {
    let context;
    let theme;
    let lastCarveAt = 0;
    const ensure = () => {
      context || (context = new (window.AudioContext || window.webkitAudioContext)());
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
      gain.gain.exponentialRampToValueAtTime(1e-3, audio.currentTime + duration);
      oscillator.connect(gain);
      gain.connect(audio.destination);
      oscillator.start();
      oscillator.stop(audio.currentTime + duration);
    };
    return Object.freeze({
      startTheme() {
        const audio = ensure();
        if (theme) return;
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
        if (!theme) return;
        window.clearInterval(theme.timer);
        theme.gain.gain.setTargetAtTime(1e-4, ensure().currentTime, 0.08);
        theme.bass.stop(ensure().currentTime + 0.2);
        theme.lead.stop(ensure().currentTime + 0.2);
        theme = void 0;
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
      }
    });
  };
  var createHud = (root) => {
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
      }
    });
  };
  var spawnHazard = (state) => {
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
        z: COURSE.spawnDistance
      };
    }
    if (kind === "duck") {
      return {
        id: state.nextHazardId,
        kind,
        passed: false,
        variant: Math.random() > 0.45 ? "bird" : "branch",
        x: 0,
        z: COURSE.spawnDistance
      };
    }
    return {
      id: state.nextHazardId,
      kind,
      passed: false,
      variant: Math.random() > 0.38 ? "pine" : "rock",
      x: randomBetween(-COURSE.halfWidth * 0.76, COURSE.halfWidth * 0.76),
      z: COURSE.spawnDistance
    };
  };
  var nextSpawnDistance = (speed) => randomBetween(clamp3(24 - speed * 0.35, 10, 18), clamp3(36 - speed * 0.42, 16, 28));
  var emptyRunState = (best) => ({
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
    speed: START_SPEED
  });
  async function setupGameLoop(game2) {
    addInterfaceStyles();
    const audio = createAudioController();
    const hud = createHud(game2.hudRoot);
    let state = emptyRunState(getStoredBest());
    let lastFrameAt;
    let lastJumpValue = 0;
    const resizeCanvas = () => {
      const rect = game2.canvas.getBoundingClientRect();
      const scale = Math.min(window.devicePixelRatio || 1, 2);
      game2.canvas.width = Math.max(1, Math.floor(rect.width * scale));
      game2.canvas.height = Math.max(1, Math.floor(rect.height * scale));
    };
    const dispatchCourse = () => {
      game2.events.dispatchEvent(
        new CustomEvent("course:update", {
          detail: Object.freeze({
            hazards: Object.freeze(state.hazards.map((hazard) => Object.freeze({ ...hazard }))),
            phase: state.phase,
            rewardTimer: state.rewardTimer
          })
        })
      );
    };
    const showIdle = () => {
      game2.overlayRoot.innerHTML = `
      <div class="overlay-panel">
        <h1>Slopestyle</h1>
        <p>Carve down the mountain, jump fallen logs, duck overhead hazards, and survive as long as you can.</p>
        <button class="primary-action" type="button" data-start>Start</button>
        <p class="run-note">Steer with A/D or arrow keys. Jump with Space or Up. Duck with Down.</p>
      </div>
    `;
      game2.overlayRoot.querySelector("[data-start]").addEventListener("click", startRun, {
        once: true
      });
    };
    const showCrash = () => {
      game2.overlayRoot.innerHTML = `
      <div class="overlay-panel">
        <h1>${Math.floor(state.finalDistance)} m</h1>
        <p>Final distance</p>
        <button class="primary-action" type="button" data-return>Return to top</button>
      </div>
    `;
      game2.overlayRoot.querySelector("[data-return]").addEventListener("click", returnToTop, {
        once: true
      });
    };
    const showFall = () => {
      game2.overlayRoot.innerHTML = `
      <div class="overlay-panel fall-callout">
        <h1>NOOOOOOO</h1>
      </div>
    `;
    };
    const startRun = () => {
      state = {
        ...emptyRunState(state.best),
        phase: "running",
        spawnLeft: 4
      };
      lastFrameAt = void 0;
      lastJumpValue = 0;
      game2.overlayRoot.innerHTML = "";
      game2.events.dispatchEvent(new Event("rider:reset"));
      dispatchCourse();
      audio.startTheme();
    };
    const returnToTop = () => {
      state = emptyRunState(state.best);
      lastFrameAt = void 0;
      lastJumpValue = 0;
      game2.events.dispatchEvent(new Event("rider:reset"));
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
      return riderState.air < 0.35 && Math.abs(hazard.x - riderState.position.across) < 1.05;
    };
    const updateRunning = (detail, delta) => {
      const { input, state: riderState } = detail;
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
      state.distance += state.speed * delta;
      state.spawnLeft -= state.speed * delta;
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
        hazard.z -= state.speed * delta;
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
    game2.events.addEventListener("rider:update", (event) => {
      const now = performance.now();
      const delta = lastFrameAt === void 0 ? 0 : clamp3((now - lastFrameAt) / 1e3, 0, 0.05);
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

  // src/rider/animation.js
  var clamp4 = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));
  function getRiderPose(state, input = {}) {
    const edgeAmount = Math.abs(state.edge);
    const requestedCrouch = clamp4(
      Number.isFinite(input.crouch) ? input.crouch : 0,
      0,
      1
    );
    return Object.freeze({
      boardRoll: state.edge * 0.45,
      boardYaw: state.heading,
      bob: Math.sin(state.elapsed * state.speed * 0.45) * 0.025,
      crouch: clamp4(0.12 + edgeAmount * 0.42 + requestedCrouch * 0.46, 0, 1),
      lean: state.edge * 0.55,
      upperBodyTwist: state.edge * -0.25
    });
  }

  // src/rider/camera.js
  var MAX_STEP = 1 / 20;
  var CAMERA_RESPONSE = 4;
  var DOWNHILL_LOOK_AHEAD = 8;
  var clamp5 = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));
  var finiteOr = (value, fallback = 0) => Number.isFinite(value) ? value : fallback;
  var freezeCamera = (position) => Object.freeze({
    position: Object.freeze(position)
  });
  function createCameraState(overrides = {}) {
    const position = overrides.position ?? {};
    return freezeCamera({
      across: finiteOr(position.across),
      downhill: finiteOr(position.downhill)
    });
  }
  function stepCamera(camera, rider, deltaSeconds = 0) {
    const delta = clamp5(finiteOr(deltaSeconds), 0, MAX_STEP);
    const blend = 1 - Math.exp(-CAMERA_RESPONSE * delta);
    const heading = finiteOr(rider.heading);
    const targetAcross = finiteOr(rider.position?.across) + Math.sin(heading) * 2;
    const targetDownhill = finiteOr(rider.position?.downhill) + DOWNHILL_LOOK_AHEAD;
    return freezeCamera({
      across: camera.position.across + (targetAcross - camera.position.across) * blend,
      downhill: camera.position.downhill + (targetDownhill - camera.position.downhill) * blend
    });
  }

  // src/rider/controls.js
  var CONTROL_CODES = /* @__PURE__ */ new Set([
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "KeyA",
    "KeyD",
    "Space"
  ]);
  var JUMP_CODES = /* @__PURE__ */ new Set(["ArrowUp", "Space"]);
  function createKeyboardControls(target = window) {
    const pressed = /* @__PURE__ */ new Set();
    let queuedJump = false;
    const handleKeyDown = (event) => {
      if (!CONTROL_CODES.has(event.code)) return;
      event.preventDefault();
      if (JUMP_CODES.has(event.code) && !pressed.has(event.code)) {
        queuedJump = true;
      }
      pressed.add(event.code);
    };
    const handleKeyUp = (event) => {
      if (!CONTROL_CODES.has(event.code)) return;
      event.preventDefault();
      pressed.delete(event.code);
    };
    const handleBlur = () => {
      queuedJump = false;
      pressed.clear();
    };
    target.addEventListener("keydown", handleKeyDown);
    target.addEventListener("keyup", handleKeyUp);
    target.addEventListener("blur", handleBlur);
    return Object.freeze({
      destroy() {
        queuedJump = false;
        pressed.clear();
        target.removeEventListener("keydown", handleKeyDown);
        target.removeEventListener("keyup", handleKeyUp);
        target.removeEventListener("blur", handleBlur);
      },
      read() {
        const left = pressed.has("ArrowLeft") || pressed.has("KeyA");
        const right = pressed.has("ArrowRight") || pressed.has("KeyD");
        const crouch = pressed.has("ArrowDown");
        const jump = queuedJump;
        queuedJump = false;
        return Object.freeze({
          carve: Number(right) - Number(left),
          crouch: Number(crouch),
          jump: Number(jump)
        });
      }
    });
  }

  // src/rider/physics.js
  var MIN_SPEED = 4;
  var MAX_SPEED2 = 28;
  var MAX_STEP2 = 1 / 20;
  var EDGE_RESPONSE = 8;
  var TURN_STRENGTH = 1.7;
  var MAX_HEADING = 1.15;
  var GRAVITY = 18;
  var JUMP_VELOCITY = 7.8;
  var clamp6 = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));
  var finiteOr2 = (value, fallback) => Number.isFinite(value) ? value : fallback;
  var freezeState = (state) => Object.freeze({
    ...state,
    position: Object.freeze({ ...state.position })
  });
  function createRiderState(overrides = {}) {
    const position = overrides.position ?? {};
    return freezeState({
      edge: clamp6(finiteOr2(overrides.edge, 0), -1, 1),
      elapsed: Math.max(0, finiteOr2(overrides.elapsed, 0)),
      heading: finiteOr2(overrides.heading, 0),
      air: Math.max(0, finiteOr2(overrides.air, 0)),
      position: {
        across: finiteOr2(position.across, 0),
        downhill: finiteOr2(position.downhill, 0)
      },
      speed: Math.max(0, finiteOr2(overrides.speed, 8)),
      verticalVelocity: finiteOr2(overrides.verticalVelocity, 0)
    });
  }
  function stepRider(state, input = {}, deltaSeconds = 0) {
    const delta = clamp6(finiteOr2(deltaSeconds, 0), 0, MAX_STEP2);
    const carve = clamp6(finiteOr2(input.carve, 0), -1, 1);
    const edgeBlend = 1 - Math.exp(-EDGE_RESPONSE * delta);
    const edge = state.edge + (carve - state.edge) * edgeBlend;
    const normalizedSpeed = clamp6(
      (state.speed - MIN_SPEED) / (MAX_SPEED2 - MIN_SPEED),
      0,
      1
    );
    const steeringResponse = 0.35 + normalizedSpeed * 0.65;
    const heading = clamp6(
      state.heading + edge * TURN_STRENGTH * steeringResponse * delta,
      -MAX_HEADING,
      MAX_HEADING
    );
    const carveDrag = Math.abs(edge) ** 1.5 * 3.2;
    const downhillPull = Math.max(0.2, Math.cos(heading)) * 5.5;
    const speed = clamp6(
      state.speed + (downhillPull - 0.8 - carveDrag) * delta,
      MIN_SPEED,
      MAX_SPEED2
    );
    const distance = speed * delta;
    const canJump = state.air <= 0 && finiteOr2(input.jump, 0) > 0;
    let verticalVelocity = canJump ? JUMP_VELOCITY : finiteOr2(state.verticalVelocity, 0);
    let air = Math.max(0, finiteOr2(state.air, 0));
    if (air > 0 || verticalVelocity > 0) {
      air += verticalVelocity * delta;
      verticalVelocity -= GRAVITY * delta;
      if (air <= 0) {
        air = 0;
        verticalVelocity = 0;
      }
    }
    return freezeState({
      air,
      edge,
      elapsed: state.elapsed + delta,
      heading,
      position: {
        across: state.position.across + Math.sin(heading) * distance,
        downhill: state.position.downhill + Math.cos(heading) * distance
      },
      speed,
      verticalVelocity
    });
  }

  // src/rider/model.js
  var clamp7 = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));
  var finiteOr3 = (value, fallback = 0) => Number.isFinite(value) ? value : fallback;
  var point = (x, y) => Object.freeze({ x, y });
  var polygon = (part, tone, points) => Object.freeze({
    part,
    points: Object.freeze(points),
    tone
  });
  var rotatedRectangle = (centerX, centerY, width, height, angle) => {
    const cosine = Math.cos(angle);
    const sine = Math.sin(angle);
    return [
      [-width / 2, -height / 2],
      [width / 2, -height / 2],
      [width / 2, height / 2],
      [-width / 2, height / 2]
    ].map(
      ([x, y]) => point(
        centerX + x * cosine - y * sine,
        centerY + x * sine + y * cosine
      )
    );
  };
  var limb = (ankle, knee, hip, halfWidth) => [
    point(ankle.x - halfWidth, ankle.y),
    point(knee.x - halfWidth, knee.y),
    point(hip.x - halfWidth, hip.y),
    point(hip.x + halfWidth, hip.y),
    point(knee.x + halfWidth, knee.y),
    point(ankle.x + halfWidth, ankle.y)
  ];
  var segment = (start, end, width) => {
    const deltaX = end.x - start.x;
    const deltaY = end.y - start.y;
    const length = Math.hypot(deltaX, deltaY) || 1;
    const offsetX = -deltaY / length * (width / 2);
    const offsetY = deltaX / length * (width / 2);
    return [
      point(start.x + offsetX, start.y + offsetY),
      point(end.x + offsetX, end.y + offsetY),
      point(end.x - offsetX, end.y - offsetY),
      point(start.x - offsetX, start.y - offsetY)
    ];
  };
  function buildLowPolyRider(pose = {}) {
    const crouch = clamp7(finiteOr3(pose.crouch), 0, 1);
    const lean = clamp7(finiteOr3(pose.lean), -1, 1);
    const twist = clamp7(finiteOr3(pose.upperBodyTwist), -1, 1);
    const boardAngle = clamp7(finiteOr3(pose.boardRoll), -Math.PI, Math.PI);
    const bob = finiteOr3(pose.bob) * 20;
    const hipCenter = point(lean * 16, -42 + crouch * 18 + bob);
    const leftAnkle = point(-19, -4 + bob);
    const rightAnkle = point(19, -4 + bob);
    const leftKnee = point(-27 + lean * 5, -23 + crouch * 9 + bob);
    const rightKnee = point(27 + lean * 5, -23 + crouch * 9 + bob);
    const leftHip = point(hipCenter.x - 8, hipCenter.y);
    const rightHip = point(hipCenter.x + 8, hipCenter.y);
    const shoulderCenter = point(
      hipCenter.x + lean * 13 + twist * 4,
      hipCenter.y - 34 + crouch * 8
    );
    const leftShoulder = point(shoulderCenter.x - 15, shoulderCenter.y + 2);
    const rightShoulder = point(shoulderCenter.x + 15, shoulderCenter.y - 2);
    const leftHand = point(
      hipCenter.x - 24 + twist * 14,
      hipCenter.y + 11 + crouch * 5
    );
    const rightHand = point(
      hipCenter.x + 24 + twist * 14,
      hipCenter.y + 11 + crouch * 5
    );
    const headCenter = point(
      shoulderCenter.x + lean * 9,
      shoulderCenter.y - 15
    );
    return Object.freeze([
      polygon(
        "board",
        "board",
        rotatedRectangle(0, 2 + bob, 84, 7, boardAngle * 0.45)
      ),
      polygon(
        "left-boot",
        "boots",
        rotatedRectangle(leftAnkle.x, leftAnkle.y, 19, 8, boardAngle * 0.25)
      ),
      polygon(
        "right-boot",
        "boots",
        rotatedRectangle(rightAnkle.x, rightAnkle.y, 19, 8, boardAngle * 0.25)
      ),
      polygon("left-leg", "pantsShadow", limb(leftAnkle, leftKnee, leftHip, 5)),
      polygon("right-leg", "pants", limb(rightAnkle, rightKnee, rightHip, 5)),
      polygon("torso", "jacket", [
        leftHip,
        leftShoulder,
        rightShoulder,
        rightHip
      ]),
      polygon("left-arm", "jacketShadow", segment(leftShoulder, leftHand, 8)),
      polygon("right-arm", "jacket", segment(rightShoulder, rightHand, 8)),
      polygon("head", "helmet", [
        point(headCenter.x - 8, headCenter.y - 6),
        point(headCenter.x, headCenter.y - 10),
        point(headCenter.x + 9, headCenter.y - 5),
        point(headCenter.x + 8, headCenter.y + 6),
        point(headCenter.x, headCenter.y + 10),
        point(headCenter.x - 9, headCenter.y + 5)
      ])
    ]);
  }

  // src/rider/renderer.js
  var PROTOTYPE_RIDER_PALETTE = Object.freeze({
    board: "#22d3ee",
    boots: "#0f172a",
    helmet: "#ecfeff",
    jacket: "#0891b2",
    jacketShadow: "#155e75",
    pants: "#334155",
    pantsShadow: "#0f172a"
  });
  var clamp8 = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));
  function drawLowPolyRider(context, model, options = {}) {
    const {
      palette = PROTOTYPE_RIDER_PALETTE,
      rotation = 0,
      scale = 1,
      x = 0,
      y = 0
    } = options;
    context.save();
    context.translate(x, y);
    context.rotate(rotation);
    context.scale(scale, scale);
    for (const polygon2 of model) {
      const [firstPoint, ...remainingPoints] = polygon2.points;
      context.beginPath();
      context.moveTo(firstPoint.x, firstPoint.y);
      for (const point2 of remainingPoints) {
        context.lineTo(point2.x, point2.y);
      }
      context.closePath();
      context.fillStyle = palette[polygon2.tone];
      context.fill();
    }
    context.restore();
  }
  function createRiderRenderer(canvas, palette = PROTOTYPE_RIDER_PALETTE) {
    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("Rider rendering requires a 2D canvas context");
    }
    return Object.freeze({
      beginFrame() {
        context.clearRect(0, 0, canvas.width, canvas.height);
      },
      draw({ camera, pose, state }) {
        const viewportScale = clamp8(canvas.width / 480, 0.8, 1.6);
        const cameraLag = (state.position.across - camera.position.across) * 14;
        const jumpLift = (state.air ?? 0) * 18;
        drawLowPolyRider(context, buildLowPolyRider(pose), {
          palette,
          rotation: clamp8(pose.boardYaw * 0.3, -0.35, 0.35),
          scale: viewportScale,
          x: canvas.width / 2 + cameraLag,
          y: canvas.height * 0.78 - jumpLift
        });
      }
    });
  }

  // src/rider/index.js
  var clamp9 = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));
  async function setupRider(game2) {
    const keyboard = createKeyboardControls(window);
    const renderer = createRiderRenderer(game2.canvas);
    let camera = createCameraState();
    let externalInput = Object.freeze({ carve: 0, crouch: 0 });
    let previousTimestamp;
    let state = createRiderState();
    game2.events.addEventListener("rider:input", (event) => {
      externalInput = Object.freeze({
        carve: clamp9(Number(event.detail?.carve) || 0, -1, 1),
        crouch: clamp9(Number(event.detail?.crouch) || 0, 0, 1)
      });
    });
    game2.events.addEventListener("rider:reset", () => {
      camera = createCameraState();
      previousTimestamp = void 0;
      state = createRiderState();
    });
    const update = (timestamp) => {
      const keyboardInput = keyboard.read();
      const input = Object.freeze({
        carve: clamp9(keyboardInput.carve + externalInput.carve, -1, 1),
        crouch: Math.max(keyboardInput.crouch, externalInput.crouch)
      });
      const deltaSeconds = previousTimestamp === void 0 ? 0 : (timestamp - previousTimestamp) / 1e3;
      previousTimestamp = timestamp;
      state = stepRider(state, input, deltaSeconds);
      camera = stepCamera(camera, state, deltaSeconds);
      const pose = getRiderPose(state, input);
      renderer.beginFrame();
      game2.events.dispatchEvent(
        new CustomEvent("rider:update", {
          detail: Object.freeze({
            camera,
            input,
            pose,
            state
          })
        })
      );
      renderer.draw({ camera, pose, state });
      requestAnimationFrame(update);
    };
    game2.events.addEventListener(
      "ready",
      () => requestAnimationFrame(update),
      { once: true }
    );
  }

  // src/main.js
  var requireElement = (selector) => {
    const element = document.querySelector(selector);
    if (!element) {
      throw new Error(`Shared game mount is missing: ${selector}`);
    }
    return element;
  };
  var game = Object.freeze({
    canvas: requireElement("#game-canvas"),
    events: new EventTarget(),
    hudRoot: requireElement("#hud-root"),
    overlayRoot: requireElement("#overlay-root")
  });
  var startGame = async () => {
    for (const setupOwnerModule of [setupMountain, setupRider, setupGameLoop]) {
      await setupOwnerModule(game);
    }
    game.events.dispatchEvent(new Event("ready"));
  };
  void startGame();
})();
