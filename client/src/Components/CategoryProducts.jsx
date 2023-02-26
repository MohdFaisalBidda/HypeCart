import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io"


const CategoryProducts = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const cat = location.pathname.slice(10)
    console.log(cat);


    const productData = async () => {
        const res = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/products`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
            },
        })
        const Data = await res.json();
        setProducts(Data)
    }
    useEffect(() => {
        productData();
    }, [])

    return (
        <>
            <h2 className='mx-10 my-8 text-3xl font-bold underline'>{cat}</h2>
            <div className="mt-12 flex flex-col md:flex-row items-center justify-between">
                <div className="flex mx-6 items-center">
                    <h2 className='text-xl font-medium'>Filter Products:</h2>
                    <div className="flex">
                        <div className="relative ml-8">
                            <select name="" id="" className='border border-gray-400 w-28 h-10 rounded-sm'>
                                <option value="">White</option>
                                <option value="">Blue</option>
                                <option value="">Brown</option>
                            </select>
                            {/* <input type="text" className='border border-gray-400 w-28 h-10 ' /> <span><IoIosArrowDown className='absolute top-3 right-2 text-lg' /></span> */}

                        </div>
                        <div className="ml-8 relative">
                            <select name="color" id="" className='border border-gray-400 w-20 h-10 text-center rounded-sm'>
                                <option value="">S</option>
                                <option value="">L</option>
                                <option value="">M</option>
                            </select>
                            {/* <input type="text" className='border border-gray-400 w-24 h-10' />
                            <span><IoIosArrowDown className='absolute top-3 right-2 text-lg' /></span> */}

                        </div>
                    </div>
                </div>
                <div className="flex items-center mt-10 md:mr-0 mr-auto ml-12 md:mt-0 ">
                    <h2 className='text-xl font-medium'>Sort Products:</h2>
                    <div className="relative ml-10 md:mr-4">
                        <select name="" id="" className='border border-gray-400 w-28 h-10 rounded-sm'>
                            <option value="">Price (asc)</option>
                            <option value="">Price (desc)</option>
                        </select>
                        {/* <input type="text" className='border border-gray-400 w-28 h-10' />
                        <span><IoIosArrowDown className='absolute top-3 right-2 text-lg' /></span> */}
                    </div>
                </div>
            </div>
            <div className='mx-10 flex justify-center items-center my-40'>
                <div className="text-center rounded-md grid grid-cols-1 md:grid-cols-2 gap-y-40 gap-x-80 place-items-center">
                    {products?.filter((item) => item.category === cat)?.map(({ image, title, _id }, id) => {
                        return (
                            <>
                                <div key={_id} className="shadow-xl flex flex-col justify-center items-center md:w-[25rem]">
                                    <img src={image} alt="" className='object-contain w-[25rem] h-[20rem]' />
                                    <div className="w-full">
                                        <h1 className='mt-2 mb-6 text-xl font-bold break-words'>{title}</h1>
                                        <Link to={`/products/${_id}`} className='bg-white border-black border hover:bg-gray-300 p-2 px-4 cursor-pointer font-medium rounded-xl'>view Product</Link>

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 hover:fill-red-500 cursor-pointer float-left">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 float-right cursor-pointer">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </>

                        )
                    })}
                </div>
            </div>
        </>
    )

}

export default CategoryProducts
