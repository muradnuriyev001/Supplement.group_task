import c from "./HomeComments.module.scss";
import { FaStar } from "react-icons/fa";

//Swiper Library Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
//Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const comments = [
  {
    Emily:
      "I've been a gamer for as long as I can remember, and finding a game store that truly understands and caters to my passion has always been a quest. But I can confidently say that my search has finally come to an end with this incredible game store!",
  },
  {
    Michael:
      "From the moment you step inside, you're greeted by an atmosphere buzzing with excitement and enthusiasm for all things gaming. The staff here are not just employees; they're fellow gamers who share your love for the hobby. ",
  },
  {
    Hannah:
      "But what truly sets this store apart is the sense of community it fosters. They regularly host events, tournaments, and gaming nights, bringing gamers of all ages and backgrounds together. It's not just a place to buy games; it's a hub where friendships are formed and memories are made.",
  },
  {
    Sophie:
      "The selection of games is truly impressive. Whether you're into classic retro titles, the latest AAA blockbusters, or indie gems, this store has something for everyone. And not just games! They also stock a wide range of gaming accessories, from controllers to collectibles, ensuring that you can find everything you need under one roof.",
  },
];

const HomeComments = () => {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        modules={[Autoplay, Pagination]}
        className={c.swiper}
      >
        {comments.map((comment, i) => (
          <SwiperSlide className={c.swiperSlide} key={i}>
            <div className={c.stars}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>{Object.values(comment)}</p>
            <p>{Object.keys(comment)}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeComments;
