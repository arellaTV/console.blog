import { Component, Fragment } from 'react';
import Layout from '~/components/Layout';
import Post from '~/components/Post';
import withData from '~/lib/withData';

class PostPage extends Component {
  static getInitialProps(req) {

  }
  render() {
    return (
      <Layout>
        <Post {...this.props}/>
      </Layout>
    )
  }
}

export default withData(PostPage);
