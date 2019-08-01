var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  CandidateTask = require('./api/models/imsModel'), //created model loading here
  UserTask = require('./api/models/userModel');
  bodyParser = require('body-parser'),
  nodemailer = require("nodemailer"),
  bcrypt = require("bcrypt"),
  jwt = require("jsonwebtoken"),
  cors = require("cors");
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/sample',{useNewUrlParser: true}); //change dbname for application need
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin',"*");
  res.header('Access-Control-Allow-Method','GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
var candidateRoutes = require('./api/routes/imsRoutes'); //importing route
var userRoutes = require('./api/routes/userRoutes')
var mailRoutes = require('./api/routes/sendMailRoutes');
candidateRoutes(app); //register the route
userRoutes(app);
mailRoutes(app);
app.listen(port);
console.log('todo list RESTful API server started on: ' + port);
