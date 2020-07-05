var mysql = require('mysql');

var pool  = mysql.createPool({
  connectionLimit : 10,
  queueLimit: 100,
  host : '10.115.32.3',
  port : 3306,
  user : 'node_mysql_user',
  password : '1gFb6GvKIeOAX1RC',
  database : 'node_mysql_example',
  connectTimeout : 10000,
  waitForConnections: true,
  acquireTimeout: 10000,
  debug : false
});

pool.on('connection', function (connection) {
  console.log('MySQL DB Connection established');
});

pool.on('acquire', function (connection) {
  console.log('Connection %d acquired', connection.threadId);
});

pool.on('enqueue', function () {
  console.log('Waiting for available connection slot...');
});

pool.on('release', function (connection) {
  console.log('Connection %d released', connection.threadId);
});

module.exports = pool;
