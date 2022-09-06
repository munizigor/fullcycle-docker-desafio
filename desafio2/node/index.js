const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
// const connection = mysql.createConnection(config)

// const sqlInsert = `INSERT INTO people(name) values ('Igor')`
// connection.query(sqlInsert)
// connection.end()    

// const sqlSelect = async() => {
//     try{
//         const query = `SELECT name FROM people`
//         const selectResult = await connection.query(query)
//         return selectResult 
//     }
//     catch (err) {
//         throw err;
//     }
// }

app.get('/', (req,res) =>{
    res.send('<h1>Olá Mundo! Rodando meu primeiro app em Node.js</h1>')
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})