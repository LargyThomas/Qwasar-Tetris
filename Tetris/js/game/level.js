import { player } from '../data/config.js';

export { levels };

let levels = {};
if (typeof window !== 'undefined') {
    window.levels = levels;
}

export function updateLevel() {
    document.getElementById('level').innerText = player.level;
}

export function createLevels() {
    for (let i = 1; i <= 500; i++) {
        levels[i] = { points: Math.round(100 * Math.pow(i, 1.20)),
            coins: Math.round(Math.pow(i, 2.27))
        }
    }
}

// 1. Quand tu montes de niveau
//À chaque fois que tu gagnes des points (en effaçant des lignes), le jeu regarde si ton score dépasse le score requis pour le niveau suivant.
//Les scores requis sont définis dans le tableau levels (dans level.js) :
//Par exemple, pour le niveau 2, il faut environ 283 points, pour le niveau 3 environ 520 points, etc. (la formule est Math.round(100 * Math.pow(niveau, 1.5))).
//Exemple :

//Niveau 1 → 2 : 283 points
//Niveau 2 → 3 : 520 points
//Niveau 3 → 4 : 822 points
//Donc, si tu as 730 points, tu es au niveau 3 (car tu as dépassé 520 mais pas encore 822).

//2. Quand tu gagnes des coins
//À chaque fois que tu passes un niveau, tu gagnes le nombre de coins défini pour ce niveau (levels[niveau].coins).
//Par exemple, pour le niveau 2, tu gagnes 3 coins, pour le niveau 3 tu gagnes 8 coins, etc. (la formule est Math.round(Math.pow(niveau, 2.27))).
//Exemple :

//Tu passes du niveau 1 à 2 : +3 coins
//Tu passes du niveau 2 à 3 : +8 coins
//Si tu passes plusieurs niveaux d’un coup (par exemple, tu fais un gros score d’un coup), tu gagnes les coins de chaque niveau franchi.

// Niveau 1 : 100 points
// Niveau 2 : 230 points
// Niveau 3 : 374 points
// Niveau 4 : 528 points
// Niveau 5 : 690 points
// Niveau 6 : 859 points
// Niveau 7 : 1033 points
// Niveau 8 : 1213 points
// Niveau 9 : 1397 points
// Niveau 10 : 1585 points