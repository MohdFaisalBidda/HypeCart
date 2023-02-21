import React, { useState } from 'react'
import { ShoppingCartIcon, GlobeAltIcon } from '@heroicons/react/24/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { Link as ReactLink } from 'react-router-dom'


const Navbar = () => {
    const [nav, setNav] = useState(false);
    return (
        <div className='bg-gray-100 p-6 flex justify-between items-center h-20 sticky top-0 z-10'>
            <motion.div
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ opacity: 80 }}
                transition={{ duration: 1.2 }}
                className='text-2xl font-medium md:ml-8 flex justify-center items-center cursor-pointer'>
                <GlobeAltIcon className='h-6' />
                <h2 className='border-b-2 border-black ml-1 w-14 hover:w-28 transition-all'><Link to='home' smooth>HypeCart</Link></h2>
            </motion.div>
            <motion.div
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ opacity: 80 }}
                transition={{ duration: 1.2 }}
                className="hidden md:flex text-xl font-mono items-center ">

                <li className="md:mx-4 px-4 hover:text-gray-500 hover:border-b-2 border-black cursor-pointer transition-all list-none"><ReactLink to={"/"}>Home</ReactLink></li>
                <li className="md:mx-4 px-4 hover:text-gray-500 hover:border-b-2 border-black cursor-pointer transition-all list-none"><ReactLink to={"/category"}>Products</ReactLink></li>
                <ReactLink to={"/login"}><li className="md:mx-4 px-4 hover:text-gray-500 hover:border-b-2 border-black cursor-pointer transition-all list-none">Log In</li>
                </ReactLink>
                <ReactLink to={"/signup"}><li className="md:mx-4 px-4 hover:text-gray-500 hover:border-b-2 border-black cursor-pointer transition-all list-none">Sign Up</li>
                </ReactLink>
                <ReactLink to={"/cart"} className="mx-4 w-5 h-5 hover:text-gray-500 hover:border-b-2 border-black cursor-pointer transition-all list-none"><ShoppingCartIcon /></ReactLink>
            </motion.div>

            <div className="md:hidden z-10 duration-150 transition-all" onClick={() => setNav(!nav)}>
                {nav ? <XMarkIcon className="w-8 cursor-pointer" /> : <Bars3Icon className="w-8 cursor-pointer" />}
            </div>

            {nav &&
                <ul className='flex flex-col justify-center items-center absolute top-0 right-0 h-[564px] w-40 bg-gray-400 text-black text-xl bg-opacity-90 gap-y-5'>
                    <ReactLink to={'/'} className='cursor-pointer hover:underline' onClick={() => setNav(!nav)}>Home</ReactLink>
                    <ReactLink to={'/category'} className='cursor-pointer hover:underline' onClick={() => setNav(!nav)}>Products</ReactLink>
                    <ReactLink to={"/login"} smooth className='cursor-pointer hover:underline' onClick={() => setNav(!nav)}>Log In</ReactLink>
                    <ReactLink to={"/signup"} smooth className='cursor-pointer hover:underline' onClick={() => setNav(!nav)}>Sign Up</ReactLink>
                    <ReactLink to={"/cart"} className='cursor-pointer w-5 h-5 hover:underline' onClick={() => setNav(!nav)}><ShoppingCartIcon /></ReactLink>
                </ul>}



        </div>
    )
}

export default Navbar
