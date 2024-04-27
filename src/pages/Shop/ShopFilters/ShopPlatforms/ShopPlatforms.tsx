import { ChangeEvent, useState } from "react";
import c from "./ShopPlatforms.module.scss";
import { useDispatch } from "react-redux";
import { setPlatformFilter } from "../../../../redux/slices/filterBookSlice.slice";

const ShopPlatforms = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("All");

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const platform = event.target.value;
    setValue(platform);
    dispatch(setPlatformFilter(platform));
  };
  return (
    <div className={c.platforms}>
      <h2>Select Platform</h2>
      <select name="" id="" value={value} onChange={handleLanguageChange}>
        <option value="All">All</option>
        <option value="PC">PC</option>
        <option value="Xbox">Xbox</option>
        <option value="PS5">PS5</option>
      </select>
    </div>
  );
};

export default ShopPlatforms;
