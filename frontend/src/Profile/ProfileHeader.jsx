const ProfileHeader = ({
  user,
  getInitials,
  imagePreview,
  selectedImage,
  handleImageSelect,
  handleImageUpload,
  imageLoading,
}) => {
  const getProfileImageUrl = (imagePath) => {
    if (!imagePath) return null;

    if (imagePath.startsWith("http")) {
      return imagePath;
    }

    return `http://localhost:3040${imagePath}`;
  };

  const profileImage =
    imagePreview ||
    getProfileImageUrl(user?.profileImage);

  return (
    <div className="profile-page__user">

      <div className="profile-page__avatar-wrapper">

        <label
          htmlFor="profile-image"
          className="profile-page__avatar"
          title="Change profile photo"
        >
          {profileImage ? (
            <img
              src={profileImage}
              alt={user?.name || "Profile"}
              className="profile-page__avatar-image"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          ) : (
            getInitials()
          )}

          <span className="profile-page__avatar-overlay">
            +
          </span>
        </label>

        <input
          id="profile-image"
          type="file"
          accept="image/jpeg,image/jpg,image/png,image/webp"
          onChange={handleImageSelect}
          hidden
        />

        {selectedImage && (
          <button
            type="button"
            className="profile-page__image-save"
            onClick={handleImageUpload}
            disabled={imageLoading}
          >
            {imageLoading
              ? "UPLOADING..."
              : "SAVE PHOTO"}
          </button>
        )}

      </div>

      <div className="profile-page__user-info">

        <p className="profile-page__user-label">
          MEMBER
        </p>

        <h2>{user?.name}</h2>

        <p>{user?.email}</p>

      </div>

    </div>
  );
};

export default ProfileHeader;