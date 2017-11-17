var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var expressValidator = require('express-validator');
/*
var logger = function(req, res, next){
  console.log("Logging....");
  next();
}
app.use(logger);
*/

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//set static app
app.use(express.static(path.join(__dirname, 'public')));

//auth middleware
app.use(expressValidator(middlewareOptions));


var users = [
  {
    id: 1,
    first_name: 'Justin',
    last_name: 'Lattimore',
    email: 'jlattimor3@nunyobiz.com'
  },
  {
    id: 2,
    first_name: 'Josh',
    last_name: 'Ryker',
    email: 'jryker@nunyobiz.com'
  },
  {
    id: 3,
    first_name: 'Jazmine',
    last_name: 'Savage',
    email: 'jSavage@nunyobiz.com'
  }
]

app.get('/', function(req, res){
  res.render('index', {
    title: "Customers",
    description: "People we use to take money from so we can put our kids through college",
    users: users
  });
});

app.post('/users/add', function(req, res){

  req.checkBody(first_name).notEmpty();

  var errors = req.validationErrors();

  if(errors){
    console.log('ERRORS');
  }else{
    var newUser = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    };
    console.log('SUCCESS');
  }
});

app.listen(3000, function(){
  console.log("server started on port 3000");
});
