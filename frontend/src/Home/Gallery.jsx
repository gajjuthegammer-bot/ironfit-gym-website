const Gallery = () => {
  const galleryItems = [
    {
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
      title: "Train Hard",
      className: "home-gallery__item--large",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=85",
      title: "Build Strength",
      className: "",
    },
    {
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=85",
      title: "Stay Focused",
      className: "",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85",
      title: "Keep Moving",
      className: "",
    },
    {
      image:
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=85",
      title: "Your Gym",
      className: "home-gallery__item--wide",
    },
  ];

  return (
    <section className="home-gallery" id="gallery">
      <div className="home-gallery__container">

        <div className="home-gallery__heading">
          <div>
            <p className="home-gallery__eyebrow">
              INSIDE IRONFIT
            </p>

            <h2 className="home-gallery__title">
              TRAIN.
              <span>LIVE.</span>
              REPEAT.
            </h2>
          </div>

          <p className="home-gallery__intro">
            Step inside an environment built for focus,
            discipline, energy, and consistent progress.
          </p>
        </div>

        <div className="home-gallery__grid">
          {galleryItems.map((item, index) => (
            <article
              className={`home-gallery__item ${item.className}`}
              key={`${item.title}-${index}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="home-gallery__image"
              />

              <div className="home-gallery__overlay"></div>

              <div className="home-gallery__number">
                0{index + 1}
              </div>

              <div className="home-gallery__caption">
                <span>{item.title}</span>
                <i>↗</i>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;