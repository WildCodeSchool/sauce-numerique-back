
require('dotenv').config();

module.exports = 
{
  "development": {
    "username": process.env.JAWSDB_USER,
    "port": process.env.JAWSDB_PORT,
    "password": process.env.JAWSDB_PASSWORD,
    "database": process.env.JAWSDB_DATABASE,
    "host": process.env.JAWSDB_HOST,
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
    "username": process.env.JAWSDB_USER,
    "port": process.env.JAWSDB_PORT,
    "password": process.env.JAWSDB_PASSWORD,
    "database": process.env.JAWSDB_DATABASE,
    "host": process.env.JAWSDB_HOST,
    "dialect": "mysql"
  }
}
