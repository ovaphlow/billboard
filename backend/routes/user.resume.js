const express = require('express')
const log4js = require('log4js')

const config = require('../config')
const sequelize = require('../util/sequelize')

const logger = log4js.getLogger()
logger.level = 'debug'

const router = express.Router()

/**
 * 职位对应简历列表
 * 需要调整表结构
 */
router.route('/job/:uuid/').get((req, res) => {
  let sql = `

  `
  sequelize.query(sql, {
    replacements: {},
    type: sequelize.QueryTypes.SELECT
  }).then(result => {
    res.json({ content: result, message: '' })
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误。' })
  })
})

/**
 * 增加个人档案
 */
router.route('/:id/addResume').post((req, res) => {
  let sql = `
    insert into 
    ${config.database.schema}.user_resume(name, sex, phone, e_mail, address, birthday, user_id, personal)
    values(:name, :sex, :phone, :e_mail, :address, :birthday, :id, :personal)
  `
  sequelize.query(sql, {
    replacements: { 
      id: req.params.id,
      name: req.body.name,
      sex: req.body.sex,
      birthday: req.body.birthday,
      phone: req.body.phone,
      e_mail: req.body.e_mail,
      address: req.body.address,
      personal: req.body.personal
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
 * 查询全部档案
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
    console.log(req.params.id);
    logger.error(error)
    res.json({ content: '', message: '服务器错误', status: 500 })
  })
})

/**
 *  根据部门id 查询所投入部门简历
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
 * 修改个人档案
 */
router.route('/:id/updateResume').post((req, res) => {
  let sql = `
    update ${config.database.schema}.user_resume set 
      name = :name,
      sex = :sex,
      phone = :phone,
      e_mail = :e_mail,
      address = :address,
      birthday = :birthday,
      personal = :personal
    where id = :id
  `
  sequelize.query(sql, {
    replacements: { 
      id: req.body.id,
      name: req.body.name,
      sex: req.body.sex,
      phone: req.body.phone,
      birthday: req.body.birthday,
      e_mail: req.body.e_mail,
      address: req.body.address,
      personal: req.body.personal
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

/**
 * 增加教育经历
 */
router.route('/addEducation').post((req, res) => {
  let sql = `
    insert into ${config.database.schema}.education_experience(school, qualifications, 
      intake, graduation_time, major_name, userId)
    values(:school, :qualifications, :intake, :graduation_time, :major_name, :userId)
  `
  sequelize.query(sql, {
    replacements: {
      userId: req.body.userId,
      school: req.body.school,
      qualifications: req.body.qualifications,
      intake: req.body.intake,
      graduation_time: req.body.graduation_time,
      major_name: req.body.major_name
    },
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
router.route('/addWork').post((req, res) => {
  let sql = `
    insert into ${config.database.schema}.work_experience(company_name, station, hiredate, leavedate, income, userId)
    values(:company_name, :station, :hiredate, :leavedate, :income, :userId)
  `
  sequelize.query(sql, {
    replacements: {
      userId: req.body.userId,
      company_name: req.body.company_name,
      station: req.body.station,
      hiredate: req.body.hiredate,
      leavedate: req.body.leavedate,
      income: req.body.income
    },
    type: sequelize.QueryTypes.INSERT
  }).then(rows => {
    res.json({  content: '', message: '', status: 200 })
  }).catch(err => {
    res.json({ content:'', message: '服务器错误', status: 500 })
  })
})


/**
 * 修改工作经历
 */
router.route("/updateWork").post((req, res) =>{
  let sql = `
    update ${config.database.schema}.work_experience
    set
    company_name = :company_name,
    station = :station,
    hiredate = :hiredate,
    leavedate = :leavedate,
    income = :income
    where
    id = :id
  `
  sequelize.query(sql, {
    replacements: {
      id: req.body.id,
      company_name: req.body.company_name,
      station: req.body.station,
      hiredate: req.body.hiredate,
      leavedate: req.body.leavedate,
      income: req.body.income
    },
    type: sequelize.QueryTypes.UPDATE
  }).then(result =>{
    res.json({content:'', message:'', status:200})
  }).catch(err =>{
    logger.error(err)
    res.json({content:'',message:'',status:500})
  })
})


/**
 * 修改教育经历
 */
router.route("/education").post((req, res) =>{
  let sql = `
    update ${config.database.schema}.education_experience
    set
    school = :school,
    qualifications = :qualifications,
    intake = :intake,
    graduation_time = :graduation_time,
    major_name = :major_name
    where 
    id = :id
  `
  sequelize.query(sql, {
    replacements: {
      id: req.body.id,
      school: req.body.school,
      qualifications: req.body.qualifications,
      intake: req.body.intake,
      graduation_time: req.body.graduation_time,
      major_name: req.body.major_name
    },
    type: sequelize.QueryTypes.UPDATE
  }).then(result =>{
    res.json({content:'', message:'', status:200})
  }).catch(err =>{
    logger.error(err)
    res.json({content:'',message:'',status:500})
  })
})

/**
 * 删除教育经历
 */
router.route("/:id/deleteEducation").get((req, res) =>{
  let sql = `
      delete from ${config.database.schema}.education_experience
      where
      id = :id  
    `
  sequelize.query(sql, {
    replacements: {
      id: req.params.id
    },
    type: sequelize.QueryTypes.DELETE
  }).then(result =>{
    res.json({content:'', message:'', status:200})
  }).catch(err =>{
    logger.error(err)
    res.json({content:'',message:'',status:500})
  })
})

/**
 * 删除工作经历
 */
router.route("/:id/deleteWork").get((req, res) =>{
  let sql = `
      delete from ${config.database.schema}.work_experience
      where
      id = :id  
    `
  sequelize.query(sql, {
    replacements: {
      id: req.params.id
    },
    type: sequelize.QueryTypes.DELETE
  }).then(result =>{
    res.json({content:'', message:'', status:200})
  }).catch(err =>{
    res.json({content:'',message:'',status:500})
  })
})


/**
 * 查询教育经历
 */
router.route("/:userId/findEducation").get((req, res) =>{
  let sql = `
      select school, qualifications, intake, graduation_time, major_name from ${config.database.schema}.education_experience
      where
      userId = :userId  
    `
  sequelize.query(sql, {
    replacements: {
      userId: req.params.userId
    },
    type: sequelize.QueryTypes.SELECT
  }).then(rows =>{
    res.json({content: rows, message:'', status:200})
  }).catch(err =>{
    logger.error(err)
    res.json({content:'',message:'',status:500})
  })
})


/**
 * 查询工作经历
 */
router.route("/:userId/findWork").get((req, res) =>{
  let sql = `
      select company_name, station, hiredate, leavedate,income 
      from ${config.database.schema}.work_experience
      where
      userId = :userId  
    `
  sequelize.query(sql, {
    replacements: {
      userId: req.params.userId
    },
    type: sequelize.QueryTypes.SELECT
  }).then(rows =>{
    res.json({content: rows, message:'', status:200})
  }).catch(err =>{
    logger.error(err)
    res.json({content:'',message:'',status:500})
  })
})

module.exports = router
