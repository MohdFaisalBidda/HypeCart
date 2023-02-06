import React from 'react'
import ProductItem from './ProductItem'
import { homeData } from "../../data"

const Products = () => {
  return (
    <>
      <h1 className='mx-14 text-3xl border-b-2 w-14 border-red-500 hover:w-28 transition-all mb-16'>Products</h1>
      <div id='products' className='flex flex-row flex-wrap gap-20 justify-center items-center mt-4 mb-10'>
        {homeData.map(({ src, desc,id }, i) => {
          return (
            <ProductItem src={src} desc={desc} key={i} id={id}/>
          )
        })}
      </div>
    </>
  )
}

export default Products
