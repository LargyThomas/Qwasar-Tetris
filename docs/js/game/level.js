// ============================================================
// level.js — Level progression system
// Generates the level table with point thresholds and
// coin rewards. Also handles the HUD level display.
// ============================================================

import { player } from '../data/config.js';

export { levels };

// Object that stores all generated levels.
// Key = level number, value = { points, coins }
let levels = {};

// Expose levels on window for easy debugging in the browser console
if (typeof window !== 'undefined') {
    window.levels = levels;
}

// Updates the level display in the HUD.
export function updateLevel() {
    document.getElementById('level').innerText = player.level;
}

// Generates all 500 levels with their point threshold
// and coin reward.
//
// Points formula : Math.round(100 * i^1.20)
// Coins formula  : Math.round(i^2.27)
//
// Examples :
//   Level 1  →   100 pts  |  1 coin
//   Level 2  →   230 pts  |  3 coins
//   Level 3  →   374 pts  |  8 coins
//   Level 5  →   690 pts  |  27 coins
//   Level 10 →  1585 pts  |  171 coins
export function createLevels() {
    for (let i = 1; i <= 500; i++) {
        levels[i] = {
            // Minimum score required to reach this level
            points: Math.round(100 * Math.pow(i, 1.20)),
            // Coins awarded when reaching this level
            coins: Math.round(Math.pow(i, 2.27))
        }
    }
}