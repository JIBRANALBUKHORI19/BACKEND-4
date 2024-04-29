const mysql = require("mysql2");

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'mahasiswa'
});
connection.connect(error =>{
    if (error) throw error;
    console.log("Server Aktif boss")
});
module.exports=connection;