import { default_keys } from '../data/keybindings.js';

// écouter les touches qui sont mise puis les channger avec change touch
// fermer le dialogue après avoir cliqué sur validé ou annuler 

function handleKeyPress(event) {
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
        changeTouch(currentAction, event.key);
        closeDialog();
    }
}

let currentAction = null;

export function openKeyBindingDialog(action) {
    currentAction = action;
    const dialog = document.getElementById('dialog-screen');
    dialog.classList.add('active');
    document.addEventListener('keydown', handleKeyPress);
}

export function closeDialog() {
    const dialog = document.getElementById('dialog-screen');
    dialog.classList.remove('active');
    document.removeEventListener('keydown', handleKeyPress);
}

export function changeTouch(action, key) {
    switch (action) {
        case 'moveLeft':
            default_keys.moveLeft = key;
            break;
        case 'moveRight':
            default_keys.moveRight = key;
            break;
        case 'softDrop':
            default_keys.softDrop = key;
            break;
        case 'rotate':
            default_keys.rotate = key;
            break;
        case 'reset':
            default_keys.reset = key;
            break;
        case 'pause':
            default_keys.pause = key;
            break;
    }
}