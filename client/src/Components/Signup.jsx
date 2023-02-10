import React from 'react'
import { Link } from 'react-router-dom'


const Signup = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h2 className='text-4xl mb-4 font-light border-b-2 border-gray-400 '>Sign Up</h2>
            <div className="w-[25rem] md:w-[30rem] flex">
                <input required placeholder='First Name' className=' md:w-1/2 w-1/2 p-2 my-3 rounded-full border border-gray-500 mx-2' />
                <input required placeholder='Last Name' className=' md:w-1/2 w-1/2 p-2 my-3 rounded-full border border-gray-500' />
            </div>
            <input required placeholder='Email' className=' md:w-[30rem] w-[25rem] p-2 my-3 rounded-full border border-gray-500' />
            <input required type="password" placeholder='Password' className='md:w-[30rem] w-[25rem] p-2 my-3 rounded-full border border-gray-500' />
            <div className="mt-6">
                <button className='w-80 p-2 bg-black text-white rounded-xl hover:opacity-90'>Signup</button>
            </div>
            <div className="mt-6">
                <p className='font-thin text-base'>Already have an acoount! <Link to={"/login"} className="underline ml-1 text-blue-500">Log In</Link></p>
            </div>
        </div>
    )
}

export default Signup
