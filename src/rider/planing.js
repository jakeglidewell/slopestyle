// How far ahead of and behind its middle the board feels the snow, in metres:
// more than its own length, because it is moving and the snow gives.
const REACH = Object.freeze([-2.4, -1.2, 0, 1.2, 2.4]);
const LEVERAGE = REACH.reduce((sum, along) => sum + along * along, 0);
// Half the width it feels edge to edge.
const SIDE = 0.45;
// How deep it runs in the snow, and how far above the snow right under its
// middle it may ride before that snow starts to carry it: it cuts through crests
// freely but is never left hanging over a hollow.
const SINK = 0.05;
const OVER = 0.05;
// How gradually the one hands over to the other, in metres.
const BLEND = 0.06;

/**
 * Where the snow carries the board: `height` under its middle, and how far the
 * board is tipped nose-up (`pitch`) and toe-edge-up (`roll`), in radians.
 * `heightAt(across, downhill)` is the snow; `yaw` is the way the nose points.
 *
 * A board planes: it rides the lie of the snow along its whole length and cuts
 * through the ripples shorter than itself, rather than following the one spot
 * under its middle over every one of them.
 */
export function planeBoard(heightAt, across, downhill, yaw = 0) {
  const noseAcross = Math.sin(yaw);
  const noseDownhill = Math.cos(yaw);
  let mean = 0;
  let lever = 0;
  let cross = 0;
  for (const along of REACH) {
    const x = across + noseAcross * along;
    const d = downhill + noseDownhill * along;
    const height = heightAt(x, d);
    mean += height / REACH.length;
    lever += height * along;
    // The toe side is to the right of the nose.
    cross += (heightAt(x + noseDownhill * SIDE, d - noseAcross * SIDE) -
      heightAt(x - noseDownhill * SIDE, d + noseAcross * SIDE)) / (SIDE * 2) / REACH.length;
  }
  // The lower of the two, eased so the board never snaps from one to the other.
  const planed = mean - SINK;
  const carried = heightAt(across, downhill) + OVER;
  const height = (planed + carried - Math.hypot(planed - carried, BLEND)) / 2;
  return Object.freeze({ height, pitch: Math.atan(lever / LEVERAGE), roll: Math.atan(cross) });
}
