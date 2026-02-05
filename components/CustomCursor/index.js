'use client';

import { useEffect, useState } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <div
      className={styles.cursor}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M3 3L10.5 20.5L13 13L20.5 10.5L3 3Z" 
          fill="#00ffea"
          stroke="#00ffea"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
