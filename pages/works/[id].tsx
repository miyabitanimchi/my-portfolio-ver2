import React from "react";
import { IProjectData } from "../../types/index";
import { GetStaticProps, GetStaticPaths } from "next";
import projectsData from "../../projectsData/projectsData";
import styles from "../../styles/Work.module.scss";
import utilStyles from "../../styles/utils.module.scss";
import Image from "next/image";

const Works = ({ projectData }: { projectData: IProjectData }) => {
  return (
    <main className={styles.main}>
      <section className={styles.workSection}>
        <p className={utilStyles.heading3Xl}>{projectData.projectName}</p>
        {projectData.src && (
          <Image
            src={projectData.src}
            height={300}
            width={500}
            alt={projectData.id}
          ></Image>
        )}
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
