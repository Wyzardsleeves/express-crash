//start the app
npm init                          //initialize an node app
npm install express --save        //installs express
npm install body-parser --save    //installs a package that helps to handle form data
"dependencies": {                 //manually add packager
  "packagename": "*",
  "packagename2": "*"
}

//add file
touch rootDir/index.js           //creates root file
var express = require('express');   //includes express
var app = express();                //uses express for funtions

app.get('/', function(req, res){    //uses send method to print out something onto the screen
  res.send('Helloworld!');
});
app.listen(3000, function(){        //exports app to port 3000
  console.log("server started on port 3000");
});

// middleware
var logger = function(req, res, next){    //middleware has to acurr before app.get('/', funtion)
  console.log("Logging....");
  next();
}
app.use(logger);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//install nodemon
npm install nodemon -g
