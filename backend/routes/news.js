const express = require('express')
const log4js = require('log4js')

const config = require('../config')
const mysql = require('../util/mysql2')

const logger = log4js.getLogger()
logger.level = 'debug'

const router = express.Router()

module.exports = router

router.route('/filter').post(async (req, res) => {
  let sql = `
    select
      n.uuid, user_id, u.user_name,
      title, category, img_flag, top_flag, top_time,
      content,
      n.create_time,
      (
        select
          count(*)
        from
          ${config.database.schema}.platform_news_comment as c
        where
          c.news_id = n.id
      ) as comment_count
    from
      ${config.database.schema}.platform_news as n
      left join ${config.database.schema}.user as u
        on u.id = n.user_id
    where
      position(? in n.category) > 0
      and position(? in n.district) > 0
    order by
      n.id desc
    limit ${config.database.fetchLimit}
  `
  let [rows] = await mysql.execute(sql, [req.body.category || '', req.body.district || ''])
  res.json({
    content: rows,
    message: null,
    status: 200
  })
})

router.route('/user/:uuid').get(async (req, res) => {
  let sql = `
    select
      n.uuid, user_id, u.user_name,
      title, category, img_flag, top_flag, top_time,
      content,
      n.create_time,
      (
        select
          count(*)
        from
          ${config.database.schema}.platform_news_comment as c
        where
          c.news_id = n.id
      ) as comment_count
    from
      ${config.database.schema}.platform_news as n
      left join ${config.database.schema}.user as u
        on u.id = n.user_id
    where
      u.uuid = ?
    order by
      n.id desc
    limit ${config.database.fetchLimit}
  `
  let [rows] = await mysql.execute(sql, [req.params.uuid])
  res.json({
    status: 200,
    message: '',
    content: rows
  })
})

router.route('/').get(async (req, res) => {
  let sql = `
    select
      n.uuid, user_id, u.user_name,
      title, category, img_flag, top_flag, top_time,
      content,
      n.create_time,
      (
        select
          count(*)
        from
          ${config.database.schema}.platform_news_comment as c
        where
          c.news_id = n.id
      ) as comment_count
    from
      ${config.database.schema}.platform_news as n
      left join ${config.database.schema}.user as u
        on u.id = n.user_id
    order by
      n.id desc
    limit ${config.database.fetchLimit}
  `
  let [rows] = await mysql.execute(sql)
  res.json({
    status: 200,
    message: '',
    content: rows
  })
})