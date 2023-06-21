import React, { useState } from 'react'
import { ShoppingCartIcon, GlobeAltIcon } from '@heroicons/react/24/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {ImExit} from "react-icons/im"
import { motion } from 'framer-motion'
import { Link as ReactLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser, reset } from '../redux/Slices/authSlice'
import { reset as resetCart } from '../redux/Slices/cartSlice'


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    // console.log(user?.user);

    const onLogout = () => {
        dispatch(logoutUser(user))
        navigate("/")
        if (logoutUser) {
            dispatch(reset())
            //TODO: below line should be removed after finding the solution for storing particular user's products in their own cart
            dispatch(resetCart())
        }
    }


    return (
        <div className='bg-gray-100 p-6 flex justify-between items-center h-20 sticky top-0 z-10'>
            <motion.div
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ opacity: 80 }}
                transition={{ duration: 1.2 }}
                className='text-2xl font-medium md:ml-8 flex justify-center items-center cursor-pointer'>
                <GlobeAltIcon className='h-6' />
                <h2 className='border-b-2 border-black ml-1 w-14 hover:w-28 transition-all'><ReactLink to={'/'} >HypeCart</ReactLink></h2>
            </motion.div>
            <motion.div
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ opacity: 80 }}
                transition={{ duration: 1.2 }}
                className="hidden md:flex text-xl font-mono items-center ">

                <li className="md:mx-4 px-4 hover:text-gray-500 hover:border-b-2 border-black cursor-pointer transition-all list-none"><ReactLink to={"/"}>Home</ReactLink></li>
                <li className="md:mx-4 px-4 hover:text-gray-500 hover:border-b-2 border-black cursor-pointer transition-all list-none"><ReactLink to={"/category"}>Products</ReactLink></li>
                {user ?
                    (<button onClick={onLogout} className="md:mx-4 px-4 hover:text-gray-500 hover:border-b-2 border-black cursor-pointer transition-all list-none flex justify-between items-center">{user?.user?.firstName} <ImExit className="ml-4"/></button>
                    ) :
                    (<><ReactLink to={"/login"}><li className="md:mx-4 px-4 hover:text-gray-500 hover:border-b-2 border-black cursor-pointer transition-all list-none">Log In</li>
                    </ReactLink>
                        <ReactLink to={"/signup"}><li className="md:mx-4 px-4 hover:text-gray-500 hover:border-b-2 border-black cursor-pointer transition-all list-none">Sign Up</li>
                        </ReactLink></>)
                }
                {user && (<ReactLink to={"/cart"} className="mx-4 w-5 h-5 hover:text-gray-500 hover:border-b-2 border-black cursor-pointer transition-all list-none"><ShoppingCartIcon /></ReactLink>)}

            </motion.div>

            <div className="md:hidden z-10 duration-150 transition-all" onClick={() => setNav(!nav)}>
                {nav ? <XMarkIcon className="w-8 cursor-pointer" /> : <Bars3Icon className="w-8 cursor-pointer" />}
            </div>

            {nav &&
                <ul className='flex flex-col justify-center items-center absolute top-0 right-0 h-[564px] w-40 bg-gray-400 text-black text-xl bg-opacity-90 gap-y-5'>
                    <ReactLink to={'/'} className='cursor-pointer hover:border-b-2 border-black transition-all' onClick={() => setNav(!nav)}>Home</ReactLink>
                    <ReactLink to={'/category'} className='cursor-pointer hover:border-b-2 border-black transition-all' onClick={() => setNav(!nav)}>Products</ReactLink>

                    {user ? ((<button onClick={onLogout} className="md:mx-4 px-4 hover:text-gray-500 hover:border-b-2 border-black cursor-pointer transition-all list-none flex justify-between items-center">{user?.user?.firstName} <ImExit className="ml-2"/></button>
                    )) : (<><ReactLink to={"/login"}  className='cursor-pointer hover:border-b-2 border-black transition-all' onClick={() => setNav(!nav)}>Log In</ReactLink>
                        <ReactLink to={"/signup"}  className='cursor-pointer hover:border-b-2 border-black transition-all' onClick={() => setNav(!nav)}>Sign Up</ReactLink></>)}



                    {user && (<ReactLink to={"/cart"} className='cursor-pointer w-5 h-5 hover:border-b-2 border-black transition-all' onClick={() => setNav(!nav)}><ShoppingCartIcon /></ReactLink>)}

                </ul>}



        </div>
    )
}

export default Navbar
