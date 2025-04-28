import { useEffect, useRef } from 'react';

const Hero = () => {
<<<<<<< HEAD
  return (
    <section
      id="home"
      className="bg-blue-600 dark:bg-blue-900 text-white py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Parliamentary Debate Championship 2025
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Join the ultimate clash of minds! Compete, debate, and shine.
        </p>
        <a
          href="#register"
          className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-300 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 dark:hover:bg-gray-700"
=======
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  // GSAP Animations
  useEffect(() => {
    const gsap = window.gsap;

    if (!gsap) {
      console.error('GSAP is not loaded. Ensure the GSAP CDN is included.');
      return;
    }

    // Animate heading (fade and slide up)
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    // Animate paragraph (fade and slide up with delay)
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
    );

    // Animate button (fade and scale with delay)
    gsap.fromTo(
      buttonRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.6 }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 md:py-32"
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          ref={headingRef}
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          Parliamentary Debate Championship 2025
        </h2>
        <p
          ref={textRef}
          className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto opacity-90"
        >
          Join the ultimate clash of minds! Compete, debate, and shine.
        </p>
        <a
          ref={buttonRef}
          href="#register"
          className="inline-block bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-100 transition-all duration-300"
          onMouseEnter={(e) =>
            window.gsap.to(e.target, {
              scale: 1.05,
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
              duration: 0.1,
            })
          }
          onMouseLeave={(e) =>
            window.gsap.to(e.target, {
              scale: 1,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              duration: 0.1,
            })
          }
>>>>>>> 4d528fc (Added animations + Minor changes)
        >
          Register Now
        </a>
      </div>
    </section>
  );
};

export default Hero;