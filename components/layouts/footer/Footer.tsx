import React from "react";
import styles from "../../layouts/footer/Footer.module.scss";
import { GrDocumentText, GrGithub, GrLinkedin } from "react-icons/gr";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.contentWrap}>
      <div className={styles.links}>
        <a
          href="/Miyabi_Tanimichi_Resume.pdf"
          download="Miyabi_Tanimichi_Resume.pdf"
          className={styles.link}
        >
          Resume
        </a>
        <a
          href="https://github.com/miyabitanimchi"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/miyabi-tanimichi-71001a203/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          LinkedIn
        </a>
      </div>
      <div className={styles.iconLinks}>
        <a href="#" className={styles.link}>
          <GrDocumentText />
        </a>
        <a
          href="https://github.com/miyabitanimchi"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <GrGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/miyabi-tanimichi-71001a203/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <GrLinkedin />
        </a>
      </div>
      <p className={styles.copyRight}>&copy; 2023 Miyabi Tanimichi</p>
    </div>
  </footer>
);

export default Footer;
