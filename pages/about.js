import Head from '../components/head'
import Nav from '../components/common/nav'

export default () => (
  <div>
    <Head title="about" />
    <Nav />
    <div className="hero">
      <h1 className="title">this is about page!</h1>
      <p className="description">To get started, edit <code>pages/about.js</code> and save to reload.</p>
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  </div>
)
