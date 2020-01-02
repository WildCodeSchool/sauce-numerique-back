const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mysql=$19',
  database: 'lasaucenumerique',
  multipleStatements: true,
});

connection.connect((err) => {
  if (!err) {
    console.log('Connected');
  } else {
    console.log('Failled');
  }
});

module.exports = connection;
