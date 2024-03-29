import React from "react";
import { ProjectData } from "../../types/index";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import projectsData from "../../projectsData/projectsData";
import styles from "../../styles/Work.module.scss";
import utilStyles from "../../styles/utils.module.scss";
import Image from "next/image";
import Head from "next/head";

const NO_LINKS_WEBSITE: string[] = [
  "senpai-kohai",
  "global-developers",
  "bc-shop",
];
const NO_LINKS_GITHUB: string[] = ["musician-first"];

const Works = ({ projectData }: { projectData: ProjectData }) => {
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
    <>
      <Head>
        <title>Miyabi Tanimichi | Works</title>
        <meta name="description" content="Miyabi Tanimichi Portfolio" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        ></meta>
        <link rel="icon" href="https://miyabitanimichi.com/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.workSection}>
          <h1 className={styles.projectName}>{projectName}</h1>
          <h2
            className={`${styles.shortDescription} ${utilStyles.headingLgFixed}`}
          >
            {shortDescription}
          </h2>
          <p className={`${styles.status} ${utilStyles.headingMd}`}>{status}</p>
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
              className={[
                styles.link,
                NO_LINKS_WEBSITE.includes(id) && styles.noLink,
              ].join(" ")}
            >
              WEBSITE
            </a>
            <a
              href={gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className={[
                styles.link,
                NO_LINKS_GITHUB.includes(id) && styles.noLink,
              ].join(" ")}
            >
              GitHub
            </a>
          </div>
          <h3 className={`${styles.techStackTitle} ${utilStyles.headingMd}`}>
            Tech Stack
          </h3>
          <div className={styles.techStackWrap}>
            {teckStack.map((techstack) => (
              <div className={styles.techStack} key={techstack}>
                {techstack}
              </div>
            ))}
          </div>
          <p className={styles.description}>{description}</p>
          <Link href="/#works">
            <p className={styles.goBackBtn}>Go Back</p>
          </Link>
        </section>
      </main>
    </>
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
