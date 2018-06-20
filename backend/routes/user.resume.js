const express = require('express')
const log4js = require('log4js')

const config = require('../config')
const mysql = require('../util/mysql2')
const sequelize = require('../util/sequelize')

const logger = log4js.getLogger()
logger.level = 'debug'

const router = express.Router()


/**
 * 增加个人档案
 */
router.route('/:id/addResume').post((req, res) => {
  let sql = `
    insert into 
      ${config.database.schema}.user_resume(name, sex, phone, e_mail, adress, brithday, user_id)
    values(:name, :sex, :phone, :e_mail, :adress, :brithday, :id)
  `
  sequelize.query(sql, {
    replacements: { 
      id: req.params.id,
      name: req.body.name,
      sex: req.body.sex,
      phone: req.body.phone,
      brithday: req.body.brithday,
      e_mail: req.body.e_mail,
      adress: req.body.adress
    },
    type: sequelize.QueryTypes.INSERT
  }).then(result => {
    res.json({ content: result, message: '', status: 200 })
  }).catch(error => {
    logger.error(error)
    res.json({ content: '', message: '服务器错误', status: 500 })
  })
})


/**
 * 删除个人档案
 */
router.route('/:id/deleteResume').get((req, res) => {
  let sql = `
    delete from ${config.database.schema}.user_resume where id = :id
  `
  sequelize.query(sql, {
    replacements: { 
     id:req.params.id
    },
    type: sequelize.QueryTypes.DELETE
  }).then(result => {
    res.json({ content: result, message: '', status: 200 })
  }).catch(error => {
    console.log(req.params.id);
    logger.error(error)
    res.json({ content: '', message: '服务器错误', status: 500 })
  })
})


/**
 * 查询个人档案 这个查询应该没什么用，后期更改。
 */
router.route('/:id/findResume').get((req, res) => {
  let sql = `
    select id, name, sex, phone, e_mail, adress, brithday ${config.database.schema}.user_resume where id = :id
  `
  sequelize.query(sql, {
    replacements: {id:req.param.id},
    type: sequelize.QueryTypes.SELECT
  }).then(result => {
    res.json({ content: result, message: '', status: 200 })
  }).catch(error => {
    console.log(req.params.id);
    logger.error(error)
    res.json({ content: '', message: '服务器错误', status: 500 })
  })
})

/**
 * 修改个人id
 */
router.route('/:id/updateResume').post((req, res) => {
  let sql = `
    update ${config.database.schema}.user_resume set 
      name = :name,
      sex = :sex,
      phone = :phone,
      e_mail = :e_mail,
      adress = :adress,
      birthday = :birthday
    where id = :id
  `
  sequelize.query(sql, {
    replacements: { 
      id: req.body.id,
      name: req.body.name,
      sex: req.body.sex,
      phone: req.body.phone,
      brithday: req.body.brithday,
      e_mail: req.body.e_mail,
      adress: req.body.adress
    },
    type: sequelize.QueryTypes.UPDATE
  }).then(result => {
    res.json({ content: '', message: '', status: 200 })
  }).catch(error => {
    console.log(req.params.id);
    logger.error(error)
    res.json({ content: '', message: '服务器错误', status: 500 })
  })
})
module.exports = router