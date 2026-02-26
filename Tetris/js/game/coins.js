import { player } from '../data/config.js';

export { updateCoins };

function updateCoins() {
    document.getElementById('coins').innerText = player.coins;
}