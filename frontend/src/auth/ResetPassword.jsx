import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();

  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const [error, setError] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");
    setError("");


    if (!password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }


    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }


    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }


    try {

      setLoading(true);


      const response = await fetch(
        `http://localhost:3040/reset-password/${token}`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            password: password,
            confirmPassword: confirmPassword
          })
        }
      );


      const data = await response.json();


      if (!response.ok || !data.status) {
        setError(
          data.message ||
          "Unable to reset password"
        );

        return;
      }


      setMessage(
        "Password reset successfully. Redirecting to login..."
      );


      setPassword("");

      setConfirmPassword("");


      setTimeout(() => {
        navigate("/login");
      }, 2000);


    } catch (err) {

      console.log(
        "RESET PASSWORD ERROR:",
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
    <main className="auth-reset">

      <div className="auth-reset__image"></div>


      <div className="auth-reset__content">

        <Link
          to="/"
          className="auth-reset__logo"
        >
          IRON<span>FIT</span>
        </Link>


        <div className="auth-reset__intro">

          <p className="auth-reset__eyebrow">
            ACCOUNT RECOVERY
          </p>

          <h1 className="auth-reset__title">
            CREATE
            <span>NEW PASSWORD.</span>
          </h1>

          <p className="auth-reset__description">
            Create a new password for your IronFit
            account.
          </p>

        </div>


        <form
          className="auth-reset__form"
          onSubmit={handleSubmit}
        >

          <div className="auth-reset__field">

            <label htmlFor="reset-password">
              NEW PASSWORD
            </label>

            <input
              type="password"
              id="reset-password"
              name="password"
              placeholder="Enter new password"
              autoComplete="new-password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              disabled={loading}
            />

          </div>


          <div className="auth-reset__field">

            <label htmlFor="reset-confirm-password">
              CONFIRM PASSWORD
            </label>

            <input
              type="password"
              id="reset-confirm-password"
              name="confirmPassword"
              placeholder="Confirm new password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(event) =>
                setConfirmPassword(event.target.value)
              }
              disabled={loading}
            />

          </div>


          {error && (
            <p className="auth-reset__message auth-reset__message--error">
              {error}
            </p>
          )}


          {message && (
            <p className="auth-reset__message auth-reset__message--success">
              {message}
            </p>
          )}


          <button
            type="submit"
            className="auth-reset__button"
            disabled={loading}
          >

            {loading
              ? "RESETTING..."
              : "RESET PASSWORD"
            }

            <span>→</span>

          </button>

        </form>


        <div className="auth-reset__back">

          <Link to="/login">
            ← Back to Sign In
          </Link>

        </div>

      </div>

    </main>
  );
};

export default ResetPassword;