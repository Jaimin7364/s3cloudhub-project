import React, { useState } from "react";
import logo from '../../src/assets/images/s3-logo.png';
import cart from '../../src/assets/images/cart.svg';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setIsOpen(false); 
  };

  return (
    <>
      <style>
        {`
          .scroll-hidden::-webkit-scrollbar {
            height: 0px;
            background: transparent;
          }
        `}
      </style>
      <nav className="relative bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-3 mx-auto">
          <div className="flex flex-col md:flex-row lg:justify-between md:items-center">
            <div className="flex items-center lg:justify-between">
              <div className="flex items-center">
                <Link to="/">
                  <img className="w-[128px] h-[40px]" src={logo} alt="logo" />
                </Link>

                <div className="hidden mx-10 w-[340px] md:block">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg className="w-5 h-5 text-blue-700" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <input
                      type="text"
                      className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                      placeholder="Search Your Course"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute flex lg:hidden right-8">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-2 transition-all duration-300 ease-in-out bg-white top-20 dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
                isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
              }`}
            >
              <div className="flex items-center flex-col lg:flex-row lg:mx-1">
                <ul className="flex items-center flex-col lg:flex-row lg:mx-1">
                  <li className={`text-md leading-5 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0 ${activeMenu === "home" ? "text-blue-600" : "text-gray-700"}`}>
                    <NavLink to="/" onClick={() => handleMenuClick("home")}>Home</NavLink>
                  </li>
                  <li className={`text-md leading-5 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0 ${activeMenu === "courses" ? "text-blue-600" : "text-gray-700"}`}>
                    <NavLink to="/courses" onClick={() => handleMenuClick("courses")}>Courses</NavLink>
                  </li>
                  <li className={`text-md leading-5 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0 ${activeMenu === "blogs" ? "text-blue-600" : "text-gray-700"}`}>
                    <NavLink to="/blogs" onClick={() => handleMenuClick("blogs")}>Blogs</NavLink>
                  </li>
                  <li className={`text-md leading-5 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0 ${activeMenu === "cart" ? "text-blue-600": "text-gray-700"}`}>
                    <NavLink to="/cart" onClick={() => handleMenuClick("cart")}>
                      <img src={cart} alt="cart" className="h-[35px] w-[25px]" />
                    </NavLink>
                  </li>
                </ul>

                <NavLink
                  to="/login"
                  className="text-md leading-5 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg shadow-md shadow-blue-500/50 hover:shadow-lg hover:shadow-blue-500/30 active:translate-y-1 active:shadow-none transition-transform transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 md:mx-4 md:my-0 px-4 py-2"
                >
                  Sign In
                </NavLink>
                <Link
                  to="/signup"
                  className="text-md leading-5 text-white bg-blue-600 transition-colors duration-300 transform dark:text-gray-200 hover:bg-blue-500 md:mx-4 md:my-0 border border-blue-800 rounded-md px-4 py-2"
                >
                  Sign Up
                </Link>
              </div>

              <div className="my-4 md:hidden">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <hr className="border-gray-300" />
    </>
  );
};

export default Navbar;
