import { player } from '../data/config.js';

export { updateScore };

function updateScore() {
    document.getElementById('score').innerText = player.score;
}