import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import fail_icon from '../../assets/images/fail_icon.png'

class About extends Component {
  render() {
    return (
      <div>
        <nav><Link to="/">link to home</Link></nav>
        <nav><Link to="/login">link to login</Link></nav>
        <image alt="icon" src={fail_icon}/>
      </div>
    )
  }
}

export default About