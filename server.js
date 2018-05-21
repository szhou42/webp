const express = require('express');
var cors = require('cors')
var mongoose = require("mongoose");

const app = express();
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({extended: false}))

const port = 5000;


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/shuakedb");

var shuake_task_schema = new mongoose.Schema({
  email: String,
  netid: String,
  password: String,
  courseNumber: String,
  crn1: String,
  crn2: String,
  crn3: String
});

var SHUAKE_TASK= mongoose.model("SHUAKE_TASK", shuake_task_schema);

app.post('/add', (req, res) => {
  console.log('get post request, hello from express')
  console.log('body: ', req.body)

  // Write form into database
  task_data = new SHUAKE_TASK(req.body)

  task_data.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
