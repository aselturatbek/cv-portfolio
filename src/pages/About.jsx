import React from "react";
import "../styles/About.scss";
import { useTranslation } from "react-i18next";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNestjs, SiMysql, SiMongodb, SiFirebase } from "react-icons/si";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-section">
      <div className="about-left">
        <button type="button" className="tag-btn">
          {t("about.titleTag")}
        </button>

        <h1>{t("about.title")}</h1>
        <p className="about-desc">{t("about.profile")}</p>
      </div>

      <div className="about-right">
        <div className="card-group">
          <div className="about-card transparent-card">
            <h3 className="card-header">{t("about.educationTitle")}</h3>
            <p>
              <strong>{t("about.uni")}</strong>
              <br />
              {t("about.degree")}
              <br />
              {t("about.eduMeta")}
            </p>
          </div>

          <div className="about-card">
            <h3 className="card-header">{t("about.skillsTitle")}</h3>
            <ul className="tech-list">
              <li><FaReact /> {t("about.stack1")}</li>
              <li><SiNestjs /> {t("about.stack2")}</li>
              <li><FaNodeJs /> {t("about.stack3")}</li>
              <li><SiMysql /> {t("about.stack4")}</li>
              <li><SiMongodb /> {t("about.stack5")}</li>
              <li><SiFirebase /> {t("about.stack6")}</li>
              <li><FaHtml5 /> {t("about.stack7")}</li>
              <li><FaCss3Alt /> {t("about.stack8")}</li>
            </ul>
          </div>
        </div>

        <div className="card-group">
          <div className="about-card">
            <h3 className="card-header">{t("about.experienceTitle")}</h3>

            <ul className="exp-list">
              <li>
                <strong>{t("about.exp1Title")}</strong>
                <p>{t("about.exp1Body")}</p>
              </li>
              <li>
                <strong>{t("about.exp2Title")}</strong>
                <p>{t("about.exp2Body")}</p>
              </li>
            </ul>
          </div>

          <div className="about-card transparent-card">
            <h3 className="card-header">{t("about.languagesTitle")}</h3>
            <ul className="tech-list">
              <li>{t("about.lang1")}</li>
              <li>{t("about.lang2")}</li>
              <li>{t("about.lang3")}</li>
              <li>{t("about.lang4")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
