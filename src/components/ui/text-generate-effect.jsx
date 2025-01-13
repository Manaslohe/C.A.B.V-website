"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TextGenerateEffect = ({ words, className, onComplete }) => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.03, // Reduced delay between characters
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    })
  };

  return (
    <span className={className}>
      {words.split(/(\s+)/).map((segment, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          onAnimationComplete={i === words.length - 1 ? onComplete : undefined}
          className={`${segment.trim() === '' ? 'mr-3' : ''} inline-block`}
        >
          {segment}
        </motion.span>
      ))}
    </span>
  );
};
