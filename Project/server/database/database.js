import mysql from 'mysql2';

const connection=mysql.createConnection({
    host:'localhost',//127.0.0.1
    user:'root',
    password:'123456789',
    database:'course_advising'
})

export default connection;