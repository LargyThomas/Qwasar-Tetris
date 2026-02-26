import { player } from '../data/config.js';

function updateScore() {
    document.getElementById('score').innerText = player.score;
}