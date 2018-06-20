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
      username
    from 
      ${config.database.schema}.company
    where 
      username= :username
  `
  sequelize.query(sql, {
    replacements: { username: req.body.username },
    type: sequelize.QueryTypes.SELECT
  }).then(resule => {
    if (resule.length == 0) {
      let sql = `
        insert into ${config.database.schema}.company
        (username, password, company_name, adress, corporation, phone, email)
        values
        (:username, :password, :company_name, :adress, :corporation, :phone, :email)
      `
      sequelize.query(sql, {
        replacements: {
          username: req.body.username,
          password: req.body.password,
          company_name: req.body.company_name,
          adress: req.body.adress,
          corporation: req.body.corporation,
          phone: req.body.phone,
          email: req.body.email
        },
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
router.route("/companyLogin").post((res, req) => {
  let sql = `
    select 
      username, password 
    from ${config.database.schema}.company
    where 
      username = :username
  `
  sequelize.query(sql, {
    replacements: {
      username: req.body.username,
      password: req.body.password
    },
    type: sequelize.QueryTypes.SELECT
  }).then(rows => {
    if (rows.length != 1) {
      res.json({ content: '', message: '帐号异常', status: 200 })
      return false;
    }
    if (row[0].password == req.body.password) {
      res.json({ content: { username: row[0].username, company_name: row[0].company_name }, message: '登录成功', status: 200 })
    }
  }).catch(error => {
    logger.error(error)
    res.json({
      content: '', message: '操作失败', status: 200
    })
  })
})

/**
 * 企业详细信息
 */
router.route("/company/:companyId").post((res, req) => {
  let sql = `
    select
      username, company_name, adress, phone, e_mail, corporation
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