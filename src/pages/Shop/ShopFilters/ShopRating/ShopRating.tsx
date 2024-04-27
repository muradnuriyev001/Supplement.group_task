import c from "./ShopRating.module.scss";
import { useCallback, useState } from "react";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setRatingFilter } from "../../../../redux/slices/filterBookSlice.slice";

const ShopRating = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(100);

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setRatingFilter(str));
    }, 500),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rangeValue = e.target.value;
    setValue(Number(rangeValue));
    updateSearchValue(rangeValue);
  };

  const resetRange = () => {
    setValue(100);
    dispatch(setRatingFilter(100));
  };
  return (
    <div className={c.rating}>
      <h2>Rating</h2>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
      />
      <p>Rating : {value}</p>
      <p onClick={resetRange}>Reset</p>
    </div>
  );
};

export default ShopRating;
