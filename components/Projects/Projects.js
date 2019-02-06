import Project from "./Project";
import { COLOURS, SPACING, CONTAINER_WIDTH } from "../../styles";

const PROJECTS = [
  {
    id: "rfactor2-overlay",
    title: "rFactor 2 Overlay",
    image: "/static/rf2.jpeg"
  }
];

export default () => (
  <div className="container">
    <div className="wrapper">
      <h2>Projects</h2>
      {PROJECTS.map(project => (
        <Project
          key={project.id}
          id={project.id}
          title={project.title}
          image={project.image}
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
