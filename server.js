// Initialize npm

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

var PORT = process.env.PORT || 8080;

// app.use(express.static(__dirname, './app/public'));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(bodyParser.text());


// API and HTML routes

app.use(express.static('./app/public'));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});