import c from "./HomeSearch.module.scss";
import { Link } from "react-router-dom";
const HomeSearch = () => {
  return (
    <div className={c.home__banner}>
      <p>QUICK & EASY FOR YOU</p>
      <h2>Find the game you're looking for easier to play.</h2>
      <div className={c.shop}>
        {" "}
        <Link to={"/shop"}>Go to Shop!</Link>
      </div>
    </div>
  );
};

export default HomeSearch;
