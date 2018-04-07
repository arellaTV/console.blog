import { Fragment } from 'react';
import withData from '../lib/withData';
import PostList from '~/components/PostList';

const Index = () => (
  <Fragment>
    <h1>Post List</h1>
    <PostList />
  </Fragment>
)

export default withData(Index);
