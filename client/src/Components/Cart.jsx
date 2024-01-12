import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotal,
  removeFromCart,
} from "../redux/Slices/cartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth);
  const cartItemUser = JSON.parse(user.token);
  // console.log(user.user.user._id);
  console.log(cart);
  // console.log(cart.filter((el) => el.userId === user.user.user._id));

  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);

  return (
    <div className="w-full">
      <h1 className="text-center text-3xl font-bold my-4 ">Your Cart</h1>
      <div className="flex text-xs justify-between py-8 lg:text-xl px-10">
        <button
          className="border-2 bg-white px-2 py-1 text-black border-black hover:text-white hover:bg-black hover:border-2"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          {/* <p className='leading-5 underline lg:mx-4'>Cart Items (2)</p> */}
          {/* <p className='leading-5 underline lg:mx-4'>Your Wishlist</p> */}
        </div>
        <button
          className="border-2 bg-white px-2 py-1 text-black border-black hover:text-white hover:bg-black hover:border-2 hidden lg:flex"
          onClick={() => navigate("/category")}
        >
          Continue Shopping
        </button>
      </div>

      <div className="flex lg:justify-between lg:flex-row flex-col lg:my-0 my-10">
        <div className="lg:flex-[3] ">
          {cart
            // .filter((el) => el.userId === user.user.user._id)
            .map((item) => (
              <>
                <div className="flex justify-between lg:flex-row flex-col px-10 py-8 lg:py-0">
                  <img
                    src={item.image}
                    className="lg:w-[200px] w-[420px] object-contain mx-auto"
                    alt="Hello"
                  />
                  <div className="lg:flex-[2] lg:text-start flex flex-col justify-around lg:p-20 text-lg my-4 gap-y-4 lg:my-0 lg:gap-y-0">
                    <h3 className="py-1">
                      <b>Title</b>: {item.title}
                    </h3>
                    <h3 className="py-1">
                      <b>Description</b>: {item.description}
                    </h3>
                    <h3 className="py-1">
                      <b>Color</b>: {item.color}
                    </h3>
                    <h3 className="py-1">
                      <b>Size</b>: {item.size}
                    </h3>
                    <button
                      className="font-thin hover:underline cursor-pointer text-black w-20 rounded-md text-center border border-black mt-1"
                      onClick={() => handleRemove(item)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="lg:flex-1 flex justify-between items-center text-2xl my-2 lg:my-0">
                    <div className="flex justify-center items-center">
                      <button
                        className="text-4xl mr-2"
                        onClick={() => dispatch(decreaseCart(item))}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        className="border border-gray-400 w-14 h-10 rounded-lg text-center text-xl pointer-events-none"
                        value={item.cartQuantity}
                      />
                      <button
                        className="text-4xl ml-2"
                        onClick={() =>
                          dispatch(
                            addToCart({ ...item })
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                    <h2>${item.price}</h2>
                  </div>
                </div>
                <hr className="border-gray-400 lg:mt-0 mt-8" />
              </>
            ))}
        </div>
        <div className="lg:flex-[1] h-[34rem] rounded-lg border border-black p-10 m-10">
          <h1 className="text-3xl font-thin">ORDER SUMMARY</h1>
          <div className="flex flex-col">
            {/* <div className="flex justify-between mt-10 text-lg">
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
                        </div> */}
            <div className="flex justify-between mt-10 text-2xl">
              <p>Total</p>
              <p>${cartTotal.cartTotalAmount}</p>
            </div>
            <div className="mt-14">
              <button
                onClick={() => navigate("/pay")}
                className="w-full bg-black p-2 rounded-xl text-white font-bold hover:bg-transparent hover:text-black hover:border-black hover:border-2"
              >
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
