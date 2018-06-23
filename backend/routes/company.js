const express = require('express')
const log4js = require('log4js')

const config = require('../config')
const mysql = require('../util/mysql2')
const sequelize = require('../util/sequelize')

const logger = log4js.getLogger()
logger.level = 'debug'

const router = express.Router()

/**
 *  企业注册
 */
router.route('/register').post((req, res) => {
  let sql = `
    select
      account
    from 
      ${config.database.schema}.company
    where 
      account = :account
  `
  sequelize.query(sql, {
    replacements: { account: req.body.account },
    type: sequelize.QueryTypes.SELECT
  }).then(resule => {
    if (resule.length == 0) {
      let sql = `
        insert into
          ${config.database.schema}.company
        set
          uuid = uuid(),
          account = :account,
          password = :password,
          name = :name,
          licence = :licence,
          licence_type = :licence_type,
      `
      sequelize.query(sql, {
        replacements: req.body,
        type: sequelize.QueryTypes.INSERT
      }).then(resule => {
        res.json({ content: '', message: '注册成功', status: 200 })
      }).catch(error => {
        logger.error(error)
        res.json({ content: '', message: '服务器错误', status: 500 })
      })
    } else {
      res.json({ content: '', message: '用户名已存在', status: 200 })
    }
  }).catch(error => {
    logger.error(error)
    res.json({ content: '', message: '服务器错误', status: 500 })
  })
})

/**
 * 企业登录
 */
router.route("/login").post((req, res) => {
  let sql = `
    select 
    account, password 
    from ${config.database.schema}.company
    where 
    account = :account
  `
  sequelize.query(sql, {
    replacements: {
      account: req.body.account,
      password: req.body.password,
    },
    type: sequelize.QueryTypes.SELECT
  }).then(rows => {
    if (rows.length != 1) {
      res.json({ content: '', message: '用户名密码错误', stauts: 403 })
      return false;
    }
    if (rows[0].password == req.body.password) {
      res.json({ content: { account: rows[0].account, namename: rows[0].name, id:rows[0].id}, message: '登录成功', stauts: 200 })
    }
  }).catch(error => {
    logger.error(error)
    res.json({
      content: '', message: '操作失败', status: 500
    })
  })
})

/**
 * 企业详细信息
 */
router.route("/company/:companyId").post((res, req) => {
  let sql = `
    select
      account, name
    from ${config.database.schema}.company
    where 
      id = :companyId
  `
  sequelize.query(sql, {
    replacements: {
      companyId: req.parma.companyId
    },
    type: sequelize.QueryTypes.SELECT
  }).then(rows => {
    res.json({ content: rows, message: '操作成功', status: 200 })
  }).catch(err => {
    logger.error(err);
    res.json({ content: '', message: '操作失败', status: 500 })
  })
})
module.exports = router