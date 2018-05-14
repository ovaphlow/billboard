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
    idle: config.database.pool.idle,
    acquire: 60000,
  },

})

module.exports = sequelize