const OurValues = () => {
  const values = [
    {
      number: "01",
      title: "CONSISTENCY",
      text: "Small efforts repeated over time create lasting results.",
    },
    {
      number: "02",
      title: "FOCUS",
      text: "Train with intention and make every session count.",
    },
    {
      number: "03",
      title: "GROWTH",
      text: "Keep challenging yourself and become better than yesterday.",
    },
    {
      number: "04",
      title: "RESPECT",
      text: "Respect your body, your journey and everyone training beside you.",
    },
  ];

  return (
    <section className="about-values">
      <div className="about-values__container">

        <div className="about-values__intro">
          <p className="about-values__eyebrow">
            WHAT WE BELIEVE
          </p>

          <h2 className="about-values__title">
            BUILT ON
            <span>VALUES.</span>
          </h2>
        </div>

        <div className="about-values__list">
          {values.map((value) => (
            <div
              className="about-values__item"
              key={value.number}
            >
              <span className="about-values__number">
                {value.number}
              </span>

              <h3 className="about-values__name">
                {value.title}
              </h3>

              <p className="about-values__text">
                {value.text}
              </p>

              <span className="about-values__arrow">
                ↗
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurValues;