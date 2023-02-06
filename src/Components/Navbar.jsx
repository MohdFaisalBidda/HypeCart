import React from 'react'
import { ShoppingCartIcon, GlobeAltIcon } from '@heroicons/react/24/solid'
import { } from 'react-router-dom'
import { Link } from 'react-scroll'


const Navbar = () => {
    return (
        <div className='p-6 flex justify-between items-center bg-gradient-to-b from-red-300 to-white h-20 sticky top-0'>
            <div className='text-2xl font-medium md:ml-8 flex justify-center items-center cursor-pointer'>
                <GlobeAltIcon className='h-6' />
                <h2 className='border-b-2 border-black ml-1 w-8 hover:w-16 transition-all'><Link to='home' smooth>Earthly</Link></h2>
            </div>
            <div className="flex text-xl font-mono items-center ">

                <li className="md:mx-4 px-4 hover:text-red-500 hover:border-b-2 border-red-500 cursor-pointer transition-all list-none"><Link to='home' smooth>Home</Link></li>
                <li className="md:mx-4 px-4 hover:text-red-500 hover:border-b-2 border-red-500 cursor-pointer transition-all list-none"><Link to='products' smooth>Products</Link></li>
                <li className="mx-4 w-5 h-5 hover:text-red-500 hover:border-b-2 border-red-500 cursor-pointer transition-all list-none"><ShoppingCartIcon /></li>
            </div>

        </div>
    )
}

export default Navbar
