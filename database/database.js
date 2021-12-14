// ket noi database
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '01266547111Sss',
    database: 'horizone'
});
connection.connect((err) => {
    if(!err){
        console.log("Database in connected");
    }else{
        console.log("Database connect error");
    }
});
module.exports = connection;