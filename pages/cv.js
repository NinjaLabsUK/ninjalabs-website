import { useState } from "react";

import Layout from "../components/Layout";
import Container from "../components/Container";
import AboutMe from "../components/AboutMe";
import JobCard from "../components/JobCard";
import BottomMoal from "../components/BottomModal";
import { COLOURS, SPACING, FONT_SIZE, SHADOWS, BREAKPOINTS } from "../styles";

const JOBS = [
  {
    companyName: "Booking.com",
    position: "Frontend Software Engineer",
    description:
      " Doing some stuff here and there. Working on the Taxi dispatch team managing the development Booking.com Taxi Partner Portal",
    colour: "#113480"
  },
  {
    companyName: "The Robert Street Hub",
    position: "Software Developer",
    description:
      "Working on fashion site ISAWITFIRST as part of a small team. Working in a high pressure environment getting features finished and tested.",
    colour: "#fbdd02"
  },
  {
    companyName: "ADXBA",
    position: "Software Developer",
    description:
      "Started my apprenticeship here in 2014. Here I was able to determine what languages I enjoyed working with and was a huge part in deciding what I wanted to pursue as a developer.",
    colour: "#6c4b71"
  }
];

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
          font-size: ${FONT_SIZE.larger};
          text-transform: uppercase;
        }

        .heading__subtitle {
          margin: 0;
          font-size: ${FONT_SIZE.medium};
          text-transform: uppercase;
        }
      `}
    </style>
  </>
);

const cv = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <Layout>
      {selectedJob && (
        <BottomMoal
          title={selectedJob.companyName}
          onClose={() => setSelectedJob(null)}
        />
      )}
      <Heading />

      <Container>
        <AboutMe />
        <div className="cv__jobs">
          {JOBS.map(job => (
            <JobCard {...job} onMoreClick={() => setSelectedJob(job)} />
          ))}
        </div>

        <h2>Education 😴</h2>

        <h3>Level 4 Software Development Apprenticeship 2016 - 2017</h3>
        <p>
          IT, Software & Web and Telecoms Professionals Higher Apprenticeship
        </p>
        <h3>Level 3 Software Development Apprenticeship 2014 - 2015</h3>
        <p>
          IT, Software, Web and Telecoms Professionals Advanced Apprenticeship
        </p>

        <h3>Aquinas College, Stockport 2012-2014</h3>
        <table>
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
      </Container>

      <style jsx>{`
        .cv__title {
          text-transform: uppercase;
        }

        .cv__jobs {
          margin: ${SPACING.medium} 0;
        }

        @media (max-width: ${BREAKPOINTS.mobile}) {
          .cv__jobs {
            overflow-x: auto;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
            margin-left: -${SPACING.medium};
            margin-right: -${SPACING.medium};
          }
        }
      `}</style>
    </Layout>
  );
};

export default cv;
