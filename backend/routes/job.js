const express = require('express')
const log4js = require('log4js')

const config = require('../config')
const sequelize = require('../util/sequelize')

const logger = log4js.getLogger()
logger.level = 'debug'

const router = express.Router()

/**
 * 删除职位
 */
router.delete('/:uuid', function (req, res) {
  var sql = `
    update
      ${config.database.schema}.job
    set
      removed = 1
    where
      uuid = :uuid
  `
  sequelize.query(sql, {
    replacements: { uuid: req.params.uuid },
    type: sequelize.QueryTypes.UPDATE
  }).then(function (result) {
    res.json({ content: result, message: '' })
  }).catch(function (err) {
    logger.error(err)
    res.json({ content: '', message: '服务器错误' })
  })
})

/**
 * 按类别过滤岗位
 */
router.get('/category/:category', (req, res) => {
  let sql = `
    select
      j.uuid, j.category, j.date, j.title, j.requirement, j.duty, j.content,
      c.name, c.province, c.city, c.district, c.address, c.intro
    from
      ${config.database.schema}.job as j
    join ${config.database.schema}.company as c on
      c.uuid = j.master_uuid
    where
      j.category = :category
      and removed = 0
    order by
      j.id desc
    limit 200
  `
  sequelize.query(sql, {
    replacements: { category: req.params.category },
    type: sequelize.QueryTypes.SELECT
  }).then(result => {
    res.json({ content: result, message: '' })
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误'})
  })
})

/**
 * 指定职位投递的简历
 */
router.route('/:job_uuid/user').post((req, res) => {
  req.body.job_uuid = req.params.job_uuid
  let sql = `
    insert into
      ${config.database.schema}.post_resume
    set
      uuid = uuid(),
      job_uuid = :job_uuid,
      resume_uuid = (select uuid from ${config.database.schema}.resume where user_uuid = :user_uuid limit 1)
  `
  sequelize.query(sql, {
    replacements: req.body,
    type: sequelize.QueryTypes.INSERT
  }).then(result => {
    if (result[1] === 1) {
      res.json({ content: '', message: '' })
    } else {
      res.json({ content: '', message: '投递简历失败。' })
    }
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误。' })
  })
})

router.route('/:uuid').get((req, res) => {
  let sql = `
    select
      j.uuid, j.category, j.date, j.title, j.requirement, j.duty, j.content,
      c.name, c.province, c.city, c.district, c.address, c.intro
    from
      ${config.database.schema}.job as j
    join ${config.database.schema}.company as c on
      c.uuid = j.master_uuid
    where
      j.uuid = :uuid
    limit 1
  `
  sequelize.query(sql, {
    replacements: { uuid: req.params.uuid },
    type: sequelize.QueryTypes.SELECT
  }).then(result => {
    logger.info(result)
    res.json({ content: result[0], message: '' })
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误。' })
  })

})

router.route('/').get((req, res) => {
  let sql = `
    select
      j.uuid, j.category, c.name, c.province, c.city, c.district, j.date, j.title, j.requirement 
    from
      ${config.database.schema}.job as j
    join ${config.database.schema}.company as c on
      c.uuid = j.master_uuid
    where
      removed = 0
    order by
      j.id desc
    limit 200
  `
  sequelize.query(sql, {
    replacements: {},
    type: sequelize.QueryTypes.SELECT
  }).then(rows => {
    res.json({ content: rows, message: 200 })
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: 500 })
  })
})

module.exports = router