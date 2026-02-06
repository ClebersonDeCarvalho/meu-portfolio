import styles from './style.module.css';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function TechStack() {
  const techStack = {
    frontend: [
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'HTML', icon: 'html5' },
      { name: 'CSS', icon: 'css' },
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'GSAP', icon: 'gsap' },
      // { name: 'Bootstrap', icon: 'bootstrap' },
      { name: 'Liquid', icon: 'shopify' },
    ],
    backend: [
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'Express.js', icon: 'expressdotcom' },
      { name: 'GraphQL', icon: 'graphql' },
      { name: 'REST API', icon: 'rest-api-icon' },
    ],
    database: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Prisma', icon: 'prisma' },
    ],
    tools: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Render', icon: 'render' },
      { name: 'Shopify', icon: 'shopify' },
      { name: 'Postman', icon: 'postman' },
    ],
  };

  const renderCategory = (title, items, delay = 0) => (
    <div className={styles.category}>
      <ScrollReveal direction="left" delay={delay}>
        <h3 className={styles.categoryTitle}>{title}</h3>
      </ScrollReveal>
      
      <div className={styles.techGrid}>
        {items.map((tech, index) => (
          <ScrollReveal 
            key={tech.name} 
            direction="up" 
            delay={delay + 0.1 + (index * 0.05)}
          >
            <div className={styles.techCard}>
              <img 
                src={`/img/icon/${tech.icon}.svg`}
                alt={tech.name}
                className={styles.techIcon}
                loading="lazy"
              />
              <span className={styles.techName}>{tech.name}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );

  return (
    <section id="techstack" className={styles.techStackContainer}>
      <article className={styles.content}>
        <ScrollReveal direction="up" delay={0.1}>
          <div className={styles.header}>
            <h2 className={styles.title}>Tech Stack</h2>
          </div>
        </ScrollReveal>

        <div className={styles.stackGrid}>
          {renderCategory('FRONTEND', techStack.frontend, 0.2)}
          {renderCategory('BACKEND', techStack.backend, 0.3)}
          {renderCategory('DATABASE', techStack.database, 0.4)}
          {renderCategory('TOOLS', techStack.tools, 0.5)}
        </div>
      </article>
    </section>
  );
}