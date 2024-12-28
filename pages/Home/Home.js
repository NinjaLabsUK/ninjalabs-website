import Project from "./components/Project";
import ProjectExtra from "./components/ProjectExtra";
import ProjectKwiz from "./components/ProjectKwiz/ProjectKwiz";
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
        <ProjectKwiz />
      </Section>

      <Section>
        <Me />
      </Section>
    </Layout>
  );
};

export default Home;
