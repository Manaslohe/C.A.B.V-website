import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initAnimations = () => {
  // Fade in animations
  gsap.utils.toArray('.fade-in').forEach(element => {
    gsap.fromTo(element,
      { opacity: 0, y: 50 },
      {
        opacity: 1, 
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Hero text animation
  gsap.from('.hero-text', {
    duration: 1.5,
    opacity: 0,
    y: 100,
    ease: "power4.out",
    stagger: 0.2
  });
};

export const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 && 
    rect.bottom <= window.innerHeight &&
    rect.right <= window.innerWidth
  );
};
