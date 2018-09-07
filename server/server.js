const express = require('express')
const next = require('next')
const log4js = require('log4js')
const bodyParser = require('body-parser')
const session = require('express-session')
const fs = require('fs')
const path = require('path')

require('./mongodb/mongodb')

global.RESULT_CODE = {
  "101": "用户已存在",
  "102": "用户不存在",
  "103": "密码不正确",
  "004": "用户不存在",
  "005": "系统错误",
  "006": "用户不存在",
  "007": "用户不存在",
  "008": "用户不存在",
  "009": "用户不存在",
  "010": "用户不存在",
  "011": "用户不存在",
  "012": "用户不存在"
}

log4js.configure({
  appenders: {
    console: { type: 'console' },
    file: { type: 'file', filename: 'web.log' }
  },
  categories: {
    web: { appenders: ['file'], level: 'info' },
    default: { appenders: ['console'], level: 'info' }
  }
})
const logger = log4js.getLogger('web')
logger.level = 'debug'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const userRoute = require('./api/user')
const loginRoute = require('./api/login')

function handleLoginSession(req, res, next) {
  console.log('handle', req.body)
  if (!req.session.user) {
    res.status(500).json({
      errMsg: '用户未登录'
    })
  } else {
    next()
  }
}

app.prepare()
  .then(() => {
    const server = express()
    const router = express.Router()
    server.use(log4js.connectLogger(logger, { level: 'info' }))
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: false }))
    // server.get('/a', (req, res) => {
    //   return app.render(req, res, '/b', req.query)
    // })

    // server.get('/posts/:id', (req, res) => {
    //   return app.render(req, res, '/posts', { id: req.params.id })
    // })

    console.log(server.get('env'))

    server.use(session({
      secret: 'secret dog',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 30
      }
    }))

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.use('/api', loginRoute, handleLoginSession, userRoute)

    server.use((req, res, next) => {
      const error = new Error('Not Found')
      error.status = 404
      next(error)
    })
    server.use((error, req, res, next) => {
      res.status(error.status || 500)
      res.json({
        error: {
          message: error.message
        }
      })
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
