import { player } from '../data/config.js';

export function updateCoins() {
    document.getElementById('coins').innerText = player.coins;
}