// mysql-test-query.js

var mysql = require('mysql');

var connection = mysql.createConnection( {
	host      : 'localhost',
	user      : 'root',
	password  : 'admin',
	database  : 'test'
});

connection.connect();

// var queryString = "select * from sacramentocrimejanuary2006 LIMIT 10";
var searchString = '%' + 'grand theft' + '%';
// var queryString = "select count(*) from sacramentocrimejanuary2006 where crimedescr like " + connection.escape(searchString);
var queryString = "select count(*) as totalRows from sacramentocrimejanuary2006 where crimedescr like " + connection.escape(searchString);



connection.query(queryString, function(err, rows, fields) {
	if (err) throw err;
	// for (var i in rows) {
	// 	console.log('Crime: ', rows[i]);
	// }
	console.log('Number of found result rows was ', rows[0].totalRows);

});

connection.end();