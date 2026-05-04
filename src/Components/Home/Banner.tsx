import React from "react";
import { motion } from "motion/react";
const Banner = () => {
  return (
    <>
      <div className="relative">
        <img src="/public/picture/Background.jpg" alt="Background" />

        <div className="absolute top-0 left-0">
          <div className="flex">

            <div className="w-2/5">
              <p className="text-black">
                The Easiest Way to Find Your{" "}
                <span className="text-purple-500">First</span> Dream Job
              </p>
              <p  className="text-black">
                Each month, more than 3 million job seekers turn to website in
                their search for work, making over 140,000 applications every
                single day.
              </p>
            </div>




            <div className="w-3/5 flex">
              <motion.img 
              animate={{rotate:360, repeatCount: Infinity, duration: 2}}
              className="w-10 flex-1" src="/public/picture/team1.jpg" alt="" />


              <img
                className="w-10 h-min flex-1"
                src="/public/picture/team3.jpg"
                alt=""
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
