import Link from "next/link";

import Layout from "../components/Layout";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Button from "../components/Button";

export default () => (
  <Layout>
    <Hero />

    <Container>
      <Link href="/cv">
        <Button text="Look at this cool button, it'll take you to my cv" />
      </Link>
    </Container>
    {/* <Projects /> */}
  </Layout>
);
