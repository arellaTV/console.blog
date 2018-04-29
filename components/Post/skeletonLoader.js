import { Fragment } from 'react';
import Head from 'next/head';

const SkeletonLoader = () => (
  <Fragment>
    <Head>
      <title>Console.blog</title>
    </Head>
    <article className="article">
      <header className="header">
        <h1 className="headline--skeleton"></h1>
        <div className="byline">
          <div className="byline__avatar--skeleton"></div>
          <span className="byline__description">
            <address className="byline__display-name--skeleton"></address>
            <time className="byline__pubdate--skeleton" pubdate="true" title="a few seconds ago"></time>
          </span>
        </div>
      </header>
      <div className="content">
        <div className="content__line--skeleton"></div>
        <div className="content__line--skeleton"></div>
        <div className="content__line--skeleton"></div>
      </div>
    </article>
  </Fragment>
)

export default SkeletonLoader;
