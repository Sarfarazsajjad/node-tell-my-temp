// var http = require('http');
// var geoip = require('geoip-lite'); //https://github.com/bluesmoon/node-geoip

// var ip = "39.50.146.186";
// var geo = geoip.lookup(ip);

// console.log(geo);
// var port = process.env.PORT || 3000;
// //create a server object:
// http.createServer(function (req, res) {
//     console.log(req.connection.remoteAddress);
//     let ip = req.connection.remoteAddress.replace(/^.*:/, '');
//     let response = ip + " " + geoip.lookup(ip);;
//     res.write(response); //write a response
//     res.end(); //end the response
// }).listen(port, function () {
//     console.log("server start at port "+[port]); //the server object listens on port 3000
// });

const express = require('express');
const app = express();
const expressip = require('express-ip');
const PORT = process.env.PORT || 7000;

app.use(expressip().getIpInfoMiddleware);


app.set("PORT", PORT);

app.get('/', function (req, res) {
    res.send(req.ipInfo);
});

app.listen(app.get('PORT'), function () {
    console.log('Express started on http://localhost:' +
        app.get('PORT') + '; press Ctrl-C to terminate.');
});