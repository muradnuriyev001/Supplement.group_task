import ShopFind from "./ShopFind/ShopFind";
import ShopLanguage from "./ShopLanguage/ShopLanguage";
import ShopPlatforms from "./ShopPlatforms/ShopPlatforms";
import ShopPlayers from "./ShopPlayers/ShopPlayers";
import ShopRange from "./ShopRange/ShopRange";
import ShopRating from "./ShopRating/ShopRating";

const ShopFilters = () => {
  return (
    <div>
      <ShopFind />
      <ShopRating />
      <ShopLanguage />
      <ShopRange />
      <ShopPlayers />
      <ShopPlatforms />
    </div>
  );
};

export default ShopFilters;
