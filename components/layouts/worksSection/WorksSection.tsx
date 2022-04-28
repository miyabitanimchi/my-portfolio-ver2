import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import styles from "./Works.module.scss";
import utilStyles from "../../../styles/utils.module.scss";
import Link from "next/link";
import { ProjectData } from "../../../types";

const WorksSection = ({ projectsData }: { projectsData: ProjectData[] }) => (
  <section className={styles.workSection} id="works">
    <div className={styles.workContainer}>
      <ScrollAnimation
        animateIn="animate__fadeInLeft"
        animateOnce
        className={`${utilStyles.headingJumbo} ${utilStyles.gradientGray} ${utilStyles.gradientTextKit} ${styles.title}`}
      >
        Works
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce delay={500}>
        {projectsData?.map((project) => (
          <Link href={`/works/${project.id}`} key={project.id}>
            <div className={styles.projectWrap}>
              <div
                className={`${utilStyles.headingSecJumbo} ${utilStyles.gradientPinkBlue} ${utilStyles.gradientTextKit} ${styles.workTitle}`}
              >
                {project.projectName}
              </div>
              <div className={styles.projectDetails}>
                <p className={utilStyles.heading2Xl}>
                  {project.shortDescription}
                </p>
                <div
                  className={`${styles.techStackWrap} ${utilStyles.headingXl}`}
                >
                  {project.teckStack.map((techstack) => (
                    <div className={styles.techStack} key={techstack}>
                      <span>{techstack}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </ScrollAnimation>
    </div>
  </section>
);

export default WorksSection;
