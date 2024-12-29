import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50  shadow-md bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">
          Breaking News
        </a>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-6">          
          <Link to="/business" className="text-white hover:text-gray-400">Business</Link>
          <Link to="/entertainment" className="text-white hover:text-gray-400">Entertainment</Link>
        <Link to="/health" className="text-white hover:text-gray-400">Health</Link>
          <Link to="/science" className="text-white hover:text-gray-400">Science</Link>
          <Link to="/sports" className="text-white hover:text-gray-400">Sports</Link>
          <Link to="/technology" className="text-white hover:text-gray-400">Technology</Link>
          {/* business entertainment general health science sports technology */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
