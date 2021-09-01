// Modules
const names = require('./04-constants');
const sayHi = require('./05-utils');
const data = require('./06-alternative-flavor');

require('./07-mind-grenade');

sayHi('Foo');
sayHi(names.peter);
sayHi(names.carlos);

console.log(data);