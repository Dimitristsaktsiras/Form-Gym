import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import Map from '../components/Map';

function Location() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <section className="page-hero">
        <h1>{t.location.title}</h1>
      </section>

      <section className="location-section">
        <div className="container">
          <div className="location-content">
            <div className="location-info">
              <h2>{t.location.visit}</h2>
              <div className="info-block">
                <h3>{t.location.address}</h3>
                <p style={{ whiteSpace: 'pre-line' }}>{t.location.addressText}</p>
              </div>

              <div className="info-block">
                <h3>{t.location.phone}</h3>
                <p><a href="tel:00000">00000</a></p>
              </div>

              <div className="info-block">
                <h3>{t.location.hours}</h3>
                <p style={{ whiteSpace: 'pre-line' }}>{t.location.hoursText}</p>
              </div>

              <div className="cta-box">
                <h3>{t.location.cta.title}</h3>
                <p>{t.location.cta.description}</p>
                <Link to="/contact" className="btn">{t.location.cta.button}</Link>
              </div>
            </div>

            <div className="map-container">
              <Map />
            </div>
          </div>

          <div className="directions">
            <h2>{t.location.directions.title}</h2>
            <div className="directions-grid">
              <div className="direction-card">
                <h3>{t.location.directions.car.title}</h3>
                <p>{t.location.directions.car.description}</p>
              </div>
              <div className="direction-card">
                <h3>{t.location.directions.bus.title}</h3>
                <p>{t.location.directions.bus.description}</p>
              </div>
              <div className="direction-card">
                <h3>{t.location.directions.walk.title}</h3>
                <p>{t.location.directions.walk.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Location;