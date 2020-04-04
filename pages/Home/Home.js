import { useState } from "react";
import Link from "next/link";
import { TiRefresh } from "react-icons/ti";

import Project from "./components/Project";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Button from "../../components/Button";
import FastestLap from "./components/FastestLap";
import {
  COLOURS,
  FONT_SIZE,
  SPACING,
  BORDER_RADIUS,
  BREAKPOINTS
} from "../../styles";

const Section = ({ children, style }) => (
  <div style={{ backgroundColor: COLOURS.darkerGrey, ...style }}>
    <Container>{children}</Container>
  </div>
);

const Home = () => {
  const [animationKey, setAnimationKey] = useState(1);

  const onReplay = () => {
    setAnimationKey(animationKey + 1);
  };

  return (
    <Layout>
      <Section>
        <Project />
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
          <TiRefresh
            size="32px"
            onClick={onReplay}
            className="project__replay"
          />
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

      <style>{`
        .project__extra {
          transform: scale(1.2);
        }

        .project__replay {
          cursor: pointer;
          color: ${COLOURS.darkGrey};
        }

        @media (max-width: ${BREAKPOINTS.tablet}) {
          .project__extra {
            transform: scale(0.95);
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

export default Home;
