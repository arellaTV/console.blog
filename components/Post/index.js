import { Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import postQuery from './query.graphql';
import Head from 'next/head';

const Post = props => {
  // Return a loading component if it's still loading
  if (props.data.loading) {
    return <h1>Loading!</h1>
  }
  let post = props.data.post;
  return (
    <Fragment>
      <Head>
        <title>{post.title} - Console.blog</title>
      </Head>
      <h1>{post.title}</h1>
      <p><img src={post.author.avatar.url} />{post.author.name}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Fragment>
  );
}

export default graphql(
  postQuery,
  {
    options: (props) => ({
      variables: { slug: props.url.query.postSlug }
    }),
  },
)(Post);
