import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class About extends Component {
  render() {
    return (
      <div>
        <nav><Link to="/">link to home</Link></nav>
        <nav><Link to="/login">link to login</Link></nav>
      </div>
    )
  }
}

export default About