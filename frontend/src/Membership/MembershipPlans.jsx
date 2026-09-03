import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MembershipPlans = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const plans = {
    Basic: {
      name: "Basic",
      price: 999,
    },

    Pro: {
      name: "Pro",
      price: 1499,
    },

    Elite: {
      name: "Elite",
      price: 2499,
    },
  };

  const handleChoosePlan = (planName) => {
    setMessage("");
    setError("");

    const storedUser = localStorage.getItem("ironfitUser");

    if (!storedUser) {
      setError("Please login to choose a membership.");
      return;
    }

    let user;

    try {
      user = JSON.parse(storedUser);
    } catch (error) {
      console.log("USER DATA ERROR:", error);

      localStorage.removeItem("ironfitUser");

      setError(
        "Your session has expired. Please login again."
      );

      return;
    }

    if (!user?._id) {
      setError(
        "User information is missing. Please login again."
      );

      return;
    }

    const selectedPlan = plans[planName];

    if (!selectedPlan) {
      setError("Invalid membership plan.");
      return;
    }

    navigate("/payment", {
      state: {
        plan: {
          name: selectedPlan.name,

          price: selectedPlan.price,

          title:
            planName === "Basic"
              ? "STARTER"
              : planName === "Pro"
              ? "PERFORMANCE"
              : "COMPLETE",

          description:
            planName === "Basic"
              ? "Everything you need to start building a consistent training routine."
              : planName === "Pro"
              ? "The perfect balance of training access, guidance and additional support."
              : "Premium support for members who want a more personalized training experience.",

          features:
            planName === "Basic"
              ? [
                  "Full Gym Access",
                  "Locker Facility",
                  "Basic Fitness Assessment",
                  "Standard Equipment Access",
                ]
              : planName === "Pro"
              ? [
                  "Everything in Basic",
                  "Personal Training Session",
                  "Advanced Fitness Assessment",
                  "Training Guidance",
                ]
              : [
                  "Everything in Pro",
                  "Weekly Personal Training",
                  "Personalized Training Plan",
                  "Nutrition Guidance",
                ],
        },
      },
    });
  };

  return (
    <section className="membership-plans">

      <div className="membership-plans__container">

        {/* HEADING */}

        <div className="membership-plans__heading">

          <p className="membership-plans__eyebrow">
            CHOOSE YOUR PLAN
          </p>

          <h2 className="membership-plans__title">
            TRAIN.
            <span>GROW.</span>
            TRANSFORM.
          </h2>

        </div>


        {/* SUCCESS MESSAGE */}

        {message && (
          <p className="membership-plans__message">
            {message}
          </p>
        )}


        {/* ERROR MESSAGE */}

        {error && (
          <p className="membership-plans__error">
            {error}
          </p>
        )}


        {/* PLANS */}

        <div className="membership-plans__grid">


          {/* ================================
              BASIC
          ================================= */}

          <article className="membership-plan">

            <div className="membership-plan__top">

              <span className="membership-plan__number">
                01
              </span>

              <p className="membership-plan__label">
                BASIC
              </p>

            </div>


            <h3 className="membership-plan__name">
              STARTER
            </h3>


            <div className="membership-plan__price">

              <strong>
                ₹999
              </strong>

              <span>
                / MONTH
              </span>

            </div>


            <p className="membership-plan__description">
              Everything you need to start building a
              consistent training routine.
            </p>


            <ul className="membership-plan__features">

              <li>
                Full Gym Access
              </li>

              <li>
                Locker Facility
              </li>

              <li>
                Basic Fitness Assessment
              </li>

              <li>
                Standard Equipment Access
              </li>

            </ul>


            <button
              type="button"
              className="membership-plan__button"
              onClick={() =>
                handleChoosePlan("Basic")
              }
            >
              Choose Basic

              <span>
                →
              </span>

            </button>

          </article>


          {/* ================================
              PRO
          ================================= */}

          <article className="membership-plan membership-plan--featured">

            <div className="membership-plan__badge">
              MOST POPULAR
            </div>


            <div className="membership-plan__top">

              <span className="membership-plan__number">
                02
              </span>

              <p className="membership-plan__label">
                PRO
              </p>

            </div>


            <h3 className="membership-plan__name">
              PERFORMANCE
            </h3>


            <div className="membership-plan__price">

              <strong>
                ₹1,499
              </strong>

              <span>
                / MONTH
              </span>

            </div>


            <p className="membership-plan__description">
              The perfect balance of training access,
              guidance and additional support.
            </p>


            <ul className="membership-plan__features">

              <li>
                Everything in Basic
              </li>

              <li>
                Personal Training Session
              </li>

              <li>
                Advanced Fitness Assessment
              </li>

              <li>
                Training Guidance
              </li>

            </ul>


            <button
              type="button"
              className="membership-plan__button"
              onClick={() =>
                handleChoosePlan("Pro")
              }
            >
              Choose Pro

              <span>
                →
              </span>

            </button>

          </article>


          {/* ================================
              ELITE
          ================================= */}

          <article className="membership-plan">

            <div className="membership-plan__top">

              <span className="membership-plan__number">
                03
              </span>

              <p className="membership-plan__label">
                ELITE
              </p>

            </div>


            <h3 className="membership-plan__name">
              COMPLETE
            </h3>


            <div className="membership-plan__price">

              <strong>
                ₹2,499
              </strong>

              <span>
                / MONTH
              </span>

            </div>


            <p className="membership-plan__description">
              Premium support for members who want a
              more personalized training experience.
            </p>


            <ul className="membership-plan__features">

              <li>
                Everything in Pro
              </li>

              <li>
                Weekly Personal Training
              </li>

              <li>
                Personalized Training Plan
              </li>

              <li>
                Nutrition Guidance
              </li>

            </ul>


            <button
              type="button"
              className="membership-plan__button"
              onClick={() =>
                handleChoosePlan("Elite")
              }
            >
              Choose Elite

              <span>
                →
              </span>

            </button>

          </article>


        </div>

      </div>

    </section>
  );
};

export default MembershipPlans;