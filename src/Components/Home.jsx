import React from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import { homeData } from '../../data'
import HomeItem from './HomeItem'
import image1 from "../assets/img1.webp"
import { motion } from "framer-motion"



const Home = () => {

    return (
        <>
            <div id='home' className="flex flex-col md:flex-row h-screen justify-center items-center p-10 ">
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [-250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}

                    className="md:w-3/5 md:ml-10">
                    <img src={image1} alt="" className='w-full shadow-[10px_10px_black]' />
                </motion.div>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-2/3 flex flex-col text-center mx-20 mt-20 justify-center items-center">
                    <h1 className='text-5xl'>Sustainable Product</h1>
                    <button className='text-xl bg-white rounded- w-40 p-2 font-bold font-serif border-black border-2 hover:bg-red-300 hover:border-2 transition-all mt-6 shadow-[4px_4px_black]'>shop</button>
                </motion.div>
            </div>
        </>
    )
}

export default Home
