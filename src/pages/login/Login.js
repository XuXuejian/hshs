import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Login extends Component {
  render() {
    return (
      <div>
        <nav><Link to="/">link to home</Link></nav>
        <nav><Link to="/about">link to about</Link></nav>
      </div>
    )
  }
}

export default Login