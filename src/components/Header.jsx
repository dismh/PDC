import { useState, useEffect } from "react";
import img from "../assets/Logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode and persist in localStorage
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
  };

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Handle smooth scrolling with offset for fixed header
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      const headerOffset = 80; // Adjust based on your header height
      const sectionPosition =
        section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionPosition - headerOffset,
        behavior: "smooth",
      });
    }
    if (isOpen) {
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-blue-800 dark:bg-blue-900 text-white py-4 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <img src={img} alt="Logo" className="h-20 w-20" />
          <h1 className="text-2xl font-bold">PDC 2025</h1>
        </div>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="hover:text-blue-300 dark:hover:text-blue-400"
                onClick={(e) => handleScroll(e, "#home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-300 dark:hover:text-blue-400"
                onClick={(e) => handleScroll(e, "#about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#schedule"
                className="hover:text-blue-300 dark:hover:text-blue-400"
                onClick={(e) => handleScroll(e, "#schedule")}
              >
                Schedule
              </a>
            </li>
            <li>
              <a
                href="#register"
                className="hover:text-blue-300 dark:hover:text-blue-400"
                onClick={(e) => handleScroll(e, "#register")}
              >
                Register
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-300 dark:hover:text-blue-400"
                onClick={(e) => handleScroll(e, "#contact")}
              >
                Contact
              </a>
            </li>
          </ul>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </nav>

        {/* Hamburger menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleDarkMode}
            className="mr-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-blue-700 dark:bg-blue-800">
          <ul className="flex flex-col space-y-2 px-4 py-2">
            <li>
              <a
                href="#home"
                className="hover:text-blue-300 dark:hover:text-blue-400"
                onClick={(e) => handleScroll(e, "#home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-300 dark:hover:text-blue-400"
                onClick={(e) => handleScroll(e, "#about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#schedule"
                className="hover:text-blue-300 dark:hover:text-blue-400"
                onClick={(e) => handleScroll(e, "#schedule")}
              >
                Schedule
              </a>
            </li>
            <li>
              <a
                href="#register"
                className="hover:text-blue-300 dark:hover:text-blue-400"
                onClick={(e) => handleScroll(e, "#register")}
              >
                Register
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-300 dark:hover:text-blue-400"
                onClick={(e) => handleScroll(e, "#contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
