'use strict';

var controller = require('../Controllers');

module.exports = function (app) {
    app.route('/about')
        .get(controller.about);
    app.route('/healthcheck')
        .get(controller.healthCheck);
};
