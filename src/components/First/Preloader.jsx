import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Force show preloader on every visit for now
    const isHomePage = location.pathname === '/';
    
    if (!isHomePage) {
      setShowPreloader(false);
      return;
    }

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setShowPreloader(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [location]);

  if (!showPreloader) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2054ff]"
    >
      <div className="relative flex flex-col items-center w-full max-w-lg px-4 sm:px-6 md:px-8">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-12 w-48 sm:w-40 md:w-60 lg:w-60"
        >
          <img
            src="/images/favicon.png"
            alt="NGO Logo"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Enhanced Progress bar */}
        <div className="w-full max-w-md mx-auto">
          <div className="w-full h-2 sm:h-3 bg-blue-200 rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full bg-white"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          {/* Progress percentage */}
          <div className="text-center mb-6">
            <span className="text-white text-lg sm:text-xl font-semibold">
              {progress}%
            </span>
          </div>
        </div>

        {/* Loading text */}
        <motion.div
          className="text-white text-lg sm:text-xl font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading...
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;