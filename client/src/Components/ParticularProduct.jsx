import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { data } from "../../data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/Slices/cartSlice";
import axios from "axios";

const ParticularProduct = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const [load, setLoad] = useState(false);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  let { productid } = useParams();

  useEffect(() => {
    const productData = async () => {
      try {
        setLoad(true);
        const res = await axios(
          `${
            import.meta.env.VITE_REACT_APP_BACKEND_URL
          }/api/products/find/${productid}`
        );
        setSingleProduct(res.data);
        setLoad(false);
      } catch (error) {
        console.log(error);
      }
    };

    productData();
  }, [productid]);

  const handleAddToCart = (product) => {
    // if (user == null) {
    //   navigate("/login");
    // } else {
    navigate("/cart");
    dispatch(addToCart(product));
    // }
  };

  console.log([singleProduct]);
  return (
    <div>
      <>
        {[singleProduct] &&
          [singleProduct].map((item) => {
            return (
              <div
                key={item?._id}
                className="flex flex-col md:flex-row justify-center items-center h-screen w-full"
              >
                <motion.div
                  initial={{ x: 0, opacity: 0 }}
                  whileInView={{ opacity: 80 }}
                  transition={{ duration: 1.2 }}
                  className="mx-10 md:w-[30rem] p-2 rounded-md"
                >
                  <img
                    src={item?.image}
                    alt=""
                    className="md:w-[48rem] md:h-[40rem] object-contain"
                  />
                </motion.div>
                <div className="m-10 w-[30rem] p-10">
                  <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ opacity: 80 }}
                    transition={{ duration: 1.2 }}
                    className=""
                  >
                    <h1 className="mt-2 mb-2 text-2xl">{item?.title}</h1>
                    <p className="mb-6 text-sm text-gray-500">
                      {item?.description}
                    </p>
                  </motion.div>
                  <div className="my-8 flex items-center justify-between">
                    <h2 className="text-4xl font-thin">$ {item?.price}</h2>
                    <div className="flex justify-center">
                      <h1 className="text-2xl mr-2 ">size:</h1>
                      <input
                        type="text"
                        className="border border-gray-400 w-20 h-10 rounded-sm text-center text-xl pointer-events-none"
                        value={item?.size}
                      />
                    </div>
                  </div>
                  <div className="my-8 flex justify-between">
                    <div className="flex justify-center items-center gap-2">
                      <button
                        className="text-4xl"
                        onClick={() => setCount(count <= 0 ? 0 : count - 1)}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        className="border border-gray-400 w-14 h-10 rounded-lg text-center text-xl pointer-events-none"
                        value={count}
                      />
                      <button
                        className="text-4xl"
                        onClick={() => setCount(count + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="mr-8 bg-black p-2 rounded-xl border border-black text-white font-bold hover:bg-white hover:text-black cursor-pointer"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add To Cart
                  </button>
                  <Link
                    to={`/`}
                    className="px-4 py-1 text-sm border border-black w-28 h-6 text-black font-bold hover:bg-black hover:text-white cursor-pointer rounded-full mx-auto"
                  >
                    Back To Home
                  </Link>
                </div>
              </div>
            );
          })}

        {load && (
          <div className="flex flex-col md:flex-row justify-center items-center h-screen w-full">
            <div
              role="status"
              className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
            >
              <div className="flex items-center justify-center md:w-[28rem] md:h-[20rem] w-80 h-80 bg-gray-300 rounded xl:w-[48rem] xl:h-[20rem] ">
                <svg
                  className="w-12 h-12 text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                >
                  <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                </svg>
              </div>
              <div className="w-full">
                <div className="h-2.5 bg-gray-300 rounded-full  w-48 mb-4"></div>
                <div className="h-2 bg-gray-300 rounded-full  max-w-[480px] mb-2.5"></div>
                <div className="h-2 bg-gray-300 rounded-full  mb-2.5"></div>
                <div className="h-2 bg-gray-300 rounded-full  max-w-[440px] mb-2.5"></div>
                <div className="h-2 bg-gray-300 rounded-full  max-w-[460px] mb-2.5"></div>
                <div className="h-2 bg-gray-300 rounded-full  max-w-[360px]"></div>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default ParticularProduct;
