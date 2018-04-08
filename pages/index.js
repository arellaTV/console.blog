import { Fragment } from 'react';
import Link from 'next/link'
import PostList from '~/components/PostList';
import withData from '~/lib/withData';

const Index = () => (
  <Fragment>
    <p><Link href="/"><a>Home</a></Link></p>
    <PostList />
  </Fragment>
)

export default withData(Index);
