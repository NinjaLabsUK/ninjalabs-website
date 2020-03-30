import Link from "next/link";

import Layout from "../components/Layout";
import Container from "../components/Container";
import Button from "../components/Button";
import { COLOURS } from "../styles";

export default () => (
  <Layout>
    <div style={{ backgroundColor: COLOURS.darkerGrey, textAlign: "center" }}>
      <img
        className="image"
        src="/img/logo-white.svg"
        style={{ maxWidth: "600px" }}
      />
    </div>
    <Container>
      <div style={{ marginBottom: "900px" }}>
        <Link href="/cv">
          <Button text="Look at this cool button, it'll take you to my cv" />
        </Link>
      </div>
    </Container>
  </Layout>
);
