import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './First/Navbar';
import Hero from './First/Hero';
import About from './First/About';
import BlindCricket from './First/BlindCricket';
import Committee from './First/Committee';
import Partners from './First/Partners';
import Footer from './First/Footer';
import Categories from './First/Categories';
import GameFormat from './First/GameFormat';
import '../styles/animations.css';

const First = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#151515]">
      <Navbar />
      <Hero />
      <About />
      <BlindCricket />
      <Categories />
      <GameFormat />
      <Committee />
      <Partners />
      <Footer />
    </div>
  );
};

export default First;
