import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { useState, useEffect } from "react";
import Preloader from "./Preloader.jsx";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
      setMounted(true);
      
      // Show subtitle after preloader
      setTimeout(() => {
        setShowSubtitle(true);
      }, 500);
    }, 2000); // 2 seconds loading time
    
    return () => clearTimeout(timer);
  }, []);

  const { scrollY } = useScroll();
  const heroHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
  const triggerPoint = heroHeight * 0.25;

  const contentOpacity = useTransform(
    scrollY,
    [0, triggerPoint],
    [1, 0]
  );

  const backgroundScale = useTransform(
    scrollY,
    [0, triggerPoint],
    [1, 1.1]
  );

  const overlayOpacity = useTransform(
    scrollY,
    [0, triggerPoint],
    [0.4, 0]  // Fade from 0.4 to 0
  );

return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader />}
      </AnimatePresence>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        id="hero"
        className="h-screen flex items-center justify-center flex-col relative overflow-hidden bg-blue-50"
      >
        {/* Background image */}
        <motion.div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
                backgroundImage: "url('/images/header_bg.jpg')",
                opacity: 0.9,
                scale: backgroundScale
            }}
        />
        {/* Black tint overlay */}
        <motion.div 
            className="absolute inset-0 z-[1] bg-black"
            style={{
                opacity: overlayOpacity,
            }}
        />

        {/* Content */}
        <motion.div 
            className="z-10 text-center px-4"
            style={{ opacity: contentOpacity }}
        >
            <AnimatePresence>
                {mounted && (
                    <motion.h1 
                        className="hero-text text-8xl sm:text-9xl lg:text-[180px] xl:text-[200px] font-bold mb-12 tracking-tight text-white font-ginger"
                    >
                        <TextGenerateEffect
                            words="C.A.B.V"
                            className="inline-flex gap-[0.05em]"
                            onComplete={() => setShowSubtitle(true)}
                        />
                    </motion.h1>
                )}
            </AnimatePresence>
            
            <AnimatePresence>
                {showSubtitle && (
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ 
                            duration: 2,
                            ease: [0.6, 0.05, 0.01, 0.9]
                        }}
                        className="hero-text px-4 
                            text-base sm:text-2xl md:text-3xl lg:text-4xl 
                            text-white font-semibold mx-auto 
                            leading-relaxed whitespace-nowrap 
                            tracking-normal"
                    >
                        <TextGenerateEffect
                            words="Cricket Association for the Blind in Vidharbha"
                            className="inline-flex tracking-tight font-semibold 
                                                [text-shadow:_0_1px_12px_rgb(255_255_255_/_20%)]"
                        />
                    </motion.h2>
                )}
            </AnimatePresence>

            {/* Scroll indicator */}
            <motion.div 
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                style={{ opacity: contentOpacity }}
            >
                <div className="animate-bounce">
                    <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" 
                             strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" 
                             stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </motion.div>
        </motion.div>
      </motion.section>
    </>
);
};

export default Hero;
