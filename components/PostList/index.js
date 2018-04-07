import { Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import postListQuery from './postListQuery.graphql';

const PostList = (props) => {
  let items = [];
  if (!props.data.loading) {
    items = props.data.posts.items;
    console.log(items);
  }
  return (
    <Fragment>
      <h1>Recent Stories</h1>
      {items.map(item => (
        <div key={item.post.globalId}>
          <h3><a href={`${item.post.categories.items[0].category.slug}/${item.post.slug}`}>{item.post.title}</a></h3>
          <div dangerouslySetInnerHTML={{ __html: item.post.excerpt }} />
        </div>
      ))}
    </Fragment>
  );
}

export default graphql(postListQuery)(PostList);
