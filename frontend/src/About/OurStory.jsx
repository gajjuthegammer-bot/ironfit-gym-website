const OurStory = () => {
  return (
    <section className="about-story">
      <div className="about-story__container">

        <div className="about-story__content">
          <p className="about-story__eyebrow">
            OUR STORY
          </p>

          <h2 className="about-story__title">
            BUILT FOR
            <span>PROGRESS.</span>
          </h2>

          <p className="about-story__text">
            IronFit was created with one simple idea — training
            should be more than just showing up at the gym.
          </p>

          <p className="about-story__text">
            We believe real transformation comes from consistency,
            discipline and the right environment. That's why we
            created a space where beginners and experienced
            athletes can train with purpose.
          </p>

          <div className="about-story__stats">
            <div className="about-story__stat">
              <strong>10+</strong>
              <span>YEARS EXPERIENCE</span>
            </div>

            <div className="about-story__stat">
              <strong>500+</strong>
              <span>ACTIVE MEMBERS</span>
            </div>
          </div>
        </div>

        <div className="about-story__visual">

          <div className="about-story__image about-story__image--main"></div>

          <div className="about-story__image about-story__image--small"></div>

          <div className="about-story__number">
            01
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurStory;