const express = require('express')
const log4js = require('log4js')

const config = require('../config')
const sequelize = require('../util/sequelize')

const logger = log4js.getLogger()
logger.level = 'debug'

const router = express.Router()

/**
 * 指定公司收到的简历
 */
router.get('/company/:uuid', function (req, res) {
  var sql = `
    select
      r.*, pr.date
    from
      ${config.database.schema}.post_resume as pr
      join ${config.database.schema}.job as j on pr.job_uuid = j.uuid
      join ${config.database.schema}.resume as r on pr.resume_uuid = r.uuid
    where
      j.master_uuid = :uuid
      and j.removed = 0
  `
  sequelize.query(sql, {
    replacements: { uuid: req.params.uuid },
    type: sequelize.QueryTypes.SELECT
  }).then(function (result) {
    res.json({ content: result, message: '' })
  }).catch(function (err) {
    logger.error(err)
    res.json({ content: '', message: '服务器错误' })
  })
})

/**
 * 更新简历浏览量
 */
router.post('/:uuid/views', (req, res) => {
  let sql = `
    update ${config.database.schema}.resume set views = views + 1 where uuid = :uuid
  `
  sequelize.query(sql, {
    replacements: { uuid: req.params.uuid },
    type: sequelize.QueryTypes.UPDATE
  }).then(result => {
    res.json({ content: result, message: '' })
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '' })
  })
})

/**
 * 搜索简历
 * 参数：任职方向、学历、专业
 * params: category, degree, major
 */
router.post('/filter', (req, res) => {
  let sql = `
    select
      *
    from
      ${config.database.schema}.resume
    where
      position(:category in category) > 0
      and position(:degree in degree) > 0
      and position(:major in major) > 0
    limit 200
  `
  sequelize.query(sql, {
    replacements: req.body,
    type: sequelize.QueryTypes.SELECT
  }).then(result => {
    res.json({ content: result, message: '' })
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误' })
  })
})

/**
 * 简历投递记录
 */
router.route('/user/:uuid/post').get((req, res) => {
  let sql = `
    select
      *, (select title from ${config.database.schema}.job where uuid = pr.job_uuid) as title,
      (select name from ${config.database.schema}.company where uuid = j.master_uuid) as name,
      (select city from ${config.database.schema}.company where uuid = j.master_uuid) as city,
      (select district from ${config.database.schema}.company where uuid = j.master_uuid) as district
    from
      ${config.database.schema}.post_resume as pr
      join ${config.database.schema}.job as j on j.uuid = pr.job_uuid
    where
      resume_uuid = (select uuid from ${config.database.schema}.resume where user_uuid = :uuid limit 1)
      and j.removed = 0
  `
  sequelize.query(sql, {
    replacements: { uuid: req.params.uuid },
    type: sequelize.QueryTypes.SELECT
  }).then(result => {
    res.json({ content: result, message: '' })
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误。' })
  })
})

/**
 * 简历
 */
router.route('/:uuid').get((req, res) => {
  let sql = `
    select * from ${config.database.schema}.resume where uuid = :uuid limit 1
  `
  sequelize.query(sql, {
    replacements: { uuid: req.params.uuid },
    type: sequelize.QueryTypes.SELECT
  }).then(result => {
    if (result.length === 1) {
      res.json({ content: result[0], message: '' })
    } else {
      res.json({ content: '', message: '未找到指定简历。' })
    }
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误。' })
  })
})

/**
 * 职位对应简历列表
 * 需要调整表结构 ---?
 */
router.route('/job/:uuid/').get((req, res) => {
  let sql = `
    select
      r.*, pr.date
    from
      ${config.database.schema}.post_resume as pr
      join ${config.database.schema}.job as j on pr.job_uuid = j.uuid
      join ${config.database.schema}.resume as r on pr.resume_uuid = r.uuid
    where
      job_uuid = :job_uuid
    order by
      pr.id desc
    limit 200
  `
  sequelize.query(sql, {
    replacements: { job_uuid: req.params.uuid },
    type: sequelize.QueryTypes.SELECT
  }).then(result => {
    res.json({ content: result, message: '' })
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误。' })
  })
})

