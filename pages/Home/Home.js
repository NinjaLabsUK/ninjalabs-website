import Project from "./components/Project";
import ProjectExtra from "./components/ProjectExtra";
import Project2 from "./components/Project2";

import Me from "./components/Me";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <Layout>
      <Section>
        <Project />
      </Section>

      <Section className={styles.homeSection1}>
        <ProjectExtra />
      </Section>

      <Section className={styles.homeSection2}>
        <Project2 />
      </Section>

      <Section>
        <Me />
      </Section>
    </Layout>
  );
};

export default Home;
