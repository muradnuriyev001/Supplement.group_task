import { useSelector } from "react-redux";
import c from "./Checkout.module.scss";
import { selectCart } from "../../../redux/slices/cartSlice.slice";

import paymentIcons from "../../../assets/Footer/payments.png";
const Checkout = () => {
  const cartSelector = useSelector(selectCart);
  const cartArray = Array.isArray(cartSelector.cart) ? cartSelector.cart : [];

  let initialPrice = 0;

  cartArray.map((price) => (initialPrice += price.price));

  return (
    <div className={c.checkout}>
      <h1>Checkout</h1>
      <p>Subtotal: {initialPrice.toFixed(2)}$</p>
      <p>Shipping: Free Shipping</p>
      <p>Tax: 1.99$</p>
      <p>Special Discount: 3.99$</p>
      <p>Total: {(initialPrice - 2).toFixed(2)}$</p>
      <img src={paymentIcons} alt="" />
      <button>PLACE ORDER</button>
    </div>
  );
};

export default Checkout;
