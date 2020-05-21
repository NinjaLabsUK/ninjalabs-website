import { useState } from "react";
import Link from "next/link";
import { MdRefresh } from "react-icons/md";

import Project from "./components/Project";
import FastestLap from "./components/FastestLap";
import Me from "./components/Me";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Button from "../../components/Button";
import { COLOURS, FONT_SIZE, SPACING, BREAKPOINTS } from "../../styles";

const Section = ({ children, style, light }) => (
  <div
    style={{
      backgroundColor: light ? COLOURS.white : COLOURS.darkerGrey,
      ...style,
    }}
  >
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

      <Section light>
        <div
          style={{
            margin: "80px 0",
            padding: SPACING.medium,
            maxWidth: "100%",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: "440px", minWidth: "400px" }}>
            <h2
              style={{
                marginBottom: SPACING.medium,
                fontSize: FONT_SIZE.larger,
              }}
            >
              Built with Framer Motion
            </h2>

            <p style={{ fontSize: FONT_SIZE.large }}>
              Position changes and fastest lap animated with Framer Motion to
              keep the viewer up to date.
            </p>

            {/* <a className="project__replay" onClick={onReplay}>
              Replay animation&nbsp;
              <MdRefresh />
            </a> */}
          </div>
          <div className="project__extra">
            <FastestLap
              key={`fastest-lap-anim-${animationKey}`}
              firstName="Kieran"
              lastName="Chadwick"
              lapTime="1:24.543"
            />
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: SPACING.larger }}></div>
      </Section>
      <Section style={{ textAlign: "center" }}>
        <img
          className="image"
          src="/img/logo-white.svg"
          style={{
            maxWidth: "450px",
            marginBottom: SPACING.larger,
            display: "block",
            margin: "0 auto",
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
          flex: 1;
          min-width: 520px;
          padding: ${SPACING.large};
        }

        .project__replay {
          cursor: pointer;
          font-size: ${FONT_SIZE.smaller};
          color: ${COLOURS.blue};
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
