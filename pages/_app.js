import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import Router from 'next/router'
import withRedux from 'next-redux-wrapper'
import { fromJS } from 'immutable'
import NProgress from 'nprogress'
import { createGlobalStyle } from 'styled-components'

import { makeStore } from '../redux/store'

const GlobalStyle = createGlobalStyle`
  body {
    min-width: 1280px;
    font-family: 'PingFangSC','helvetica neue','hiragino sans gb','arial','microsoft yahei ui','microsoft yahei','simsun','sans-serif';
    font-size: 14px;
  }
  :focus {
    outline: 0;
  }
  ol, ul {
    list-style: none;
  }
  a, a:link, a:visited, a:hover, a:active {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  * {
    box-sizing: border-box;
  }
`

Router.events.on('beforeHistoryChange', url => {
  NProgress.start()
})
Router.events.on('routeChangeError', url => {
  NProgress.done()
})
Router.events.on('routeChangeComplete', url => {
  NProgress.done()
})

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    return { pageProps }
  }

  componentDidMount() {
    NProgress.done()
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <GlobalStyle />
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(makeStore, {
  serializeState: state => state.toJS(),
  deserializeState: state => fromJS(state)
})(MyApp)
