import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import LanguageToggle from './LanguageToggle';

function Navbar() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo-link">
          <img src="/logo.png" alt="Form Gym Logo" className="logo-image" />
        </Link>
        <ul className="nav-menu">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              {t.nav.about}
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>
              {t.nav.services}
            </NavLink>
          </li>
          <li>
            <NavLink to="/location" className={({ isActive }) => isActive ? 'active' : ''}>
              {t.nav.location}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
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