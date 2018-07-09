const express = require('express')
const log4js = require('log4js')

const config = require('../config')
const sequelize = require('../util/sequelize')

const logger = log4js.getLogger()
logger.level = 'debug'

const router = express.Router()

module.exports = router

router.get('/user/:uuid', (req, res) => {
  let sql = `
    select * from ${config.database.schema}.message where target_uuid = :uuid and status = '未读' order by id desc
  `
  sequelize.query(sql, {
    replacements: { uuid: req.params.uuid },
    type: sequelize.QueryTypes.SELECT
  }).then(result => {
    res.json({ content: result, message: '' })
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误' })
  })
})

router.put('/:uuid', (req, res) => {
  let sql = `
    update ${config.database.schema}.message set status = '已读' where uuid = :uuid
  `
  sequelize.query(sql, {
    replacements: { uuid: req.params.uuid },
    type: sequelize.QueryTypes.PUT
  }).then(result => {
    res.json({ content: '', message: '' })
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '' })
  })
})

router.get('/:uuid', (req, res) => {
  let sql = `
    select * from ${config.database.schema}.message where uuid = :uuid
  `
  sequelize.query(sql, {
    replacements: { uuid: req.params.uuid },
    type: sequelize.QueryTypes.SELECT
  }).then(result => {
    res.json({ content: result, message: '' })
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误' })
  })
})