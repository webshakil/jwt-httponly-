import { useState } from 'react';
import { FaHamburger } from 'react-icons/fa';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { Link } from 'react-router';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold tracking-tight">
              Logo
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link to="/services" className="hover:text-gray-300 transition-colors">
              Services
            </Link>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
            <Link to="/dashboard" className="hover:text-gray-300 transition-colors">
              Dashboard
            </Link>
            <Link to="/auth/login" className="hover:text-gray-300 transition-colors">
              Login
            </Link>
            <Link to="/auth/register" className="hover:text-gray-300 transition-colors">
              Register
            </Link>
          </div>

          {/* Hamburger Button (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <FaHamburger
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
              />
              {/* Close Icon */}
              <IoCloseCircleSharp
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;