import { PropsWithChildren } from "react";
import Image from "next/image";

import employment from "./data/employment";
import Reveal from "./components/Reveal";
import Accordion from "../../components/Accordion/Accordion";

interface SectionProps {
  title?: string;
  style?: React.CSSProperties;
}

const Section = ({
  title,
  style,
  children,
}: PropsWithChildren<SectionProps>) => {
  return (
    <section style={style}>
      {title ? <h2 style={{ marginBottom: 8 }}>{title}</h2> : null}
      {children}
    </section>
  );
};

const CV = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
      <Section
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div>
          <h1>Kieran Chadwick</h1>
          <p>Senior Frontend Engineer</p>
        </div>
        <Image src="/img/me_square.jpeg" width={55} height={55} alt="Me" />
      </Section>

      <Section
        title="Employment"
        style={{ display: "flex", flexDirection: "column", gap: 12 }}
      >
        {employment.map((e) => {
          return (
            <div key={e.company.toLocaleLowerCase()}>
              <h3>{e.company}</h3>
              <p>{e.position}</p>
              <Reveal title="View Details">{e.description}</Reveal>
            </div>
          );
        })}
      </Section>

      <Section title="Education">
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
              content: (
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
              ),
            },
          ]}
        />
      </Section>
    </div>
  );
};

export default CV;
