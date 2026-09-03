const ProfileAccount = ({
  user,
  hasMembership,
  editMode,
  formData,
  handleChange,
  handleUpdate,
  handleCancel,
  loading,
}) => {
  return (
    <div className="profile-page__section">

      <div className="profile-page__section-heading">
        <p>ACCOUNT INFORMATION</p>
        <span>01</span>
      </div>

      {!editMode ? (

        <div className="profile-page__details">

          <div className="profile-page__detail">
            <span>FULL NAME</span>
            <strong>{user.name}</strong>
          </div>

          <div className="profile-page__detail">
            <span>EMAIL ADDRESS</span>
            <strong>{user.email}</strong>
          </div>

          <div className="profile-page__detail">
            <span>PHONE NUMBER</span>
            <strong>
              {user.phone || "Not added"}
            </strong>
          </div>

          <div className="profile-page__detail">
            <span>MEMBERSHIP</span>
            <strong>
              {hasMembership
                ? user.membership.plan
                : "Not Selected"}
            </strong>
          </div>

        </div>

      ) : (

        <form
          className="profile-page__edit-form"
          onSubmit={handleUpdate}
        >

          <div className="profile-page__edit-field">
            <label htmlFor="profile-name">
              FULL NAME
            </label>

            <input
              type="text"
              id="profile-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>

          <div className="profile-page__edit-field">
            <label htmlFor="profile-email">
              EMAIL ADDRESS
            </label>

            <input
              type="email"
              id="profile-email"
              value={user.email}
              disabled
            />

            <small>
              Email address cannot be changed here.
            </small>
          </div>

          <div className="profile-page__edit-field">
            <label htmlFor="profile-phone">
              PHONE NUMBER
            </label>

            <input
              type="tel"
              id="profile-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="profile-page__edit-actions">

            <button
              type="submit"
              className="profile-page__button profile-page__button--primary"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Changes"}
              <span>→</span>
            </button>

            <button
              type="button"
              className="profile-page__button profile-page__button--secondary"
              onClick={handleCancel}
              disabled={loading}
            >
              Cancel
            </button>

          </div>

        </form>

      )}

    </div>
  );
};

export default ProfileAccount;