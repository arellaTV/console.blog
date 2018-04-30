import { Fragment } from 'react';
import Layout from '~/components/Layout';
import PostList from '~/components/PostList';
import withData from '~/lib/withData';

const Index = props => (
  <Layout>
    <PostList {...props} />
  </Layout>
)

export default withData(Index);
