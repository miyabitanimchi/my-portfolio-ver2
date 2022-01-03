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
        <p>{status}</p>
        {src && <Image src={src} height={300} width={500} alt={id}></Image>}
        <div>
          <a href={website} target="_blank" rel="noopener noreferrer">
            WEBSITE
          </a>
          <a href={gitHub} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <div>
          <h3>Tech Stack</h3>
          {teckStack.map((techstack) => (
            <span key={techstack}>{techstack}</span>
          ))}
        </div>
        <p>{description}</p>
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
