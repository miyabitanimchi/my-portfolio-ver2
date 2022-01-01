import React from "react";
import styles from "../../layouts/footer/Footer.module.scss";
// import Link from "next/link";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.contentWrap}>
      <div>
        <a href="#">Resume</a>
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
      <p>&copy; 2021 Miyabi Tanimichi</p>
    </div>
  </footer>
);

export default Footer;
