import React, { useState } from "react";
import {
  academicCertificates,
  courseCertificates,
} from "../../docs/CertificateData";
import "./Certificate.css";
import { useTranslation } from "react-i18next";

const Certificate = () => {
  const { t, i18n } = useTranslation(); // Akses i18n untuk bahasa saat ini
  const [selectedType, setSelectedType] = useState("academic");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const certificates =
    selectedType === "academic" ? academicCertificates : courseCertificates;

  const currentLang = i18n.language; // Ambil bahasa saat ini

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const openModal = (img) => {
    setCurrentImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
  };

  return (
    <section>
      <h2
        className="section_title certificates"
        data-aos="zoom-in"
        data-aos-duration="1300"
      >
        | {t("SERTIFIKAT")} |
      </h2>
      <div className="category-selector">
        <button
          onClick={() => setSelectedType("academic")}
          className={selectedType === "academic" ? "active" : ""}
        >
          <i className="fas fa-graduation-cap"></i> {t("Sertifikat Prestasi")}
        </button>
        <button
          onClick={() => setSelectedType("course")}
          className={selectedType === "course" ? "active" : ""}
        >
          <i className="fas fa-cogs"></i> {t("Sertifikat Keterampilan")}
        </button>
      </div>
      <div className="certificate-section">
        <div className="certificate-list">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`certificate-item ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              {cert.translations[currentLang]}
            </div>
          ))}
        </div>
        <div
          className="certificate-display"
          onClick={() => openModal(certificates[currentIndex].img)}
        >
          {isLoading && <div className="loading-spinner">Loading...</div>}
          <img
            src={certificates[currentIndex].img}
            alt={t("Certificate Image")}
            onLoad={handleImageLoad}
            onError={handleImageError}
            onLoadStart={() => setIsLoading(true)}
          />
        </div>
      </div>
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img
            className="modal-content"
            src={currentImage}
            alt={t("Certificate Image")}
          />
          <div className="zoom-icon">{t("Zoomed Project")}</div>
        </div>
      )}
    </section>
  );
};

export default Certificate;