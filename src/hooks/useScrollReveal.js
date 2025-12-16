// src/hooks/useScrollReveal.js
import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    // Add CSS for scroll animations
    const style = document.createElement('style');
    style.textContent = `
      .scroll-reveal {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.8s ease, transform 0.8s ease;
      }

      .scroll-reveal.revealed {
        opacity: 1;
        transform: translateY(0);
      }

      .scroll-reveal-left {
        opacity: 0;
        transform: translateX(-50px);
        transition: opacity 0.8s ease, transform 0.8s ease;
      }

      .scroll-reveal-left.revealed {
        opacity: 1;
        transform: translateX(0);
      }

      .scroll-reveal-right {
        opacity: 0;
        transform: translateX(50px);
        transition: opacity 0.8s ease, transform 0.8s ease;
      }

      .scroll-reveal-right.revealed {
        opacity: 1;
        transform: translateX(0);
      }

      .scroll-reveal-scale {
        opacity: 0;
        transform: scale(0.8);
        transition: opacity 0.8s ease, transform 0.8s ease;
      }

      .scroll-reveal-scale.revealed {
        opacity: 1;
        transform: scale(1);
      }

      /* Delay classes for staggered animations */
      .delay-100 { transition-delay: 0.1s; }
      .delay-200 { transition-delay: 0.2s; }
      .delay-300 { transition-delay: 0.3s; }
      .delay-400 { transition-delay: 0.4s; }
      .delay-500 { transition-delay: 0.5s; }
    `;
    document.head.appendChild(style);

    // Intersection Observer for scroll reveal
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-reveal classes
    const revealElements = document.querySelectorAll(
      '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale'
    );
    
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
      document.head.removeChild(style);
    };
  }, []);
}

// HOC to wrap components with scroll reveal
export function withScrollReveal(Component) {
  return function ScrollRevealWrapper(props) {
    useScrollReveal();
    return <Component {...props} />;
  };
}