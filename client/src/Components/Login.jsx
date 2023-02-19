import Cookies from 'js-cookie';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ email: "", password: "" });

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {

         const res =await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })

            const {token} =await res.json();

            if(res.ok){
                Cookies.set("Token",token);
                navigate("/")
            }
              

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <form method='POST' action='/auth/login' onSubmit={handleSubmit}>

            <div className="w-full h-screen flex flex-col justify-center items-center">
                <h2 className='text-3xl md:text-4xl mb-4 font-light border-b-2 border-gray-400'>Login to Your account</h2>
                <input required placeholder='Email' className=' md:w-[30rem] w-[20rem] p-2 my-3 rounded-full border border-gray-500' name='email' onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} value={user.email} />
                <input required type="password" placeholder='Password' className='md:w-[30rem] w-[20rem] p-2 my-3 rounded-full border border-gray-500' name='password' onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} value={user.password} />
                <div className="mt-6">
                    <button className='md:w-80 w-48 p-2 bg-black text-white rounded-xl hover:opacity-90'>Login</button>
                </div>
                <div className="mt-6">
                    <p className='font-thin md:text-base text-xs'>Need an account? <Link to={"/signup"} className="underline ml-1 text-blue-500">Sign Up</Link></p>
                </div>
            </div>
        </form>
    )
}

export default Login
