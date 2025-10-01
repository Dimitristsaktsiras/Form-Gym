import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <section className="hero">
        <div className="spotlight spotlight-1"></div>
        <div className="spotlight spotlight-2"></div>
        <div className="spotlight spotlight-3"></div>
        <div className="hero-content">
          <img src="/Form-Gym/logo.png" alt="Form Gym" className="hero-logo" />
          <h1>{t.hero.title} <span className="highlight">{t.hero.titleHighlight}</span></h1>
          <p>{t.hero.subtitle}</p>
          <div className="social-links">
            <a
              href="https://www.instagram.com/form.ioannina/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-link"
              aria-label="Follow us on Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>@form.ioannina</span>
            </a>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2 className="section-title">{t.about.title}</h2>
          <p className="intro-text">
            {t.about.intro}
          </p>

          <div className="services-overview">
            <div className="service-card">
              <h3>{t.about.crossfit.title}</h3>
              <p>{t.about.crossfit.description}</p>
            </div>
            <div className="service-card">
              <h3>{t.about.personal.title}</h3>
              <p>{t.about.personal.description}</p>
            </div>
            <div className="service-card">
              <h3>{t.about.pilates.title}</h3>
              <p>{t.about.pilates.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="instructors">
        <div className="container">
          <h2 className="section-title">{t.instructors.title}</h2>

          <div className="instructor-grid">
            <div className="instructor-card">
              <div className="instructor-image">VS</div>
              <h3>{t.instructors.vasilis.name}</h3>
              <p className="role">{t.instructors.vasilis.role}</p>
              <p className="bio">{t.instructors.vasilis.bio}</p>
            </div>

            <div className="instructor-card">
              <div className="instructor-image">NP</div>
              <h3>{t.instructors.natalia.name}</h3>
              <p className="role">{t.instructors.natalia.role}</p>
              <p className="bio">{t.instructors.natalia.bio}</p>
            </div>

            <div className="instructor-card">
              <div className="instructor-image">MM</div>
              <h3>{t.instructors.martha.name}</h3>
              <p className="role">{t.instructors.martha.role}</p>
              <p className="bio">{t.instructors.martha.bio}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;