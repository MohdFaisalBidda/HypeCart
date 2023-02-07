import React from 'react'
import image1 from "../assets/img1.webp"
import eco from "../assets/eco-friendly.png"
import world from "../assets/world.png"
import { motion } from "framer-motion"
import { Link } from 'react-scroll'




const Home = () => {

    return (
        <>
            <div id='home' className="flex flex-col md:flex-row h-screen justify-center items-center p-10 ">
         <img src={eco} alt="" className='w-10 absolute left-4 bottom-3'/>
         <img src={world} alt="" className='w-10 absolute right-4 bottom-3'/>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [-250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}

                    className="md:w-3/5 md:ml-20">
                    <img src={image1} alt="" className='w-full shadow-[10px_10px_black]' />
                </motion.div>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-2/3 flex flex-col text-center mx-20 mt-20 justify-center items-center">
                    <h1 className='md:text-5xl text-3xl'><i className='bg-gradient-to-r from-green-300 to-green-600 bg-clip-text text-transparent'>Sustainable products</i> at affordable prices</h1>
                    <Link to="products" smooth className='text-xl bg-white rounded- w-40 p-2 font-bold font-serif border-black border-2 hover:bg-green-300 hover:border-2 transition-all mt-6 shadow-[4px_4px_black] cursor-pointer'>shop</Link>
                </motion.div>
            </div>
        </>
    )
}

export default Home
