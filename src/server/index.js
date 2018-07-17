// const csshook = require('css-modules-require-hook/preset')
import csshook from 'css-modules-require-hook'
import assethook from 'asset-require-hook'
// 引入css 和 js
import buildPath from '../../build/asset-manifest.json'

import { matchPath } from 'react-router-dom'

csshook({
	extensions: '.scss',
	generateScopedName: '[name]__[local]___[hash:base64:5]'
})
assethook({
	extensions: [ 'png', 'jpg' ]
})

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
require('babel-register')({
	presets: [ 'react-app' ],
	plugins: [ 'add-module-exports' ]
})
// const userRoute = require("./userRoute")
const app = express()
const path = require('path')
app.use(cookieParser())
app.use(bodyParser.json())

const html = require('./server-entry')

// 用户接口模块 app.use("/user", userRoute) 映射到build后的路径 设置build以后的文件路径 项目上线用
app.use((req, res, next) => {
	if (req.url.startsWith('/user/') || req.url.startsWith('/static/')) {
		return next()
  }
  const urlObj = {
    '/login': '我是登陆xxxxx',
    '/about': '我是关于xxxx',
    '/': '首页.....'
  }
  const context = {}
  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  } else {
    res.write(`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <meta name="theme-color" content="#000000">
          <title>${urlObj[req.url]}</title>
          <link rel="stylesheet" type="text/css" href="/${buildPath['main.css']}">
          <meta name="keywords" content="seo、seo、seo、seo，搜到我吧!">
          <meta name="description" content="${urlObj[req.url]}">
          <meta name="author" content="你的大名">
        </head>
        <body>
          <noscript>
          You need to enable JavaScript to run this app.
          </noscript>
          <div id="root">`)
    const frontComponent = html(req, context)
    frontComponent.pipe(res, { end: false })
    frontComponent.on('end', _ => {
      res.write(`</div>
          <script src="/${buildPath['main.js']}"></script>
        </body>
      </html>`)
      res.end()
    })
  }
})
app.use('/', express.static(path.resolve('build')))

app.listen('9000', function() {
	console.log('open Browser http://localhost:9000')
})
