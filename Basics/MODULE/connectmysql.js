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
});


//fetch data from database
database.query('SELECT * FROM test', (err, result) => {
    if(err){
        console.warn('Error fetching data from database');
    }
    else{
        console.warn(result);
    }
});

