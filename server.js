const express = require('express');
const app = express();
const expressip = require('express-ip');
let request = require('request');
const PORT = process.env.PORT || 7000;

app.use(expressip().getIpInfoMiddleware);


app.set("PORT", PORT);

app.get('/', function (req, res) {

    let apiKey = 'd05a110e78ce5a43d04036bcd50c2af4';
    console.log(req.ipInfo);
    let city = req.ipInfo.city;

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

    request(url, function (err, response, body) {
        if (err) {
            console.log('error:', error);
        } else {
            let weather = JSON.parse(body)
            console.log(weather)
            let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
            console.log(message);
            res.send(message);
        }
    });
});

app.listen(app.get('PORT'), function () {
    console.log('Express started on http://localhost:' +
        app.get('PORT') + '; press Ctrl-C to terminate.');
});