const mysql = require('mysql2/promise');

const config = require('../config')

module.exports = mysql.createPool({
    connectionLimit: config.database.pool.max,
    user: config.database.user,
    password: config.database.password,
    host: config.database.host,
    database: config.database.database,
    dateStrings: true
});