/**
 * 个人简历
 */
router.route('/user/:uuid').get((req, res) => {
  let sql = `
    select
      *
    from
      ${config.database.schema}.resume
    where
      user_uuid = :uuid
    limit 1
  `
  sequelize.query(sql, {
    replacements: { uuid: req.params.uuid },
    type: sequelize.QueryTypes.SELECT
  }).then(result => {
    res.json({ content: result[0], message: '' })
  }).catch(err => {
    logger.error(err)
    json.res({ content: '', message: '服务器错误。' })
  })
})

/**
 * 增加个人简历
 */
router.route('/:uuid/').post((req, res) => {
  req.body.uuid = req.params.uuid
  let sql = `
    insert into
      ${config.database.schema}.resume
    set
      uuid = uuid(),
      user_uuid = :uuid,
      name = :name,
      gender = :gender,
      birthday = :birthday,
      phone = :phone,
      email = :email,
      province = :province,
      city = :city
  `
  sequelize.query(sql, {
    replacements: req.body,
    type: sequelize.QueryTypes.INSERT
  }).then(result => {
    if (result[1] === 1) {
      res.json({ content: result[0], message: '' })
    } else {
      res.json({ content: '', message: '保存简历失败。' })
    }
  }).catch(error => {
    logger.error(error)
    res.json({ content: '', message: '服务器错误' })
  })
})

/**
 * 删除简历
 */
router.route('/:uuid').delete((req, res) => {
  let sql = `
    delete from resume where uuid = :uuid
  `
  sequelize.query(sql, {
    replacements: { uuid: req.params.uuid },
    type: sequelize.QueryTypes.DELETE
  }).then(result => {
    res.json({ content: result, message: '' })
  }).catch(error => {
    logger.error(error)
    res.json({ content: '', message: '服务器错误' })
  })
})

/**
 * 查询全部档案
 * 暂未使用
 */
router.route('/findResume').get((req, res) => {
  let sql = `
    select id, name, sex, phone, e_mail, adress, birthday,
      school, qualifications, intake, graduation_time, major_name,
      company_name, station, hiredate, leavedate, income
    from ${config.database.schema}.user_resume a left join
    ${config.database.schema}.resume_company b on a.id = b.userId
    ${config.database.schema}.education_experience c on b.companyId = c.id
  `
  sequelize.query(sql, {
    replacements: {id:req.param.id},
    type: sequelize.QueryTypes.SELECT
  }).then(result => {
    res.json({ content: result, message: '', status: 200 })
  }).catch(error => {
    logger.error(error)
    res.json({ content: '', message: '服务器错误', status: 500 })
  })
})

/**
 *  根据部门id 查询所投入部门简历
 * 暂未使用
 */
router.route('/:companyId/findResume').get((req, res) => {
  let sql = `
    select id, name, sex, phone, e_mail, adress, birthday,
      school, qualifications, intake, graduation_time, major_name,
      company_name, station, hiredate, leavedate, income
    from ${config.database.schema}.user_resume a left join
    ${config.database.schema}.resume_company b on a.id = b.userId
    ${config.database.schema}.education_experience c on b.companyId = c.id
    where
    companyId = :companyId
  `
  sequelize.query(sql, {
    replacements: {
      companyId: req.params.companyId
    },
    type: sequelize.QueryTypes.SELECT
  }).then(rows => {
    res.json({ content: rows, message: '', status: 200 })
  }).catch(err => {
    res.json({ content: '', message: '', status: 500 })
  })
})

/**
 * 修改个人简历
 */
router.route('/user/:uuid').put((req, res) => {
  req.body.uuid = req.params.uuid
  let sql = `
    update
      ${config.database.schema}.resume
    set
      name = :name,
      gender = :gender,
      birthday = :birthday,
      school = :school,
      major = :major,
      phone = :phone,
      email = :email,
      province = :province,
      city = :city
    where
      user_uuid = :uuid
  `
  sequelize.query(sql, {
    replacements: req.body,
    type: sequelize.QueryTypes.UPDATE
  }).then(result => {
    res.json({ content: '', message: '' })
  }).catch(error => {
    logger.error(error)
    res.json({ content: '', message: '服务器错误。' })
  })
})

