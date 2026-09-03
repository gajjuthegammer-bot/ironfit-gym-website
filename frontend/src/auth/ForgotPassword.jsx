import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const [error, setError] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");
    setError("");


    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }


    try {

      setLoading(true);


      const response = await fetch(
        "http://localhost:3040/forgot-password",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            email: email.trim().toLowerCase()
          })
        }
      );


      const data = await response.json();


      if (!response.ok || !data.status) {
        setError(
          data.message ||
          "Unable to send reset link"
        );

        return;
      }


      setMessage(
        "Password reset link has been sent to your email."
      );


      setEmail("");


    } catch (err) {

      console.log(
        "FORGOT PASSWORD ERROR:",
        err
      );

      setError(
        "Unable to connect to server"
      );

    } finally {

      setLoading(false);

    }
  };


  return (
    <main className="auth-forgot">

      <div className="auth-forgot__image"></div>


      <div className="auth-forgot__content">

        <Link
          to="/"
          className="auth-forgot__logo"
        >
          IRON<span>FIT</span>
        </Link>


        <div className="auth-forgot__intro">

          <p className="auth-forgot__eyebrow">
            ACCOUNT RECOVERY
          </p>

          <h1 className="auth-forgot__title">
            RESET
            <span>PASSWORD.</span>
          </h1>

          <p className="auth-forgot__description">
            Enter your registered email address
            and we'll send you a secure password
            reset link.
          </p>

        </div>


        <form
          className="auth-forgot__form"
          onSubmit={handleSubmit}
        >

          <div className="auth-forgot__field">

            <label htmlFor="forgot-email">
              EMAIL ADDRESS
            </label>

            <input
              type="email"
              id="forgot-email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              disabled={loading}
            />

          </div>


          {error && (
            <p className="auth-forgot__message auth-forgot__message--error">
              {error}
            </p>
          )}


          {message && (
            <p className="auth-forgot__message auth-forgot__message--success">
              {message}
            </p>
          )}


          <button
            type="submit"
            className="auth-forgot__button"
            disabled={loading}
          >

            {loading
              ? "SENDING..."
              : "SEND RESET LINK"
            }

            <span>→</span>

          </button>

        </form>


        <div className="auth-forgot__back">

          <Link to="/login">
            ← Back to Sign In
          </Link>

        </div>

      </div>

    </main>
  );
};

export default ForgotPassword;