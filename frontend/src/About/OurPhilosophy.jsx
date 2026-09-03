const OurPhilosophy = () => {
  const philosophyItems = [
    {
      number: "01",
      title: "DISCIPLINE",
      text: "Progress starts with consistency. We help you build habits that last.",
    },
    {
      number: "02",
      title: "STRENGTH",
      text: "Build physical strength while developing the confidence to push further.",
    },
    {
      number: "03",
      title: "COMMUNITY",
      text: "Train around people who motivate you to keep moving forward.",
    },
  ];

  return (
    <section className="about-philosophy">
      <div className="about-philosophy__container">

        <div className="about-philosophy__heading">
          <p className="about-philosophy__eyebrow">
            OUR PHILOSOPHY
          </p>

          <h2 className="about-philosophy__title">
            TRAIN WITH
            <span>PURPOSE.</span>
          </h2>
        </div>

        <div className="about-philosophy__grid">
          {philosophyItems.map((item) => (
            <div
              className="about-philosophy__item"
              key={item.number}
            >
              <span>{item.number}</span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurPhilosophy;