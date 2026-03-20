# 🎮 Qwasar-Tetris

A custom Tetris game built with vanilla JavaScript, HTML5 Canvas and CSS.  
Cyberpunk-inspired design, multiple game modes, music system and coin progression.

---

## 📁 Project Structure

```
Tetris/
├── index.html
├── css/
│   ├── constant.css       # CSS variables (colors, fonts...)
│   ├── style.css          # Global styles
│   ├── menu.css           # Main menu
│   ├── game.css           # In-game screen
│   ├── gamemode.css       # Game mode selection screen
│   ├── screens.css        # Pause & game over overlays
│   ├── loader.css         # Loading bar animation
│   ├── music.css          # Music screen
│   ├── parameters.css     # Settings screen
│   └── credits.css        # Credits screen
├── js/
│   ├── my_tetris.js       # Main entry point
│   ├── core/
│   │   ├── board.js       # Grid creation, merge, collision
│   │   ├── physics.js     # Piece rotation logic
│   │   └── tetrominos.js  # Piece shapes definitions
│   ├── data/
│   │   ├── config.js      # Canvas, arena, player state
│   │   └── keybindings.js # Keyboard controls
│   ├── game/
│   │   ├── game.js        # Main game loop
│   │   ├── level.js       # Level & progression system
│   │   ├── scoring.js     # Score display
│   │   └── coins.js       # Coins display
│   ├── systems/
│   │   ├── audio.js       # Music & sound effects
│   │   └── input.js       # Input system (WIP)
│   └── ui/
│       ├── renderer.js    # Canvas drawing (arena, pieces, preview)
│       └── screens.js     # Overlay screens management
└── assets/
    ├── audio/
    │   ├── music/         # Background tracks (.mp3)
    │   └── sfx/           # Sound effects (.mp3)
    └── sprites/
        ├── character/     # Character illustrations
        ├── icon/          # UI icons (.svg)
        └── image_preview_music/ # Music preview images
```

---

## 🚀 How to run

No install required. Just open with a local server (required for ES6 modules) :

```bash
# With VS Code → install Live Server extension and click "Go Live"
# Or with Node.js :
npx serve .
```

Then open `http://localhost:5500` (or the port shown in your terminal).

> ⚠️ Opening `index.html` directly as a file (`file://`) will **not** work due to ES6 module restrictions.

---

## 🎮 Controls

| Key | Action |
|---|---|
| `←` | Move left |
| `→` | Move right |
| `↓` | Soft drop |
| `Space` | Rotate |
| `E` | Pause |
| `R` | Reset |

---

## 🕹️ Game Modes

| Mode | Description |
|---|---|
| **Classic** | Standard Tetris, clear lines to score |
| **Sprint** | Coming soon |
| **Marathon** | Coming soon |

---

## 📈 Progression System

- **Score** : each cleared line gives points, clearing multiple lines at once multiplies the reward
- **Levels** : score threshold formula → `100 × level^1.20`
- **Coins** : earned on level up → `level^2.27`

---

## 🔊 Audio

- Background music plays on first user interaction (browser autoplay policy)
- Mute state is saved in `localStorage` across sessions

---

## 🛠️ Tech Stack

- Vanilla **JavaScript** (ES6 modules)
- **HTML5 Canvas** for rendering
- Pure **CSS** (no framework)
- No external dependencies

---

## 👤 Author

Made by **Thomas Largy**  
Assets : Freesound · Bootstrap Icons · Svgrepo · Pixabay
