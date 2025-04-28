import { useState } from 'react';
import img from "../assets/Logo.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-blue-800 text-white py-4 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <img
            src={img} // <-- Make sure to place your logo at public/logo.png or update path
            alt="Logo"
            className="h-20 w-20"
          />
          <h1 className="text-2xl font-bold">PDC 2025</h1>
        </div>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-blue-300">Home</a></li>
            <li><a href="#about" className="hover:text-blue-300">About</a></li>
            <li><a href="#schedule" className="hover:text-blue-300">Schedule</a></li>
            <li><a href="#register" className="hover:text-blue-300">Register</a></li>
            <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </nav>

        {/* Hamburger menu for Mobile */}
        <button className="md:hidden" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-blue-700">
          <ul className="flex flex-col space-y-2 px-4 py-2">
            <li><a href="#home" className="hover:text-blue-300" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" className="hover:text-blue-300" onClick={toggleMenu}>About</a></li>
            <li><a href="#schedule" className="hover:text-blue-300" onClick={toggleMenu}>Schedule</a></li>
            <li><a href="#register" className="hover:text-blue-300" onClick={toggleMenu}>Register</a></li>
            <li><a href="#contact" className="hover:text-blue-300" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
