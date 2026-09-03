import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProfileHero from "./ProfileHero";
import ProfileHeader from "./ProfileHeader";
import ProfileAccount from "./ProfileAccount";
import ProfileMembership from "./ProfileMembership";
import ProfileActions from "./ProfileActions";

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem("ironfitUser");

      if (!storedUser) {
        navigate("/login");
        return;
      }

      try {
        const parsedUser = JSON.parse(storedUser);

        setUser(parsedUser);

        setFormData({
          name: parsedUser.name || "",
          phone: parsedUser.phone || "",
        });
      } catch (error) {
        console.log("USER DATA ERROR:", error);

        localStorage.removeItem("ironfitUser");
        setUser(null);

        navigate("/login");
      }
    };

    loadUser();

    const handleUserChanged = () => {
      loadUser();
    };

    window.addEventListener(
      "ironfitUserChanged",
      handleUserChanged
    );

    return () => {
      window.removeEventListener(
        "ironfitUserChanged",
        handleUserChanged
      );
    };
  }, [navigate]);

  const getInitials = () => {
    if (!user?.name) {
      return "U";
    }

    return user.name
      .split(" ")
      .map((name) => name.charAt(0))
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEdit = () => {
    setMessage("");
    setError("");

    setFormData({
      name: user?.name || "",
      phone: user?.phone || "",
    });

    setEditMode(true);
  };

  const handleCancel = () => {
    setMessage("");
    setError("");

    setFormData({
      name: user?.name || "",
      phone: user?.phone || "",
    });

    setEditMode(false);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!formData.name.trim()) {
      setError("Full name is required");
      return;
    }

    if (!formData.phone.trim()) {
      setError("Phone number is required");
      return;
    }

    if (!user?._id) {
      setError("User information is missing");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `http://localhost:3040/user/${user._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            phone: formData.phone.trim(),
          }),
        }
      );

      const data = await response.json();

      if (data.status) {
        const updatedUser = data.data;

        setUser(updatedUser);

        localStorage.setItem(
          "ironfitUser",
          JSON.stringify(updatedUser)
        );

        window.dispatchEvent(
          new Event("ironfitUserChanged")
        );

        setMessage("Profile updated successfully!");
        setEditMode(false);
      } else {
        setError(
          data.message || "Unable to update profile"
        );
      }
    } catch (error) {
      console.log("PROFILE UPDATE ERROR:", error);

      setError(
        "Unable to connect to server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.type)) {
      setError(
        "Only JPG, PNG and WEBP images are allowed."
      );
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Image size must be less than 5MB.");
      return;
    }

    setError("");
    setMessage("");

    setSelectedImage(file);

    const previewUrl = URL.createObjectURL(file);

    setImagePreview(previewUrl);
  };

  const handleImageUpload = async () => {
    if (!selectedImage || !user?._id) {
      return;
    }

    setImageLoading(true);
    setError("");
    setMessage("");

    try {
      const formData = new FormData();

      formData.append(
        "profileImage",
        selectedImage
      );

      const response = await fetch(
        `http://localhost:3040/user/profile-image/${user._id}`,
        {
          method: "PATCH",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok || !data.status) {
        throw new Error(
          data.message || "Image upload failed"
        );
      }

      const updatedUser = data.data;

      setUser(updatedUser);

      setSelectedImage(null);
      setImagePreview(null);

      localStorage.setItem(
        "ironfitUser",
        JSON.stringify(updatedUser)
      );

      window.dispatchEvent(
        new Event("ironfitUserChanged")
      );

      setMessage(
        "Profile photo updated successfully."
      );
    } catch (error) {
      console.log(
        "PROFILE IMAGE ERROR:",
        error
      );

      setError(
        error.message ||
          "Failed to upload profile image."
      );
    } finally {
      setImageLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("ironfitUser");

    window.dispatchEvent(
      new Event("ironfitUserChanged")
    );

    navigate("/login");
  };

  const hasMembership =
    user?.membership?.plan &&
    user.membership.plan !== "Not Selected";

  if (!user) {
    return null;
  }

  return (
    <main className="profile-page">

      <ProfileHero />

      <section className="profile-page__content">

        <div className="profile-page__card">

          <ProfileHeader
            user={user}
            getInitials={getInitials}
            imagePreview={imagePreview}
            selectedImage={selectedImage}
            handleImageSelect={handleImageSelect}
            handleImageUpload={handleImageUpload}
            imageLoading={imageLoading}
          />

          {message && (
            <p className="profile-page__message">
              {message}
            </p>
          )}

          {error && (
            <p className="profile-page__error">
              {error}
            </p>
          )}

          <div className="profile-page__divider"></div>

          <ProfileAccount
            user={user}
            hasMembership={hasMembership}
            editMode={editMode}
            formData={formData}
            handleChange={handleChange}
            handleUpdate={handleUpdate}
            handleCancel={handleCancel}
            loading={loading}
          />

          <ProfileMembership
            user={user}
            hasMembership={hasMembership}
          />

          {!editMode && (
            <ProfileActions
              handleEdit={handleEdit}
              handleLogout={handleLogout}
            />
          )}

        </div>

      </section>

    </main>
  );
};

export default Profile;