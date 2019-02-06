import { withRouter } from "next/router";
import Dynamic from "next/dynamic";
import Layout from "../components/Layout";
import Container from "../components/Container";
import { BORDER_RADIUS } from "../styles";

const post = ({ router }) => {
  const id = router.query.id;
  const Post = Dynamic(() => import(`../md/${id}/post.mdx`));

  return (
    <Layout>
      <Container>
        <Post
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

export default withRouter(post);
