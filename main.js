var fs = require('fs'),
fileActions = require('./fileactions.js');

fs.readFile("./info.json", 'utf8', fileActions);



