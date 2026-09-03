import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AccountSettings = ({ user }) => {
  const navigate = useNavigate();

  const [passwordOpen, setPasswordOpen] = useState(false);

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordLoading, setPasswordLoading] = useState(false);


  /* =========================================================
     PASSWORD INPUT
  ========================================================= */

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;

    setPasswordData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setPasswordMessage("");
  };


  /* =========================================================
     OPEN / CLOSE PASSWORD FORM
  ========================================================= */

  const handlePasswordToggle = () => {
    setPasswordOpen((previous) => !previous);

    setPasswordMessage("");
  };


  const handlePasswordClose = () => {
    setPasswordOpen(false);

    setPasswordMessage("");

    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };


  /* =========================================================
     CHANGE PASSWORD
  ========================================================= */

  const handleChangePassword = async (event) => {
    event.preventDefault();

    setPasswordMessage("");


    if (
      !passwordData.currentPassword ||
      !passwordData.newPassword ||
      !passwordData.confirmPassword
    ) {
      setPasswordMessage(
        "Please fill in all fields."
      );

      return;
    }


    if (passwordData.newPassword.length < 6) {
      setPasswordMessage(
        "New password must be at least 6 characters."
      );

      return;
    }


    if (
      passwordData.newPassword !==
      passwordData.confirmPassword
    ) {
      setPasswordMessage(
        "New passwords do not match."
      );

      return;
    }


    if (
      passwordData.currentPassword ===
      passwordData.newPassword
    ) {
      setPasswordMessage(
        "New password must be different from current password."
      );

      return;
    }


    if (!user?.email) {
      setPasswordMessage(
        "User information is missing."
      );

      return;
    }


    try {
      setPasswordLoading(true);


      const response = await fetch(
        "http://localhost:3040/change-password",
        {
          method: "PATCH",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: user.email,

            currentPassword:
              passwordData.currentPassword,

            newPassword:
              passwordData.newPassword,
          }),
        }
      );


      const data = await response.json();


      if (!response.ok) {
        setPasswordMessage(
          data.message ||
            "Unable to change password."
        );

        return;
      }


      setPasswordMessage(
        "Password changed successfully."
      );


      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });


      setTimeout(() => {
        setPasswordOpen(false);
        setPasswordMessage("");
      }, 1500);

    } catch (error) {

      console.log(
        "PASSWORD CHANGE ERROR:",
        error
      );

      setPasswordMessage(
        "Unable to connect to the server."
      );

    } finally {

      setPasswordLoading(false);

    }
  };


  return (
    <div className="settings-page__card">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="settings-page__card-header">

        <div>

          <span className="settings-page__label">
            01 / ACCOUNT
          </span>

          <h2>
            Personal Information
          </h2>

        </div>


        <span className="settings-page__number">
          01
        </span>

      </div>


      {/* =====================================================
          ACCOUNT ROWS
      ===================================================== */}

      <div className="settings-page__rows">


        {/* NAME */}

        <div className="settings-page__row">

          <div>

            <span>
              Name
            </span>

            <strong>
              {user.name}
            </strong>

          </div>


          <button
            type="button"
            onClick={() =>
              navigate("/profile")
            }
          >
            VIEW →
          </button>

        </div>


        {/* EMAIL */}

        <div className="settings-page__row">

          <div>

            <span>
              Email
            </span>

            <strong>
              {user.email}
            </strong>

          </div>

        </div>


        {/* PHONE */}

        <div className="settings-page__row">

          <div>

            <span>
              Phone
            </span>

            <strong>
              {user.phone || "Not Added"}
            </strong>

          </div>

        </div>


        {/* PASSWORD */}

        <div className="settings-page__row">

          <div>

            <span>
              Password
            </span>

            <strong>
              ••••••••
            </strong>

          </div>


          <button
            type="button"
            className="settings-page__outline-button"
            onClick={handlePasswordToggle}
          >
            {passwordOpen
              ? "CLOSE ↑"
              : "CHANGE →"}
          </button>

        </div>


        {/* =================================================
            PASSWORD FORM
        ================================================= */}

        {passwordOpen && (

          <form
            className="settings-page__password-form"
            onSubmit={handleChangePassword}
          >

            {/* PASSWORD HEADER */}

            <div className="settings-page__password-header">

              <div>

                <span>
                  SECURITY
                </span>

                <strong>
                  Change Password
                </strong>

              </div>


              <button
                type="button"
                onClick={handlePasswordClose}
                aria-label="Close password form"
              >
                ×
              </button>

            </div>


            {/* PASSWORD FIELDS */}

            <div className="settings-page__password-fields">


              {/* CURRENT PASSWORD */}

              <div className="settings-page__field">

                <label htmlFor="currentPassword">
                  Current Password
                </label>

                <input
                  id="currentPassword"
                  type="password"
                  name="currentPassword"
                  value={
                    passwordData.currentPassword
                  }
                  onChange={
                    handlePasswordChange
                  }
                  placeholder="Enter current password"
                  autoComplete="current-password"
                />

              </div>


              {/* NEW PASSWORD */}

              <div className="settings-page__field">

                <label htmlFor="newPassword">
                  New Password
                </label>

                <input
                  id="newPassword"
                  type="password"
                  name="newPassword"
                  value={
                    passwordData.newPassword
                  }
                  onChange={
                    handlePasswordChange
                  }
                  placeholder="Enter new password"
                  autoComplete="new-password"
                />

              </div>


              {/* CONFIRM PASSWORD */}

              <div className="settings-page__field">

                <label htmlFor="confirmPassword">
                  Confirm Password
                </label>

                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={
                    passwordData.confirmPassword
                  }
                  onChange={
                    handlePasswordChange
                  }
                  placeholder="Confirm new password"
                  autoComplete="new-password"
                />

              </div>

            </div>


            {/* MESSAGE */}

            {passwordMessage && (

              <p className="settings-page__password-message">
                {passwordMessage}
              </p>

            )}


            {/* SUBMIT */}

            <button
              type="submit"
              className="settings-page__password-submit"
              disabled={passwordLoading}
            >
              {passwordLoading
                ? "UPDATING..."
                : "UPDATE PASSWORD →"}
            </button>

          </form>

        )}

      </div>

    </div>
  );
};

export default AccountSettings;