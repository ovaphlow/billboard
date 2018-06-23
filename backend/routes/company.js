const express = require('express')
const log4js = require('log4js')

const config = require('../config')
const mysql = require('../util/mysql2')
const sequelize = require('../util/sequelize')

const logger = log4js.getLogger()
logger.level = 'debug'

const router = express.Router()

router.route('/:uuid/job/').get((req, res) => {
  let sql = `
    select
      *
    from
      ${config.database.schema}.job
    where
      master_uuid = :uuid
  `
  sequelize.query(sql, {
    replacements: { uuid: req.params.uuid },
    type: sequelize.QueryTypes.SELECT
  }).then(result => {
    res.json({ content: result, message: '' })
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误。' })
  })
})

router.route('/:uuid').put((req, res) => {
  req.body.uuid = req.params.uuid
  let sql = `
    update
      ${config.database.schema}.company
    set
      phone = :phone,
      email = :email,
      province = :province,
      city = :city,
      district = :district,
      address = :address,
      intro = :intro
    where
      uuid = :uuid
  `
  sequelize.query(sql, {
    replacements: req.body,
    type: sequelize.QueryTypes.UPDATE
  }).then(result => {
    res.json({ content: '', message: '' })
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误。' })
  })
})

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
          licence_type = :licence_type
      `
      sequelize.query(sql, {
        replacements: req.body,
        type: sequelize.QueryTypes.INSERT
      }).then(resule => {
        res.json({ content: '', message: '' })
      }).catch(error => {
        logger.error(error)
        res.json({ content: '', message: '服务器错误' })
      })
    } else {
      res.json({ content: '', message: '用户名已存在' })
    }
  }).catch(error => {
    logger.error(error)
    res.json({ content: '', message: '服务器错误' })
  })
})

/**
 * 企业登录
 */
router.route("/login").post((req, res) => {
  let sql = `
    select 
      *
    from
      ${config.database.schema}.company
    where 
      account = :account
  `
  sequelize.query(sql, {
    replacements: req.body,
    type: sequelize.QueryTypes.SELECT
  }).then(result => {
    if (result.length !== 1) {
      res.json({ content: '', message: '账号或密码错误' })
      return false;
    }
    if (result[0].password === req.body.password) {
      delete result[0].id
      delete result[0].password
      res.json({ content: result[0], message: '' })
    }
  }).catch(error => {
    logger.error(error)
    res.json({ content: '', message: '服务器错误。' })
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