const os = require('os')

const prodConfig = {
  app: {
    env: 'production',
    port: 80,
    secretKey: 'ovaphlow'
  },
  database: {
    user: 'root',
    password: '',
    host: '127.0.0.1',
    database: '',
    schema: 'billboard',
    pool: {
      max: os.cpus().length * 2 + 1,
      min: 0,
      idle: 10000
    },
    packSize: 20000,
    logging: true,
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
    user: 'ovaphlow',
    password: 'ovaph@CDT.1123',
    host: '192.168.1.193',
    database: '',
    schema: 'billboard',
    pool: {
      max: os.cpus().length * 2,
      min: 0,
      idle: 10000
    },
    packSize: 20000,
    logging: false,
    fetchLimit: 100
  }
}

module.exports = develConfig
