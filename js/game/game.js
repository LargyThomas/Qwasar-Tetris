import { arena, player } from '../data/config.js';
import { createPiece } from '../core/tetrominos.js';
import { collide, merge } from '../core/board.js';
import { rotate } from '../core/physics.js';
import { draw } from '../ui/renderer.js';
import { showPauseScreen, showGameOverScreen, setupScreenButtons } from '../ui/screens.js';
import { updateScore } from './scoring.js';
import { createLevels, updateLevel, levels } from './level.js';
import { updateCoins } from './coins.js';

let dropCounter = 0;
let dropInterval = Math.round(1000 / Math.pow(player.level, 0.3));
let lastTime = 0;
let isPaused = false;
let isGameOver = false;
let animationId = null;
let gameStarted = false;
let levelsInitialized = false;

// ─── ARENA SWEEP ───────────────────────────────────────────────
export function arenaSweep() {
    if (!levelsInitialized) {
        createLevels();
        levelsInitialized = true;
    }
    let rowCount = 1;
    outer: for (let y = arena.length - 1; y > 0; --y) {
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

    let nextLevel = player.level + 1;
    while (levels[nextLevel] && player.score >= levels[nextLevel].points) {
        player.level = nextLevel;
        player.coins += levels[nextLevel].coins;
        nextLevel++;
    }
    updateLevel();
    updateCoins();
}

// ─── PLAYER RESET ──────────────────────────────────────────────
export function playerReset() {
    const pieces = 'TJLOSZI';
    const randomPiece = () => createPiece(pieces[pieces.length * Math.random() | 0]);

    if (player.nextPiece === null) {
        player.nextPiece = randomPiece();
    }

    player.matrix = player.nextPiece;
    player.nextPiece = randomPiece();

    player.pos.y = 0;
    player.pos.x = (arena[0].length / 2 | 0) - (player.matrix[0].length / 2 | 0);

    if (collide(arena, player)) {
        isGameOver = true;
        showGameOverScreen(true);
        if (typeof window.playSfxGameOver === 'function') window.playSfxGameOver();
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    }
}

// ─── MOUVEMENTS ────────────────────────────────────────────────
export function playerDrop() {
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

export function playerMove(offset) {
    player.pos.x += offset;
    if (collide(arena, player)) {
        player.pos.x -= offset;
    }
}

export function playerRotate(dir) {
    const pos = player.pos.x;
    let offset = 1;
    rotate(player.matrix, dir);
    if (typeof window.playSfxRotate === 'function') window.playSfxRotate();
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

// ─── RESET ─────────────────────────────────────────────────────
export function gameReset() {
    arena.forEach(row => row.fill(0));
    player.score = 0;
    player.level = 1;
    player.coins = 0;
    player.nextPiece = null;
    isPaused = false;
    isGameOver = false;
    gameStarted = true;
    dropCounter = 0;
    dropInterval = Math.round(1000 / Math.pow(player.level, 0.3));
    lastTime = 0;
    playerReset();
    updateScore();
    showPauseScreen(false);
    showGameOverScreen(false);
    if (!animationId) {
        update();
    }
}

// ─── PAUSE ─────────────────────────────────────────────────────
export function pauseGame() {
    isPaused = !isPaused;
    if (isPaused) {
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
        showPauseScreen(true);
    } else {
        showPauseScreen(false);
        update();
    }
}

// ─── BOUCLE DE JEU ─────────────────────────────────────────────
export function update(time = 0) {
    if (isPaused) return;
    if (isGameOver) return;

    const deltaTime = time - lastTime;
    dropCounter += deltaTime;
    if (dropCounter > dropInterval) {
        playerDrop();
    }

    lastTime = time;
    draw();
    animationId = requestAnimationFrame(update);
}

// ─── BOUTONS ÉCRANS ────────────────────────────────────────────
setupScreenButtons({
    onContinue: () => {
        pauseGame();
        showPauseScreen(false);
    },
    onMenu: () => {
        window.location.reload();
    },
    onRestart: () => {
        showGameOverScreen(false);
        gameReset();
    }
});