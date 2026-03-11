export function showPauseScreen(show) {
	const pauseScreen = document.getElementById('pause-screen');
	if (pauseScreen) {
		pauseScreen.style.display = show ? 'flex' : 'none';
	}
}

export function showGameOverScreen(show) {
	const gameOverScreen = document.getElementById('gameover-screen');
	if (gameOverScreen) {
		gameOverScreen.style.display = show ? 'flex' : 'none';
	}
}

export function setupScreenButtons({onContinue, onMenu, onRestart}) {
	const continueBtn = document.getElementById('continue-btn');
	const menuBtn = document.getElementById('menu-btn');
	const restartBtn = document.getElementById('restart-btn');
	const menuBtn2 = document.getElementById('menu-btn2');
	if (continueBtn && onContinue) continueBtn.onclick = onContinue;
	if (menuBtn && onMenu) menuBtn.onclick = onMenu;
	if (restartBtn && onRestart) restartBtn.onclick = onRestart;
	if (menuBtn2 && onMenu) menuBtn2.onclick = onMenu;
}

export function showLoadBarScreen() {
	const loadBarScreen = document.getElementById('loadbar-screen');
	if (loadBarScreen) {
		loadBarScreen.style.display = 'flex';
		setTimeout(() => {
			loadBarScreen.style.display = 'none';
			showScreen('menu-screen');
		}, 5300);
	}
}