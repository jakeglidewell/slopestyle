/**
 * The rider's legs. The body aims for the hill's smooth line while the board
 * follows the true snow; legs with limited travel join the two.
 */
const GRAVITY = 9.81;
const MAX_SUBSTEP = 1 / 120;

/** Leg travel from the neutral stance, in metres: how far the legs fold and reach. */
export const LEG_COMPRESS = 0.42;
export const LEG_REACH = 0.45;

// Metres of fall line averaged into the smooth line. It matches the mountain's
// main ripple, so that ripple cancels; shorter ones mostly cancel, rollers pass.
const SMOOTH_SPAN = 16.5;
const SMOOTH_SAMPLES = 12;
// Before the legs run out of travel the body gives way and goes with the snow.
const CARRY_COMPRESS = 0.32;
const CARRY_REACH = 0.38;
// In free fall, rising away from the line it aims for and this far above it:
// the body has been thrown and the board has left the snow.
const THROWN_CLEAR = 0.25;
// The most upward speed, over the hill's own, that snow under folded legs hands
// to the body: a kicker's ramp passes whole, a steep ripple face does not buck.
const CARRY_KICK = 3.5;
const LEG_STIFFNESS = 9;
const LEG_DAMPING = 0.7;
// A held crouch folds under a lip: this share of the kick never reaches the body.
const SOAK_KICK = 0.85;
const AIR_LEG_SPEED = 2.5;
/** Where the legs rest in the air: a little tucked. */
export const AIR_LEG_TUCK = -0.12;

const clamp = (value, minimum, maximum) =>
  Math.min(maximum, Math.max(minimum, value));
const finiteOr = (value, fallback) =>
  Number.isFinite(value) ? value : fallback;
const moveToward = (value, target, distance) =>
  value + clamp(target - value, -distance, distance);

/** The hill's height with the ripples averaged out: the line the body rides. */
export function smoothHeight(heightAt, across, downhill) {
  let total = 0;
  for (let sample = 0; sample < SMOOTH_SAMPLES; sample += 1) {
    total += heightAt(across,
      downhill + ((sample + 0.5) / SMOOTH_SAMPLES - 0.5) * SMOOTH_SPAN);
  }
  return total / SMOOTH_SAMPLES;
}

/**
 * Advance the body and legs by one step.
 *
 * legs:     { onSnow, ride, height, velocity, leg }. On snow `ride` is the body's
 *           height above the smooth line; in the air `height` is its world height
 *           and `leg` how far the legs are extended. `velocity` is vertical, world.
 * ground:   { snowFrom, snowTo, carryFrom, carryTo }: the snow and the smooth line
 *           under the rider at the start and end of the step.
 * controls: { soak, airTarget }: how much of a lip's kick a held crouch soaks up
 *           (0..1), and where the legs go in the air.
 *
 * Returns the new legs plus `air` (board clearance), `load` (the snow's mean push
 * in g), `liftoff`, and `touchdown` when the board lands ({ closing }: how fast
 * the body met the hill's smooth line, in m/s).
 */
export function stepLegs(legs, ground, controls = {}, deltaSeconds = 0) {
  const delta = Math.max(0, finiteOr(deltaSeconds, 0));
  const soak = clamp(finiteOr(controls.soak, 0), 0, 1);
  const airTarget = clamp(finiteOr(controls.airTarget, AIR_LEG_TUCK),
    -LEG_COMPRESS, LEG_REACH);
  let onSnow = Boolean(legs.onSnow);
  let velocity = finiteOr(legs.velocity, 0);
  let leg = clamp(finiteOr(legs.leg, 0), -LEG_COMPRESS, LEG_REACH);
  let height = onSnow
    ? clamp(ground.carryFrom + finiteOr(legs.ride, 0),
      ground.snowFrom - LEG_COMPRESS, ground.snowFrom + LEG_REACH)
    : finiteOr(legs.height, ground.snowFrom);
  let snow = ground.snowFrom;
  let carry = ground.carryFrom;
  let pushed = 0;
  let liftoff = false;
  let touchdown = null;

  const steps = delta > 0 ? Math.max(1, Math.ceil(delta / MAX_SUBSTEP - 1e-9)) : 0;
  const step = steps > 0 ? delta / steps : 0;
  const snowRate = delta > 0 ? (ground.snowTo - ground.snowFrom) / delta : 0;
  const carryRate = delta > 0 ? (ground.carryTo - ground.carryFrom) / delta : 0;
  const carried = (rate) => Math.min(rate, carryRate + CARRY_KICK);
  const aimAt = (snowHeight, carryHeight) => clamp(carryHeight,
    snowHeight - CARRY_COMPRESS, snowHeight + CARRY_REACH);

  for (let index = 0; index < steps; index += 1) {
    const aimFrom = aimAt(snow, carry);
    const progress = (index + 1) / steps;
    snow = ground.snowFrom + (ground.snowTo - ground.snowFrom) * progress;
    carry = ground.carryFrom + (ground.carryTo - ground.carryFrom) * progress;

    if (onSnow) {
      const aim = aimAt(snow, carry);
      const aimRate = carried((aim - aimFrom) / step);
      let acceleration = LEG_STIFFNESS ** 2 * (aimFrom - height) +
        2 * LEG_DAMPING * LEG_STIFFNESS * (aimRate - velocity);
      // Legs push; they cannot pull the body down.
      const falling = acceleration <= -GRAVITY;
      acceleration = Math.max(acceleration, -GRAVITY);
      velocity += acceleration * step;
      height += velocity * step;
      let push = acceleration + GRAVITY;
      if (height - snow < -LEG_COMPRESS) {
        const before = velocity;
        height = snow - LEG_COMPRESS;
        velocity = Math.max(velocity, carried(snowRate));
        push += (velocity - before) / step;
      }
      pushed += Math.max(0, push) / GRAVITY;
      const thrown = falling && velocity > aimRate && height - aim > THROWN_CLEAR;
      if (height - snow > LEG_REACH || thrown) {
        onSnow = false;
        liftoff = true;
        leg = clamp(height - snow, -LEG_COMPRESS, LEG_REACH);
        if (velocity > carryRate) {
          velocity = carryRate + (velocity - carryRate) * (1 - SOAK_KICK * soak);
        }
      }
    } else {
      velocity -= GRAVITY * step;
      height += velocity * step;
      leg = moveToward(leg, airTarget, AIR_LEG_SPEED * step);
      const bottomed = height - snow < -LEG_COMPRESS;
      // A crest that brushes the board while the body still rises is not a landing.
      if (bottomed || (height - leg <= snow && velocity <= carryRate)) {
        onSnow = true;
        touchdown ??= { closing: Math.max(0, carryRate - velocity) };
        if (bottomed) {
          height = snow - LEG_COMPRESS;
          velocity = Math.max(velocity, carried(snowRate));
        }
      }
    }
  }

  return {
    air: onSnow ? 0 : Math.max(0, height - leg - snow),
    height,
    leg: onSnow ? clamp(height - snow, -LEG_COMPRESS, LEG_REACH) : leg,
    liftoff,
    load: steps > 0 ? pushed / steps : onSnow ? 1 : 0,
    onSnow,
    ride: height - carry,
    touchdown,
    velocity,
  };
}
