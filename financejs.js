
var express = require('express'),
	entries = require('./routes/entries'),
	dashboard = require('./routes/views/dashboard/monthly');;

var port = process.env.PORT || 3000;

var app = express();

// configuration
app.configure(function () {
    app.set('port', port);
    app.use(express.static(__dirname + '/public'));
});

// get entries
app.get('/entries', entries.all);

// call dashboard
app.use(dashboard);

// redirect root to dashboard
app.get('/', function (req, res) {
    res.redirect('/dashboard');
});


app.listen(port);
console.log('financejs is listening on port ' + port);