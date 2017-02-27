/// import 'node'
require('dotenv').config()

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

//enabling cors
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// set the routes =============================
//router from express append all its routes and middleware to app.use('/api'), so if
//for loggedRoutes it will apply same middleware, thats a problem, what
// we need is to apply middleware to certain routes, so we need to use instead app.use('/api/{certainroute}')
// check routes directory files to see how we can accomplish this
// app.use('/api',require('./built/routes/genRoutes.js'));
// app.use('/api2',require('./built/routes/loggedRoutes.js'));
app = require('./built/routes/genRoutes.js').addRoutes(app);
app = require('./built/routes/loggedRoutes.js').addRoutes(app);
app = require('./built/routes/errorRoutes.js').addRoutes(app);

module.exports = app;
