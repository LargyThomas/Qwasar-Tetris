// ============================================================
// physics.js — Piece rotation
// Contains the math logic to rotate a matrix (= a tetris
// piece) clockwise or counter-clockwise.
// ============================================================

// Rotates a square matrix by 90 degrees.
// dir > 0 : clockwise rotation
// dir < 0 : counter-clockwise rotation
export function rotate(matrix, dir) {

	// Step 1 : Transpose the matrix
	// Swap matrix[x][y] with matrix[y][x]
	// Example :
	//   Before       After transpose
	//   [1, 2, 3]  →  [1, 4, 7]
	//   [4, 5, 6]  →  [2, 5, 8]
	//   [7, 8, 9]  →  [3, 6, 9]
	for (let y = 0; y < matrix.length; ++y) {
		for (let x = 0; x < y; ++x) {
			// Swap values symmetrically across the diagonal
			[
				matrix[x][y],
				matrix[y][x],
			] = [
				matrix[y][x],
				matrix[x][y],
			];
		}
	}

	// Step 2 : Mirror depending on rotation direction
	if (dir > 0) {
		// Clockwise : reverse each row
		matrix.forEach(row => row.reverse());
	} else {
		// Counter-clockwise : reverse the row order
		matrix.reverse();
	}
}