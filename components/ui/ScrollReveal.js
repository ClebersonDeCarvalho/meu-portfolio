'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ScrollReveal.module.css';

export default function ScrollReveal({ 
  children, 
  delay = 0,
  direction = 'up',
  duration = 0.8,
  threshold = 0.1
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  const getDirectionClass = () => {
    switch (direction) {
      case 'up':
        return styles.fromBottom;
      case 'down':
        return styles.fromTop;
      case 'left':
        return styles.fromRight;
      case 'right':
        return styles.fromLeft;
      case 'fade':
        return styles.fade;
      default:
        return styles.fromBottom;
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${styles.scrollReveal} ${getDirectionClass()} ${
        isVisible ? styles.visible : ''
      }`}
      style={{
        transitionDelay: `${delay}s`,
        transitionDuration: `${duration}s`
      }}
    >
      {children}
    </div>
  );
}
