
const {readFileSync,writeFileSync} = require('fs'); // This initializes two variables with same values

const firstFile = readFileSync('./content/first.txt', 'utf8');
const secondFile = readFileSync('./content/second.txt', 'utf8');

const result = firstFile + secondFile;

writeFileSync('./content/result.txt', result,{flag:'a'});
const resultFile = readFileSync('./content/result.txt', 'utf8');
console.log(resultFile);
 