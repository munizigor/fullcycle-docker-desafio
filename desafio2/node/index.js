const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
    multipleStatements: true
}   

app.get('/', (req,res) =>{
    const connection = mysql.createConnection(config);
    connection.connect((err) => {
        if (err) {
          console.log("Database Connection Failed !!!", err);
        } else {
            console.log("Connected!")
        const query = `INSERT INTO people (name) values ('Jamila'); SELECT name FROM people;`;
        connection.query(query, function (err, result){
            if (err) throw err;
            console.log(result);
            res.send(`<h1>Olá Mundo! Rodando meu primeiro app em Node.js</h1> ${result}`);
        }).end()
        }
    });
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
})