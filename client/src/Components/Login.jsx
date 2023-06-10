import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { loginUser, logoutUser, reset } from '../redux/Slices/authSlice';
import BeatLoader from "react-spinners/BeatLoader";


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user: currentUser, isLoading, isError, isSuccess, message, token } = useSelector((state) => state.auth)
    const [user, setUser] = useState({ email: "", password: "" });
    // console.log(isError);

    // useEffect(()=>{
    //     if(auth._id){
    //         navigate("/");
    //     }
    // },[auth._id,navigate])

    useEffect(() => {
        // if (isError) {
        //     // toast.error(message)
        //     // console.log(message);
        // }
        // if (logoutUser) {
        //     dispatch(reset())
        // }

    }, [user, isError, isLoading, isSuccess, message, navigate, dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginUser(user))
        try {

            const res = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })

            const { token } = await res.json();

            if (res.ok) {
                Cookies.set("Token", token);
                localStorage.setItem("token", JSON.stringify(token));
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
                <input required placeholder='Email' className=' md:w-[30rem] w-[20rem] p-2 my-3 rounded-full border border-gray-500' name='email' onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} value={user.email} autoComplete="true" />
                <input required type="password" placeholder='Password' className='md:w-[30rem] w-[20rem] p-2 my-3 rounded-full border border-gray-500' name='password' onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} value={user.password} autoComplete="true" />

                {isLoading &&(
                    <BeatLoader color="#191919" />
                )}

                {isError && (<div className="mt-2">
                    <p className='font-thin text-lg text-red-600'>{message.message}</p>
                </div>)}
                
                <div className="mt-6">
                    <button className='md:w-80 w-48 p-2 bg-black text-white rounded-xl hover:opacity-90' disabled={isLoading}>Login</button>
                </div>

                <div className="mt-6">
                    <p className='font-thin md:text-base text-xs'>Need an account? <Link to={"/signup"} className="underline ml-1 text-blue-500">Sign Up</Link></p>
                </div>
            </div>
        </form>
    )
}

export default Login
