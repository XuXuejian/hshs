import React, { Component } from 'react'
import Input from '../input'
import Button from '../button'
import api from '../../../api'
import styled from 'styled-components'

const Mask = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
`
const Modal = styled.div`
  background-color: #fff;
  width: 360px;
`
const Header = styled.header`
  position: relative;
  padding: 0 20px;
  height: 49px;
  line-height: 49px;
`
const Title = styled.h1`
  font-size: 16px;
  border-bottom: 1px solid #d0d6d9;
  margin: 0;
  padding: 0;
  font-weight: 400;
  height: 49px;
`
const Button = styled.span`
  float: left;
  height: 49px;
  line-height: 49px;
  width: 80px;
  text-align: center;
  cursor: pointer;
  &:hover,
  .active {
    border-bottom: 1px solid #f01400;
    color: #f01400;
  }
`
const CloseButton = styled.button`
  background: url(/static/images/nlogin.png) no-repeat;
  width: 17px;
  height: 17px;
  position: absolute;
  right: 20px;
  top: 17px;
  transition: transform 0.2s;
  border: 0;
  cursor: pointer;
  :hover {
    background-position: 0 -21px;
    transform: scale(1.1);
  }
`
const Body = styled.div`
  padding: 30px;
`
const Footer = styled.footer``
class login extends Component {
  state = {
    params: {
      account: null,
      password: null,
      code: null
    },
    isLogin: false
  }
  login = e => {
    e.preventDefault()
    const { account, password } = this.state.params
    console.log(this.state.params)
    api.Login({ body: { account, password } }).then(res => {
      console.log(res)
    })
  }
  register = e => {
    e.preventDefault()
    const { account, code } = this.state.params
    console.log(this.state.params)
    api.Register({ body: { account, code } }).then(res => {
      console.log(res)
    })
  }
  onChange = data => {
    const { params } = this.state
    this.setState({ params: { ...params, ...data } })
  }
  changeLogin = () => {
    this.setState({ isLogin: true })
  }
  changeRegister = () => {
    this.setState({ isLogin: false })
  }
  test = () => {
    api.GetUserInfo().then(res => {
      console.log(res)
    })
  }
  render() {
    const { isLogin } = this.state
    return (
      <>
        <Mask />
        <Modal>
          <Header>
            <Title>
              <Button className="active" onClick={this.changeLogin}>
                登录
              </Button>
              <Button onClick={this.changeRegister}>注册</Button>
            </Title>
            <CloseButton onClick={this.test} />
          </Header>
          <Body>
            {isLogin && (
              <form>
                <div>
                  <Input
                    placeholder="请输入手机号"
                    name="account"
                    onChange={e => this.onChange({ account: e.target.value })}
                  />
                  <p>请输入正确的手机号</p>
                </div>
                <div>
                  <Input
                    placeholder="6-16位密码，区分大小写，不能用空格"
                    name="password"
                    onChange={e => this.onChange({ password: e.target.value })}
                  />
                  <p>请输入6-16位密码，区分大小写，不能使用空格！</p>
                </div>
                <Button type="submit" onClick={this.login}>
                  登录
                </Button>
              </form>
            )}
            {!isLogin && (
              <form>
                <div>
                  <Input
                    placeholder="请输入手机号"
                    name="account"
                    onChange={e => this.onChange({ account: e.target.value })}
                  />
                  <p>请输入正确的手机号</p>
                </div>
                <div>
                  <Input
                    placeholder="4位验证码"
                    name="code"
                    onChange={e => this.onChange({ code: e.target.value })}
                  />
                  <p>请输入4位验证码！</p>
                </div>
                <Button type="submit" onClick={this.register}>
                  注册
                </Button>
              </form>
            )}
          </Body>
          <Footer />
        </Modal>
      </>
    )
  }
}

export default login
