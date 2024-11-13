import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Stripe | null;

const initializeStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe("<your-test-publishable-key-here>");
  }
  return stripePromise;
};
export default initializeStripe;
