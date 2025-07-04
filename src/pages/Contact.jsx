import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/Page.scss";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="page contact-page">
      <h1>{t("contact")}</h1>
      <p>{t("contactContent")}</p>
    </section>
  );
};

export default Contact;
