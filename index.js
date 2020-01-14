'use strict';

const express = require('express')
const http = require('http')

var app = express();
var server;

app.set('port',process.env.PORT || 8080);
app.use(express.static('www'));

server = http.createServer(app)
server.listen( app.get('port'), ()=>{ console.log(`Listening on port ${app.get('port')}`)} );