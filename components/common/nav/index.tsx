import Link from 'next/link'
import styled from 'styled-components'

const Head = styled.nav`
  height: 72px;
  box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
`
const Img = styled.img`
  height: 72px;
`
const List = styled.ul`
  flex: 1;
  font-size: 16px;
  color: #000;
  display: flex;
`
const ListItem = styled.li`
  margin-right: 20px;
  &:hover {
    opacity: 0.7;
  }
`
const Login = styled.a`
  padding: 10px 12px;
  :hover {
    color: red;
  }
`
const Nav = () => (
  <Head>
    <Img src="/static/images/logo.png" alt="logo" />
    <List>
      <ListItem>
        <Link prefetch href="/">
          <a>建筑考试</a>
        </Link>
      </ListItem>
      <ListItem>
        <Link prefetch href="/about">
          <a>职称申报</a>
        </Link>
      </ListItem>
      <ListItem>
        <Link prefetch href="/about">
          <a>学历提升</a>
        </Link>
      </ListItem>
      <ListItem>
        <Link prefetch href="/about">
          <a>资质提升</a>
        </Link>
      </ListItem>
      <ListItem>
        <Link prefetch href="/about">
          <a>合作洽谈</a>
        </Link>
      </ListItem>
      <ListItem>
        <Link prefetch href="/about">
          <a>联系我们</a>
        </Link>
      </ListItem>
    </List>
    <Login>登录</Login> / <Login>注册</Login>
  </Head>
)

export default Nav
