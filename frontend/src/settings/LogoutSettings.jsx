
import { useNavigate } from "react-router-dom";

const LogoutSettings = () => {
  const navigate = useNavigate();


  /* =========================================================
     LOGOUT
  ========================================================= */

  const handleLogout = () => {
    localStorage.removeItem("ironfitUser");

    window.dispatchEvent(
      new Event("ironfitUserChanged")
    );

    navigate("/login");
  };


  return (
    <div className="settings-page__logout">

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div>

        <span className="settings-page__label">
          ACCOUNT ACTION
        </span>


        <h2>
          Sign out of IronFit
        </h2>

      </div>


      {/* =====================================================
          LOGOUT BUTTON
      ===================================================== */}

      <button
        type="button"
        onClick={handleLogout}
      >
        LOGOUT →
      </button>

    </div>
  );
};

export default LogoutSettings;