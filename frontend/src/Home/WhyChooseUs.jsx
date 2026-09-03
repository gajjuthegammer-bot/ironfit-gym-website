const WhyChooseUs = () => {
  const features = [
    {
      number: "01",
      title: "Modern Equipment",
      description:
        "Train with quality equipment designed for strength, cardio, and complete fitness.",
      icon: "↗",
    },
    {
      number: "02",
      title: "Expert Trainers",
      description:
        "Get proper guidance from experienced trainers who help you train safely and effectively.",
      icon: "✦",
    },
    {
      number: "03",
      title: "Personalized Training",
      description:
        "Follow workout routines designed around your fitness level, goals, and progress.",
      icon: "◎",
    },
    {
      number: "04",
      title: "Supportive Community",
      description:
        "Stay motivated in an energetic environment surrounded by people working toward their goals.",
      icon: "◌",
    },
  ];

  return (
    <section className="home-why" id="why-us">
      <div className="home-why__container">

        <div className="home-why__heading">
          <div>
            <p className="home-why__eyebrow">WHY IRONFIT</p>

            <h2 className="home-why__title">
              MORE THAN
              <span>A GYM.</span>
            </h2>
          </div>

          <p className="home-why__intro">
            Everything you need to build strength, improve your fitness,
            and stay consistent with your goals.
          </p>
        </div>

        <div className="home-why__grid">
          {features.map((feature) => (
            <article className="home-why__card" key={feature.number}>

              <div className="home-why__card-top">
                <span className="home-why__number">
                  {feature.number}
                </span>

                <span className="home-why__icon">
                  {feature.icon}
                </span>
              </div>

              <div className="home-why__card-content">
                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>

              <div className="home-why__line"></div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;