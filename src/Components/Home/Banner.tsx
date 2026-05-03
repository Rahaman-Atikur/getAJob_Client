import React from "react";
// import { motion } from "motion/react";
import {backgroundImage} from "../../../public/picture/Background.jpg"



const Banner = () => {

  return (

    <>
    {/* Full Background Content */}
    <div className="h-full w-full">
      <img src={backgroundImage} alt="Background" />

    </div>
    {/* First Banner Content(Text) */}
    <div >
      <p>The Easiest Way to Find Your <span className="text-purple-500">First</span>  Dream Job</p>

    </div>


    {/* Second Banner Content(Picture) */}
    <div>

    </div>

    
    
    </>
  );
};

export default Banner;
