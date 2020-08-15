import Project from "./components/Project";
import ProjectExtra from "./components/ProjectExtra";
import Project2 from "./components/Project2";

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

      <Section
        style={{
          background: `linear-gradient(to right top,
            #0099ff,#008dfb,#0080f5,#0073ef,
            #0065e8,#375ee4,#4f56df,#624ed9,
            #824ad5,#9d46d0,#b342c9,#c73ec2)`,
        }}
      >
        <Project2 />
      </Section>
      <Section>
        <Me />
      </Section>
    </Layout>
  );
};

export default Home;
