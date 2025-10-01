import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

function Services() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <section className="page-hero">
        <h1>{t.services.title}</h1>
      </section>

      <section className="offerings">
        <div className="container">
          <div className="offering-block">
            <div className="offering-content">
              <h2>{t.services.crossfit.title}</h2>
              <p>{t.services.crossfit.description}</p>
              <ul className="features">
                {t.services.crossfit.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="offering-image">
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop" alt="CrossFit Training" />
            </div>
          </div>

          <div className="offering-block reverse">
            <div className="offering-content">
              <h2>{t.services.personal.title}</h2>
              <p>{t.services.personal.description}</p>
              <ul className="features">
                {t.services.personal.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="offering-image">
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop" alt="Personal Training" />
            </div>
          </div>

          <div className="offering-block">
            <div className="offering-content">
              <h2>{t.services.pilates.title}</h2>
              <p>{t.services.pilates.description}</p>
              <ul className="features">
                {t.services.pilates.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="offering-image">
              <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop" alt="Pilates" />
            </div>
          </div>

          <div className="gallery">
            <h2 className="section-title">{t.services.facility}</h2>
            <div className="photo-grid">
              <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=300&fit=crop" alt="Gym Interior" />
              <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop" alt="Training Equipment" />
              <img src="https://images.unsplash.com/photo-1623874514711-0f321325f318?w=400&h=300&fit=crop" alt="Workout Space" />
              <img src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=400&h=300&fit=crop" alt="CrossFit Area" />
              <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop" alt="Training Session" />
              <img src="https://images.unsplash.com/photo-1521805103424-d8f8430e8933?w=400&h=300&fit=crop" alt="Gym Atmosphere" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;