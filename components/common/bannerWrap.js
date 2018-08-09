import React from 'react'
import styles from './bannerWrap.scss'

const Menu = () => (
  <ul className={styles.menu}>
    <li className={styles.menuItem}>
      <div className={styles.type}>一级建造师/二级建造师</div>
    </li>
    <li className={styles.menuItem}>
      <div className={styles.type}>注册消防工程师</div>
    </li>
    <li className={styles.menuItem}>
      <div className={styles.type}>工程师职称</div>
    </li>
    <li className={styles.menuItem}>
      <div className={styles.type}>八大员/技工/安全员</div>
    </li>
    <li className={styles.menuItem}>
      <div className={styles.type}>中专学历/大专学历/本科学历</div>
    </li>
    <li className={styles.menuItem}>
      <div className={styles.type}>企业资质升级</div>
    </li>
    <li className={styles.menuItem}>
      <div className={styles.type}>在线模考/网校入口</div>
    </li>
  </ul>
)
class Banner extends React.Component {
  state = {
    current: 0,
    length: 0,
    tabs: []
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.banners) {
      const tabs = nextProps.banners.map((banner, index) => index), length = tabs.length
      this.setState({tabs, length})
      this.interval()
    }
  }

  interval = () => {
    setInterval(this.next, 2000)
  }

  pageTo = (current) => {
    this.setState({current})
  }

  prev = () => {
    const {current, length} = this.state
    if (current === 0) {
      this.setState({current: length - 1})
    } else {
      this.setState({current: current - 1})
    }
  }

  next = () => {
    const {current, length} = this.state
    if (current === length - 1) {
      this.setState({current: 0})
    } else {
      this.setState({current: current + 1})
    }
  }

  render() {
    const {tabs, current} = this.state
    const {banners} = this.props
    return (
      <div className={styles.banner}>
        <div className={styles.bannerImg}>
        {
          banners &&
          <a href={banners[current].url} target="_blank">
            <img src={banners[current].src} className={styles.img}/>
          </a>
        }
        </div>
        <i className={styles.iconLeft} onClick={this.prev}></i>
        <i className={styles.iconRight} onClick={this.next}></i>
        <div className={styles.bannerTab}>
        {
          tabs.map(tab => (
            <i key={tab} onClick={() => this.pageTo(tab)}></i>
          ))
        }
        </div>
      </div>
    )
  }
}
const List = () => (
  <div className={styles.list}></div>
)
const banners = [
  {src: '/static/images/1-1G115160KR08.jpg', url: ''},
  {src: '/static/images/1-1P1261F335L5.jpg', url: ''},
  {src: '/static/images/1-1PI11554393T.jpg', url: ''}
]
const bannerWrap = () => (
  <div className={styles.wrap}>
    <Menu/>
    <div className={styles.right}>
      <Banner banners={banners}/>
      <List/>
    </div>
  </div>
)

export default bannerWrap