import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Firstpage.css";
import "./Secondpage";
import Discordsvg from "./Discordsvg";
import Twittersvg from "./Twittersvg";
import Instagramsvg from "./Instagramsvg";
import myvideo from "./videos/first.mp4";
import img1 from "./images/first-image-min.png";
import img2 from "./images/second-image-min.png";
import img3 from "./images/third-image-min.png";
import Navbar from "./Navbar";

function Firstpage() {
  const [imageSrc, setImageSrc] = useState(img3);

  const handleHeadingClick = (newImageSrc) => {
    setImageSrc(newImageSrc);
  };

  return (
    <div>
      <div className="navbar-section">
        <Navbar />
      </div>
      <div className="hero">
        <div className="video-background">
          <video autoPlay muted loop>
            <source src={myvideo} type="video/mp4" />
          </video>
          <div className="hero-content">
            <div className="hero-heading-box">
              <h1 className="hero-heading">
                Innovez votre stockage de fichiers grâce à la décentralisation
              </h1>
            </div>
            <h1 className="hero-subheading">Vos données, votre contrôle</h1>
            <p className="hero__description">
              Rejoignez le mouvement vers un web plus décentralisé, où les
              utilisateurs possèdent et contrôlent leurs données, et où la
              censure et la surveillance sont des choses du passé.
            </p>
            <button
              className="hero-button"
              onClick={() => {
                window.location.href = "/secondpage";
              }}
            >
              <Link className="hero-button-text" to="/secondpage">
                Cliquez ici pour télécharger le fichier
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* aninate section */}
      <div className="animate-section">
        <h2 className="animate-heading">C'est quoi UpShare ?</h2>
        <p className="animate-para">
          UpShare est un système de stockage de fichiers décentralisé qui
          utilise la technologie blockchain pour garantir un stockage et une
          récupération des données sécurisés et transparents. Les utilisateurs
          ont un contrôle total sur leurs données et peuvent les partager avec
          d'autres grâce à des mécanismes avancés de chiffrement et de contrôle
          d'accès. Il offre une plateforme sécurisée et fiable pour stocker et
          partager des fichiers sans compromettre la confidentialité ou la
          sécurité. Avec UpShare, la gestion des données devient décentralisée
          et transparente, offrant une alternative révolutionnaire aux systèmes
          de stockage de fichiers centralisés traditionnels.
        </p>
      </div>

      {/* Product section */}
      {/* Product section */}
      <div className="product-section">
        <h2 className="product-head">
          Avantages du stockage de fichiers basé sur la blockchain
        </h2>
        <div className="product-content">
          <div className="product-left">
            <div className="Para-1">
              <h3
                id="para1-heading"
                className="para1-heading"
                onClick={() => handleHeadingClick(img2)}
              >
                Immutabilité
              </h3>
              <p className="para1-detail">
                La blockchain fournit un enregistrement infalsifiable et
                immuable du fichier. Une fois qu'un fichier est stocké sur la
                blockchain, il ne peut pas être modifié ni supprimé,
                garantissant ainsi l'intégrité des données.
              </p>
            </div>
            <hr className="my-hr" />
            <div className="Para-2">
              <h3
                id="para2-heading"
                className="para2-heading"
                onClick={() => handleHeadingClick(img3)}
              >
                Décentralisation
              </h3>
              <p className="para2-detail">
                Le fichier est stocké sur un réseau décentralisé d'ordinateurs,
                ce qui signifie qu'il n'y a pas de point unique de défaillance
                ou de contrôle. Cela garantit que le fichier reste accessible et
                sécurisé même si un ou plusieurs nœuds échouent.
              </p>
            </div>
            <hr className="my-hr" />
            <div className="Para-3">
              <h3
                id="para3-heading"
                className="para3-heading"
                onClick={() => handleHeadingClick(img1)}
              >
                
Transparence
              </h3>
              <p className="para3-detail">
              Toutes les transactions sur la blockchain sont transparentes et visibles publiquement. Cela signifie que tout le monde peut consulter l'historique des transactions du fichier et vérifier son authenticité, offrant ainsi un haut niveau de confiance et de responsabilité.
              </p>
            </div>
          </div>
          <div className="product-right">
            <img src={imageSrc} alt="logo" />
          </div>
        </div>
      </div>

      {/* About section */}
      <div className="about">
        <h2 className="about-heading">À propos de nous</h2>
        <p className="about-text">
        Chez UpShare, nous croyons que la propriété des données et la vie privée sont des droits fondamentaux qui doivent être protégés à l'ère numérique. C'est pourquoi nous avons créé un système de stockage de fichiers décentralisé qui vous donne le contrôle total de vos données.
        </p>
      </div>

      {/* footer-section */}
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
    </div>
  );
}

export default Firstpage;
