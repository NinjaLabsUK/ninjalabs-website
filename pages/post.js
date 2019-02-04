import { withRouter } from "next/router";
import Layout from "../components/Layout";
import Container from "../components/Container";

const post = ({ router }) => {
  const id = router.query.id;
  return (
    <Layout>
      <Container>Post page {id}</Container>
    </Layout>
  );
};

export default withRouter(post);
