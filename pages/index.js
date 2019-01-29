import Layout from "../components/Layout";
import Container from "../components/Container";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";

export default () => (
  <Layout>
    <Hero />
    <Container>
      <AboutMe />
    </Container>
    <Projects />
  </Layout>
);
