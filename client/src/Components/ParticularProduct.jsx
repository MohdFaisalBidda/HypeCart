import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { data } from "../../data"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'


const ParticularProduct = () => {
    const [singleProduct, setSingleProduct] = useState([])
    let { productid } = useParams();
    console.log(productid);

    const productData = async () => {
        const res = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/products/${productid}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
            },
        })
        const data = await res.json();
        setSingleProduct(data);

        console.log(singleProduct);
    }

    useEffect(() => {
        productData();
    }, [])


    return (
        <div>
            <>
                {singleProduct.map((item) => {
                    return (
                        <div className="flex flex-col md:flex-row justify-center items-center h-screen w-full">
                            <motion.div
                                initial={{ x: 0, opacity: 0 }}
                                whileInView={{ opacity: 80 }}
                                transition={{ duration: 1.2 }}
                                className='mx-10 w-[30rem] p-2 rounded-md'>
                                <img src={item.image} alt="" className='w-[48rem] h-[40rem] object-contain' />
                            </motion.div>
                            <div className="mt-10 mx-10 w-[30rem]">
                                <motion.div
                                    initial={{ x: 0, opacity: 0 }}
                                    whileInView={{ opacity: 80 }}
                                    transition={{ duration: 1.2 }}
                                    className="">
                                    <h1 className='mt-2 mb-2 text-2xl'>{item.title}</h1>
                                    <p className='mb-6 text-sm text-gray-500'>{item.description}</p>
                                </motion.div>
                                <Link to={`/`} className='px-4 py-1 text-sm border border-black w-28 h-6 text-black font-bold hover:bg-black hover:text-white cursor-pointer rounded-full mx-auto'>Back To Home</Link>
                            </div>
                        </div>
                    )
                })}


            </>

        </div>

    )
}

export default ParticularProduct
