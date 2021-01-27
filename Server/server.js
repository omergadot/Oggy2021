var express = require('express');
var history = require('connect-history-api-fallback');
var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var startDb = require('./DAL/database');

var httpPort = process.env.HTTP_PORT || 8080;

var cors = require('cors');

startDb().catch(console.dir);

var app = express();
app.use(cors());
app.use(history());

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(bodyParser.json({limit: '50mb'}))


app.use(express.static(__dirname + '/dist/'))
require('./routes.js')(app,express);

// https.createServer(options, app).listen(httpsPort);
http.createServer(app).listen(httpPort);

// console.log("https Server is live and running at port: " + httpsPort);
console.log("http Server is live and running at port: " + httpPort);

