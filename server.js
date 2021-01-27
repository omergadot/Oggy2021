var express = require('express');
var history = require('connect-history-api-fallback');
// var https = require('https');
var http = require('http');
// var fs = require('fs');

// var key = fs.readFileSync(__dirname + '/encryption/privkey.pem');
// var cert = fs.readFileSync(__dirname + '/encryption/cert.pem');


// var options = {
//     key: key,
//     cert: cert,
// };

// var httpsPort = process.env.HTTPS_PORT || 9000;
var httpPort = process.env.HTTP_PORT || 8080;

var cors = require('cors');

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

