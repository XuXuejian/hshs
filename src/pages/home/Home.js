import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './Home.scss'

class Home extends Component {
  render() {
    return (
      <div>
        <nav><Link to="/about">link to about</Link></nav>
        <nav><Link to="/login">link to login</Link></nav>
        <div className="img"></div>
      </div>
    )
  }
}

export default Home