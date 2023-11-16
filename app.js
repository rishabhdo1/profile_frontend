const express = require("express");
const path = require("path")
const mysql = require("mysql");
const app = express();
const multer = require('multer')
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const ejs = require('ejs');

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'html');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"rishabh@5678",
    database:"testing"
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("MYSQL CONNECTED")
    }
})
// Define Routes
app.use('/', require('./routes/pages'));
app. use('/auth', require('./routes/auth'));

    
app.listen(5000)    