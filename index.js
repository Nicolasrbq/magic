var mysql      = require('mysql');
var connection = mysql.createConnection({
  //host     : 'mysql51-97.perso',
  host     : 'localhost',
  user     : 'nicolasryft9216',
  password : 'kADhhdQg',
  database : 'magic-the-gathering'
});

connection.connect();

connection.query('SELECT * from < table name >', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();