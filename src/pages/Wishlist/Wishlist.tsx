import { useSelector } from "react-redux";
import usePageTitle from "../../hooks/usePageTitle";
import { Link } from "react-router-dom";
import c from "./Wishlist.module.scss";
import WishlistCard from "./WishlistCard/WishlistCard";
import { selectWishlist } from "../../redux/slices/wishlistSlice.slice";

const Wishlist = () => {
  usePageTitle("Supplement.group | Wishlist");

  const wishlistSelector = useSelector(selectWishlist);
  const wishlistArray = Array.isArray(wishlistSelector.wishlist)
    ? wishlistSelector.wishlist
    : [];

  return (
    <div>
      <div className={c.banner}>
        <h1>Wishlist</h1>
      </div>

      <div className={c.wishlist}>
        {!wishlistArray.length ? (
          <div className={c.empty}>
            <h3>There is no game in wishlist..</h3>
            <Link to={"/shop"}>Go to Shop!</Link>
          </div>
        ) : (
          wishlistArray.map((wishlist, i) => (
            <WishlistCard key={i} {...wishlist} />
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;
