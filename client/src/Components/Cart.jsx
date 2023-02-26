import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cart = useSelector((state) => state.cart.cartItems);
    return (
        <div className='w-full'>
            <h1 className='text-center text-3xl'>Your Cart</h1>
            <div className="flex text-xs justify-between py-8 md:text-xl px-10">
                <button className='border-2 bg-white px-2 py-1 text-black border-black hover:bg-transparent hover:text-white hover:bg-black hover:border-2'>Continue Shopping</button>
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <p className='leading-5 underline md:mx-4'>Shopping Bag (2)</p>
                    <p className='leading-5 underline md:mx-4'>Your Wishlist</p>
                </div>
                <button className='border-2 bg-white px-2 py-1 text-black border-black hover:bg-transparent hover:text-white hover:bg-black hover:border-2 hidden md:flex'>Checkout Now</button>
            </div>

            <div className="flex md:justify-between md:flex-row flex-col md:my-0 my-10">
                <div className="md:flex-[3] ">
                    {cart.map((item) => (
                        <>
                            <div className="flex justify-between md:flex-row flex-col px-10 ">
                                <img src={item.image} className='w-[200px] object-contain mx-auto' alt="Hello" />
                                <div className="md:flex-[2] md:text-start text-center flex flex-col justify-around md:p-20 text-lg">
                                    <h3 className='py-1'><b>Title</b>: {item.title}</h3>
                                    <h3 className='py-1'><b>Product Desc</b>: {item.description}</h3>
                                    <h3 className='py-1'><b>Color</b>: {item.color}</h3>
                                    <h3 className='py-1'><b>Size</b>: {item.size}</h3>

                                </div>
                                <div className="md:flex-1 flex justify-center items-center text-2xl">

                                    <h2 className='mr-10 font-bold'>+ 1 -</h2>
                                    <h2>${item.price}</h2>
                                </div>
                            </div>
                            <hr className='border-gray-400 md:mt-0 mt-8' />
                        </>
                    ))}
                </div>
                <div className="md:flex-[1] h-[34rem] rounded-lg border border-black p-10 mx-10">
                    <h1 className='text-3xl font-thin'>ORDER SUMMARY</h1>
                    <div className="flex flex-col">
                        <div className="flex justify-between mt-10 text-lg">
                            <p>subtotal</p>
                            <p>$80</p>
                        </div>
                        <div className="flex justify-between mt-10 text-lg">
                            <p>subtotal</p>
                            <p>$80</p>
                        </div>
                        <div className="flex justify-between mt-10 text-lg">
                            <p>subtotal</p>
                            <p>$80</p>
                        </div>
                        <div className="flex justify-between mt-10 text-2xl">
                            <p>Total</p>
                            <p>$80</p>
                        </div>
                        <div className="mt-14">
                            <button className='w-full bg-black p-2 rounded-xl text-white font-bold hover:bg-transparent hover:text-black hover:border-black hover:border-2'>Checkout Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
