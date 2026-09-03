import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedPlan = location.state?.plan;

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  if (!selectedPlan) {
    return (
      <div className="payment-page">
        <div className="payment-empty">
          <h2>No Plan Selected</h2>

          <p>
            Please select a membership plan first.
          </p>

          <button
            onClick={() => navigate("/membership")}
            className="payment-back-btn"
          >
            BACK TO MEMBERSHIP
          </button>
        </div>
      </div>
    );
  }

  const handlePayment = async () => {
    try {
      setLoading(true);
      setMessage("");

      const savedUser =
        localStorage.getItem("ironfitUser");

      if (!savedUser) {
        navigate("/login");
        return;
      }

      let user;

      try {
        user = JSON.parse(savedUser);
      } catch (error) {
        console.log("USER DATA ERROR:", error);

        localStorage.removeItem("ironfitUser");

        navigate("/login");
        return;
      }

      if (!user?._id) {
        setMessage(
          "User information is missing. Please login again."
        );

        return;
      }

      /* ========================================
         CREATE PAYMENT ORDER
      ======================================== */

      const orderResponse = await fetch(
        "http://localhost:3040/payment/create-order",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            plan: selectedPlan.name,
            amount: selectedPlan.price,
          }),
        }
      );

      const orderData =
        await orderResponse.json();

      if (
        !orderResponse.ok ||
        !orderData.status
      ) {
        setMessage(
          orderData.message ||
            "Unable to create payment order."
        );

        return;
      }

      const order = orderData.data;


      /* ========================================
         CHECK RAZORPAY SCRIPT
      ======================================== */

      if (!window.Razorpay) {
        setMessage(
          "Payment system could not be loaded. Please refresh the page."
        );

        return;
      }


      /* ========================================
         RAZORPAY CHECKOUT
      ======================================== */

      const options = {
        key: "rzp_test_TXDIabsRhDuFcM",

        amount: order.amount,

        currency: order.currency,

        name: "IronFit",

        description:
          `${selectedPlan.name} Membership`,

        order_id: order.orderId,

        prefill: {
          name: user.name || "",
          email: user.email || "",
          contact: user.phone || "",
        },

        theme: {
          color: "#111111",
        },


        /* ====================================
           PAYMENT SUCCESS
        ==================================== */

        handler: async (response) => {
          try {
            setLoading(true);
            setMessage("");

            const verifyResponse =
              await fetch(
                "http://localhost:3040/payment/verify",
                {
                  method: "POST",

                  headers: {
                    "Content-Type": "application/json",
                  },

                  body: JSON.stringify({
                    userId: user._id,

                    plan: selectedPlan.name,

                    razorpay_order_id:
                      response.razorpay_order_id,

                    razorpay_payment_id:
                      response.razorpay_payment_id,

                    razorpay_signature:
                      response.razorpay_signature,
                  }),
                }
              );

            const verifyData =
              await verifyResponse.json();


            if (
              !verifyResponse.ok ||
              !verifyData.status
            ) {
              setMessage(
                verifyData.message ||
                  "Payment verification failed."
              );

              return;
            }


            /* ================================
               UPDATE LOCAL USER
            ================================= */

            if (verifyData.data) {
              localStorage.setItem(
                "ironfitUser",
                JSON.stringify(
                  verifyData.data
                )
              );

              window.dispatchEvent(
                new Event(
                  "ironfitUserChanged"
                )
              );
            }


            /* ================================
               SUCCESS PAGE
            ================================= */

            navigate(
              "/membership-success",
              {
                state: {
                  plan: selectedPlan,
                  paymentId:
                    response.razorpay_payment_id,
                },
              }
            );

          } catch (error) {
            console.log(
              "PAYMENT VERIFICATION ERROR:",
              error
            );

            setMessage(
              "Unable to verify payment."
            );
          } finally {
            setLoading(false);
          }
        },


        /* ====================================
           MODAL CLOSED
        ==================================== */

        modal: {
          ondismiss: () => {
            setLoading(false);
            setMessage(
              "Payment was cancelled."
            );
          },
        },
      };


      const razorpay =
        new window.Razorpay(options);

      razorpay.open();

    } catch (error) {
      console.log(
        "PAYMENT ERROR:",
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
    <main className="payment-page">

      <section className="payment-container">

        <div className="payment-heading">

          <span>
            IRONFIT MEMBERSHIP
          </span>

          <h1>
            COMPLETE
            <br />
            YOUR <em>MEMBERSHIP.</em>
          </h1>

        </div>


        <div className="payment-layout">

          {/* LEFT */}

          <div className="payment-plan">

            <div className="payment-top">

              <span>
                SELECTED PLAN
              </span>

              <span>
                {selectedPlan.name}
              </span>

            </div>


            <div className="payment-plan-content">

              <p className="payment-label">
                MEMBERSHIP
              </p>

              <h2>
                {selectedPlan.title}
              </h2>


              <div className="payment-price">

                ₹{selectedPlan.price}

                <small>
                  / MONTH
                </small>

              </div>


              <p className="payment-description">
                {selectedPlan.description}
              </p>


              <div className="payment-features">

                {selectedPlan.features?.map(
                  (feature, index) => (
                    <div
                      className="payment-feature"
                      key={index}
                    >
                      <span>✓</span>

                      <p>
                        {feature}
                      </p>
                    </div>
                  )
                )}

              </div>

            </div>

          </div>


          {/* RIGHT */}

          <div className="payment-summary">

            <div className="summary-heading">

              <span>
                01
              </span>

              <h3>
                ORDER SUMMARY
              </h3>

            </div>


            <div className="summary-row">

              <span>
                Membership
              </span>

              <strong>
                {selectedPlan.name}
              </strong>

            </div>


            <div className="summary-row">

              <span>
                Duration
              </span>

              <strong>
                1 Month
              </strong>

            </div>


            <div className="summary-divider"></div>


            <div className="summary-total">

              <span>
                TOTAL
              </span>

              <strong>
                ₹{selectedPlan.price}
              </strong>

            </div>


            {message && (
              <div className="payment-message">
                {message}
              </div>
            )}


            <button
              className="payment-button"
              onClick={handlePayment}
              disabled={loading}
            >
              {loading
                ? "PROCESSING..."
                : "PAY NOW →"}
            </button>


            <button
              className="payment-cancel"
              onClick={() =>
                navigate("/membership")
              }
              disabled={loading}
            >
              ← BACK TO PLANS
            </button>


            <p className="payment-note">
              Secure membership checkout
            </p>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Payment;