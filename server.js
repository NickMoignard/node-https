/*
	Setting up Express over HTTPS!
	We are using a self signed certificate. (created with openssl)
*/

// BASE SETUP ================================================================
var express = require('express'),
	https = require('https'),
	fs = require('fs'),
	morgan = require('morgan');

var port = process.env.PORT || 55555; 


// Grab the Certificate information
var options = {
	key: fs.readFileSync("key.pem"),
	cert: fs.readFileSync("cert.pem")
}

// Initialize an express router
var app = express();



// BASE APP ==================================================================
// MIDDLEWARE 
app.use(morgan('dev'));  // log all requests to the console

// BASE ROUTES 
app.get('/', function(req, res) {
	res.header('Content-type', 'text/html');
	return res.end('<h1>welcome to an extremely secure home page!</h1>');
});


// Initialize the server


//START THE SERVER ===========================================================
https.createServer(options, app).listen(port);
console.log('port: '+ port);




















