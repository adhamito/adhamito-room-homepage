import React from "react";

interface NavBarProps {
  isMobile: boolean;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<NavBarProps> = ({ isMobile, setIsMobile }) => {
  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="bg-transparent absolute top-0 w-full p-4">
      <div className="max-w-screen-xl flex items-center justify-start mx-auto gap-4">
        <a href="#" className="text-white font-bold text-2xl tracking-widest">
          room
        </a>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isMobile ? "true" : "false"}
          onClick={toggleMobileMenu}
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
            {isMobile ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center space-x-4 ml-8">
          <a href="#" className="text-white hover:text-gray-400">
            home
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            shop
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            about
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            contact
          </a>
        </div>

        {isMobile && (
          <div className="absolute top-0 w-full h-full bg-white md:hidden flex flex-row justify-between">
            {/* Close button */}
            <div className="flex  ">
              <button
                onClick={toggleMobileMenu}
                className="text-black hover:text-gray-400 focus:outline-none"
              >
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu items */}
            <ul className="flex flex-row justify-end items-center gap-4 mr-6   ">
              <li>
                <a href="#" className="text-black text-xl">
                  home
                </a>
              </li>
              <li>
                <a href="#" className="text-black text-xl">
                  shop
                </a>
              </li>
              <li>
                <a href="#" className="text-black text-xl">
                  about
                </a>
              </li>
              <li>
                <a href="#" className="text-black text-xl">
                  contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
