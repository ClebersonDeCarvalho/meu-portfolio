'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import styles from './style.module.css';

export default function Hero() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const text1Complete = "Hello, my name is";
  const text2Complete = "Cleberson de Carvalho";

  useEffect(() => {
    const sectionIds = ['home', 'about', 'techstack', 'experience', 'projects', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      
      if (window.scrollY + windowHeight >= documentHeight - 100) {
        setActiveSection('contact');
        return;
      }
      
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => setActiveSection(targetId), 500);
    }
  };

  useEffect(() => {
    let timeout1, timeout2;
    let index1 = 0;
    let index2 = 0;

    const typeText1 = () => {
      if (index1 < text1Complete.length) {
        setText1(text1Complete.substring(0, index1 + 1));
        index1++;
        timeout1 = setTimeout(typeText1, 80);
      } else {
        setShowCursor1(false);
        setShowCursor2(true);
        setTimeout(() => typeText2(), 300);
      }
    };

    const typeText2 = () => {
      if (index2 < text2Complete.length) {
        setText2(text2Complete.substring(0, index2 + 1));
        index2++;
        timeout2 = setTimeout(typeText2, 100);
      } else {
        setTimeout(() => setShowCursor2(false), 500);
      }
    };

    const startTimeout = setTimeout(typeText1, 500);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  const handleLoad = () => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 100, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "star", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 } },
          opacity: { value: 0.5, random: true, anim: { enable: false } },
          size: { value: 3, random: true, anim: { enable: false } },
          line_linked: { enable: false },
          move: {
            enable: true,
            speed: 2.5,
            direction: "bottom-right",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "bubble" },
            onclick: { enable: true, mode: "repulse" },
            resize: true
          },
          modes: {
            bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
            repulse: { distance: 200, duration: 0.4 }
          }
        },
        retina_detect: true
      });
    }
  };

  return (
    <section id="home" className={styles.heroContainer}>
      <div id="particles-js" className={styles.particlesLayer} aria-hidden="true"></div>

      <nav className={styles.sidebar} aria-label="Main navigation">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className={`${styles.navLink} ${activeSection === 'home' ? styles.active : ''}`}
          aria-label="Navigate to Home section"
        >
          Home
        </a>
        <a 
          href="#about" 
          onClick={(e) => handleNavClick(e, 'about')}
          className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}
          aria-label="Navigate to About Me section"
        >
          About Me
        </a>
        <a 
          href="#techstack" 
          onClick={(e) => handleNavClick(e, 'techstack')}
          className={`${styles.navLink} ${activeSection === 'techstack' ? styles.active : ''}`}
          aria-label="Navigate to Tech Stack section"
        >
          Tech Stack
        </a>
        <a 
          href="#experience" 
          onClick={(e) => handleNavClick(e, 'experience')}
          className={`${styles.navLink} ${activeSection === 'experience' ? styles.active : ''}`}
          aria-label="Navigate to Experience section"
        >
          Experience
        </a>
        <a 
          href="#projects" 
          onClick={(e) => handleNavClick(e, 'projects')}
          className={`${styles.navLink} ${activeSection === 'projects' ? styles.active : ''}`}
          aria-label="Navigate to My Projects section"
        >
          My Projects
        </a>
        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, 'contact')}
          className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`}
          aria-label="Navigate to Contact section"
        >
          Contact
        </a>
      </nav>

      <article className={styles.contentWrapper}>
        <header className={styles.textArea}>
          <h2 className={styles.greeting}>
            {text1}
            {showCursor1 && <span className={styles.cursor} aria-hidden="true">|</span>}
          </h2>
          <h1 className={styles.name}>
            {text2}
            {showCursor2 && <span className={styles.cursor} aria-hidden="true">|</span>}
          </h1>
        </header>

        <figure className={styles.imageArea}>
          <div className={styles.imagePlaceholder}>
            <img 
              src="/img/person/Cleberson.webp" 
              alt="Cleberson de Carvalho - Full Stack Developer" 
              className={styles.profileImage}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="' + styles.noImage + '">Adicione sua foto em<br/>/public/img/profile.png</div>';
              }}
            />
          </div>
        </figure>
      </article>

      <Script 
        src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" 
        strategy="afterInteractive"
        onLoad={handleLoad}
      />
    </section>
  );
}