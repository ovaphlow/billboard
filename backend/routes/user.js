const express = require('express')
const log4js = require('log4js')

const config = require('../config')
const sequelize = require('../util/sequelize')

const logger = log4js.getLogger()
logger.level = 'debug'

const router = express.Router()

router.route('/:uuid').get((req, res) => {
  let sql = `
    select
      uuid, account, nickname
    from
      ${config.database.schema}.user
    where
      uuid = :uuid
    limit 1
  `
  sequelize.query(sql, {
    replacements: { uuid: req.params.uuid },
    type: sequelize.QueryTypes.SELECT
  }).then(result => {
    res.json({ content: result, message: '', status: 200 })
  }).catch(error => {
    logger.error(error)
    res.json({ content: '', message: '服务器错误', status: 500 })
  })
})

router.route('/login').post((req, res) => {
  let sql = `
    select
      uuid, account, password, nickname
    from
      ${config.database.schema}.user
    where
      account = :account
  `
  sequelize.query(sql, {
    replacements: { account: req.body.account },
    type: sequelize.QueryTypes.SELECT
  }).then(rows => {
    if (rows.length !== 1) {
      res.json({ message: 401, content: '' })
      return false
    }
    if (rows[0].password === req.body.password) {
      res.json({
        content: { uuid: rows[0].uuid, account: rows[0].account, nickname: rows[0].nickname },
        message: 200,
      })
    }else{
      res.json({
        content: '',
        message: 100,
      })
    }
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: 500 })
  })
})

module.exports = router