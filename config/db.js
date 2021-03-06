
const mysql = require('mysql2/promise');

var pool = mysql.createPool({
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'b856c1f3726614',
    password: '90aac0a1',
    port: 3306,
    database: 'heroku_8eca68ba256ba54'
});

module.exports = pool;


/*
var conexao = mysql.createConnection({
    host: 'us-cdbr-east-03.cleardb.com',
    username: 'b856c1f3726614',
    password: '90aac0a1',
    name: 'reserveiapp',
    driver: 'MySql',
    port: 3306,
    database: 'heroku_8eca68ba256ba54',
    previewLimit: 50
});

module.exports = conexao;
*/