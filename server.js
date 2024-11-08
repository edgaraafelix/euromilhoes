'use strict';

const Hapi = require('@hapi/hapi');

const Init = async () => {
  // Create Server
  const Server = new Hapi.Server({
    host: 'localhost',
    port: 9000
  });

  // Register Plugins
  await Server.register(require('@hapi/vision'));
  await Server.register(require('@hapi/inert'));

  // Register Services
  await Server.register(require('./lib/services'));

  // Register Routes
  await Server.register(require('./lib/routes'));

  // Views Configuration
  Server.views({
    engines: {
      html: require('handlebars')
    },
    relativeTo: __dirname,
    path: './lib/views',
    layoutPath: './lib/views/layouts',
    layout: 'default',
    isCached: false
  });

  // Start Server
  await Server.start();

  console.log('[NOTICE] Server running at', Server.info.uri);
}

Init();
