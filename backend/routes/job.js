const express = require('express')
const log4js = require('log4js')
var moment = require('moment')

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
router.get('/category/:category', async (req, res) => {
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
  let result = await sequelize.query(sql, {
    type: sequelize.QueryTypes.SELECT,
    replacements: { category: req.params.category }
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误' })
  })
  res.json({ content: result, message: '' })
})

/**
 * 指定职位投递的简历
 */
router.route('/:job_uuid/user').post((req, res) => {
  let date = moment(new Date()).format('YYYY-MM-DD');
  let sql1 = `select count(*) count
    from 
    ${config.database.schema}.post_resume
    where
    date_format(date, '%Y-%m-%d') = :date
    and resume_uuid = (select uuid from ${config.database.schema}.resume where user_uuid = :user_uuid limit 1)
  `
  req.body.job_uuid = req.params.job_uuid
  sequelize.query(sql1, {
    replacements: {
      date: date,
      user_uuid: req.body.user_uuid,
      job_uuid: req.params.job_uuid
    },
    type: sequelize.QueryTypes.SELECT
  }).then(result => {
    if (result[0].count < 10) {
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
        res.json({ content: '', message: '服务器错误' })
      })
    } else {
      res.json({ content: '500', message: '投递数量超过每日上限' })
    }
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误' })
  })

})

/**
 * 判断是否可以点击投递按钮。
 * 默认一天一份简历仅可以投递一家公司一次。
 */
router.get('/:uuid/judge/:user_uuid', (req, res) => {
  let date = moment(new Date()).format('YYYY-MM-DD');
  let sql = `
    select count(*) count
    from
      ${config.database.schema}.post_resume
    where
      job_uuid = :job_uuid
      and date_format(date, '%Y-%m-%d') = :date
      and resume_uuid = (select uuid from ${config.database.schema}.resume where user_uuid = :user_uuid limit 1)
  `
  sequelize.query(sql, {
    type: sequelize.QueryTypes.SELECT,
    replacements: {
      date: date,
      user_uuid: req.params.user_uuid,
      job_uuid: req.params.uuid
    }
  }).then(result => {
    if (result[0].count === 0) {
      res.json({ content: '', message: '' })
    } else {
      res.json({ content: '', message: '请明天投递' })
    }
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误' })
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
    res.json({ content: rows, message: '' })
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误' })
  })
})

module.exports = router