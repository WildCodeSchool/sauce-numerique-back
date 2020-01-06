
const express = require('express');
const Router = express.Router();
const { Partners } = require('./models');

Router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM partenaire', (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

module.exports = Router;
