import React from "react";
import Slider from "react-slick";
import "../styles/Projects.scss";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import {
  SiNestjs, SiReact, SiMongodb, SiLaravel, SiMysql,
  SiFirebase, SiNodedotjs, SiOpenai, SiSqlite
} from "react-icons/si";

import masai1 from "../assets/images/masai1.png";
import masai2 from "../assets/images/masai3.png";
import masai3 from "../assets/images/masai2.png";
import ecooil1 from "../assets/images/ecooil1.png";
import ecooil2 from "../assets/images/ecooil2.png";
import salonapp1 from "../assets/images/salonapp1.png";
import salonapp2 from "../assets/images/salonapp2.png";
import salonapp3 from "../assets/images/salonapp3.png";
import salonapp4 from "../assets/images/salonapp4.png";
import salonapp5 from "../assets/images/salonapp5.png";
import zchat1 from "../assets/images/zchat1.png";
import zchat2 from "../assets/images/zchat2.png";

const Projects = () => {
  const { t } = useTranslation();

  const projectData = [
    {
      id: 1,
      title: t("projects.project1.title"),
      subtitle: t("projects.project1.subtitle"),
      description: t("projects.project1.description"),
      images: [masai1, masai2, masai3],
      github: "https://github.com/aselturatbek/masai_frontend",
      tech: [
        { icon: <SiNestjs />, name: "NestJS" },
        { icon: <SiReact />, name: "React Native" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiOpenai />, name: "OpenAi" }
      ]
    },
    {
      id: 2,
      title: t("projects.project2.title"),
      subtitle: t("projects.project2.subtitle"),
      description: t("projects.project2.description"),
      images: [ecooil1, ecooil2],
      github: "https://github.com/aselturatbek/EcoOilApp",
      tech: [
        { icon: <SiReact />, name: "React Native" },
        { icon: <SiLaravel />, name: "Laravel" },
        { icon: <SiSqlite />, name: "SQLite" }
      ]
    },
    {
      id: 3,
      title: t("projects.project3.title"),
      subtitle: t("projects.project3.subtitle"),
      description: t("projects.project3.description"),
      images: [salonapp1, salonapp3, salonapp2, salonapp4, salonapp5],
      github: "https://github.com/aselturatbek/salon-app",
      tech: [
        { icon: <SiReact />, name: "React" },
        { icon: <SiNodedotjs />, name: "Node.js / Express" },
        { icon: <SiMysql />, name: "MySQL" }
      ]
    },
    {
      id: 4,
      title: t("projects.project4.title"),
      subtitle: t("projects.project4.subtitle"),
      description: t("projects.project4.description"),
      images: [zchat1, zchat2],
      github: "https://github.com/aselturatbek/chat_app_reactjs",
      tech: [
        { icon: <SiReact />, name: "React" },
        { icon: <SiNodedotjs />, name: "Node.js / Express" },
        { icon: <SiFirebase />, name: "Firebase" }
      ]
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <section className="projects-section-v2">
      <div className="projects-header">
        <button className="tag-btn">{t("projects.titleTag")}</button>
        <h1>{t("projects.title")}</h1>
      </div>

      <div className="projects-list">
        {projectData.map((project) => (
          <div className="project-card-v2" key={project.id}>
            <div className="project-image">
              <Slider {...sliderSettings}>
                {project.images.map((img, idx) => (
                  <img src={img} key={idx} alt={`${project.title}-${idx}`} />
                ))}
              </Slider>
              <div className="slider-hint">{t("projects.swipeHint")}</div>
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="subtitle">{project.subtitle}</p>
              <p className="description">{project.description}</p>

              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>

              <div className="tech-icons">
                {project.tech.map((item, i) => (
                  <span key={i} data-tooltip={item.name}>
                    {item.icon}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
