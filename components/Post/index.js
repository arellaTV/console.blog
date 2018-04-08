import { Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import postQuery from './query.graphql';

const Post = props => {
  let post = {};
  let sourceUrl = '/static/asset_fallback.svg'
  if (!props.data.loading) {
    post = props.data.post;
    if (post && post.featuredImage) sourceUrl = post.featuredImage.sourceUrl;
  }
  return (
    <Fragment>
      <img src={sourceUrl} width="320px"/>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Fragment>
  );
}

export default graphql(postQuery, {
  options: {
    variables: { slug: "hello-world" }
  }
})(Post);
