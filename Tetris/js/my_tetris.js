import { updateCoins } from './game/coins.js';
import { playerReset, update } from './game/game.js';
import { updateLevel } from './game/level.js';
import { updateScore } from './game/scoring.js';

showScreen('menu-screen')
playerReset();
updateScore();
updateCoins();
updateLevel();
update();