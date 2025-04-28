import { useEffect, useRef } from 'react';

const About = () => {
<<<<<<< HEAD
  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          About PDC
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          The Parliamentary Debate Championship (PDC) is a premier event
          bringing together top debaters from around the world. Held annually,
          PDC fosters critical thinking, eloquence, and teamwork through
          competitive parliamentary-style debates. Join us in 2025 for an
          unforgettable experience!
        </p>
=======
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const dividerRef = useRef(null);

  // GSAP Animations
  useEffect(() => {
    const gsap = window.gsap;

    if (!gsap) {
      console.error('GSAP is not loaded. Ensure the GSAP CDN is included.');
      return;
    }

    // Split heading text into spans for letter-by-letter animation
    const heading = headingRef.current;
    const text = heading.textContent;
    heading.innerHTML = text
      .split('')
      .map((char) => `<span class="inline-block">${char}</span>`)
      .join('');

    // Animate heading letters (bounce effect with stagger)
    gsap.fromTo(
      heading.children,
      { y: 100, opacity: 0, rotation: 10 },
      {
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 1.2,
        ease: 'bounce.out', // Playful bounce effect
        stagger: 0.03, // Letters animate sequentially
      }
    );

    // Animate paragraph (elastic effect)
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)', // Springy, elastic effect
        delay: 0.5,
      }
    );

    // Animate divider (scale from 0 to full width)
    gsap.fromTo(
      dividerRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1,
        ease: 'power4.out', // Smooth but sharp for the divider
        delay: 1,
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-gray-800"
        >
          About <br /> PDC 
        </h2>
        <div className="max-w-3xl mx-auto">
          <p
            ref={textRef}
            className="text-lg md:text-xl text-gray-600 leading-relaxed transition-all duration-300 hover:text-gray-800"
            onMouseEnter={(e) =>
              window.gsap.to(e.target, { y: -2, duration: 0.06, ease: 'power1.out' })
            }
            onMouseLeave={(e) =>
              window.gsap.to(e.target, { y: 0, duration: 0.06, ease: 'power1.out' })
            }
          >
            The Parliamentary Debate Championship (PDC) is a premier event bringing together top debaters from around the world. Held annually, PDC fosters critical thinking, eloquence, and teamwork through competitive parliamentary-style debates. Join us in 2025 for an unforgettable experience!
          </p>
          {/* Decorative Divider */}
          <div
            ref={dividerRef}
            className="mt-8 h-1 w-24 bg-blue-600 mx-auto rounded"
          ></div>
        </div>
>>>>>>> 4d528fc (Added animations + Minor changes)
      </div>
    </section>
  );
};

export default About;