// ============================================================
// screens.js — In-game screen management (pause, game over,
// loading bar)
// Shows or hides the overlays displayed on top of the canvas
// during a game session.
// ============================================================

// Shows or hides the pause screen overlay.
// show = true  → display as flex
// show = false → hide it
export function showPauseScreen(show) {
    const pauseScreen = document.getElementById('pause-screen');
    if (pauseScreen) {
        pauseScreen.style.display = show ? 'flex' : 'none';
    }
}

// Shows or hides the game over screen overlay.
export function showGameOverScreen(show) {
    const gameOverScreen = document.getElementById('gameover-screen');
    if (gameOverScreen) {
        gameOverScreen.style.display = show ? 'flex' : 'none';
    }
}

// Binds callbacks to the pause and game over screen buttons.
// Called once when game.js loads.
// onContinue : resumes the game from pause
// onMenu     : reloads the page to go back to the main menu
// onRestart  : starts a new game from the game over screen
export function setupScreenButtons({onContinue, onMenu, onRestart}) {
    const continueBtn = document.getElementById('continue-btn');
    const menuBtn     = document.getElementById('menu-btn');
    const restartBtn  = document.getElementById('restart-btn');
    const menuBtn2    = document.getElementById('menu-btn2'); // menu from game over

    if (continueBtn && onContinue) continueBtn.onclick = onContinue;
    if (menuBtn     && onMenu)     menuBtn.onclick     = onMenu;
    if (restartBtn  && onRestart)  restartBtn.onclick  = onRestart;
    if (menuBtn2    && onMenu)     menuBtn2.onclick     = onMenu;
}

// Shows the loading bar screen on startup.
// After 5.3 seconds (animation duration), automatically
// switches to the main menu via showScreen() defined in index.html.
export function showLoadBarScreen() {
    const loadBarScreen = document.getElementById('loadbar-screen');
    if (loadBarScreen) {
        loadBarScreen.style.display = 'flex';
        setTimeout(() => {
            loadBarScreen.style.display = 'none';
            // showScreen is a global function declared in index.html
            showScreen('menu-screen');
        }, 5300);
    }
}