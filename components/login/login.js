import React, { Component } from 'react'
import styles from './login.scss'
import Input from '../common/input/input'
import Button from '../common/button/button'

class login extends Component {
  state = {
    params: {
      account: null,
      password: null
    }
  }
  login = (e) => {
    e.preventDefault()
    console.log(this.state.params)
    // fetch()
  }
  onChange = (data) => {
    const {params} = this.state
    this.setState({params: {...params, ...data}})
  }
  render() {
    const {className} = this.props
    return (
      <div className={`${styles.modal} ${className}`}>
        <div className={styles.header}>
          <h1>
            <span className={styles.active}>登录</span>
            <span>注册</span>
          </h1>
          <button className={styles.close}></button>
        </div>
        <div className={styles.body}>
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
        </div>
        <div className={styles.footer}></div>
      </div>
    )
  }
}

export default login