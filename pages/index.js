import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/common/nav'
import styles from '../assets/styles/index.scss'

export default () => (
  <div>
    {/* <Head title="Home" /> */}
    <Nav />
    <div className={styles.hero}>
      <h1 className={styles.title}>安徽涵山涵水教育机构</h1>
    </div>
  </div>
)
