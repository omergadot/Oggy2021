var express = require('express');
var history = require('connect-history-api-fallback');
var https = require('https');
var http = require('http');
var fs = require('fs');


// var key = fs.readFileSync(__dirname + '/encryption/private.key');
// var cert = fs.readFileSync(__dirname + '/encryption/certificate.crt');
// var ca = fs.readFileSync(__dirname +  '/encryption/ca_bundle.crt');

// var competitorsList = JSON.parse(fs.readFileSync('99999.json', 'utf8'));
// let newCompsArr = []
// competitorsList.forEach(comp => {
//     if (comp.hasOwnProperty('organizer_username')) {
//         newCompsArr.push(comp)
//     }
// });
// const fields = ['phone', 'organizer_username', 'club','name'];
// const opts = { fields };

// console.log(newCompsArr.length)

// const parser = new Parser(opts);
// const csv = parser.parse(newCompsArr);

// fs.writeFile('name.csv', csv, err => {
//     if (err) return console.log(err);
//     console.log('FILE SUCCESSFULLY WRITTEN!\n');
// });


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


http.createServer(app).listen(httpPort);

console.log("http Server is live and running at port: " + httpPort);

