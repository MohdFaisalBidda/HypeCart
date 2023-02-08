import React, { useState } from 'react'
import { ShoppingCartIcon, GlobeAltIcon } from '@heroicons/react/24/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    return (
        <div className='p-6 flex justify-between items-center bg-gradient-to-b from-red-300 to-white h-20 sticky top-0 z-10'>
            <motion.div
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ x: [250, 0], opacity: 1 }}
                transition={{ duration: 1 }}
                className='text-2xl font-medium md:ml-8 flex justify-center items-center cursor-pointer'>
                <GlobeAltIcon className='h-6' />
                <h2 className='border-b-2 border-black ml-1 w-8 hover:w-16 transition-all'><Link to='home' smooth>Earthly</Link></h2>
            </motion.div>
            <motion.div
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ x: [-250, 0], opacity: 1 }}
                transition={{ duration: 1 }}
                className="hidden md:flex text-xl font-mono items-center ">

                <li className="md:mx-4 px-4 hover:text-red-500 hover:border-b-2 border-red-500 cursor-pointer transition-all list-none"><Link to='home' smooth>Home</Link></li>
                <li className="md:mx-4 px-4 hover:text-red-500 hover:border-b-2 border-red-500 cursor-pointer transition-all list-none"><Link to='products' smooth>Products</Link></li>
                <li className="mx-4 w-5 h-5 hover:text-red-500 hover:border-b-2 border-red-500 cursor-pointer transition-all list-none"><ShoppingCartIcon /></li>
            </motion.div>

            <div className="md:hidden z-10 duration-150 transition-all" onClick={() => setNav(!nav)}>
                {nav ? <XMarkIcon className="w-8 cursor-pointer" /> : <Bars3Icon className="w-8 cursor-pointer" />}
            </div>

            {nav &&
                <ul className='flex flex-col justify-center items-center absolute top-0 right-0 h-[564px] w-40 bg-red-400 text-black text-xl bg-opacity-90 gap-y-5'>
                    <Link to='home' smooth className='cursor-pointer hover:underline'>Home</Link>
                    <Link to='products' smooth className='cursor-pointer hover:underline'>Products</Link>
                    <li className='cursor-pointer w-5 h-5 hover:underline'><ShoppingCartIcon /></li>
                </ul>}



        </div>
    )
}

export default Navbar
