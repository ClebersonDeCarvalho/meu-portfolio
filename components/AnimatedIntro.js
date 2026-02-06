'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './AnimatedIntro.module.css';

export default function AnimatedIntro({ onComplete }) {

  const [showIntro, setShowIntro] = useState(true);
  const containerRef = useRef(null);
  
  const name = "Cleberson de Carvalho";
  const speed = 120;

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = '';

    const chars = [];
    
    name.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.innerHTML = char === ' ' ? '&nbsp;' : char;
      span.className = styles.char;
      containerRef.current.appendChild(span);
      chars.push(span);

      setTimeout(() => {
        span.style.animation = `${styles.writeStroke} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`;
      }, index * speed);
    });

    const totalDuration = (name.length * speed) + 300;
    
    const fadeTimer = setTimeout(() => {
      if (containerRef.current && containerRef.current.parentElement) {
        containerRef.current.parentElement.style.animation = `${styles.fadeOut} 0.8s ease-out forwards`;
      }
      
      setTimeout(() => {
        setShowIntro(false);
        onComplete && onComplete();
      }, 800);
    }, totalDuration);

    return () => {
      clearTimeout(fadeTimer);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [onComplete]);

  if (!showIntro) return null;

  return (
    <aside className={styles.introContainer} role="presentation" aria-label="Introduction animation">
      <div className={styles.container}>
        <h1 ref={containerRef} className={styles.signature} aria-live="polite"></h1>
      </div>
    </aside>
  );
}
