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
    <h2>My Projects</h2>
    <div className="wrapper">
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
          margin: 0 auto;
        }

        .wrapper {
          padding: ${SPACING.largest} ${SPACING.larger};
          background-color: ${COLOURS.darkGrey};
        }

        h2 {
          color: ${COLOURS.darkGrey};
          margin-left: ${SPACING.larger};
          margin-bottom: ${SPACING.medium};
        }
      `}
    </style>
  </div>
);
