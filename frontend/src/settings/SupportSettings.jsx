import { useNavigate } from "react-router-dom";

const SupportSettings = () => {
  const navigate = useNavigate();


  /* =========================================================
     CONTACT SUPPORT
  ========================================================= */

  const handleContactSupport = () => {
    navigate("/contact");
  };


  return (
    <div className="settings-page__support">

      {/* =====================================================
          SUPPORT CONTENT
      ===================================================== */}

      <div>

        <span className="settings-page__label">
          NEED HELP?
        </span>


        <h2>
          We're here to help.
        </h2>


        <p>
          Have a question about your
          account or membership?
          Contact the IronFit team.
        </p>

      </div>


      {/* =====================================================
          CONTACT BUTTON
      ===================================================== */}

      <button
        type="button"
        onClick={handleContactSupport}
      >
        CONTACT SUPPORT →
      </button>

    </div>
  );
};

export default SupportSettings;