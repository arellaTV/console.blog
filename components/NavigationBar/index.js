import Link from 'next/link';
import './styles.sass';

const NavigationBar = () => (
  <div id="navigation-bar">
    <Link href="/">
      <a id="navigation-bar__logo">
        <img src="/static/logo_nav.svg" />
      </a>
    </Link>
  </div>
)

export default NavigationBar;
