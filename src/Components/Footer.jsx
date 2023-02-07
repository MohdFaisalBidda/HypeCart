import React from 'react'
import { AiFillInstagram, AiFillPhone, AiOutlineMail, AiFillTwitterSquare, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';


const Footer = () => {
    return (
        <div className='h-full flex justify-between pt-4 px-8 gap-10 my-4 w-full'>
            <div className="">
                <h1 className='text-xl border-b-2 w-36 border-red-400'>Social Handles</h1>
                <div className="mt-2 text-4xl flex justify-start items-center gap-4">
                    <p className='my-1 text-red-600 cursor-pointer hover:scale-125 transition-all'><AiFillInstagram /></p>
                    <p className='my-1 text-blue-500 cursor-pointer hover:scale-125 transition-all'><AiFillTwitterSquare /></p>
                    <p className='my-1 text-blue-800 cursor-pointer hover:scale-125 transition-all'><AiFillFacebook /></p>
                    <p className='my-1 text-blue-600 cursor-pointer hover:scale-125 transition-all'><AiFillLinkedin /></p>
                </div>
            </div>
            <div className="hidden md:flex items-end text-base">{new Date().getFullYear()} <i className='ml-2 text-green-500'>Earthly.Inc</i> </div>
            <div className="">
                <h1 className='text-xl border-b-2 w-36 border-red-400'>Contact</h1>
                <div className="mt-2 flex flex-col">
                    <div className='flex items-center'><GrLocation className='mr-2' /> India</div>
                    <div className='flex items-center'><AiFillPhone className='mr-2' />+91-0000000000</div>
                    <div className='flex items-center'><AiOutlineMail className='mr-2' /> abc@abc.com</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
