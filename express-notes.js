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
  res.send('Helloworld!');  //for a string
  res.json(objectNameHere); //for an object
  res.render('index');      //renders a file
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

npm install nodemon -g  //install nodemon
npm install ejs --save  //install ejs

app.set('view engine', 'ejs');  //create views
app.set('views', path.join(__dirname, 'views'));

mkdir views             //create views directory
touch views/index.ejs   //create an ejs file

//injection
app.get('/', function(req, res){    //pass something through the render as an object
  res.render('index', {
    title: "Customers",
    description: "People we use to take money from so we can put our kids through college"
  });
});
<h4><%= title %></h4>   //inject something into ejs

<% include directoryName/file %>    //inculde a partial

//making a variable in root.js to use on views
var arrObjects = [{dog: "good"}, {cat: "bad"}];   //example
res.render('index', {
  preExistingObj: 'example',
  arrObjects: nameForViews
})

<ul>                                      //interating in the views
<% users.forEach(function(user){  %>
  <li><%= user.first_name %></li>
<% }) %>
</ul>
