const Trainers = () => {
  const trainers = [
    {
      name: "Rahul Sharma",
      role: "Strength Coach",
      experience: "08 YEARS EXPERIENCE",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=85",
    },
    {
      name: "Aman Patel",
      role: "Fitness Trainer",
      experience: "06 YEARS EXPERIENCE",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
    },
    {
      name: "Priya Shah",
      role: "Fitness Coach",
      experience: "05 YEARS EXPERIENCE",
      image:
        "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1000&q=85",
    },
  ];

  return (
    <section className="home-trainers" id="trainers">
      <div className="home-trainers__container">

        <div className="home-trainers__heading">
          <div>
            <p className="home-trainers__eyebrow">
              MEET THE TEAM
            </p>

            <h2 className="home-trainers__title">
              TRAIN WITH
              <span>EXPERTS.</span>
            </h2>
          </div>

          <p className="home-trainers__intro">
            Our trainers bring experience, discipline, and
            personalized guidance to every workout.
          </p>
        </div>

        <div className="home-trainers__grid">
          {trainers.map((trainer, index) => (
            <article
              className="home-trainers__card"
              key={trainer.name}
            >
              <img
                className="home-trainers__image"
                src={trainer.image}
                alt={trainer.name}
              />

              <div className="home-trainers__overlay"></div>

              <div className="home-trainers__index">
                0{index + 1}
              </div>

              <div className="home-trainers__content">
                <p className="home-trainers__experience">
                  {trainer.experience}
                </p>

                <h3>{trainer.name}</h3>

                <span>{trainer.role}</span>
              </div>

              <div className="home-trainers__arrow">
                ↗
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Trainers;