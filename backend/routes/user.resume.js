const express = require('express')
const log4js = require('log4js')

const config = require('../config')
const mysql = require('../util/mysql2')
const sequelize = require('../util/sequelize')

const logger = log4js.getLogger()
logger.level = 'debug'

const router = express.Router()


router.route('/addResume').post((req, res) => {
  let sql = `
    insert into 
    ${config.database.schema}.user_resume(name, sex, phone, e_mail, adress, education, work_experience, personal_data)
    values(:name, :sex, :phone, :e_mail, :adress, :education, :work_experience, :personal_data)
  `
  sequelize.query(sql, {
    replacements: { 
      name: req.body.name,
      sex: req.body.sex,
      phone: req.body.phone,
      e_mail: req.body  .e_mail,
      adress: req.body.adress,
      education: req.body.education,
      work_experience: req.body.work_experience,
      personal_data: req.body.personal_data
    },
    type: sequelize.QueryTypes.INSERT
  }).then(result => {
    res.json({ content: result, message: '', status: 200 })
  }).catch(error => {
    logger.error(error)
    res.json({ content: '', message: '服务器错误', status: 500 })
  })
})

router.route('/deleteResume/:id').get((req, res) => {
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


router.route('/findResume').get((req, res) => {
  let sql = `
    select id, name, sex, phone, e_mail, adress, education, work_experience, personal_data form ${config.database.schema}.user_resume
  `
  sequelize.query(sql, {
    replacements: {},
    type: sequelize.QueryTypes.SELECT
  }).then(result => {
    res.json({ content: result, message: '', status: 200 })
  }).catch(error => {
    console.log(req.params.id);
    logger.error(error)
    res.json({ content: '', message: '服务器错误', status: 500 })
  })
})

router.route('/updateResume').post((req, res) => {
  let sql = `
    update ${config.database.schema}.user_resume set 
    name = :name,
    sex = :sex,
    phone = :phone,
    e_mail = :e_mail,
    adress = :adress,
    education = :education,
    work_experience = :work_experience,
    personal_data = :personal_data
    where id = :id
  `
  sequelize.query(sql, {
    replacements: { 
      id: req.body.id,
      name: req.body.name,
      sex: req.body.sex,
      phone: req.body.phone,
      e_mail: req.body  .e_mail,
      adress: req.body.adress,
      education: req.body.education,
      work_experience: req.body.work_experience,
      personal_data: req.body.personal_data
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