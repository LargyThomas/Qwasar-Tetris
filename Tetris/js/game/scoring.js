// ============================================================
// scoring.js — Score display
// Updates the score shown in the HUD.
// ============================================================

import { player } from '../data/config.js';

// Reads the player's current score and displays
// it inside the #score HTML element.
export function updateScore() {
    document.getElementById('score').innerText = player.score;
}