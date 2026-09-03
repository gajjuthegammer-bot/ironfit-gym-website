import { useNavigate } from "react-router-dom";

const MembershipSettings = ({ user }) => {
  const navigate = useNavigate();


  /* =========================================================
     MEMBERSHIP DATA
  ========================================================= */

  const membership = user?.membership || null;


  const membershipPlan =
    membership?.plan &&
    membership.plan !== "Not Selected"
      ? membership.plan
      : "Not Selected";


  const membershipStatus =
    membership?.status || "Inactive";


  const membershipPrice =
    membership?.price
      ? `₹${membership.price.toLocaleString("en-IN")}`
      : "—";


  const membershipExpiry =
    membership?.expiryDate
      ? new Date(
          membership.expiryDate
        ).toLocaleDateString(
          "en-IN",
          {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }
        )
      : "—";


  const membershipIsActive =
    membershipStatus === "Active";


  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <div className="settings-page__card">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="settings-page__card-header">

        <div>

          <span className="settings-page__label">
            02 / MEMBERSHIP
          </span>

          <h2>
            Gym Membership
          </h2>

        </div>


        <span className="settings-page__number">
          02
        </span>

      </div>


      {/* =====================================================
          MEMBERSHIP
      ===================================================== */}

      <div className="settings-page__membership">


        {/* =================================================
            CURRENT PLAN
        ================================================= */}

        <div className="settings-page__membership-status">

          <span
            className={`settings-page__status-dot ${
              membershipIsActive
                ? "settings-page__status-dot--active"
                : ""
            }`}
          ></span>


          <div>

            <small>
              Current Plan
            </small>


            <strong>
              {membershipPlan}
            </strong>


            <span className="settings-page__membership-status-text">
              {membershipStatus}
            </span>

          </div>

        </div>


        {/* =================================================
            MEMBERSHIP DETAILS
        ================================================= */}

        <div className="settings-page__membership-details">


          {/* PRICE */}

          <div>

            <small>
              PRICE
            </small>

            <strong>
              {membershipPrice}
            </strong>

          </div>


          {/* EXPIRY */}

          <div>

            <small>
              EXPIRY
            </small>

            <strong>
              {membershipExpiry}
            </strong>

          </div>

        </div>


        {/* =================================================
            MANAGE MEMBERSHIP
        ================================================= */}

        <button
          type="button"
          onClick={() =>
            navigate("/membership")
          }
        >
          MANAGE MEMBERSHIP →
        </button>

      </div>

    </div>
  );
};

export default MembershipSettings;