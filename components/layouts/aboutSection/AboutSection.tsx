import React from "react";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import styles from "./About.module.scss";
import utilStyles from "../../../styles/utils.module.scss";
import { GrLocation } from "react-icons/gr";

const AboutSection = () => (
  <section className={styles.aboutSection} id="about">
    <ScrollAnimation
      animateIn="animate__fadeIn"
      delay={300}
      className={styles.aboutContainer}
      animateOnce={true}
    >
      <h3 className={`${styles.title} ${utilStyles.heading2XlFixed}`}>
        Hello, I'm Miyabi :)
      </h3>
      <div className={styles.imgDescriptionWrap}>
        <div className={styles.imgWrap}>
          <div className={styles.imgBox}>
            <Image
              priority
              src="/images/miyabi.JPG"
              className={styles.image}
              alt="miyabi"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div
            className={`${styles.imgDecoration} ${utilStyles.gradientPinkBlue}`}
          ></div>
        </div>
        <div className={`${styles.descriptionWrap} ${utilStyles.textMd}`}>
          <div className={styles.locationWrap}>
            <GrLocation />
            <p className={styles.location}>Vancouver, Canada</p>
          </div>
          <p className={`${styles.description} `}>
            I'm a front end developer who is curious, motivated and always eager
            to learn new skills.
          </p>
        </div>
      </div>
    </ScrollAnimation>
  </section>
);

export default AboutSection;
