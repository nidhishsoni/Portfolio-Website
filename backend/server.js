const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'YOUR_PASSWORD',
    database: 'portfolio'
});

db.connect((err) => {
    if(err){
        console.log(err);
    } else {
        console.log('MySQL Connected');
    }
});

app.get('/projects', (req, res) => {
    db.query('SELECT * FROM projects', (err, result) => {
        if(err){
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});