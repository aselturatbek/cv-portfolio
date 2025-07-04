import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/Page.scss";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="page projects-page">
      <h1>{t("projects")}</h1>
      <p>{t("projectsContent")}</p>
    </section>
  );
};

export default Projects;
