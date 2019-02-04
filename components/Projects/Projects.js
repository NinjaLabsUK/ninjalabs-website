import Project from "./Project";
import { COLOURS, SPACING, CONTAINER_WIDTH } from "../../styles";

const PROJECTS = [
  {
    title: "rFactor 2 Overlay",
    description:
      "rFactor 2 is a racing simulator and has started to grow an Esports scene. As such, these races tend to be streamed so information needs to be fed back to the viewers. This overlay is written in Angular and fetches, processes and views data provided by a plugin running on the simulator.",
    image: "/static/rf2.jpeg",
    link: {
      as: '/post/rfactor2-overlay',
      href: '/post?id=rfactor2-overlay'
    }
  }
];

export default () => (
  <div className="container">
    <div className="wrapper">
      <h2>Projects</h2>
      {PROJECTS.map(project => (
        <Project
          key={project.title}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
    <style jsx>
      {`
        .container {
          background-color: ${COLOURS.darkerGrey};
          color: ${COLOURS.white};
          padding: ${SPACING.lg};
          margin: 0 auto;
        }

        .wrapper {
          max-width: ${CONTAINER_WIDTH};
          margin: 0 auto;
        }

        h2 {
          margin: 0;
          margin-bottom: ${SPACING.lg};
          text-align: center;
        }
      `}
    </style>
  </div>
);
