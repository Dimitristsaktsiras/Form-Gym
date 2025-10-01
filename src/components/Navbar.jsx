import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import LanguageToggle from './LanguageToggle';

function Navbar() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img src={import.meta.env.BASE_URL + 'logo.png'} alt="Form Gym Logo" className="logo-image" />
        </Link>

        <button className="burger-menu" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
              {t.nav.about}
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
              {t.nav.services}
            </NavLink>
          </li>
          <li>
            <NavLink to="/location" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
              {t.nav.location}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
              {t.nav.contact}
            </NavLink>
          </li>
          <li>
            <LanguageToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;