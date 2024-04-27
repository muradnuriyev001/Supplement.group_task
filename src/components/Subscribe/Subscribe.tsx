import c from "./Subscribe.module.scss";
import { MdMailOutline } from "react-icons/md";

const Subscribe = () => {
  return (
    <div className={c.subscribe}>
      <h2>Get a 20% discount on your first order!</h2>
      <form action="">
        <input type="text" placeholder="Enter your email..." />
        <button type="submit">
          <MdMailOutline />
          <p>SUBSCRIBE</p>
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
