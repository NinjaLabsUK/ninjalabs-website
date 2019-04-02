import Dynamic from "next/dynamic";
import Layout from "../components/Layout";
import Container from "../components/Container";
import { BORDER_RADIUS } from "../styles";

const Post = ({ id }) => {
  const Content = Dynamic(() => import(`../md/${id}/post.mdx`));
  return (
    <Layout>
      <Container>
        <p>PostID: {id}</p>
        <Content
          components={{
            h1: props => <h1 style={{ textAlign: "center" }} {...props} />,
            img: props => (
              <img
                style={{
                  display: "block",
                  maxWidth: "80%",
                  margin: "0 auto",
                  borderRadius: BORDER_RADIUS
                }}
                {...props}
              />
            )
          }}
        />
      </Container>
    </Layout>
  );
};

Post.getInitialProps = async ({ query }) => {
  return { id: query.id };
};

export default Post;
