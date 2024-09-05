var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

// Get the client
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'travel',
  password: "P@ssw0rd",
  port: 3344,
});

app.get('/testdb', function (req, res, next) {
  // A simple SELECT query
  connection.query(
    'SELECT * FROM `attractions` WHERE `id` > 1',
    function (err, results, fields) {
      res.json({msg: results})
      
    }
  );

  
})

app.get('/test', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(3333, function () {
  console.log('CORS-enabled web server listening on port 80')
})
