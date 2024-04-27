import { useCallback, useState, ChangeEvent } from "react";
import c from "./ShopFind.module.scss";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setTitleFilter } from "../../../../redux/slices/filterBookSlice.slice";
import debounce from "lodash.debounce";
const ShopFind = () => {
  const [value, setValue] = useState<string>("");

  const dispatch = useDispatch();
  //Debounce
  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setTitleFilter(str));
    }, 500),
    []
  );

  // : ChangeEvent<HTMLInputElement> to avoid :any
  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    updateSearchValue(inputValue);
  };

  return (
    <div className={c.find}>
      <form action="">
        <input
          type="text"
          placeholder="Search by name"
          value={value}
          onChange={handleInputValue}
        />
        <CiSearch />
      </form>
    </div>
  );
};

export default ShopFind;
