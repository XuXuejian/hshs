import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {StaticRouter} from 'react-router'
import { Provider } from 'react-redux'
import store from '../redux/store'
import App from '../App'

const html = (req, context) => {
  return ReactDOMServer.renderToNodeStream(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App/>
      </StaticRouter>
    </Provider>
  )
}

export default html