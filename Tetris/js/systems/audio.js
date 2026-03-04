// Gestion globale de la musique entre les pages
function initAudio() {
    // Créer ou récupérer l'élément audio
    let audioElement = document.querySelector('audio#music');
    
    if (!audioElement) {
        audioElement = document.createElement('audio');
        audioElement.id = 'music';
        audioElement.src = 'assets/audio/music/default_track.mp3';
        audioElement.loop = true;
        document.body.insertBefore(audioElement, document.body.firstChild);
    }

    // Récupérer l'état depuis localStorage
    const isMuted = localStorage.getItem('tetris-muted') === 'true';
    audioElement.muted = isMuted;
    
    // Si la musique était active, continuer à la jouer
    if (!isMuted) {
        audioElement.play().catch(() => {
            console.log('Autoplay bloqué');
        });
    }

    // Ajouter le bouton mute s'il n'existe pas
    if (!document.querySelector('#mute-btn')) {
        const hudBar = document.querySelector('.hud-bar');
        if (hudBar) {
            // Créer le bouton
            const muteBtn = document.createElement('button');
            muteBtn.id = 'mute-btn';
            muteBtn.onclick = toggleMute;
            
            const muteIcon = document.createElement('img');
            muteIcon.id = 'mute-icon';
            muteIcon.alt = 'mute';
            muteIcon.src = isMuted 
                ? 'assets/sprites/icon/volume-mute.svg' 
                : 'assets/sprites/icon/volume-unmute.svg';
            
            muteBtn.appendChild(muteIcon);
            hudBar.appendChild(muteBtn);
        }
    }
}

// Fonction pour toggle le mute
window.toggleMute = function() {
    const audio = document.querySelector('audio#music');
    const muteIcon = document.querySelector('#mute-icon');
    
    if (!audio) return;
    
    // Si la musique est paused, la reprendre
    if (audio.paused) {
        audio.play().catch(() => console.log('Impossible de reprendre'));
        audio.muted = false;
        localStorage.setItem('tetris-muted', 'false');
        if (muteIcon) muteIcon.src = 'assets/sprites/icon/volume-unmute.svg';
        return;
    }
    
    // Toggle mute
    audio.muted = !audio.muted;
    localStorage.setItem('tetris-muted', audio.muted);
    if (muteIcon) {
        muteIcon.src = audio.muted 
            ? 'assets/sprites/icon/volume-mute.svg' 
            : 'assets/sprites/icon/volume-unmute.svg';
    }
};

// Initialiser au chargement du DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAudio);
} else {
    initAudio();
}