import usePageTitle from "../../hooks/usePageTitle";
import ShopBooks from "./ShopBooks/ShopBooks";
import ShopFilters from "./ShopFilters/ShopFilters";
import c from "./Shop.module.scss";
const Shop = () => {
  usePageTitle("Supplement.group | Shop");
  return (
    <>
      <div className={c.banner}>
        <h1>Shop</h1>
      </div>
      <div className={c.shop}>
        <ShopFilters />
        <ShopBooks />
      </div>
    </>
  );
};

export default Shop;
