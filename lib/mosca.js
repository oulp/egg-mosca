'use strict';

const assert = require('assert');
const mosca = require('mosca');

module.exports = app => {
  app.addSingleton('mosca', createMosca);
};

function createMosca(config, app) {
  const { port } = config;
  // assert(config.port);
  var ascoltatore = {
    //using ascoltatore
    // type: 'mongo',
    // url: 'mongodb://localhost:27017/mqtt',
    // pubsubCollection: 'ascoltatori',
    // mongo: {}
  };

  var settings = {
    port: port || 1883,
    backend: ascoltatore
  };

  var server = new mosca.Server(settings);

  // server.on('clientConnected', function(client) {
  //   app.logger.info('client connected', client.id);
  // });

  // server.on('clientDisconnected', function(client) {
  //   app.logger.info('Client Disconnected:', client.id);
  // });

  // fired when a message is received
  // server.on('published', function(packet, client) {
  //   app.logger.info('Published', packet.payload);
  // });

  server.on('ready', setup);

  // fired when the mqtt server is ready
  function setup() {
    app.logger.info('Mosca server is up and running on ' + port);
  }

  return server;
}
