# file-storage-dapp
# 🗂️ UpShare - Application Décentralisée de Stockage de Fichiers (DApp)

**UpShare** est une application décentralisée (DApp) qui permet aux utilisateurs de téléverser, stocker et récupérer des fichiers à l’aide du système **IPFS (InterPlanetary File System)**. Elle utilise des **contrats intelligents Ethereum** (Solidity), une interface frontend développée en **ReactJS**, et l’extension **MetaMask** pour interagir avec la blockchain.

---

## 🚀 Fonctionnalités

- ✅ Téléversement de fichiers depuis l’ordinateur local
- 🔐 Authentification et signature via MetaMask
- 📝 Stockage des métadonnées sur la blockchain (nom, hash IPFS, date, propriétaire)
- 📁 Visualisation et téléchargement des fichiers via IPFS
- 📌 Possibilité d'épingler les fichiers avec **Pinata** pour garantir leur persistance

---

## 🧠 Comment ça fonctionne ?

### 1. **Interface utilisateur (ReactJS + MetaMask)**

- L’utilisateur connecte son portefeuille Ethereum via **MetaMask**
- Il peut :
  - Téléverser un fichier
  - Visualiser la liste des fichiers qu’il a téléversés
  - Accéder aux fichiers stockés via les liens IPFS

### 2. **Téléversement de fichier**

- Lorsqu’un fichier est téléversé :
  - Il est ajouté à IPFS via une API (`ipfs-http-client` ou Pinata)
  - Un identifiant unique **CID (Content Identifier)** est généré
  - Ce CID, accompagné du nom du fichier, est enregistré dans un contrat intelligent Ethereum

### 3. **Contrat Intelligent (Solidity + Ganache)**

- Le contrat contient une structure pour stocker :
  - `string fileName`
  - `string fileCID`
  - `uint timestamp`
  - `address owner`
- Il expose des fonctions telles que :
  - `uploadFile(fileName, fileCID)`
  - `getMyFiles()` pour récupérer les fichiers de l'utilisateur connecté
- **Ganache** est utilisé comme environnement local pour le développement et les tests blockchain

### 4. **Stockage IPFS**

- Les fichiers sont accessibles via n’importe quelle passerelle IPFS :


- Pour garantir la disponibilité, les fichiers peuvent être **épinglés** via **Pinata**

---

## ⚙️ Technologies Utilisées

| Couche | Technologies |
|--------|--------------|
| 💻 Frontend | ReactJS, JavaScript, HTML/CSS |
| 🌐 Blockchain | Solidity, Ganache, MetaMask, Web3.js ou Ethers.js |
| 📦 Stockage | IPFS, Pinata |
| 🔧 Outils Dev | Hardhat ou Truffle, VSCode, Git/GitHub |

---

## Installer les dépendances
 
npm install

## Lancer Ganache

Ouvrir Ganache (en version Desktop ou CLI)

## Déployer le contrat
 
npx hardhat run scripts/deploy.js --network localhost

## Lancer l’application React
 
npm start

## Configurer MetaMask

Importer un compte depuis Ganache dans MetaMask

Se connecter au réseau local Ganache (http://127.0.0.1:7545)

## 📸 Captures d’écran

Ajoute ici des captures montrant l’interface : formulaire de téléversement, liste de fichiers, aperçu IPFS, etc.

## 🙋‍♂️ Auteur

BAKLOUL MOHAMED 
Ingénieur en systèmes d'information | Passionné par les technologies DATA  
📧 bakloul.mohamed.100@gmail.com 
🌍 Profil LinkedIn : https://www.linkedin.com/in/mohamed-bakloul-53052020b/

## 🌐 linktr.ee/BAKLOUL.MOHAMED

