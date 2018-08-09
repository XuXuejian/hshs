import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/common/nav'
import BannerWrap from '../components/common/bannerWrap'
import styles from '../assets/styles/pages/index.scss'
import '../assets/styles/index.scss'

export default () => (
  <div>
    <Head title="涵山涵水" />
    <Nav />
    <div className={styles.wrap}>
      <BannerWrap />
    </div>
  </div>
)
