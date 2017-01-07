var mysql      = require('mysql');
var connection = mysql.createConnection({
    //host     : 'mysql51-97.perso',
    host     : '127.0.0.1',
    port     : '8888',
    user     : 'nicolasryft9216',
    password : 'kADhhdQg',
    database : 'magic-the-gathering'
});

connection.connect(function(err){
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    } 
    console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM edition WHERE 1', function(err, rows) {
    if(!err) {
        console.log(rows);
    } else {
        console.error(err);
    }
});

connection.end();