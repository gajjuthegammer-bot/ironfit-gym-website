const TrainersCTA = () => {
  return (
    <section className="trainers-cta">
      <div className="trainers-cta__overlay"></div>

      <div className="trainers-cta__container">
        <p className="trainers-cta__eyebrow">
          READY TO TRAIN?
        </p>

        <h2 className="trainers-cta__title">
          FIND YOUR
          <span>COACH.</span>
        </h2>

        <p className="trainers-cta__description">
          Get the guidance, structure and accountability you need
          to make every workout count.
        </p>

        <a
          href="/membership"
          className="trainers-cta__button"
        >
          Start Training
          <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default TrainersCTA;