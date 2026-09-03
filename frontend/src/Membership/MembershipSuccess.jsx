import { useLocation, useNavigate } from "react-router-dom";

const MembershipSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const plan = location.state?.plan;

  return (
    <main className="membership-success">

      <div className="membership-success__container">

        <div className="membership-success__number">
          01
        </div>

        <div className="membership-success__icon">
          ✓
        </div>

        <p className="membership-success__eyebrow">
          MEMBERSHIP CONFIRMED
        </p>

        <h1 className="membership-success__title">
          YOU'RE
          <span>IN.</span>
        </h1>

        <p className="membership-success__text">
          Welcome to IronFit. Your membership has been
          successfully activated.
        </p>

        {plan && (
          <div className="membership-success__plan">

            <div>
              <span>PLAN</span>
              <strong>
                {plan.name}
              </strong>
            </div>

            <div>
              <span>PRICE</span>
              <strong>
                ₹{plan.price}
              </strong>
            </div>

            <div>
              <span>DURATION</span>
              <strong>
                1 MONTH
              </strong>
            </div>

          </div>
        )}

        <div className="membership-success__actions">

          <button
            type="button"
            onClick={() => navigate("/profile")}
          >
            VIEW MY PROFILE →
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
          >
            BACK TO HOME
          </button>

        </div>

      </div>

    </main>
  );
};

export default MembershipSuccess;