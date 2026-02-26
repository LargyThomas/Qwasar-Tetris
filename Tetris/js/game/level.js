// gestion des niv --> 500: dico de dico qui vont gérer les points en fesant une sorte d'exponentielle
let levels = {};

import { player } from '../data/config.js';

export { updateLevel, createLevels };

function updateLevel() {
    document.getElementById('level').innerText = player.level;
}

function createLevels() {
    for (let i = 1; i <= 500; i++) {
        levels[i] = { points: Math.round(100 * Math.pow(i, 1.5)),
            coins: Math.round(Math.pow(i, 2.27))
        }
    }
}