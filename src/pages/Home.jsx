import React from "react";
import { Trans, useTranslation } from "react-i18next";
import "../styles/Home.scss";
import devImage from "../assets/images/asel_2.jpeg";

import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap,
  FaGitAlt, FaGithub, FaJsSquare,
} from "react-icons/fa";
import {
  SiTypescript, SiNestjs, SiMongodb,
  SiMysql, SiFirebase, SiJira
} from "react-icons/si";
import "./About.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

const technologies = [
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaReact />, name: "React.js / Native" },
  { icon: <FaNodeJs />, name: "Node.js / Express" },
  { icon: <SiNestjs />, name: "NestJS" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <SiJira />, name: "Agile / Jira" },
];

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h1>
            <Trans i18nKey="home.title">
              Full Stack<br />Developer
            </Trans>
          </h1>
          <p>
            <Trans i18nKey="home.intro">
              Hi, I’m <strong>Asel Turatbek Kyzy</strong><br />
              Turning innovative ideas into clean, scalable,<br />
              and user-focused <i>web & mobile</i> solutions.
            </Trans>
          </p>
        </div>
        <div className="home-image">
          <img src={devImage} alt="Asel" />
        </div>
      </div>

      <div className="tech-carousel-wrapper">
        <div className="tech-carousel">
          <div className="carousel-track">
            {[...technologies, ...technologies].map((tech, i) => (
              <div className="tech-item" key={i}>
                {tech.icon}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </section>
  );
};

export default Home;
