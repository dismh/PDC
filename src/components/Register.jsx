import { useEffect, useRef } from 'react';

const Register = () => {
<<<<<<< HEAD
  return (
    <section id="register" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Register for PDC 2025
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
          Sign up to compete in the Parliamentary Debate Championship. Limited
          spots available!
        </p>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
=======
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const formRef = useRef(null);
  const buttonRef = useRef(null);

  // GSAP Animations
  useEffect(() => {
    const gsap = window.gsap;

    if (!gsap) {
      console.error('GSAP is not loaded. Ensure the GSAP CDN is included.');
      return;
    }

    // Animate heading (bounce effect)
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'bounce.out', // Lively bounce for the heading
      }
    );

    // Animate paragraph (back effect)
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'back.out(1.7)', // Snappy overshoot effect
        delay: 0.3,
      }
    );

    // Animate form inputs and button (staggered power4 effect)
    gsap.fromTo(
      formRef.current.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power4.out', // Smooth, sharp entrance
        stagger: 0.2,
        delay: 0.6,
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="register"
      className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50" // pt-32 to offset navbar
    >
      <div className="container mx-auto px-4">
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-gray-800"
        >
          Register for PDC 2025
        </h2>
        <p
          ref={textRef}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Sign up to compete in the Parliamentary Debate Championship. Limited spots available!
        </p>
        <div className="max-w-md mx-auto">
          <form ref={formRef} className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:shadow-md"
>>>>>>> 4d528fc (Added animations + Minor changes)
              required
            />
            <input
              type="email"
              placeholder="Email Address"
<<<<<<< HEAD
              className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
=======
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:shadow-md"
>>>>>>> 4d528fc (Added animations + Minor changes)
              required
            />
            <input
              type="text"
              placeholder="Team Name (Optional)"
<<<<<<< HEAD
              className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 dark:bg-blue-700 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-800"
=======
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:shadow-md"
            />
            <button
              ref={buttonRef}
              type="submit"
              className="w-full bg-blue-600 text-white p-4 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300"
              onMouseEnter={(e) =>
                window.gsap.to(e.currentTarget, {
                  scale: 1.05,
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                  duration: 0.05,
                  ease: 'power2.out',
                })
              }
              onMouseLeave={(e) =>
                window.gsap.to(e.currentTarget, {
                  scale: 1,
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  duration: 0.05,
                  ease: 'power2.out',
                })
              }
>>>>>>> 4d528fc (Added animations + Minor changes)
            >
              Submit Registration
            </button>
          </form>
<<<<<<< HEAD
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Note: Form submission requires a backend service (e.g., Firebase,
            Node.js) to process data.
=======
          <p className="text-sm text-gray-500 mt-6 text-center">
            Note: Form submission requires a backend service (e.g., Firebase, Node.js) to process data.
>>>>>>> 4d528fc (Added animations + Minor changes)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;