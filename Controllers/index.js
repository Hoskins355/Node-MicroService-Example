var properties = require('../package.json')

var controllers = {
    about: function(req, res) {
        var aboutInfo = {
            name: properties.name,
            version: properties.version
        }
        res.json(aboutInfo);
    },
    healthCheck: function(req, res) {
        res.status(200);
        res.send("Service is up and healthy");
    },
};

module.exports = controllers;
