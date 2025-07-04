import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/Page.scss";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="page home-page">
      <h1>{t("home")}</h1>
      <p>{t("welcomeMessage")}</p>
    </section>
  );
};

export default Home;
