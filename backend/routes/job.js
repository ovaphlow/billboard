const express = require('express')
const log4js = require('log4js')

const config = require('../config')
const sequelize = require('../util/sequelize')

const logger = log4js.getLogger()
logger.level = 'debug'

const router = express.Router()

router.route('/').get((req, res) => {
  let sql = `
    select
      j.uuid,j.category, c.name, c.province, c.city, c.district, j.date, j.title, j.requirement 
    from
      ${config.database.schema}.job as j
    join ${config.database.schema}.company as c on
      c.uuid = j.master_uuid
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