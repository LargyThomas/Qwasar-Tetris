import { createMatrix } from '../core/board.js';

export const canvas = document.getElementById('tetris');
export const context = canvas.getContext('2d');

context.scale(20, 20);

export const keys_colors = [
    null,
    '#00FFFF',
    '#FFFF00',
    '#800080',
    '#008000',
    '#FF0000',
    '#FFA500',
    '#0000FF',
    '#fff'
];

export const arena = createMatrix(12, 20);

export const player = {
    pos: {x: 0, y: 0},
    matrix: null,
    score: 0,
    level: 1,
    coins : 0,
};
