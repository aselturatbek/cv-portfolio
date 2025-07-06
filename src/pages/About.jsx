import React from "react";
import "../styles/About.scss";
import { useTranslation, Trans } from "react-i18next";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNestjs, SiMysql } from "react-icons/si";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about-section">
      <div className="about-left">
        <button className="tag-btn">{t("about.titleTag")}</button>
        <h1>{t("about.title")}</h1>
        <p className="about-desc">{t("about.profile")}</p>
      </div>

      <div className="about-right">
        <div className="card-group">
          <div className="about-card transparent-card">
            <div className="card-header">{t("about.educationTitle")}</div>
            <p>
              <strong>{t("about.uni")}</strong><br />
              {t("about.degree")}<br />
              
            </p>
          </div>

          <div className="about-card">
            <div className="card-header">{t("about.skillsTitle")}</div>
            <ul className="tech-list">
              <li><FaReact /> React / React Native</li>
              <li><SiNestjs /> NestJS</li>
              <li><FaNodeJs /> Node.js / Express</li>
              <li><SiMysql /> MySQL / MongoDB / Firebase</li>
            </ul>
          </div>
        </div>

        <div className="card-group">
          <div className="about-card">
            <div className="card-header">{t("about.experienceTitle")}</div>
            <ul>
              <li>{t("about.exp1")}</li>
              <li>{t("about.exp2")}</li>
            </ul>
          </div>

          <div className="about-card transparent-card">
            <div className="card-header">{t("about.languagesTitle")}</div>
            <ul className="tech-list">
              <li>{t("about.lang1")}</li>
              <li>{t("about.lang2")}</li>
              <li>{t("about.lang3")}</li>
              <li>{t("about.lang4")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
