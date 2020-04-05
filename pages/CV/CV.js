import { useState } from "react";

import AboutMe from "./components/AboutMe";
import JobCard from "./components/JobCard";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Modal from "../../components/Modal";
import Accordion from "../../components/Accordion";
import {
  COLOURS,
  SPACING,
  FONT_SIZE,
  SHADOWS,
  BREAKPOINTS
} from "../../styles";

const Heading = () => (
  <>
    <div className="heading">
      <Container>
        <div className="heading__wrapper">
          <img src="/img/me_square.jpeg" className="heading__image" />
          <div className="heading__text-container">
            <h1 className="heading__title">Kieran Chadwick</h1>
            <p className="heading__subtitle">Frontend Engineer</p>
          </div>
        </div>
      </Container>
    </div>
    <style jsx>
      {`
        .heading {
          padding: ${SPACING.large} 0;
          background-color: ${COLOURS.darkerGrey};
          color: ${COLOURS.white};
        }

        .heading__wrapper {
          display: flex;
          align-items: center;
        }

        .heading__image {
          border-radius: 50%;
          width: 100px;
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
        <Modal onClose={() => setSelectedJob(null)}>
          <img
            src={selectedJob.data.logo}
            style={{
              maxWidth: "180px",
              maxHeight: "70px",
              marginBottom: SPACING.medium
            }}
          />
          <div>{selectedJob.body}</div>
        </Modal>
      )}

      <Heading />

      <Container>
        <AboutMe />
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

        <h2>Education 😴</h2>

        <Accordion
          items={[
            {
              title: "Level 4 Software Development Apprenticeship 2016 - 2017",
              content:
                "IT, Software & Web and Telecoms Professionals Higher Apprenticeship"
            },
            {
              title: "Level 3 Software Development Apprenticeship 2014 - 2015",
              content:
                "IT, Software, Web and Telecoms Professionals Advanced Apprenticeship"
            },
            {
              title: "Aquinas College, Stockport 2012-2014",
              content: () => (
                <table style={{ width: "100%", maxWidth: "400px" }}>
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
              )
            }
          ]}
        />
      </Container>

      <style jsx>{`
        .cv__title {
          text-transform: uppercase;
        }

        .cv__jobs {
          margin: ${SPACING.medium} 0;
          overflow-x: auto;
          white-space: nowrap;
          -webkit-overflow-scrolling: touch;
        }

        @media (max-width: ${BREAKPOINTS.mobile}) {
          .cv__jobs {
            margin-left: -${SPACING.medium};
            margin-right: -${SPACING.medium};
          }
        }
      `}</style>
    </Layout>
  );
};

export default cv;
