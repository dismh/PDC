import { useEffect, useRef } from 'react';

const About = () => {
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
      </div>
    </section>
  );
};

export default About;