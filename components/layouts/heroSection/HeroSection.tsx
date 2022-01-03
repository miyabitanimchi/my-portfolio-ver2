import React from "react";
import styles from "./Hero.module.scss";
import utilStyles from "../../../styles/utils.module.scss";
import Link from "next/link";

const HeroSection = () => (
  <section className={styles.heroSection} id="home-section">
    <div className={styles.heroWrap}>
      <div
        className={`${utilStyles.gradientTextKit} ${utilStyles.gradientPinkBlue}`}
      >
        <h1 className={`${utilStyles.headingJumbo} ${styles.heroFName}`}>
          Miyabi
        </h1>
        <h1 className={`${utilStyles.headingJumbo} ${styles.heroLName}`}>
          Tanimichi
        </h1>
      </div>
      <div
        className={`${utilStyles.gradientTextKit} ${utilStyles.gradientGray} ${styles.jobPositionWrap}`}
      >
        <h3 className={`${utilStyles.headingSecJumbo} ${styles.jobPosition}`}>
          Front End Developer
        </h3>
      </div>
    </div>
    <Link href="#about">
      <a className={styles.arrowWrap}>
        <span className={styles.arrow}></span>
      </a>
    </Link>
  </section>
);

export default HeroSection;
