const Programs = () => {
  const programs = [
    {
      number: "01",
      title: "Strength",
      subtitle: "Build Power",
      description:
        "Progressive training designed to build strength, muscle, and physical performance.",
      image:
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85",
    },
    {
      number: "02",
      title: "Fat Loss",
      subtitle: "Burn & Transform",
      description:
        "Structured workouts to improve conditioning, burn calories, and transform your body.",
      image:
        "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=85",
    },
    {
      number: "03",
      title: "Personal Training",
      subtitle: "One On One",
      description:
        "Get focused guidance, personalized workouts, and expert support throughout your journey.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  return (
    <section className="home-programs" id="programs">
      <div className="home-programs__container">

        <div className="home-programs__heading">
          <div>
            <p className="home-programs__eyebrow">
              TRAIN WITH PURPOSE
            </p>

            <h2 className="home-programs__title">
              FIND YOUR
              <span>PROGRAM.</span>
            </h2>
          </div>

          <p className="home-programs__intro">
            Whether you want to build muscle, lose fat, or improve
            your overall fitness, train with a program built around
            your goal.
          </p>
        </div>

        <div className="home-programs__grid">
          {programs.map((program) => (
            <article
              className="home-programs__card"
              key={program.number}
            >
              <img
                className="home-programs__image"
                src={program.image}
                alt={program.title}
              />

              <div className="home-programs__overlay"></div>

              <div className="home-programs__number">
                {program.number}
              </div>

              <div className="home-programs__content">
                <p>{program.subtitle}</p>

                <h3>{program.title}</h3>

                <span className="home-programs__description">
                  {program.description}
                </span>

                <button
                  type="button"
                  className="home-programs__link"
                >
                  Explore Program
                  <span>↗</span>
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Programs;