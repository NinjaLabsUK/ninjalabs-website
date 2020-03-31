import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

import Layout from "../components/Layout";
import Container from "../components/Container";
import Button from "../components/Button";
import { COLOURS, FONT_SIZE, SPACING, BORDER_RADIUS } from "../styles";

const Section = ({ children }) => (
  <div style={{ backgroundColor: COLOURS.darkerGrey }}>
    <Container>{children}</Container>
  </div>
);

export default () => (
  <Layout>
    <Section>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <img
            src="rf2.jpeg"
            style={{ maxWidth: "450px", borderRadius: BORDER_RADIUS }}
          />
        </div>
        <div style={{ padding: SPACING.larger }}>
          <h2 style={{ color: COLOURS.primary, fontWeight: "bold" }}>
            Sim Racing Overlay
          </h2>
          <p style={{ color: COLOURS.white, fontSize: FONT_SIZE.large }}>
            Broadcasting overlay built in React. Integrates with OBS to provide
            viewers with a real-time race overview.
          </p>
          <a
            href="https://rf2.ninja-labs.co.uk"
            style={{
              color: COLOURS.primary,
              fontSize: FONT_SIZE.medium,
              fontWeight: "bold",
              textDecoration: "none"
            }}
            target="_blank"
          >
            View Project
            <FaChevronRight size="14px" style={{ marginLeft: "4px" }} />
          </a>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <img
          className="image"
          src="/img/logo-white.svg"
          style={{ maxWidth: "450px", margin: `${SPACING.larger} 0` }}
        />
      </div>
    </Section>

    <Container>
      <div style={{ marginBottom: "600px" }}>
        <Link href="/cv">
          <Button text="Look at this cool button, it'll take you to my cv" />
        </Link>
      </div>
    </Container>
  </Layout>
);
