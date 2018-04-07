import { Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Post = props => {
  let post = {};
  if (!props.data.loading) {
    post = props.data.post;
    console.log(post);
  }
  return (
    <Fragment>
      <h1>{post.title}</h1>
    </Fragment>
  );
}

const postQuery = gql`
  query PostQuery {
    {
      post: postBy (slug:"hello-world") {
        featuredImage {
          sourceUrl
        }
        date
        content
        slug
        categories {
          items: edges {
            category: node {
              id
              slug
            }
          }
        }
      }
    }
  }
`
export default graphql(postQuery)(Post);
