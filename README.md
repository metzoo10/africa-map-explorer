# 🌍 Africa Map Explorer

**Africa Map Explorer** est une application web interactive moderne développée avec **Angular** permettant de découvrir les pays du continent africain, leurs caractéristiques culturelles, géographiques et touristiques à travers une interface cartographique épurée et responsive.

---

## ✨ Fonctionnalités principales

* **Carte interactive SVG** : Visualisation claire du continent africain avec sélection dynamique des pays et des archipels.
* **Panneau de détails dynamique (Drawer)** : Affichage instantané des informations clés du pays sélectionné (capitale, langues, monnaie, population, plat national, sites touristiques et drapeaux officiels).
* **Expérience Mobile Optimisée** : 
  * Mode plein écran sur mobile avec un volet semi-transparent (*backdrop*).
  * Design fluide et ergonomique adapté aux petits écrans avec gestion du défilement sécurisée.
* **Architecture moderne** : Développé en Angular avec une architecture **Zoneless** et des composants *Standalone*.

---

## 🛠️ Technologies utilisées

* **Frontend** : [Angular](https://angular.dev/) (Architecture Zoneless & Standalone Components)
* **Style & Design** : CSS3 personnalisé, media queries avancées, police typographique *Geist Mono*
* **Icônes & Visuels** : Lucide Icons, SVG personnalisés pour les liens sociaux (GitHub, LinkedIn, Dribbble) et drapeaux des pays

---

## 🚀 Installation et lancement en local

Suivez ces étapes pour exécuter le projet sur votre machine :

1. **Cloner le dépôt :**
   ```bash
   git clone [https://github.com/metzoo10/africa-map-explorer.git](https://github.com/metzoo10/africa-map-explorer.git)
   cd africa-map-explorer
   ```
2. **Installer les dépendances :**
    ```bash
   npm install
   ```
3. **Lancer le serveur de développement :**
    ```bash
   ng serve
   ```
4. **Ouvrir l'application :**
Ouvrez votre navigateur et accédez à http://localhost:4200/.

---

## 📁 Structure du projet

src/
├── app/
│   ├── components/
│   │   ├── africa-map/      # Composant de la carte SVG interactive
│   │   └── pays-detail/     # Panneau latéral des informations du pays
│   ├── app.component.ts     # Composant racine
│   ├── app.component.html   # Template principal (Header, Map, Drawer, Backdrop)
│   └── app.css              # Styles globaux et adaptations responsive
├── public/
│   └── fonts/               # Police Geist Mono
└── assets/                  # Drapeaux et ressources graphiques

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à proposer une pull request pour améliorer l'application.

## 📄 Licence

Ce projet est sous licence MIT.