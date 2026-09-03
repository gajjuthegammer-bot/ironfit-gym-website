const Stats = () => {
  const stats = [
    {
      number: "500+",
      label: "Active Members",
    },
    {
      number: "10+",
      label: "Expert Trainers",
    },
    {
      number: "8+",
      label: "Years Experience",
    },
    {
      number: "95%",
      label: "Member Satisfaction",
    },
  ];

  return (
    <section className="home-stats" id="stats">
      <div className="home-stats__container">

        <div className="home-stats__top">
          <p className="home-stats__eyebrow">
            THE IRONFIT STANDARD
          </p>

          <p className="home-stats__description">
            Real people. Real consistency. A training environment
            built to help you become stronger every day.
          </p>
        </div>

        <div className="home-stats__grid">
          {stats.map((stat) => (
            <div className="home-stats__item" key={stat.label}>
              <strong>{stat.number}</strong>

              <span>{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;