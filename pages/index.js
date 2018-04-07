import { Fragment } from 'react';
import withData from '../lib/withData';
import PostList from '~/components/PostList';

const Index = () => (
  <Fragment>
    <PostList />
  </Fragment>
)

export default withData(Index);
