import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import React from 'react'

const NewsLetter = () => {
    return (
        <div className='h-80 bg-green-100 flex flex-col justify-center items-center mt-40'>
            <motion.div
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ opacity: 80 }}
                transition={{ duration: 1.2 }}
                className=" mb-2 text-center">
                <h1 className="text-4xl">NewsLetter 🗞</h1>
                <p className='mt-4 text-xl text-gray-500'>Get timely updates from your favorite products</p>
            </motion.div>
            <motion.div
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ opacity: 80 }}
                transition={{ duration: 1.2 }}
                className="mt-4 flex">
                <input className='border-4 border-green-400  rounded-full w-80 outline-green-400 text-xl' type="text" />
                <ArrowRightCircleIcon className='ml-2 w-10 bg-transparent border-2 items-center rounded-full cursor-pointer border-black' />
            </motion.div>
        </div>
    )
}

export default NewsLetter
