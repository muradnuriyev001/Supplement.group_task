import c from "./HomeBestSellers.module.scss";
import booksData from "../../../data/books-data.json";
import ShopBookCard from "../../Shop/ShopBooks/ShopBookCard/ShopBookCard";

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

const HomeBestSellers = () => {
  const bestSellers = booksData.slice(0, 10);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
      variants={Animation}
      custom={0.5}
      className={c.best_sellers}
    >
      <h1>Best Sellers</h1>

      <div className={c.books}>
        {bestSellers.map((book, i) => (
          <ShopBookCard key={i} {...book} />
        ))}
      </div>
    </motion.div>
  );
};

export default HomeBestSellers;
