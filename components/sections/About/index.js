import styles from './style.module.css';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function About() {
  return (
    <section id="about" className={styles.aboutContainer}>
      <article className={styles.content}>
        <ScrollReveal direction="up" delay={0.1}>
          <div className={styles.header}>
            <h2 className={styles.title}>About Me</h2>
          </div>
        </ScrollReveal>
        <div className={styles.mainContent}>
          
          <ScrollReveal direction="left" delay={0.2}>
            <div className={styles.imageArea}>
              <div className={styles.imageCircle}>
                <img 
                  src="/img/person/Cleber2.webp" 
                  alt="Cleberson de Carvalho"
                  className={styles.profileImage}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add(styles.imagePlaceholder);
                  }}
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.3}>
            <div className={styles.textArea}>
              <p className={styles.description}>
                Sou desenvolvedor Full Stack especializado no ecossistema Shopify, 
                com domínio tanto em Front-end quanto em Back-end. <br></br>
                Minha expertise técnica inclui a personalização avançada de temas utilizando Liquid, 
                além da estruturação de dados complexos com Metafields e Metaobjects.
              </p>
              <p className={styles.description}>
                Possuo experiência prática no desenvolvimento e consumo de APIs 
                próprias, integração de Apps e utilização da Storefront API na 
                construção de soluções robustas e inovadoras.
              </p>

              <div className={styles.education}>
                <h3 className={styles.educationTitle}>Formação:</h3>
                <p className={styles.educationContent}>
                  <strong>Bacharelado em Engenharia de Software</strong><br />
                  Universidade Estadual de Ponta Grossa (UEPG)<br />
                  Conclusão: Dezembro 2026
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </section>
  );
}