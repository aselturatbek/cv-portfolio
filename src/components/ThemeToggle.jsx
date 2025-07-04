import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { BsSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import '../styles/ThemeToggle.scss';

const ThemeToggle = () => {
  const { dark, toggle } = useContext(ThemeContext);

  return (
    <div className={`theme-toggle ${dark ? 'dark' : ''}`} onClick={toggle}>
      <div className="icon sun"><BsSunFill /></div>
      <div className="icon moon"><FaMoon /></div>
      <div className="toggle-thumb"></div>
    </div>
  );
};

export default ThemeToggle;
