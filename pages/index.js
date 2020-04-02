import { useState } from "react";
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

const Section = ({ children, style }) => (
  <div style={{ backgroundColor: COLOURS.darkerGrey, ...style }}>
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
      <FaChevronRight size="14px" style={{ marginLeft: SPACING.smaller }} />
    </a>
  );
};

export default () => {
  const [animationKey, setAnimationKey] = useState(1);

  const onReplay = () => {
    setAnimationKey(animationKey + 1);
  };

  return (
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
        </div>
      </Section>

      <div
        style={{ margin: "80px 0", padding: SPACING.medium, maxWidth: "100%" }}
      >
        <h2
          style={{
            marginBottom: "50px",
            textAlign: "center",
            fontSize: FONT_SIZE.largest
          }}
        >
          Built with Framer Motion
        </h2>

        <div className="project__extra">
          <FastestLap
            key={`fastest-lap-anim-${animationKey}`}
            firstName="Kieran"
            lastName="Chadwick"
            lapTime="1:24.543"
          />
        </div>
        <div style={{ textAlign: "center", marginTop: SPACING.larger }}>
          <Button onClick={onReplay} text="Replay" variant="link" />
        </div>
      </div>

      <Section style={{ textAlign: "center" }}>
        <img
          className="image"
          src="/img/logo-white.svg"
          style={{
            maxWidth: "450px",
            marginBottom: SPACING.larger,
            display: "block",
            margin: "0 auto"
          }}
        />
        <Link href="/cv">
          <a>
            <Button text="Look at this cool button, it'll take you to my cv" />
          </a>
        </Link>
      </Section>

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
};
