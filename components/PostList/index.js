import {  Fragment } from 'react';
import { graphql } from 'react-apollo';
import ErrorPage from 'next/error';
import gql from 'graphql-tag';
import Head from 'next/head';
import PostListEntry from '~/components/PostListEntry';
import postListQuery from './query.graphql';
import './styles.sass';

const PostList = (props) => {
  // Return an Error page if it doesn't have the required props
  if (!props || !props.data || !props.data.posts) {
    return <ErrorPage statusCode={404} />
  }

  // Return a loading component if it's still loading
  if (props.data.loading) {
    return <h1>Loading...</h1>
  }

  let category;
  let items = [];
  if (props.data.categories.items.length > 0) {
    category = props.data.categories.items[0].category.name;
  }
  items = props.data.posts.items;
  return (
    <Fragment>
      <Head>
        <title>Featured Stories - Console.blog</title>
      </Head>
      <div className="category">
        <header className="header">
          <h1 className="headline">
            {category &&
              <span className="headline__category">{category}</span>
            }
            <span>Featured Stories</span>
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

export default graphql(
  postListQuery,
  {
    options: (props) => {
      let slug = "";
      if (props && props.url && props.url.query) {
        slug = props.url.query.categorySlug;
      }
      return ({
        variables: { categorySlug: slug, slug }
      })
    },
  },
)(PostList);
