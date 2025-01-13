import React from 'react';
import { motion } from 'framer-motion';
import blindCricketBall from './BlindCricketBall.png';

const BlindCricket = () => {
  return (
    <section id="blindcricket" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#1544c0] tracking-tight">
              About Blind Cricket
            </h1>
            
            <h4 className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
              Blind cricket is similar to sighted cricket, but with special modifications to accommodate visually challenged players.
            </h4>
            
            <div className="space-y-6">
              <motion.div
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  A Blind Cricket Ball
                </h3>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Differs significantly from a traditional leather cricket ball. Instead, it is a uniquely designed hard plastic sphere equipped with precision bearings that produce distinct sounds, helping players locate and engage with it on the field.
                </p>
              </motion.div>

              <motion.div
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-lg text-gray-700 leading-relaxed">
                  The stumps are crafted from iron with specially attached bearings at the top, creating audible feedback for the players.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <motion.img 
                src={blindCricketBall}
                alt="Blind Cricket Ball"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="eager"
                decoding="async"
                whileHover={{ scale: 1.05 }}
                onError={(e) => {
                  console.error('Image failed to load:', e.target.src);
                  e.target.src = '/images/placeholder.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 rounded-2xl group-hover:opacity-75 transition-opacity duration-300" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlindCricket;
