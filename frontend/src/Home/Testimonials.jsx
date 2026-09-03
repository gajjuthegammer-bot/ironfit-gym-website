const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "IronFit completely changed the way I approach fitness. The trainers keep me accountable, the equipment is excellent, and every workout feels purposeful.",
      name: "Arjun Mehta",
      role: "Member • 2 Years",
      initials: "AM",
    },
    {
      quote:
        "The environment is motivating without feeling intimidating. I have become stronger and more consistent than ever.",
      name: "Neha Patel",
      role: "Member • 1 Year",
      initials: "NP",
    },
    {
      quote:
        "My trainer helped me build a routine that actually fits my lifestyle. The progress has been incredible.",
      name: "Rohan Shah",
      role: "Member • 10 Months",
      initials: "RS",
    },
  ];

  return (
    <section className="home-testimonials" id="testimonials">
      <div className="home-testimonials__container">

        <div className="home-testimonials__heading">
          <div>
            <p className="home-testimonials__eyebrow">
              MEMBER STORIES
            </p>

            <h2 className="home-testimonials__title">
              BUILT BY
              <span>CONSISTENCY.</span>
            </h2>
          </div>

          <div className="home-testimonials__rating">
            <strong>4.9</strong>
            <div>
              <span>★★★★★</span>
              <p>Average Member Rating</p>
            </div>
          </div>
        </div>

        <div className="home-testimonials__layout">

          <article className="home-testimonials__featured">
            <div className="home-testimonials__quote-mark">
              “
            </div>

            <p className="home-testimonials__featured-quote">
              {testimonials[0].quote}
            </p>

            <div className="home-testimonials__author">
              <div className="home-testimonials__avatar">
                {testimonials[0].initials}
              </div>

              <div>
                <h3>{testimonials[0].name}</h3>
                <p>{testimonials[0].role}</p>
              </div>
            </div>
          </article>

          <div className="home-testimonials__side">

            {testimonials.slice(1).map((testimonial) => (
              <article
                className="home-testimonials__small"
                key={testimonial.name}
              >
                <div className="home-testimonials__small-top">
                  <span>★★★★★</span>

                  <div className="home-testimonials__small-avatar">
                    {testimonial.initials}
                  </div>
                </div>

                <p>{testimonial.quote}</p>

                <div className="home-testimonials__small-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </article>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;