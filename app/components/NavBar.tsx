import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-transparent absolute top-0 w-full ml-24 p-4">
      <div className="max-w-screen-xl flex items-center justify-start mx-auto gap-4">
        <a href="#" className="text-white font-bold text-2xl tracking-widest">
          room
        </a>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div className="hidden md:flex md:items-center space-x-4 ml-8">
          <a href="#" className="text-white  hover:text-gray-400">
            home
          </a>
          <a href="#" className="text-white   hover:text-gray-400">
            shop
          </a>
          <a href="#" className="text-white   hover:text-gray-400">
            about
          </a>
          <a href="#" className="text-white  hover:text-gray-400">
            contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
