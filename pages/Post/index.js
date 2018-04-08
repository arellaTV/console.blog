import { Component, Fragment } from 'react';
import Link from 'next/link'
import Post from '~/components/Post';
import withData from '~/lib/withData';

class PostPage extends Component {
  render() {
    return (
      <Fragment>
        <p><Link href="/"><a>Home</a></Link></p>
        <Post {...this.props}/>
      </Fragment>
    )
  }
}

export default withData(PostPage);
