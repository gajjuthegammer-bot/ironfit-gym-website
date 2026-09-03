const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="contact-hero__overlay"></div>

      <div className="contact-hero__container">
        <p className="contact-hero__eyebrow">
          GET IN TOUCH
        </p>

        <h1 className="contact-hero__title">
          LET'S
          <span>TALK.</span>
        </h1>

        <p className="contact-hero__description">
          Have a question about memberships, training or the gym?
          Our team is ready to help.
        </p>
      </div>

      <div className="contact-hero__scroll">
        <span>CONTACT IRONFIT</span>
        <span>↓</span>
      </div>
    </section>
  );
};

export default ContactHero;