import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import projectsData from "../projectsData/projectsData";
import { GetStaticProps } from "next";
import { IProjectData } from "../types";
import "animate.css/animate.min.css";
import AboutSection from "../components/layouts/aboutSection/AboutSection";
import HeroSection from "../components/layouts/heroSection/HeroSection";
import WorksSection from "../components/layouts/worksSection/WorksSection";
import ContactSection from "../components/layouts/contactSection/ContactSection";

const Home = ({ projectsData }: { projectsData: IProjectData[] }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Miyabi Tanimichi</title>
        <meta name="description" content="Miyabi's Portfolio" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HeroSection />
        <AboutSection />
        <WorksSection projectsData={projectsData} />
        <ContactSection />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projectsData,
    },
  };
};

export default Home;
