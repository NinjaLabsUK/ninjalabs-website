import { useState } from "react";
import Image from "next/image";

import AboutMe from "./components/AboutMe";
import JobCard from "./components/JobCard";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import Container from "../../components/Container";
import Modal from "../../components/Modal";
import Accordion from "../../components/Accordion";
import {
  COLOURS,
  SPACING,
  FONT_SIZE,
  SHADOWS,
  BREAKPOINTS,
} from "../../styles";

const Heading = () => (
  <>
    <div className="heading">
      <Container>
        <div className="heading__wrapper">
          <Image
            src="/img/me_square.jpeg"
            className="heading__image"
            width={100}
            height={100}
            alt="My face"
          />

          <div className="heading__text-container">
            <h1 className="heading__title">Kieran Chadwick</h1>
            <p className="heading__subtitle">Software Developer</p>
          </div>
        </div>
        <AboutMe />
      </Container>
    </div>
    <style jsx global>
      {`
        .heading {
          padding: ${SPACING.large} 0;
          background-color: ${COLOURS.darkerGrey};
          color: ${COLOURS.white};
          background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.8),
              ${COLOURS.darkerGrey}
            ),
            linear-gradient(90deg, ${COLOURS.primary}, ${COLOURS.blue});
        }

        .heading__wrapper {
          display: flex;
          align-items: center;
          margin-bottom: ${SPACING.large};
        }

        .heading__image {
          border-radius: 50%;
          box-shadow: ${SHADOWS.light};
        }

        .heading__text-container {
          margin-left: ${SPACING.large};
        }

        .heading__title {
          margin-bottom: 0;
        }

        .heading__subtitle {
          margin: 0;
          font-size: ${FONT_SIZE.large};
        }
      `}
    </style>
  </>
);

const cv = ({ jobs = [] }) => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <Layout>
      {selectedJob && (
        <Modal
          title={
            <Image
              src={selectedJob.data.logoSrc}
              width={selectedJob.data.logoWidth}
              height={selectedJob.data.logoHeight}
            />
          }
          onClose={() => setSelectedJob(null)}
        >
          <div>{selectedJob.body}</div>
        </Modal>
      )}

      <Heading />

      <Section>
        <h2 className="cv__heading">Employment</h2>
        <div className="cv__jobs">
          {jobs.map((job, index) => (
            <JobCard
              key={`job-${index}`}
              companyName={job.data.company}
              position={job.data.position}
              description={job.data.description}
              colour={`#${job.data.colour}`}
              onMoreClick={() => setSelectedJob(job)}
            />
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="cv__heading">Education</h2>
        <Accordion
          items={[
            {
              title: "Level 4 Software Development Apprenticeship 2016 - 2017",
              content:
                "IT, Software & Web and Telecoms Professionals Higher Apprenticeship",
            },
            {
              title: "Level 3 Software Development Apprenticeship 2014 - 2015",
              content:
                "IT, Software, Web and Telecoms Professionals Advanced Apprenticeship",
            },
            {
              title: "Aquinas College, Stockport 2012-2014",
              content: () => (
                <table className="cv__grades">
                  <thead>
                    <tr>
                      <th>A Levels</th>
                      <th>AS Levels</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Computing B</td>
                      <td>Computing B</td>
                    </tr>
                    <tr>
                      <td>Maths C</td>
                      <td>Maths C</td>
                    </tr>
                    <tr>
                      <td>Physics C</td>
                      <td>Physics C</td>
                    </tr>
                  </tbody>
                </table>
              ),
            },
          ]}
        />
      </Section>

      <Section>
        <h2 className="cv__heading">Hobbies & Interests</h2>

        <ul>
          <li>Developing web applications in my own time</li>
          <li>Motorsport (Formula 1, Formula E, Indycar).</li>
          <li>Sim racing</li>
          <li>Podcasts! (SyntaxFM & Beyond the Grid)</li>
        </ul>
      </Section>
      <style jsx>{`
        .cv__heading {
          margin-bottom: ${SPACING.large};
        }

        .cv__jobs {
          overflow-x: auto;
          white-space: nowrap;
          -webkit-overflow-scrolling: touch;
          padding-bottom: ${SPACING.medium};
        }

        @media (max-width: ${BREAKPOINTS.tablet}) {
          .cv__jobs {
            margin: 0 -${SPACING.large};
          }
        }

        .cv__grades {
          width: 100%;
          max-width: 400px;
          font-size: ${FONT_SIZE.small};
        }

        .cv__grades th {
          font-weight: bold;
        }
      `}</style>
    </Layout>
  );
};

export default cv;
