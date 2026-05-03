import React from "react";
import { motion } from "motion/react";



const Banner = () => {

  return (

    <div className="hero bg-base-200 min-h-screen">
      
      <div className="hero-content flex-col lg:flex-row">
      
      
        

          <motion.img
          animate = {{rotate:360   , transition:{duration:3}}}
          
          src="/public/picture/Job.jpg" alt="" />

      </div>
    </div>
  );
};

export default Banner;
