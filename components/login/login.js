import React, { Component } from 'react'
import styles from './login.scss'
import Input from '../common/input/input'
import Button from '../common/button/button'
import api from '../../api'

class login extends Component {
  state = {
    params: {
      account: null,
      password: null,
      code: null
    },
    isLogin: true
  }
  login = (e) => {
    e.preventDefault()
    const {account, password} = this.state.params
    console.log(this.state.params)
    api.Login({body: {account, password}}).then(res => {
      console.log(res)
    })
  }
  register = (e) => {
    e.preventDefault()
    const {account, code} = this.state.params
    console.log(this.state.params)
    api.Register({body: {account, code}}).then(res => {
      console.log(res)
    })
  }
  onChange = (data) => {
    const {params} = this.state
    this.setState({params: {...params, ...data}})
  }
  changeLogin = () => {
    this.setState({isLogin: true})
  }
  changeRegister = () => {
    this.setState({isLogin: false})
  }
  test = () => {
    api.GetUserInfo().then(res => {
      console.log(res)
    })
  }
  render() {
    const {className} = this.props
    const {isLogin} = this.state
    return (
      <div className={`${styles.modal} ${className}`}>
        <div className={styles.header}>
          <h1>
            <span className={styles.active} onClick={this.changeLogin}>登录</span>
            <span onClick={this.changeRegister}>注册</span>
          </h1>
          <button className={styles.close} onClick={this.test}></button>
        </div>
        <div className={styles.body}>
        {
          isLogin &&
          <form>
            <div>
              <Input placeholder="请输入手机号" name="account" onChange={(e) => this.onChange({account: e.target.value})}/>
              <p>请输入正确的手机号</p>
            </div>
            <div>
              <Input placeholder="6-16位密码，区分大小写，不能用空格" name="password" onChange={(e) => this.onChange({password: e.target.value})}/>
              <p>请输入6-16位密码，区分大小写，不能使用空格！</p>
            </div>
            <Button type="submit" onClick={this.login}>登录</Button>
          </form>
        }
        {
          !isLogin &&
          <form>
            <div>
              <Input placeholder="请输入手机号" name="account" onChange={(e) => this.onChange({account: e.target.value})}/>
              <p>请输入正确的手机号</p>
            </div>
            <div>
              <Input placeholder="4位验证码" name="code" onChange={(e) => this.onChange({code: e.target.value})}/>
              <p>请输入4位验证码！</p>
            </div>
            <Button type="submit" onClick={this.register}>注册</Button>
          </form>
        }
        </div>
        <div className={styles.footer}></div>
      </div>
    )
  }
}

export default login