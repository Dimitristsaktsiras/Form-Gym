import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <section className="page-hero">
        <h1>{t.contact.title}</h1>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-intro">
              <h2>{t.contact.getInTouch}</h2>
              <p>{t.contact.intro}</p>

              <div className="quick-contact">
                <div className="quick-info">
                  <strong>📍 {t.contact.address}</strong>
                  <p>{t.contact.addressText}</p>
                </div>
                <div className="quick-info">
                  <strong>📞 {t.contact.phone}</strong>
                  <p>00000</p>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">{t.contact.form.firstName} {t.contact.form.required}</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">{t.contact.form.lastName} {t.contact.form.required}</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">{t.contact.form.email} {t.contact.form.required}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">{t.contact.form.phone}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="interest">{t.contact.form.interest} {t.contact.form.required}</label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                    >
                      <option value="">{t.contact.form.interestOptions.placeholder}</option>
                      <option value="crossfit">{t.contact.form.interestOptions.crossfit}</option>
                      <option value="personal">{t.contact.form.interestOptions.personal}</option>
                      <option value="pilates">{t.contact.form.interestOptions.pilates}</option>
                      <option value="multiple">{t.contact.form.interestOptions.multiple}</option>
                      <option value="info">{t.contact.form.interestOptions.info}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">{t.contact.form.message} {t.contact.form.required}</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.form.messagePlaceholder}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-large">{t.contact.form.submit}</button>
                </form>
              ) : (
                <div className="form-message success">
                  <h3>{t.contact.success.title}</h3>
                  <p>{t.contact.success.message}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;