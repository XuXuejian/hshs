import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import '../assets/styles/index.scss'

export default () => (
  <div>
    <Head title="Home" />
    <Nav />
    <div className="hero">
      <h1 className="title">Welcome to Next!</h1>
      <p className="description">To get started, edit <code>pages/index.js</code> and save to reload.</p>
    </div>
  </div>
)
