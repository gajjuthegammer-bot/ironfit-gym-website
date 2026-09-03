const GalleryHero = () => {
  return (
    <section className="gallery-hero">
      <div className="gallery-hero__overlay"></div>

      <div className="gallery-hero__container">
        <p className="gallery-hero__eyebrow">
          INSIDE IRONFIT
        </p>

        <h1 className="gallery-hero__title">
          SEE THE
          <span>ENERGY.</span>
        </h1>

        <p className="gallery-hero__description">
          Explore the space, the equipment and the atmosphere
          that make every IronFit session different.
        </p>
      </div>

      <div className="gallery-hero__scroll">
        <span>EXPLORE GALLERY</span>
        <span>↓</span>
      </div>
    </section>
  );
};

export default GalleryHero;