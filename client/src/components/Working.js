import React from "react";
import Navbar from "./Navbar";
import "./Working.css";
import image1 from "./images/first-image-min.png";
import image2 from "./images/second-image-min.png";
import image3 from "./images/third-image-min.png";
import Discordsvg from "./Discordsvg";
import Twittersvg from "./Twittersvg";
import Instagramsvg from "./Instagramsvg";


const Working = () => {
    return (
        <div>
            <div className="navbar-section">
                <Navbar />
            </div>
            <h1 className="Work-heading">Fonctionnement du système de stockage de fichiers</h1>
            <div className="first-section">
                <p className="first-para">
                    Le stockage d'une image sur IPFS avec Pinata implique trois étapes principales. Tout d'abord, vous téléchargez le fichier image sur Pinata, soit via leur site web, une API, ou un SDK Pinata si vous l'intégrez dans une application logicielle. Une fois l'image téléchargée, vous "épinglez" le fichier pour vous assurer qu'il reste stocké de manière permanente sur le réseau IPFS, le rendant accessible à toute personne possédant le hash unique du fichier. Après l'épinglement, Pinata génère une valeur de hash, qui sert d'identifiant unique pour accéder à l'image sur le réseau IPFS.
                </p>
                <div className="image-1">
                    <img src={image3} alt="first-image" />
                </div>
            </div>
            <div className="second-section">
                <p className="second-para">
                L'étape suivante consiste à enregistrer le hash sur la blockchain, ainsi que toute information importante concernant l'image. Cela permet de lier l'image à une transaction spécifique sur la blockchain, facilitant ainsi la preuve de sa propriété et la vérification de son authenticité. Le hash peut être stocké sur une blockchain publique comme Ethereum ou sur une blockchain privée, selon les besoins de l'utilisateur.
                </p>
                <div className="image-2">
                    <img src={image2} alt="second-image" />
                </div>
            </div>
            <div className="third-section">
                <p className="third-para">
                L'étape suivante consiste à stocker le hash sur la blockchain avec les informations clés concernant l'image. Cela relie l'image à une transaction spécifique sur la blockchain, ce qui permet de prouver plus facilement qui en est le propriétaire et de confirmer qu'elle est authentique. Le hash peut être enregistré sur une blockchain publique comme Ethereum ou une blockchain privée, selon les besoins de l'utilisateur.
                </p>
                <div className="image-3">
                    <img src={image1} alt="first-image"></img>
                </div>
            </div>

            {/* footer section */}
            <div className="footer-section">
                <div className="column">
                    <h2 className="column1-heading">Contact</h2>
                    <p className="column1-para">Bakloul.mohamed.100@gmail.com</p>
                </div>

                <div className="column">
                    <h2 className="column2-text">Impliquez-vous</h2>
                    <div className="social-icons">
                        <Discordsvg />
                        <Twittersvg />
                        <Instagramsvg />
                    </div>
                </div>

                <div className="column">
                    <p className="Column3-text">
                        © 2024 UpShare. Tous droits réservés
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Working;