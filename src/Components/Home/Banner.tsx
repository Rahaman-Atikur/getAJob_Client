import React from "react";
// import { motion } from "motion/react";



const Banner = () => {

  return (

    <div className="hero bg-base-200 min-h-screen">
      
      <div className="hero-content flex-col lg:flex-row">
      
      
        {/* <img
          animate={{scale: 2, transition:{duration : 2}}}
          src="../../assets/Job Board.jpg" alt="" /> */}

          {/* Banner Image  */}

          <img src="/public/picture/Job.jpg" alt="" />

          <h1>Hi This h1 tag</h1>


          {/* <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            How are you my friend?
          </motion.h1> */}


      </div>
    </div>
  );
};

export default Banner;
