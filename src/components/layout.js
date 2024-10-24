import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Layout = () => {
  return (
    <>
      <header className="inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between px-6 py-4 lg:px-64">
          <div className="flex flex-col">
            <img src={logo} alt="logo" className='h-24' />
          </div>

          <div className="lg:hidden flex justify-end">
            <Link to="/contact" className="text-md font-semibold leading-6 text-gray-900 mx-2 hover:text-blue-500">
              Contact Us
            </Link>
          </div>

          <div className="hidden lg:flex lg:space-x-4">
            <Link to="/" className="text-md font-semibold leading-6 text-gray-900 hover:text-blue-500">
              Home
            </Link>
            <Link to="/contact" className="text-md font-semibold leading-6 text-gray-900 hover:text-blue-500">
              Contact Us
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Layout;
