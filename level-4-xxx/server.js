var app = require('../app')
var http = require('http');
// Get port from environment and store in Express
var port = normalizePort(process.env.PORT || 8080);
app.set('port', port);
// Create HTTP server
var server = http.createServer(app);