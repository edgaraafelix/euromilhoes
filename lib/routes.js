'use strict';

exports.plugin = {
  name: 'routes',
  register: async (server, options) => {
    server.route([
      {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
          return h.view('index', server.methods.services.generator.random());
        }
      },
      {
        method: 'GET',
        path: '/public/{path*}',
        handler: {
          directory: {
            path: './build/assets'
          }
        }
      }
    ]);
  }
}
