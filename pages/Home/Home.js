import Project from "./components/Project";
import AnimationShowcase from "./components/AnimationShowcase/AnimationShowcase";
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
        <AnimationShowcase />
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
