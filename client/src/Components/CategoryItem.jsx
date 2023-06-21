import React from 'react'
import { motion } from "framer-motion"
import { Link, useLocation } from 'react-router-dom'



const CategoryItem = ({ src, category, id }) => {

  return (
    <motion.div
      initial={{ x: 10, opacity: 0 }}
      whileInView={{ opacity: 80 }}
      transition={{ duration: 1.2 }}
     key={id}
      className='mx-10 shadow-xl text-center rounded-md flex flex-col'>



      <img src={src} alt="" className=' object-contain w-[25rem] h-[20rem] bg-cover' />
      <h1 className='mt-4 mb-2 text-xl font-bold '>{category}</h1>
      <Link to={`/category/${category}`} className='bg-black text-white hover:bg-slate-800 font-semibold py-2 cursor-pointer font-serif rounded-xl'>Show Products</Link>

      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 hover:fill-red-500 cursor-pointer float-left">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 float-right cursor-pointer">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg> */}

    </motion.div>
  )
}

export default CategoryItem
