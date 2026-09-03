const ProgramsHero = () => {
  return (
    <section className="programs-hero">
      <div className="programs-hero__overlay"></div>

      <div className="programs-hero__container">
        <p className="programs-hero__eyebrow">
          TRAINING PROGRAMS
        </p>

        <h1 className="programs-hero__title">
          TRAIN
          <span>WITH PURPOSE.</span>
        </h1>

        <p className="programs-hero__description">
          Structured training designed to help you build strength,
          improve fitness and achieve lasting results.
        </p>
      </div>

      <div className="programs-hero__scroll">
        <span>SCROLL TO EXPLORE</span>
        <span>↓</span>
      </div>
    </section>
  );
};

export default ProgramsHero;