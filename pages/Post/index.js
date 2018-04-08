import { Component, Fragment } from 'react';
import Layout from '~/components/Layout';
import Link from 'next/link'
import Post from '~/components/Post';
import withData from '~/lib/withData';

class PostPage extends Component {
  render() {
    return (
      <Layout>
        <p><Link href="/"><a>Home</a></Link></p>
        <Post {...this.props}/>
      </Layout>
    )
  }
}

export default withData(PostPage);
