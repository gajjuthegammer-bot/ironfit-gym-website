const ContactInfo = () => {
  return (
    <section className="contact-info">
      <div className="contact-info__container">

        <div className="contact-info__heading">
          <p className="contact-info__eyebrow">
            CONTACT IRONFIT
          </p>

          <h2 className="contact-info__title">
            WE'RE
            <span>HERE.</span>
          </h2>

          <p className="contact-info__description">
            Visit us, give us a call or send us a message.
            Our team will be happy to help you get started.
          </p>
        </div>

        <div className="contact-info__grid">

          <div className="contact-info__item">
            <span className="contact-info__number">01</span>

            <p className="contact-info__label">
              CALL US
            </p>

            <a
              href="tel:+919999999999"
              className="contact-info__value"
            >
              +91 99999 99999
            </a>
          </div>

          <div className="contact-info__item">
            <span className="contact-info__number">02</span>

            <p className="contact-info__label">
              EMAIL
            </p>

            <a
              href="mailto:hello@ironfit.com"
              className="contact-info__value"
            >
              hello@ironfit.com
            </a>
          </div>

          <div className="contact-info__item">
            <span className="contact-info__number">03</span>

            <p className="contact-info__label">
              LOCATION
            </p>

            <p className="contact-info__value">
              Surat, Gujarat
              <br />
              India
            </p>
          </div>

          <div className="contact-info__item">
            <span className="contact-info__number">04</span>

            <p className="contact-info__label">
              OPENING HOURS
            </p>

            <p className="contact-info__value">
              Monday – Saturday
              <br />
              5:30 AM – 10:00 PM
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactInfo;