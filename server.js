var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require('express-session');

var app = express();

// express static
app.use(express.static(path.join(__dirname, '/client/dist')));

// views
app.set('views', path.join(__dirname, './client/views'));

// db
// require('./server/config/mongoose.js');

// body-parser
// MUST BE ABOVE ROUTES
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// session
// MUST BE ABOVE ROUTES
var sessionStore = new session.MemoryStore;

app.use(session({
    cookie: { maxAge: 60000 },
    saveUninitialized: true,
    store: sessionStore,
    resave: false,
    secret: 'doublesecretsessionkey'
}));

// routes
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

// run server
var server = app.listen(8000, function()
{
    console.log("***** server running on port 8000");
});



// animation: https://tympanus.net/Development/AnimatedHeaderBackgrounds/
// image: https://www.spacetelescope.org/images/heic0006b/