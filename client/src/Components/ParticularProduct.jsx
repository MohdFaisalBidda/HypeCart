import React from 'react'
import { useParams } from 'react-router-dom';
import { data } from "../../data"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { GlobeAltIcon } from '@heroicons/react/24/solid'





const ParticularProduct = () => {
    let { productid } = useParams();
    console.log(productid)

    return (
        <div>
            {data.map(({ image, description,title, id }, i) => {
                if (productid == id)

                    return (
                        <>
                            <div className="flex flex-col md:flex-row justify-center items-center h-screen w-full">
                                <motion.div
                                    initial={{ x: 0, opacity: 0 }}
                                    whileInView={{ opacity: 80 }}
                                    transition={{ duration: 1.2 }}
                                    key={i}
                                    className='mx-10 w-[30rem] p-2 rounded-md'>
                                    <img src={image} alt="" className='w-[48rem] h-[40rem] object-contain' />
                                </motion.div>
                                <div className="mt-10 mx-10 w-[30rem]">
                                    <motion.div
                                        initial={{ x: 0, opacity: 0 }}
                                        whileInView={{ opacity: 80 }}
                                        transition={{ duration: 1.2 }}
                                        className="">
                                        <h1 className='mt-2 mb-2 text-2xl'>{title}</h1>
                                        <p className='mb-6 text-sm text-gray-500'>{description}</p>
                                    </motion.div>
                                    {/* <motion.div
                                        initial={{ x: 0, opacity: 0 }}
                                        whileInView={{ opacity: 80 }}
                                        transition={{ duration: 1.2 }}
                                        className="w-3/4 mt-6">
                                        <h1 className='mt-1 mb-1 text-2xl'>Features</h1>
                                        <ul className='list-disc mb-6 ml-8 text-sm'>
                                            <li>
                                                Every batch of cups is unique due to being natural.
                                                Lids available in different Colours.</li>
                                            <li>Leak-Proof</li>
                                            <li>Odorless tasteless and does not react with hot beverages</li>
                                            <li>Lightweight</li>
                                            <li>Microwavable</li>
                                        </ul>
                                    </motion.div> */}
                                    <Link to={`/`} className='px-4 py-1 text-sm border border-black w-28 h-6 text-black font-bold hover:bg-black hover:text-white cursor-pointer rounded-full mx-auto'>Back To Home</Link>
                                </div>
                            </div>
                        </>
                    )

            })}
        </div>

    )
}

export default ParticularProduct
