import c from "./HeaderBottom.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBasketLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { useSelector } from "react-redux";
import { selectWishlist } from "../../../redux/slices/wishlistSlice.slice";
import { selectCart } from "../../../redux/slices/cartSlice.slice";

const HeaderBottom = () => {
  const [isActive, setIsActive] = useState(false);

  const location = useLocation();

  const handleActive = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsActive(window.innerWidth > 1023);
    };

    handleResize(); // Check initial width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location]);

  const wishlist = useSelector(selectWishlist);
  const wishlistItems = wishlist.wishlist.length;

  const cart = useSelector(selectCart);
  const cartItems = cart.cart.length;

  return (
    <div className={c.header__bottom}>
      <div className={c.header__bottom__logo}>
        <NavLink to={"/"}>
          <p>
            Supplement.<span>group</span>{" "}
          </p>
        </NavLink>
      </div>

      {isActive && (
        <div className={c.header__bottom__navigations}>
          <ul>
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/shop"}>
              <li>Shop</li>
            </NavLink>
          </ul>
        </div>
      )}

      <div className={c.header__bottom__group}>
        <div className={c.header__bottom__wishlist}>
          <NavLink data-count={wishlistItems} to={"/wishlist"}>
            <FaRegHeart />
            <p>Wishlist</p>
          </NavLink>
        </div>
        <div className={c.header__bottom__cart}>
          <NavLink data-count={cartItems} to={"/cart"}>
            <RiShoppingBasketLine />
            <p>Cart</p>
          </NavLink>
        </div>
      </div>

      <button onClick={handleActive} className={c.header__bottom__burger}>
        <IoMenu />
      </button>
    </div>
  );
};

export default HeaderBottom;
