import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/slices/cartSlice.slice";
import { selectWishlist } from "../../redux/slices/wishlistSlice.slice";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import TopButton from "../../components/TopButton/TopButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import usePrevious from "../../hooks/usePrevious";

const Layout = () => {
  //Loader settings
  const { pathname } = useLocation();

  const [loaderState, setLoaderState] = useState(false);

  useEffect(() => {
    setLoaderState(true);
    setTimeout(() => {
      setLoaderState(false);
    }, 1000);
    window.scroll(0, 0);
  }, [pathname]);

  //Toastify settings

  const cartSelector = useSelector(selectCart);
  const cartArray = Array.isArray(cartSelector.cart) ? cartSelector.cart : [];
  const prevCartLength = usePrevious(cartArray.length);

  const wishlistSelector = useSelector(selectWishlist);
  const wishlistArray = Array.isArray(wishlistSelector.wishlist)
    ? wishlistSelector.wishlist
    : [];
  const prevWishlistLength = usePrevious(wishlistArray.length);

  useEffect(() => {
    if (
      prevWishlistLength !== undefined &&
      wishlistArray.length > prevWishlistLength
    ) {
      toast.success("Successfully added to wishlist");
    }
  }, [wishlistArray, prevWishlistLength]);

  useEffect(() => {
    if ((prevCartLength ?? 0) < cartArray.length) {
      toast.success("Successfully added to cart");
    }
  }, [cartArray, prevCartLength]);

  return (
    <>
      <div>
        {loaderState && <Loader />}
        <ToastContainer limit={5} autoClose={1500} />
        <Header />
        <Outlet />
        <Footer />
      </div>
      <TopButton />
    </>
  );
};

export default Layout;
