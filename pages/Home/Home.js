import Project from "./components/Project";
import ProjectExtra from "./components/ProjectExtra";

import Me from "./components/Me";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import { COLOURS, FONT_SIZE, SPACING } from "../../styles";

const Section = ({ children, style, light }) => (
  <div
    style={{
      backgroundColor: light ? COLOURS.white : COLOURS.darkerGrey,
      color: light ? COLOURS.black : COLOURS.white,
      ...style,
    }}
  >
    <Container>{children}</Container>
  </div>
);

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
