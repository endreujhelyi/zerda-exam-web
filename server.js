'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors')
const validator = require('./validator.js');

const app = express();
app.use(bodyParser.json());
app.use(cors());



const connection = mysql.createConnection({
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

  const scale = parseInt(req.body.scale);
  const text = req.body.feedback;
  const email = req.body.email;
  const valid = validator(email, scale, text);

  if (!valid) {
    res.status(400);
    var response = {
      "status": "error",
      "message": "thank you"
    }

    res.send(response);

  } else {
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
