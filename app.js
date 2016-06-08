//require('/Mean/api/data/dbconnection.js').open(); //mongodb connection 
require('/Mean/api/data/db.js'); //moongose 
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

var routes = require('./api/routes');

app.set('port',3000);

app.use(function(req,res,next){
	console.log(req.method, req.url);
	next();

});

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({extended:false}));

app.use('/api',routes);

var Server =  app.listen(app.get('port'),function() {
	var port = Server.address().port;
console.log('Magic happens on port ' + port);	
});
