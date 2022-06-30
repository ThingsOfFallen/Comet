const {textSync} = require('figlet');
const { green } = require('chalk');
console.log(green(textSync('Comet  Bot', { horizontalLayout: 'fitted' })));
require('./src/Manager.js');

