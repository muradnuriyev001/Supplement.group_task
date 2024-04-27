import c from "./HomeSpecialDeals.module.scss";
import booksData from "../../../data/books-data.json";
//Swiper Library Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
//Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ShopBookCard from "../../Shop/ShopBooks/ShopBookCard/ShopBookCard";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";

const Animation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 1 },
  }),
};
const HomeSpecialDeals = () => {
  //Slicing books
  const specialDeals = booksData.slice(32, 40);

  //Expiring time functions

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  // Function to calculate time remaining
  function calculateTimeRemaining() {
    const expirationTime = new Date(); // Get current time
    expirationTime.setHours(expirationTime.getHours() + 20); // Add 10 hours
    // Set seconds to zero to start the countdown from exact minutes
    expirationTime.setSeconds(0);

    const currentTime = new Date();
    const difference = expirationTime.getTime() - currentTime.getTime();
    if (difference > 0) {
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      return `${hours}hr ${minutes}min ${seconds}sec`;
    } else {
      return "Expired";
    }
  }

  useEffect(() => {
    // Update time remaining every second
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      variants={Animation}
      custom={0.8}
      className={c.special_deals}
    >
      <div className={c.deal_text}>
        <h1>Special Deals</h1>
        <p>Ends in: {timeRemaining} </p>
      </div>

      <Swiper
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          //Responsive of slidesPerView
          1600: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 4,
          },
          800: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        className={c.swiper}
      >
        {specialDeals.map((deal, i) => (
          <SwiperSlide key={i}>
            <ShopBookCard {...deal} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default HomeSpecialDeals;
