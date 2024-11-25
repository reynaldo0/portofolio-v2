import React, { useState } from "react";
import { academicCertificates, courseCertificates } from "../../docs/CertificateData";
import "./Certificate.css";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from 'react-lazy-load-image-component';  // Import LazyLoadImage

const Certificate = () => {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState("academic");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates =
    selectedType === "academic" ? academicCertificates : courseCertificates;

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

  return (
    <section>
      <h2 className="section_title certificates" data-aos="zoom-in" data-aos-duration="1300">
        | {t("SERTIFIKAT")} |
      </h2>

      {/* Pilihan Tipe Sertifikat */}
      <div className="category-selector">
        <button
          onClick={() => setSelectedType("academic")}
          className={selectedType === "academic" ? "active" : ""}
        >
          <span className="category-icon">
            <i className="fas fa-graduation-cap"></i> {/* Academic icon */}
          </span>
          {t("Sertifikat Prestasi")}
        </button>
        <button
          onClick={() => setSelectedType("course")}
          className={selectedType === "course" ? "active" : ""}
        >
          <span className="category-icon">
            <i className="fas fa-cogs"></i> {/* Course icon */}
          </span>
          {t("Sertifikat Keterampilan")}
        </button>
      </div>

      <div className="certificate-section">
        <div className="certificate-list">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`certificate-item ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleClick(index)}
            >
              {t(cert.title)}
            </div>
          ))}
        </div>
        <div
          className="certificate-display"
          onClick={() => openModal(certificates[currentIndex].img)}
        >
          {/* Lazy Load dengan Efek Loading */}
          <LazyLoadImage
            src={certificates[currentIndex].img}
            alt={t("Certificate Image")}
            effect="blur"   // Efek blur sementara gambar dimuat
            width="100%"     // Atur lebar gambar sesuai container
            height="100%"    // Atur tinggi gambar sesuai container
          />
        </div>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img className="modal-content" src={currentImage} alt={t("Certificate Image")} />
          <div className="zoom-icon">{t("Zoomed Project")}</div>
        </div>
      )}
    </section>
  );
};

export default Certificate;
