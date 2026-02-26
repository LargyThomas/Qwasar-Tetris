import { canvas, context, arena, player, keys_colors } from '../data/config.js';

export { draw, drawMatrix };

function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = keys_colors[value];
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
            }
        });
    });
}

function draw() {
    context.fillStyle = '#fff';
    context.fillRect(0, 0, canvas.width / 20, canvas.height / 20);

    drawMatrix(arena, {x: 0, y: 0});
    drawMatrix(player.matrix, player.pos);
}