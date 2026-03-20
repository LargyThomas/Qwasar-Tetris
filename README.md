# 🎮 Qwasar-Tetris

Un Tetris personnalisé développé en JavaScript vanilla, HTML5 Canvas et CSS.  
Design inspiré du cyberpunk, plusieurs modes de jeu, système de musique et progression.

---

## 📁 Structure du projet

```
Tetris/
├── index.html
├── css/
│   ├── constant.css       # Variables CSS (couleurs, polices...)
│   ├── style.css          # Styles globaux
│   ├── menu.css           # Menu principal
│   ├── game.css           # Écran de jeu
│   ├── gamemode.css       # Écran de sélection de mode
│   ├── screens.css        # Overlays pause & game over
│   ├── loader.css         # Animation de chargement
│   ├── music.css          # Écran musique
│   ├── parameters.css     # Écran paramètres
│   └── credits.css        # Écran crédits
├── js/
│   ├── my_tetris.js       # Point d'entrée principal
│   ├── core/
│   │   ├── board.js       # Création de la grille, fusion, collisions
│   │   ├── physics.js     # Logique de rotation des pièces
│   │   └── tetrominos.js  # Définition des formes de pièces
│   ├── data/
│   │   ├── config.js      # Canvas, arène, état du joueur
│   │   └── keybindings.js # Contrôles clavier
│   ├── game/
│   │   ├── game.js        # Boucle de jeu principale
│   │   ├── level.js       # Système de niveaux et progression
│   │   ├── scoring.js     # Affichage du score
│   │   └── coins.js       # Affichage des coins
│   ├── systems/
│   │   ├── audio.js       # Musique et effets sonores
│   │   └── input.js       # Système d'entrée (WIP)
│   └── ui/
│       ├── renderer.js    # Dessin canvas (arène, pièces, preview)
│       └── screens.js     # Gestion des écrans overlay
└── assets/
    ├── audio/
    │   ├── music/         # Musiques de fond (.mp3)
    │   └── sfx/           # Effets sonores (.mp3)
    └── sprites/
        ├── character/     # Illustrations du personnage
        ├── icon/          # Icônes UI (.svg)
        └── image_preview_music/ # Images de prévisualisation musique
```

---

## 🚀 Lancer le projet

Aucune installation requise. Il suffit d'ouvrir le projet avec un serveur local (obligatoire pour les modules ES6) :

```bash
# Avec VS Code → installer l'extension Live Server puis cliquer sur "Go Live"
# Ou avec Node.js :
npx serve .
```

Puis ouvrir `http://localhost:5500` dans le navigateur.

> ⚠️ Ouvrir `index.html` directement en `file://` ne **fonctionnera pas** à cause des restrictions des modules ES6.

---

## 🎮 Contrôles

| Touche | Action |
|---|---|
| `←` | Déplacer à gauche |
| `→` | Déplacer à droite |
| `↓` | Descente rapide |
| `Espace` | Rotation |
| `E` | Pause |
| `R` | Recommencer |

---

## 🕹️ Modes de jeu

| Mode | Description |
|---|---|
| **Classique** | Tetris standard, complète des lignes pour marquer des points |
| **Sprint** | Bientôt disponible |
| **Marathon** | Bientôt disponible |

---

## 📈 Système de progression

- **Score** : chaque ligne effacée rapporte des points, effacer plusieurs lignes d'un coup multiplie le gain
- **Niveaux** : seuil de score → `100 × niveau^1.20`
- **Coins** : gagnés à chaque montée de niveau → `niveau^2.27`

---

## 🔊 Audio

- La musique se lance au premier clic sur la page (politique autoplay des navigateurs)
- L'état muet est sauvegardé dans `localStorage` entre les sessions

---

## 🛠️ Stack technique

- **JavaScript** vanilla (modules ES6)
- **HTML5 Canvas** pour le rendu
- **CSS** pur (aucun framework)
- Aucune dépendance externe

---

## 👤 Auteur

Réalisé par **Thomas Largy**  
Assets : Freesound · Bootstrap Icons · Svgrepo · Pixabay

Tetris : https://largythomas.github.io/Qwasar-Tetris/
