import React from "react";
import { IProjectData } from "../../types/index";
import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "../../components/layouts/Layout";
import projectsData from "../../projectsData/projectsData";

const Works = ({ projectData }: { projectData: IProjectData }) => {
  return (
    <>
      <div>this is work page</div>
      <p>{projectData.projectName}</p>
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
