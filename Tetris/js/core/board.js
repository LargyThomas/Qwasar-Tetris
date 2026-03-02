import { arena, player } from '../data/config.js';
import { createLevels, updateLevel, levels } from '../game/level.js';
import { updateCoins } from '../game/coins.js';

export function createMatrix(w, h) {
    const matrix = [];
    while (h--) {
        matrix.push(new Array(w).fill(0));
    }
    return matrix;
}

export function merge(arena, player) {
    player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                arena[y + player.pos.y][x + player.pos.x] = value;
            }
        });
    });
}

export function collide(arena, player) {
    const m = player.matrix;
    const o = player.pos;
    for (let y = 0; y < m.length; ++y) {
        for (let x = 0; x < m[y].length; ++x) {
            if (m[y][x] !== 0) {
                if (!arena[y + o.y] || arena[y + o.y][x + o.x] !== 0) {
                    return true;
                }
            }
        }
    }
    return false;
}

let levelsInitialized = false;
export function arenaSweep() {
    if (!levelsInitialized) {
        createLevels();
        levelsInitialized = true;
    }
    let rowCount = 1;
    outer: for (let y = arena.length -1; y > 0; --y) {
        for (let x = 0; x < arena[y].length; ++x) {
            if (arena[y][x] === 0) {
                continue outer;
            }
        }

        const row = arena.splice(y, 1)[0].fill(0);
        arena.unshift(row);
        ++y;

        player.score += rowCount * 10;
        rowCount *= 2;
    }

    // Gestion du level up et des coins
    let nextLevel = player.level + 1;
    while (levels[nextLevel] && player.score >= levels[nextLevel].points) {
        player.level = nextLevel;
        player.coins += levels[nextLevel].coins;
        nextLevel++;
    }
    updateLevel();
    updateCoins();
}
