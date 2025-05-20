# 🎯 YouTube Dash Redirector

Cette extension Chrome redirige automatiquement les vidéos YouTube classiques vers une version modifiée de l'URL, où un **tiret est ajouté dans le nom de domaine**, transformant par exemple :

```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

en :

```
https://www.yout-ube.com/watch?v=dQw4w9WgXcQ
```

Cela permet par exemple d'accéder à des services tiers liés à YouTube comme la conversion, l'extraction audio, etc.

## 🚀 Fonctionnalités

- ✅ Détecte automatiquement les vidéos YouTube classiques (`/watch?v=...`)
- ✅ Modifie dynamiquement l’URL vers `www.yout-ube.com`
- ✅ Ouvre l’URL modifiée dans un **nouvel onglet**
- ✅ Ferme l’onglet YouTube d’origine pour éviter la lecture en double
- 🟥 Ne redirige **pas** les Shorts (`/shorts/...`)

## 🛠️ Installation (locale)

1. Clone ce dépôt ou télécharge les fichiers.
2. Ouvre Google Chrome et va à `chrome://extensions/`
3. Active **Mode développeur** (coin supérieur droit).
4. Clique sur **"Charger l’extension non empaquetée"**
5. Sélectionne le dossier contenant `manifest.json` et `background.js`

## 📁 Structure

```
youtube-dash-redirector/
├── manifest.json       # Fichier de configuration de l'extension
└── background.js       # Script qui intercepte et redirige les vidéos
```

## 🧠 Remarque

Cette extension fonctionne uniquement en **mode développeur** (ou via un navigateur basé sur Chromium comme Brave ou Opera). Elle n'est pas disponible sur le Chrome Web Store.
