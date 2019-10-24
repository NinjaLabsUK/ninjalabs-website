import { COLOURS, SPACING, CONTAINER_WIDTH } from "../../styles";
import { ProjectCard } from ".";

const PROJECTS = [
  {
    id: "rfactor2-overlay",
    title: "rFactor 2 Broadcast Overlay",
    image: "/rf2.jpeg"
  }
];

export default () => (
  <div className="container">
    <div className="wrapper">
      <h2>My Projects</h2>
      {PROJECTS.map(project => (
        <ProjectCard
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
          background-color: ${COLOURS.darkGrey};
          color: ${COLOURS.white};
          padding: ${SPACING.largest} ${SPACING.larger};
          margin: 0 auto;
        }

        .wrapper {
          max-width: ${CONTAINER_WIDTH};
          margin: 0 auto;
        }

        h2 {
          margin-bottom: ${SPACING.large};
        }
      `}
    </style>
  </div>
);
