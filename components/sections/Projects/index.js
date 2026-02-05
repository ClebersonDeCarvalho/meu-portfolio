'use client';

import { useState } from 'react';
import styles from './style.module.css';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: '01',
      title: 'Hogo Humbrella',
      description: 'Desenvolvimento no tema Dawn com seções modulares e animações GSAP, integrado a um ecossistema externo em Node.js e PostgreSQL. A plataforma gerencia acessos restritos via códigos de convite através de uma interface administrativa customizada, utilizando Cronjobs para automatizar ciclos de venda (Pre-save e Public Sale) e o controle dinâmico de permissões de compra.',
      techs: ['Shopify', 'Api Admin', 'GSAP', 'Tema: Dawn', 'Node.js', 'Postman','Postgresql','Render'],
      image: '/img/projects/hogo-umbrella.webp',
      link: 'https://hogo-umbrella.myshopify.com/',
    },
    {
      id: '02',
      title: 'Adah Beauty Tech',
      description: 'Desenvolvimento no tema Dawn com foco em identidade visual, entregando estilização avançada e novas seções modulares. O projeto utiliza Metafields para indexação dinâmica de imagens e animações no carrinho e Landing Pages. A solução une alta performance e estética refinada, transformando a estrutura padrão da Shopify em uma interface exclusiva e personalizada.',
      techs: ['Shopify', 'Metafields', 'Animation', 'Tema: Dawn'],
      image: '/img/projects/adahbeautytech.webp',
      link: 'https://adahbeautytech.com.br/',
    },
    {
      id: '03',
      title: 'Smeg Paraguay',
      description: 'Desenvolvimento e personalização avançada sobre o tema Focal, com foco em identidade de marca. O projeto priorizou a entrega ágil de seções exclusivas e estilização sob medida, garantindo uma interface visualmente impactante e totalmente otimizada para o estilo da loja.',
      techs: ['Shopify', 'Liquid', 'Tema: Focal'],
      image: '/img/projects/smeg.webp',
      link: 'https://smeg.com.py/',
    },
    {
      id: '04',
      title: 'Body Dry Nutrition',
      description: 'Desenvolvimento no tema Dawn com foco em identidade visual, entregando estilização avançada e novas seções modulares. O projeto utiliza Metafields para indexação dinâmica de imagens, permitindo a personalização de fundos e da estrutura de LPs de produto. A solução garante uma interface exclusiva, totalmente alinhada à estética da marca.',
      techs: ['Shopify', 'Metafields', 'Tema: Dawn'],
      image: '/img/projects/bodydrynutrition.webp',
      link: 'https://www.bodydrynutrition.com.br',
    },
    {
      id: '05',
      title: 'Guru Yourself',
      description: 'Desenvolvimento no tema Dawn com seções modulares e animações, integrado a um ecossistema externo em Node.js e PostgreSQL. A plataforma gerencia planos e pagamentos que liberam funcionalidades de sorteio e salvamento de cartas via API customizada. A lógica utiliza Metaobjects para o gerenciamento mensal de decks, permitindo a distribuição automatizada de uma "carta do dia" global e cartas aleatórias exclusivas por usuário.',
      techs: ['Shopify', 'Api Admin', 'GSAP', 'Tema: Dawn', 'Node.js', 'Postman','Postgresql','Render'],
      image: '/img/projects/guruyourself.webp',
      link: 'https://guruyourself.com/',
    },
  ];

  return (
    <section id="projects" className={styles.projectsContainer}>
      <article className={styles.content}>
        <ScrollReveal direction="up" delay={0.1}>
          <div className={styles.header}>
            <h2 className={styles.title}>My Projects</h2>
          </div>
        </ScrollReveal>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ScrollReveal 
              key={project.id} 
              direction="up" 
              delay={0.2 + (index * 0.1)}
            >
              <div className={styles.projectCard}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                  <div className={styles.projectLeft}>
                    <span className={styles.projectNumber}>{project.id}</span>
                    
                    <div className={styles.projectInfo}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <p className={styles.projectDescription}>{project.description}</p>
                      
                      <div className={styles.projectTechs}>
                        {project.techs.map((tech, idx) => (
                          <span key={idx} className={styles.techTag}>
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <a 
                        href={project.link} 
                        className={styles.accessButton}
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Acessar →
                      </a>
                    </div>
                  </div>

                  <div className={styles.projectRight}>
                    <div 
                      className={`${styles.projectImage} ${
                        hoveredProject === project.id ? styles.imageHovered : ''
                      }`}
                    >
                      <img 
                        src={project.image} 
                        alt={project.title}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.classList.add(styles.imagePlaceholder);
                        }}
                      />
                    </div>
                  </div>
                </div>
            </ScrollReveal>
          ))}
        </div>
      </article>
    </section>
  );
}