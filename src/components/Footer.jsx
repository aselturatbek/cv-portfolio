import React from "react";
import "../styles/Footer.scss";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-left">
        &copy; {currentYear} Asel Turatbek Kyzy
      </div>

      <div className="footer-center">
        
      </div>

      <div className="footer-right" onClick={scrollToTop}>
        {t("footer.backToTop")} <FaArrowUp />
      </div>
    </footer>
  );
};

export default Footer;
