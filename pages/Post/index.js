import withData from '~/lib/withData';
import Post from '~/components/Post';

const Post = props => {
  return (
    <h1>props.title</h1>
  )
}

export default withData(Post);
