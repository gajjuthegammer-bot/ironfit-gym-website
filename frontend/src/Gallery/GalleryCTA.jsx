const GalleryCTA = () => {
  return (
    <section className="gallery-cta">
      <div className="gallery-cta__overlay"></div>

      <div className="gallery-cta__container">
        <p className="gallery-cta__eyebrow">
          COME EXPERIENCE IT
        </p>

        <h2 className="gallery-cta__title">
          SEE IT.
          <span>FEEL IT.</span>
          TRAIN.
        </h2>

        <p className="gallery-cta__description">
          The best way to understand IronFit is to experience
          the atmosphere for yourself.
        </p>

        <a
          href="/membership"
          className="gallery-cta__button"
        >
          Join IronFit
          <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default GalleryCTA;
