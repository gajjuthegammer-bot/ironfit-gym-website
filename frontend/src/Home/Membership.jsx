const Membership = () => {
  const plans = [
    {
      name: "Basic",
      price: "999",
      description: "Everything you need to start your fitness journey.",
      features: [
        "Full Gym Access",
        "Cardio & Strength Area",
        "Locker Facility",
        "Basic Workout Guidance",
      ],
    },
    {
      name: "Pro",
      price: "1,499",
      popular: true,
      description: "The complete plan for serious fitness progress.",
      features: [
        "Everything in Basic",
        "Personalized Workout Plan",
        "Trainer Support",
        "Progress Tracking",
        "Nutrition Guidance",
      ],
    },
    {
      name: "Elite",
      price: "2,499",
      description: "Premium coaching for maximum results.",
      features: [
        "Everything in Pro",
        "1-on-1 Personal Training",
        "Advanced Progress Tracking",
        "Personal Nutrition Plan",
      ],
    },
  ];

  return (
    <section className="home-membership" id="membership">
      <div className="home-membership__container">

        <div className="home-membership__heading">
          <div>
            <p className="home-membership__eyebrow">
              MEMBERSHIP
            </p>

            <h2 className="home-membership__title">
              CHOOSE YOUR
              <span>COMMITMENT.</span>
            </h2>
          </div>

          <p className="home-membership__intro">
            Simple membership plans designed for different
            fitness goals. Choose your level and start training.
          </p>
        </div>

        <div className="home-membership__grid">
          {plans.map((plan) => (
            <article
              className={`home-membership__card ${
                plan.popular
                  ? "home-membership__card--popular"
                  : ""
              }`}
              key={plan.name}
            >
              {plan.popular && (
                <div className="home-membership__popular">
                  MOST POPULAR
                </div>
              )}

              <div className="home-membership__card-top">
                <p className="home-membership__plan-name">
                  {plan.name}
                </p>

                <div className="home-membership__price">
                  <span>₹</span>
                  <strong>{plan.price}</strong>
                  <small>/MONTH</small>
                </div>

                <p className="home-membership__description">
                  {plan.description}
                </p>
              </div>

              <div className="home-membership__features">
                {plan.features.map((feature) => (
                  <div
                    className="home-membership__feature"
                    key={feature}
                  >
                    <span>✓</span>
                    <p>{feature}</p>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="home-membership__button"
              >
                Choose {plan.name}
                <span>→</span>
              </button>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Membership;