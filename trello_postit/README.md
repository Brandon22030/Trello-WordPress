# Trello Post-it

Une application web inspirée de Trello qui s'intègre avec WordPress via son API REST. L'application permet de gérer des tâches et des notes sous forme de tableaux kanban, en utilisant WordPress comme backend pour stocker les données.

## Description du Projet

"Trello Post-it" est une application web qui transforme WordPress en un système de gestion de tâches visuel de type Trello. L'interface utilisateur est développée avec Vue.js 3 et Tailwind CSS, offrant une expérience moderne et réactive similaire à Trello.

Le projet utilise l'architecture suivante :
- **Frontend** : Vue.js 3, Tailwind CSS, Pinia (pour la gestion d'état)
- **Backend** : WordPress REST API
- **Outils de développement** : Vite, ESLint, Prettier

## Fonctionnalités Principales

1. **Gestion des Tableaux Kanban**
   - Création, modification et suppression de listes (catégories WordPress)
   - Création, modification et suppression de cartes (articles WordPress)
   - Glisser-déposer des cartes entre les listes

2. **Intégration avec WordPress**
   - Les listes correspondent aux catégories WordPress
   - Les cartes correspondent aux articles WordPress
   - Authentification via JWT pour les opérations d'écriture

3. **Gestion des Commentaires**
   - Ajout de commentaires aux cartes (articles)
   - Modification et suppression des commentaires
   - Affichage des commentaires pour chaque carte

4. **Interface Utilisateur**
   - Interface inspirée de Trello avec un design moderne
   - Vue d'ensemble du tableau avec toutes les listes et cartes
   - Affichage détaillé des cartes avec leurs informations et commentaires
   - Navigation intuitive entre les différentes vues

5. **Fonctionnalités de Données**
   - Synchronisation en temps réel avec la base de données WordPress
   - Gestion des états avec Pinia pour une expérience utilisateur fluide
   - Persistance des données via l'API REST de WordPress

6. **Personnalisation**
   - Arrière-plan personnalisé pour le tableau
   - Interface adaptative pour différentes tailles d'écran

## Prérequis

- Node.js et npm
- Un site WordPress avec l'API REST activée
- Un token JWT valide pour l'authentification WordPress

## Installation et Configuration

```sh
# Installation des dépendances
npm install

# Compilation et hot-reload pour le développement
npm run dev

# Compilation et minification pour la production
npm run build

# Linting avec ESLint
npm run lint
```

## Configuration WordPress

1. Assurez-vous que l'API REST de WordPress est activée
2. Installez et configurez un plugin JWT pour WordPress
3. Mettez à jour le token d'authentification dans les fichiers de configuration

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).
