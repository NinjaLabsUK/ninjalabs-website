import FastestLap from "../components/FastestLap/FastestLap";
import Badge from "../components/Badge/Badge";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
      <section>
        <h1>Kieran Chadwick</h1>
        <p>
          Senior Frontend Engineer <Badge text="@Booking.com" />
        </p>
        <a href="/cv">View CV</a>
      </section>

      <section>
        <h3 style={{ marginBlockEnd: 4 }}>🏎️ Sim Racing Overlay</h3>

        <p style={{ marginBlockEnd: 8 }}>
          Broadcasting overlay built in React. Integrates with OBS to provide
          viewers with a real-time race overview.
        </p>

        <p style={{ marginBlockEnd: 8 }}>
          Position changes and fastest lap animated with Framer Motion to keep
          the viewer up to date.
        </p>

        <FastestLap firstName="Kieran" lastName="Chadwick" lapTime="1:23.456" />
        <a href="https://rf2.ninja-labs.co.uk">View Project</a>
      </section>

      <section>
        <h3 style={{ marginBlockEnd: 4 }}>🔍 ARC Search</h3>

        <p style={{ marginBlockEnd: 16 }}>
          ARC Raiders search tool built with TANStack.
        </p>

        <a href="https://arc-search.ninja-labs.com">View Project</a>
      </section>
    </div>
  );
};

export default Home;
