import { player } from '../data/config.js';

export function updateScore() {
    document.getElementById('score').innerText = player.score;
}