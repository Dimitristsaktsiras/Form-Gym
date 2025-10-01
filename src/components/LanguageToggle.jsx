import { useLanguage } from '../context/LanguageContext';

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="language-toggle"
      aria-label="Toggle Language"
    >
      <span className={`lang-option ${language === 'en' ? 'active' : ''}`}>EN</span>
      <span className="lang-divider">|</span>
      <span className={`lang-option ${language === 'gr' ? 'active' : ''}`}>ΕΛ</span>
    </button>
  );
}

export default LanguageToggle;