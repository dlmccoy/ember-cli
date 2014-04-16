'use strict';

var chalk   = require('chalk');
var path    = require('path');
var Command = require('../command');

module.exports = new Command({
  availableOptions: [
    { name: 'output-path', type: path, default: 'dist/' }
  ],

  run: function(environment, options) {
    return environment.tasks.build.run(environment, options);
  },

  usageInstructions: function() {
    return 'ember build <' + chalk.green('env-name') +
      ' (Default: \'development\')> <' + chalk.green('target-path') +
      ' (Default: \'dist/\')>';
  }
});
