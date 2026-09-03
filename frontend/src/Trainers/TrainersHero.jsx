const TrainersHero = () => {
  return (
    <section className="trainers-hero">
      <div className="trainers-hero__overlay"></div>

      <div className="trainers-hero__container">
        <p className="trainers-hero__eyebrow">
          MEET THE TEAM
        </p>

        <h1 className="trainers-hero__title">
          TRAIN WITH
          <span>EXPERTS.</span>
        </h1>

        <p className="trainers-hero__description">
          Experienced coaches who bring knowledge, discipline
          and the right guidance to every training session.
        </p>
      </div>

      <div className="trainers-hero__scroll">
        <span>MEET OUR TRAINERS</span>
        <span>↓</span>
      </div>
    </section>
  );
};

export default TrainersHero;