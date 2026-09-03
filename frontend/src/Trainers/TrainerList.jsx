const TrainerList = () => {
  return (
    <section className="trainer-list">
      <div className="trainer-list__container">

        <div className="trainer-list__heading">
          <p className="trainer-list__eyebrow">
            OUR COACHES
          </p>

          <h2 className="trainer-list__title">
            MEET THE
            <span>TEAM.</span>
          </h2>

          <p className="trainer-list__description">
            Our trainers combine experience, discipline and
            practical knowledge to help you train smarter.
          </p>
        </div>

        <div className="trainer-list__grid">

          <article className="trainer-card">
            <div className="trainer-card__image trainer-card__image--one">
              <span className="trainer-card__number">01</span>
            </div>

            <div className="trainer-card__content">
              <p className="trainer-card__role">
                HEAD COACH
              </p>

              <h3 className="trainer-card__name">
                ALEX
                <span>REED</span>
              </h3>

              <p className="trainer-card__speciality">
                Strength & Conditioning
              </p>
            </div>
          </article>

          <article className="trainer-card">
            <div className="trainer-card__image trainer-card__image--two">
              <span className="trainer-card__number">02</span>
            </div>

            <div className="trainer-card__content">
              <p className="trainer-card__role">
                FITNESS COACH
              </p>

              <h3 className="trainer-card__name">
                MAYA
                <span>STONE</span>
              </h3>

              <p className="trainer-card__speciality">
                Fat Loss & Conditioning
              </p>
            </div>
          </article>

          <article className="trainer-card">
            <div className="trainer-card__image trainer-card__image--three">
              <span className="trainer-card__number">03</span>
            </div>

            <div className="trainer-card__content">
              <p className="trainer-card__role">
                PERSONAL TRAINER
              </p>

              <h3 className="trainer-card__name">
                RYAN
                <span>COLE</span>
              </h3>

              <p className="trainer-card__speciality">
                Personal Training & Mobility
              </p>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
};

export default TrainerList;