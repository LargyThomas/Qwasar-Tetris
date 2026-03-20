// ============================================================
// my_tetris.js — Main entry point
// First module file loaded by index.html.
// Initializes the HUD display, launches the loading screen
// and exposes the start function to the Start button.
// ============================================================

import { updateCoins }       from './game/coins.js';
import { gameReset }         from './game/game.js';
import { updateLevel }       from './game/level.js';
import { updateScore }       from './game/scoring.js';
import { showLoadBarScreen } from './ui/screens.js';

// Import keybindings purely for its side effect :
// registering the keydown event listener defined in that file.
// We don't need to use any exported value from it.
import './data/keybindings.js';

// Expose gameReset as a global variable so the Start button
// in the HTML can call it via onclick="window.startGameBtn()"
// (ES6 modules are isolated and not directly accessible from HTML)
window.startGameBtn = gameReset;

// Launch the loading bar animation → redirects to menu after 5.3s
showLoadBarScreen();

// Initialize HUD values on load (score 0, level 1, coins 0)
// before the game actually starts
updateScore();
updateCoins();
updateLevel();