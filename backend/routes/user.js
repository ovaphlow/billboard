const express = require('express')
const log4js = require('log4js')

const config = require('../config')
const mysql = require('../util/mysql2')
const sequelize = require('../util/sequelize')

const logger = log4js.getLogger()
logger.level = 'debug'

const router = express.Router()

router.route('/login').post((req, res) => {
  let sql = `
    select
      uuid, account, password
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
        content: { uuid: rows[0].uuid, account: rows[0].account },
        message: 200,
      })
    }
  }).catch(error => {
    res.json({ content: '', message: 500 })
  })
})

module.exports = router