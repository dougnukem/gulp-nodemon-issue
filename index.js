var connect = require('connect');
var path = require('path');
connect.createServer(
    connect.static(path.join(__dirname,'public'))
).listen(8080);

console.log("SERVER RUNNING PORT 8080");