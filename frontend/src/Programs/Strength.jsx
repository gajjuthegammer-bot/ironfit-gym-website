const Strength = () => {
  return (
    <section className="program-strength">
      <div className="program-strength__container">

        <div className="program-strength__image">
          <span className="program-strength__number">01</span>
        </div>

        <div className="program-strength__content">
          <p className="program-strength__eyebrow">
            PROGRAM 01
          </p>

          <h2 className="program-strength__title">
            BUILD
            <span>STRENGTH.</span>
          </h2>

          <p className="program-strength__text">
            Build real strength with structured resistance training
            designed to improve power, muscle development and overall
            physical performance.
          </p>

          <div className="program-strength__details">
            <div>
              <span>FOCUS</span>
              <strong>Strength & Muscle</strong>
            </div>

            <div>
              <span>LEVEL</span>
              <strong>Beginner to Advanced</strong>
            </div>

            <div>
              <span>TRAINING</span>
              <strong>3–5 Days / Week</strong>
            </div>
          </div>

          <a href="/#membership" className="program-strength__button">
            Start Training
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Strength;