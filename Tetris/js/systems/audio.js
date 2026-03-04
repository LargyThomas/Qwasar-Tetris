const music       = document.getElementById('music');
const sfxRotate   = document.getElementById('sfx-rotate');
const sfxLineClear = document.getElementById('sfx-line-clear');
const sfxLevelUp  = document.getElementById('sfx-level-up');
const sfxGameOver = document.getElementById('sfx-game-over');

let isMuted = localStorage.getItem('tetris-muted') === 'true';

music.muted = isMuted;
updateMuteIcon();

document.addEventListener('click', () => {
    if (music.paused) {
        music.play();
    }
}, { once: true });

function toggleMute() {
    if (music.paused) {
        music.play();
        return;
    }
    isMuted = !isMuted;
    music.muted = isMuted;
    localStorage.setItem('tetris-muted', isMuted);
    updateMuteIcon();
}

function playSound(sound) {
    if (isMuted) return;
    sound.currentTime = 0; // revenir au début si le son est déjà en cours
    sound.play();
}

function playSfxRotate()    { playSound(sfxRotate); }
function playSfxLineClear() { playSound(sfxLineClear); }
function playSfxLevelUp()   { playSound(sfxLevelUp); }
function playSfxGameOver()  { playSound(sfxGameOver); }

function updateMuteIcon() {
    const src = isMuted
        ? 'assets/sprites/icon/volume-mute.svg'
        : 'assets/sprites/icon/volume-unmute.svg';

    const icons = document.querySelectorAll('#mute-icon, #mute-icon-modes, #mute-icon-params, #mute-icon-music');
    icons.forEach(icon => icon.src = src);
}