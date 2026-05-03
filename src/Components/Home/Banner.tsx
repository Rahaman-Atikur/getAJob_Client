import React from "react";
// import { motion } from "motion/react";




const Banner = () => {

  return (

    <>

      <div className="relative">

        <img src="/public/picture/Background.jpg" alt="Background" />

        
         <div className="absolute top-0 left-0">
           <p className="text-black" >The Easiest Way to Find Your <span className="text-purple-500">First</span>  Dream Job</p>
          <img className="w-sm" src="/public/picture/team1.jpg" alt="" />
          <img className="w-sm h-min" src="/public/picture/team3.jpg" alt="" />
         </div>
        

      </div>



    </>
  );
};

export default Banner;
