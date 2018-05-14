const express = require('express')
const log4js = require('log4js')

const config = require('../config')
const mysql = require('../util/mysql2')
const dataUtil = require('../util/dataUtil')

const logger = log4js.getLogger()
logger.level = 'debug'

const router = express.Router()

router.route('/').post(async (req, res) => {
  var messageData=req.body.data;
  dataUtil.initial("platform_news")
  toSqlData=dataUtil.checkData(messageData)?dataUtil.createSqlAndData(messageData):undefined;
  if(toSqlData!=undefined){
    let [rows]=await await mysql.execute(toSqlData.sql,toSqlData.sqlData);
    res.json({
      status: 200,
      content: {'messageId':rows.insertId}
    })
    return
  }
  res.json({
    status: 500,
    content: 'err'
  })

})

  module.exports = router