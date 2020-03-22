const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'karen',
    database: 'db_users'
});

const mysqlConnection1 = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'karen',
    database: 'db_posts'
});

mysqlConnection.connect(function (err) {
    if(err) {
        console.log(err);
        return
    } else {
        console.log('DB is connected')
    }
});

mysqlConnection1.connect(function (err) {
    if(err) {
        console.log(err);
        return
    } else {
        console.log('DB1 is connected')
    }
});

module.exports = mysqlConnection;