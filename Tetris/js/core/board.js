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

