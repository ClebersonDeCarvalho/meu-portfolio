import styles from './style.module.css';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Experience() {
  const experiences = [
    {
      id: '01',
      icon: '/img/exp/uepg.svg',
      iconType: 'local',
      title: 'Desenvolvedor Full Stack',
      company: 'Projeto da faculdade',
      period: '2025',
      description: 'Desenvolvimento Full Stack de um e-commerce para produtos apícolas utilizando Next.js, Node.js e PostgreSQL com Prisma ORM. A solução implementa um fluxo completo de venda, integrando checkout transacional via Mercado Pago e gestão logística com a API dos Correios.',
      featured: false,
    },
    {
      id: '02',
      icon: '/img/exp/reguardions-logo.svg',
      iconType: 'local',
      title: 'Desenvolvedor Shopify',
      company: 'Reguardions',
      period: '2025-2026',
      description: 'Desenvolvimento de soluções personalizadas com Liquid e JavaScript, criando seções customizáveis e interfaces alinhadas à identidade da marca, animações e interações. Desenvolvimento de APIs customizadas para lojas Shopify, automatizando a atualização de metafields via API Admin utilizando Node.js, PostgreSQL e Render.',
      featured: true,
    },
    {
      id: '03',
      icon: '/img/exp/check-commerce.svg',
      iconType: 'local',
      title: 'Desenvolvedor Shopify',
      company: 'Check Commerce',
      period: '2026',
      description: 'Desenvolvimento de soluções personalizadas com Liquid e JavaScript, criando seções customizáveis e interfaces alinhadas à identidade da marca, animações e interações. Desenvolvimento de APIs customizadas para lojas Shopify, automatizando a atualização de metafields via API Admin utilizando Node.js, PostgreSQL e Render.',
      featured: true,
    },
  ];

  const renderIcon = (exp) => {
    
    if (exp.iconType === 'url' || exp.icon.startsWith('http')) {
      return (
        <img 
          src={exp.icon} 
          alt={exp.title}
          className={styles.itemIconImg}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.textContent = '💼';
          }}
        />
      );
    }
    
    if (exp.iconType === 'local' || exp.icon.startsWith('/') || exp.icon.startsWith('./')) {
      return (
        <img 
          src={exp.icon} 
          alt={exp.title}
          className={styles.itemIconImg}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.textContent = '💼';
          }}
        />
      );
    }
    
    return <span>{exp.icon}</span>;
  };

  return (
    <section id="experience" className={styles.experienceContainer}>
      <article className={styles.content}>
        <ScrollReveal direction="up" delay={0.1}>
          <div className={styles.header}>
            <h2 className={styles.title}>Experience</h2>
          </div>
        </ScrollReveal>

        <div className={styles.experienceList}>
          {experiences.map((exp, index) => (
            <ScrollReveal 
              key={exp.id} 
              direction="left" 
              delay={0.2 + (index * 0.1)}
            >
              <div 
                className={`${styles.experienceItem} ${
                  exp.featured ? styles.featured : ''
                }`}
              >
                <div className={styles.itemLeft}>
                  <span className={styles.itemNumber}>{exp.id}</span>
                  <div className={styles.itemIcon}>
                    {renderIcon(exp)}
                  </div>
                </div>

                <div className={styles.itemCenter}>
                  <h3 className={styles.itemTitle}>{exp.title}</h3>
                  <p className={styles.itemCompany}>{exp.company}</p>
                  <p className={styles.itemPeriod}>{exp.period}</p>
                </div>

                <div className={styles.itemRight}>
                  <p className={styles.itemDescription}>{exp.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </article>
    </section>
  );
}