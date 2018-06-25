const Sequelize = require('sequelize')

const config = require('../config')

const sequelize = new Sequelize(config.database.database, config.database.user, config.database.password, {
  dialect: 'mysql',

  host: config.database.host,

  port: 3306,

  logging: config.database.logging,

  // disable inserting undefined values as NULL
  // - default: false
  omitNull: true,

  // pool configuration used to pool database connections
  pool: {
    max: config.database.pool.max,
    min: config.database.pool.min,
    idle: config.database.pool.idle,
    acquire: 1000, // 默认10000
  },

})

module.exports = sequelize