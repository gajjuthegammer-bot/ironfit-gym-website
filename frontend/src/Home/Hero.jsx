
const Hero = () => {
  return (
    <section className="home-hero" id="home">
      <div className="home-hero__overlay"></div>

      <div className="home-hero__container">
        <div className="home-hero__content">

          <p className="home-hero__eyebrow">
            LEVEL UP YOUR FITNESS
          </p>

          <h1 className="home-hero__title">
            BUILD YOUR
            <span>STRONGER SELF.</span>
          </h1>

          <p className="home-hero__description">
            Train with purpose. Push your limits. Become stronger,
            healthier, and more confident with IronFit.
          </p>

          <div className="home-hero__actions">
            <button
              type="button"
              className="home-hero__button home-hero__button--primary"
            >
              Join Now
              <span>→</span>
            </button>

            <button
              type="button"
              className="home-hero__button home-hero__button--secondary"
            >
              Explore Programs
            </button>
          </div>

          <div className="home-hero__stats">

            <div className="home-hero__stat">
              <strong>500+</strong>
              <span>Members</span>
            </div>

            <div className="home-hero__stat">
              <strong>10+</strong>
              <span>Expert Trainers</span>
            </div>

            <div className="home-hero__stat">
              <strong>8+</strong>
              <span>Years Experience</span>
            </div>

          </div>

        </div>
      </div>

      <div className="home-hero__scroll">
        <span>SCROLL TO EXPLORE</span>
        <i></i>
      </div>
    </section>
  );
}

export default Hero;

