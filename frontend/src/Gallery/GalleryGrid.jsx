const GalleryGrid = () => {
  return (
    <section className="gallery-grid">
      <div className="gallery-grid__container">

        <div className="gallery-grid__heading">
          <p className="gallery-grid__eyebrow">
            THE IRONFIT EXPERIENCE
          </p>

          <h2 className="gallery-grid__title">
            TRAIN.
            <span>MOVE.</span>
            REPEAT.
          </h2>
        </div>

        <div className="gallery-grid__layout">

          <div className="gallery-grid__item gallery-grid__item--one">
            <div className="gallery-grid__image"></div>
            <span>01</span>
          </div>

          <div className="gallery-grid__item gallery-grid__item--two">
            <div className="gallery-grid__image"></div>
            <span>02</span>
          </div>

          <div className="gallery-grid__item gallery-grid__item--three">
            <div className="gallery-grid__image"></div>
            <span>03</span>
          </div>

          <div className="gallery-grid__item gallery-grid__item--four">
            <div className="gallery-grid__image"></div>
            <span>04</span>
          </div>

          <div className="gallery-grid__item gallery-grid__item--five">
            <div className="gallery-grid__image"></div>
            <span>05</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GalleryGrid;