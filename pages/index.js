import Layout from "../components/Layout";
import Container from "../components/Container";
import Hero from "../components/Hero";
import CurrentPosition from "../components/CurrentPosition";

export default () => (
  <Layout>
    <Hero />
    <Container>
      <CurrentPosition />
    </Container>
  </Layout>
);
