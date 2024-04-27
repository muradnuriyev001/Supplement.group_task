import { useSelector } from "react-redux";
import usePageTitle from "../../hooks/usePageTitle";
import { Link } from "react-router-dom";
import c from "./Cart.module.scss";
import CartCard from "./CartCard/CartCard";
import { selectCart } from "../../redux/slices/cartSlice.slice";
import Checkout from "./Checkout/Checkout";

const Cart = () => {
  usePageTitle("Supplement.group | Cart");

  const cartSelector = useSelector(selectCart);
  const cartArray = Array.isArray(cartSelector.cart) ? cartSelector.cart : [];

  return (
    <div>
      <div className={c.banner}>
        <h1>Cart</h1>
      </div>

      <div className={c.cart}>
        {!cartArray.length ? (
          <div className={c.empty}>
            <h3>There is no book in cart..</h3>
            <Link to={"/shop"}>Go to Shop!</Link>
          </div>
        ) : (
          cartArray.map((cart, i) => <CartCard key={i} {...cart} />)
        )}
      </div>

      {cartArray.length ? (
        <div className={c.checkout}>
          <Checkout />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
