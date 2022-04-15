import React from "react";
import styles from "./Hero.module.scss";
import utilStyles from "../../../styles/utils.module.scss";
import Link from "next/link";

const HeroSection = () => (
  <section className={styles.heroSection} id="top">
    <div className={styles.heroWrap}>
      <div className={styles.titleWrap}>
        <h1
          className={`${utilStyles.headingJumbo} ${styles.heroFName} ${utilStyles.gradientTextKit} ${utilStyles.gradientPinkBlue}`}
        >
          Miyabi
        </h1>

        <h1
          className={`${utilStyles.headingJumbo} ${styles.heroLName} ${utilStyles.gradientTextKit} ${utilStyles.gradientPinkBlue}`}
        >
          Tanimichi
        </h1>

        <div className={styles.jobPositionWrap}>
          <h3
            className={`${utilStyles.headingSecJumbo} ${styles.jobPosition} ${utilStyles.gradientTextKit} ${utilStyles.gradientGray}`}
          >
            Front End Developer
          </h3>
        </div>
      </div>
      <div className={styles.test}></div>
      <Link href="#about">
        <a className={styles.arrowWrap}>
          <span className={styles.arrow}></span>
        </a>
      </Link>
    </div>
  </section>
);

export default HeroSection;
