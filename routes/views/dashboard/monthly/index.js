
var express = require('express');
var app = module.exports = express();

// Display html
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);

app.get('/dashboard', function(req, res) {
	res.render('dashboard.html');
});