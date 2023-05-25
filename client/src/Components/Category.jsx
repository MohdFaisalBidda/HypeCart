import React, { useEffect, useState } from 'react'
import CategoryItem from './CategoryItem'


const Category = () => {
  const [catData, setCatData] = useState([]);

  const categoryData = async () => {
    const res = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}categories`, {
      method: "GET",
      headers: {
        'content-type': 'application/json'
      },
    })
    const data = await res.json();
    setCatData(data);
  }


  useEffect(() => {
    categoryData();
  }, [])

  return (
    <>
      <div className="mt-24">
        <h1 className='mx-14 text-3xl border-b-2 w-16 border-gray-500 hover:w-36 transition-all mb-16'>Categories</h1>
        <div

          id='products' className='flex flex-row flex-wrap gap-x-60 gap-y-28 justify-center items-center mt-4 mb-10'>
          {catData.map(({ image, category, _id }, i) => {
            return (
              <CategoryItem src={image} category={category} key={_id} id={_id} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Category
