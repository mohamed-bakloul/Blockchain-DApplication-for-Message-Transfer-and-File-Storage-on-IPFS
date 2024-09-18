import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Modal from "./Modal";
import FormData from "form-data";

const FileUpload = ({ contract, account, provider }) => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        // Use environment variables for API keys
        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: process.env.REACT_APP_PINATA_API_KEY,
            pinata_secret_api_key: process.env.REACT_APP_PINATA_SECRET_API_KEY,
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const progressPercentage = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(progressPercentage);
          },
        });

        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
        const signer = contract.connect(provider.getSigner());
        await signer.add(account, ImgHash); // Wait for the transaction to be confirmed

        alert(
          "File successfully uploaded to Pinata and added to the blockchain!"
        );

        setFile(null);
        setUploadProgress(0);
      } catch (e) {
        console.error("Error uploading file to Pinata:", e);
        alert("Unable to upload to Pinata");
      }
    } else {
      alert("Please select a file to upload.");
    }
  };

  const retrieveFile = (e) => {
    const input = e.target;
    const label = document.getElementById("fileLabel");
    if (input && input.files && input.files.length > 0) {
      const file = input.files[0];
      setFile(file);
      label.textContent = "";
    } else if (!file) {
      label.innerHTML = '<i class="fa-solid fa-cloud-arrow-up fa-bounce"></i>';
      document.getElementById("upload-para").style.display = "block";
    }
  };

  const renderPreview = () => {
    if (file) {
      const fileType = file.type.split("/")[0];

      switch (fileType) {
        case "image":
          return (
            <img
              src={URL.createObjectURL(file)}
              alt="Uploaded file"
              className="preview-image"
            />
          );
        case "video":
          return (
            <video
              src={URL.createObjectURL(file)}
              className="preview-video"
              controls
              height={150}
              width={320}
            />
          );
        case "audio":
          return (
            <audio
              src={URL.createObjectURL(file)}
              className="preview-audio"
              controls
            />
          );
        case "application":
          if (file.type === "application/pdf") {
            return (
              <div className="preview-file">
                <i className="fa-solid fa-file-pdf"></i>
                <p>PDF FILE</p>
              </div>
            );
          } else {
            return (
              <div className="preview-file">
                <i className="fa-solid fa-file"></i>
                <p>{fileType.toUpperCase()} FILE</p>
              </div>
            );
          }
        default:
          return (
            <div className="preview-file">
              <i className="fa-solid fa-file"></i>
              <p>{fileType.toUpperCase()} FILE</p>
            </div>
          );
      }
    }

    return null;
  };

  const [currentButton, setCurrentButton] = useState("upload");

  return (
    <>
      <div className="upload-share-container">
        <div className="toggleWrapper">
          <input type="checkbox" className="dn" id="dn" />
          <label
            htmlFor="dn"
            className="toggle"
            onClick={() =>
              setCurrentButton(currentButton === "share" ? "upload" : "share")
            }
          >
            <span className="toggle__handler"></span>
          </label>
        </div>
        {currentButton === "upload" && (
          <div className="wrapper">
            <h3>Téléchargez vos fichiers</h3>
            <p className="first-desc">
              Types de fichiers supportés: PNG, MP3, MP4, WEBP
            </p>
            <div
              className="form"
              onClick={() => document.getElementById("my-file").click()}
              onSubmit={handleSubmit}
            >
              <label
                htmlFor="my-file"
                id="fileLabel"
                className="custom-file-upload"
              >
                <i className="fa-solid fa-cloud-arrow-up fa-bounce"></i>
              </label>
              <input
                type="file"
                id="my-file"
                name="myfile"
                disabled={!account}
                onChange={(e) => {
                  retrieveFile(e);
                  document.getElementById("upload-para").style.display = "none";
                }}
              />
              {file && renderPreview()}

              <p id="upload-para" className="upload-para">
                Parcourir ou faites glisser ici pour télécharger
              </p>
              {uploadProgress > 0 && (
                <progress value={uploadProgress} max={100} />
              )}
            </div>
            <button
              type="submit"
              className="upload"
              disabled={!file}
              onClick={handleSubmit}
            >
            Télécharger
            </button>
          </div>
        )}
        {currentButton === "share" && (
          <div className="share-wrapper">
            <h3>Partagez vos fichiers</h3>
            <Modal contract={contract} />
          </div>
        )}
      </div>
    </>
  );
};

FileUpload.propTypes = {
  contract: PropTypes.shape({
    connect: PropTypes.func,
    add: PropTypes.func,
  }).isRequired,
  account: PropTypes.string.isRequired,
  provider: PropTypes.shape({
    getSigner: PropTypes.func,
  }).isRequired,
};

export default FileUpload;
