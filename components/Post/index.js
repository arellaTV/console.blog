import { Fragment } from 'react';
import { graphql } from 'react-apollo';
import Comments from '~/components/Comments'
import ErrorPage from 'next/error';
import gql from 'graphql-tag';
import Head from 'next/head';
import SkeletonLoader from './skeletonLoader';
import moment from 'moment';
import postQuery from './query.graphql';
import './styles.sass';

const Post = props => {
  // Return an Error page if it doesn't have the required props
  if (!props || !props.data) {
    return <ErrorPage statusCode={404}/>
  }

  // Return a loading component if it's still loading
  if (props.data.loading) {
    return <SkeletonLoader />
  }

  // Store the post data to a post variable for convenience
  const post = props.data.post;

  // Get the relative or absolute date based off of how recent it is
  let pubDate;
  let dateDifference = moment().diff(post.date, 'days');
  if (dateDifference > 1) {
    pubDate = moment(post.date).format('MMMM Do YYYY');
  } else {
    pubDate = moment(post.date).fromNow();
  }

  return (
    <Fragment>
      <Head>
        <title>{post.title} - Console.blog</title>
      </Head>
      <article className="article">
        <header className="header">
          <h1 className="headline">{post.title}</h1>
          <div className="byline">
            <img className="byline__avatar" src={post.author.avatar.url} />
            <span className="byline__description">
              <address className="byline__display-name">By {post.author.name}</address>
              <time pubdate="true" dateTime={pubDate} title={pubDate}>{pubDate}</time>
            </span>
          </div>
        </header>
        <div className="content" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
      <Comments postId={post.id}/>
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
