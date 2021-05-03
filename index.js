var express = require('express');
var app = express();

var config = require('./config');
var twit = require('twit');
var T = new twit(config);

app.listen(3000, () => {
    console.log('Server started');
})

app.get('/', (request, response) => {
    const lastUCL = new Date(1433622902000)
    const currentDate = Date.now();

    const days = (currentDate - lastUCL) / 1000 / 60 / 60 / 24;

    T.post('statuses/update', { status: days.toFixed().toString() });
    response.send('DONE');
})
