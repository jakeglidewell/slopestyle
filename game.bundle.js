// Slopestyle source fingerprint: 1fdbf70c9e7d4935f034fc30026a2c3f0a161ab74c795e25294531b74fef594f
(() => {
  // src/mountain/course.js
  var CHUNK_LENGTH = 36;
  var MAX_SCENERY_TIER = 3;
  var HORIZON_Y = 0.36;
  var RIDER_Y = 0.78;
  var BIOMES = Object.freeze(["summit", "forest", "rocky", "glow"]);
  var clamp = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));
  var hash = (value) => {
    let bits = value | 0;
    bits = Math.imul(bits ^ bits >>> 16, 2146121005);
    bits = Math.imul(bits ^ bits >>> 15, 2221713035);
    return (bits ^ bits >>> 16) >>> 0;
  };
  var randomAt = (seed, chunk, slot, channel) => hash(seed ^ Math.imul(chunk + 1, 2654435761) ^ Math.imul(slot + 1, 2246822507) ^ channel) / 4294967296;
  var visibleChunkCache = /* @__PURE__ */ new Map();
  var cachedSlopeChunk = (index, options) => {
    const key = [index, options.halfWidth ?? 9.5, options.seed ?? 1].join(":");
    let chunk = visibleChunkCache.get(key);
    if (!chunk) {
      chunk = createSlopeChunk(index, options);
      visibleChunkCache.set(key, chunk);
      if (visibleChunkCache.size > 32) {
        visibleChunkCache.delete(visibleChunkCache.keys().next().value);
      }
    }
    return chunk;
  };
  function sceneryTier(distance) {
    const safeDistance = Math.max(0, Number.isFinite(distance) ? distance : 0);
    return Math.min(MAX_SCENERY_TIER, Math.floor(safeDistance / (CHUNK_LENGTH * 2)));
  }
  function biomeAt(distance) {
    const chunk = Math.floor(Math.max(0, Number.isFinite(distance) ? distance : 0) / CHUNK_LENGTH);
    return BIOMES[Math.floor(chunk / 4) % BIOMES.length];
  }
  function courseBendAt(distance) {
    const safeDistance = Math.max(0, Number.isFinite(distance) ? distance : 0);
    return 1.8 * Math.sin(safeDistance / 55) + 0.72 * Math.sin(safeDistance / 21 + 0.55);
  }
  function createSlopeChunk(index, { halfWidth = 9.5, seed = 1 } = {}) {
    if (!Number.isInteger(index) || index < 0) {
      throw new RangeError("Chunk index must be a non-negative integer");
    }
    if (!Number.isFinite(halfWidth) || halfWidth <= 0) {
      throw new RangeError("Slope half-width must be positive and finite");
    }
    const tier = sceneryTier(index * CHUNK_LENGTH);
    const biome = biomeAt(index * CHUNK_LENGTH);
    const baseCount = { summit: 7, forest: 15, rocky: 10, glow: 9 }[biome];
    const count = baseCount + tier * 2;
    const scenery = Array.from({ length: count }, (_, slot) => {
      const side = slot % 2 === 0 ? -1 : 1;
      const section = CHUNK_LENGTH / count;
      const z = index * CHUNK_LENGTH + (slot + 0.3 + randomAt(seed, index, slot, 0) * 0.4) * section;
      const cluster = Math.floor(slot / 3);
      const clearance = 2.5 + cluster % 2 * 1.8 + randomAt(seed, index, slot, 1) * 5.2;
      const rockChance = { summit: 0.46, forest: 0.1, rocky: 0.68, glow: 0.22 }[biome];
      return Object.freeze({
        kind: randomAt(seed, index, slot, 2) < rockChance ? "rock" : "pine",
        size: 0.72 + randomAt(seed, index, slot, 3) * 0.75,
        x: side * (halfWidth + clearance),
        z
      });
    });
    return Object.freeze({ biome, index, tier, scenery: Object.freeze(scenery) });
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
      (_, offset) => cachedSlopeChunk(first + offset, options)
    );
  }
  function slopeHalfAtY(canvas, y) {
    const depth = clamp((y / canvas.height - HORIZON_Y) / (1 - HORIZON_Y), 0, 1);
    return canvas.width * (0.058 + 0.285 * depth ** 1.16);
  }
  function projectCoursePoint(canvas, riderAcross, point2, {
    halfWidth = 9.5,
    travel = 0,
    viewDistance = 44
  } = {}) {
    const z = clamp(point2.z, 0, viewDistance);
    const depth = 1 - z / viewDistance;
    const eased = depth * depth * (3 - 2 * depth);
    const y = canvas.height * (HORIZON_Y + eased * (RIDER_Y - HORIZON_Y));
    const widthChange = 1 + 0.09 * Math.sin((travel + z) / 34) * (z / viewDistance);
    const pathHalf = slopeHalfAtY(canvas, y) * widthChange;
    const bend = courseBendAt(travel + z) - courseBendAt(travel);
    return Object.freeze({
      alpha: clamp(eased * 1.6 + 0.2, 0, 1),
      pathHalf,
      scale: 0.23 + eased * 0.77,
      x: canvas.width / 2 + (point2.x - riderAcross + bend) / halfWidth * pathHalf,
      y
    });
  }

  // src/mountain/index.js
  var COURSE = Object.freeze({
    halfWidth: 9.5,
    spawnDistance: 44
  });
  var clamp2 = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));
  var screenUnit = (canvas) => clamp2(Math.min(canvas.width / 1100, canvas.height / 700), 0.72, 1.75);
  var depthAtY = (canvas, y) => {
    const eased = clamp2((y / canvas.height - HORIZON_Y) / (RIDER_Y - HORIZON_Y), 0, 1);
    let low = 0;
    let high = 1;
    for (let step = 0; step < 12; step += 1) {
      const middle = (low + high) / 2;
      if (middle * middle * (3 - 2 * middle) < eased) low = middle;
      else high = middle;
    }
    return (low + high) / 2;
  };
  var slopeX = (canvas, y, riderAcross, side, travel) => {
    const z = (1 - depthAtY(canvas, y)) * COURSE.spawnDistance;
    const widthChange = 1 + 0.09 * Math.sin((travel + z) / 34) * z / COURSE.spawnDistance;
    const half = slopeHalfAtY(canvas, y) * widthChange;
    const bend = courseBendAt(travel + z) - courseBendAt(travel);
    return canvas.width / 2 + (side + (bend - riderAcross) / COURSE.halfWidth) * half;
  };
  var traceEdge = (context, canvas, riderAcross, side, travel) => {
    for (let step = 0; step <= 48; step += 1) {
      const y = canvas.height * (HORIZON_Y + (1 - HORIZON_Y) * step / 48);
      const x = slopeX(canvas, y, riderAcross, side, travel);
      if (step === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    }
  };
  var drawSnowBank = (context, canvas, riderAcross, side, travel) => {
    context.beginPath();
    traceEdge(context, canvas, riderAcross, side, travel);
    for (let step = 48; step >= 0; step -= 1) {
      const y = canvas.height * (HORIZON_Y + (1 - HORIZON_Y) * step / 48);
      const depth = step / 48;
      const mound = Math.sin(step * 0.72 + travel * 0.12) * depth * canvas.width * 2e-3;
      const thickness = canvas.width * (3e-3 + depth * depth * 0.018) + mound;
      context.lineTo(slopeX(canvas, y, riderAcross, side, travel) + side * thickness, y);
    }
    context.closePath();
    context.fillStyle = "#b9dbe8";
    context.fill();
    context.beginPath();
    traceEdge(context, canvas, riderAcross, side, travel);
    context.strokeStyle = "#f8ffff";
    context.lineWidth = Math.max(5, canvas.width * 6e-3);
    context.stroke();
    context.beginPath();
    traceEdge(context, canvas, riderAcross, side, travel);
    context.strokeStyle = "#61cfe0";
    context.lineWidth = Math.max(1.5, canvas.width * 13e-4);
    context.stroke();
  };
  var drawMountainLayer = (context, canvas, peaks, base, color, shade, snow, drift) => {
    for (const [center, height, width, skew] of peaks) {
      const x = canvas.width * center + drift;
      const top = canvas.height * height;
      const bottom = canvas.height * base;
      const half = canvas.width * width * 0.5;
      const left = x - half;
      const right = x + half;
      const shoulder = (bottom - top) * 0.28;
      context.fillStyle = color;
      context.beginPath();
      context.moveTo(left, bottom);
      context.lineTo(x - half * 0.53, top + shoulder * 1.4);
      context.lineTo(x - half * 0.22, top + shoulder * 0.58);
      context.lineTo(x + skew * half, top);
      context.lineTo(x + half * 0.27, top + shoulder * 0.74);
      context.lineTo(x + half * 0.62, top + shoulder * 1.6);
      context.lineTo(right, bottom);
      context.closePath();
      context.fill();
      context.fillStyle = shade;
      context.beginPath();
      context.moveTo(x + skew * half, top);
      context.lineTo(x + half * 0.27, top + shoulder * 0.74);
      context.lineTo(right, bottom);
      context.lineTo(x + half * 0.1, bottom);
      context.lineTo(x - half * 0.09, top + shoulder * 1.6);
      context.closePath();
      context.fill();
      context.fillStyle = snow;
      context.beginPath();
      context.moveTo(x - half * 0.22, top + shoulder * 0.58);
      context.lineTo(x + skew * half, top);
      context.lineTo(x + half * 0.27, top + shoulder * 0.74);
      context.lineTo(x + half * 0.08, top + shoulder * 0.9);
      context.lineTo(x - half * 0.02, top + shoulder * 0.72);
      context.lineTo(x - half * 0.11, top + shoulder * 1.05);
      context.closePath();
      context.fill();
    }
  };
  var drawBackground = (context, canvas, riderAcross, travel) => {
    const sky = context.createLinearGradient(0, 0, 0, canvas.height * 0.6);
    sky.addColorStop(0, "#58a7cc");
    sky.addColorStop(0.62, "#b9e4ef");
    sky.addColorStop(1, "#effaff");
    context.fillStyle = sky;
    context.fillRect(0, 0, canvas.width, canvas.height);
    const sunX = canvas.width * 0.76 - riderAcross * 4;
    const sunY = canvas.height * 0.13;
    const glow = context.createRadialGradient(sunX, sunY, 2, sunX, sunY, canvas.height * 0.28);
    glow.addColorStop(0, "rgba(255,250,222,0.68)");
    glow.addColorStop(1, "rgba(255,250,222,0)");
    context.fillStyle = glow;
    context.fillRect(0, 0, canvas.width, canvas.height * 0.48);
    context.fillStyle = "#fff9e4";
    context.beginPath();
    context.arc(sunX, sunY, canvas.height * 0.029, 0, Math.PI * 2);
    context.fill();
    drawMountainLayer(
      context,
      canvas,
      [[-0.06, 0.17, 0.31, -0.08], [0.17, 0.08, 0.35, 0.04], [0.43, 0.19, 0.34, -0.1], [0.7, 0.09, 0.37, 0.08], [1.04, 0.16, 0.36, -0.06]],
      0.42,
      "#c8dbe1",
      "#a9c8d2",
      "#f5fbfa",
      -riderAcross * 2.5
    );
    drawMountainLayer(
      context,
      canvas,
      [[-0.07, 0.29, 0.27, 0.09], [0.16, 0.2, 0.34, -0.07], [0.48, 0.27, 0.3, 0.06], [0.78, 0.2, 0.35, -0.08], [1.08, 0.27, 0.31, 0.07]],
      0.51,
      "#9bbbc7",
      "#739bac",
      "#eff9fa",
      -riderAcross * 5
    );
    drawMountainLayer(
      context,
      canvas,
      [[-0.11, 0.39, 0.33, 0.08], [0.24, 0.32, 0.32, -0.06], [0.53, 0.38, 0.28, 0.07], [0.87, 0.31, 0.34, -0.08], [1.13, 0.4, 0.3, 0.04]],
      0.59,
      "#6f9baa",
      "#4c7d91",
      "#d9eef1",
      -riderAcross * 8
    );
    const sideSnow = context.createLinearGradient(0, canvas.height * 0.45, 0, canvas.height);
    sideSnow.addColorStop(0, "#e3f5f6");
    sideSnow.addColorStop(1, "#c3e0e8");
    context.fillStyle = sideSnow;
    context.beginPath();
    context.moveTo(0, canvas.height * 0.56);
    context.bezierCurveTo(
      canvas.width * 0.13,
      canvas.height * 0.46,
      canvas.width * 0.23,
      canvas.height * 0.56,
      canvas.width * 0.39,
      canvas.height * 0.5
    );
    context.bezierCurveTo(
      canvas.width * 0.57,
      canvas.height * 0.43,
      canvas.width * 0.65,
      canvas.height * 0.57,
      canvas.width * 0.79,
      canvas.height * 0.48
    );
    context.bezierCurveTo(
      canvas.width * 0.88,
      canvas.height * 0.44,
      canvas.width * 0.95,
      canvas.height * 0.54,
      canvas.width,
      canvas.height * 0.52
    );
    context.lineTo(canvas.width, canvas.height);
    context.lineTo(0, canvas.height);
    context.closePath();
    context.fill();
    const snow = context.createLinearGradient(0, canvas.height * HORIZON_Y, 0, canvas.height);
    snow.addColorStop(0, "#f6fcfc");
    snow.addColorStop(0.55, "#ffffff");
    snow.addColorStop(1, "#f7fcff");
    context.fillStyle = snow;
    context.beginPath();
    traceEdge(context, canvas, riderAcross, -1, travel);
    for (let step = 48; step >= 0; step -= 1) {
      const y = canvas.height * (HORIZON_Y + (1 - HORIZON_Y) * step / 48);
      context.lineTo(slopeX(canvas, y, riderAcross, 1, travel), y);
    }
    context.closePath();
    context.fill();
    for (const side of [-1, 1]) drawSnowBank(context, canvas, riderAcross, side, travel);
  };
  var drawSnowTexture = (context, canvas, riderAcross, travel, surface, speed) => {
    const spacing = surface === "powder" ? 4.8 : 2.8;
    const firstMark = Math.floor(travel / spacing) * spacing;
    const strong = surface === "ice" ? 0.05 : surface === "powder" ? 0.075 : 0.11;
    context.save();
    context.strokeStyle = surface === "ice" ? "#81c9d7" : "#9bcbd4";
    for (let worldZ = firstMark; worldZ < travel + COURSE.spawnDistance; worldZ += spacing) {
      const z = worldZ - travel;
      if (z < 0.5 || z > COURSE.spawnDistance) continue;
      const options = { ...COURSE, travel };
      const left = projectCoursePoint(canvas, riderAcross, { x: -COURSE.halfWidth * 0.86, z }, options);
      const right = projectCoursePoint(canvas, riderAcross, { x: COURSE.halfWidth * 0.86, z }, options);
      const ripple = Math.sin(worldZ * 0.75) * 5 * left.scale;
      context.globalAlpha = strong * left.alpha * (0.65 + Math.min(speed / 34, 1) * 0.35);
      context.lineWidth = Math.max(0.7, left.scale * (surface === "powder" ? 2.5 : 1.4));
      context.beginPath();
      context.moveTo(left.x, left.y);
      context.quadraticCurveTo((left.x + right.x) / 2, left.y + ripple, right.x, right.y);
      context.stroke();
    }
    context.restore();
  };
  var drawWind = (context, canvas, riderAcross, travel, speed) => {
    const gust = 0.58 + 0.42 * Math.sin(travel * 0.14 + 0.8) ** 2;
    const intensity = clamp2((speed - 14) / 20, 0, 1) * gust;
    if (intensity < 0.1) return;
    context.save();
    context.strokeStyle = "#ffffff";
    context.lineCap = "round";
    for (let index = 0; index < 14; index += 1) {
      const z = (index * 8 + travel * (0.65 + index % 3 * 0.09)) % COURSE.spawnDistance;
      const side = index % 2 ? 1 : -1;
      const projected = projectCoursePoint(canvas, riderAcross, {
        x: side * (COURSE.halfWidth + 3.5 + index % 3 * 2),
        z
      }, { ...COURSE, travel });
      const length = (11 + projected.scale * 42) * screenUnit(canvas);
      context.globalAlpha = projected.alpha * intensity * 0.28;
      context.lineWidth = Math.max(1, projected.scale * 2.2);
      context.beginPath();
      context.moveTo(projected.x - length * 0.5, projected.y);
      context.quadraticCurveTo(projected.x, projected.y - 4 * projected.scale, projected.x + length, projected.y - 2 * projected.scale);
      context.stroke();
    }
    context.restore();
  };
  var drawSideRidges = (context, canvas, riderAcross, travel) => {
    const spacing = 7.5;
    const first = Math.floor(travel / spacing) * spacing;
    context.save();
    context.lineCap = "round";
    for (let worldZ = first; worldZ < travel + COURSE.spawnDistance; worldZ += spacing) {
      const z = worldZ - travel;
      if (z < 1 || z > COURSE.spawnDistance) continue;
      for (const side of [-1, 1]) {
        const inner = projectCoursePoint(canvas, riderAcross, {
          x: side * (COURSE.halfWidth + 1.8),
          z
        }, { ...COURSE, travel });
        const outer = projectCoursePoint(canvas, riderAcross, {
          x: side * (COURSE.halfWidth + 9),
          z
        }, { ...COURSE, travel });
        context.globalAlpha = inner.alpha * 0.34;
        context.strokeStyle = "#8bbac9";
        context.lineWidth = Math.max(1, inner.scale * 3.5);
        context.beginPath();
        context.moveTo(inner.x, inner.y);
        context.quadraticCurveTo(
          (inner.x + outer.x) / 2,
          inner.y - 8 * inner.scale,
          outer.x,
          outer.y - 3 * inner.scale
        );
        context.stroke();
      }
    }
    context.restore();
  };
  var trailPoint = (canvas, riderAcross, travel, sample) => {
    const behind = Math.max(0, travel - sample.downhill);
    const y = canvas.height * RIDER_Y + behind * Math.max(3.5, canvas.height * 6e-3);
    const x = canvas.width / 2 + (sample.across - riderAcross) / COURSE.halfWidth * slopeHalfAtY(canvas, y);
    return { x, y, behind };
  };
  var drawPowderTrail = (context, canvas, riderAcross, travel, samples) => {
    if (samples.length < 2) return;
    const points = samples.map((sample) => ({ ...trailPoint(canvas, riderAcross, travel, sample), speed: sample.speed })).filter((point2) => point2.y <= canvas.height + 25);
    if (points.length < 2) return;
    const unit = screenUnit(canvas);
    context.lineCap = "round";
    context.lineJoin = "round";
    for (const [offset, width, color] of [
      [-10, 9, "rgba(85,150,166,0.32)"],
      [10, 9, "rgba(85,150,166,0.32)"],
      [-10, 4, "rgba(255,255,255,0.92)"],
      [10, 4, "rgba(255,255,255,0.92)"]
    ]) {
      context.beginPath();
      context.moveTo(points[0].x + offset * unit, points[0].y);
      for (const point2 of points.slice(1)) context.lineTo(point2.x + offset * unit, point2.y);
      context.strokeStyle = color;
      context.lineWidth = width * unit;
      context.stroke();
    }
    for (let index = 0; index < points.length; index += 3) {
      const point2 = points[index];
      const freshness = clamp2(1 - point2.behind / 28, 0, 1);
      const speedFactor = clamp2((point2.speed || 16) / 25, 0.7, 1.45);
      const spread = (20 + index % 4 * 5) * unit;
      const radius = (8 + index % 5 * 2.1) * unit * freshness * speedFactor;
      if (radius < 0.5) continue;
      for (const side of [-1, 1]) {
        context.globalAlpha = freshness;
        context.fillStyle = "rgba(93,151,166,0.27)";
        context.beginPath();
        context.ellipse(point2.x + side * spread, point2.y + radius * 0.55, radius * 1.65, radius * 0.65, 0, 0, Math.PI * 2);
        context.fill();
        context.fillStyle = "#ffffff";
        context.beginPath();
        context.ellipse(point2.x + side * spread, point2.y, radius * 1.2, radius * 0.8, 0, 0, Math.PI * 2);
        context.fill();
      }
    }
    context.globalAlpha = 1;
  };
  var drawSnowSpray = (context, canvas, carve, travel, landingImpact = 0, speed = 16) => {
    const unit = screenUnit(canvas);
    const centerX = canvas.width / 2;
    const baseY = canvas.height * RIDER_Y;
    const force = clamp2(Math.abs(carve), 0, 1);
    const landing = clamp2(landingImpact / 8, 0, 1);
    const speedFactor = clamp2(speed / 24, 0.75, 1.5);
    for (const side of [-1, 1]) {
      const sideForce = (0.52 + (side * carve > 0 ? force * 1.1 : force * 0.35) + landing * 0.8) * speedFactor;
      for (let index = 0; index < 12; index += 1) {
        const phase = (travel * 2.7 + index * 0.8) % 11;
        const x = centerX + side * (28 + phase * (5.2 + force * 3.4)) * unit;
        const y = baseY + (phase * 2.3 + Math.sin(index * 2.1) * 6) * unit;
        const radius = (5 + (11 - phase) * 0.95) * unit * sideForce;
        context.fillStyle = "rgba(85,151,174,0.24)";
        context.beginPath();
        context.ellipse(x, y + radius * 0.45, radius * 1.42, radius * 0.72, 0, 0, Math.PI * 2);
        context.fill();
        context.fillStyle = "rgba(255,255,255,0.96)";
        context.beginPath();
        context.ellipse(x, y, radius * 1.12, radius * 0.8, 0, 0, Math.PI * 2);
        context.fill();
      }
    }
  };
  var drawCrashBurst = (context, canvas, strength) => {
    if (strength <= 0) return;
    const unit = screenUnit(canvas);
    const progress = 1 - clamp2(strength / 0.8, 0, 1);
    const centerX = canvas.width / 2;
    const centerY = canvas.height * RIDER_Y;
    context.save();
    context.globalAlpha = clamp2(strength * 1.2, 0, 1);
    for (let index = 0; index < 18; index += 1) {
      const angle = index * Math.PI * 2 / 18;
      const distance = (18 + progress * 110 + index % 3 * 11) * unit;
      const radius = (6 + index % 4 * 2.4) * unit * (1 - progress * 0.55);
      context.fillStyle = index % 3 === 0 ? "#b5e3e9" : "#ffffff";
      context.beginPath();
      context.ellipse(
        centerX + Math.cos(angle) * distance,
        centerY + Math.sin(angle) * distance * 0.45,
        radius * 1.3,
        radius * 0.8,
        0,
        0,
        Math.PI * 2
      );
      context.fill();
    }
    context.restore();
  };
  var drawPine = (context, x, y, size, danger = false) => {
    context.fillStyle = danger ? "rgba(21,48,61,0.28)" : "rgba(45,104,114,0.16)";
    context.beginPath();
    context.ellipse(x + size * 0.15, y + size * 0.06, size * 0.52, size * 0.13, 0, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "#624535";
    context.fillRect(x - size * 0.06, y - size * 0.3, size * 0.12, size * 0.32);
    for (let layer = 0; layer < 3; layer += 1) {
      const peak = y - size * (1 - layer * 0.24);
      const base = y - size * (0.32 - layer * 0.13);
      const half = size * (0.25 + layer * 0.105);
      context.fillStyle = danger ? layer === 1 ? "#17664e" : "#0a463d" : layer === 1 ? "#2a8b6b" : "#176c57";
      context.beginPath();
      context.moveTo(x, peak);
      context.lineTo(x - half, base);
      context.lineTo(x + half, base);
      context.closePath();
      context.fill();
      context.fillStyle = danger ? "#0d4d43" : "#1d765f";
      context.beginPath();
      context.moveTo(x, peak);
      context.lineTo(x + half, base);
      context.lineTo(x + half * 0.06, base);
      context.closePath();
      context.fill();
      context.strokeStyle = "#e6f6f5";
      context.lineWidth = Math.max(1, size * 0.027);
      context.beginPath();
      context.moveTo(x - half * 0.13, peak + size * 0.08);
      context.lineTo(x - half * 0.45, peak + (base - peak) * 0.63);
      context.lineTo(x - half * 0.67, peak + (base - peak) * 0.68);
      context.stroke();
    }
    if (danger) {
      context.strokeStyle = "rgba(229,106,65,0.8)";
      context.lineWidth = Math.max(2, size * 0.035);
      context.beginPath();
      context.ellipse(x, y + size * 0.02, size * 0.43, size * 0.1, 0, 0, Math.PI * 2);
      context.stroke();
    }
  };
  var drawRock = (context, x, y, size, danger = false) => {
    context.fillStyle = danger ? "rgba(21,48,61,0.26)" : "rgba(45,104,114,0.15)";
    context.beginPath();
    context.ellipse(x + size * 0.14, y + size * 0.06, size * 0.59, size * 0.15, 0, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = danger ? "#374859" : "#627889";
    context.beginPath();
    context.moveTo(x - size * 0.44, y);
    context.lineTo(x - size * 0.34, y - size * 0.33);
    context.lineTo(x + size * 0.06, y - size * 0.47);
    context.lineTo(x + size * 0.39, y - size * 0.25);
    context.lineTo(x + size * 0.46, y);
    context.closePath();
    context.fill();
    context.strokeStyle = danger ? "#273746" : "#536d7b";
    context.lineWidth = Math.max(1.5, size * 0.025);
    context.stroke();
    context.fillStyle = danger ? "#708b99" : "#9bb9c2";
    context.beginPath();
    context.moveTo(x - size * 0.34, y - size * 0.33);
    context.lineTo(x + size * 0.06, y - size * 0.47);
    context.lineTo(x + size * 0.16, y - size * 0.31);
    context.lineTo(x - size * 0.21, y - size * 0.23);
    context.closePath();
    context.fill();
    context.strokeStyle = "#effbfb";
    context.lineWidth = Math.max(2, size * 0.055);
    context.beginPath();
    context.moveTo(x - size * 0.21, y - size * 0.32);
    context.lineTo(x + size * 0.03, y - size * 0.42);
    context.lineTo(x + size * 0.16, y - size * 0.33);
    context.stroke();
    if (danger) {
      context.strokeStyle = "rgba(229,106,65,0.85)";
      context.lineWidth = Math.max(2, size * 0.035);
      context.beginPath();
      context.moveTo(x - size * 0.43, y + size * 0.02);
      context.quadraticCurveTo(x, y + size * 0.16, x + size * 0.43, y + size * 0.02);
      context.stroke();
    }
  };
  var drawSideScenery = (context, canvas, riderAcross, travel) => {
    const chunks = visibleSlopeChunks(travel, COURSE.spawnDistance, {
      halfWidth: COURSE.halfWidth
    });
    const props = chunks.flatMap((chunk) => chunk.scenery);
    props.sort((a, b) => b.z - a.z);
    for (const prop of props) {
      const z = prop.z - travel;
      if (z < 0 || z > COURSE.spawnDistance) continue;
      const projected = projectCoursePoint(
        canvas,
        riderAcross,
        { x: prop.x, z },
        { ...COURSE, travel }
      );
      const size = projected.pathHalf / COURSE.halfWidth * 2.35 * prop.size;
      context.save();
      context.globalAlpha = projected.alpha * 0.92;
      if (biomeAt(prop.z) === "glow") {
        context.fillStyle = "rgba(54,218,225,0.18)";
        context.beginPath();
        context.ellipse(projected.x, projected.y, size * 0.65, size * 0.13, 0, 0, Math.PI * 2);
        context.fill();
      }
      if (prop.kind === "rock") drawRock(context, projected.x, projected.y, size);
      else drawPine(context, projected.x, projected.y, size);
      context.restore();
    }
    for (const chunk of chunks) {
      if (chunk.index % 8 !== 3) continue;
      const z = chunk.index * CHUNK_LENGTH + CHUNK_LENGTH / 2 - travel;
      if (z < 0 || z > COURSE.spawnDistance) continue;
      const side = chunk.index % 16 === 3 ? -1 : 1;
      const landmark = projectCoursePoint(canvas, riderAcross, {
        x: side * (COURSE.halfWidth + 10),
        z
      }, { ...COURSE, travel });
      const unit = landmark.pathHalf / COURSE.halfWidth;
      context.save();
      context.globalAlpha = landmark.alpha * 0.8;
      context.fillStyle = "#284f61";
      context.fillRect(landmark.x - unit * 0.7, landmark.y - unit * 2.5, unit * 1.4, unit * 2.5);
      context.fillStyle = "#e6f5f6";
      context.beginPath();
      context.moveTo(landmark.x - unit, landmark.y - unit * 2.5);
      context.lineTo(landmark.x, landmark.y - unit * 3.5);
      context.lineTo(landmark.x + unit, landmark.y - unit * 2.5);
      context.closePath();
      context.fill();
      context.fillStyle = "#ef9d65";
      context.fillRect(landmark.x - unit * 0.2, landmark.y - unit * 1.2, unit * 0.4, unit * 1.2);
      context.restore();
    }
    for (const chunk of chunks) {
      if (chunk.biome !== "glow" || chunk.index % 4 !== 0) continue;
      const z = chunk.index * CHUNK_LENGTH + 3 - travel;
      if (z < 0 || z > COURSE.spawnDistance) continue;
      for (const side of [-1, 1]) {
        const marker = projectCoursePoint(canvas, riderAcross, {
          x: side * (COURSE.halfWidth + 4.5),
          z
        }, { ...COURSE, travel });
        const unit = marker.pathHalf / COURSE.halfWidth;
        context.save();
        context.globalAlpha = marker.alpha;
        context.fillStyle = "rgba(53,219,222,0.25)";
        context.beginPath();
        context.ellipse(marker.x, marker.y, unit * 1.3, unit * 0.32, 0, 0, Math.PI * 2);
        context.fill();
        context.fillStyle = "#24485c";
        context.fillRect(marker.x - unit * 0.16, marker.y - unit * 2.5, unit * 0.32, unit * 2.5);
        context.fillStyle = "#55e2df";
        context.beginPath();
        context.arc(marker.x, marker.y - unit * 2.55, unit * 0.45, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }
    }
  };
  var drawJumpHazard = (context, canvas, projected) => {
    const width = projected.pathHalf * 2.08;
    const height = Math.max(7, projected.pathHalf / COURSE.halfWidth * 0.72);
    const { x, y } = projected;
    context.fillStyle = "rgba(25,53,63,0.22)";
    context.beginPath();
    context.ellipse(x, y + height * 0.7, width * 0.52, height * 0.7, 0, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "#a9d7db";
    context.beginPath();
    context.moveTo(x - width * 0.43, y + height * 1.6);
    context.lineTo(x - width * 0.4, y - height * 0.6);
    context.lineTo(x + width * 0.4, y - height * 0.6);
    context.lineTo(x + width * 0.43, y + height * 1.6);
    context.closePath();
    context.fill();
    context.fillStyle = "#523929";
    context.fillRect(x - width / 2, y - height, width, height * 1.12);
    context.fillStyle = "#ac7044";
    context.fillRect(x - width / 2, y - height, width, height * 0.3);
    context.fillStyle = "#f2f9f5";
    context.fillRect(x - width * 0.48, y - height * 1.12, width * 0.96, height * 0.2);
    context.strokeStyle = "#2d2928";
    context.lineWidth = Math.max(2, height * 0.12);
    context.strokeRect(x - width / 2, y - height, width, height * 1.12);
    context.strokeStyle = "rgba(35,28,24,0.45)";
    context.lineWidth = Math.max(1, height * 0.07);
    for (const offset of [-0.32, -0.08, 0.22]) {
      context.beginPath();
      context.moveTo(x + width * offset, y - height * 0.52);
      context.lineTo(x + width * (offset + 0.12), y - height * 0.2);
      context.stroke();
    }
    for (const side of [-1, 1]) {
      context.fillStyle = "#cf9c6f";
      context.beginPath();
      context.ellipse(x + side * width * 0.49, y - height * 0.42, height * 0.35, height * 0.49, 0, 0, Math.PI * 2);
      context.fill();
    }
  };
  var drawBird = (context, canvas, projected) => {
    const scale = projected.pathHalf / COURSE.halfWidth / 32;
    const x = projected.x;
    const y = projected.y - 90 * scale;
    const wing = projected.pathHalf * 1.04;
    context.fillStyle = "rgba(29,47,65,0.16)";
    context.beginPath();
    context.ellipse(x, projected.y + 3 * scale, wing * 0.6, 8 * scale, 0, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "#222b43";
    context.beginPath();
    context.ellipse(x, y, 22 * scale, 13 * scale, 0, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "#222b43";
    context.lineCap = "round";
    context.lineWidth = Math.max(3, 10 * scale);
    context.beginPath();
    context.moveTo(x - 8 * scale, y);
    context.quadraticCurveTo(x - wing * 0.58, y - 45 * scale, x - wing, y + 5 * scale);
    context.moveTo(x + 8 * scale, y);
    context.quadraticCurveTo(x + wing * 0.58, y - 45 * scale, x + wing, y + 5 * scale);
    context.stroke();
    context.fillStyle = "#f0a65c";
    context.beginPath();
    context.moveTo(x, y + 2 * scale);
    context.lineTo(x - 4 * scale, y + 10 * scale);
    context.lineTo(x + 4 * scale, y + 10 * scale);
    context.closePath();
    context.fill();
  };
  var drawBranch = (context, canvas, projected) => {
    const scale = projected.pathHalf / COURSE.halfWidth / 32;
    const y = projected.y - 83 * scale;
    const half = projected.pathHalf * 1.04;
    const x = projected.x;
    context.fillStyle = "rgba(29,47,65,0.16)";
    context.beginPath();
    context.ellipse(x, projected.y + 3 * scale, half * 0.68, 8 * scale, 0, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "#52382e";
    context.lineCap = "round";
    context.lineWidth = Math.max(5, 15 * scale);
    context.beginPath();
    context.moveTo(x - half, y - 9 * scale);
    context.quadraticCurveTo(x, y + 11 * scale, x + half, y - 9 * scale);
    context.stroke();
    context.fillStyle = "#1b624f";
    for (const offset of [-0.72, -0.36, 0.08, 0.47, 0.77]) {
      context.beginPath();
      context.ellipse(x + half * offset, y - 10 * scale, 16 * scale, 8 * scale, offset * 0.25, 0, Math.PI * 2);
      context.fill();
    }
  };
  var drawActionCue = (context, projected, kind) => {
    const radius = clamp2(projected.pathHalf * 0.12, 9, 31);
    const y = projected.y - (kind === "jump" ? radius * 3 : projected.pathHalf / COURSE.halfWidth * 3.5 + radius * 1.5);
    context.globalAlpha = projected.alpha;
    context.fillStyle = kind === "jump" ? "#dc754e" : "#684f90";
    context.beginPath();
    context.arc(projected.x, y, radius, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "#ffffff";
    context.lineWidth = Math.max(2, radius * 0.16);
    context.lineCap = "round";
    context.lineJoin = "round";
    context.beginPath();
    const direction = kind === "jump" ? -1 : 1;
    context.moveTo(projected.x, y - direction * radius * 0.42);
    context.lineTo(projected.x, y + direction * radius * 0.42);
    context.moveTo(projected.x - radius * 0.32, y + direction * radius * 0.1);
    context.lineTo(projected.x, y + direction * radius * 0.42);
    context.lineTo(projected.x + radius * 0.32, y + direction * radius * 0.1);
    context.stroke();
  };
  var drawHazards = (context, canvas, riderAcross, travel, hazards) => {
    for (const hazard of [...hazards].sort((a, b) => b.z - a.z)) {
      if (hazard.z < -2 || hazard.z > COURSE.spawnDistance) continue;
      const projected = projectCoursePoint(canvas, riderAcross, hazard, { ...COURSE, travel });
      context.save();
      context.globalAlpha = projected.alpha;
      if (hazard.kind === "jump") {
        drawJumpHazard(context, canvas, projected);
        if (hazard.z > 3) drawActionCue(context, projected, "jump");
      } else if (hazard.kind === "duck") {
        if (hazard.variant === "bird") drawBird(context, canvas, projected);
        else drawBranch(context, canvas, projected);
        if (hazard.z > 3) drawActionCue(context, projected, "duck");
      } else {
        const size = projected.pathHalf / COURSE.halfWidth * 2.35;
        if (hazard.variant === "rock") drawRock(context, projected.x, projected.y, size, true);
        else drawPine(context, projected.x, projected.y, size, true);
      }
      context.restore();
    }
  };
  async function setupMountain(game2) {
    const context = game2.canvas.getContext("2d");
    if (!context) throw new Error("Mountain rendering requires a 2D canvas context");
    let travel = 0;
    let trail = [];
    let course = { crashFx: 0, distance: 0, hazards: [], phase: "idle" };
    game2.events.addEventListener("course:update", (event) => {
      course = {
        crashFx: Number(event.detail?.crashFx) || 0,
        distance: Number(event.detail?.distance) || 0,
        hazards: Array.isArray(event.detail?.hazards) ? event.detail.hazards : [],
        phase: event.detail?.phase ?? "idle"
      };
    });
    game2.events.addEventListener("rider:update", (event) => {
      const riderState = event.detail?.state;
      const camera = event.detail?.camera;
      const riderAcross = Number(riderState?.position?.across) || 0;
      const sceneTravel = course.phase === "idle" ? 0 : course.distance;
      if (course.phase === "idle") {
        travel = 0;
        trail = [];
      } else if (course.phase === "running") {
        travel = Math.max(0, sceneTravel);
        if ((riderState?.air ?? 0) < 0.08 && (trail.length === 0 || travel - trail.at(-1).downhill >= 0.45)) {
          trail.push({ across: riderAcross, downhill: travel, speed: Number(riderState?.speed) || 16 });
        }
        trail = trail.filter((sample) => travel - sample.downhill < 42);
      }
      context.save();
      context.translate(game2.canvas.width / 2, game2.canvas.height / 2);
      context.rotate(-(Number(camera?.roll) || 0));
      context.translate(-game2.canvas.width / 2, -game2.canvas.height / 2);
      drawBackground(context, game2.canvas, riderAcross, sceneTravel);
      drawSnowTexture(
        context,
        game2.canvas,
        riderAcross,
        sceneTravel,
        riderState?.surface ?? "powder",
        Number(riderState?.speed) || 0
      );
      drawSideRidges(context, game2.canvas, riderAcross, sceneTravel);
      drawPowderTrail(context, game2.canvas, riderAcross, travel, trail);
      if (course.phase === "running" && (riderState?.air ?? 0) < 0.08) {
        drawSnowSpray(
          context,
          game2.canvas,
          Number(event.detail?.input?.carve) || 0,
          travel,
          Number(riderState?.landingImpact) || 0,
          Number(riderState?.speed) || 16
        );
      }
      drawWind(context, game2.canvas, riderAcross, sceneTravel, Number(riderState?.speed) || 0);
      drawSideScenery(context, game2.canvas, riderAcross, sceneTravel);
      drawHazards(context, game2.canvas, riderAcross, sceneTravel, course.hazards);
      drawCrashBurst(context, game2.canvas, course.crashFx);
      context.restore();
    });
  }

  // src/game-loop/index.js
  var STORAGE_KEY = "slopestyle.bestDistance";
  var START_SPEED = 16;
  var MIN_COURSE_SPEED = 12;
  var MAX_SPEED = 34;
  var SPEED_PER_DODGE = 0.62;
  var REWARD_EVERY = 10;
  var REWARD_DROP = 3.2;
  var REWARD_DURATION = 2.4;
  var HIT_WINDOW = 1.25;
  var clamp3 = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));
  var courseSpeedForRider = (riderState) => {
    const downhillSpeed = Number.isFinite(riderState?.velocity?.downhill) ? riderState.velocity.downhill : Number(riderState?.speed) || 0;
    return riderState?.crashed ? Math.max(0, downhillSpeed) : Math.max(MIN_COURSE_SPEED, downhillSpeed);
  };
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
  var createAudioController = () => {
    let context;
    let theme;
    let ambience;
    let lastCarveAt = 0;
    let lastSlash = 0;
    let lastLandingImpact = 0;
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
    const startAmbience = () => {
      if (ambience) return;
      const audio = ensure();
      const sampleCount = Math.floor(audio.sampleRate * 2);
      const buffer = audio.createBuffer(1, sampleCount, audio.sampleRate);
      const samples = buffer.getChannelData(0);
      let seed = 19341;
      for (let index = 0; index < sampleCount; index += 1) {
        seed = Math.imul(seed, 1664525) + 1013904223 | 0;
        samples[index] = seed / 2147483648 * 0.5;
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
        wind: makeLayer("lowpass", 420)
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
          theme.gain.gain.setTargetAtTime(1e-4, audio.currentTime, 0.08);
          theme.bass.stop(audio.currentTime + 0.2);
          theme.lead.stop(audio.currentTime + 0.2);
          theme = void 0;
        }
        if (ambience) {
          for (const layer of [ambience.snow, ambience.skid, ambience.wind]) {
            layer.gain.gain.setTargetAtTime(1e-4, audio.currentTime, 0.06);
          }
          ambience.source.stop(audio.currentTime + 0.2);
          ambience = void 0;
        }
      },
      ride(rider) {
        if (!ambience) return;
        const audio = ensure();
        const speed = clamp3(rider.speed / MAX_SPEED, 0, 1);
        const onSnow = rider.air <= 0 && !rider.crashed ? 1 : 0;
        const surfaceVolume = {
          groomed: 0.034,
          powder: 0.014,
          ice: 0.048,
          slush: 0.036,
          chop: 0.042,
          rail: 0.02
        }[rider.surface] ?? 0.03;
        const snowPitch = rider.surface === "ice" ? 2500 : rider.surface === "powder" ? 900 : 1600;
        ambience.snow.filter.frequency.setTargetAtTime(snowPitch + speed * 700, audio.currentTime, 0.07);
        ambience.snow.gain.gain.setTargetAtTime(
          onSnow * surfaceVolume * (0.25 + speed * 0.75),
          audio.currentTime,
          0.04
        );
        ambience.skid.gain.gain.setTargetAtTime(
          onSnow * (rider.skid * 0.046 + rider.slash * 0.016),
          audio.currentTime,
          0.035
        );
        ambience.wind.gain.gain.setTargetAtTime(
          (5e-3 + speed * speed * 0.045) * (1 - (rider.crouchAmount ?? 0) * 0.2),
          audio.currentTime,
          0.09
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
      z: COURSE.spawnDistance
    };
  };
  var nextSpawnDistance = (speed, kind) => {
    const actionSpacing = kind === "steer" ? 1 : 1.28;
    return randomBetween(
      clamp3(29 - speed * 0.28, 16, 25),
      clamp3(42 - speed * 0.36, 24, 36)
    ) * actionSpacing;
  };
  var emptyRunState = (best) => ({
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
            crashFx: state.crashFx,
            distance: state.distance,
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
        <p class="overlay-eyebrow">The mountain is calling</p>
        <h1>Slopestyle</h1>
        <p>Find your line through deep powder. Dodge trees and rocks, jump logs, and duck low hazards.</p>
        <button class="primary-action" type="button" data-start>Start</button>
        <p class="run-note">A/D or \u2190/\u2192 steer &nbsp;\xB7&nbsp; Space or \u2191 jump &nbsp;\xB7&nbsp; \u2193 duck</p>
      </div>
    `;
      game2.overlayRoot.querySelector("[data-start]").addEventListener("click", startRun, {
        once: true
      });
    };
    const showCrash = () => {
      game2.overlayRoot.innerHTML = `
      <div class="overlay-panel">
        <p class="overlay-eyebrow">Run complete</p>
        <h1>${Math.floor(state.finalDistance)} m</h1>
        <p>Final distance \xB7 ${state.dodged} obstacles cleared</p>
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
      game2.canvas.parentElement?.classList.remove("is-crashed");
      game2.overlayRoot.innerHTML = "";
      game2.events.dispatchEvent(
        new CustomEvent("rider:reset", { detail: { speed: START_SPEED } })
      );
      dispatchCourse();
      audio.startTheme();
    };
    const returnToTop = () => {
      state = emptyRunState(state.best);
      lastFrameAt = void 0;
      lastJumpValue = 0;
      game2.canvas.parentElement?.classList.remove("is-crashed");
      game2.events.dispatchEvent(
        new CustomEvent("rider:reset", { detail: { speed: START_SPEED } })
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
      game2.canvas.parentElement?.classList.add("is-crashed");
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
        state.feedbackText = "10 cleared \xB7 breathe";
        state.feedbackTimer = 1.3;
        game2.events.dispatchEvent(new CustomEvent("rider:pace", {
          detail: { holdSeconds: REWARD_DURATION, targetSpeed: state.speed }
        }));
        return;
      }
      if (state.rewardTimer <= 0) {
        state.speed = Math.min(MAX_SPEED, state.speed + SPEED_PER_DODGE);
        game2.events.dispatchEvent(new CustomEvent("rider:pace", {
          detail: { targetSpeed: state.speed }
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
      return riderState.air < 0.35 && Math.abs(hazard.x - riderState.position.across) < 1.05;
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
    game2.events.addEventListener("rider:update", (event) => {
      const now = performance.now();
      const delta = lastFrameAt === void 0 ? 0 : clamp3((now - lastFrameAt) / 1e3, 0, 0.05);
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

  // src/rider/animation.js
  var clamp4 = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));
  function getRiderPose(state, input = {}) {
    const edgeAmount = Math.abs(state.edge);
    const airborne = clamp4((state.air ?? 0) / 1.5, 0, 1);
    const verticalPhase = clamp4((state.verticalVelocity ?? 0) / 7.8, -1, 1);
    const jumpStretch = airborne * Math.max(0, verticalPhase);
    const apexTuck = airborne * (1 - Math.abs(verticalPhase));
    const compression = clamp4(state.compression ?? 0, 0, 1);
    const gForce = clamp4(state.gForce ?? 0, 0, 1.6);
    const skid = clamp4(state.skid ?? 0, 0, 1);
    const slash = clamp4(state.slash ?? 0, 0, 1);
    const bumpImpact = clamp4(state.bumpImpact ?? 0, 0, 1);
    const chatter = clamp4(state.chatter ?? 0, 0, 1);
    const requestedCrouch = clamp4(
      Number.isFinite(input.crouch) ? input.crouch : 0,
      0,
      1
    );
    const requestedStretch = clamp4(
      Number.isFinite(input.stretch) ? input.stretch : 0,
      0,
      1
    );
    const terrainHeight = Number.isFinite(state.terrainHeight) ? state.terrainHeight : 0;
    const chatterPhase = state.elapsed * state.speed * 1.7;
    const lightness = clamp4(state.boardLightness ?? 0, 0, 1);
    const loadedCrouch = clamp4(state.crouchAmount ?? 0, 0, 1);
    const toeSide = (state.edge ?? 0) * (state.stance === "goofy" ? -1 : 1) >= 0;
    const boardHeave = airborne ? 0 : terrainHeight * 1.35 + Math.sin(chatterPhase) * chatter * 0.045 - lightness * 0.075;
    const bodyHeave = airborne ? 0 : (Number.isFinite(state.bodyHeave) ? state.bodyHeave : terrainHeight) * 1.35 - lightness * 0.035;
    return Object.freeze({
      boardRoll: state.edge * 0.45 + (state.terrainRoll ?? 0) * 0.18,
      boardYaw: state.boardYaw ?? state.heading,
      bodyYaw: state.torsoYaw ?? state.heading,
      bodySpin: (state.torsoRotation ?? state.torsoYaw ?? state.heading) - (state.heading ?? 0) - (state.switchRiding ? Math.PI : 0),
      boardBodyRotation: (state.boardRotation ?? state.boardYaw ?? state.heading) - (state.torsoRotation ?? state.torsoYaw ?? state.heading),
      bob: bodyHeave,
      boardBob: boardHeave,
      airborne,
      boardPitch: airborne * verticalPhase * 0.18 + (state.terrainPitch ?? 0) * 0.42 - (state.noseFloat ?? 0) * 0.08 - (state.pressAmount ?? 0) * 0.15,
      boardSlip: clamp4(state.slipAngle ?? 0, -0.75, 0.75),
      boardTweak: clamp4(state.tweak ?? 0, -1, 1) * 1.55,
      butter: clamp4(state.butter ?? 0, 0, 1),
      press: clamp4(
        (state.pressAmount ?? 0) + (state.butter ?? 0) * 0.7,
        -1,
        1
      ),
      crouch: clamp4(
        0.28 + edgeAmount * 0.38 + loadedCrouch * 0.48 + requestedCrouch * 0.05 + apexTuck * 0.42 - jumpStretch * 0.18 + compression * 0.5 + bumpImpact * 0.38 + gForce * 0.08,
        0,
        1
      ),
      fallRotation: state.crashed ? (Math.sign(state.crashSpin) || 1) * (1.2 + clamp4((2 - (state.crashTimer ?? 0)) / 2, 0, 1) * Math.PI * 2) : 0,
      foreAft: clamp4(
        ((state.frontFootPressure ?? 0.5) - 0.5) * 2 - (state.noseFloat ?? 0) * 0.24,
        -1,
        1
      ),
      handDrag: clamp4(
        (Math.abs(state.lean ?? 0) - 0.52) * 2.1 + requestedCrouch * 0.38 + (state.washout ?? 0) * 0.65,
        0,
        1
      ),
      grab: airborne * requestedCrouch,
      jumpStretch: clamp4(jumpStretch + airborne * requestedStretch * 0.32, 0, 1),
      lean: clamp4(
        (state.lean ?? state.edge) * 0.54 + Math.sign(state.edge) * gForce * 0.32,
        -1.04,
        1.04
      ),
      spray: airborne ? 0 : clamp4(
        (state.crashed ? 1 : 0) + slash * 0.92 + skid * 0.24 + edgeAmount * 0.05 + bumpImpact * (state.surface === "powder" ? 0.24 : 0.08) + clamp4((state.landingImpact ?? 0) / 9, 0, 0.35),
        0,
        1
      ),
      scarfFlutter: clamp4((state.speed ?? 0) / 34, 0, 1) * Math.sin((Number(state.elapsed) || 0) * (5 + (state.speed ?? 0) * 0.18)),
      stance: state.stance ?? "regular",
      switchRiding: Boolean(state.switchRiding),
      toeSide,
      upperBodyTwist: state.edge * -0.22 - Math.sign(state.edge) * skid * 0.08 + clamp4(input.steer ?? 0, -1, 1) * 0.025
    });
  }

  // src/rider/camera.js
  var MAX_STEP = 1 / 20;
  var CAMERA_RESPONSE = 4;
  var DOWNHILL_LOOK_AHEAD = 8;
  var clamp5 = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));
  var finiteOr = (value, fallback = 0) => Number.isFinite(value) ? value : fallback;
  var freezeCamera = (position, roll = 0, zoom = 1, dip = 0) => Object.freeze({
    dip,
    position: Object.freeze(position),
    roll,
    zoom
  });
  function createCameraState(overrides = {}) {
    const position = overrides.position ?? {};
    return freezeCamera(
      {
        across: finiteOr(position.across),
        downhill: finiteOr(position.downhill)
      },
      finiteOr(overrides.roll),
      finiteOr(overrides.zoom, 1),
      finiteOr(overrides.dip)
    );
  }
  function stepCamera(camera, rider, deltaSeconds = 0) {
    const delta = clamp5(finiteOr(deltaSeconds), 0, MAX_STEP);
    const blend2 = 1 - Math.exp(-CAMERA_RESPONSE * delta);
    const heading = finiteOr(rider.heading);
    const targetAcross = finiteOr(rider.position?.across) + Math.sin(heading) * 2;
    const targetDownhill = finiteOr(rider.position?.downhill) + DOWNHILL_LOOK_AHEAD;
    return freezeCamera(
      {
        across: camera.position.across + (targetAcross - camera.position.across) * blend2,
        downhill: camera.position.downhill + (targetDownhill + clamp5(finiteOr(rider.air), 0, 2) * 1.5 - camera.position.downhill) * blend2
      },
      finiteOr(camera.roll) + (clamp5(finiteOr(rider.lean) * 0.04, -0.045, 0.045) - finiteOr(camera.roll)) * (1 - Math.exp(-2.8 * delta)),
      finiteOr(camera.zoom, 1) + (1 - clamp5(finiteOr(rider.speed) / 34, 0, 1) * 0.14 - finiteOr(camera.zoom, 1)) * (1 - Math.exp(-2 * delta)),
      finiteOr(camera.dip) + (clamp5(finiteOr(rider.landingImpact) / 9, 0, 1) - finiteOr(camera.dip)) * (1 - Math.exp(-8 * delta))
    );
  }

  // src/rider/controls.js
  var CONTROL_CODES = /* @__PURE__ */ new Set([
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "KeyA",
    "KeyD",
    "KeyS",
    "KeyW",
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
        const steerLeft = pressed.has("ArrowLeft");
        const steerRight = pressed.has("ArrowRight");
        const carveLeft = pressed.has("KeyA");
        const carveRight = pressed.has("KeyD");
        const crouch = pressed.has("ArrowDown");
        const nosePress = pressed.has("KeyW");
        const tailPress = pressed.has("KeyS");
        const stretch = pressed.has("ArrowUp");
        const jump = queuedJump;
        queuedJump = false;
        return Object.freeze({
          carve: Number(carveRight) - Number(carveLeft),
          crouch: Number(crouch),
          jump: Number(jump),
          press: Number(tailPress) - Number(nosePress),
          steer: Number(steerRight) - Number(steerLeft),
          stretch: Number(stretch)
        });
      }
    });
  }

  // src/rider/physics.js
  var MIN_SPEED = 12;
  var MAX_SPEED2 = 34;
  var MAX_STEP2 = 1 / 20;
  var EARTH_GRAVITY = 9.81;
  var AIR_GRAVITY = 8.6;
  var DEFAULT_SLOPE_GRADE = 0.34;
  var CRASH_RECOVERY = 2;
  var SURFACE_PROFILES = Object.freeze({
    groomed: Object.freeze({ baseGrip: 1, drag: 1, edgeGrip: 1, skid: 1 }),
    ice: Object.freeze({ baseGrip: 0.16, drag: 0.45, edgeGrip: 0.25, skid: 0.7 }),
    powder: Object.freeze({ baseGrip: 0.7, drag: 1.85, edgeGrip: 0.76, skid: 1.12 }),
    slush: Object.freeze({ baseGrip: 0.85, drag: 1.8, edgeGrip: 0.74, skid: 1.35 }),
    chop: Object.freeze({ baseGrip: 0.82, drag: 1.3, edgeGrip: 0.82, skid: 1.2 }),
    rail: Object.freeze({ baseGrip: 0.02, drag: 0.3, edgeGrip: 0.02, skid: 0.3 })
  });
  var TERRAIN_PROFILES = Object.freeze({
    groomed: Object.freeze({ amplitude: 0.055, roughness: 0.2 }),
    ice: Object.freeze({ amplitude: 0.012, roughness: 0.07 }),
    powder: Object.freeze({ amplitude: 0.34, roughness: 0.95 }),
    slush: Object.freeze({ amplitude: 0.14, roughness: 0.55 }),
    chop: Object.freeze({ amplitude: 0.24, roughness: 0.9 }),
    rail: Object.freeze({ amplitude: 0, roughness: 0 })
  });
  var clamp6 = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));
  var finiteOr2 = (value, fallback) => Number.isFinite(value) ? value : fallback;
  var normalizeAngle = (angle) => Math.atan2(Math.sin(angle), Math.cos(angle));
  var blend = (response, delta) => 1 - Math.exp(-response * delta);
  var terrainWave = (across, downhill) => Math.sin(downhill * 0.38 + across * 0.17) * 0.45 + Math.sin(downhill * 1.07 - across * 0.42 + 0.8) * 0.3 + Math.sin(downhill * 2.31 + across * 0.77 + 1.7) * 0.15 + Math.sin(downhill * 0.11 + across * 1.6) * 0.1;
  function sampleSnowTerrain(position = {}, surface = "groomed") {
    const across = finiteOr2(position.across, 0);
    const downhill = finiteOr2(position.downhill, 0);
    const profile = TERRAIN_PROFILES[surface] ?? TERRAIN_PROFILES.groomed;
    const sampleHeight = (x, z) => terrainWave(x, z) * profile.amplitude;
    const spacing = 0.08;
    const height = sampleHeight(across, downhill);
    const slope = (sampleHeight(across, downhill + spacing) - sampleHeight(across, downhill - spacing)) / (spacing * 2);
    const roll = (sampleHeight(across + spacing, downhill) - sampleHeight(across - spacing, downhill)) / (spacing * 2);
    return Object.freeze({
      height,
      roll,
      roughness: profile.roughness * (0.65 + clamp6((Math.abs(slope) + Math.abs(roll)) * 0.9, 0, 0.35)),
      slope
    });
  }
  var freezeState = (state) => Object.freeze({
    ...state,
    position: Object.freeze({ ...state.position }),
    velocity: Object.freeze({ ...state.velocity })
  });
  var velocityFromHeading = (speed, heading) => ({
    across: Math.sin(heading) * speed,
    downhill: Math.cos(heading) * speed
  });
  function createRiderState(overrides = {}) {
    const position = overrides.position ?? {};
    const requestedHeading = finiteOr2(overrides.heading, 0);
    const requestedSpeed = Math.max(0, finiteOr2(overrides.speed, 8));
    const suppliedVelocity = overrides.velocity;
    const velocity = suppliedVelocity ? {
      across: finiteOr2(suppliedVelocity.across, 0),
      downhill: finiteOr2(suppliedVelocity.downhill, requestedSpeed)
    } : velocityFromHeading(requestedSpeed, requestedHeading);
    const speed = Math.hypot(velocity.across, velocity.downhill);
    const heading = suppliedVelocity ? Math.atan2(velocity.across, velocity.downhill) : requestedHeading;
    const switchRiding = Boolean(overrides.switchRiding);
    const boardYaw = finiteOr2(overrides.boardYaw, heading + (switchRiding ? Math.PI : 0));
    const surface = SURFACE_PROFILES[overrides.surface] ? overrides.surface : "groomed";
    const terrain = sampleSnowTerrain(position, surface);
    return freezeState({
      air: Math.max(0, finiteOr2(overrides.air, 0)),
      airtime: Math.max(0, finiteOr2(overrides.airtime, 0)),
      boardLightness: clamp6(finiteOr2(overrides.boardLightness, 0), 0, 1),
      boardOffset: finiteOr2(
        overrides.boardOffset,
        normalizeAngle(boardYaw - heading - (switchRiding ? Math.PI : 0))
      ),
      boardRotation: finiteOr2(overrides.boardRotation, boardYaw),
      boardYaw,
      bodyHeave: finiteOr2(overrides.bodyHeave, terrain.height),
      bumpImpact: clamp6(finiteOr2(overrides.bumpImpact, 0), 0, 1),
      butter: clamp6(finiteOr2(overrides.butter, 0), 0, 1),
      carveQuality: clamp6(finiteOr2(overrides.carveQuality, 0), 0, 1),
      chatter: clamp6(finiteOr2(overrides.chatter, 0), 0, 1),
      compression: clamp6(finiteOr2(overrides.compression, 0), 0, 1),
      crouchAmount: clamp6(finiteOr2(overrides.crouchAmount, 0), 0, 1),
      crashed: Boolean(overrides.crashed),
      crashReason: overrides.crashReason ?? null,
      crashSpin: finiteOr2(overrides.crashSpin, 0),
      crashTimer: Math.max(0, finiteOr2(overrides.crashTimer, 0)),
      edge: clamp6(finiteOr2(overrides.edge, 0), -1, 1),
      elapsed: Math.max(0, finiteOr2(overrides.elapsed, 0)),
      flickBrake: Math.max(0, finiteOr2(overrides.flickBrake, 0)),
      flickRecovery: Math.max(0, finiteOr2(overrides.flickRecovery, 0)),
      frontEdge: clamp6(finiteOr2(overrides.frontEdge, overrides.edge ?? 0), -1, 1),
      frontFootPressure: clamp6(finiteOr2(overrides.frontFootPressure, 0.58), 0, 1),
      gForce: Math.max(0, finiteOr2(overrides.gForce, 0)),
      heading,
      landingImpact: Math.max(0, finiteOr2(overrides.landingImpact, 0)),
      lean: clamp6(finiteOr2(overrides.lean, overrides.edge ?? 0), -1, 1),
      noseFloat: clamp6(finiteOr2(overrides.noseFloat, 0), 0, 1),
      popCharge: clamp6(finiteOr2(overrides.popCharge, 0), 0, 1),
      position: {
        across: finiteOr2(position.across, 0),
        downhill: finiteOr2(position.downhill, 0)
      },
      pressAmount: clamp6(finiteOr2(overrides.pressAmount, 0), -1, 1),
      rearEdge: clamp6(finiteOr2(overrides.rearEdge, overrides.edge ?? 0), -1, 1),
      skid: clamp6(finiteOr2(overrides.skid, 0), 0, 1),
      slash: clamp6(finiteOr2(overrides.slash, 0), 0, 1),
      slipAngle: finiteOr2(overrides.slipAngle, normalizeAngle(boardYaw - heading)),
      slopeGrade: clamp6(
        finiteOr2(overrides.slopeGrade, DEFAULT_SLOPE_GRADE),
        0,
        0.65
      ),
      speed,
      spinVelocity: finiteOr2(overrides.spinVelocity, 0),
      stance: overrides.stance === "goofy" ? "goofy" : "regular",
      steer: clamp6(finiteOr2(overrides.steer, 0), -1, 1),
      steerHold: Math.max(0, finiteOr2(overrides.steerHold, 0)),
      surface,
      switchRiding,
      turnRate: finiteOr2(overrides.turnRate, 0),
      tweak: clamp6(finiteOr2(overrides.tweak, 0), -1, 1),
      terrainHeight: finiteOr2(overrides.terrainHeight, terrain.height),
      terrainLaunchCooldown: Math.max(0, finiteOr2(overrides.terrainLaunchCooldown, 0)),
      terrainPitch: finiteOr2(overrides.terrainPitch, terrain.slope),
      terrainRoll: finiteOr2(overrides.terrainRoll, terrain.roll),
      torsoYaw: finiteOr2(overrides.torsoYaw, heading + (switchRiding ? Math.PI : 0)),
      torsoRotation: finiteOr2(overrides.torsoRotation, heading + (switchRiding ? Math.PI : 0)),
      velocity,
      verticalVelocity: finiteOr2(overrides.verticalVelocity, 0),
      washout: clamp6(finiteOr2(overrides.washout, 0), 0, 1)
    });
  }
  var sampleSlopeGrade = (downhill) => 0.36 + Math.sin(downhill * 0.024 - 0.3) * 0.2 + Math.sin(downhill * 0.061) * 0.03;
  var stepCrashedRider = (state, delta, slopeGrade, surface) => {
    const slideFriction = surface === "ice" ? 0.5 : surface === "powder" ? 3.4 : 1.9;
    const damping = Math.exp(-slideFriction * delta);
    const velocity = {
      across: state.velocity.across * damping,
      downhill: state.velocity.downhill * damping + EARTH_GRAVITY * Math.sin(slopeGrade) * delta
    };
    const position = {
      across: state.position.across + velocity.across * delta,
      downhill: state.position.downhill + velocity.downhill * delta
    };
    const terrain = sampleSnowTerrain(position, surface);
    const speed = Math.hypot(velocity.across, velocity.downhill);
    const heading = Math.atan2(velocity.across, velocity.downhill);
    const crashTimer = Math.max(0, state.crashTimer - delta);
    const recovered = crashTimer <= 0;
    const boardYaw = recovered ? heading + (state.switchRiding ? Math.PI : 0) : normalizeAngle(state.boardYaw + state.crashSpin * 2.3 * delta);
    return freezeState({
      ...state,
      boardRotation: state.boardRotation + normalizeAngle(boardYaw - state.boardYaw),
      boardYaw,
      boardOffset: 0,
      butter: state.butter * Math.exp(-9 * delta),
      bumpImpact: state.bumpImpact * Math.exp(-10 * delta),
      carveQuality: 0,
      chatter: state.chatter * Math.exp(-8 * delta),
      compression: state.compression * Math.exp(-5 * delta),
      crashed: !recovered,
      crashReason: recovered ? null : state.crashReason,
      crashSpin: recovered ? 0 : state.crashSpin,
      crashTimer,
      edge: recovered ? 0 : state.edge * Math.exp(-6 * delta),
      elapsed: state.elapsed + delta,
      flickBrake: 0,
      flickRecovery: 0,
      gForce: 0,
      heading,
      landingImpact: state.landingImpact * Math.exp(-3 * delta),
      lean: recovered ? 0 : state.lean * Math.exp(-4 * delta),
      position,
      pressAmount: 0,
      skid: recovered ? 0 : 1,
      slash: state.slash * Math.exp(-8 * delta),
      slipAngle: recovered ? 0 : normalizeAngle(state.boardYaw - heading),
      slopeGrade,
      speed,
      surface,
      terrainHeight: terrain.height,
      terrainPitch: terrain.slope,
      terrainRoll: terrain.roll,
      torsoYaw: state.torsoYaw,
      velocity,
      washout: 0
    });
  };
  function stepRider(state, input = {}, deltaSeconds = 0, environment = {}) {
    const delta = clamp6(finiteOr2(deltaSeconds, 0), 0, MAX_STEP2);
    const slopeGrade = clamp6(
      finiteOr2(environment.slopeGrade, sampleSlopeGrade(state.position.downhill)),
      0,
      0.65
    );
    const surface = SURFACE_PROFILES[environment.surface] ? environment.surface : state.surface;
    const profile = SURFACE_PROFILES[surface];
    if (state.crashed) return stepCrashedRider(state, delta, slopeGrade, surface);
    const carve = clamp6(finiteOr2(input.carve, 0), -1, 1);
    const steer = clamp6(finiteOr2(input.steer, 0), -1, 1);
    const crouch = clamp6(finiteOr2(input.crouch, 0), 0, 1);
    const stretch = clamp6(finiteOr2(input.stretch, 0), 0, 1);
    const press = clamp6(finiteOr2(input.press, 0), -1, 1);
    const grounded = state.air <= 0;
    const crouchAmount = state.crouchAmount + (crouch - state.crouchAmount) * blend(5, delta);
    const pressAmount = state.pressAmount + (press - state.pressAmount) * blend(7, delta);
    const lean = state.lean + (carve - state.lean) * blend(6.3, delta);
    const edgeTarget = lean * (0.75 + crouchAmount * 0.25);
    const toeSide = edgeTarget * (state.stance === "goofy" ? -1 : 1) >= 0;
    const frontEdge = state.frontEdge + (edgeTarget - state.frontEdge) * blend(toeSide ? 10.8 : 8.8, delta);
    const rearEdge = state.rearEdge + (edgeTarget - state.rearEdge) * blend(toeSide ? 6.1 : 5.1, delta);
    const edge = frontEdge * 0.58 + rearEdge * 0.42;
    const edgeAmount = Math.abs(edge);
    const edgeChange = Math.sign(edge) !== Math.sign(state.edge) && Math.abs(state.edge) > 0.015 && edgeAmount > 0.015;
    const boardSide = {
      across: Math.cos(state.boardYaw),
      downhill: -Math.sin(state.boardYaw)
    };
    const lateralSpeed = state.velocity.across * boardSide.across + state.velocity.downhill * boardSide.downhill;
    const caughtEdge = grounded && surface !== "powder" && surface !== "rail" && (edgeChange && Math.sign(edge) === Math.sign(lateralSpeed) || Math.sign(carve) !== Math.sign(state.edge) && Math.sign(carve) === Math.sign(lateralSpeed) && Math.abs(state.edge) > 0.15) && Math.abs(lateralSpeed) > 3.8 && state.speed > 16 && Math.abs(steer) < 0.05 && state.flickRecovery <= 0;
    const railEdgeCatch = grounded && surface === "rail" && edgeAmount > 0.22;
    if (caughtEdge || railEdgeCatch) {
      const velocity2 = {
        across: state.velocity.across * 0.62,
        downhill: state.velocity.downhill * 0.62
      };
      return freezeState({
        ...state,
        compression: 1,
        crashed: true,
        crashReason: railEdgeCatch ? "rail-edge" : "edge-catch",
        crashSpin: Math.sign(lateralSpeed || edge) || 1,
        crashTimer: CRASH_RECOVERY,
        edge,
        elapsed: state.elapsed + delta,
        frontEdge,
        gForce: 1.6,
        lean,
        position: {
          across: state.position.across + velocity2.across * delta,
          downhill: state.position.downhill + velocity2.downhill * delta
        },
        rearEdge,
        skid: 1,
        slopeGrade,
        speed: Math.hypot(velocity2.across, velocity2.downhill),
        surface,
        velocity: velocity2
      });
    }
    const projectedPosition = {
      across: state.position.across + state.velocity.across * delta,
      downhill: state.position.downhill + state.velocity.downhill * delta
    };
    const terrain = sampleSnowTerrain(projectedPosition, surface);
    const terrainVerticalSpeed = delta > 0 ? (terrain.height - state.terrainHeight) / delta : 0;
    const bumpTarget = grounded ? clamp6(
      Math.abs(terrainVerticalSpeed) * (0.09 + state.speed * 4e-3) * terrain.roughness * (1 - crouch * 0.5),
      0,
      1
    ) : 0;
    const bumpImpact = state.bumpImpact + (bumpTarget - state.bumpImpact) * blend(bumpTarget > state.bumpImpact ? 18 : 9, delta);
    const bodyHeaveTarget = clamp6(terrain.height, state.bodyHeave - 0.4, state.bodyHeave + 0.4);
    const bodyHeave = state.bodyHeave + (bodyHeaveTarget - state.bodyHeave) * blend(3.4, delta);
    const frontFootPressure = clamp6(
      (surface === "powder" ? 0.43 : 0.54) - pressAmount * 0.24 + Math.abs(carve - state.lean) * 0.17,
      0.16,
      0.84
    );
    const noseFloat = surface === "powder" && grounded ? clamp6(state.speed / 24 * 0.7 + (1 - frontFootPressure) * 0.9 - 0.24, 0, 1) : 0;
    const steerHold = Math.abs(steer) > 0.05 ? Math.sign(steer) === Math.sign(state.steer) ? state.steerHold + delta : delta : 0;
    const buttering = grounded && crouch > 0.62 && Math.abs(steer) > 0.3;
    const wasButtering = state.butter > 0.5 && Math.abs(state.steer) > 0.3;
    const butterTarget = buttering ? 1 : 0;
    const butter = state.butter + (butterTarget - state.butter) * blend(butterTarget > state.butter ? 12 : 10, delta);
    const newFlick = grounded && !buttering && Math.abs(steer) > 0.05 && Math.sign(steer) !== Math.sign(state.steer);
    let flickBrake = newFlick ? 0.1 : state.flickBrake;
    const flickBrakeStep = Math.min(delta, flickBrake);
    flickBrake = Math.max(0, flickBrake - delta);
    const boardLightness = newFlick ? 1 : state.boardLightness * Math.exp(-5 * delta);
    let flickRecovery = Math.max(0, state.flickRecovery - delta);
    if (Math.abs(steer) < 0.05 && Math.abs(state.steer) > 0.05) {
      flickRecovery = 0.3;
    }
    let boardOffset = state.boardOffset;
    let switchRiding = state.switchRiding;
    if (grounded && buttering) {
      boardOffset += steer * (4.2 + Math.abs(pressAmount) * 0.5) * delta;
    } else if (grounded && wasButtering && Math.abs(steer) < 0.05) {
      const halfTurns = Math.round(boardOffset / Math.PI);
      if (Math.abs(halfTurns) % 2 === 1) switchRiding = !switchRiding;
      boardOffset -= halfTurns * Math.PI;
      boardOffset -= clamp6(boardOffset, -9.2 * delta, 9.2 * delta);
    } else if (grounded && Math.abs(steer) > 0.05) {
      const heldSlash = clamp6((steerHold - 0.08) / 0.22, 0, 1);
      const targetOffset = steer * (0.92 + heldSlash * 0.48);
      const boardRate = 2.1 + 7.1 * boardLightness * (1 - edgeAmount * 0.55 - crouchAmount * 0.35);
      boardOffset += clamp6(targetOffset - boardOffset, -boardRate * delta, boardRate * delta);
    } else if (grounded) {
      boardOffset -= clamp6(boardOffset, -9.2 * delta, 9.2 * delta);
    }
    const speedForForces = Math.max(state.speed, 1e-3);
    const travel = {
      across: state.velocity.across / speedForForces,
      downhill: state.velocity.downhill / speedForForces
    };
    const turnSide = { across: travel.downhill, downhill: -travel.across };
    const radius = 18 - edgeAmount * 12;
    const requestedCarveForce = edgeAmount * speedForForces ** 2 / radius;
    const gripLimit = EARTH_GRAVITY * profile.edgeGrip * (0.6 + edgeAmount * 1.6) * (1 + crouchAmount * 0.16);
    const washout = grounded && surface !== "rail" && requestedCarveForce > 0 ? clamp6((requestedCarveForce - gripLimit) / requestedCarveForce, 0, 1) : 0;
    const crossHillLimit = 1 - clamp6((Math.abs(state.heading) - 1.05) / 0.38, 0, 1);
    const carveForce = grounded && surface !== "rail" ? Math.sign(edge) * Math.min(requestedCarveForce, gripLimit) * crossHillLimit : 0;
    const sidewaysForce = grounded && !buttering && surface !== "rail" ? clamp6(
      -lateralSpeed * profile.baseGrip * (0.12 + clamp6((steerHold - 0.16) / 0.32, 0, 1) * 0.08),
      -2,
      2
    ) : 0;
    const heldSkid = clamp6((steerHold - 0.14) / 0.3, 0, 1);
    const skidBrake = grounded && !buttering ? heldSkid * (1.4 + Math.abs(boardOffset) * 1.5) * profile.skid : 0;
    const powderSink = surface === "powder" ? 1 - noseFloat : 0;
    const pumpGain = grounded && terrain.slope < -0.05 && state.crouchAmount > crouchAmount && !buttering ? (state.crouchAmount - crouchAmount) * 1.4 * clamp6(-terrain.slope / 0.15, 0, 1) : 0;
    const baseFriction = grounded ? profile.drag * (0.22 + powderSink * 0.24 + Math.abs(pressAmount) * 0.05) : 0;
    const airDrag = grounded ? state.speed ** 2 * 32e-4 * (1 - crouchAmount * 0.35) : 0;
    const flickBrakeForce = grounded && !buttering && flickBrakeStep > 0 && delta > 0 ? state.speed * 0.06 * flickBrakeStep / (0.1 * delta) : 0;
    const dragForce = baseFriction + airDrag + skidBrake + flickBrakeForce;
    const acceleration = grounded ? {
      across: turnSide.across * carveForce + boardSide.across * sidewaysForce - travel.across * dragForce - EARTH_GRAVITY * terrain.roll * 0.18,
      downhill: EARTH_GRAVITY * Math.sin(slopeGrade) + turnSide.downhill * carveForce + boardSide.downhill * sidewaysForce - travel.downhill * dragForce
    } : { across: 0, downhill: 0 };
    let velocity = grounded ? {
      across: state.velocity.across + acceleration.across * delta + travel.across * pumpGain,
      downhill: state.velocity.downhill + acceleration.downhill * delta + travel.downhill * pumpGain
    } : { ...state.velocity };
    let speed = Math.hypot(velocity.across, velocity.downhill);
    if (grounded && (speed < MIN_SPEED || speed > MAX_SPEED2)) {
      const adjusted = clamp6(speed, MIN_SPEED, MAX_SPEED2);
      const ratio = adjusted / Math.max(speed, 1e-3);
      velocity = { across: velocity.across * ratio, downhill: velocity.downhill * ratio };
      speed = adjusted;
    }
    const heading = Math.atan2(velocity.across, velocity.downhill);
    const turnRate = grounded && delta > 0 ? normalizeAngle(heading - state.heading) / delta : state.turnRate;
    let boardYaw = grounded ? normalizeAngle(heading + (switchRiding ? Math.PI : 0) + boardOffset) : state.boardYaw;
    let spinVelocity = grounded ? 0 : state.spinVelocity;
    const canJump = grounded && finiteOr2(input.jump, 0) > 0;
    const terrainLaunchCooldown = Math.max(0, state.terrainLaunchCooldown - delta);
    const terrainLaunch = grounded && surface !== "rail" && terrainLaunchCooldown <= 0 && state.speed > 20 && (crouch < 0.65 || canJump) && state.terrainPitch > 0.1 && terrain.slope < 0;
    let popCharge = grounded ? state.popCharge + (crouch - state.popCharge) * blend(4.5, delta) : state.popCharge;
    let verticalVelocity = canJump ? 2.67 + popCharge * 1.95 + Math.max(0, finiteOr2(environment.lipVelocity, 0)) : state.verticalVelocity;
    let launchCooldown = terrainLaunchCooldown;
    if (terrainLaunch) {
      const crestKick = clamp6(state.speed * 0.055 + bumpImpact * 0.7, 1.1, 2.35);
      verticalVelocity = canJump ? verticalVelocity + crestKick * 0.4 : Math.max(verticalVelocity, crestKick);
      launchCooldown = 0.7;
    }
    if (canJump) {
      spinVelocity = clamp6(carve * 6.7 + turnRate * 0.25, -7, 7);
      popCharge = 0;
    }
    let air = state.air;
    let airtime = state.airtime;
    let compression = Math.max(state.compression * Math.exp(-8 * delta), bumpImpact * 0.72);
    let landingImpact = state.landingImpact * Math.exp(-4 * delta);
    let crashed = false;
    let crashReason = null;
    let crashSpin = 0;
    let crashTimer = 0;
    let skid = state.skid;
    if (air > 0 || verticalVelocity > 0) {
      if (state.air > 0) {
        spinVelocity = clamp6(spinVelocity + carve * 0.75 * delta, -7, 7);
        const spinShape = 1 + crouch * 0.5 - (airtime > 0.2 ? stretch * 0.35 : 0);
        boardYaw = normalizeAngle(boardYaw + spinVelocity * spinShape * delta);
        airtime += delta;
      } else {
        airtime = 0;
      }
      air += verticalVelocity * delta - terrainVerticalSpeed * delta;
      verticalVelocity -= AIR_GRAVITY * delta;
      if (air <= 0) {
        const wasAirborne = state.air > 0;
        air = 0;
        if (wasAirborne) {
          const impactSpeed = Math.max(0, terrainVerticalSpeed - verticalVelocity) * Math.cos(slopeGrade * 0.7);
          const cushioning = surface === "powder" ? 0.72 : surface === "ice" ? 1.2 : 1;
          landingImpact = (1 + impactSpeed ** 2 / (2 * EARTH_GRAVITY * 0.4)) * cushioning;
          compression = Math.max(compression, clamp6(landingImpact / 6, 0.55, 1));
          const boardToTravel = Math.abs(normalizeAngle(boardYaw - heading));
          const landingAlignment = Math.min(boardToTravel, Math.abs(Math.PI - boardToTravel));
          switchRiding = boardToTravel > Math.PI / 2;
          const crashAngle = surface === "powder" ? 0.95 : Math.PI / 4;
          const impactLimit = 9 + crouchAmount * 1.5;
          if (landingAlignment > crashAngle || landingImpact > impactLimit) {
            crashed = true;
            crashReason = landingAlignment > crashAngle ? "landing-edge" : "landing-impact";
            crashSpin = Math.sign(normalizeAngle(boardYaw - heading)) || 1;
            crashTimer = CRASH_RECOVERY;
          } else if (landingAlignment > Math.PI / 18 || landingImpact > 3) {
            const correction = clamp6(landingAlignment / crashAngle, 0, 1);
            skid = Math.max(skid, 0.35 + correction * 0.4);
            flickRecovery = 0.3;
            const retention = 1 - correction * 0.08 - clamp6((landingImpact - 3) * 0.018, 0, 0.1);
            velocity = {
              across: velocity.across * retention,
              downhill: velocity.downhill * retention
            };
            speed = Math.hypot(velocity.across, velocity.downhill);
            if (speed < MIN_SPEED) {
              const ratio = MIN_SPEED / Math.max(speed, 1e-3);
              velocity = { across: velocity.across * ratio, downhill: velocity.downhill * ratio };
              speed = MIN_SPEED;
            }
          }
          boardOffset = normalizeAngle(boardYaw - heading - (switchRiding ? Math.PI : 0));
        }
        verticalVelocity = 0;
        spinVelocity = 0;
        airtime = 0;
      }
    }
    if (terrainLaunch) launchCooldown = 0.7;
    const slipAngle = normalizeAngle(boardYaw - heading);
    const skidTarget = grounded ? clamp6(
      Math.abs(boardOffset) / 1.5 * (0.3 + heldSkid * 0.4) * (1 - (Math.sign(edge) === Math.sign(steer) ? edgeAmount * 0.35 : 0)) + washout * 0.6,
      0,
      0.95
    ) : 0;
    skid = Math.max(skid, state.skid + (skidTarget - state.skid) * blend(10, delta));
    if (grounded && skidTarget < state.skid) {
      skid = Math.max(0, state.skid + (skidTarget - state.skid) * blend(10, delta));
    }
    const carveQuality = grounded && surface !== "rail" ? clamp6(
      edgeAmount * 1.6 * (1 - washout * 0.7) * (1 - clamp6(Math.abs(boardOffset) / 0.7, 0, 1) * 0.85),
      0,
      1
    ) : 0;
    const slashTarget = grounded ? clamp6((newFlick ? 1 : 0) + Math.abs(steer) * skid * 0.5, 0, 1) : 0;
    const slash = newFlick ? 1 : state.slash + (slashTarget - state.slash) * blend(slashTarget > state.slash ? 28 : 11, delta);
    const chatter = grounded ? clamp6(
      terrain.roughness * (0.12 + speed / MAX_SPEED2 * 0.38) + edgeAmount * (1 - profile.edgeGrip) * 0.55,
      0,
      1
    ) : 0;
    const desiredTorsoYaw = normalizeAngle(
      air > 0 ? boardYaw - spinVelocity * 0.1 : heading + (switchRiding ? Math.PI : 0)
    );
    const torsoYaw = normalizeAngle(
      state.torsoYaw + normalizeAngle(desiredTorsoYaw - state.torsoYaw) * blend(air > 0 ? 12 : 5, delta)
    );
    const boardRotation = state.boardRotation + normalizeAngle(boardYaw - state.boardYaw);
    const torsoRotation = state.torsoRotation + normalizeAngle(torsoYaw - state.torsoYaw);
    const tweakTarget = air > 0 ? steer : 0;
    const tweak = state.tweak + (tweakTarget - state.tweak) * blend(Math.abs(tweakTarget) > Math.abs(state.tweak) ? 18 : 14, delta);
    return freezeState({
      air,
      airtime,
      boardLightness,
      boardOffset,
      boardRotation,
      boardYaw,
      bodyHeave,
      bumpImpact,
      butter,
      carveQuality,
      chatter,
      compression,
      crouchAmount,
      crashed,
      crashReason,
      crashSpin,
      crashTimer,
      edge,
      elapsed: state.elapsed + delta,
      flickBrake,
      flickRecovery,
      frontEdge,
      frontFootPressure,
      gForce: clamp6(Math.abs(carveForce) / EARTH_GRAVITY, 0, 1.8),
      heading,
      landingImpact,
      lean,
      noseFloat,
      popCharge,
      position: {
        across: state.position.across + velocity.across * delta,
        downhill: state.position.downhill + velocity.downhill * delta
      },
      pressAmount,
      rearEdge,
      skid,
      slash,
      slipAngle,
      slopeGrade,
      speed,
      spinVelocity,
      stance: state.stance,
      steer,
      steerHold,
      surface,
      switchRiding,
      turnRate,
      tweak,
      terrainHeight: terrain.height,
      terrainLaunchCooldown: launchCooldown,
      terrainPitch: terrain.slope,
      terrainRoll: terrain.roll,
      torsoYaw,
      torsoRotation,
      velocity,
      verticalVelocity,
      washout
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
    const airborne = clamp7(finiteOr3(pose.airborne), 0, 1);
    const foreAft = clamp7(finiteOr3(pose.foreAft), -1, 1);
    const jumpStretch = clamp7(finiteOr3(pose.jumpStretch), 0, 1);
    const lean = clamp7(finiteOr3(pose.lean), -1, 1);
    const toeSide = pose.toeSide !== false;
    const twist = clamp7(finiteOr3(pose.upperBodyTwist), -1, 1);
    const boardAngle = clamp7(finiteOr3(pose.boardRoll), -Math.PI, Math.PI);
    const boardPitch = clamp7(finiteOr3(pose.boardPitch), -0.6, 0.6);
    const butter = clamp7(finiteOr3(pose.butter), 0, 1);
    const press = clamp7(finiteOr3(pose.press), -1, 1);
    const noseLift = Math.max(0, press) * 18;
    const tailLift = Math.max(0, -press) * 18;
    const handDrag = clamp7(finiteOr3(pose.handDrag), 0, 1);
    const grab = clamp7(finiteOr3(pose.grab), 0, 1);
    const scarfFlutter = clamp7(finiteOr3(pose.scarfFlutter), -1, 1);
    const bob = finiteOr3(pose.bob) * 20;
    const boardBob = finiteOr3(pose.boardBob, finiteOr3(pose.bob)) * 20;
    const kneeBob = bob * 0.42 + boardBob * 0.58;
    const boardShear = Math.sin(boardAngle) * 8;
    const stanceDirection = (pose.stance === "goofy" ? -1 : 1) * (pose.switchRiding ? -1 : 1);
    const hipCenter = point(
      lean * (toeSide ? 16 : 11),
      -2 + crouch * 14 - jumpStretch * 5 - foreAft * 5 + butter * 4 + (toeSide ? 0 : Math.abs(lean) * 3) + bob
    );
    const leftAnkle = point(-2 + boardShear * 0.1, -23 - noseLift * 0.35 + boardBob);
    const rightAnkle = point(2 - boardShear * 0.1, 24 - tailLift * 0.35 + boardBob);
    const leftKnee = point(-9 + lean * 5, -9 + crouch * 7 + kneeBob);
    const rightKnee = point(9 + lean * 5, 10 + crouch * 5 + kneeBob);
    const leftHip = point(hipCenter.x - 7, hipCenter.y - 2);
    const rightHip = point(hipCenter.x + 7, hipCenter.y + 2);
    const shoulderCenter = point(
      hipCenter.x + lean * (toeSide ? 14 : 8) + twist * 5,
      hipCenter.y - 29 + crouch * 14 - jumpStretch * 8 + (toeSide ? Math.abs(lean) * 2 : 0)
    );
    const leftShoulder = point(shoulderCenter.x - 15, shoulderCenter.y + 3);
    const rightShoulder = point(shoulderCenter.x + 15, shoulderCenter.y - 3);
    const dragLeft = lean < 0 ? handDrag : 0;
    const dragRight = lean >= 0 ? handDrag : 0;
    const leftHand = point(
      hipCenter.x - 21 + twist * 8,
      hipCenter.y + 12 + crouch * 9 - airborne * 3 + dragLeft * 22
    );
    const rightHand = point(
      hipCenter.x + 21 + twist * 8 - grab * 10,
      hipCenter.y + 12 + crouch * 9 - airborne * 3 + dragRight * 22 + grab * 9
    );
    const headCenter = point(
      shoulderCenter.x + lean * 8,
      shoulderCenter.y - 15 - jumpStretch * 3
    );
    return Object.freeze([
      polygon(
        "board",
        "board",
        [
          point(boardShear, -60 + boardPitch * 10 - noseLift + boardBob),
          point(11 + boardShear * 0.72, -48 + boardPitch * 6 - noseLift * 0.7 + boardBob),
          point(13 - boardShear * 0.65, 44 + boardBob),
          point(7 - boardShear, 58 - boardPitch * 3 - tailLift + boardBob),
          point(-7 - boardShear, 58 - boardPitch * 3 - tailLift + boardBob),
          point(-13 - boardShear * 0.65, 44 + boardBob),
          point(-11 + boardShear * 0.72, -48 + boardPitch * 6 - noseLift * 0.7 + boardBob)
        ]
      ),
      polygon(
        "board-inset",
        "boardShadow",
        [
          point(boardShear * 0.7, -46 + boardBob),
          point(5 + boardShear * 0.4, -39 + boardBob),
          point(6 - boardShear * 0.4, 43 + boardBob),
          point(-6 - boardShear * 0.4, 43 + boardBob),
          point(-5 + boardShear * 0.4, -39 + boardBob)
        ]
      ),
      polygon("board-stripe", "boardAccent", [
        point(boardShear * 0.65, -41 + boardBob),
        point(3 + boardShear * 0.35, -35 + boardBob),
        point(3 - boardShear * 0.2, 40 + boardBob),
        point(-3 - boardShear * 0.2, 40 + boardBob),
        point(-3 + boardShear * 0.35, -35 + boardBob)
      ]),
      ...airborne > 0.12 ? [polygon("board-underside", "boardUnderside", [
        point(11 + boardShear * 0.72, -48 + boardBob),
        point(16 + boardShear * 0.6, -43 + boardBob),
        point(18 - boardShear * 0.65, 46 + boardBob),
        point(7 - boardShear, 58 + boardBob),
        point(13 - boardShear * 0.65, 44 + boardBob)
      ])] : [],
      polygon(
        "left-boot",
        "boots",
        rotatedRectangle(
          leftAnkle.x,
          leftAnkle.y,
          29,
          9,
          -0.28 * stanceDirection + boardAngle * 0.1
        )
      ),
      polygon(
        "right-boot",
        "boots",
        rotatedRectangle(
          rightAnkle.x,
          rightAnkle.y,
          29,
          9,
          0.28 * stanceDirection + boardAngle * 0.1
        )
      ),
      polygon("left-leg", "pantsShadow", limb(leftAnkle, leftKnee, leftHip, 8.5)),
      polygon("right-leg", "pants", limb(rightAnkle, rightKnee, rightHip, 8.5)),
      polygon("torso", "jacket", [
        leftHip,
        leftShoulder,
        rightShoulder,
        rightHip
      ]),
      polygon("back-panel", "jacketShadow", [
        point(shoulderCenter.x - 4, shoulderCenter.y),
        point(shoulderCenter.x + 12, shoulderCenter.y - 1),
        point(hipCenter.x + 5, hipCenter.y),
        point(hipCenter.x - 2, hipCenter.y - 1)
      ]),
      polygon("jacket-skirt", "jacket", [
        point(leftHip.x - 2, leftHip.y - 2),
        point(rightHip.x + 3, rightHip.y + 1),
        point(rightHip.x + 5, rightHip.y + 10),
        point(hipCenter.x, hipCenter.y + 13),
        point(leftHip.x - 4, leftHip.y + 8)
      ]),
      polygon("jacket-stripe", "jacketAccent", [
        point(leftShoulder.x + 4, leftShoulder.y + 4),
        point(rightShoulder.x - 4, rightShoulder.y + 1),
        point(rightShoulder.x - 4, rightShoulder.y + 7),
        point(leftShoulder.x + 4, leftShoulder.y + 10)
      ]),
      polygon("left-arm", "jacketShadow", segment(leftShoulder, leftHand, 8)),
      polygon("right-arm", "jacket", segment(rightShoulder, rightHand, 8)),
      polygon("left-mitt", "mitts", rotatedRectangle(leftHand.x, leftHand.y, 8, 10, -0.18)),
      polygon("right-mitt", "mitts", rotatedRectangle(rightHand.x, rightHand.y, 8, 10, 0.18)),
      polygon("head", "helmet", [
        point(headCenter.x - 8, headCenter.y - 6),
        point(headCenter.x, headCenter.y - 10),
        point(headCenter.x + 9, headCenter.y - 5),
        point(headCenter.x + 8, headCenter.y + 6),
        point(headCenter.x, headCenter.y + 10),
        point(headCenter.x - 9, headCenter.y + 5)
      ]),
      polygon("helmet-panel", "helmetShadow", [
        point(headCenter.x - 7, headCenter.y - 5),
        point(headCenter.x, headCenter.y - 9),
        point(headCenter.x + 7, headCenter.y - 4),
        point(headCenter.x + 3, headCenter.y),
        point(headCenter.x - 5, headCenter.y)
      ]),
      polygon("goggle-strap", "goggleStrap", [
        point(headCenter.x - 9, headCenter.y - 1),
        point(headCenter.x + 9, headCenter.y - 1),
        point(headCenter.x + 8, headCenter.y + 3),
        point(headCenter.x - 8, headCenter.y + 3)
      ]),
      polygon("goggle-lens", "goggleLens", [
        point(headCenter.x - 6, headCenter.y - 2),
        point(headCenter.x + 7, headCenter.y - 2),
        point(headCenter.x + 5, headCenter.y + 2),
        point(headCenter.x - 5, headCenter.y + 2)
      ]),
      polygon("scarf", "scarf", [
        point(shoulderCenter.x + 7, shoulderCenter.y - 10),
        point(shoulderCenter.x + 15, shoulderCenter.y - 8),
        point(
          shoulderCenter.x + 21 + lean * 4 + scarfFlutter * 5,
          shoulderCenter.y + 10 - airborne * 5 - Math.abs(scarfFlutter) * 4
        ),
        point(shoulderCenter.x + 11, shoulderCenter.y + 2)
      ])
    ]);
  }

  // src/rider/renderer.js
  var PROTOTYPE_RIDER_PALETTE = Object.freeze({
    board: "#18364f",
    boardAccent: "#61e2e8",
    boardShadow: "#2b6e80",
    boardUnderside: "#f5a357",
    boots: "#152536",
    carveTrace: "rgba(71, 125, 148, 0.58)",
    flatTrace: "rgba(116, 174, 194, 0.18)",
    goggleLens: "#89f0eb",
    goggleStrap: "#10243a",
    helmet: "#20354a",
    helmetShadow: "#10243a",
    jacket: "#ef7954",
    jacketAccent: "#ffe3af",
    jacketShadow: "#bc5147",
    mitts: "#17283a",
    pants: "#183c54",
    pantsShadow: "#10283b",
    powderTrace: "rgba(85, 159, 185, 0.24)",
    pressTrace: "rgba(71, 125, 148, 0.32)",
    scarf: "#f6cd75",
    shadow: "rgba(15, 42, 58, 0.24)",
    skidTrace: "rgba(116, 174, 194, 0.3)",
    snowSpray: "#ffffff"
  });
  var clamp8 = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));
  var normalizeAngle2 = (angle) => Math.atan2(Math.sin(angle), Math.cos(angle));
  function getJumpLift(canvas, air = 0) {
    const displayHeight = canvas.getBoundingClientRect?.().height || canvas.height;
    const pixelRatio = clamp8(canvas.height / Math.max(1, displayHeight), 1, 2);
    return Math.max(0, air) * 42 * pixelRatio;
  }
  function drawSnowSpray2(context, options = {}) {
    const {
      direction = 1,
      intensity = 0,
      palette = PROTOTYPE_RIDER_PALETTE,
      scale = 1,
      surface = "groomed",
      x = 0,
      y = 0
    } = options;
    if (intensity < 0.05) return;
    context.save();
    context.translate(x, y);
    context.scale(scale, scale);
    context.fillStyle = palette.snowSpray;
    const count = surface === "powder" ? 12 : surface === "ice" ? 4 : 7;
    const size = surface === "powder" ? 1.65 : surface === "slush" ? 1.3 : 1;
    for (let particle = 0; particle < count; particle += 1) {
      const progress = (particle + 1) / count;
      const spread = (7 + particle * 5) * direction;
      context.globalAlpha = intensity * (0.72 - progress * 0.42);
      context.beginPath();
      context.ellipse(
        spread,
        8 + particle * 2.4,
        (2.5 + intensity * 4 * (1 - progress * 0.45)) * size,
        (1.6 + intensity * 2.5 * (1 - progress * 0.5)) * size,
        direction * -0.28,
        0,
        Math.PI * 2
      );
      context.fill();
    }
    context.restore();
  }
  function drawLowPolyRider(context, model, options = {}) {
    const {
      boardTweak = 0,
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
      const isBoard = polygon2.part.startsWith("board") || polygon2.part.endsWith("boot");
      const isLeg = polygon2.part.endsWith("leg");
      const partTweak = isBoard ? boardTweak : isLeg ? boardTweak * 0.45 : 0;
      const [firstPoint, ...remainingPoints] = polygon2.points;
      context.save();
      context.rotate(partTweak);
      context.beginPath();
      context.moveTo(firstPoint.x, firstPoint.y);
      for (const point2 of remainingPoints) {
        context.lineTo(point2.x, point2.y);
      }
      context.closePath();
      context.fillStyle = palette[polygon2.tone] ?? palette.jacket;
      context.fill();
      context.restore();
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
        const zoom = clamp8(Number(camera.zoom) || 1, 0.82, 1);
        const viewportScale = clamp8(
          Math.min(canvas.width / 700, canvas.height / 500),
          1.1,
          2.4
        ) * zoom;
        const cameraLag = (state.position.across - camera.position.across) * 14 * zoom;
        const jumpLift = getJumpLift(canvas, state.air);
        const riderX = canvas.width / 2 + cameraLag;
        const groundY = canvas.height * 0.78 + (Number(camera.dip) || 0) * 9;
        const shadowScale = 1 - clamp8((state.air ?? 0) / 3.5, 0, 0.55);
        context.save();
        context.translate(canvas.width / 2, canvas.height / 2);
        context.rotate(-(Number(camera.roll) || 0));
        context.translate(-canvas.width / 2, -canvas.height / 2);
        drawSnowSpray2(context, {
          direction: -Math.sign(state.slipAngle || state.edge || 1),
          intensity: pose.spray,
          palette,
          scale: viewportScale,
          surface: state.surface,
          x: riderX,
          y: groundY + 4 * viewportScale
        });
        context.save();
        context.fillStyle = palette.shadow;
        context.beginPath();
        context.ellipse(
          riderX,
          groundY + 10 * viewportScale,
          24 * viewportScale * shadowScale,
          7 * viewportScale * shadowScale,
          0,
          0,
          Math.PI * 2
        );
        context.fill();
        context.restore();
        drawLowPolyRider(context, buildLowPolyRider(pose), {
          boardTweak: (pose.boardBodyRotation ?? normalizeAngle2(pose.boardYaw - pose.bodyYaw)) * 0.78 + pose.boardTweak,
          palette,
          rotation: (pose.airborne > 0 ? pose.bodySpin : clamp8(normalizeAngle2(pose.bodyYaw) * 0.12 + pose.lean * 0.08, -0.4, 0.4)) + pose.fallRotation,
          scale: viewportScale,
          x: riderX,
          y: groundY - jumpLift
        });
        context.restore();
      }
    });
  }

  // src/rider/index.js
  var PHYSICS_STEP = 1 / 120;
  var clamp9 = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));
  var setRiderSpeed = (state, targetSpeed) => {
    if (!Number.isFinite(targetSpeed) || targetSpeed <= 0 || state.crashed) return state;
    const currentSpeed = Math.hypot(state.velocity.across, state.velocity.downhill);
    const ratio = targetSpeed / Math.max(currentSpeed, 1e-3);
    return createRiderState({
      ...state,
      velocity: {
        across: state.velocity.across * ratio,
        downhill: state.velocity.downhill * ratio
      }
    });
  };
  async function setupRider(game2) {
    const keyboard = createKeyboardControls(window);
    const renderer = createRiderRenderer(game2.canvas);
    let environment = Object.freeze({ surface: "powder" });
    let stance = "regular";
    let camera = createCameraState();
    let externalInput = Object.freeze({ carve: 0, crouch: 0, press: 0, steer: 0, stretch: 0 });
    let queuedExternalJump = false;
    let pendingJump = 0;
    let pendingPace;
    let paceHold = 0;
    let paceTarget = 0;
    let physicsRemainder = 0;
    let previousTimestamp;
    let state = createRiderState({ surface: environment.surface });
    game2.events.addEventListener("rider:input", (event) => {
      if (Number(event.detail?.jump) > 0) queuedExternalJump = true;
      externalInput = Object.freeze({
        carve: clamp9(Number(event.detail?.carve) || 0, -1, 1),
        crouch: clamp9(Number(event.detail?.crouch) || 0, 0, 1),
        press: clamp9(Number(event.detail?.press) || 0, -1, 1),
        steer: clamp9(Number(event.detail?.steer) || 0, -1, 1),
        stretch: clamp9(Number(event.detail?.stretch) || 0, 0, 1)
      });
    });
    game2.events.addEventListener("rider:surface", (event) => {
      environment = Object.freeze({
        slopeGrade: Number.isFinite(event.detail?.slopeGrade) ? event.detail.slopeGrade : void 0,
        surface: event.detail?.surface ?? environment.surface
      });
    });
    game2.events.addEventListener("rider:pace", (event) => {
      if (!Number.isFinite(event.detail?.targetSpeed)) return;
      pendingPace = {
        holdSeconds: Math.max(0, Number(event.detail?.holdSeconds) || 0),
        targetSpeed: clamp9(event.detail.targetSpeed, 12, 34)
      };
    });
    game2.events.addEventListener("rider:stance", (event) => {
      stance = event.detail?.stance === "goofy" ? "goofy" : "regular";
      state = createRiderState({ ...state, stance });
    });
    game2.events.addEventListener("rider:reset", (event) => {
      camera = createCameraState();
      previousTimestamp = void 0;
      queuedExternalJump = false;
      pendingJump = 0;
      pendingPace = void 0;
      paceHold = 0;
      paceTarget = 0;
      physicsRemainder = 0;
      state = createRiderState({
        speed: Number(event.detail?.speed) || 16,
        stance,
        surface: environment.surface
      });
    });
    const update = (timestamp) => {
      const keyboardInput = keyboard.read();
      const input = Object.freeze({
        carve: clamp9(keyboardInput.carve + externalInput.carve, -1, 1),
        crouch: Math.max(keyboardInput.crouch, externalInput.crouch),
        jump: Math.max(keyboardInput.jump, Number(queuedExternalJump)),
        press: clamp9(keyboardInput.press + externalInput.press, -1, 1),
        steer: clamp9(keyboardInput.steer + externalInput.steer, -1, 1),
        stretch: Math.max(keyboardInput.stretch, externalInput.stretch)
      });
      queuedExternalJump = false;
      const deltaSeconds = previousTimestamp === void 0 ? 0 : clamp9((timestamp - previousTimestamp) / 1e3, 0, 0.1);
      previousTimestamp = timestamp;
      if (pendingPace && state.air <= 0.08) {
        state = setRiderSpeed(state, pendingPace.targetSpeed);
        paceTarget = pendingPace.targetSpeed;
        paceHold = pendingPace.holdSeconds;
        pendingPace = void 0;
      }
      const wasCrashed = state.crashed;
      pendingJump = Math.max(pendingJump, input.jump);
      physicsRemainder += deltaSeconds;
      let launched = 0;
      while (physicsRemainder + 1e-9 >= PHYSICS_STEP) {
        launched = Math.max(launched, pendingJump);
        state = stepRider(
          state,
          { ...input, jump: pendingJump },
          PHYSICS_STEP,
          environment
        );
        if (paceHold > 0 && state.speed > paceTarget) {
          state = setRiderSpeed(state, paceTarget);
        }
        paceHold = Math.max(0, paceHold - PHYSICS_STEP);
        pendingJump = 0;
        physicsRemainder -= PHYSICS_STEP;
      }
      const frameInput = Object.freeze({ ...input, jump: launched });
      if (!wasCrashed && state.crashed) {
        game2.events.dispatchEvent(
          new CustomEvent("rider:crash", { detail: state })
        );
        if (state.crashReason === "edge-catch") {
          game2.events.dispatchEvent(
            new CustomEvent("rider:edge-catch", { detail: state })
          );
        }
      }
      camera = stepCamera(camera, state, deltaSeconds);
      const pose = getRiderPose(state, frameInput);
      renderer.beginFrame();
      game2.events.dispatchEvent(
        new CustomEvent("rider:update", {
          detail: Object.freeze({
            camera,
            input: frameInput,
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
