import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { addToCart } from "../redux/Slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../redux/Slices/wishlistSlice";

const CategoryProducts = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [filterProducts, setFilterProducts] = useState({});
  const [newfilter, setNewFilter] = useState([]);
  const [sort, setSort] = useState("asc");

  const cat = location.pathname.slice(10);
  // console.log(cat);

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilterProducts({
      ...filterProducts,
      [e.target.name]: value,
    });
  };
  // console.log(cat, filterProducts, sort);

  const handleAddToCart = (product) => {
    if (user == null) {
      navigate("/login");
    } else {
      navigate("/cart");
      const userId = user.user._id;
      console.log(userId);
      dispatch(addToCart({ userId, ...product }));
    }
  };

  const handleWishlist = (product) => {
    if (user == null) {
      navigate("/login");
    } else {
      navigate("/cart");
      dispatch(addToWishlist(product));
    }
  };

  const productData = async () => {
    setLoad(true);
    const res = await fetch(
      `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/products`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const Data = await res.json();
    setProducts(Data);
    setLoad(false);
  };

  useEffect(() => {
    productData();
  }, []);

  useEffect(() => {
    setNewFilter(
      products.filter((item) =>
        Object.entries(filterProducts).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
    if (filterProducts.color === "All") {
      setNewFilter(products);
    }

    if (sort === "asc") {
      setNewFilter((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else if (sort === "desc") {
      setNewFilter((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [cat, products, sort, filterProducts, sort]);

  return (
    <>
      <h2 className="mx-10 my-8 text-3xl font-bold underline">{cat}</h2>
      <div className="mt-12 flex flex-col md:flex-row items-center justify-between">
        <div className="flex mx-6 items-center">
          <h2 className="text-xl font-medium">Filter Products:</h2>
          <div className="flex">
            <div className="relative ml-8">
              <select
                onChange={handleFilter}
                name="color"
                id=""
                className="border border-gray-400 w-28 h-10 rounded-sm"
              >
                <option>All</option>
                <option>Blue</option>
                <option>White</option>
                <option>Brown</option>
              </select>
              {/* <input type="text" className='border border-gray-400 w-28 h-10 ' /> <span><IoIosArrowDown className='absolute top-3 right-2 text-lg' /></span> */}
            </div>
            <div className="ml-8 relative">
              <select
                onChange={handleFilter}
                name="size"
                id=""
                className="border border-gray-400 w-20 h-10 text-center rounded-sm"
              >
                <option>S</option>
                <option>L</option>
                <option>M</option>
              </select>
              {/* <input type="text" className='border border-gray-400 w-24 h-10' />
                            <span><IoIosArrowDown className='absolute top-3 right-2 text-lg' /></span> */}
            </div>
          </div>
        </div>
        <div className="flex items-center mt-10 md:mr-0 mr-auto ml-12 md:mt-0 ">
          <h2 className="text-xl font-medium">Sort Products:</h2>
          <div className="relative ml-10 md:mr-4">
            <select
              onChange={(e) => setSort(e.target.value)}
              className="border border-gray-400 w-28 h-10 rounded-sm"
            >
              <option value="asc">Price (asc)</option>
              <option value="desc">Price (desc)</option>
            </select>
            {/* <input type="text" className='border border-gray-400 w-28 h-10' />
                        <span><IoIosArrowDown className='absolute top-3 right-2 text-lg' /></span> */}
          </div>
        </div>
      </div>
      <div className="mx-10 flex justify-center items-center my-40">
        <div className="text-center rounded-md grid grid-cols-1 md:grid-cols-2 gap-y-40 gap-x-80 place-items-center">
          {newfilter
            ?.filter((item) => item.category === cat)
            ?.map((item) => {
              return (
                <>
                  <div
                    key={item._id}
                    className="shadow-xl flex flex-col justify-center items-center md:w-[25rem]"
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="object-contain w-[25rem] h-[20rem]"
                    />
                    <div className="w-full">
                      <h1 className="mt-2 mb-6 text-xl font-bold break-words">
                        {item.title}
                      </h1>
                      <Link
                        to={`/products/${item._id}`}
                        className="bg-white border-black border hover:bg-gray-300 p-2 px-4 cursor-pointer font-medium rounded-xl"
                      >
                        view Product
                      </Link>

                      <svg
                        onClick={() => handleWishlist(item)}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-10 hover:fill-red-500 cursor-pointer float-left"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-10 float-right cursor-pointer"
                        onClick={() => handleAddToCart(item)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </>
              );
            })}

          {load &&
            [...new Array(10)].map(() => {
              return (
                <div className="max-w-md p-4 border border-gray-100 w-96 rounded shadow animate-pulse md:p-6 ">
                  <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded ">
                    <svg
                      className="w-12 h-12 text-gray-400 "
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512"
                    >
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full "></div>
                  <div className="flex items-center mt-4 space-x-3">
                    <div className="flex flex-col justify-center items-center w-full">
                      <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-2"></div>
                      <div className="w-48 h-2 bg-gray-200 rounded-full "></div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CategoryProducts;
