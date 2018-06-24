const express = require('express')
const log4js = require('log4js')

const config = require('../config')
const sequelize = require('../util/sequelize')

const logger = log4js.getLogger()
logger.level = 'debug'

const router = express.Router()

router.route('/login').post((req, res) => {
  let sql = `
    select
      uuid, account, password, name
    from
      ${config.database.schema}.employee
    where
      account = :account
  `
  sequelize.query(sql, {
    replacements: { account: req.body.account },
    type: sequelize.QueryTypes.SELECT
  }).then(rows => {
    if (rows.length !== 1) {
      res.json({ message: '用户名不存在或账号密码错误。', content: '' })
      return false
    }
    if (rows[0].password === req.body.password) {
      res.json({
        content: { uuid: rows[0].uuid, account: rows[0].account, name: rows[0].name },
        message: '',
      })
    }else{
      res.json({ content: '', message: '账号密码错误。', })
    }
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误。' })
  })
})

module.exports = router