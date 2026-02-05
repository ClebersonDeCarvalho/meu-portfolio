'use client';

import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <a href="#home" className={styles.logo}>
          Cleberson
        </a>
        
        <div className={styles.navLinks}>
          <a href="#home" className={styles.navLink}>Home</a>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#techstack" className={styles.navLink}>Tech Stack</a>
          <a href="#experience" className={styles.navLink}>Experience</a>
          <a href="#projects" className={styles.navLink}>Projects</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </div>
      </nav>
    </header>
  );
}
