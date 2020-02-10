import Link from 'next/link';
import './styles.sass';

const Footer = () => (
  <div className="footer">
    <div className="branding">
      <Link href="/">
        <a id="navigation-bar__logo">
          <img src="/static/logo_footer.svg" />
        </a>
      </Link><br />
      <span>© 2018 - {(new Date).getFullYear()} Jeremiah Arella</span><br />
      <span>An exploration of modern web development</span>
    </div>
    <div className="action-items">
      <div className="social">
        <span>Follow us: </span>
        <Link href="https://www.instagram.com/console.blog/">
          <a target="_blank">
            <i><img src="/static/icons/social/instagram-inverted.svg" /></i>
          </a>
        </Link>
        <Link href="https://twitter.com/console_blog">
          <a target="_blank">
            <i><img src="/static/icons/social/twitter-inverted.svg" /></i>
          </a>
        </Link>
        <Link href="https://www.facebook.com/console.blog">
          <a target="_blank">
            <i><img src="/static/icons/social/facebook-inverted.svg" /></i>
          </a>
        </Link>
      </div>
    </div>
  </div>
)

export default Footer;
