import { useEffect, useRef } from 'react';

const Schedule = () => {
<<<<<<< HEAD
  return (
    <section id="schedule" className="bg-gray-200 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Event Schedule
        </h2>
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4">
            <li className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Day 1: Opening Ceremony
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                June 10, 2025 | 9:00 AM - 12:00 PM
              </p>
            </li>
            <li className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Day 1: Preliminary Rounds
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                June 10, 2025 | 1:00 PM - 6:00 PM
              </p>
            </li>
            <li className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Day 2: Quarterfinals & Semifinals
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                June 11, 2025 | 10:00 AM - 5:00 PM
              </p>
            </li>
            <li className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Day 3: Finals & Awards
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                June 12, 2025 | 10:00 AM - 3:00 PM
              </p>
            </li>
=======
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const listItemsRef = useRef([]);

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

    // Animate list items (staggered back effect)
    gsap.fromTo(
      listItemsRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'back.out(1.7)', // Overshoot effect for a snappy entrance
        stagger: 0.2, // Sequential entry for each card
        delay: 0.3,
      }
    );
  }, []);

  // Add refs to list items
  const addToRefs = (el) => {
    if (el && !listItemsRef.current.includes(el)) {
      listItemsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="schedule"
      className="pt-32 pb-20 bg-gradient-to-b from-gray-100 to-gray-200" // Added pt-32 to offset navbar
    >
      <div className="container mx-auto px-4">
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800"
        >
          Event Schedule
        </h2>
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-6">
            {[
              {
                title: 'Day 1: Opening Ceremony',
                time: 'June 10, 2025 | 9:00 AM - 12:00 PM',
              },
              {
                title: 'Day 1: Preliminary Rounds',
                time: 'June 10, 2025 | 1:00 PM - 6:00 PM',
              },
              {
                title: 'Day 2: Quarterfinals & Semifinals',
                time: 'June 11, 2025 | 10:00 AM - 5:00 PM',
              },
              {
                title: 'Day 3: Finals & Awards',
                time: 'June 12, 2025 | 10:00 AM - 3:00 PM',
              },
            ].map((event, index) => (
              <li
                key={index}
                ref={addToRefs}
                className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                onMouseEnter={(e) =>
                  window.gsap.to(e.currentTarget, {
                    scale: 1.02,
                    duration: 0.3,
                    ease: 'power2.out',
                  })
                }
                onMouseLeave={(e) =>
                  window.gsap.to(e.currentTarget, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out',
                  })
                }
              >
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                  {event.title}
                </h3>
                <p className="text-gray-600 mt-2">{event.time}</p>
              </li>
            ))}
>>>>>>> 4d528fc (Added animations + Minor changes)
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Schedule;