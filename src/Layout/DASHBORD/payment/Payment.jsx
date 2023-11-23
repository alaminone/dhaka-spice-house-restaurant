import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK_KEY);

const Payment = () => {
  return (
    <div>
      <SectionTitle mainheading={"PAYMENT"}></SectionTitle>

      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
