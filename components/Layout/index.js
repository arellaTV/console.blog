import { Fragment } from 'react';
import Head from 'next/head';

const Layout = props => (
  <Fragment>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
      <link rel="manifest" href="/static/site.webmanifest" />
      <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#55c6ff" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    {props.children}
  </Fragment>
)

export default Layout;
