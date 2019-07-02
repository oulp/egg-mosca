'use strict';

const mosca = require('./lib/mosca');

module.exports = app => {
  if (app.config.mosca.app) mosca(app);
};
