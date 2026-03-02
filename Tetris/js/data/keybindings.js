import { playerMove, playerDrop, playerRotate, gameReset, pauseGame } from '../game/game.js';

export const default_keys = {
    moveLeft:  'ArrowLeft',
    moveRight: 'ArrowRight',
    softDrop:  'ArrowDown',
    rotate:    ' ',
    reset:     'r',
    pause:     'e',
};

document.addEventListener('keydown', event => {
    const gameKeys = [
        default_keys.moveLeft,
        default_keys.moveRight,
        default_keys.softDrop,
        default_keys.rotate,
        default_keys.reset,
        default_keys.pause
    ];
    if (gameKeys.includes(event.key)) {
        event.preventDefault();
        switch (event.key) {
            case default_keys.moveLeft:  playerMove(-1);    break;
            case default_keys.moveRight: playerMove(1);     break;
            case default_keys.softDrop:  playerDrop();      break;
            case default_keys.rotate:    playerRotate(-1);  break;
            case default_keys.reset:     gameReset();       break;
            case default_keys.pause:     pauseGame();       break;
        }
    }
});