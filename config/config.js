
require('dotenv').config();

module.exports = 
{
  "development": {
    "username": process.env.MYSQL_USER,
    "port": process.env.MYSQL_PORT,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
  },
  "production": {
    "username": process.env.MYSQL_USER,
    "port": process.env.MYSQL_PORT,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql"
  }
}
