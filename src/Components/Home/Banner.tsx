import React from "react";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <motion.img
          animate={{scale: 2, transition:{duration : 2}}}
          src="../../assets/Job Board.jpg" alt="" />
      </div>
    </div>
  );
};

export default Banner;
