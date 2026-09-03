const AboutCTA = () => {
  return (
    <section className="about-cta">

      <div className="about-cta__overlay"></div>

      <div className="about-cta__container">

        <p className="about-cta__eyebrow">
          READY TO START?
        </p>

        <h2 className="about-cta__title">
          YOUR
          <span>JOURNEY</span>
          STARTS HERE.
        </h2>

        <p className="about-cta__description">
          Stop waiting for the perfect time.
          Start building the stronger version of yourself today.
        </p>

        <a
          href="/#membership"
          className="about-cta__button"
        >
          Explore Membership
          <span>→</span>
        </a>

      </div>

    </section>
  );
};

export default AboutCTA;