import { useState } from "react";

const PreferenceSettings = () => {

  /* =========================================================
     PREFERENCE STATE
  ========================================================= */

  const [preferences, setPreferences] = useState({
    units: "KG",
    language: "English",
  });


  /* =========================================================
     CHANGE PREFERENCE
  ========================================================= */

  const handlePreference = (name, value) => {
    setPreferences((previous) => ({
      ...previous,
      [name]: value,
    }));
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
            04 / PREFERENCES
          </span>

          <h2>
            Your Preferences
          </h2>

        </div>


        <span className="settings-page__number">
          04
        </span>

      </div>


      {/* =====================================================
          PREFERENCE ROWS
      ===================================================== */}

      <div className="settings-page__rows">


        {/* =================================================
            MEASUREMENT UNITS
        ================================================= */}

        <div className="settings-page__preference-row">

          <div>

            <strong>
              Measurement Units
            </strong>

            <span>
              Choose your preferred workout units.
            </span>

          </div>


          <div className="settings-page__choice">

            {/* KG */}

            <button
              type="button"
              className={
                preferences.units === "KG"
                  ? "settings-page__choice--active"
                  : ""
              }
              onClick={() =>
                handlePreference(
                  "units",
                  "KG"
                )
              }
              aria-pressed={
                preferences.units === "KG"
              }
            >
              KG
            </button>


            {/* LB */}

            <button
              type="button"
              className={
                preferences.units === "LB"
                  ? "settings-page__choice--active"
                  : ""
              }
              onClick={() =>
                handlePreference(
                  "units",
                  "LB"
                )
              }
              aria-pressed={
                preferences.units === "LB"
              }
            >
              LB
            </button>

          </div>

        </div>


        {/* =================================================
            LANGUAGE
        ================================================= */}

        <div className="settings-page__preference-row">

          <div>

            <strong>
              Language
            </strong>

            <span>
              Select your preferred language.
            </span>

          </div>


          <select
            value={preferences.language}
            onChange={(event) =>
              handlePreference(
                "language",
                event.target.value
              )
            }
            aria-label="Select language"
          >

            <option value="English">
              English
            </option>

            <option value="Hindi">
              Hindi
            </option>

            <option value="Gujarati">
              Gujarati
            </option>

          </select>

        </div>


      </div>

    </div>
  );
};

export default PreferenceSettings;