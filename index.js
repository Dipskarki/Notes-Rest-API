const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./config/database.config.js');

const app = express();
const bodyParser = require('body-parser');

//app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json());

app.use('/', require('./routes/index'));

mongoose.Promise = global.Promise;

//Database connection
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...');
  process.exit();
});

//Error handling middleware
app.use(function(err, req, res, next){
  res.status(422).send({error: err.message})
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});