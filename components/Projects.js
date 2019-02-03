import Project from "./Project";
import { COLOURS, SPACING, CONTAINER_WIDTH } from "../styles";

const PROJECTS = [
  {
    title: "rFactor 2 Overlay",
    description:
      "rFactor 2 is a racing simulator and has started to grow an Esports scene. As such, these races tend to be streamed so information needs to be fed back to the viewers. This overlay is written in Angular and fetches, processes and views data provided by a plugin running on the simulator.",
    image: "/static/rf2.jpeg"
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
        />
      ))}
    </div>
    <style jsx>
      {`
        .container {
          background-color: ${COLOURS.darkerGrey};
          color: ${COLOURS.white};
          padding: ${SPACING.sm};
          margin: 0 auto;
        }

        .wrapper {
          max-width: ${CONTAINER_WIDTH};
          margin: 0 auto;
        }

        h2 {
          text-align: center;
        }
      `}
    </style>
  </div>
);
