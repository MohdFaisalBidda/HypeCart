import { motion } from 'framer-motion';
import React from 'react'
import { AiFillInstagram, AiFillPhone, AiOutlineMail, AiFillTwitterSquare, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';

const Footer = () => {
    return (
        <div className='flex justify-center items-end pt-14 mb-2 w-full relative'>
            <div className="absolute bottom-0 text-base">{new Date().getFullYear()} <i className='ml-2 text-gray-500 underline'>HypeCart.Inc</i> </div>
        </div>
    )
}

export default Footer
