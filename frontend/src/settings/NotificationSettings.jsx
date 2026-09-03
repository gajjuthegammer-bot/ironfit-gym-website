import { useState } from "react";

const NotificationSettings = () => {

  /* =========================================================
     NOTIFICATION STATE
  ========================================================= */

  const [notifications, setNotifications] = useState({
    workout: true,
    membership: true,
    offers: false,
    email: true,
  });


  /* =========================================================
     TOGGLE NOTIFICATION
  ========================================================= */

  const handleNotification = (name) => {
    setNotifications((previous) => ({
      ...previous,
      [name]: !previous[name],
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
            03 / NOTIFICATIONS
          </span>

          <h2>
            Stay Updated
          </h2>

        </div>


        <span className="settings-page__number">
          03
        </span>

      </div>


      {/* =====================================================
          NOTIFICATION ROWS
      ===================================================== */}

      <div className="settings-page__rows">


        {/* =================================================
            WORKOUT REMINDERS
        ================================================= */}

        <div className="settings-page__toggle-row">

          <div>

            <strong>
              Workout Reminders
            </strong>

            <span>
              Get reminders for your workouts.
            </span>

          </div>


          <button
            type="button"
            className={`settings-page__toggle ${
              notifications.workout
                ? "settings-page__toggle--active"
                : ""
            }`}
            onClick={() =>
              handleNotification("workout")
            }
            aria-label="Toggle workout reminders"
            aria-pressed={notifications.workout}
          >
            <span></span>
          </button>

        </div>


        {/* =================================================
            MEMBERSHIP REMINDERS
        ================================================= */}

        <div className="settings-page__toggle-row">

          <div>

            <strong>
              Membership Reminders
            </strong>

            <span>
              Receive membership expiry reminders.
            </span>

          </div>


          <button
            type="button"
            className={`settings-page__toggle ${
              notifications.membership
                ? "settings-page__toggle--active"
                : ""
            }`}
            onClick={() =>
              handleNotification("membership")
            }
            aria-label="Toggle membership reminders"
            aria-pressed={notifications.membership}
          >
            <span></span>
          </button>

        </div>


        {/* =================================================
            OFFERS & UPDATES
        ================================================= */}

        <div className="settings-page__toggle-row">

          <div>

            <strong>
              Offers & Updates
            </strong>

            <span>
              Receive special offers and gym updates.
            </span>

          </div>


          <button
            type="button"
            className={`settings-page__toggle ${
              notifications.offers
                ? "settings-page__toggle--active"
                : ""
            }`}
            onClick={() =>
              handleNotification("offers")
            }
            aria-label="Toggle offers and updates"
            aria-pressed={notifications.offers}
          >
            <span></span>
          </button>

        </div>


        {/* =================================================
            EMAIL NOTIFICATIONS
        ================================================= */}

        <div className="settings-page__toggle-row">

          <div>

            <strong>
              Email Notifications
            </strong>

            <span>
              Receive important account emails.
            </span>

          </div>


          <button
            type="button"
            className={`settings-page__toggle ${
              notifications.email
                ? "settings-page__toggle--active"
                : ""
            }`}
            onClick={() =>
              handleNotification("email")
            }
            aria-label="Toggle email notifications"
            aria-pressed={notifications.email}
          >
            <span></span>
          </button>

        </div>


      </div>

    </div>
  );
};

export default NotificationSettings;