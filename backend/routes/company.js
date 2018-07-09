const express = require('express')
const log4js = require('log4js')

const config = require('../config')
const sequelize = require('../util/sequelize')

const logger = log4js.getLogger()
logger.level = 'debug'

const router = express.Router()

/**
 * 修改招聘岗位信息
 */
router.route('/:master_uuid/job/:uuid').put((req, res) => {
  req.body.master_uuid = req.params.master_uuid
  req.body.uuid = req.params.uuid
  let sql = `
    update
      ${config.database.schema}.job
    set
      title = :title,
      requirement = :requirement,
      duty = :duty,
      content = :content
    where
      master_uuid = :master_uuid
      and uuid = :uuid
  `
  sequelize.query(sql, {
    replacements: req.body,
    type: sequelize.QueryTypes.SELECT
  }).then(result => {
    res.json({ content: result [0], message: '' })
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误。' })
  })
})

/**
 * 招聘岗位信息
 */
router.route('/:master_uuid/job/:uuid').get((req, res) => {
  let sql = `
    select
      *
    from
      ${config.database.schema}.job
    where
      master_uuid = :master_uuid
      and uuid = :uuid
  `
  sequelize.query(sql, {
    replacements: { master_uuid: req.params.master_uuid, uuid: req.params.uuid },
    type: sequelize.QueryTypes.SELECT
  }).then(result => {
    res.json({ content: result [0], message: '' })
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误。' })
  })
})

/**
 * 添加招聘岗位
 */
router.route('/:uuid/job/').post((req, res) => {
  req.body.uuid = req.params.uuid
  let sql = `
    insert into
      ${config.database.schema}.job
    set
      uuid = uuid(),
      master_uuid = :uuid,
      title = :title,
      requirement = :requirement,
      duty = :duty,
      content = :content
  `
  sequelize.query(sql, {
    replacements: req.body,
    type: sequelize.QueryTypes.INSERT
  }).then(result => {
    if (result[1] === 1) {
      res.json({ content: result[1], message: '' })
    } else {
      res.json({ content: '', message: '添加数据失败。' })
    }
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误。' })
  })
})

/**
 * 招聘职位列表
 */
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

/**
 * 修改公司信息
 */
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
    logger.info(result.length)
    if (result.length !== 1 && result.length != 0) {
      res.json({ content: '', message: '帐号异常，请联系管理员' })
      return false;
    }
    if (result.length == 0) {
      res.json({ content: '', message: '账号不存在，请注册帐号' })
      return false;
    }
    if (result[0].password === req.body.password) {
      delete result[0].id
      delete result[0].password
      res.json({ content: result[0], message: '' })
    }else{
      res.json({ content: '', message: '账号或密码错误' })
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