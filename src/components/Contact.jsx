import { useEffect, useRef } from 'react';

const Contact = () => {
<<<<<<< HEAD
  return (
    <section id="contact" className="bg-gray-200 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
=======
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const buttonRef = useRef(null);
  const noteRef = useRef(null);
  const contactInfoRef = useRef(null);

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
        delay: 0.3,
      }
    );

    // Animate note (back effect)
    gsap.fromTo(
      noteRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'back.out(1.7)', // Snappy overshoot effect
        delay: 0.9,
      }
    );

    // Animate contact info (elastic effect)
    gsap.fromTo(
      contactInfoRef.current.children,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'elastic.out(1, 0.5)', // Springy effect for contact details
        stagger: 0.2,
        delay: 1.2,
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="pt-32 pb-20 bg-gradient-to-b from-gray-100 to-gray-200" // pt-32 to offset navbar
    >
      <div className="container mx-auto px-4">
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-gray-800"
        >
          Contact Us
        </h2>
        <div className="max-w-md mx-auto">
          <form ref={formRef} className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:shadow-md"
>>>>>>> 4d528fc (Added animations + Minor changes)
              required
            />
            <input
              type="email"
              placeholder="Your Email"
<<<<<<< HEAD
              className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
=======
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:shadow-md"
>>>>>>> 4d528fc (Added animations + Minor changes)
              required
            />
            <textarea
              placeholder="Your Message"
<<<<<<< HEAD
              className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 dark:bg-blue-700 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-800"
=======
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:shadow-md h-40"
              required
            ></textarea>
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
              Send Message
            </button>
          </form>
<<<<<<< HEAD
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Note: Form submission requires a backend service to process data.
          </p>
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-700 dark:text-gray-300">
            Email: info@pdc2025.org
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Phone: +1 (555) 123-4567
          </p>
=======
          <p
            ref={noteRef}
            className="text-sm text-gray-500 mt-6 text-center"
          >
            Note: Form submission requires a backend service to process data.
          </p>
        </div>
        <div
          ref={contactInfoRef}
          className="text-center mt-8"
          onMouseEnter={(e) =>
            window.gsap.to(e.currentTarget.children, {
              y: -2,
              duration: 0.05,
              ease: 'power2.out',
              stagger: 0.1,
            })
          }
          onMouseLeave={(e) =>
            window.gsap.to(e.currentTarget.children, {
              y: 0,
              duration: 0.05,
              ease: 'power2.out',
              stagger: 0.1,
            })
          }
        >
          <p className="text-lg text-gray-700">Email: smolkids@gmail.com</p>
          <p className="text-lg text-gray-700">Phone: +91 79738 87325</p>
>>>>>>> 4d528fc (Added animations + Minor changes)
        </div>
      </div>
    </section>
  );
};

export default Contact;