import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import React from "react";
import { ethers } from "ethers";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import "./Secondfile.css";
import "./FileUpload.css";
import FileUpload from "./FileUpload";
import Display from "./Display";
import Discordsvg from "./Discordsvg";
import Twittersvg from "./Twittersvg";
import Instagramsvg from "./Instagramsvg";
import SecureUpload from "./images/Secure Upload.png";
import ShareShield from "./images/Share Shield.png";
import AccessLock from "./images/Acesslock.png";

const Secondpage = () => {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const loadProvider = async () => {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        
        try {
          // Request account access if needed
          await provider.send("eth_requestAccounts", []);
          
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          setAccount(address);

          // Initialize the contract
          const contractAddress = "0x3d2aAecF743e62C202F0Ef1189B7A49C65d038ed"; // Replace with your actual contract address
          const contract = new ethers.Contract(contractAddress, Upload.abi, signer);
          setContract(contract);

          // Listen for account or chain changes
          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

        } catch (error) {
          console.error("Error loading accounts or contract:", error);
        }
      } else {
        console.error("Please install MetaMask!");
      }
    };

    loadProvider();
  }, []);

  return (
    <>
      {/* Navbar section */}
      <div className="navbar-section">
        <Navbar />
      </div>

      <div className="file-container">
        <h1> 
        Stockez et partagez vos fichiers en toute simplicité.</h1>
        <FileUpload account={account} provider={provider} contract={contract} />
      </div>

      <div className="brief-detail">
        <h1 className="brief-head">Quels services nous offrons</h1>
        <div className="container">
          <div className="card">
            <img src={SecureUpload} alt="logo" />
            <h3>Téléchargement sécurisé</h3>
            <p>
            Une fonctionnalité qui permet aux utilisateurs de télécharger des fichiers sur la plateforme de manière sécurisée.
            </p>
            <a href="#" className="btn">plus d'info</a>
          </div>
          <div className="card">
            <div className="icon standard">
              <img src={ShareShield} alt="logo" />
            </div>
            <h3>Bouclier de Partage</h3>
            <p>
            Une fonctionnalité qui permet aux utilisateurs de partager des fichiers avec d'autres personnes sur le réseau tout en gardant un contrôle total sur qui peut y accéder.
            </p>
            <a href="#" className="btn standard">Plus d'infos</a>
          </div>
          <div className="card">
            <div className="icon premium">
              <img src={AccessLock} alt="logo" />
            </div>
            <h3>
            Blocage d'Accès</h3>
            <p>
            Une fonctionnalité qui offre des mécanismes de contrôle d'accès avancés, permettant aux utilisateurs de révoquer les autorisations accordées à toute personne avec laquelle ils ont partagé leurs fichiers.
            </p>
            <a href="#" className="btn premium">Plus de détails</a>
          </div>
        </div>
      </div>

      <div className="upload-check-section">
        <h2 className="check-head">Mes Téléchargements</h2>
        <p className="check-para">
        La section "Mes Téléchargements" de notre plateforme de stockage d'images décentralisée vous permet de voir toutes les images que vous avez téléchargées en cliquant sur le bouton de recherche. Si quelqu'un a partagé une image avec vous, vous pouvez également la voir en entrant l'adresse du compte de l'utilisateur qui l'a partagée dans le champ de recherche. Cela affichera toutes les images qui ont été partagées avec vous par cet utilisateur.
        </p>
        {contract && account ? (
          <Display contract={contract} account={account} />
        ) : (
          <p>Loading contract, please connect to MetaMask...</p>
        )}
      </div>

      <div className="footer-section">
        <div className="column1">
          <h2 className="column1-heading">Contact</h2>
          <p className="column1-para">Bakloul.mohamed.100@gmail.com</p>
        </div>

        <div className="column2">
          <h2 className="column2-text">Impliquez-vous</h2>
          <div className="social-icons">
            <Discordsvg />
            <Twittersvg />
            <Instagramsvg />
          </div>
        </div>

        <div className="column3">
          <p className="Column3-text">© 2024 UpShare. Tous droits réservés</p>
        </div>
      </div>
    </>
  );
};

export default Secondpage;
