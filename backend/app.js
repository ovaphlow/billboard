const path = require('path')

const express = require('express')
// const cors = require('cors')
const bodyParser = require('body-parser')
const log4js = require('log4js')

const config = require('./config')

const logger = log4js.getLogger()
logger.level = 'debug'

const app = express()

app.set('env', config.app.env)

// app.use(express.static('./public'))
// app.use(express.static(path.join(__dirname, '../frontend/dist')))

// app.use('/lib', express.static(path.join(__dirname, 'node_modules')))

// app.use(cors())

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.use('/', (req, res, next) => {
  logger.info(req.method, req.originalUrl)
  next()
})

const job = require('./routes/job')
app.use('/api/job', job)

const user = require('./routes/user')
app.use('/api/user', user)

const resume = require('./routes/resume')
app.use('/api/resume', resume)

const company = require('./routes/company')
app.use('/api/company', company)

const message = require('./routes/message')
app.use('/api/message', message)

const hypervisor =require('./routes/hypervisor')
app.use('/api/hypervisor', hypervisor)

// const news = require('./routes/news')
// app.use('/api/news', news)

// const inputMessage = require('./routes/inputMessage')
// app.use('/billboard/api/inputMessage',inputMessage)

app.listen(config.app.port, () => {
  logger.info(`服务器启动，端口 ${config.app.port}`)
})
