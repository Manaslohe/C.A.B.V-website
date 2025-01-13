import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80; // height of navbar
      const sectionTop = section.offsetTop - navHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const handleDonateClick = () => {
    navigate('/donation');
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'blindcricket', label: 'About Blind Cricket' },
    { id: 'committee', label: 'Committee Members' },
    { id: 'partners', label: 'Partners' }
  ];

  const ballSpin = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-20 flex justify-between items-center px-4 md:px-8 transition-all duration-300 ${
        isScrolled ? 'bg-blue-700/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        {/* Logo */}
        <a href="/" className="z-50">
          <img 
            src="/images/favicon.png" 
            alt="Logo" 
            className="h-16 md:h-20 transition-opacity duration-300 hover:opacity-80"
          />
        </a>
        
        {/* Desktop Menu - Added lg: breakpoint */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative group px-3 py-2 text-white hover:text-blue-200 transition-colors font-medium text-sm"
            >
              <span className="relative z-10">{item.label}</span>
              <div className="absolute inset-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left bottom-0"></div>
            </button>
          ))}
          <a 
            href="/contact"
            className="hidden lg:block px-6 py-2 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors font-medium text-sm"
          >
            Contact
          </a>
          {/* Desktop Donation Button - Added lg: breakpoint */}
          <motion.button
            onClick={handleDonateClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 font-bold shadow-lg hover:shadow-red-500/30"
          >
            <motion.span 
              {...ballSpin}
              className="w-4 h-4 rounded-full bg-white relative"
            >
              {/* Cricket ball seam lines */}
              <span className="absolute inset-0 border-2 border-red-500 rounded-full" style={{ clipPath: 'polygon(0 45%, 100% 45%, 100% 55%, 0 55%)' }}></span>
              <span className="absolute inset-0 border-2 border-red-500 rounded-full transform rotate-90" style={{ clipPath: 'polygon(45% 0, 55% 0, 55% 100%, 45% 100%)' }}></span>
            </motion.span>
            Donate Now
          </motion.button>
        </div>

        {/* Mobile Menu Button - Updated breakpoint */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu - Updated to prevent click propagation */}
        <div 
          className={`lg:hidden fixed top-20 left-0 right-0 bg-blue-700/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col p-4 space-y-3 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:bg-blue-600/50 px-4 py-3 rounded-lg text-left text-base"
              >
                {item.label}
              </button>
            ))}
            <a 
              href="/contact"
              className="bg-white text-blue-600 px-4 py-3 rounded-lg text-center font-medium text-base"
            >
              Contact
            </a>
            {/* Mobile Donation Button - Updated styling */}
            <motion.button
              onClick={handleDonateClick}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-bold text-base"
            >
              <motion.span 
                {...ballSpin}
                className="w-4 h-4 rounded-full bg-white relative"
              >
                <span className="absolute inset-0 border-2 border-red-500 rounded-full" style={{ clipPath: 'polygon(0 45%, 100% 45%, 100% 55%, 0 55%)' }}></span>
                <span className="absolute inset-0 border-2 border-red-500 rounded-full transform rotate-90" style={{ clipPath: 'polygon(45% 0, 55% 0, 55% 100%, 45% 100%)' }}></span>
              </motion.span>
              Donate Now
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-700 z-50 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </>
  );
};

export default Navbar;
