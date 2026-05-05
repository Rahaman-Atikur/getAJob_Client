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
              <p className="text-black">
                Each month, more than 3 million job seekers turn to website in
                their search for work, making over 140,000 applications every
                single day.
              </p>
            </div>

            <div className="w-3/5 flex mt-20 gap-4">
              <motion.img
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-10 flex-1 border-black border-4 border-dashed  "
                src="/public/picture/team1.jpg"
                alt=""
              />

              <motion.img
                animate={{ x: [0, 30, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-5 h-min flex-1  border-black border-4 border-dashed"
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
