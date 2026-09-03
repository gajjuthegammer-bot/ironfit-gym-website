import { useState } from "react";

const SecuritySettings = () => {

  const [message, setMessage] = useState("");


  /* =========================================================
     LOGIN ACTIVITY
  ========================================================= */

  const handleLoginActivity = () => {
    setMessage(
      "Login activity tracking is not available yet."
    );
  };


  /* =========================================================
     LOGOUT ALL DEVICES
  ========================================================= */

  const handleLogoutAllDevices = () => {
    setMessage(
      "Logout from all devices requires session management."
    );
  };


  /* =========================================================
     DELETE ACCOUNT
  ========================================================= */

  const handleDeleteAccount = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your IronFit account? This action cannot be undone."
    );

    if (!confirmed) {
      return;
    }

    setMessage(
      "Account deletion is not available yet."
    );
  };


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
            05 / SECURITY
          </span>

          <h2>
            Privacy & Security
          </h2>

        </div>


        <span className="settings-page__number">
          05
        </span>

      </div>


      {/* =====================================================
          SECURITY ACTIONS
      ===================================================== */}

      <div className="settings-page__rows">


        {/* =================================================
            LOGIN ACTIVITY
        ================================================= */}

        <button
          type="button"
          className="settings-page__action-row"
          onClick={handleLoginActivity}
        >

          <div>

            <strong>
              Login Activity
            </strong>

            <span>
              Review recent account activity.
            </span>

          </div>


          <span>
            →
          </span>

        </button>


        {/* =================================================
            LOGOUT ALL DEVICES
        ================================================= */}

        <button
          type="button"
          className="settings-page__action-row"
          onClick={handleLogoutAllDevices}
        >

          <div>

            <strong>
              Logout All Devices
            </strong>

            <span>
              Sign out from other active sessions.
            </span>

          </div>


          <span>
            →
          </span>

        </button>


        {/* =================================================
            DELETE ACCOUNT
        ================================================= */}

        <button
          type="button"
          className="settings-page__action-row settings-page__action-row--danger"
          onClick={handleDeleteAccount}
        >

          <div>

            <strong>
              Delete Account
            </strong>

            <span>
              Permanently remove your IronFit account.
            </span>

          </div>


          <span>
            →
          </span>

        </button>


      </div>


      {/* =====================================================
          MESSAGE
      ===================================================== */}

      {message && (

        <div className="settings-page__security-message">

          {message}

        </div>

      )}

    </div>
  );
};

export default SecuritySettings;