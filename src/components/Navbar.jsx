import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { useState } from 'react';
import '../styles/Navbar.scss';

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleHomeClick = () => {
    window.location.reload(); // sadece home'a özel
  };

  return (
    <header className="navbar">
      <div className="navbar__left">
        <span className="navbar__logo" onClick={handleHomeClick}>Asel Turatbek</span>
      </div>

      <div className={`navbar__center ${isOpen ? 'open' : ''}`}>
        <span onClick={handleHomeClick}>{t('home')}</span>
        <span onClick={() => scrollTo('about')}>{t('about')}</span>
        <span onClick={() => scrollTo('projects')}>{t('projects.navbar')}</span>
        <span onClick={() => scrollTo('contact')}>{t('contact')}</span>
      </div>

      <div className="navbar__right">
        <LanguageSwitcher />
        <ThemeToggle />
        <div className="navbar__burger" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
