import c from "./WishlistCard.module.scss";
import { FC } from "react";
import { getImageURL } from "../../../utils/getImageUrl";
import { Wishlist } from "../../../types/types";
import { useDispatch } from "react-redux";
import { deleteWishlist } from "../../../redux/slices/wishlistSlice.slice";
import { addCart } from "../../../redux/slices/cartSlice.slice";
import { v4 as uuidv4 } from "uuid";

import { MdOutlineDeleteForever } from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";

const WishlistCard: FC<Wishlist> = ({ name, price, image, id }) => {
  const dispatch = useDispatch();

  const handleDeleteWishlist = (wishlistId: string) => {
    const wishlistToDelete: Wishlist = {
      id: wishlistId,
      name: "",
      price: 0,
      image: "",
    }; // Creating a dummy Wishlist object with just id
    dispatch(deleteWishlist(wishlistToDelete));
  };

  const handleAddToCart = () => {
    const cartData = { name, price, id: uuidv4(), image };
    dispatch(addCart(cartData));
  };

  return (
    <div className={c.wishlist_card}>
      <img src={getImageURL(image)} alt="" />
      <div className={c.wishlist_card__text}>
        <h1>{name}</h1>
        <p>Price: {price}$</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className={c.wishlist_card__delete}>
        <MdOutlineDeleteForever onClick={() => handleDeleteWishlist(id)} />
        <BsCartPlus onClick={handleAddToCart} />
      </div>
    </div>
  );
};

export default WishlistCard;
