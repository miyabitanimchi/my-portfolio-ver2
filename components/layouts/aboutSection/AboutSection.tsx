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
        Hello, I&apos;m Miyabi :)
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
          <p className={`${styles.description} `}>
            I&apos;m a front end developer based in Vancouver, who is curious,
            motivated and always eager to learn new skills and inprove myself. A
            developer who is willing to try for a new challenge and learn from
            failures.
          </p>
          <p className={`${styles.description} `}>
            I&apos;m passionate about building websites that incorporate modern
            technologies and design, and also love to think about logic even
            though sometimes they are complex.
          </p>
          <p className={`${styles.description} `}>
            My exciting journey to become a developer started only a year ago,
            however, I have worked for 3 real products in companies/start-up in
            the year, and offered ideas to clients and discuss with team members
            for better UX/UI. While I have ability to enjoy solo works and to
            search by myself to solve problems, I love collaborative works
            because we can help and also learn a lot from each other.
          </p>
          <p className={`${styles.description} `}>
            I specialize in front-end development especially using React.js, but
            also enjoy exploring backend technologies with the aim to improve
            productivity, performance and to gain deeper knowledge about web.
          </p>
          {/* <div className={styles.locationWrap}>
            <GrLocation />
            <p className={styles.location}>Vancouver, Canada</p>
          </div> */}
          <div className={styles.techWrap}>
            <p className={styles.techTitle}>Technologies</p>
            <div className={styles.techStackWrap}>
              <div className={styles.techStack}>HTML5 |</div>
              <div className={styles.techStack}>CSS3 |</div>
              <div className={styles.techStack}>Sass |</div>
              <div className={styles.techStack}>JavaScript |</div>
              <div className={styles.techStack}>TypeScript |</div>
              <div className={styles.techStack}>jQuery |</div>
              <div className={styles.techStack}>PHP |</div>
              <div className={styles.techStack}>React.js |</div>
              <div className={styles.techStack}>Next.js |</div>
              <div className={styles.techStack}>Material UI |</div>
              <div className={styles.techStack}>Bootstrap |</div>
              <div className={styles.techStack}>Tailwind CSS |</div>
              <div className={styles.techStack}>Node.js |</div>
              <div className={styles.techStack}>Express |</div>
              <div className={styles.techStack}>Firebase |</div>
              <div className={styles.techStack}>MongoDB |</div>
              <div className={styles.techStack}>GitHub |</div>
              <div className={styles.techStack}>GitLab |</div>
              <div className={styles.techStack}>Bitbucket |</div>
              <div className={styles.techStack}>Slack |</div>
              <div className={styles.techStack}>Trello |</div>
              <div className={styles.techStack}>Figma |</div>
              <div className={styles.techStack}>Heroku |</div>
              <div className={styles.techStack}>Vercel </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  </section>
);

export default AboutSection;
