import React, { useEffect, useState } from 'react';
import { motion, useAnimationControls } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Preparing Your Experience");
  const controls = useAnimationControls();

  useEffect(() => {
    const texts = [
      "Preparing Your Experience",
      "Loading Cricket Assets",
      "Initializing Game Engine",
      "Almost Ready to Play"
    ];
    let current = 0;
    
    const interval = setInterval(() => {
      current = (current + 1) % texts.length;
      setLoadingText(texts[current]);
    }, 2500);

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => Math.min(prev + 1, 100));
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
    >
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1d4cd4] via-[#1d4cd4] to-[#163ba8]">
        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>

      {/* Animated light beams */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`beam-${i}`}
            className="absolute top-0 left-0 w-[100px] h-[500px] bg-white/10 rotate-45 blur-xl"
            animate={{
              x: ['-100%', '200%'],
              y: ['-100%', '200%'],
            }}
            transition={{
              duration: 7 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Premium particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              y: [-20, 20],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content wrapper */}
      <div className="relative flex flex-col items-center max-w-4xl w-full px-8">
        {/* Logo section with premium effects */}
        <motion.div
          className="relative mb-16"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Orbital rings */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`orbit-${i}`}
              className="absolute rounded-full border border-white/10"
              style={{
                inset: `-${(i + 1) * 25}px`,
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.02, 1],
              }}
              transition={{
                rotate: { duration: 15 + i * 5, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, repeatType: "reverse" },
              }}
            />
          ))}

          {/* Premium glow effects */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-[#1d4cd4] rounded-full blur-[100px]"
          />

          {/* Main logo */}
          <div className="relative">
            <motion.img
              src="/images/favicon.png"
              alt="CABV Logo"
              className="w-96 h-96 object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.5)]"
              animate={{
                scale: [1, 1.02, 1],
                rotateZ: [-1, 1, -1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Premium shimmer effect */}
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 55%, transparent 100%)',
                  'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 55%, transparent 100%)',
                ],
                backgroundPosition: ['-200% 0', '200% 0'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Enhanced progress bar */}
        <div className="relative w-[600px] mb-12">
          {/* Progress background with premium blur effect */}
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              className="h-full bg-gradient-to-r from-white/50 via-white to-white/50 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Bouncing ball indicator */}
          <motion.div
            className="absolute -top-8"
            style={{ left: `${progress}%` }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              y: {
                duration: 0.6,
                repeat: Infinity,
                ease: "easeOut",
              },
            }}
          >
            <motion.div
              className="w-6 h-6 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)]"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="absolute inset-0 rounded-full [background:repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(29,76,212,0.3)_2px,rgba(29,76,212,0.3)_4px)]" />
            </motion.div>
          </motion.div>
        </div>

        {/* Loading status */}
        <div className="flex flex-col items-center gap-6 text-center">
          <motion.div
            className="text-3xl font-bold text-white/90 tracking-wider"
            animate={{ opacity: [1, 0.8, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span>{loadingText}</span>
            <span className="ml-2">{progress}%</span>
          </motion.div>

          {/* Premium loading indicator */}
          <div className="flex items-center gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`dot-${i}`}
                className="w-2 h-2 bg-white/50 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}