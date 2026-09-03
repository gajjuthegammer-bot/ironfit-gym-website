const ContactForm = () => {
  return (
    <section className="contact-form">
      <div className="contact-form__container">

        <div className="contact-form__intro">
          <p className="contact-form__eyebrow">
            SEND A MESSAGE
          </p>

          <h2 className="contact-form__title">
            LET'S
            <span>CONNECT.</span>
          </h2>

          <p className="contact-form__description">
            Fill out the form and our team will get back to you
            as soon as possible.
          </p>
        </div>

        <form className="contact-form__form">

          <div className="contact-form__row">

            <div className="contact-form__field">
              <label htmlFor="name">
                YOUR NAME
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="email">
                EMAIL ADDRESS
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>

          </div>

          <div className="contact-form__row">

            <div className="contact-form__field">
              <label htmlFor="phone">
                PHONE NUMBER
              </label>

              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="subject">
                SUBJECT
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="How can we help?"
              />
            </div>

          </div>

          <div className="contact-form__field">
            <label htmlFor="message">
              YOUR MESSAGE
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="contact-form__button"
          >
            Send Message
            <span>→</span>
          </button>

        </form>

      </div>
    </section>
  );
};

export default ContactForm;