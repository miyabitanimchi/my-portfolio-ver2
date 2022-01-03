import React from "react";
import { IProjectData } from "../../types/index";
import { GetStaticProps, GetStaticPaths } from "next";
import projectsData from "../../projectsData/projectsData";
import styles from "../../styles/Work.module.scss";
import utilStyles from "../../styles/utils.module.scss";
import Image from "next/image";

const Works = ({ projectData }: { projectData: IProjectData }) => {
  const {
    id,
    projectName,
    feature,
    status,
    src,
    teckStack,
    website,
    gitHub,
    shortDescription,
    description,
  } = projectData;
  return (
    <main className={styles.main}>
      <section className={styles.workSection}>
        <h1 className={utilStyles.heading3Xl}>{projectName}</h1>
        <h2 className={utilStyles.headingLg}>{shortDescription}</h2>
        <p className={styles.status}>{status}</p>
        <div
          className={`${styles.imgDecoration} ${utilStyles.gradientPinkBlue}`}
        >
          <div className={styles.imgBox}>
            <Image
              priority
              src={src}
              alt={id}
              layout="fill"
              objectFit="contain"
              placeholder="blur"
              blurDataURL={src}
            ></Image>
          </div>
        </div>
        <div className={styles.linksWrap}>
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            WEBSITE
          </a>
          <a
            href={gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
        </div>
        <div className={styles.techStackWrap}>
          <h3>Tech Stack</h3>
          {teckStack.map((techstack) => (
            <span className={styles.techStack} key={techstack}>
              {techstack}
            </span>
          ))}
        </div>
        <p className={styles.description}>{description}</p>
      </section>
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projectsData.map((data) => ({
    params: {
      id: data.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const projectData = projectsData.filter(
    (projectData) => projectData.id === params.id
  );
  return {
    props: {
      projectData: projectData[0],
    },
  };
};

export default Works;
