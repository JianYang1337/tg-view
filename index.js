const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');

const app = express();
const port = 3000;



app.use(express.static('public'));
app.use(bodyParser.json());

const client = new pg.Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123',
    database: 'messenger'
});

client.connect((err) => {
    if (err) {
      console.error('connection error')
    } else {
      console.log('connected')
    }
});

app.post('/signUp', (req, res) => {
    client.query(`
        INSERT INTO messenger.users (
            login, 
            password, 
            first_name, 
            last_name
        ) 
        VALUES (
            '${req.body.login}',
            '${req.body.password}',
            '${req.body.firstName}',
            '${req.body.lastName}'
        )`, (err, data) => {
        if (err) {
            console.log("error", err);
            return;
        };
        console.log("data", data);
    });

    res.json({
        "result": true
    });
});

// app.post('/signIn', (req, res) => {
//     client.query(`
//         SELECT 
//             id 
//         FROM messenger.users 
//         WHERE 
//             login = '${req.body.login}'  
//             AND password = '${req.body.password}'
//     `, (err, data) => {
//         if (err) {
//             console.log("error", err);
//             return;
//         };
//         console.log("data", data);
//     }); 
// });



app.listen(port);