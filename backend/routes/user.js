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
      uuid, account, name
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
    res.json({ content: result, message: '' })
  }).catch(error => {
    logger.error(error)
    res.json({ content: '', message: '服务器错误' })
  })
})

router.route('/login').post((req, res) => {
  let sql = `
    select
      uuid, account, password, name
    from
      ${config.database.schema}.user
    where
      account = :account
  `
  sequelize.query(sql, {
    replacements: { account: req.body.account },
    type: sequelize.QueryTypes.SELECT
  }).then(result => {
    if (result.length !== 1) {
      res.json({ message: '用户名不存在或账号密码错误。', content: '' })
      return false
    }
    if (result[0].password === req.body.password) {
      delete result[0].password
      res.json({ content: result[0], message: '', })
    }else{
      res.json({ content: '', message: '账号或密码错误', })
    }
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误。' })
  })
})

router.post('/register', async(req, res) => {
  let sql = `
    select id, account from ${config.database.schema}.user where account = :account
  `
  let result = await sequelize.query(sql, {
    replacements: req.body,
    type: sequelize.QueryTypes.SELECT
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误' })
  })

  if(result != null && result != ''){
    res.json({content:result, message:'已存在该用户名'})
    return
  }

  let sql1 = `
    insert into ${config.database.schema}.user set uuid = uuid(), account = :account, password = :password
  `
  let id = await sequelize.query(sql1, {
    replacements: {
      account: req.body.account,
      password: req.body.password
    },
    type: sequelize.QueryTypes.INSERT
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误' })
  })
  
  let sql2 = `
    select * from ${config.database.schema}.user where id = :id
  `
  let user = await sequelize.query(sql2, {
    replacements: {id: id[0]},
    type: sequelize.QueryTypes.SELECT
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误' })
  })

  let sql3 = `
    insert into ${config.database.schema}.resume set user_uuid = :uuid
  `
  sequelize.query(sql3, {
    replacements:{uuid: user[0].uuid},
    type: sequelize.QueryTypes.INSERT
  }).then(result =>{
    res.json({content:1})
  }).catch(err => {
    logger.error(err)
    res.json({ content:'', message: '服务器错误'})
  })
})

module.exports = router
