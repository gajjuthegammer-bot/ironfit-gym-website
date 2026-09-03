const CTA = () => {
  return (
    <section className="home-cta" id="join">
      <div className="home-cta__overlay"></div>

      <div className="home-cta__container">
        <p className="home-cta__eyebrow">YOUR TIME IS NOW</p>

        <h2 className="home-cta__title">
          STOP WAITING.
          <span>START TRAINING.</span>
        </h2>

        <p className="home-cta__description">
          Build strength. Build discipline. Build the strongest
          version of yourself.
        </p>

        <a href="#membership" className="home-cta__button">
          Join IronFit
          <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default CTA;