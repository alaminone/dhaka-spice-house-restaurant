import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { useContext, useEffect, useState } from "react";
import useAxiosURL from "../../../huks/axiosUrl/useAxiosURL";
import useCart from "../../../huks/carthuk/useCart";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, seterror] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const axiosSecure = useAxiosURL();
  const [cart,refetch] = useCart();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  console.log(clientSecret);
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      seterror(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    }
    if (paymentIntent) {
      console.log(paymentIntent);
      setTransactionId(paymentIntent.id);

      const payment = {
        email: user.email,
        price: totalPrice,
        transactionId: paymentIntent.id,
        date: new Date(), // utc date convert. use moment js to 
        cartIds: cart.map(item => item._id),
        menuItemIds: cart.map(item => item.menuId),
        status: 'pending'
    }

    const res = await axiosSecure.post('/payments', payment);
    console.log('payment saved', res.data);
    refetch();
    if (res.data?.paymentResult?.insertedId) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you for the taka paisa",
            showConfirmButton: false,
            timer: 1500
        });
        navigate('/dashbord/paymentHistory')
    }

    }
  };

  return (
    <div style={formContainerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <div style={cardElementStyle}>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
          <button
            type="submit"
            style={payButtonStyle}
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>

        {error ? (
          <div role="alert" className="alert alert-warning mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>`${error}`</span>
          </div>
        ) : (
          ""
        )}
        {transactionId ? (
          <div role="alert" className="alert alert-success mt-6 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Transaction Id : {transactionId}</span>
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

// add some costom styel

const formContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50vh",
};

const formStyle = {
  width: "400px",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
};

const cardElementStyle = {
  marginBottom: "20px",
};

const payButtonStyle = {
  backgroundColor: "#4285f4",
  color: "#ffffff",
  padding: "10px 15px",
  fontSize: "16px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

export default CheckoutForm;
