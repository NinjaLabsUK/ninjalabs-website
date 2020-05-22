import Project from "./components/Project";
import ProjectExtra from "./components/ProjectExtra";

import Me from "./components/Me";
import Layout from "../../components/Layout";
import Section from "../../components/Section";

import { COLOURS } from "../../styles";

const Home = () => {
  return (
    <Layout>
      <Section>
        <Project />
      </Section>

      <Section
        style={{
          background: `linear-gradient(0deg,rgba(0,0,0,0.8),${COLOURS.darkerGrey}),linear-gradient(90deg,#f08,${COLOURS.blue})`,
        }}
      >
        <ProjectExtra />
      </Section>
      <Section>
        <Me />
      </Section>
    </Layout>
  );
};

export default Home;
