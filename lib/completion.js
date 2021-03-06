/* jshint node: true */

'use strict';

var fs = require('fs');
var path = require('path');

module.exports = function(name) {
    var filepath = path.join(__dirname, '../completion', name);
    try {
        console.log(fs.readFileSync(filepath, 'utf8'));
        process.exit(0);
    } catch (err) {
        console.log('echo "Specified gulp shell auto-completion rules for \''+name+'\' not found"');
        process.exit(5);
    }
};
