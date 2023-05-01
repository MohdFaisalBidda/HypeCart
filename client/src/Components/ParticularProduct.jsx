import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { data } from "../../data"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Slices/cartSlice';


const ParticularProduct = () => {
    const [singleProduct, setSingleProduct] = useState([])
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const navigate =useNavigate();
    let { productid } = useParams();
    // console.log(productid);

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

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        navigate("/cart");

    }


    return (
        <div>
            <>
                {singleProduct.map((item) => {
                    return (
                        <div key={item._id} className="flex flex-col md:flex-row justify-center items-center h-screen w-full">
                            <motion.div
                                initial={{ x: 0, opacity: 0 }}
                                whileInView={{ opacity: 80 }}
                                transition={{ duration: 1.2 }}
                                className='mx-10 md:w-[30rem] p-2 rounded-md'>
                                <img src={item.image} alt="" className='md:w-[48rem] md:h-[40rem] object-contain' />
                            </motion.div>
                            <div className="m-10 w-[30rem] p-10">
                                <motion.div
                                    initial={{ x: 0, opacity: 0 }}
                                    whileInView={{ opacity: 80 }}
                                    transition={{ duration: 1.2 }}
                                    className="">
                                    <h1 className='mt-2 mb-2 text-2xl'>{item.title}</h1>
                                    <p className='mb-6 text-sm text-gray-500'>{item.description}</p>
                                </motion.div>
                                <div className="my-8 flex items-center justify-between">
                                    <h2 className='text-4xl font-thin'>$ {item.price}</h2>
                                    <div className="flex justify-center">
                                        <h1 className='text-2xl mr-2 '>size:</h1>
                                        <input type="text" className='border border-gray-400 w-20 h-10 rounded-sm text-center text-xl pointer-events-none' value={item.size} />
                                    </div>

                                </div>
                                <div className="my-8 flex justify-between">
                                    <div className="flex justify-center items-center gap-2">
                                        <button className='text-4xl' onClick={() => setCount(count <= 0 ? 0 : count - 1)}>-</button>
                                        <input type="text" className='border border-gray-400 w-14 h-10 rounded-lg text-center text-xl pointer-events-none' value={count} />
                                        <button className='text-4xl' onClick={() => setCount(count + 1)}>+</button>
                                        {/* <h1 className='text-2xl'>Stock</h1> */}

                                    </div>
                                </div>
                                <button className='mr-8 bg-black p-2 rounded-xl border border-black text-white font-bold hover:bg-white hover:text-black cursor-pointer' onClick={() => handleAddToCart(item)}>Add To Cart</button>
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
