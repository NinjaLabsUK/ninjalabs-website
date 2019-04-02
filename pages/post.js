import { PureComponent, Fragment } from "react";
import Prismic from "prismic-javascript";
import Layout from "../components/Layout";
import Container from "../components/Container";
import { BORDER_RADIUS } from "../styles";

class Post extends PureComponent {
  state = {
    post: null,
    loading: true
  };

  componentDidMount() {
    this.fetchPost();
  }

  fetchPost = () => {
    const { id } = this.props;

    Prismic.getApi("https://ninjalabs.prismic.io/api/v2")
      .then(api => api.getByID("XKPAiBAAAKsKKqjN"))
      .then(response => {
        const { data } = response;
        console.log(data);
        //const { title } = data
        this.setState(
          {
            post: {
              title: data.title[0].text,
              mainImage: data.main_image,
              body: data.body
            },
            loading: false
          },
          () => console.log(this.state)
        );
      });
  };

  render() {
    const { post } = this.state;
    return (
      <Layout>
        <Container padding={false}>
          {post && (
            <Fragment>
              <img
                style={{
                  display: "block",
                  maxWidth: "1600px",
                  width: "100%",
                  margin: "0 auto"
                }}
                src={post.mainImage.url}
                alt={post.mainImage.alt}
              />
              <div style={{ padding: "0.8rem" }}>
                <h2>{post.title}</h2>
                {post.body.map(chunk => {
                  if (chunk.type === "paragraph") {
                    return <p>{chunk.text}</p>;
                  }

                  return null;
                })}
              </div>
            </Fragment>
          )}
        </Container>
      </Layout>
    );
  }
}

Post.getInitialProps = async ({ query }) => {
  return { id: query.id };
};

export default Post;
