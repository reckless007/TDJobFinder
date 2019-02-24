const express = require('express');
const mysql = require('mysql');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var logger = require('morgan');
var cors = require('cors');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());


var con = mysql.createConnection({
    // properties
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'JobDB'
});
con.connect(function (error) {
    if (!!error) {
        console.log('Error');
    } else {
        console.log('Connected');
    }

    app.post('/adds', (req, res) => {
        //res.send('Hello World');

        var Company = req.body.name1;
        var Require = req.body.degree1;
        var Email = req.body.email1;

        var sql = 'INSERT INTO CompanyTB (Company,Requirements,Email) VALUES ("' + Company + '","' + Require + '","' + Email + '")';

        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });

    });

    app.post('/add2', (req, res) => {
        //res.send('Hello World');
        var Name = req.body.name;
        var Quali = req.body.quali;
        var Email = req.body.email;
        var Contact = req.body.contact;
        var age = req.body.age;
        var college = req.body.col1;
        var code = req.body.degree;
        var project = req.body.pg;
        var cgpa = req.body.cgpa1;
        var exp = req.body.num1;
        var status = req.body.status1;
        var skill = req.body.skill1;

        var sql = 'INSERT INTO AdbTB (Name,Degree,Email,Contact,age,college,code,project,cgpa,exp,status,skill) VALUES ("' + Name + '","' + Quali + '","' + Email + '","' + Contact + '","' + age + '","' + college + '","' + code + '","' + project + '","' + cgpa + '","' + exp + '","' + status + '","' + skill + '")';

        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });

    });

    app.get('/getUsera', (req, res) => {
        


        var sql = 'SELECT * FROM AdbTB ';

        con.query(sql, function (err, result) {
            res.send(result)

            console.log(sql);
        });
    })


    app.get('/getUsers', (req, res) => {


        var sql = `SELECT * FROM CompanyTB  `

        con.query(sql, function (err, result) {
            res.send(result)

            console.log(sql);
        });
    })


});
const port1 = process.env.PORT || 3000;
var server = app.listen(port1, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
