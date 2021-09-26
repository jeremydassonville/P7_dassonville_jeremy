# groupomania

Création d'un réseau social d'entreprise

## Frontend

Ouvrir le dossier Frontend dans le terminal de votre éditeur puis exécuter la commande:

    npm install

puis

    npm run serve

si le navigateur ne s'ouvre pas automatiquement allez à :

- http://localhost:8080/

## Backend

Ouvrir le dossier Backend dans le terminal de votre éditeur puis exécuter la commande:

    npm install

puis

    nodemon server

## Base de donnée
Se connecter au server Mysql de votre choix. Executer la commande `CREATE DATABASE groupomania_OC;`

Créer ensuite un nouvel utilisateur avec la commande `CREATE USER 'nom user'@'localhost' IDENTIFIED BY 'mot de passe';`

Donner les droits au nouvel utilisateur avec la commande `GRANT ALL PRIVILEGES ON groupomania_OC.* TO 'nom user'@'localhost';`

Vérifiez les identifiants dans le fichier config.json du dossier Backend puis importer le fichier groupomania.sql

    mysql -u 'nom user' -p groupomania_OC < groupomania.sql
