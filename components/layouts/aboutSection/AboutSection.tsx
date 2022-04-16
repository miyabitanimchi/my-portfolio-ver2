import React from "react";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import styles from "./About.module.scss";
import utilStyles from "../../../styles/utils.module.scss";

const AboutSection = () => (
  <section className={styles.aboutSection} id="about">
    <ScrollAnimation
      animateIn="animate__fadeIn"
      delay={300}
      className={styles.aboutContainer}
      animateOnce
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
            I&apos;m a front-end developer based in Vancouver, BC. I&apos;m
            curious, motivated, and always eager to learn new skills and improve
            myself. I&apos;m not afraid to step out of my comfort zone and am
            ready to face new challenges and learn from my failures.
          </p>
          <p className={`${styles.description} `}>
            I&apos;m passionate about building websites that incorporate modern
            technologies and design, and I genuinely love to find solutions to
            complex technological problems.
          </p>
          <p className={`${styles.description} `}>
            My journey to become a developer started about a year ago, and I
            have already worked with three companies to develop products in
            2021. I&apos;ve consulted clients on various aspects of their
            requirements and led discussion with team members to improve UX/UI.
            While I enjoy working independently to solve problems, I also love
            working collaboratively in teams to exchange new ideas and come up
            with solutions.
          </p>
          <p className={`${styles.description} `}>
            I specialize in front end development especially with React.js, but
            I also enjoy exploring backend technologies with the aim of
            improving productivity, performance, and gaining a deeper
            understanding of the web.
          </p>
          <p className={`${styles.description} `}>
            I&apos;m now seeking a full-time position and would be really happy
            if we can discuss what I can bring to your team.
          </p>
          <p className={`${styles.description} `}>
            Thank you for visiting and viewing my portfolio site!
          </p>
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
              <div className={styles.techStack}>Redux |</div>
              <div className={styles.techStack}>Next.js |</div>
              <div className={styles.techStack}>Angular |</div>
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
              <div className={styles.techStack}>Vercel | </div>
              <div className={styles.techStack}>WordPress |</div>
              <div className={styles.techStack}>Shopify </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  </section>
);

export default AboutSection;
