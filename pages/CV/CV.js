import { useState } from "react";
import Image from "next/image";

import AboutMe from "./components/AboutMe";
import JobCard from "./components/JobCard";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import Container from "../../components/Container";
import Modal from "../../components/Modal";
import Accordion from "../../components/Accordion";
import styles from "./CV.module.css";

const Heading = () => (
  <>
    <div className={styles.heading}>
      <Container>
        <div className={styles.headingWrapper}>
          <Image
            src="/img/me_square.jpeg"
            className={styles.headingImage}
            width={100}
            height={100}
            alt="My face"
          />

          <div className={styles.headingTextContainer}>
            <h1 className={styles.headingTitle}>Kieran Chadwick</h1>
            <p className={styles.headingSubtitle}>Software Developer</p>
          </div>
        </div>
        <AboutMe />
      </Container>
    </div>
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
        <h2 className={styles.cvHeading}>Employment</h2>
        <div className={styles.cvJobs}>
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
        <h2 className={styles.cvHeading}>Education</h2>
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
                <table className={styles.cvGrades}>
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
        <h2 className={styles.cvHeading}>Hobbies & Interests</h2>

        <ul>
          <li>Developing web applications in my own time</li>
          <li>Motorsport (Formula 1, Formula E, Indycar).</li>
          <li>Sim racing</li>
          <li>Podcasts! (SyntaxFM & Beyond the Grid)</li>
        </ul>
      </Section>
    </Layout>
  );
};

export default cv;
