import React, { useState } from "react";
import { academicCertificates, courseCertificates } from "../../docs/CertificateData";
import "./Certificate.css";
import { useTranslation } from "react-i18next";

const Certificate = () => {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState("academic");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);  // State untuk melacak loading

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

  // Fungsi untuk menangani gambar yang sedang dimuat
  const handleImageLoad = () => {
    setIsLoading(false);  // Gambar sudah selesai dimuat
  };

  const handleImageError = () => {
    setIsLoading(false);  // Jika gambar gagal dimuat
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
          {isLoading && <div className="loading-spinner">Loading...</div>} {/* Menampilkan efek loading */}

          <img
            src={certificates[currentIndex].img}
            alt={t("Certificate Image")}
            onLoad={handleImageLoad}   // Ketika gambar selesai dimuat
            onError={handleImageError}  // Jika gambar gagal dimuat
            onLoadStart={() => setIsLoading(true)} // Memulai loading saat gambar mulai dimuat
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
