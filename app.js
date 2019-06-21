/*
* Setup express server by assigning it a port and routes
*/
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const PORT = 3000;

var app = express();
app.set("view engine", "jade");
//Format the body of requests using JSON
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

//Assign routes
app.use('/', routes);

//Start server
app.listen(PORT);
console.log("app running on port " + PORT);