var http = require('http');
var geoip = require('geoip-lite');

var ip = "207.97.227.239";
var geo = geoip.lookup(ip);

console.log(geo);

//create a server object:
http.createServer(function (req, res) {
    console.log(req.connection.remoteAddress);
    res.write('Hello World!'); //write a response
    res.end(); //end the response
}).listen(80, function () {
    console.log("server start at port 3000"); //the server object listens on port 3000
});