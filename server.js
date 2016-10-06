var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('crowded-pheasant');
});

app.get('/crowded-pheasant', function(request, response){
    response.send('crowded-pheasant');
});

app.listen(process.env.PORT || 4000);