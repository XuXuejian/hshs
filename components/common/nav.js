import Link from 'next/link'

import Login from '../login/login'
import nav from './nav.scss'

const Nav = () => (
  <nav className={nav.head}>
    <div className={nav.mask}></div>
    <Login className={nav.fixedLogin}/>
    <img src="/static/images/logo.png" alt="logo" className={nav.logoImg}/>
    <ul className={nav.link}>
      <li className={nav.linkItem}>
        <Link prefetch href="/">
          <a>建筑考试</a>
        </Link>
      </li>
      <li className={nav.linkItem}>
        <Link prefetch href="/about">
          <a>职称申报</a>
        </Link>
      </li>
      <li className={nav.linkItem}>
        <Link prefetch href="/about">
          <a>学历提升</a>
        </Link>
      </li>
      <li className={nav.linkItem}>
        <Link prefetch href="/about">
          <a>资质提升</a>
        </Link>
      </li>
      <li className={nav.linkItem}>
        <Link prefetch href="/about">
          <a>合作洽谈</a>
        </Link>
      </li>
      <li className={nav.linkItem}>
        <Link prefetch href="/about">
          <a>联系我们</a>
        </Link>
      </li>
    </ul>
    <div className={nav.loginArea}>
      <span className={nav.login}>登录</span> / <span className={nav.login}>注册</span>
    </div>
  </nav>
)

export default Nav
