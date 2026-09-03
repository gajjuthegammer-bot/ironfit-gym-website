import { Link } from "react-router-dom";

const ProfileActions = ({
  handleEdit,
  handleLogout,
}) => {
  return (
    <div className="profile-page__actions">

      <button
        type="button"
        className="profile-page__button profile-page__button--primary"
        onClick={handleEdit}
      >
        Edit Profile
        <span>→</span>
      </button>

      <Link
        to="/membership"
        className="profile-page__button profile-page__button--secondary"
      >
        Membership Plans
        <span>→</span>
      </Link>

      <button
        type="button"
        className="profile-page__button profile-page__button--secondary"
        onClick={handleLogout}
      >
        Logout
        <span>→</span>
      </button>

    </div>
  );
};

export default ProfileActions;