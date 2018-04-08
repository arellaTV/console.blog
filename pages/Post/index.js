import withData from '~/lib/withData';
import Post from '~/components/Post';

const PostPage = props => {
  return (
    <Post {...props}/>
  )
}

export default withData(PostPage);
