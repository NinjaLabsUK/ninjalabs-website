import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

import Layout from "../components/Layout";
import Container from "../components/Container";
import Button from "../components/Button";
import FastestLap from "../components/FastestLap";
import {
  COLOURS,
  FONT_SIZE,
  SPACING,
  BORDER_RADIUS,
  BREAKPOINTS
} from "../styles";

const Section = ({ children }) => (
  <div style={{ backgroundColor: COLOURS.darkerGrey }}>
    <Container>{children}</Container>
  </div>
);

const ProjectLink = ({ text, href }) => {
  return (
    <a
      href={href}
      style={{
        color: COLOURS.primary,
        fontSize: FONT_SIZE.large,
        fontWeight: "bold",
        textDecoration: "none"
      }}
      target="_blank"
    >
      {text}
      <FaChevronRight size="14px" style={{ marginLeft: SPACING.small }} />
    </a>
  );
};

export default () => (
  <Layout>
    <Section>
      <div className="project">
        <div className="project__main">
          <div className="project__thumbnail">
            <img src="rf2.jpeg" className="project__img" />
          </div>
          <div className="project__description">
            <h2 className="project__title">Sim Racing Overlay</h2>
            <p style={{ color: COLOURS.white, fontSize: FONT_SIZE.large }}>
              Broadcasting overlay built in React. Integrates with OBS to
              provide viewers with a real-time race overview.
            </p>

            <ProjectLink
              text="View Project"
              href="https://rf2.ninja-labs.co.uk"
            />
          </div>
        </div>
        <div className="project__extra">
          <FastestLap
            firstName="Kieran"
            lastName="Chadwick"
            lapTime="1:23.432"
          />
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <img
          className="image"
          src="/img/logo-white.svg"
          style={{ maxWidth: "450px", margin: `${SPACING.larger} 0` }}
        />
        <div>
          <Link href="/cv">
            <Button text="Look at this cool button, it'll take you to my cv" />
          </Link>
        </div>
      </div>
    </Section>

    <Container>
      <div style={{ marginBottom: "600px" }}></div>
    </Container>

    <style jsx>{`
      .project {
        margin-bottom: ${SPACING.largest};
      }

      .project__main {
        display: flex;
        align-items: center;
      }

      .project__extra {
        transform: scale(1.2);
      }

      .project__thumbnail {
        flex: 0 0 430px;
      }

      .project__img {
        max-width: 100%;
        border-radius: ${BORDER_RADIUS};
      }

      .project__description {
        padding: ${SPACING.larger};
      }

      .project__title {
        color: ${COLOURS.primary};
        font-weight: bold;
      }

      @media (max-width: ${BREAKPOINTS.tablet}) {
        flex-direction: column-reverse;
        .project__extra {
          transform: scale(0.95);
        }
        .project__thumbnail {
          flex: 1;
        }

        .project__description {
          padding: ${SPACING.larger} 0;
        }
      }

      @media (max-width: ${BREAKPOINTS.mobile}) {
        .project__extra {
          transform: scale(0.7);
        }
      }
    `}</style>
  </Layout>
);
