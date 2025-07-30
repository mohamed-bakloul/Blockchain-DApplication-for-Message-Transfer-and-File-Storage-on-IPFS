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
