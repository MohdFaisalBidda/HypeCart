import React from "react";
import image1 from "../assets/banner.jpg";
import open from "../assets/open.png";
import bag from "../assets/shopping-bag.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import NewsLetter from "./NewsLetter";
import Category from "./Category";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="flex flex-col md:flex-row h-screen justify-center items-center p-10 "
      >
        <img src={bag} alt="" className="w-10 absolute left-4 bottom-3" />
        <img src={open} alt="" className="w-10 absolute right-4 bottom-3" />
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ opacity: 80 }}
          transition={{ duration: 1.2 }}
          className="md:w-3/5 md:ml-20"
        >
          <img
            src={image1}
            alt=""
            className="w-full shadow-[4px_4px_4px_black]"
          />
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ opacity: 80 }}
          transition={{ duration: 1.2 }}
          className="w-2/3 flex flex-col text-center mx-20 mt-20 justify-center items-center "
        >
          <h1 className="md:text-5xl text-3xl font-thin ">
            <i className="text-black font-normal ">Made With quality.</i> There
            is nothing like new
          </h1>
          <Link
            to="products"
            smooth
            className="text-xl bg-white rounded- w-40 p-2 font-normal border-black border-2 hover:bg-black hover:text-white hover:border-2 hover:border-white shadow-[2px_2px_black] transition-all mt-10 cursor-pointer"
          >
            shop
          </Link>
        </motion.div>
      </div>
      <Category />
      <NewsLetter />
    </>
  );
};

export default Home;
