import Link from 'next/link'

import nav from './nav.scss'

const Nav = () => (
  <nav className={nav.head}>
    <div className={nav.logo}>
      <img src="/static/images/logo.png" alt="logo"/>
    </div>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
        <Link prefetch href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
    <div className={nav.loginArea}>
      <a>登录</a> / <a>注册</a>
    </div>
  </nav>
)

export default Nav
