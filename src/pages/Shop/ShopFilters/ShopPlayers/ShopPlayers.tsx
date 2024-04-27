import { ChangeEvent, useState } from "react";
import c from "./ShopPlayers.module.scss";
import { useDispatch } from "react-redux";
import { setPlayerFilter } from "../../../../redux/slices/filterBookSlice.slice";

const ShopPlayers = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("All");

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const players = event.target.value;
    setValue(players);
    dispatch(setPlayerFilter(players));
  };
  return (
    <div className={c.players}>
      <h2>Select Players</h2>
      <select name="" id="" value={value} onChange={handleLanguageChange}>
        <option value="All">All</option>
        <option value="Singleplayer">Singleplayer</option>
        <option value="Multiplayer">Multiplayer</option>
      </select>
    </div>
  );
};

export default ShopPlayers;
