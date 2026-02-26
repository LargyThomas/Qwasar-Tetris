import { createMatrix } from '../core/board.js';

export const canvas = document.getElementById('tetris');
export const context = canvas.getContext('2d');

context.scale(20, 20);

export let dropCounter = 0;
export let dropInterval = 1000;
export let lastTime = 0;

export const colors = [
    null,
    '#FF0D72',
    '#0DC2FF',
    '#0DFF72',
    '#F538FF',
    '#FF8E0D',
    '#FFE138',
    '#3877FF',
];

export const arena = createMatrix(12, 20);

export const player = {
    pos: {x: 0, y: 0},
    matrix: null,
    score: 0,
};
