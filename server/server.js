const express = require('express')
const next = require('next')
const log4js = require('log4js')
const bodyParser = require('body-parser')

require('./mongodb/mongodb')

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

app.prepare()
  .then(() => {
    const server = express()

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

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.use('/api', userRoute)

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
