import { useCallback, useState } from "react";
import c from "./ShopRange.module.scss";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setPriceFilter } from "../../../../redux/slices/filterBookSlice.slice";

const ShopRange = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(200);

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setPriceFilter(str));
    }, 500),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rangeValue = e.target.value;
    setValue(Number(rangeValue));
    updateSearchValue(rangeValue);
  };

  const resetRange = () => {
    setValue(200);
    dispatch(setPriceFilter(200));
  };

  return (
    <div className={c.range_filter}>
      <h2>Price</h2>
      <input
        type="range"
        min="0"
        max="200"
        value={value}
        onChange={handleChange}
      />
      <p>Max Price : {value}$</p>
      <p onClick={resetRange}>Reset</p>
    </div>
  );
};

export default ShopRange;
