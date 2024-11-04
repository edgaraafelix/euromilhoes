'use strict';

exports.plugin = {
  name: 'services',
  register: async (server, options) => {
    let services = [].concat(
      require('./generator')
    );

    server.method(services);
  }
}
