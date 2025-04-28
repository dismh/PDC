import { useState } from 'react';
import img from "../assets/Logo.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Smooth scroll handler with fallback
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    try {
      const target = document.querySelector(sectionId);
      if (!target) {
        console.warn('Target section not found:', sectionId);
        return;
      }

      gsap.to(window, {
        scrollTo: {
          y: target,
          offsetY: 120, // Offset for navbar (~100px) + buffer
        },
        duration: 0.7, // Scroll duration set to 0.7 seconds
        ease: 'power3.inOut',
      });
    } catch (error) {
      console.error('Error in smooth scroll:', error);
      // Fallback to native smooth scroll
      const target = document.querySelector(sectionId);
      target?.scrollIntoView({ behavior: 'smooth' });
    }

    if (isOpen) {
      setIsOpen(false); // Close mobile menu
    }
  };

  // GSAP Animations and Scroll Effect
  useEffect(() => {
    // Animate logo on load
    gsap.fromTo(
      logoRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );

    // Animate nav links
    gsap.fromTo(
      navLinksRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.3 }
    );

    // Mobile menu animation
    if (isOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current.children,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out', stagger: 0.1 }
      );
    }

    // Scroll-based shadow effect
    const handleScrollEffect = () => {
      if (window.scrollY > 50) {
        gsap.to(headerRef.current, {
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'rgba(30, 58, 138, 0.95)',
          duration: 0.3,
        });
      } else {
        gsap.to(headerRef.current, {
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
          backgroundColor: '#1e3a8a',
          duration: 0.3,
        });
      }
    };

    window.addEventListener('scroll', handleScrollEffect);
    return () => window.removeEventListener('scroll', handleScrollEffect);
  }, [isOpen]);

  // Add refs to nav links
  const addToRefs = (el) => {
    if (el && !navLinksRef.current.includes(el)) {
      navLinksRef.current.push(el);
    }
  };

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
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-blue-300">Home</a></li>
            <li><a href="#about" className="hover:text-blue-300">About</a></li>
            <li><a href="#schedule" className="hover:text-blue-300">Schedule</a></li>
            <li><a href="#register" className="hover:text-blue-300">Register</a></li>
            <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
          </ul>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className={`relative inline-flex items-center w-20 h-10 rounded-full transition-all duration-500 ml-4 ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-400 to-indigo-500"
                : "bg-gradient-to-r from-yellow-300 to-orange-400"
            }`}
            aria-label="Toggle dark mode"
          >
            <span
              className={`absolute top-1 left-1 w-8 h-8 bg-white rounded-full flex items-center justify-center transition-all duration-500 transform ${
                isDarkMode ? "translate-x-10" : "translate-x-0"
              } shadow-md text-lg`}
            >
              {isDarkMode ? "🌙" : "☀️"}
            </span>
          </button>
        </nav>

        {/* Hamburger menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleDarkMode}
            className={`relative inline-flex items-center w-20 h-10 rounded-full transition-all duration-500 mr-4 ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-400 to-indigo-500"
                : "bg-gradient-to-r from-yellow-300 to-orange-400"
            }`}
            aria-label="Toggle dark mode"
          >
            <span
              className={`absolute top-1 left-1 w-8 h-8 bg-white rounded-full flex items-center justify-center transition-all duration-500 transform ${
                isDarkMode ? "translate-x-10" : "translate-x-0"
              } shadow-md text-lg`}
            >
              {isDarkMode ? "🌙" : "☀️"}
            </span>
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