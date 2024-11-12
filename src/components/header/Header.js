import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-black text-white py-4 maxWidth">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img
              className="h-10"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/movies/popular" className="text-lg hover:text-gray-400 transition">Popular</Link>
          <Link to="/movies/top_rated" className="text-lg hover:text-gray-400 transition">Top Rated</Link>
          <Link to="/movies/upcoming" className="text-lg hover:text-gray-400 transition">Upcoming</Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black text-white p-4">
          <Link to="/movies/popular" className="block py-2 text-lg hover:text-gray-400">Popular</Link>
          <Link to="/movies/top_rated" className="block py-2 text-lg hover:text-gray-400">Top Rated</Link>
          <Link to="/movies/upcoming" className="block py-2 text-lg hover:text-gray-400">Upcoming</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
