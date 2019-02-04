var express = require('express');
var app = express();
var routes = require('./routes/routes');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.locals.pagetitle = "Awesome Website";

app.get('/', routes.index);
app.get('/about', routes.about);

app.get('*', function(req, res) {
  res.send('Bad Route');
});

var server = app.listen(3001, function() {
  console.log("Listening on port 3001")
});
