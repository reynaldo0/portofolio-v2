import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Skills.css";
import skillsData from "../../docs/SkillsData";

const Skills = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);
  const [visibleItems, setVisibleItems] = useState(isMobile ? 4 : 6);

  // Update state ketika ukuran layar berubah
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(mobile);
      setVisibleItems(mobile ? 4 : 6);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Fungsi untuk load more
  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + (isMobile ? 4 : 6));
  };

  return (
    <section className="skills section" id="skills">
      <h2 className="section_title" data-aos="fade-up" data-aos-duration="600">
        | {t("Keahlian")} |
      </h2>
      <span className="section_subtitle"></span>

      <div className="skills_container container grid">
        <div>
          <div className="skills_content">
            <div className="skills_list grid">
              {skillsData.slice(0, visibleItems).map((skill, index) => (
                <div className="skill_card" key={index} data-aos="fade-up" data-aos-duration="600">
                  <div className="icon_skill_svg">
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                  <h3 className="skills_name">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {visibleItems < skillsData.length && (
        <div className="load_more_container">
          <button className="load_more_button" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default Skills;
