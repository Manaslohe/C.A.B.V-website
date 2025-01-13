import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const About = () => {
  const { scrollY } = useScroll();
  const heroHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
  const triggerPoint = heroHeight * 0.25;

  const backgroundColor = useTransform(
    scrollY,
    [0, triggerPoint],
    ['rgba(30, 64, 175, 0)', 'rgba(30, 64, 175, 1)']
  );

  const contentOpacity = useTransform(
    scrollY,
    [triggerPoint - 100, triggerPoint + 100],
    [0, 1]
  );

  return (
    <motion.section
      id="aboutus"
      className="min-h-[150vh] relative" // Changed from min-h-screen to min-h-[150vh]
      style={{
        backgroundColor,
        marginTop: `-${heroHeight}px`
      }}
    >
      <motion.div 
        style={{ opacity: contentOpacity }}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[75vh]"> {/* Changed from pt-[25vh] to pt-[75vh] */}
          <motion.div
            className="text-center mb-16"
          >
            <h3 className="text-2xl font-ginger text-blue-100 mb-4">About us</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight max-w-4xl mx-auto">
              Cricket association in Vidarbha is an organization which aims to promote blind cricket across the region.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/30 transition-all"
            >
              <p className="text-blue-50 text-lg">
                Founded in 2022, we believe in working hard to promote cricket for the blind. Our mission is to provide opportunities for exceptionally talented visually impaired cricketers from Vidarbha to showcase their skills and potential.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/30 transition-all"
            >
              <p className="text-blue-50 text-lg">
                Our aspiration is to proudly represent Vidarbha on the national stage. Promoting blind cricket in the rural regions of Vidarbha and identifying new talent remain among our top priorities.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
