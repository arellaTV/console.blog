import {  Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Head from 'next/head';
import PostListEntry from '~/components/PostListEntry';
import postListQuery from './query.graphql';
import './styles.sass';

const PostList = (props) => {
  let items = [];
  if (!props.data.loading) items = props.data.posts.items;
  return (
    <Fragment>
      <Head>
        <title>Featured Stories - Console.blog</title>
      </Head>
      <div className="category">
        <header className="header">
          <h1 className="headline">
            <span className="headline__category">Featured</span> <span>Stories</span>
          </h1>
        </header>
        <div className="posts">
          {items.map(item => (
            <PostListEntry item={item} key={item.post.globalId} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default graphql(postListQuery)(PostList);
