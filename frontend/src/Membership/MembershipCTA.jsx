const MembershipCTA = () => {
  return (
    <section className="membership-cta">
      <div className="membership-cta__overlay"></div>

      <div className="membership-cta__container">
        <p className="membership-cta__eyebrow">
          NO MORE EXCUSES
        </p>

        <h2 className="membership-cta__title">
          YOUR
          <span>TIME IS NOW.</span>
        </h2>

        <p className="membership-cta__description">
          Choose your membership, step into the gym and start
          building the strongest version of yourself.
        </p>

        <a
          href="/membership"
          className="membership-cta__button"
        >
          Join IronFit
          <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default MembershipCTA;