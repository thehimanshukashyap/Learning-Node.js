//In CommonJs every file is module by default
//Modules - encapsulated Code (Only share the minimum)

const names = require('./3-names');
const sayHi = require('./4-util');
const data = require('./5-alternative-flavour');
require('./6-mind-granade');

// console.log(data.singlePerson)

// sayHi(names.peter) // Hello peter. Hope you are doing good.