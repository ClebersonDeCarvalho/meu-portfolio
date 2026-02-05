import styles from './style.module.css';

export default function Footer() {
  const socialLinks = [
    {
      icon: 'gmail.svg',
      href: 'mailto:clebersoncarvalhomc5@gmail.com?subject=Contato%20via%20Portfólio&body=Olá%20Cleberson,%0A%0A',
      ariaLabel: 'Send me an email'
    },
    {
      icon: 'linkedin.svg',
      href: 'https://www.linkedin.com/in/cleberson-carvalho-1102nov/',
      ariaLabel: 'Visit my LinkedIn profile',
      target: '_blank'
    },
    {
      icon: 'instagram.svg',
      href: 'https://instagram.com/opeterrr',
      ariaLabel: 'Follow me on Instagram',
      target: '_blank'
    },
    {
      icon: 'github.svg',
      href: 'https://github.com/ClebersonDeCarvalho',
      ariaLabel: 'Visit my GitHub profile',
      target: '_blank'
    }
  ];

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.decorativeTop}>
        <div className={styles.line}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.mainSection}>
          <h2 className={styles.heading}>Entre em contato</h2>
          <p className={styles.subheading}>
            Vamos criar algo incrível juntos? Sinta-se à vontade para me contatar.
          </p>
        </div>
        
        <div className={styles.socialSection}>
          {socialLinks.map((social) => (
            <a 
              href={social.href}
              className={styles.socialLink}
              aria-label={social.ariaLabel}
              {...(social.target && { 
                target: social.target, 
                rel: 'noopener noreferrer' 
              })}
            >
              <img 
                src={`/img/icon/${social.icon}`}
                alt={social.name}
                className={styles.socialIcon}
                loading="lazy"
              />
              <span className={styles.socialText}>{social.name}</span>
            </a>
          ))}
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Cleberson de Carvalho
          </p>
        </div>
      </div>
    </footer>
  );
}