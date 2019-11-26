import Link from "next/link";

import Layout from "../components/Layout";
import Container from "../components/Container";
import Button from "../components/Button";

export default () => (
  <Layout>
    <Container>
      <div style={{ marginBottom: "900px" }}>
        <Link href="/cv">
          <Button text="Look at this cool button, it'll take you to my cv" />
        </Link>
      </div>
    </Container>
  </Layout>
);
