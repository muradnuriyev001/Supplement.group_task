import c from "./NotFound.module.scss";
import { NavLink } from "react-router-dom";
import usePageTitle from "../../hooks/usePageTitle";

import gif from "../../assets/NotFound/notfound.gif";

const NotFound = () => {
  usePageTitle("Supplement.group | Not Found");
  return (
    <div className={c.notfound}>
      <img src={gif} alt="" draggable="false" />
      <p>Oops! Looks like this page got lost in the stacks.</p>
      <NavLink to={"/"}>Back To Home</NavLink>
    </div>
  );
};

export default NotFound;
