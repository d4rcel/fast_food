# Fast Food - Application Mobile de Commande

Une application mobile multiplateforme (iOS et Android) pour un service de restauration rapide, permettant aux utilisateurs de parcourir le menu, passer des commandes et gérer leur compte.

## 🚀 Fonctionnalités

*   **Authentification :** Inscription et connexion des utilisateurs.
*   **Navigation Intelligente :** Interface à onglets pour une navigation simple et efficace.
*   **Catalogue de Produits :** Affichage des articles du menu avec des filtres par catégorie.
*   **Recherche :** Fonction de recherche pour trouver rapidement des produits.
*   **Panier d'Achat :** Ajout, modification et suppression d'articles dans le panier.
*   **Profil Utilisateur :** Consultation et gestion des informations du compte.

## 🛠️ Technologies et Outils

*   **Framework :** React Native (avec Expo)
*   **Langage :** TypeScript
*   **Routing :** Expo Router (navigation basée sur les fichiers)
*   **Styling :** Tailwind CSS avec NativeWind
*   **Backend :** Appwrite (Base de données, Authentification)
*   **Gestion d'état :** Zustand

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants :
*   [Node.js](https://nodejs.org/) (version LTS recommandée)

[//]: # (*   [Expo CLI]&#40;https://docs.expo.dev/get-started/installation/&#41;)

[//]: # (*   Un compte [Appwrite]&#40;https://appwrite.io/&#41; pour la configuration du backend.)

## ⚙️ Installation et Configuration

1.  **Cloner le dépôt :**
    ```bash
    git clone https://github.com/d4rcel/fast_food.git
    cd fast_food
    ```

2.  **Installer les dépendances :**
    ```bash
    npm install
    ```

[//]: # (3.  **Configurer les variables d'environnement :**)

[//]: # (    Créez un fichier `.env` à la racine du projet et ajoutez les variables suivantes. Vous pouvez trouver ces informations dans le tableau de bord de votre projet Appwrite.)

[//]: # ()
[//]: # (    ```)

[//]: # (    EXPO_PUBLIC_APPWRITE_ENDPOINT=VOTRE_ENDPOINT_APPWRITE)

[//]: # (    EXPO_PUBLIC_APPWRITE_PROJECT_ID=VOTRE_ID_PROJET_APPWRITE)

[//]: # (    ```)

3.  **Démarrer le serveur de développement :**
    ```bash
    npx expo start
    ```
    Suivez les instructions dans le terminal pour lancer l'application sur un simulateur iOS, un émulateur Android ou dans votre navigateur web.


## 📂 Structure du Projet

```
fast_food/
├── app/                # Fichiers de routing et écrans
│   ├── (auth)/         # Groupe de routes pour l'authentification
│   └── (tabs)/         # Groupe de routes pour la navigation principale
├── assets/             # Polices, icônes et images
├── components/         # Composants React réutilisables
├── constants/          # Constantes globales
├── lib/                # Logique métier (Appwrite, hooks)
├── store/              # Gestion d'état (Zustand)
└── ...                 # Fichiers de configuration
```

## 🤝 Contribution

Les contributions sont les bienvenues ! Si vous souhaitez améliorer ce projet, n'hésitez pas à forker le dépôt et à créer une Pull Request.

## 📄 Licence

Ce projet est sous licence MIT.