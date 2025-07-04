import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/Page.scss";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="page about-page">
      <h1>{t("about")}</h1>
      <p>{t("aboutContent")}</p>
    </section>
  );
};

export default About;
