const MembershipHero = () => {
  return (
    <section className="membership-hero">
      <div className="membership-hero__overlay"></div>

      <div className="membership-hero__container">
        <p className="membership-hero__eyebrow">
          MEMBERSHIP PLANS
        </p>

        <h1 className="membership-hero__title">
          INVEST IN
          <span>YOURSELF.</span>
        </h1>

        <p className="membership-hero__description">
          Simple membership plans designed to give you the
          training, equipment and support you need to progress.
        </p>
      </div>

      <div className="membership-hero__scroll">
        <span>EXPLORE MEMBERSHIPS</span>
        <span>↓</span>
      </div>
    </section>
  );
};

export default MembershipHero;