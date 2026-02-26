import { playerMove, playerDrop, playerRotate, gameReset, pauseGame } from '../game/game.js';

document.addEventListener('keydown', event => {
    switch (event.key) {
        case 'ArrowLeft':
            playerMove(-1);
            break;
        case 'ArrowRight':
            playerMove(1);
            break;
        case 'ArrowDown':
            playerDrop();
            break;
        case ' ':
            playerRotate(-1);
            break;
        case 'r':
        case 'R':
            gameReset();     // ou autre action
            break;
        case 'e':
        case 'E':
            pauseGame();       // ou autre action
            break;
    }
});