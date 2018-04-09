import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import './styles.sass';

const Layout = props => (
  <Fragment>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
      <link rel="manifest" href="/static/site.webmanifest" />
      <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5" />
      <link href="https://fonts.googleapis.com/css?family=Lato:400,700|Oswald:500" rel="stylesheet" />
      <meta name="msapplication-TileColor" content="#55c6ff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p><Link href="/"><a>Home</a></Link></p>
    {props.children}
  </Fragment>
)

export default Layout;
