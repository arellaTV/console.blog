import { Component } from 'react';
import './styles.sass';

class Comments extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const postId = this.props.postId;
    const disqus_config = () => {
      this.page.url = window.location.href;
      this.page.identifier = postId;
    }
    (function() {
      var d = document, s = d.createElement('script');
      s.src = 'https://console-blog-official.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
  }

  render() {
    return (
      <div className="comments">
        <div id="disqus_thread"></div>
      </div>
    )
  }
}

export default Comments;
