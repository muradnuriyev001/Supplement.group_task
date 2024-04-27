import { FC } from "react";
import { getImageURL } from "../../../utils/getImageUrl";
import c from "./CartCard.module.scss";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Wishlist } from "../../../types/types";
import { useDispatch } from "react-redux";
import { deleteCart } from "../../../redux/slices/cartSlice.slice";

const CartCard: FC<Wishlist> = ({ name, price, image, id }) => {
  const dispatch = useDispatch();

  const handleDeleteWishlist = (cartId: string) => {
    const cartToDelete: Wishlist = {
      id: cartId,
      name: "",
      price: 0,
      image: "",
    }; // Creating a dummy Cart object with just id
    dispatch(deleteCart(cartToDelete));
  };

  return (
    <div className={c.cart_card}>
      <img src={getImageURL(image)} alt="" />
      <div className={c.cart_card__text}>
        <h1>{name}</h1>
        <p>Price: {price}$</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className={c.cart_card__delete}>
        <MdOutlineDeleteForever onClick={() => handleDeleteWishlist(id)} />
      </div>
    </div>
  );
};

export default CartCard;
