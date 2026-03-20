// ============================================================
// coins.js — Coins display
// Updates the coins counter shown in the HUD.
// ============================================================

import { player } from '../data/config.js';

// Reads the player's current coin count and displays
// it inside the #coins HTML element.
export function updateCoins() {
    document.getElementById('coins').innerText = player.coins;
}