import { updateCoins } from './game/coins.js';
import { playerReset, update } from './game/game.js';
import { updateLevel } from './game/level.js';
import { updateScore } from './game/scoring.js';
import { showLoadBarScreen } from './ui/screens.js';

showLoadBarScreen();
playerReset();
updateScore();
updateCoins();
updateLevel();
update();