import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:3040/registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.status) {
        setMessage("Registration successful!");

        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        setMessage(
          data.message || "Registration failed. Please try again."
        );
      }
    } catch (error) {
      console.log(error);

      setMessage(
        "Unable to connect to server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-register">

      <div className="auth-register__image"></div>

      <div className="auth-register__content">

        <Link
          to="/"
          className="auth-register__logo"
        >
          IRON<span>FIT</span>
        </Link>

        <div className="auth-register__intro">

          <p className="auth-register__eyebrow">
            JOIN IRONFIT
          </p>

          <h1 className="auth-register__title">
            BUILD.
            <span>YOURSELF.</span>
          </h1>

          <p className="auth-register__description">
            Create your account and start your
            fitness journey with IronFit.
          </p>

        </div>

        <form
          className="auth-register__form"
          onSubmit={handleSubmit}
        >

          <div className="auth-register__row">

            <div className="auth-register__field">

              <label htmlFor="register-first-name">
                FIRST NAME
              </label>

              <input
                type="text"
                id="register-first-name"
                name="firstName"
                placeholder="First name"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />

            </div>

            <div className="auth-register__field">

              <label htmlFor="register-last-name">
                LAST NAME
              </label>

              <input
                type="text"
                id="register-last-name"
                name="lastName"
                placeholder="Last name"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          <div className="auth-register__field">

            <label htmlFor="register-email">
              EMAIL ADDRESS
            </label>

            <input
              type="email"
              id="register-email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          <div className="auth-register__field">

            <label htmlFor="register-phone">
              PHONE NUMBER
            </label>

            <input
              type="tel"
              id="register-phone"
              name="phone"
              placeholder="Enter your phone number"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />

          </div>

          <div className="auth-register__row">

            <div className="auth-register__field">

              <label htmlFor="register-password">
                PASSWORD
              </label>

              <input
                type="password"
                id="register-password"
                name="password"
                placeholder="Create password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
                required
              />

            </div>

            <div className="auth-register__field">

              <label htmlFor="register-confirm-password">
                CONFIRM PASSWORD
              </label>

              <input
                type="password"
                id="register-confirm-password"
                name="confirmPassword"
                placeholder="Confirm password"
                autoComplete="new-password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          {message && (
            <p className="auth-register__message">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="auth-register__button"
            disabled={loading}
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}

            <span>→</span>
          </button>

        </form>

        <div className="auth-register__login">

          <p>
            Already have an account?
          </p>

          <Link to="/login">
            Sign In
          </Link>

        </div>

      </div>

    </main>
  );
};

export default Register;