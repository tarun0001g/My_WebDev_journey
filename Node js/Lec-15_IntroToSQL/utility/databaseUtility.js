
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'alex1826',
  database: 'airbnb'
});

module.exports = pool.promise();