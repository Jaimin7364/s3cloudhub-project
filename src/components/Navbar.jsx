import React, { useState } from "react";
import logo from '../../src/assets/images/s3-logo.png';
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
                    <input
                      type="text"
                      className="w-full py-2 pl-4 pr-10 text-gray-700 bg-white border rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                      placeholder="Search Your Course"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
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
                  <li className={`text-md leading-5 transition-colors duration-300 transform dark:text-gray-200 md:mx-4 md:my-0 ${activeMenu === "cart" ? "text-blue-600" : "text-gray-700"}`}>
                    <NavLink to="/cart" onClick={() => handleMenuClick("cart")}>
                      <div className="group">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          className={`h-[35px] w-[25px] fill-current text-gray-700 group-hover:text-blue-600 `}
                        >
                          <path d="M 4.4140625 1.9960938 L 1.0039062 2.0136719 L 1.0136719 4.0136719 L 3.0839844 4.0039062 L 6.3789062 11.908203 L 5.1816406 13.824219 C 4.7816406 14.464219 4.7609531 15.272641 5.1269531 15.931641 C 5.4929531 16.590641 6.1874063 17 6.9414062 17 L 19 17 L 19 15 L 6.9414062 15 L 6.8769531 14.882812 L 8.0527344 13 L 15.521484 13 C 16.248484 13 16.917531 12.604703 17.269531 11.970703 L 20.873047 5.4863281 C 21.046047 5.1763281 21.041328 4.7981875 20.861328 4.4921875 C 20.681328 4.1871875 20.352047 4 19.998047 4 L 5.25 4 L 4.4140625 1.9960938 z M 6.0820312 6 L 18.298828 6 L 15.521484 11 L 8.1660156 11 L 6.0820312 6 z M 7 18 A 2 2 0 0 0 5 20 A 2 2 0 0 0 7 22 A 2 2 0 0 0 9 20 A 2 2 0 0 0 7 18 z M 17 18 A 2 2 0 0 0 15 20 A 2 2 0 0 0 17 22 A 2 2 0 0 0 19 20 A 2 2 0 0 0 17 18 z"/>
                        </svg>
                      </div>
                    </NavLink>
                  </li>
                </ul>
                <NavLink
                  to="/login"
                  className="text-md leading-5 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg shadow-md shadow-blue-500/50 hover:shadow-lg hover:shadow-blue-500/30 active:translate-y-1 active:shadow-none transition-transform transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 md:mx-4 md:my-0 px-4 py-2"
                >
                  Sign In
                </NavLink>
              </div>

              <div className="my-4 md:hidden">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full py-2 pl-4 pr-10 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                    placeholder="Search"
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3">
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
