import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  // =========================================================
  // HANDLE INPUT CHANGE
  // =========================================================

  const handleChange = (e) => {
    const {
      name,
      value
    } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };


  // =========================================================
  // HANDLE LOGIN
  // =========================================================

  const handleSubmit = async (e) => {

    // STOP DEFAULT FORM RELOAD

    e.preventDefault();

    setMessage("");


    try {

      setLoading(true);


      // =====================================================
      // LOGIN API
      // =====================================================

      const response = await fetch(
        "http://localhost:3040/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );


      const data = await response.json();


      // =====================================================
      // LOGIN SUCCESS
      // =====================================================

      if (data.status) {

        setMessage("Login successful!");

        console.log(
          "Login successful:",
          data
        );


        // ===================================================
        // SAVE USER
        // ===================================================

        localStorage.setItem(
          "ironfitUser",
          JSON.stringify(data.data)
        );


        // ===================================================
        // UPDATE HEADER
        // ===================================================

        window.dispatchEvent(
          new Event("ironfitUserChanged")
        );


        // ===================================================
        // GO TO HOME
        // ===================================================

        setTimeout(() => {
          navigate("/");
        }, 1000);

      } else {

        setMessage(
          data.message ||
          "Invalid Email or Password"
        );

      }


    } catch (error) {

      console.log(
        "LOGIN ERROR:",
        error
      );

      setMessage(
        "Unable to connect to server. Please try again."
      );


    } finally {

      setLoading(false);

    }
  };


  return (
    <main className="auth-login">

      <div className="auth-login__image"></div>


      <div className="auth-login__content">

        <Link
          to="/"
          className="auth-login__logo"
        >
          IRON<span>FIT</span>
        </Link>


        {/* ===================================================
            INTRO
        =================================================== */}

        <div className="auth-login__intro">

          <p className="auth-login__eyebrow">
            WELCOME BACK
          </p>

          <h1 className="auth-login__title">
            TRAIN.
            <span>STRONGER.</span>
          </h1>

          <p className="auth-login__description">
            Sign in to access your IronFit account,
            membership and training journey.
          </p>

        </div>


        {/* ===================================================
            LOGIN FORM
        =================================================== */}

        <form
          className="auth-login__form"
          onSubmit={handleSubmit}
        >

          {/* EMAIL */}

          <div className="auth-login__field">

            <label htmlFor="login-email">
              EMAIL ADDRESS
            </label>

            <input
              type="email"
              id="login-email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>


          {/* PASSWORD */}

          <div className="auth-login__field">

            <div className="auth-login__password-label">

              <label htmlFor="login-password">
                PASSWORD
              </label>

              <Link to="/forgot-password">
                Forgot Password?
              </Link>

            </div>

            <input
              type="password"
              id="login-password"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              required
            />

          </div>


          {/* MESSAGE */}

          {message && (
            <p className="auth-login__message">
              {message}
            </p>
          )}


          {/* BUTTON */}

          <button
            type="submit"
            className="auth-login__button"
            disabled={loading}
          >

            {loading
              ? "Signing In..."
              : "Sign In"
            }

            <span>→</span>

          </button>

        </form>


        {/* ===================================================
            REGISTER
        =================================================== */}

        <div className="auth-login__register">

          <p>
            Don't have an account?
          </p>

          <Link to="/register">
            Create Account
          </Link>

        </div>

      </div>

    </main>
  );
};


export default Login;