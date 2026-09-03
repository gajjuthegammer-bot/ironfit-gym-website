const ProgramsCTA = () => {
  return (
    <section className="programs-cta">
      <div className="programs-cta__overlay"></div>

      <div className="programs-cta__container">
        <p className="programs-cta__eyebrow">
          YOUR GOALS. YOUR JOURNEY.
        </p>

        <h2 className="programs-cta__title">
          CHOOSE YOUR
          <span>PROGRAM.</span>
        </h2>

        <p className="programs-cta__description">
          Whatever your goal, the right training plan can help
          you move forward with confidence.
        </p>

        <a
          href="/#membership"
          className="programs-cta__button"
        >
          Start Your Journey
          <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default ProgramsCTA;