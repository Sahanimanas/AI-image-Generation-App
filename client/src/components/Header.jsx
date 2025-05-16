import React, { useContext} from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
      const {user , setShowLogin} = useContext(AppContext);
    function onclickHandler(){
        if(user){
          navigate('/result');
        }else{
            setShowLogin(true)
        }
    }
  return (
    <motion.div
      className="flex flex-col justify-center mt-20 items-center text-center my-20"
      initial={{ opacity: 0.2, y: 100 }}
      transistion={{ delay:0,duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="inline-flex  text-stone-500 border border-neutral-500 py-1 gap-2 bg-white px-6 rounded-full mx-auto justify-center text-xs sm:text-sm "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transistion={{ delay: 1, duration: 0.8 }}
      >
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="" />
      </motion.div>

      <motion.h1 className="text-4xl max-w-[300px] sm:text-6xl sm:max-w-[590px] mx-auto mt-10 text-center ">
        Turn text to{" "}
        <span
          className="text-blue-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transistion={{ delay: 0.4, duration: 2 }}
        >
          image
        </span>{" "}
        , in seconds.
      </motion.h1>

      <motion.p
        className="text-center max-w-xl mx-auto mt-5"
        initial={{ opacity: 0,y:20 }}
        animate={{ opacity: 1,y:0 }}
        transistion={{ delay: 0.6, duration: 0.8 }}
      >
        Unleash your creativity with AI. Turn your imagination into visual art
        ib secinds - just type, and watch the magic happen
      </motion.p>

      <motion.button
        className="sm:text-lg text-white mt-8 px-12 py-2.5 flex item-center bg-black w-auto gap-2 rounded-full"
        onClick={onclickHandler}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transistion={{default: {duration:0.5},opacity:{delay:0.8,duration:1} }}
        whileHover={{ scale: 1.05}}
        whileTap={{scale:0.95}}
      >
        Generate Images
        <img src={assets.star_group} alt="" className="h-6" />
      </motion.button>

      <div
        className="flex flex-wrap justify-center mt-16 gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transistion={{ delay: 1, duration: 1}}
      >
        {Array(6)
          .fill("")
          .map((item, index) => {
            return (
              <motion.img
              whileHover={{scale:1.05,duration:0.1}}
                className="rounded hover:scale-105 transition-all duration-300 cursor-pointer mx-sm:w-10 "
                src={
                  index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2
                }
                key={index}
                width={70}
              />
            );
          })}
      </div>
      <motion.p
      initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transistion={{ delay: 1.2, duration: 0.8}}
      className="mt-2 text-neutral-600">Generated Images from imagify</motion.p>
    </motion.div>
  );
};

export default Header;
