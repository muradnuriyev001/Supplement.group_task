import c from "./TopButton.module.scss";
import { useState, useEffect } from "react";

import { FaArrowUp } from "react-icons/fa6";

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    window.scrollY > 450 ? setShowButton(true) : setShowButton(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {showButton && (
        <div onClick={scrollToTop} className={c.topButton}>
          <FaArrowUp className={c.topIcon} />
        </div>
      )}
    </>
  );
};

export default TopButton;
