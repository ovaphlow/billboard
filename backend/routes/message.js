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

/**
 * 未测试，待修改。
 */
router.post('/insertMessage', (req, res) =>{
  let sql = `
    insert into ${config.database.schema}.message(uuid, category, source, source_uuid, target, target_uuid, title, content, status, created_at)
    values(:uuid, :category, :source, :source_uuid, :target, :target_uuid, :title, :content, :status, :created_at)
  `
  sequelize.query(sql, {
    replacements: req.body,
    tyep: sequelize.QueryTypes.INSERT
  }).then(result =>{
    req.json({ content:'', message:''})
  }).catch(err => {
    logger.error(err)
    res.json({content:'', message: '服务器错误'})
  })
})

router.get('/deleteMessage/:id', (req, res) => {
  let sql = `delete from ${config.database.schema}.message where id = :id`

  sequelize.query(sql, {
    replacements: {id: req.params.id},
    tyep: sequelize.QueryTypes.DELETE
  }).then(resule => {
    res.json({ content: '', message: "删除成功"})
  }).catch(err => {
    logger.error(err)
    res.json({content:'', message: '服务器错误'})
  })

})