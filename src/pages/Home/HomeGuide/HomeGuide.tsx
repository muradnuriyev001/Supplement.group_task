import c from "./HomeGuide.module.scss";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const Animation = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 1 },
  }),
};

const HomeGuide = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.6, once: true }}
      className={c.guide}
    >
      <motion.p variants={Animation} custom={0.2}>
        SHOP ONLINE
      </motion.p>
      <motion.h2 variants={Animation} custom={0.3}>
        Holiday Gift Guide
      </motion.h2>
      <motion.p variants={Animation} custom={0.4}>
        All Games are flat 50% Off
      </motion.p>
      <motion.button variants={Animation} custom={0.5}>
        <Link to={"/shop"}>SHOP COLLECTION</Link>
      </motion.button>
    </motion.div>
  );
};

export default HomeGuide;
