import Link from "next/link";

import Layout from "../components/Layout";
import Container from "../components/Container";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";

export default () => (
  <Layout>
    <Hero />

    <Link href="/cv">
      <button>Look at this cool button, it'll take you to my cv</button>
    </Link>
    {/* <Projects /> */}
  </Layout>
);
