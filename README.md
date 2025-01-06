# health_north

**Application Web** : Interface web développée en PHP pour gérer les patients et rendez-vous.

- **Application Mobile** : Application mobile (Flutter) pour un accès rapide aux données.
- **Application Lourde** : Application desktop (Java) pour des fonctionnalités avancées.
- **API REST** : API en Node.js pour centraliser les interactions entre applications.
- **Base de Données SQL** : Scripts SQL pour la création et gestion de la base de données.

## Structure du projet

- **Diagrammes/** : Contient les diagrammes UML et MCD.
- **Scripts_SQL/** : Contient le script SQL de création de la base de données.
- **Rapports/** : Contient les rapports expliquant les étapes du projet.
- - **Web/** : Contient les fichiers pour l'application web.
- **Mobile/** : Code source de l'application mobile.
- **Lourde/** : Fichiers pour l'application lourde (Java).
- **API/** : Code source de l'API REST.
- **SQL/** : Scripts SQL pour la base de données.

## Contenu

1. [Diagrammes UML et MCD](./Diagrammes/)
2. [Script SQL de création](./Scripts_SQL/creation_base.sql)
3. [Rapports des missions](./Rapports/)

## Prérequis

- WampServer pour héberger l'application web et la base de données.
- Flutter pour l'application mobile.
- Java JDK pour l'application lourde.
- Node.js pour l'API REST.


# Projet Médical - Service d’hébergement avec WampServer

## Prérequis

- WampServer installé (Apache, MariaDB).
- Projet placé dans le dossier `www` de WampServer.

## Installation

1. Placez le dossier `health_north` dans `C:/wamp64/www/`.
2. Accédez au projet via :
   ```plaintext
   http://localhost/health_north
   ```

## Installation

### Web

1. Placez les fichiers dans le répertoire `www` de WampServer.
2. Accédez à l'application via `http://localhost/ProjetMedical`.

### Base de Données

1. Importez le script SQL dans MariaDB :
   ```bash
   SOURCE SQL/creation_base.sql;
   
   ```
   
### **Base de Données**
1. Importer le script SQL dans MariaDB :
   ```sql
   SOURCE Scripts_SQL/creation_base.sql;
   ```

### **API REST et Service d'authentification**
1. Va dans le dossier `API/` et installe les dépendances :
   ```bash
   npm install
   ```
2. Configure le fichier `.env` avec les variables nécessaires (clé JWT, port, etc.).
   - Exemple :
     ```plaintext
     JWT_SECRET=yourSecretKey
     JWT_EXPIRES_IN=1h
     PORT=3000
     ```
3. Lance l’API et le service d'authentification :
   ```bash
   node server.js
   ```

### **Application Mobile**
1. Ouvre le projet dans **Android Studio**  avec l'extension Flutter.
2. Installe les dépendances :
   ```bash
   flutter pub get
   ```
3. Lance l'application sur un simulateur ou un appareil réel :
   ```bash
   flutter run
   ```

### **Application Lourde**
1. Ouvre le projet dans ton IDE préféré (, IntelliJ, .).
2. Compile et exécute l'application.


## Auteur

Ce projet a été réalisé par Zamzam.
