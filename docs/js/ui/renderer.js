// ============================================================
// renderer.js — Canvas drawing
// Handles all visual rendering : arena, active piece and
// the next piece preview.
// ============================================================

import { canvas, context, arena, player, keys_colors } from '../data/config.js';

// Grab the next piece preview canvas.
// If the element doesn't exist in the HTML, nextContext
// will be null and preview functions will be silently skipped.
const nextCanvas  = document.getElementById('next-piece');
const nextContext = nextCanvas ? nextCanvas.getContext('2d') : null;

// Scale : 1 logical unit = 20px
// The next-piece canvas is 120x120px → 6x6 logical cells
if (nextContext) nextContext.scale(20, 20);

// Draws a matrix (piece or arena) onto a given canvas.
// matrix : 2D array of values (0 = empty, other = color index)
// offset : {x, y} starting position in the canvas (in cells)
// ctx    : target canvas context (default: main game canvas)
export function drawMatrix(matrix, offset, ctx = context) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            // Only draw non-empty cells
            if (value !== 0) {
                // Get the color matching this value
                // (defined in keys_colors inside config.js)
                ctx.fillStyle = keys_colors[value];
                // Draw a 1x1 logical square
                // (= 20x20px thanks to the scale)
                ctx.fillRect(x + offset.x, y + offset.y, 1, 1);
            }
        });
    });
}

// Draws the next piece inside the preview canvas.
// The piece is centered in a 6x6 grid to always have
// some margin regardless of the piece shape.
export function drawNextPiece() {
    // Safety check : exit if the canvas or piece doesn't exist yet
    if (!nextContext || !player.nextPiece) return;

    // Clear the canvas with a dark background
    nextContext.fillStyle = '#0a0a0a';
    nextContext.fillRect(0, 0, 6, 6); // 6x6 cells (120px canvas / scale 20)

    const m = player.nextPiece;

    // Calculate offset to center the piece in the 6x6 grid
    const offsetX = Math.floor((6 - m[0].length) / 2);
    const offsetY = Math.floor((6 - m.length) / 2);

    drawMatrix(m, { x: offsetX, y: offsetY }, nextContext);
}

// Main function called every frame by the game loop.
// Clears the canvas, redraws the arena, the active piece
// and updates the next piece preview.
export function draw() {
    // Clear the main canvas with a dark background.
    // Divide by 20 because the context is scaled at 20.
    context.fillStyle = '#111';
    context.fillRect(0, 0, canvas.width / 20, canvas.height / 20);

    // Draw all locked pieces (the arena)
    drawMatrix(arena, { x: 0, y: 0 });

    // Draw the currently falling piece
    drawMatrix(player.matrix, player.pos);

    // Refresh the preview canvas
    drawNextPiece();
}