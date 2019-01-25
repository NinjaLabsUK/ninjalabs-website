import Layout from "../components/Layout";
import Container from "../components/Container";
import Hero from "../components/Hero";
import CurrentPosition from "../components/CurrentPosition";
import Projects from "../components/Projects";

export default () => (
  <Layout>
    <Hero />
    <Container>
      <CurrentPosition />
    </Container>
    <Projects />
  </Layout>
);
