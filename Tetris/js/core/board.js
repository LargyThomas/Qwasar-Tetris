// ============================================================
// board.js — Game arena management
// Contains functions to create the grid, merge pieces
// into the arena and detect collisions.
// ============================================================

import { arena, player } from '../data/config.js';
import { createLevels, updateLevel, levels } from '../game/level.js';
import { updateCoins } from '../game/coins.js';

// Creates an empty grid of width w and height h.
// Every cell is set to 0 (empty).
// Example : createMatrix(12, 20) → 12 columns, 20 rows.
export function createMatrix(w, h) {
	const matrix = [];
	while (h--) {
		// Add a new row filled with zeros
		matrix.push(new Array(w).fill(0));
	}
	return matrix;
}

// Merges the player's piece into the arena.
// Once a piece can no longer move down, its values are
// written permanently into the grid.
export function merge(arena, player) {
	player.matrix.forEach((row, y) => {
		row.forEach((value, x) => {
			// Skip empty cells of the piece (value 0)
			if (value !== 0) {
				// Write the value into the arena using
				// the player's current position as offset
				arena[y + player.pos.y][x + player.pos.x] = value;
			}
		});
	});
}

// Checks if the player's piece collides with the walls
// or with pieces already placed in the arena.
// Returns true if collision detected, false otherwise.
export function collide(arena, player) {
	const m = player.matrix; // piece matrix
	const o = player.pos;    // current player position

	for (let y = 0; y < m.length; ++y) {
		for (let x = 0; x < m[y].length; ++x) {
			// Only check non-empty cells of the piece
			if (m[y][x] !== 0) {
				// Collision if : the row doesn't exist (bottom wall)
				// or the arena cell is already occupied
				if (!arena[y + o.y] || arena[y + o.y][x + o.x] !== 0) {
					return true;
				}
			}
		}
	}
	return false;
}