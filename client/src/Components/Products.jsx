import React from 'react'
import ProductItem from './ProductItem'
import { homeData } from "../../data"
import { motion } from 'framer-motion'



const Products = () => {
  return (
    <>
      <h1 className='mx-14 text-3xl border-b-2 w-16 border-red-500 hover:w-36 transition-all mb-16'>Categories</h1>
      <div
      
        id='products' className='flex flex-row flex-wrap gap-x-60 gap-y-28 justify-center items-center mt-4 mb-10'>
        {homeData.map(({ src, category, id }, i) => {
          return (
            <ProductItem  src={src} category={category} key={i} id={id}/>
          )
        })}
      </div>
    </>
  )
}

export default Products
