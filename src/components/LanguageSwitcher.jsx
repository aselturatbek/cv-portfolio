import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FiChevronDown } from 'react-icons/fi';
import '../styles/LanguageSwitcher.scss'; 
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleMenu = () => setOpen(!open);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  // Dropdown dışında bir yere tıklanınca kapansın
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = i18n.language || 'en';

  return (
    <div className="lang-dropdown" ref={dropdownRef}>
      <button className="lang-button" onClick={toggleMenu}>
        {currentLang.toUpperCase()} <FiChevronDown size={14} />
      </button>
      {open && (
        <div className="lang-menu">
          <div onClick={() => changeLanguage('en')}>EN</div>
          <div onClick={() => changeLanguage('tr')}>TR</div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
