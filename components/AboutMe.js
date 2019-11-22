import Badge from "./Badge";

const SKILLS = [
  "React",
  "Node.js",
  "Jest",
  "React testing library",
  "Express",
  "Typescript",
  "AWS Lambda/Serverless",
  "Angular"
];

const AboutMe = () => (
  <>
    <p>My name’s Kieran and I’m a frontend developer from Manchester, UK.</p>
    <p>
      I've been a developer for about 4 and a half years. I started off as an
      apprentice after I finished college in 2014 and since then I've been able
      to work my way to where I am now at Booking.com Taxis.
    </p>
    <p>My main skills include:</p>
    <div className="about-me__skills-container">
      {SKILLS.map(skill => (
        <Badge key={skill} text={skill} />
      ))}
    </div>

    <style jsx>
      {`
        .about-me__skills-container {
          display: flex;
          flex-wrap: wrap;
        }

        .current-position-image {
          width: 140px;
        }
      `}
    </style>
  </>
);

export default AboutMe;
