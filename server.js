var express = require('express');
var app = express();
app.use(express.static(__dirname + '/documentation'));

app.listen(80);
