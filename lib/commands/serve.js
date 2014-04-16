'use strict';

var chalk   = require('chalk');
var assign  = require('lodash-node/modern/objects/assign');
var Command = require('../command');

module.exports = new Command({
  aliases: ['server', 's'],

  availableOptions: [
    { name: 'port', type: Number, default: 4200 },
    { name: 'host', type: String, default: '0.0.0.0' },
    { name: 'proxy-port',  type: Number },
    { name: 'proxy-host',  type: String },
    { name: 'environment', type: String, default: 'development' }
  ],

  run: function(environment, options) {
    options = assign({}, options, {
      liveReloadPort: options.port - 4200 + 35729
    });
    return environment.tasks.serve.run(environment, options);
  },

  usageInstructions: function() {
    return 'ember serve\n' +
    chalk.green('      --port') + ' (Default: 4200)\n' +
    chalk.green('      --host') + ' (Default: 0.0.0.0)\n' +
    chalk.green('      --environment') + ' (Default: \'development\') [Options: development|production]\n' +
    chalk.green('      --proxy-port') + ' (Default: none)\n' +
    chalk.green('      --proxy-host') + ' (Default: none)\n';
  }
});
