'use client';

import { useState } from 'react';
import AnimatedIntro from '@/components/AnimatedIntro';
import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import TechStack from '@/components/sections/TechStack';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Footer from '@/components/Footer';

export default function Home() {

  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = () => setIntroComplete(true);

  return (
    <>
      <CustomCursor />

      {!introComplete && <AnimatedIntro onComplete={handleIntroComplete} />}
      {introComplete && <Header />}

      <main 
        style={{ 
          opacity: introComplete ? 1 : 0, 
          transition: 'opacity 0.8s ease-in-out' 
        }}
        role="main"
      >
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
      </main>
      
      <Footer />
    </>
  );
}
