import { Route, Routes } from "react-router-dom";

import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Shop from "../pages/Shop/Shop";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";
import BookPage from "../pages/Shop/ShopBooks/ShopBookCard/BookPage/BookPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="shop/book/:bookId" element={<BookPage />} />
        <Route path="shop/page/:pageId" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
