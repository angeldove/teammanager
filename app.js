var bodyParser = require('body-parser');
var express = require('express');
var mongoose = require('mongoose');

//-----------------------------------------------------
//  SETUP APP
//-----------------------------------------------------
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const TEAM_MANAGER_MONGODB_URI = process.env.TEAM_MANAGER_MONGODB_URI;
const TEAM_MANAGER_PORT = process.env.TEAM_MANAGER_PORT;

//-----------------------------------------------------
//   CONNECT TO MONGODB
//-----------------------------------------------------
mongoose.connect(TEAM_MANAGER_MONGODB_URI, function(err) {
	if(err) {
		console.log("[ERROR] failed to connect to database: " + err);
	} else {
		console.log("[INFO] Successfully connected to database. ");
	}
});

//-----------------------------------------------------
//   APP ROUTES
//-----------------------------------------------------

app.get('/', function (req, res) {
   	res.sendFile( __dirname + "/public/views/" + "index.html" );
})


//-----------------------------------------------------
//                    START SERVER 
//-----------------------------------------------------
var server = app.listen(TEAM_MANAGER_PORT, function (err) {
   
	if(err) {
		console.log(err);
	} else {

   		var host = server.address().address
   		var port = server.address().port
   
   		console.log("Example app listening at http://%s:%s", host, port)
	}
})