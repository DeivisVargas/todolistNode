const mysql = require('mysql2/promise');

require('dotenv').config();

console.log(process.env.MYSQL_HOST);
console.log(process.env.MYSQL_PASSWORD);
console.log(process.env.MYSQL_USER);
//criando a conexao
const  connection = mysql.createPool({
    host        : process.env.MYSQL_HOST ,
    user        : process.env.MYSQL_USER ,
    password    : process.env.MYSQL_PASSWORD,
    database    : process.env.MYSQL_DATABASE
})

module.exports = connection;