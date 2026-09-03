const PersonalTraining = () => {
  return (
    <section className="program-personal">
      <div className="program-personal__container">

        <div className="program-personal__image">
          <span className="program-personal__number">03</span>
        </div>

        <div className="program-personal__content">
          <p className="program-personal__eyebrow">
            PROGRAM 03
          </p>

          <h2 className="program-personal__title">
            TRAIN
            <span>PERSONALLY.</span>
          </h2>

          <p className="program-personal__text">
            Get focused guidance from a trainer who understands
            your goals. Follow a personalized plan built around
            your fitness level, progress and individual needs.
          </p>

          <div className="program-personal__details">
            <div>
              <span>FOCUS</span>
              <strong>Personalized Training</strong>
            </div>

            <div>
              <span>LEVEL</span>
              <strong>All Fitness Levels</strong>
            </div>

            <div>
              <span>SESSION</span>
              <strong>1-on-1 Coaching</strong>
            </div>
          </div>

          <a
            href="/#membership"
            className="program-personal__button"
          >
            Meet Your Trainer
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default PersonalTraining;