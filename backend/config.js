const os = require('os')

const prodConfig = {
  app: {
    env: 'production',
    port: 8000,
    secretKey: 'ovaphlow'
  },
  database: {
    user: 'root',
    password: '',
    host: '127.0.0.1',
    database: '',
    schema: 'billboard',
    pool: {
      max: os.cpus().length * 2,
      min: os.cpus().length * 2,
      idle: 30000,
      acquire: 10000
    },
    packSize: 20000,
    logging: false,
    fetchLimit: 100
  }
}

const develConfig = {
  app: {
    env: 'development',
    port: 8000,
    secretKey: 'ovaphlow'
  },
  database: {
    user: 'billboard',
    password: 'billb@CDT.1123',
    host: '118.24.1.214',
    database: '',
    schema: 'billboard',
    pool: {
      max: os.cpus().length * 2,
      min: 0,
      idle: 30000,
      acquire: 10000
    },
    packSize: 20000,
    logging: false,
    fetchLimit: 100
  }
}

module.exports = develConfig
