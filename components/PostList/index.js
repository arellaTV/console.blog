import { Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const PostList = (props) => {
  let items = [];
  if (!props.data.loading) {
    items = props.data.posts.items;
    console.log(items);
  }
  return (
    <Fragment>
      {items.map(item => (
        <div key={item.post.globalId}>
          <h3><a>{item.post.title}</a></h3>
          <div dangerouslySetInnerHTML={{ __html: item.post.excerpt }} />
        </div>
      ))}
    </Fragment>
  );
}

const postListQuery = gql`
  query PostListQuery {
    posts {
      items: edges {
        post: node {
          globalId: id
          title
          excerpt
          featuredImage {
            mediaDetails {
              sizes {
                name
                file
                width
                height
                mimeType
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`
export default graphql(postListQuery)(PostList);
