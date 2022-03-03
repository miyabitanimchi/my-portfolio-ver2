import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import projectsData from '../projectsData/projectsData';
import { GetStaticProps } from 'next';
import { ProjectData } from '../types';
import 'animate.css/animate.min.css';
import AboutSection from '../components/layouts/aboutSection/AboutSection';
import HeroSection from '../components/layouts/heroSection/HeroSection';
import WorksSection from '../components/layouts/worksSection/WorksSection';
import ContactSection from '../components/layouts/contactSection/ContactSection';

const Home = ({ projectsData }: { projectsData: ProjectData[] }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Miyabi Tanimichi</title>
        <meta name="description" content="Miyabi Tanimichi Portfolio" />
        <meta
          name="title"
          property="og:title"
          content="Miyabi Tanimichi Portfolio"
        />
        <meta property="og:type" content="Miyabi Tanimichi Portfolio" />
        <meta
          name="image"
          property="og:image"
          content="https://live.staticflickr.com/65535/51801176946_6aa8407670_z.jpg"
        />
        <meta
          name="description"
          property="og:description"
          content="Miyabi Tanimichi Portfolio"
        />
        <meta name="author" content="Miyabi Tanimichi" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        ></meta>
        <link rel="icon" href="https://miyabitanimichi.com/favicon.ico" />
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
