const ContactCTA = () => {
  return (
    <section className="contact-cta">
      <div className="contact-cta__overlay"></div>

      <div className="contact-cta__container">
        <p className="contact-cta__eyebrow">
          READY TO START?
        </p>

        <h2 className="contact-cta__title">
          YOUR
          <span>JOURNEY</span>
          STARTS NOW.
        </h2>

        <p className="contact-cta__description">
          Don't just think about getting stronger.
          Take the first step and start training today.
        </p>

        <a
          href="/membership"
          className="contact-cta__button"
        >
          View Membership
          <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;