/**
 * 增加教育经历
 */
router.route('/:uuid/education').post((req, res) => {
  req.body.uuid = req.params.uuid
  let sql = `
    insert into
      ${config.database.schema}.resume_education
    set
      uuid = uuid(),
      master_uuid = :uuid,
      school = :school,
      major = :major,
      degree = :degree,
      begin = :begin,
      end = :end
  `
  sequelize.query(sql, {
    replacements: req.body,
    type: sequelize.QueryTypes.INSERT
  }).then(result => {
    res.json({ content: '', message: '', status: 200 })
  }).catch(error => {
    logger.error(error)
    res.json({ content: '', message: '服务器错误', status: 500 })
  })
})

/**
 * 增加工作经历
 */
router.route('/:uuid/career').post((req, res) => {
  req.body.uuid = req.params.uuid
  let sql = `
    insert into
      ${config.database.schema}.resume_career
    set
      uuid = uuid(),
      master_uuid = :uuid,
      company = :company,
      title = :title,
      salary = :salary,
      duty = :duty,
      begin = :begin,
      end = :end
  `
  sequelize.query(sql, {
    replacements: req.body,
    type: sequelize.QueryTypes.INSERT
  }).then(result => {
    if (result[1] === 1) res.json({ content: '', message: '' })
    else res.json({ content: '', message: '操作失败。' })
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误。' })
  })
})

/**
 * 删除教育经历
 */
router.route("/education/:uuid").delete((req, res) =>{
  let sql = `
    delete from
      ${config.database.schema}.resume_education
    where
      uuid = :uuid
  `
  sequelize.query(sql, {
    replacements: { uuid: req.params.uuid },
    type: sequelize.QueryTypes.DELETE
  }).then(result =>{
    res.json({ content: '', message: '' })
  }).catch(err =>{
    logger.error(err)
    res.json({ content: '', message: '' })
  })
})

/**
 * 删除工作经历
 */
router.route("/career/:uuid").delete((req, res) =>{
  let sql = `
    delete from
      ${config.database.schema}.resume_career
    where
      uuid = :uuid
    `
  sequelize.query(sql, {
    replacements: { uuid: req.params.uuid },
    type: sequelize.QueryTypes.DELETE
  }).then(result =>{
    res.json({ content: '', message: '' })
  }).catch(err =>{
    logger.error(err)
    res.json({ content: '', message: '' })
  })
})

/**
 * 查询教育经历
 */
router.route("/:uuid/education").get((req, res) =>{
  let sql = `
    select * from ${config.database.schema}.resume_education where master_uuid = :uuid
  `
  sequelize.query(sql, {
    replacements: { uuid: req.params.uuid },
    type: sequelize.QueryTypes.SELECT
  }).then(result =>{
    res.json({ content: result, message: '' })
  }).catch(err =>{
    logger.error(err)
    res.json({ content: '', message: '' })
  })
})

/**
 * 查询工作经历
 */
router.route("/:uuid/career").get((req, res) =>{
  let sql = `
    select * from ${config.database.schema}.resume_career where master_uuid = :uuid
  `
  sequelize.query(sql, {
    replacements: { uuid: req.params.uuid },
    type: sequelize.QueryTypes.SELECT
  }).then(result =>{
    res.json({ content: result, message: '' })
  }).catch(err =>{
    logger.error(err)
    res.json({ content: '', message: '' })
  })
})

/**
 * 查询个人简历
 */
router.route("/:user_uuid/findResume").get((req, res) => {
  let sql = `
    select name, birthday, gender, phone, email, province, city, date
    from ${config.database.schema}.resume
    where
      user_uuid = :user_uuid
  `
  sequelize.query(sql, {
    replacements: { user_uuid: req.param.user_uuid },
    type: sequelize.QueryTypes.SELECT
  }).then(rows =>{
    res.json({ content: 1, message: '', status: 200 })
  }).catch(err =>{
    logger.error(err)
    res.json({ content: 2, message: '服务器错误', status: 500 })
  })
})

module.exports = router
