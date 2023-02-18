import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { data } from "../../data"


const CategoryProducts = () => {
    const location = useLocation();
    const cat = location.pathname.slice(10)
    console.log(cat);





    return (
        <div className='mx-10 flex justify-center items-center my-40'>
            <div className="text-center rounded-md grid grid-cols-1 md:grid-cols-2 gap-y-40 gap-x-80 place-items-center">


                {data.filter((item) => item.category === cat).map(({ image, title }, i) => {
                    return (
                        <>
                            <div key={i} className="shadow-xl flex flex-col justify-center items-center md:w-[25rem]">
                                <img src={image} alt="" className='object-contain w-[25rem] h-[20rem] bg-cover' />
                                <div className="w-full">
                                    <h1 className='mt-2 mb-6 text-xl font-bold break-words'>{title}</h1>
                                    <Link to={``} className='bg-green-200 p-2 px-4 cursor-pointer font-medium rounded-xl'>view Product</Link>

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
    )

}

export default CategoryProducts
