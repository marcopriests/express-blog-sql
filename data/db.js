const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db_posts'
})

connection.connect((err) => {
    if (err) {
        console.log(`Errore: ${err}`)
    } else {
        console.log('Connected to MySQL!')
    }
})

module.exports = connection