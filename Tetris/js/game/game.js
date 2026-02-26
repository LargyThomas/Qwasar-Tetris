import { arena, player } from '../data/config.js';
import { createPiece } from '../core/tetrominos.js';
import { collide, merge, arenaSweep } from '../core/board.js';
import { rotate } from '../core/physics.js';
import { draw } from '../ui/renderer.js';
import { updateScore } from './scoring.js';
import { default_keys } from '../data/keybidings.js';

export { playerDrop, playerMove, playerReset, playerRotate, gameReset, pauseGame, update };

let dropCounter = 0;
let dropInterval = 1000;
let lastTime = 0;

function playerReset() {
    const pieces = 'TJLOSZI';
    player.matrix = createPiece(pieces[pieces.length * Math.random() | 0]);
    player.pos.y = 0;
    player.pos.x = (arena[0].length / 2 | 0) -
                   (player.matrix[0].length / 2 | 0);
    if (collide(arena, player)) {
        arena.forEach(row => row.fill(0));
        player.score = 0;
        updateScore();
    }
}

function playerDrop() {
    player.pos.y++;
    if (collide(arena, player)) {
        player.pos.y--;
        merge(arena, player);
        playerReset();
        arenaSweep();
        updateScore();
    }
    dropCounter = 0;
}

function playerMove(offset) {
    player.pos.x += offset;
    if (collide(arena, player)) {
        player.pos.x -= offset;
    }
}

function playerRotate(dir) {
    const pos = player.pos.x;
    let offset = 1;
    rotate(player.matrix, dir);
    while (collide(arena, player)) {
        player.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > player.matrix[0].length) {
            rotate(player.matrix, -dir);
            player.pos.x = pos;
            return;
        }
    }
}

function gameReset() {

}

function pauseGame() {

}

function update(time = 0) {
    const deltaTime = time - lastTime;

    dropCounter += deltaTime;
    if (dropCounter > dropInterval) {
        playerDrop();
    }

    lastTime = time;
    
    draw();
    requestAnimationFrame(update);
}