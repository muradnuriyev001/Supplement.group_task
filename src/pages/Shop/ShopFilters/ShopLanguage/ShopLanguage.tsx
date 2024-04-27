import { ChangeEvent, useState } from "react";
import c from "./ShopLanguage.module.scss";
import { useDispatch } from "react-redux";
import { setLanguageFilter } from "../../../../redux/slices/filterBookSlice.slice";

const ShopLanguage = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("All");

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value;
    setValue(language);
    dispatch(setLanguageFilter(language));
  };
  return (
    <div className={c.language}>
      <h2>Select Language</h2>
      <select name="" id="" value={value} onChange={handleLanguageChange}>
        <option value="All">All</option>
        <option value="Russian">Russian</option>
        <option value="English">English</option>
      </select>
    </div>
  );
};

export default ShopLanguage;
