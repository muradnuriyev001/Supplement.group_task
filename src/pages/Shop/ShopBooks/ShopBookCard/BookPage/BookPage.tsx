import { useParams } from "react-router-dom";
import c from "./BookPage.module.scss";
import booksData from "../../../../../data/books-data.json";
import { getImageURL } from "../../../../../utils/getImageUrl";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addCart } from "../../../../../redux/slices/cartSlice.slice";

import { IoStarSharp } from "react-icons/io5";
import HomeComments from "../../../../Home/HomeComments/HomeComments";
import HomeGuide from "../../../../Home/HomeGuide/HomeGuide";
import { addWishlist } from "../../../../../redux/slices/wishlistSlice.slice";

const BookPage = () => {
  const { bookId } = useParams();
  const parsedBookId = parseInt(bookId || "");
  const bookIndex = booksData.findIndex((book) => book.id === parsedBookId);
  const book = booksData[bookIndex];

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addCart({
        name: book.name,
        price: book.price,
        image: book.image,
        id: uuidv4(),
      })
    );
  };

  const handleAddToWishlist = () => {
    dispatch(
      addWishlist({
        name: book.name,
        price: book.price,
        image: book.image,
        id: uuidv4(),
      })
    );
  };

  return (
    <>
      <div className={c.book_page}>
        <div className={c.book_img}>
          <p>Home / Shop / Book / {book.name}</p>
          <img src={getImageURL(book.image)} alt="" />
        </div>

        <div className={c.book_info}>
          <h1>{book.name}</h1>
          <p>{book.description}</p>
          <div className={c.stars}>
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <p>(14 reviews)</p>
          </div>
          <p>Rating: {book.rating}</p>
          <p>Platform: {book.platform}</p>
          <p>Language: {book.language}</p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
            possimus excepturi nesciunt. Dolore aliquid assumenda amet
            reiciendis beatae unde inventore corporis rerum quas perferendis.
            Molestias numquam reiciendis totam ea sunt? Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Itaque doloremque impedit aut
            obcaecati corporis officia?
          </p>
          <p>Price: {book.price}$</p>
          <div className={c.book_buttons}>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={handleAddToWishlist}>Wishlist</button>
          </div>
        </div>
      </div>
      <HomeGuide />
      <HomeComments />
    </>
  );
};

export default BookPage;
