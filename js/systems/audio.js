// ============================================================
// audio.js — Sound and music management
// Loaded as a classic script (not a module) so its functions
// are available globally from HTML and from JS modules
// via window.playSfx...()
// ============================================================

// Grab all audio elements declared in index.html
const music        = document.getElementById('music');
const sfxRotate    = document.getElementById('sfx-rotate');
const sfxLineClear = document.getElementById('sfx-line-clear');
const sfxLevelUp   = document.getElementById('sfx-level-up');
const sfxGameOver  = document.getElementById('sfx-game-over');

// Read the mute preference saved in localStorage.
// localStorage persists even after the tab is closed.
let isMuted = localStorage.getItem('tetris-muted') === 'true';

// Apply the mute state immediately on load
music.muted = isMuted;
updateMuteIcon();

// Start the music on the first user click on the page.
// Browsers block autoplay without a user interaction first.
// { once: true } removes the listener after the first trigger.
document.addEventListener('click', () => {
    if (music.paused) {
        music.play();
    }
}, { once: true });

// Toggle between muted and unmuted.
// If the music is paused, play it first instead of toggling.
function toggleMute() {
    if (music.paused) {
        music.play();
        return;
    }
    isMuted = !isMuted;
    music.muted = isMuted;
    // Save the preference for the next session
    localStorage.setItem('tetris-muted', isMuted);
    updateMuteIcon();
}

// Play a sound effect if sound is not muted.
// Reset currentTime to 0 so the sound restarts from
// the beginning even if it was already playing.
function playSound(sound) {
    if (isMuted) return;
    sound.currentTime = 0;
    sound.play();
}

// ─── Public functions to play each sound effect ──────────────
// Called from game.js via window.playSfx...()
function playSfxRotate()    { playSound(sfxRotate); }
function playSfxLineClear() { playSound(sfxLineClear); }
function playSfxLevelUp()   { playSound(sfxLevelUp); }
function playSfxGameOver()  { playSound(sfxGameOver); }

// Updates all mute icons across the different screens
// (menu, modes, settings, music screen).
function updateMuteIcon() {
    const src = isMuted
        ? 'assets/sprites/icon/volume-mute.svg'
        : 'assets/sprites/icon/volume-unmute.svg';

    const icons = document.querySelectorAll(
        '#mute-icon, #mute-icon-modes, #mute-icon-params, #mute-icon-music'
    );
    icons.forEach(icon => icon.src = src);
}