import Badge from "../../../components/Badge/Badge";

const SKILLS = ["React", "Node.js", "Docker", "Typescript", "AWS"];

const AboutMe = () => (
  <>
    <p>My name’s Kieran and I’m a software developer from Manchester, UK.</p>
    <p>
      I primarily focus and enjoy working with React and Node where I'm able to
      have an influence on both the API and what the user directly interacts
      with. I take pride in writing clean efficient code and take onboard
      criticism as a chance to improve the software I produce and make me a
      better developer.
    </p>
    <p>My main skills include:</p>
    <div className="about-me__skills-container">
      {SKILLS.map((skill) => (
        <Badge key={skill} text={skill} />
      ))}
    </div>

    <style jsx>
      {`
        .about-me__skills-container {
          display: flex;
          flex-wrap: wrap;
        }
      `}
    </style>
  </>
);

export default AboutMe;
