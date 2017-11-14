var express = require('express');

var app = express();
var port = 5000;

app.use(express.static('server/public'));

app.listen(5000, function(){
    console.log('listening on port', port);
});