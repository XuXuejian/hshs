import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  position: relative;
  float: left;
  width: 20%;
  padding: 12px 0;
  background-color: rgba(43, 51, 59, 1);
  margin: 0;
`
const ListItem = styled.li`
  height: 60px;
  line-height: 60px;
  padding-left: 16px;
  cursor: pointer;
  &:hover .type {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.3);
  }
`
const Item = styled.div`
  transition: all 0.1s;
  padding: 0 12px;
  color: #d2c8c8;
`
const Menu = () => (
  <List>
    <ListItem>
      <div className="type">一级建造师/二级建造师</div>
    </ListItem>
    <ListItem>
      <div className="type">注册消防工程师</div>
    </ListItem>
    <ListItem>
      <div className="type">工程师职称</div>
    </ListItem>
    <ListItem>
      <div className="type">八大员/技工/安全员</div>
    </ListItem>
    <ListItem>
      <div className="type">中专学历/大专学历/本科学历</div>
    </ListItem>
    <ListItem>
      <div className="type">企业资质升级</div>
    </ListItem>
    {/* <ListItem>
      <div className="type">在线模考/网校入口</div>
    </li> */}
  </List>
)

const BannerContainer = styled.div`
  position: relative;
`
const BannerImgContainer = styled.div``
const Img = styled.img`
  height: 280px;
`
const Icon = styled.i`
  position: absolute;
  top: 50%;
  ${(props: { left?: boolean }) => (props.left ? 'left: 0;' : 'right: 0;')}
`
const BannerTab = styled.div``
class Banner extends React.Component<{ banners: any }> {
  state = {
    current: 0,
    length: 0,
    tabs: []
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.banners) {
  //     const tabs = nextProps.banners.map((banner, index) => index),
  //       length = tabs.length
  //     this.setState({ tabs, length })
  //     this.interval()
  //   }
  // }

  interval = () => {
    setInterval(this.next, 2000)
  }

  pageTo = (current: number) => {
    this.setState({ current })
  }

  prev = () => {
    const { current, length } = this.state
    if (current === 0) {
      this.setState({ current: length - 1 })
    } else {
      this.setState({ current: current - 1 })
    }
  }

  next = () => {
    const { current, length } = this.state
    if (current === length - 1) {
      this.setState({ current: 0 })
    } else {
      this.setState({ current: current + 1 })
    }
  }

  render() {
    const { tabs, current } = this.state
    const { banners } = this.props
    return (
      <BannerContainer>
        <BannerImgContainer>
          {banners && (
            <a href={banners[current].url} target="_blank">
              <Img src={banners[current].src} />
            </a>
          )}
        </BannerImgContainer>
        <Icon left onClick={this.prev} />
        <Icon onClick={this.next} />
        <BannerTab>
          {tabs.map(tab => (
            <i key={tab} onClick={() => this.pageTo(tab)} />
          ))}
        </BannerTab>
      </BannerContainer>
    )
  }
}
const Dots = () => <div />
const banners = [
  { src: '/static/images/1-1G115160KR08.jpg', url: '' },
  { src: '/static/images/1-1P1261F335L5.jpg', url: '' },
  { src: '/static/images/1-1PI11554393T.jpg', url: '' }
]
const Wrap = styled.div`
  box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.06);
  width: 86%;
  margin: 0 auto;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
`
const Right = styled.div`
  float: left;
  width: 80%;
  font-size: 0;
`
const BannerWrap = () => (
  <Wrap>
    <Menu />
    <Right>
      <Banner banners={banners} />
      <Dots />
    </Right>
  </Wrap>
)

export default BannerWrap
