//connect to mysql database
const mysql = require('mysql');

//create connection
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test'
})
//if connection fails throw error message and exit

database.connect((err) => {
    if(err){
        console.warn('Error connecting to database');
    }
    else{
        console.warn('Connected to database')
    }
})
