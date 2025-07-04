import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { useState } from 'react';
import '../styles/Navbar.scss';

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__left">
        <Link to="/" className="navbar__logo">Asel Turatbek</Link>
      </div>

      <div className={`navbar__center ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>{t('home')}</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>{t('about')}</Link>
        <Link to="/projects" onClick={() => setIsOpen(false)}>{t('projects')}</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>{t('contact')}</Link>
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
