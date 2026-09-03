import { Link } from "react-router-dom";

const ProfileMembership = ({ user, hasMembership }) => {
  return (
    <div className="profile-page__section">

      <div className="profile-page__section-heading">
        <p>MEMBERSHIP</p>
        <span>02</span>
      </div>

      {hasMembership ? (

        <div className="profile-page__membership">

          <div className="profile-page__membership-top">

            <div>
              <p className="profile-page__membership-label">
                CURRENT PLAN
              </p>

              <h3>
                {user.membership.plan}
              </h3>
            </div>

            <span className="profile-page__membership-status">
              {user.membership.status || "Active"}
            </span>

          </div>

          <div className="profile-page__membership-details">

            <div>
              <span>PRICE</span>

              <strong>
                ₹
                {user.membership.price?.toLocaleString(
                  "en-IN"
                )}
                <small> / MONTH</small>
              </strong>
            </div>

            <div>
              <span>START DATE</span>

              <strong>
                {user.membership.startDate
                  ? new Date(
                      user.membership.startDate
                    ).toLocaleDateString("en-IN")
                  : "Not available"}
              </strong>
            </div>

            <div>
              <span>EXPIRY DATE</span>

              <strong>
                {user.membership.expiryDate
                  ? new Date(
                      user.membership.expiryDate
                    ).toLocaleDateString("en-IN")
                  : "Not available"}
              </strong>
            </div>

          </div>

          <Link
            to="/membership"
            className="profile-page__membership-link"
          >
            View Membership Plans
            <span>→</span>
          </Link>

        </div>

      ) : (

        <div className="profile-page__membership-empty">

          <div>
            <p>NO ACTIVE MEMBERSHIP</p>

            <span>
              Choose a plan and start your
              IronFit journey.
            </span>
          </div>

          <Link
            to="/membership"
            className="profile-page__membership-link"
          >
            Choose Plan
            <span>→</span>
          </Link>

        </div>

      )}

    </div>
  );
};

export default ProfileMembership;