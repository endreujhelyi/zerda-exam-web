'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var cors = require('cors')
var validator = require('./validator.js');

var app = express();
app.use(bodyParser.json());
app.use(cors());


var connection = mysql.createConnection({
  host: "localhost",
  user: "'root'",
  password: "szomoruszamuraj",
  database: "secretprojects"
});

connection.connect(function(err){
  if(err){
    console.log("Oups, Cannot connect to database!", err);
    return;
  }
  console.log("Connected!");
});


app.post('/exam', function(req, res) {

  var scale = parseInt(req.body.scale);
  var text = req.body.feedback;
  var email = req.body.email;
  var valid = validator(email, scale, text);

  if (!valid) {
    console.log('nem valid');
    res.status(400);
    var response = {
      "status": "error",
      "message": "thank you"
    }
    res.send(response);
  } else {
    console.log('valid');
    connection.query(
      `SELECT project_name FROM projects`, function(err, rows) {
        if(!err) {
          var rowsText = rows.map(function(row) {
            return row.project_name;
          })
          res.send({
            "status": "ok",
            "projects": rowsText
        })
      }
    })
  }
});








app.listen(3000, function () {
  console.log('Server is running on PORT: 3000');
})
