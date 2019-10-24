import Layout from "../components/Layout";
import Container from "../components/Container";
import { BORDER_RADIUS } from "../styles";

const Post = () => (
  <Layout>
    <Container padding={false}>Hello</Container>
  </Layout>
);

Post.getInitialProps = async ({ query }) => {
  return { id: query.id };
};

export default Post;
