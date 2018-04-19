import { Component, Fragment } from 'react';
import Layout from '~/components/Layout';
import Post from '~/components/Post';
import withData from '~/lib/withData';

const PostPage = props => (
  <Layout>
    <Post {...props}/>
  </Layout>
)

export default withData(PostPage);
