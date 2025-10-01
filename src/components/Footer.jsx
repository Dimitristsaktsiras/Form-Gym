import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer>
      <div className="container">
        <p>{t.footer.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;