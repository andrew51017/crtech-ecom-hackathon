var generateServices = require('loopback-sdk-angular').services;
var app = require('./server/server');

var client = generateServices(app, 'lbServices', 'curo-api.herokuapp.com/');
require('fs').writeFileSync('api.js', client, 'utf-8');
