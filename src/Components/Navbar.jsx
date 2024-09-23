import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md  w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-red-500">Pizza</span>
              <span className="text-2xl font-bold text-yellow-500">Hut</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-red-500">Home</a>
            <a href="/" className="text-gray-700 hover:text-red-500">Menu</a>
            <a href="/" className="text-gray-700 hover:text-red-500">Location</a>
            <a href="/" className="text-gray-700 hover:text-red-500">Testimonials</a>
            <a href="/" className="text-gray-700 hover:text-red-500">About us</a>
            <a href="/" className="text-gray-700 hover:text-red-500">Contact us</a>
          </div>
          <div className="hidden md:flex items-center">
            <a href="/login" className="text-red-500 border border-red-500 px-4 py-1 rounded-full hover:bg-red-500 hover:text-white">
              Login
            </a>
          </div>
          <div className="flex md:hidden items-center">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden h-1/2 w-full bg-white  top-16 left-0 z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block text-gray-700 hover:bg-red-500 hover:text-white px-3 py-2 rounded-md">
              Home
            </a>
            <a href="/" className="block text-gray-700 hover:bg-red-500 hover:text-white px-3 py-2 rounded-md">
              Menu
            </a>
            <a href="/" className="block text-gray-700 hover:bg-red-500 hover:text-white px-3 py-2 rounded-md">
              Location
            </a>
            <a href="/" className="block text-gray-700 hover:bg-red-500 hover:text-white px-3 py-2 rounded-md">
              Testimonials
            </a>
            <a href="/" className="block text-gray-700 hover:bg-red-500 hover:text-white px-3 py-2 rounded-md">
              About us
            </a>
            <a href="/" className="block text-gray-700 hover:bg-red-500 hover:text-white px-3 py-2 rounded-md">
              Contact us
            </a>
            <a href="/login" className="block text-red-500 border border-red-500 px-4 py-2 text-center rounded-full hover:bg-red-500 hover:text-white">
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;