import { Fragment } from 'react';
import PostList from '~/components/PostList';
import withData from '~/lib/withData';

const Index = () => (
  <Fragment>
    <PostList />
  </Fragment>
)

export default withData(Index);
